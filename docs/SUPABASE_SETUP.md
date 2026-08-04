# Supabase Setup

This project uses Supabase for the database, Auth, Row Level Security (RLS) and Storage. Follow these steps once.

## 1. Create a project

1. Go to https://supabase.com and create a new project (free tier is fine).
2. Note the **Project URL** and the **anon / public key**. You'll also find the **service_role** key under *Project Settings → API*. The service role key is secret — it is only used by the serverless functions in `/api` and must never go in the browser.

## 2. Run the migrations

The SQL files in `supabase/migrations/` create the schema in order. In the Supabase dashboard open *SQL Editor* and run each file in sequence:

1. `0001_initial_schema.sql` — 15 tables
2. `0002_functions_and_triggers.sql` — `updated_at` trigger, `handle_new_user` profile trigger, `is_admin()` helper
3. `0003_rls_policies.sql` — enables RLS and adds policies
4. `0004_storage_buckets.sql` — `branding` and `resume` storage buckets with public read + admin write

Alternatively, if you use the Supabase CLI:

```bash
supabase login
supabase link --project-ref <your-project-ref>
supabase db push
```

## 3. Tables

All tables share `id (uuid, pk, default gen_random_uuid())`, `created_at`, `updated_at`, `display_order`, `is_active`.

- `profiles` — one row per auth user; `role` is `member` or `admin` (created automatically by `handle_new_user`)
- `site_settings` — key/value JSON (`general`, `homepage`, `theme`, ...)
- `social_links` — platform, url, handle, icon
- `services` — title, tagline, description, icon, features (jsonb), ...
- `training_programs` — program details, curriculum (jsonb), outcomes, pricing, ...
- `training_sessions` — date, time, duration, capacity, meeting_method, meeting_link
- `projects` — title, tagline, description, role, year, category, client, status, tools (jsonb), images (jsonb), links
- `project_images` — per-project images
- `journey_entries` — timeline entries
- `contact_submissions` — from the contact form
- `consultation_bookings` — from the booking form; status is `pending → approved / rejected / rescheduled / completed / cancelled`
- `resume_files` — resume PDF metadata
- `chatbot_settings` — single row: enabled, model, system_prompt, rate_limit_per_minute
- `chatbot_logs` — question/answer/model per chat request
- `activity_logs` — admin actions and security-relevant events

## 4. Row Level Security

RLS is enabled on every table. The policy model:

- **Public reads**: active rows of `site_settings`, `social_links`, `services`, `training_programs`, `projects`, `project_images`, `journey_entries`, `resume_files`, `chatbot_settings`.
- **Public inserts**: `contact_submissions`, `consultation_bookings`, `chatbot_logs` (`with check (true)` because anonymous visitors have no session).
- **Own rows**: `profiles` (a user can read their own profile).
- **Admin only** (via the `public.is_admin()` security-definer helper): all writes, all reads of bookings/submissions/logs, and management of any table.

The admin check is not only in the browser — every privileged API function verifies the Supabase JWT and the admin role server-side before touching data.

## 5. Verify

In the Supabase dashboard *Table Editor*, open `profiles` — after the first user signs in (see `docs/ADMIN_SETUP.md`) a row should appear with `role = 'member'`.
