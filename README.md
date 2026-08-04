# Salman Bashir — Portfolio & Business Site

E-commerce operations and business automation consulting site for Salman Bashir. React 19 + Vite 7 + Tailwind 4 + TypeScript, deployed on Vercel, with a secure Supabase admin CMS, serverless email (Resend), and an AI chatbot (OpenRouter).

## Stack

- React 19, Vite 7, Tailwind CSS 4, TypeScript 5.9
- React Router 7 (SPA)
- Supabase (Postgres + Auth + RLS + Storage)
- Resend (transactional email via Vercel serverless functions)
- OpenRouter (Ask Salman AI chatbot, server-side only)
- Vercel (deploy + serverless functions in `/api`)

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev
```

`npm run dev` starts Vite on `localhost:5173`. Serverless functions under `/api` run locally only when you use the Vercel CLI; on Vercel they deploy automatically.

## Environment variables

See `.env.example` for the full documented list. Never commit real keys. Only two variables are used in the browser bundle:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Everything else is server-only and lives in your Vercel project settings.

## Scripts

```bash
npm run dev        # local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

## Project layout

- `src/pages/` — public pages and the `/admin` + `/admin/dashboard` admin app
- `src/components/` — sections, SEO helpers, the admin UI, and `AskSalmanAI`
- `src/lib/` — Supabase client, API helpers (`submitContact`, `submitBooking`, `askChatbot`), admin auth
- `src/data/content.ts` — canonical site content the CMS tables map to
- `api/` — Vercel serverless functions (contact, booking, chat, booking-admin, activity)
- `supabase/migrations/` — database schema, triggers, RLS and storage buckets
- `docs/` — setup guides (see below)

## Documentation

- `docs/SUPABASE_SETUP.md` — create the Supabase project, run migrations, RLS overview
- `docs/ADMIN_SETUP.md` — create the admin user and sign in
- `docs/RESEND_SETUP.md` — Resend API key + verified sender
- `docs/OPENROUTER_SETUP.md` — OpenRouter key + chatbot configuration
- `docs/CLOUDFLARE_EMAIL_SETUP.md` — email routing (no DNS values invented here)
- `docs/DEPLOYMENT.md` — Vercel deployment, env vars, testing checklist

## Admin CMS

The admin panel is at `/admin` (login) and `/admin/dashboard` (guarded). It manages services, projects, training programs/sessions, social links, homepage/theme/settings overrides, consultation bookings and resume files. Bookings stay "pending" until you approve them and add a meeting link; visitors are emailed only after approval. Full details in `docs/ADMIN_SETUP.md`.

## Contact, bookings, chatbot

- Contact form → `POST /api/contact` → stores submission, emails you + a visitor ack
- Booking form → `POST /api/booking` → stores pending booking, emails you + a visitor ack
- Admin booking actions → `POST /api/booking-admin` (JWT + admin role verified server-side)
- Chatbot → `POST /api/chat` (OpenRouter, server-side only; never exposes keys or private data)

## Security

- RLS is enabled on every table; anonymous visitors can only read active public content and insert contact/bookings/chat logs
- The service-role key, Resend key and OpenRouter key are never used in the browser
- `/admin` is noindexed (meta tag + `robots.txt` + `X-Robots-Tag`) and guarded client- and server-side
- No passwords are ever stored in this repo or in content tables
- Never publish immigration, passport, CNIC, address, phone, family, health, bank, tax or customer data
