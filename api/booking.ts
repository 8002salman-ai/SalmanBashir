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
  if (!rateLimit(`booking:${hashIp(ip)}`, 5, 60_000)) {
    return BAD(res, "Too many requests. Please wait a minute and try again.", 429);
  }

  const body = parseBody(req.body);
  if (isSpam(body)) {
    return OK(res, "Thanks for your booking request.");
  }

  const booking = {
    name: sanitizeField(body.name, 200),
    email: sanitizeField(body.email, 200),
    country: sanitizeField(body.country, 200) || null,
    business: sanitizeField(body.business, 300) || null,
    service: sanitizeField(body.service, 300),
    preferred_date: sanitizeField(body.preferredDate, 30) || null,
    preferred_time: sanitizeField(body.preferredTime, 20) || null,
    timezone: sanitizeField(body.timezone, 100) || null,
    duration: sanitizeField(body.duration, 100) || null,
    meeting_method: sanitizeField(body.meetingMethod, 200) || null,
    notes: sanitizeField(body.notes, 2000) || null,
    status: "pending",
  };

  let storedId: string | null = null;
  const sb = serviceSupabase();
  if (sb) {
    try {
      const { data, error } = await sb
        .from("consultation_bookings")
        .insert({ ...booking, ip_hash: hashIp(ip) })
        .select("id")
        .single();
      if (!error && data) storedId = data.id;
    } catch {
      storedId = null;
    }
  }

  const to = process.env.BOOKING_TO_EMAIL || "";
  const lines = [
    `New booking request from ${booking.name}.`,
    "",
    `Name: ${booking.name}`,
    `Email: ${booking.email}`,
    booking.country && `Country: ${booking.country}`,
    booking.business && `Business: ${booking.business}`,
    `Service: ${booking.service}`,
    booking.preferred_date && `Preferred date: ${booking.preferred_date}`,
    booking.preferred_time && `Preferred time: ${booking.preferred_time}`,
    booking.timezone && `Time zone: ${booking.timezone}`,
    booking.duration && `Session duration: ${booking.duration}`,
    booking.meeting_method && `Meeting method: ${booking.meeting_method}`,
    booking.notes && "",
    booking.notes && `Notes: ${booking.notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  const adminEmail = to
    ? await sendAdminEmail({
        to,
        subject: `Booking request from ${booking.name}`,
        text: lines,
      })
    : { ok: false, error: "BOOKING_TO_EMAIL not set" };

  const ack = await sendVisitorEmail({
    to: booking.email,
    subject: "We received your booking request",
    text: [
      `Hi ${booking.name},`,
      "",
      "Thanks for your booking request for: " + booking.service + ".",
      "",
      "Your request is now pending review. Nothing is confirmed until I approve it and share meeting details — your booking status is: pending review.",
      "",
      "You'll hear from me personally with either approval and a meeting link, or a suggestion for a better time.",
      "",
      "— Salman Bashir",
    ].join("\n"),
  });

  await logActivity(ip, null, "booking_requested", {
    id: storedId,
    service: booking.service,
    acknowledged: Boolean(ack.ok),
  });

  if (!storedId && !adminEmail.ok) {
    return BAD(res, "We couldn't submit your booking right now. Please try again shortly.", 503);
  }

  return OK(res, "Booking request received. It is pending review — I'll confirm with meeting details after approval.");
}
