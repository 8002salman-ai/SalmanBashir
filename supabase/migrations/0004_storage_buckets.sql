-- 0004_storage_buckets.sql
-- Storage buckets for admin uploads (logo, favicon, resume).
-- Public read is enabled for these buckets; writes go through Supabase
-- Auth + the authenticated admin only (RLS policies below).

insert into storage.buckets (id, name, public)
values ('branding', 'branding', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('resume', 'resume', true)
on conflict (id) do nothing;

-- Public can read branding/resume objects
drop policy if exists "branding_public_read" on storage.objects;
create policy "branding_public_read" on storage.objects
  for select using (bucket_id = 'branding');

drop policy if exists "resume_public_read" on storage.objects;
create policy "resume_public_read" on storage.objects
  for select using (bucket_id = 'resume');

-- Only authenticated admins can upload, update or delete branding/resume objects
drop policy if exists "branding_admin_insert" on storage.objects;
create policy "branding_admin_insert" on storage.objects
  for insert with check (bucket_id = 'branding' and public.is_admin());

drop policy if exists "branding_admin_update" on storage.objects;
create policy "branding_admin_update" on storage.objects
  for update using (bucket_id = 'branding' and public.is_admin());

drop policy if exists "branding_admin_delete" on storage.objects;
create policy "branding_admin_delete" on storage.objects
  for delete using (bucket_id = 'branding' and public.is_admin());

drop policy if exists "resume_admin_insert" on storage.objects;
create policy "resume_admin_insert" on storage.objects
  for insert with check (bucket_id = 'resume' and public.is_admin());

drop policy if exists "resume_admin_update" on storage.objects;
create policy "resume_admin_update" on storage.objects
  for update using (bucket_id = 'resume' and public.is_admin());

drop policy if exists "resume_admin_delete" on storage.objects;
create policy "resume_admin_delete" on storage.objects
  for delete using (bucket_id = 'resume' and public.is_admin());
