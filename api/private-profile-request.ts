import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  BAD,
  OK,
  clientIp,
  hashIp,
  isValidEmail,
  logActivity,
  parseBody,
  isSpam,
  rateLimit,
  sanitizeField,
  sendAdminEmail,
  sendVisitorEmail,
  serviceSupabase,
} from "./_shared.js";

/* Private Profile Access request. Server-side only: verifies the visitor's
   Supabase session, stores the request with the service role (RLS-safe),
   emails Salman for manual review and acknowledges the requester. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return BAD(res, "Method not allowed", 405);

  const ip = clientIp(req);
  if (!rateLimit(`private-profile:${hashIp(ip)}`, 5, 60_000)) {
    return BAD(res, "Too many requests. Please wait a minute and try again.", 429);
  }

  const body = parseBody(req.body);
  if (isSpam(body)) {
    // Respond neutrally to bots; never confirm a fake success.
    return OK(res, "Thanks for your request.");
  }

  const sb = serviceSupabase();

  // Require a verified signed-in user, matching the UI gate. The browser
  // only renders the form after sign-in; this check cannot be bypassed
  // by editing the frontend.
  let userEmail: string | null = null;
  if (sb) {
    const authHeader = req.headers.authorization ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    try {
      const { data } = await sb.auth.getUser(token);
      if (!data?.user) {
        return BAD(res, "Please sign in to request access.", 401);
      }
      userEmail = data.user.email ?? null;
    } catch {
      return BAD(res, "Please sign in to request access.", 401);
    }
  }

  const submission = {
    name: sanitizeField(body.name, 200),
    email: sanitizeField(body.email, 200),
    company: sanitizeField(body.company, 300) || null,
    reason: sanitizeField(body.reason, 300) || null,
    message: sanitizeField(body.message, 5000) || null,
  };

  if (submission.name.length < 2 || !isValidEmail(submission.email)) {
    return BAD(res, "Please provide a valid name and email.");
  }
  if (!submission.message || submission.message.length < 10) {
    return BAD(res, "Please explain why you're requesting access.");
  }

  // 1. Store in Supabase (service role). Best-effort.
  let storedId: string | null = null;
  if (sb) {
    try {
      const { data, error } = await sb
        .from("private_profile_requests")
        .insert({
          ...submission,
          user_email: userEmail,
          ip_hash: hashIp(ip),
          status: "pending",
        })
        .select("id")
        .single();
      if (!error && data) storedId = data.id;
    } catch {
      storedId = null;
    }
  }

  // 2. Notify Salman through Resend for manual review.
  const to = process.env.CONTACT_TO_EMAIL || "";
  const lines = [
    `New private profile access request${submission.name ? ` from ${submission.name}` : ""}.`,
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.company && `Company / organization: ${submission.company}`,
    submission.reason && `Reason: ${submission.reason}`,
    userEmail && `Signed-in account: ${userEmail}`,
    "",
    `Message:\n${submission.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const adminEmail = to
    ? await sendAdminEmail({
        to,
        subject: `Private profile access request from ${submission.name}`,
        text: lines,
      })
    : { ok: false, error: "CONTACT_TO_EMAIL not set" };

  // 3. Acknowledge the requester.
  const ack = await sendVisitorEmail({
    to: submission.email,
    subject: "We received your access request",
    text: [
      `Hi ${submission.name},`,
      "",
      "Thanks for requesting private profile access through salmanbashir.vercel.app.",
      "Your request has been received and is under review. If access is appropriate, I'll reach out directly.",
      "",
      "— Salman Bashir",
      "E-commerce Operations & Business Automation Consultant",
    ].join("\n"),
  });

  // 4. Log safely.
  await logActivity(ip, userEmail, "private_profile_requested", {
    id: storedId,
    email_confirmed: Boolean(ack.ok),
  });

  // Success is only reported after storage and admin email attempt.
  if (!storedId && !adminEmail.ok) {
    return BAD(res, "We couldn't submit your request right now. Please try again shortly.", 503);
  }

  return OK(res, "Your request has been received and is under review.");
}
