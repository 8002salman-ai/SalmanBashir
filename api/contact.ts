import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  BAD,
  OK,
  clientIp,
  hashIp,
  logActivity,
  parseBody,
  isSpam,
  rateLimit,
  sanitizeField,
  sendAdminEmail,
  sendVisitorEmail,
  serviceSupabase,
} from "./_shared.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return BAD(res, "Method not allowed", 405);

  const ip = clientIp(req);
  if (!rateLimit(`contact:${hashIp(ip)}`, 5, 60_000)) {
    return BAD(res, "Too many submissions. Please wait a minute and try again.", 429);
  }

  const body = parseBody(req.body);
  if (isSpam(body)) {
    // Respond neutrally to bots; never confirm a fake success.
    return OK(res, "Thanks for your message.");
  }

  const submission = {
    name: sanitizeField(body.name, 200),
    email: sanitizeField(body.email, 200),
    business: sanitizeField(body.business, 300) || null,
    country: sanitizeField(body.country, 200) || null,
    marketplace: sanitizeField(body.marketplace, 300) || null,
    service: sanitizeField(body.service, 300) || null,
    budget: sanitizeField(body.budget, 200) || null,
    meeting_method: sanitizeField(body.meetingMethod, 200) || null,
    message: sanitizeField(body.message, 5000) || null,
  };

  // 1. Store in Supabase (service role). Best-effort.
  let storedId: string | null = null;
  const sb = serviceSupabase();
  if (sb) {
    try {
      const { data, error } = await sb
        .from("contact_submissions")
        .insert({ ...submission, ip_hash: hashIp(ip) })
        .select("id")
        .single();
      if (!error && data) storedId = data.id;
    } catch {
      storedId = null;
    }
  }

  // 2. Send through Resend to the admin inbox.
  const to = process.env.CONTACT_TO_EMAIL || "";
  const lines = [
    `New contact submission${submission.name ? ` from ${submission.name}` : ""}.`,
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.business && `Business: ${submission.business}`,
    submission.country && `Country: ${submission.country}`,
    submission.marketplace && `Marketplace: ${submission.marketplace}`,
    submission.service && `Service: ${submission.service}`,
    submission.budget && `Budget: ${submission.budget}`,
    submission.meeting_method && `Meeting method: ${submission.meeting_method}`,
    submission.message && "",
    submission.message && `Message:\n${submission.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const adminEmail = to
    ? await sendAdminEmail({
        to,
        subject: `Contact inquiry from ${submission.name}`,
        text: lines,
      })
    : { ok: false, error: "CONTACT_TO_EMAIL not set" };

  // 3. Acknowledge the visitor.
  const ack = await sendVisitorEmail({
    to: submission.email,
    subject: "Thanks for reaching out",
    text: [
      `Hi ${submission.name},`,
      "",
      "Thanks for getting in touch through salmanbashir.vercel.app.",
      "I've received your message and will reply personally as soon as I can.",
      "",
      "— Salman Bashir",
      "E-commerce Operations & Business Automation Consultant",
    ].join("\n"),
  });

  // 4. Log safely.
  await logActivity(ip, null, "contact_submitted", {
    id: storedId,
    email_confirmed: Boolean(ack.ok),
  });

  // Success is only reported after storage and admin email attempt.
  if (!storedId && !adminEmail.ok) {
    return BAD(res, "We couldn't submit your message right now. Please try again shortly.", 503);
  }

  return OK(res, "Thanks! Your message is being sent.");
}
