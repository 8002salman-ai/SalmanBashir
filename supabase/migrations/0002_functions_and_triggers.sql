-- 0002_functions_and_triggers.sql
-- Helper functions, updated_at trigger and profile auto-creation.

-- Update updated_at on every table
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Profile auto-creation when a new auth user signs up.
-- New users default to role 'member'. Promote the admin user to 'admin'
-- in the Supabase dashboard (see docs/ADMIN_SETUP.md).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'full_name', new.email), 'member')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS helper: true when the current user is an admin
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- Attach updated_at trigger
do $$
declare
  t text;
  tables text[] := array[
    'profiles', 'site_settings', 'social_links', 'services',
    'training_programs', 'training_sessions', 'projects', 'project_images',
    'journey_entries', 'contact_submissions', 'consultation_bookings',
    'resume_files', 'chatbot_settings', 'chatbot_logs', 'activity_logs'
  ];
begin
  foreach t in array tables loop
    execute format(
      'drop trigger if exists set_updated_at on public.%I;', t
    );
    execute format(
      'create trigger set_updated_at before update on public.%I for each row execute procedure public.set_updated_at();',
      t
    );
  end loop;
end;
$$;
