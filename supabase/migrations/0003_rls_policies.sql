-- 0003_rls_policies.sql
-- Row Level Security. Public users may read active public content and
-- submit contacts / bookings. Only authenticated admins manage content
-- and read private submissions. The service-role key bypasses RLS and is
-- used only by server-side functions.

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.site_settings enable row level security;
alter table public.social_links enable row level security;
alter table public.services enable row level security;
alter table public.training_programs enable row level security;
alter table public.training_sessions enable row level security;
alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.journey_entries enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.consultation_bookings enable row level security;
alter table public.resume_files enable row level security;
alter table public.chatbot_settings enable row level security;
alter table public.chatbot_logs enable row level security;
alter table public.activity_logs enable row level security;

-- profiles
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_admin_all" on public.profiles;
create policy "profiles_admin_all" on public.profiles
  for all using (public.is_admin());

-- site_settings (public keys readable; admin manages all)
drop policy if exists "site_settings_public_read_active" on public.site_settings;
create policy "site_settings_public_read_active" on public.site_settings
  for select using (is_active = true);

drop policy if exists "site_settings_admin_all" on public.site_settings;
create policy "site_settings_admin_all" on public.site_settings
  for all using (public.is_admin());

-- social_links
drop policy if exists "social_links_public_read_active" on public.social_links;
create policy "social_links_public_read_active" on public.social_links
  for select using (is_active = true);

drop policy if exists "social_links_admin_all" on public.social_links;
create policy "social_links_admin_all" on public.social_links
  for all using (public.is_admin());

-- services
drop policy if exists "services_public_read_active" on public.services;
create policy "services_public_read_active" on public.services
  for select using (is_active = true);

drop policy if exists "services_admin_all" on public.services;
create policy "services_admin_all" on public.services
  for all using (public.is_admin());

-- training_programs
drop policy if exists "training_programs_public_read_active" on public.training_programs;
create policy "training_programs_public_read_active" on public.training_programs
  for select using (is_active = true);

drop policy if exists "training_programs_admin_all" on public.training_programs;
create policy "training_programs_admin_all" on public.training_programs
  for all using (public.is_admin());

-- training_sessions (admin only — contains meeting links)
drop policy if exists "training_sessions_admin_all" on public.training_sessions;
create policy "training_sessions_admin_all" on public.training_sessions
  for all using (public.is_admin());

-- projects
drop policy if exists "projects_public_read_active" on public.projects;
create policy "projects_public_read_active" on public.projects
  for select using (is_active = true);

drop policy if exists "projects_admin_all" on public.projects;
create policy "projects_admin_all" on public.projects
  for all using (public.is_admin());

-- project_images (public sees images of active projects only)
drop policy if exists "project_images_public_read_active_project" on public.project_images;
create policy "project_images_public_read_active_project" on public.project_images
  for select using (
    is_active = true
    and exists (
      select 1 from public.projects p
      where p.id = project_id and p.is_active = true
    )
  );

drop policy if exists "project_images_admin_all" on public.project_images;
create policy "project_images_admin_all" on public.project_images
  for all using (public.is_admin());

-- journey_entries
drop policy if exists "journey_entries_public_read_active" on public.journey_entries;
create policy "journey_entries_public_read_active" on public.journey_entries
  for select using (is_active = true);

drop policy if exists "journey_entries_admin_all" on public.journey_entries;
create policy "journey_entries_admin_all" on public.journey_entries
  for all using (public.is_admin());

-- contact_submissions: public may insert; only admin reads/manages
drop policy if exists "contact_submissions_public_insert" on public.contact_submissions;
create policy "contact_submissions_public_insert" on public.contact_submissions
  for insert with check (true);

drop policy if exists "contact_submissions_admin_all" on public.contact_submissions;
create policy "contact_submissions_admin_all" on public.contact_submissions
  for all using (public.is_admin());

-- consultation_bookings: public may insert; only admin reads/manages
drop policy if exists "consultation_bookings_public_insert" on public.consultation_bookings;
create policy "consultation_bookings_public_insert" on public.consultation_bookings
  for insert with check (true);

drop policy if exists "consultation_bookings_admin_all" on public.consultation_bookings;
create policy "consultation_bookings_admin_all" on public.consultation_bookings
  for all using (public.is_admin());

-- resume_files: active file public; admin manages all
drop policy if exists "resume_files_public_read_active" on public.resume_files;
create policy "resume_files_public_read_active" on public.resume_files
  for select using (is_active = true);

drop policy if exists "resume_files_admin_all" on public.resume_files;
create policy "resume_files_admin_all" on public.resume_files
  for all using (public.is_admin());

-- chatbot_settings: single row, public reads (enabled + prompt handled server-side)
drop policy if exists "chatbot_settings_public_read" on public.chatbot_settings;
create policy "chatbot_settings_public_read" on public.chatbot_settings
  for select using (true);

drop policy if exists "chatbot_settings_admin_all" on public.chatbot_settings;
create policy "chatbot_settings_admin_all" on public.chatbot_settings
  for all using (public.is_admin());

-- chatbot_logs: public may insert a log; only admin reads
drop policy if exists "chatbot_logs_public_insert" on public.chatbot_logs;
create policy "chatbot_logs_public_insert" on public.chatbot_logs
  for insert with check (true);

drop policy if exists "chatbot_logs_admin_select" on public.chatbot_logs;
create policy "chatbot_logs_admin_select" on public.chatbot_logs
  for select using (public.is_admin());

-- activity_logs: admin only (written server-side via service role)
drop policy if exists "activity_logs_admin_select" on public.activity_logs;
create policy "activity_logs_admin_select" on public.activity_logs
  for select using (public.is_admin());
