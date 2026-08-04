import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/* Public-safe Supabase client (anon key only). null when the project is
   not yet configured — the site and admin still load, and forms fall back
   to serverless email handling. Never put service-role keys here. */
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const supabaseConfigured = Boolean(url && anonKey);

export type Json = Record<string, unknown>;
