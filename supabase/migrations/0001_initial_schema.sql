-- 0001_initial_schema.sql
-- Core tables for the Salman Bashir portfolio CMS.
-- Run inside the Supabase SQL editor (or via `supabase db push`).

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'member' check (role in ('member', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value jsonb not null default '{}'::jsonb,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.social_links (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  url text not null,
  icon text not null default 'external',
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  desc text,
  points jsonb not null default '[]'::jsonb,
  icon text not null default 'check',
  content jsonb not null default '{}'::jsonb,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.training_programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  title text not null,
  desc text,
  points jsonb not null default '[]'::jsonb,
  format text,
  icon text not null default 'book',
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.training_sessions (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references public.training_programs (id) on delete set null,
  title text not null,
  scheduled_at timestamptz,
  duration text,
  timezone text,
  meeting_method text,
  meeting_link text,
  notes text,
  status text not null default 'planned' check (status in ('planned', 'completed', 'cancelled')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  type text,
  tech jsonb not null default '[]'::jsonb,
  desc text,
  overview text,
  business_problem text,
  solution text,
  capabilities jsonb not null default '[]'::jsonb,
  focus_points jsonb not null default '[]'::jsonb,
  highlights jsonb not null default '[]'::jsonb,
  role text,
  status text,
  accent text not null default 'brand',
  icon text not null default 'layers',
  case_study text,
  featured boolean not null default false,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_images (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects (id) on delete cascade,
  url text not null,
  alt text,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.journey_entries (
  id uuid primary key default gen_random_uuid(),
  period text,
  period_label text,
  title text not null,
  role text,
  points jsonb not null default '[]'::jsonb,
  display_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  business text,
  country text,
  marketplace text,
  service text,
  budget text,
  meeting_method text,
  message text,
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  ip_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.consultation_bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  country text,
  business text,
  service text not null,
  preferred_date date,
  preferred_time text,
  timezone text,
  duration text,
  meeting_method text,
  meeting_link text,
  notes text,
  admin_notes text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'rescheduled', 'completed', 'cancelled')),
  sent_confirmation boolean not null default false,
  ip_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resume_files (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  file_path text,
  version int not null default 1,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.chatbot_settings (
  id uuid primary key default gen_random_uuid(),
  enabled boolean not null default true,
  model text not null default 'openrouter/auto',
  welcome_message text,
  suggested_questions jsonb not null default '[]'::jsonb,
  system_prompt text,
  max_turns int not null default 20,
  rate_limit_per_minute int not null default 10,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.chatbot_logs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text,
  model text,
  ip_hash text,
  created_at timestamptz not null default now()
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  email text,
  action text not null,
  details jsonb not null default '{}'::jsonb,
  ip_hash text,
  created_at timestamptz not null default now()
);
