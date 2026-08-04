import { useEffect, useState } from "react";
import {
  AdminBadge,
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
  AdminTextarea,
  AdminToggle,
  ArrayEditor,
} from "./ui";
import { fetchList, formatDate, useAdminClient, useAdminStatus } from "./shared";

type Program = {
  id?: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  includes: string[];
  curriculum: string[];
  target_audience: string;
  outcomes: string[];
  pricing: string;
  display_order: number;
  is_active: boolean;
};

type Session = {
  id?: string;
  program_id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  capacity: number;
  meeting_method: string;
  meeting_link?: string;
  is_active: boolean;
};

const emptyProgram = (): Program => ({
  title: "",
  tagline: "",
  description: "",
  duration: "",
  includes: [],
  curriculum: [],
  target_audience: "",
  outcomes: [],
  pricing: "",
  display_order: 0,
  is_active: true,
});

const emptySession = (programId: string): Session => ({
  program_id: programId,
  title: "",
  date: "",
  time: "",
  duration: "",
  capacity: 10,
  meeting_method: "zoom",
  meeting_link: "",
  is_active: true,
});

export function TrainingSection() {
  const sb = useAdminClient();
  const { status, run } = useAdminStatus();
  const [programs, setPrograms] = useState<Program[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [editing, setEditing] = useState<Program | null>(null);
  const [newSessionFor, setNewSessionFor] = useState<Program | null>(null);
  const [sessionForm, setSessionForm] = useState<Session | null>(null);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const [p, s] = await Promise.all([
        fetchList<Program>(sb, "training_programs", { order: "display_order" }),
        fetchList<Session>(sb, "training_sessions", { order: "date" }),
      ]);
      setPrograms(p);
      setSessions(s);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load training data.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function saveProgram(row: Program) {
    await run(async () => {
      const { error } = await sb.from("training_programs").upsert(row);
      if (error) throw new Error(error.message);
      setEditing(null);
      await load();
    });
  }

  async function saveSession(row: Session) {
    await run(async () => {
      const { error } = await sb.from("training_sessions").upsert(row);
      if (error) throw new Error(error.message);
      setSessionForm(null);
      setNewSessionFor(null);
      await load();
    });
  }

  async function toggleSession(row: Session) {
    await run(async () => {
      const { error } = await sb.from("training_sessions").update({ is_active: !row.is_active }).eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function deleteProgram(row: Program) {
    if (!row.id) return;
    await run(async () => {
      const { error } = await sb.from("training_programs").delete().eq("id", row.id);
      if (error) throw new Error(error.message);
      setEditing(null);
      await load();
    });
  }

  async function deleteSession(row: Session) {
    if (!row.id) return;
    await run(async () => {
      const { error } = await sb.from("training_sessions").delete().eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />
      {error && <AdminError message={error} />}

      <AdminCard
        title="Training programs"
        description="Programs on the Training and Home pages."
        action={<AdminButton onClick={() => setEditing(emptyProgram())}>Add program</AdminButton>}
      >
        {programs.length === 0 && <p className="text-sm text-zinc-500">No programs yet.</p>}
        <ul className="divide-y divide-zinc-800">
          {programs.map((p) => (
            <li key={p.id ?? p.title} className="py-3">
              <div className="flex items-center gap-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-100">{p.title}</p>
                  <p className="truncate text-xs text-zinc-500">{p.duration || "—"}</p>
                </div>
                <AdminButton variant="ghost" onClick={() => setEditing({ ...p })}>Edit</AdminButton>
                <AdminButton variant="danger" onClick={() => deleteProgram(p)}>Delete</AdminButton>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <AdminButton variant="ghost" onClick={() => { setNewSessionFor(p); setSessionForm(emptySession(p.id ?? "")); }}>
                  + Add session
                </AdminButton>
              </div>
              <ul className="mt-2 space-y-1">
                {sessions
                  .filter((s) => s.program_id === p.id)
                  .map((s) => (
                    <li key={s.id ?? s.title} className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs">
                      <span className="flex-1 text-zinc-300">{s.title}</span>
                      <span className="text-zinc-500">{formatDate(s.date)}</span>
                      {!s.is_active && <AdminBadge tone="zinc">off</AdminBadge>}
                      <AdminToggle label={`Toggle session ${s.title}`} checked={s.is_active} onChange={() => toggleSession(s)} />
                      <button
                        type="button"
                        onClick={() => setSessionForm({ ...s })}
                        className="text-zinc-400 hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteSession(s)}
                        className="text-zinc-500 hover:text-red-400"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </AdminCard>

      {editing && (
        <AdminCard title={editing.id ? "Edit program" : "New program"}>
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Title">
              <AdminInput value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
            </AdminField>
            <AdminField label="Tagline">
              <AdminInput value={editing.tagline} onChange={(e) => setEditing({ ...editing, tagline: e.target.value })} />
            </AdminField>
            <AdminField label="Duration">
              <AdminInput value={editing.duration} onChange={(e) => setEditing({ ...editing, duration: e.target.value })} />
            </AdminField>
            <AdminField label="Pricing">
              <AdminInput value={editing.pricing} onChange={(e) => setEditing({ ...editing, pricing: e.target.value })} />
            </AdminField>
            <AdminField label="Target audience">
              <AdminInput value={editing.target_audience} onChange={(e) => setEditing({ ...editing, target_audience: e.target.value })} />
            </AdminField>
            <AdminField label="Display order">
              <AdminInput
                type="number"
                value={editing.display_order}
                onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })}
              />
            </AdminField>
          </div>
          <AdminField label="Description">
            <AdminTextarea rows={3} value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          </AdminField>
          <div className="grid gap-4 sm:grid-cols-3">
            <AdminField label="Includes" hint="One per line.">
              <ArrayEditor value={editing.includes} onChange={(v) => setEditing({ ...editing, includes: v })} />
            </AdminField>
            <AdminField label="Curriculum" hint="One per line.">
              <ArrayEditor value={editing.curriculum} onChange={(v) => setEditing({ ...editing, curriculum: v })} />
            </AdminField>
            <AdminField label="Outcomes" hint="One per line.">
              <ArrayEditor value={editing.outcomes} onChange={(v) => setEditing({ ...editing, outcomes: v })} />
            </AdminField>
          </div>
          <div className="mt-4 flex gap-2">
            <AdminButton onClick={() => saveProgram(editing)} disabled={status.type === "loading"}>Save</AdminButton>
            <AdminButton variant="ghost" onClick={() => setEditing(null)}>Cancel</AdminButton>
          </div>
        </AdminCard>
      )}

      {sessionForm && (
        <AdminCard title={sessionForm.id ? "Edit session" : `New session${newSessionFor ? ` for ${newSessionFor.title}` : ""}`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Title">
              <AdminInput value={sessionForm.title} onChange={(e) => setSessionForm({ ...sessionForm, title: e.target.value })} />
            </AdminField>
            <AdminField label="Date">
              <AdminInput type="date" value={sessionForm.date} onChange={(e) => setSessionForm({ ...sessionForm, date: e.target.value })} />
            </AdminField>
            <AdminField label="Time">
              <AdminInput value={sessionForm.time} onChange={(e) => setSessionForm({ ...sessionForm, time: e.target.value })} />
            </AdminField>
            <AdminField label="Duration">
              <AdminInput value={sessionForm.duration} onChange={(e) => setSessionForm({ ...sessionForm, duration: e.target.value })} />
            </AdminField>
            <AdminField label="Capacity">
              <AdminInput
                type="number"
                value={sessionForm.capacity}
                onChange={(e) => setSessionForm({ ...sessionForm, capacity: Number(e.target.value) })}
              />
            </AdminField>
            <AdminField label="Meeting method">
              <AdminInput value={sessionForm.meeting_method} onChange={(e) => setSessionForm({ ...sessionForm, meeting_method: e.target.value })} />
            </AdminField>
            <AdminField label="Meeting link" hint="Only added after approval — share with attendees.">
              <AdminInput value={sessionForm.meeting_link ?? ""} onChange={(e) => setSessionForm({ ...sessionForm, meeting_link: e.target.value })} />
            </AdminField>
          </div>
          <div className="mt-4 flex gap-2">
            <AdminButton onClick={() => saveSession(sessionForm)} disabled={status.type === "loading"}>Save</AdminButton>
            <AdminButton variant="ghost" onClick={() => { setSessionForm(null); setNewSessionFor(null); }}>Cancel</AdminButton>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
