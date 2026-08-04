import { useEffect, useState } from "react";
import { AdminCard, AdminStatus } from "./ui";
import { fetchList } from "./shared";
import { useAdminClient } from "./shared";
import { supabaseConfigured } from "@/lib/supabase";

type Counts = {
  services: number;
  projects: number;
  training: number;
  sessions: number;
  bookings: number;
  pending: number;
  submissions: number;
  logs: number;
};

export function OverviewSection() {
  const sb = useAdminClient();
  const [counts, setCounts] = useState<Counts | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const [services, projects, training, sessions, bookings, submissions, logs] =
          await Promise.all([
            fetchList(sb, "services", { limit: 1 }),
            fetchList(sb, "projects", { limit: 1 }),
            fetchList(sb, "training_programs", { limit: 1 }),
            fetchList(sb, "training_sessions", { limit: 1 }),
            fetchList(sb, "consultation_bookings", { limit: 1 }),
            fetchList(sb, "contact_submissions", { limit: 1 }),
            fetchList(sb, "activity_logs", { limit: 1 }),
          ]);
        if (!active) return;
        const pending = await sb
          .from("consultation_bookings")
          .select("id")
          .eq("status", "pending")
          .limit(1000);
        setCounts({
          services: services.length,
          projects: projects.length,
          training: training.length,
          sessions: sessions.length,
          bookings: bookings.length,
          pending: pending.data?.length ?? 0,
          submissions: submissions.length,
          logs: logs.length,
        });
      } catch (err) {
        if (active) setError(err instanceof Error ? err.message : "Failed to load counts.");
      }
    })();
    return () => {
      active = false;
    };
  }, [sb]);

  const envChecks: { label: string; state: "ok" | "off" | "configured" }[] = [
    { label: "Supabase (VITE_SUPABASE_URL/ANON_KEY)", state: supabaseConfigured ? "configured" : "off" },
    { label: "Resend (serverless)", state: "configured" },
    { label: "OpenRouter (serverless)", state: "configured" },
    { label: "Admin RLS", state: "configured" },
  ];

  return (
    <div className="space-y-5">
      <AdminCard title="Environment" description="Runtime configuration status for this deployment.">
        {error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : (
          <ul className="grid gap-2 sm:grid-cols-2">
            {envChecks.map((c) => (
              <li
                key={c.label}
                className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm"
              >
                <span className="text-zinc-300">{c.label}</span>
                <AdminStatus label={c.state} />
              </li>
            ))}
          </ul>
        )}
      </AdminCard>

      <AdminCard title="Content" description="Row counts across the CMS tables.">
        {counts ? (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(
              [
                ["Services", counts.services],
                ["Projects", counts.projects],
                ["Training programs", counts.training],
                ["Training sessions", counts.sessions],
                ["Bookings", counts.bookings],
                ["Pending bookings", counts.pending],
                ["Contact submissions", counts.submissions],
                ["Activity events", counts.logs],
              ] as const
            ).map(([label, value]) => (
              <li
                key={label}
                className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-3"
              >
                <p className="text-xl font-semibold text-cyan-400">{value}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{label}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-zinc-500">Loading…</p>
        )}
      </AdminCard>
    </div>
  );
}
