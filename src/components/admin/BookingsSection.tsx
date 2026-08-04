import { useEffect, useState } from "react";
import {
  AdminBadge,
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
} from "./ui";
import { fetchList, formatDate, statusTone, useAdminClient, useAdminStatus } from "./shared";
import { adminGetSession } from "@/lib/admin";

type Booking = {
  id: string;
  name: string;
  email: string;
  topic: string;
  date_preference?: string;
  time_preference?: string;
  timezone?: string;
  duration?: string;
  notes?: string;
  status: string;
  meeting_link?: string;
  meeting_notes?: string;
  created_at?: string;
};

type AdminApiResponse = { ok: boolean; error?: string };

export function BookingsSection() {
  const sb = useAdminClient();
  const { status, run } = useAdminStatus();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selected, setSelected] = useState<Booking | null>(null);
  const [error, setError] = useState("");
  const [linkDraft, setLinkDraft] = useState("");
  const [notesDraft, setNotesDraft] = useState("");

  const load = async () => {
    try {
      const rows = await fetchList<Booking>(sb, "consultation_bookings", {
        order: "created_at",
        ascending: false,
      });
      setBookings(rows);
      setError("");
      if (selected) {
        const fresh = rows.find((r) => r.id === selected.id);
        if (fresh) setSelected(fresh);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load bookings.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function adminAction(action: string, payload: Record<string, unknown> = {}) {
    await run(async () => {
      const session = await adminGetSession();
      if (!session) throw new Error("Not signed in.");
      const res = await fetch("/api/booking-admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ action, id: selected?.id, ...payload }),
      });
      const json = (await res.json()) as AdminApiResponse;
      if (!json.ok) throw new Error(json.error ?? "Action failed.");
      setLinkDraft("");
      setNotesDraft("");
      setSelected(null);
      await load();
    });
  }

  const select = (b: Booking) => {
    setSelected(b);
    setLinkDraft(b.meeting_link ?? "");
    setNotesDraft(b.meeting_notes ?? "");
  };

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />
      {error && <AdminError message={error} />}

      <AdminCard
        title="Consultation bookings"
        description="Approve, reject, reschedule or share a meeting link. Visitors are emailed only after approval."
      >
        {bookings.length === 0 && <p className="text-sm text-zinc-500">No bookings yet.</p>}
        <ul className="divide-y divide-zinc-800">
          {bookings.map((b) => (
            <li key={b.id} className="py-3">
              <button
                type="button"
                onClick={() => select(b)}
                className="flex w-full items-center gap-3 text-left"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-100">{b.name}</p>
                  <p className="truncate text-xs text-zinc-500">
                    {b.topic} · {formatDate(b.created_at)}
                  </p>
                </div>
                <AdminBadge tone={statusTone(b.status)}>{b.status}</AdminBadge>
              </button>
            </li>
          ))}
        </ul>
      </AdminCard>

      {selected && (
        <AdminCard
          title={`Booking — ${selected.name}`}
          action={
            <AdminButton variant="ghost" onClick={() => setSelected(null)}>
              Close
            </AdminButton>
          }
        >
          <dl className="grid gap-3 sm:grid-cols-2">
            <div><dt className="text-[11px] text-zinc-500">Email</dt><dd className="text-sm text-zinc-200">{selected.email}</dd></div>
            <div><dt className="text-[11px] text-zinc-500">Topic</dt><dd className="text-sm text-zinc-200">{selected.topic}</dd></div>
            <div><dt className="text-[11px] text-zinc-500">Date preference</dt><dd className="text-sm text-zinc-200">{selected.date_preference || "—"}</dd></div>
            <div><dt className="text-[11px] text-zinc-500">Time preference</dt><dd className="text-sm text-zinc-200">{selected.time_preference || "—"}</dd></div>
            <div><dt className="text-[11px] text-zinc-500">Timezone</dt><dd className="text-sm text-zinc-200">{selected.timezone || "—"}</dd></div>
            <div><dt className="text-[11px] text-zinc-500">Duration</dt><dd className="text-sm text-zinc-200">{selected.duration || "—"}</dd></div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] text-zinc-500">Notes</dt>
              <dd className="text-sm text-zinc-200 whitespace-pre-wrap">{selected.notes || "—"}</dd>
            </div>
          </dl>

          {selected.status !== "cancelled" && selected.status !== "rejected" && (
            <div className="mt-5 space-y-4 border-t border-zinc-800 pt-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <AdminField label="Meeting link (Zoom / Meet / custom)" hint="Added manually. Emailed to the visitor when confirmed.">
                  <AdminInput value={linkDraft} onChange={(e) => setLinkDraft(e.target.value)} placeholder="https://" />
                </AdminField>
                <AdminField label="Notes for the visitor" hint="Optional, included in confirmation emails.">
                  <AdminInput value={notesDraft} onChange={(e) => setNotesDraft(e.target.value)} />
                </AdminField>
              </div>
              <div className="flex flex-wrap gap-2">
                {selected.status === "pending" && (
                  <AdminButton onClick={() => adminAction("approve", { meeting_link: linkDraft || undefined, meeting_notes: notesDraft || undefined })}>
                    Approve & notify
                  </AdminButton>
                )}
                {selected.status === "pending" && (
                  <AdminButton variant="danger" onClick={() => adminAction("reject", { reason: notesDraft || undefined })}>
                    Reject
                  </AdminButton>
                )}
                {selected.status === "approved" && (
                  <AdminButton onClick={() => adminAction("reschedule", { meeting_link: linkDraft || undefined })}>
                    Back to pending (reschedule)
                  </AdminButton>
                )}
                <AdminButton
                  variant="ghost"
                  onClick={() => adminAction("meeting_link", { meeting_link: linkDraft, meeting_notes: notesDraft || undefined })}
                >
                  Save meeting link
                </AdminButton>
                {selected.status === "pending" && linkDraft && (
                  <AdminButton onClick={() => adminAction("send_confirmation", { meeting_link: linkDraft, meeting_notes: notesDraft || undefined })}>
                    Send confirmation
                  </AdminButton>
                )}
                {selected.status === "approved" && (
                  <AdminButton variant="ghost" onClick={() => adminAction("mark_complete")}>
                    Mark complete
                  </AdminButton>
                )}
              </div>
              <p className="text-[11px] text-zinc-500">
                Visitors are never told a call is confirmed until you send the confirmation with a
                meeting link.
              </p>
            </div>
          )}

          {selected.meeting_link && (
            <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm">
              <span className="text-zinc-500">Link: </span>
              <a
                href={selected.meeting_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                {selected.meeting_link}
              </a>
            </div>
          )}
        </AdminCard>
      )}
    </div>
  );
}
