# Deployment (Vercel)

The site is a Vite SPA with serverless functions in `/api`. It deploys to Vercel.

## 1. Connect the repository

1. Push this repository to GitHub (`git push origin main`).
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset: **Vite** (Vercel detects it automatically).

## 2. Environment variables

Add every variable from `.env.example` in **Vercel → Project → Settings → Environment Variables**:

| Variable | Where used | Browser? |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | Supabase client | yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase client | yes |
| `SUPABASE_SERVICE_ROLE_KEY` | `/api` serverless | no |
| `RESEND_API_KEY` | `/api` serverless | no |
| `CONTACT_FROM_EMAIL` | contact/booking emails | no |
| `CONTACT_TO_EMAIL` | contact emails (e.g. `basco.pk@gmail.com`) | no |
| `BOOKING_TO_EMAIL` | booking emails (e.g. `basco.pk@gmail.com`) | no |
| `OPENROUTER_API_KEY` | chatbot `/api/chat` | no |
| `APP_URL` | canonical/OG URLs (default `https://salmanbashir.vercel.app`) | build |

Only the two `VITE_` variables are bundled into the browser. Everything else stays on the server.

## 3. Deploy

- Deploy on push to `main`. Each deploy runs `npm run build` (Vite), then Vercel compiles `api/*.ts` into serverless functions automatically (`@vercel/node`).
- `vercel.json` handles SPA rewrites (everything except `api/*`, assets, branding, favicon, og-image, robots.txt, sitemap.xml → `index.html`), so deep links and direct refreshes work, and `/admin` works client-side.
- Security headers are set globally; `/admin` also gets `X-Robots-Tag: noindex, nofollow`.

## 4. Pre-flight checklist

Before you promote to production:

- Supabase project created and migrations `0001`–`0004` applied (see `docs/SUPABASE_SETUP.md`)
- Admin account created and promoted (see `docs/ADMIN_SETUP.md`)
- Resend key + sender verified (see `docs/RESEND_SETUP.md`)
- OpenRouter key set (see `docs/OPENROUTER_SETUP.md`)

## 5. Testing after deploy

- Public routes load and direct-refresh works: `/`, `/about`, `/services`, `/training`, `/projects`, `/projects/embani-erp`, `/journey`, `/resume`, `/contact`, `/book`, `/privacy`
- Dark / light / system theme toggling still works
- `/admin` shows the login; unauthenticated visits to `/admin/dashboard` redirect back
- Contact form sends and emails arrive (and the error path is honest)
- Booking request stays "pending" until approved; admin approve + meeting link emails the visitor
- Chatbot answers on topic and declines private/off-topic questions
- Mobile layout for the navbar, footer, forms and chat bubble
- `robots.txt` disallows `/admin`; `sitemap.xml` lists public routes only

## 6. Local testing of serverless functions

```bash
npm install -g vercel
vercel dev
```

`vercel dev` runs both the Vite app and the `api/*.ts` functions locally with your environment variables.
