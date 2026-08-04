import { useEffect, useState } from "react";
import { AdminBadge, AdminCard, AdminError } from "./ui";
import { fetchList, formatDate, useAdminClient } from "./shared";

type Activity = {
  id: string;
  action: string;
  email?: string | null;
  details?: Record<string, unknown> | null;
  created_at?: string;
};

const ACTION_TONES: Record<string, "cyan" | "green" | "amber" | "red" | "zinc"> = {
  admin_action_denied: "red",
  contact_submitted: "cyan",
  booking_submitted: "cyan",
  booking_updated: "amber",
  admin_logged_in: "green",
};

export function ActivitySection() {
  const sb = useAdminClient();
  const [rows, setRows] = useState<Activity[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchList<Activity>(sb, "activity_logs", {
          order: "created_at",
          ascending: false,
          limit: 200,
        });
        setRows(list);
        setError("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load activity.");
      }
    })();
  }, [sb]);

  return (
    <div className="space-y-5">
      {error && <AdminError message={error} />}
      <AdminCard
        title="Activity log"
        description="Recent events recorded by the server: submissions, admin actions and denied attempts."
      >
        {rows.length === 0 && <p className="text-sm text-zinc-500">No activity recorded yet.</p>}
        <ul className="divide-y divide-zinc-800">
          {rows.map((r) => (
            <li key={r.id} className="py-3">
              <div className="flex items-center gap-3">
                <AdminBadge tone={ACTION_TONES[r.action] ?? "zinc"}>{r.action}</AdminBadge>
                <span className="flex-1 truncate text-sm text-zinc-300">{r.email ?? "—"}</span>
                <span className="text-xs text-zinc-600">{formatDate(r.created_at)}</span>
              </div>
              {r.details && Object.keys(r.details).length > 0 && (
                <p className="mt-1 truncate pl-2 text-xs text-zinc-600">{JSON.stringify(r.details)}</p>
              )}
            </li>
          ))}
        </ul>
      </AdminCard>
    </div>
  );
}
