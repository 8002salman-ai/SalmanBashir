# Admin Setup

The admin panel is at `/admin` (login) and `/admin/dashboard` (dashboard). Access requires a Supabase auth account whose `profiles.role` is `admin`.

## 1. Create the admin account

The admin email for this site is `8002salman@gmail.com`.

1. In the Supabase dashboard open **Authentication → Users** and click **Add user**.
2. Enter `8002salman@gmail.com` and a strong password. Never store this password anywhere in the repo, env vars, or content tables.
3. Save. This fires `handle_new_user`, which creates a `profiles` row with `role = 'member'`.

## 2. Promote the account to admin

With the account created, promote it:

1. Open **Table Editor → profiles**.
2. Find the row for `8002salman@gmail.com`.
3. Change `role` from `member` to `admin` and save.

Now sign in at `/admin` and you'll be redirected to the dashboard.

> Alternative (SQL): run `update profiles set role = 'admin' where email = '8002salman@gmail.com';`

## 3. Configure environment variables

In your **Vercel project → Settings → Environment Variables**, set:

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — the anon/public key (safe in the browser)
- `SUPABASE_SERVICE_ROLE_KEY` — the service_role key (server-only; never in the frontend)

After adding them, redeploy. The login page shows a warning until `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are present in the build.

## 4. What you can do in the dashboard

- **Overview** — environment status and row counts
- **Settings & Branding** — general info, logo and favicon uploads (Supabase Storage)
- **Social Links** — add/edit/reorder/toggle links
- **Homepage** — optional hero overrides
- **Services / Projects / Training** — full CRUD with active toggles and display order
- **Bookings** — review consultation requests; approve, reject, reschedule, add a meeting link (Zoom/Meet/custom) and send confirmation. A booking is only ever confirmed to the visitor after you send the confirmation email
- **Resume** — upload PDFs to the `resume` bucket and toggle visibility
- **Theme** — stored theme preferences for future dynamic theming
- **Activity Log** — recent events including denied admin actions

## 5. Forgot password

On the `/admin` login page choose *Forgot password?* and enter `8002salman@gmail.com`. Supabase sends a reset link; on the reset page you set a new password and are returned to `/admin`.

## 6. Security notes

- The dashboard is protected in the browser (unauthenticated users are redirected to `/admin`) and every privileged API call verifies the JWT and admin role server-side.
- `/admin` is `noindex, nofollow` via a meta tag, `robots.txt` and an `X-Robots-Tag` header.
- Activity such as denied attempts is logged in `activity_logs`.
