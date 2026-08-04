# Cloudflare Email Setup

This document explains how to receive site email through Cloudflare Email Routing and how to point your domain's DNS at the site. **It intentionally does not list DNS values — those depend on your domain and Cloudflare account and must be filled in by you.**

## Background

The site is currently deployed at `https://salmanbashir.vercel.app` (Vercel's domain). If you want a custom domain like `salmanbashir.com`, you manage DNS where your domain is registered — typically at Cloudflare. Cloudflare Email Routing can also forward a catch-all inbox (e.g. `hello@yourdomain.com`) to a personal Gmail address.

## Prerequisites

- A domain you control, with nameservers pointed at Cloudflare (so DNS is managed there).
- A verified recipient inbox (e.g. `8002salman@gmail.com` or `basco.pk@gmail.com`) for forwarded mail.

## Email Routing (receive mail at your domain)

1. In Cloudflare, open your domain and go to **Email → Email Routing**.
2. Click **Get started**.
3. Add a destination address (the Gmail address that receives forwarded mail) and verify it by clicking the link in the confirmation email.
4. Add **Routing rules** to forward a specific address (e.g. `hello@yourdomain.com`) or a catch-all (`*`) to the destination.
5. Cloudflare will show you the MX and TXT records to add. **Add the exact values Cloudflare shows you** — do not guess them. Once added, enable Email Routing.

After this, mail sent to `hello@yourdomain.com` lands in your Gmail inbox.

> Note: You are not required to do this now. It is a later, optional step. The site already works with the Vercel domain and the Resend sender configured in `docs/RESEND_SETUP.md`.

## Custom domain for the site (optional)

To serve the site on a custom domain:

1. In **Vercel → Project → Settings → Domains**, add your domain. Vercel will tell you exactly which DNS records to create in Cloudflare.
2. Add those records in Cloudflare (as shown by Vercel — again, use the exact values provided, do not invent them).
3. Wait for propagation, then Vercel will verify the domain.

## Keep in mind

- Emails that matter (contact, bookings) are already sent by Resend from the sender configured in Vercel — Cloudflare email routing is only for *receiving* mail at a custom domain.
- The site does not hard-code any Cloudflare DNS values; nothing in this repo assumes a custom domain. The canonical URL used in SEO is `https://salmanbashir.vercel.app/` (`APP_URL` in `.env.example`), so you can complete Cloudflare later without code changes.
