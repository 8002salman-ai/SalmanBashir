# Resend Setup

The contact and booking flows email the site owner and visitors through **Resend**, called only from the Vercel serverless functions in `/api`. Resend keys never touch the browser.

## 1. Create a Resend account and an API key

1. Go to https://resend.com and sign up.
2. Open **API Keys** and create a key with *Sending access*.
3. Copy the key — you'll set it as `RESEND_API_KEY` in Vercel. It is secret.

## 2. Verify a sending domain (recommended)

For production emails from your own address:

1. In Resend open **Domains** and add the domain you want to send from.
2. Resend shows DNS records to add to your DNS provider. Add them, then verify.
3. The sending address becomes `you@yourdomain.com`.

> Until a domain is verified you can test with the shared `onboarding@resend.dev` sender, which only sends to your own account email. The server falls back to that sender automatically when `CONTACT_FROM_EMAIL` is not set.

## 3. Environment variables (Vercel)

Set these in **Vercel → Project → Settings → Environment Variables**:

- `RESEND_API_KEY` — required
- `CONTACT_FROM_EMAIL` — e.g. `Salman Bashir <hello@yourdomain.com>` (falls back to Resend onboarding sender)
- `CONTACT_TO_EMAIL` — where contact inquiries go, e.g. `basco.pk@gmail.com`
- `BOOKING_TO_EMAIL` — where booking requests go, e.g. `basco.pk@gmail.com`

## 4. Emails that are sent

- **Contact** — inquiry to `CONTACT_TO_EMAIL` + a brief acknowledgement to the visitor
- **Booking request** — request to `BOOKING_TO_EMAIL` + a "pending review" acknowledgement to the visitor
- **Approved** — visitor is told the request was approved
- **Rescheduled** — visitor is told the request is back under review with the new date/time
- **Meeting link** — the confirmation email with your manually added Zoom/Meet/custom link (sent only after approval)
- **Cancellation** — visitor is told the session was cancelled

A visitor is never told a call is confirmed before you send the confirmation with a meeting link. If email sending fails, the API returns an error — there is no fake success.

## 5. Testing

1. Deploy and open `/contact`.
2. Submit the form. Check that:
   - the site shows "Message sent"
   - `CONTACT_TO_EMAIL` receives the inquiry
   - the visitor receives the acknowledgement
3. Do the same on `/book`, then approve the booking from the admin dashboard and confirm you receive the meeting-link email.
4. To test the error path, temporarily remove `RESEND_API_KEY` in Vercel and resubmit — the form must show an honest error and no success message.
