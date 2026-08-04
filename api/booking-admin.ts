import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  BAD,
  OK,
  clientIp,
  logActivity,
  parseBody,
  sanitizeField,
  sendVisitorEmail,
  serviceSupabase,
} from "./_shared";

/* Admin-only booking actions. Verifies the Supabase JWT server-side and
   checks the profile role before any change or email is sent. */

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return BAD(res, "Method not allowed", 405);

  const ip = clientIp(req);
  const auth = req.headers.authorization ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  const sb = serviceSupabase();
  if (!sb) return BAD(res, "Supabase is not configured on the server.", 503);

  // 1. Verify the caller's session
  let user;
  try {
    const { data, error } = await sb.auth.getUser(token);
    if (error || !data.user) return BAD(res, "Unauthorized.", 401);
    user = data.user;
  } catch {
    return BAD(res, "Unauthorized.", 401);
  }

  // 2. Check admin role (service client bypasses RLS on purpose)
  const { data: profile } = await sb
    .from("profiles")
    .select("role, email")
    .eq("id", user.id)
    .maybeSingle();
  if (!profile || profile.role !== "admin") {
    await logActivity(ip, user.email ?? null, "admin_action_denied", { reason: "not admin" });
    return BAD(res, "Forbidden.", 403);
  }

  const body = parseBody(req.body);
  const id = sanitizeField(body.id, 100);
  const action = sanitizeField(body.action, 50);
  if (!id || !action) return BAD(res, "Missing booking id or action.");

  const { data: booking } = await sb
    .from("consultation_bookings")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (!booking) return BAD(res, "Booking not found.", 404);

  const meetingLink = sanitizeField(body.meetingLink, 500);
  const adminNotes = sanitizeField(body.adminNotes, 2000);
  const newDate = sanitizeField(body.preferredDate, 30);
  const newTime = sanitizeField(body.preferredTime, 20);
  const newDuration = sanitizeField(body.duration, 100);

  const update: Record<string, unknown> = {};
  if (meetingLink) update.meeting_link = meetingLink;
  if (adminNotes) update.admin_notes = adminNotes;

  let email: { to: string; subject: string; text: string } | null = null;

  switch (action) {
    case "approve":
      update.status = "approved";
      update.sent_confirmation = false;
      email = {
        to: booking.email,
        subject: "Your session with Salman is approved",
        text: [
          `Hi ${booking.name},`,
          "",
          `Good news — your ${booking.service} session is approved.`,
          meetingLink
            ? `Meeting link: ${meetingLink}`
            : "I'll share the meeting link with you shortly.",
          newDate && `Date: ${newDate}`,
          newTime && `Time: ${newTime}`,
          adminNotes && "",
          adminNotes && `Notes: ${adminNotes}`,
          "",
          "— Salman Bashir",
        ].filter(Boolean).join("\n"),
      };
      break;
    case "reject":
      update.status = "rejected";
      email = {
        to: booking.email,
        subject: "About your booking request",
        text: [
          `Hi ${booking.name},`,
          "",
          "Thank you for your booking request. Unfortunately I'm not able to take this session forward as requested.",
          adminNotes && "",
          adminNotes && `Notes: ${adminNotes}`,
          "",
          "I'd still be glad to help — you're welcome to send another request or reach out via the contact page.",
          "",
          "— Salman Bashir",
        ].filter(Boolean).join("\n"),
      };
      break;
    case "reschedule":
      update.status = "pending";
      if (newDate) update.preferred_date = newDate;
      if (newTime) update.preferred_time = newTime;
      if (newDuration) update.duration = newDuration;
      email = {
        to: booking.email,
        subject: "Your session has been rescheduled",
        text: [
          `Hi ${booking.name},`,
          "",
          `Your ${booking.service} session has been rescheduled.`,
          newDate && `New date: ${newDate}`,
          newTime && `New time: ${newTime}`,
          newDuration && `Duration: ${newDuration}`,
          adminNotes && "",
          adminNotes && `Notes: ${adminNotes}`,
          "",
          "I'll confirm once the final time is set.",
          "",
          "— Salman Bashir",
        ].filter(Boolean).join("\n"),
      };
      break;
    case "meeting_link":
      if (!meetingLink) return BAD(res, "Meeting link is required for this action.");
      update.sent_confirmation = true;
      email = {
        to: booking.email,
        subject: "Your meeting link",
        text: [
          `Hi ${booking.name},`,
          "",
          `Your ${booking.service} session is set.`,
          `Meeting link: ${meetingLink}`,
          adminNotes && "",
          adminNotes && `Notes: ${adminNotes}`,
          "",
          "— Salman Bashir",
        ].filter(Boolean).join("\n"),
      };
      break;
    case "send_confirmation":
      update.sent_confirmation = true;
      update.status = booking.status === "pending" ? "approved" : booking.status;
      email = {
        to: booking.email,
        subject: "Your session is confirmed",
        text: [
          `Hi ${booking.name},`,
          "",
          `Your ${booking.service} session is confirmed.`,
          meetingLink ? `Meeting link: ${meetingLink}` : "I'll share the meeting link before the session.",
          booking.preferred_date && `Date: ${booking.preferred_date}`,
          booking.preferred_time && `Time: ${booking.preferred_time}`,
          adminNotes && "",
          adminNotes && `Notes: ${adminNotes}`,
          "",
          "— Salman Bashir",
        ].filter(Boolean).join("\n"),
      };
      break;
    case "mark_complete":
      update.status = "completed";
      break;
    default:
      return BAD(res, "Unknown action.");
  }

  const { error: updateError } = await sb
    .from("consultation_bookings")
    .update(update)
    .eq("id", id);
  if (updateError) return BAD(res, "Could not update the booking.", 500);

  if (email) {
    const result = await sendVisitorEmail(email);
    if (!result.ok) {
      await logActivity(ip, user.email ?? null, "booking_updated", { id, action, email_sent: false });
      // The update succeeded; report the email problem without faking success.
      return OK(res, "Booking updated, but the confirmation email could not be sent.", { emailSent: false });
    }
  }

  await logActivity(ip, user.email ?? null, "booking_updated", { id, action });

  return OK(res, "Booking updated.", { emailSent: email ? true : undefined });
}
