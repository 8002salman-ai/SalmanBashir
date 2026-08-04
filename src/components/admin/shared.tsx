import { useCallback, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

/* Returns the shared Supabase client. Auth session is persisted by supabase-js
   after admin sign-in, so the same client carries the admin's JWT. The admin
   sections are only reachable when Supabase is configured (the guard checks
   the session first), so the client is treated as non-null here. */
export function useAdminClient(): SupabaseClient {
  return supabase as SupabaseClient;
}

export type Status = { type: "idle" | "loading" | "ok" | "error"; message?: string };

export function useAdminStatus() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const run = useCallback(async (fn: () => Promise<void>) => {
    setStatus({ type: "loading" });
    try {
      await fn();
      setStatus({ type: "ok", message: "Saved." });
    } catch (err) {
      const message =
        err instanceof Error && err.message ? err.message : "Something went wrong.";
      setStatus({ type: "error", message });
    }
  }, []);
  return { status, run, setStatus };
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function statusTone(status: string) {
  switch (status) {
    case "approved":
      return "green" as const;
    case "pending":
      return "amber" as const;
    case "rejected":
      return "red" as const;
    case "cancelled":
      return "red" as const;
    default:
      return "zinc" as const;
  }
}

/* site_settings helpers (single-row JSON per key) */
export async function getSetting<T>(sb: SupabaseClient, key: string): Promise<T | null> {
  const { data, error } = await sb
    .from("site_settings")
    .select("value")
    .eq("key", key)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data?.value as T) ?? null;
}

export async function saveSetting(
  sb: SupabaseClient,
  key: string,
  value: Record<string, unknown>,
  rowId?: string | null,
) {
  const { error } = await sb.from("site_settings").upsert(
    {
      ...(rowId ? { id: rowId } : {}),
      key,
      value,
      is_active: true,
    },
    { onConflict: "key" },
  );
  if (error) throw new Error(error.message);
}

/* Generic ordered list fetch */
export async function fetchList<T>(
  sb: SupabaseClient,
  table: string,
  options: { order?: string; ascending?: boolean; limit?: number } = {},
): Promise<T[]> {
  let query = sb.from(table).select("*");
  if (options.order) query = query.order(options.order, { ascending: options.ascending ?? true });
  if (options.limit) query = query.limit(options.limit);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data as T[]) ?? [];
}

export function debounced<T extends unknown[]>(
  fn: (...args: T) => void,
  delay = 500,
) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
