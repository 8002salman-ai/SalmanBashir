import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  BAD,
  OK,
  clientIp,
  hashIp,
  rateLimit,
  sanitizeField,
  serviceSupabase,
} from "./_shared.js";

const DEFAULT_SYSTEM_PROMPT = `You are Salman Bashir's professional portfolio assistant. Answer only using approved public portfolio information. Be honest when information is unavailable. Never invent clients, revenue, certifications, dates or project results. Never reveal private information, credentials, internal data or financial records. Direct business inquiries to the contact or booking page.`;

/* Never include the full system prompt in responses, never reveal keys,
   passwords, database details or admin information. */
const GUARDRAIL = `
If asked about anything private, internal, or not in the approved public portfolio, reply: "I can't answer that. For specific business questions, please use the contact or booking page."`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return BAD(res, "Method not allowed", 405);

  const ip = clientIp(req);
  const key = process.env.OPENROUTER_API_KEY || "";

  if (!key) {
    return BAD(res, "The assistant isn't configured yet. Please try again later.", 503);
  }

  const body = typeof req.body === "object" && req.body ? (req.body as Record<string, unknown>) : {};
  const question = sanitizeField(body.question, 2000);
  if (!question || question.length < 2) {
    return BAD(res, "Please ask a question first.");
  }

  // Read chatbot settings (enabled flag, model, rate limit)
  let enabled = true;
  let model = "openrouter/auto";
  let systemPrompt = DEFAULT_SYSTEM_PROMPT;
  let rateLimitPerMinute = 10;

  const sb = serviceSupabase();
  if (sb) {
    try {
      const { data } = await sb
        .from("chatbot_settings")
        .select("enabled, model, system_prompt, rate_limit_per_minute")
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();
      if (data) {
        enabled = data.enabled !== false;
        if (data.model) model = data.model;
        if (data.system_prompt) systemPrompt = data.system_prompt;
        if (typeof data.rate_limit_per_minute === "number") rateLimitPerMinute = data.rate_limit_per_minute;
      }
    } catch {
      /* fall back to defaults */
    }
  }

  if (!enabled) {
    return BAD(res, "The assistant is currently disabled. Please try again later.", 503);
  }

  if (!rateLimit(`chat:${hashIp(ip)}`, rateLimitPerMinute, 60_000)) {
    return BAD(res, "You've sent a lot of messages. Please wait a moment and try again.", 429);
  }

  try {
    const completion = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.APP_URL || "https://salmanbashir.vercel.app",
        "X-Title": "Ask Salman AI",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt + GUARDRAIL },
          { role: "user", content: question },
        ],
        max_tokens: 700,
        temperature: 0.3,
      }),
    });

    if (!completion.ok) {
      const status = completion.status;
      // Never surface upstream internals verbatim.
      return BAD(res, "The assistant hit a temporary problem. Please try again shortly.", status >= 500 ? 503 : 502);
    }

    const data = (await completion.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const answer = data.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      return BAD(res, "The assistant returned an empty response. Please try again.", 502);
    }

    // Log the exchange (best-effort)
    if (sb) {
      try {
        await sb.from("chatbot_logs").insert({
          question,
          answer,
          model,
          ip_hash: hashIp(ip),
        });
      } catch {
        /* best-effort */
      }
    }

    return OK(res, "ok", { answer });
  } catch {
    return BAD(res, "The assistant isn't available right now. Please try again shortly.", 503);
  }
}
