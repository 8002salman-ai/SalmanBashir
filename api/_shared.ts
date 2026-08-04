import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { createHash } from "crypto";
import type { VercelResponse } from "@vercel/node";

export const OK = (res: VercelResponse, message: string, extra: Record<string, unknown> = {}) =>
  res.status(200).json({ ok: true, message, ...extra });

export const BAD = (res: VercelResponse, message: string, status = 400) =>
  res.status(status).json({ ok: false, message });

const env = (name: string) => process.env[name] ?? "";

export const supabaseUrl = () => env("VITE_SUPABASE_URL");
export const serviceKey = () => env("SUPABASE_SERVICE_ROLE_KEY");

/* Service-role client: server-side only. Bypasses RLS by design. */
export function serviceSupabase(): SupabaseClient | null {
  const url = supabaseUrl();
  const key = serviceKey();
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function resendClient(): Resend | null {
  const key = env("RESEND_API_KEY");
  return key ? new Resend(key) : null;
}

export function hashIp(ip: string | undefined): string {
  if (!ip) return "unknown";
  return createHash("sha256").update(ip + "salman-bashir-portfolio-pepper").digest("hex").slice(0, 16);
}

export function clientIp(req: { headers: Record<string, string | string[] | undefined> }): string {
  const fwd = req.headers["x-forwarded-for"];
  const v = Array.isArray(fwd) ? fwd[0] : fwd;
  return (v ?? "unknown").split(",")[0].trim();
}

/* Simple email validation */
export function isValidEmail(email: string): boolean {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/* Length caps to discourage abuse */
export function sanitizeField(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/* Best-effort in-memory rate limiter (per instance). Real deployments
   should use an external store; this still blocks obvious abuse. */
const buckets = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= limit;
}

export async function logActivity(ip: string, email: string | null, action: string, details: Record<string, unknown> = {}) {
  const sb = serviceSupabase();
  if (!sb) return;
  try {
    await sb.from("activity_logs").insert({
      ip_hash: hashIp(ip),
      email,
      action,
      details,
    });
  } catch {
    /* best-effort */
  }
}

/* Resend helpers. Never expose these in browser code. */
export async function sendAdminEmail(opts: {
  to: string;
  subject: string;
  text: string;
}): Promise<{ ok: boolean; error?: string }> {
  const client = resendClient();
  const from = env("CONTACT_FROM_EMAIL") || "Salman Bashir <onboarding@resend.dev>";
  if (!client) return { ok: false, error: "Resend not configured" };
  const { error } = await client.emails.send({
    from,
    to: [opts.to],
    subject: opts.subject,
    text: opts.text,
  });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export async function sendVisitorEmail(opts: {
  to: string;
  subject: string;
  text: string;
}): Promise<{ ok: boolean; error?: string }> {
  const client = resendClient();
  const from = env("CONTACT_FROM_EMAIL") || "Salman Bashir <onboarding@resend.dev>";
  if (!client) return { ok: false, error: "Resend not configured" };
  const { error } = await client.emails.send({
    from,
    to: [opts.to],
    subject: opts.subject,
    text: opts.text,
  });
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

export function parseBody(body: unknown): Record<string, unknown> {
  if (body && typeof body === "object") return body as Record<string, unknown>;
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  return {};
}

export function isSpam(body: Record<string, unknown>): boolean {
  // Honeypot: bots fill the hidden company_website field
  if (body.company_website) return true;
  // Basic checks
  const name = sanitizeField(body.name);
  const email = sanitizeField(body.email);
  if (!name || name.length < 2) return true;
  if (!isValidEmail(email)) return true;
  if (sanitizeField(body.message).length > 5000) return true;
  return false;
}
