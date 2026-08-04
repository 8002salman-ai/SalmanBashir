import { useEffect, useRef, useState } from "react";
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
import { fetchList, useAdminClient, useAdminStatus } from "./shared";

type Project = {
  id?: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  category: string;
  client: string;
  status: string;
  tools: string[];
  images: string[];
  project_url?: string;
  github_url?: string;
  display_order: number;
  is_active: boolean;
};

const empty = (): Project => ({
  title: "",
  tagline: "",
  description: "",
  role: "",
  year: "",
  category: "",
  client: "",
  status: "completed",
  tools: [],
  images: [],
  project_url: "",
  github_url: "",
  display_order: 0,
  is_active: true,
});

export function ProjectsSection() {
  const sb = useAdminClient();
  const { status, run, setStatus } = useAdminStatus();
  const [items, setItems] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      const rows = await fetchList<Project>(sb, "projects", { order: "display_order" });
      setItems(rows);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function saveRow(row: Project) {
    await run(async () => {
      const { error } = await sb.from("projects").upsert(row);
      if (error) throw new Error(error.message);
      setEditing(null);
      await load();
    });
  }

  async function toggleRow(row: Project) {
    await run(async () => {
      const { error } = await sb.from("projects").update({ is_active: !row.is_active }).eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function deleteRow(row: Project) {
    if (!row.id) return;
    await run(async () => {
      const { error } = await sb.from("projects").delete().eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function uploadImage(file: File | null) {
    if (!file || !editing) return;
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "png";
      const path = `project-${Date.now()}.${ext}`;
      const { error } = await sb.storage.from("branding").upload(path, file);
      if (error) throw new Error(error.message);
      const { data } = sb.storage.from("branding").getPublicUrl(path);
      setEditing({ ...editing, images: [...(editing.images ?? []), data.publicUrl] });
      setStatus({ type: "ok", message: "Image uploaded. Click Save to persist." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Upload failed." });
    }
  }

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />
      {error && <AdminError message={error} />}

      <AdminCard
        title="Projects"
        description="Case-study projects shown on the Projects and Home pages."
        action={<AdminButton onClick={() => setEditing(empty())}>Add project</AdminButton>}
      >
        {items.length === 0 && <p className="text-sm text-zinc-500">No projects yet.</p>}
        <ul className="divide-y divide-zinc-800">
          {items.map((item) => (
            <li key={item.id ?? item.title} className="flex items-center gap-3 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-100">{item.title}</p>
                <p className="truncate text-xs text-zinc-500">{item.category} · {item.year}</p>
              </div>
              {!item.is_active && <AdminBadge tone="zinc">hidden</AdminBadge>}
              <AdminToggle label={`Toggle ${item.title}`} checked={item.is_active} onChange={() => toggleRow(item)} />
              <div className="flex gap-2">
                <AdminButton variant="ghost" onClick={() => setEditing({ ...item })}>Edit</AdminButton>
                <AdminButton variant="danger" onClick={() => deleteRow(item)}>Delete</AdminButton>
              </div>
            </li>
          ))}
        </ul>
      </AdminCard>

      {editing && (
        <AdminCard title={editing.id ? "Edit project" : "New project"}>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => uploadImage(e.target.files?.[0] ?? null)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Title">
              <AdminInput value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
            </AdminField>
            <AdminField label="Category">
              <AdminInput value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} />
            </AdminField>
            <AdminField label="Tagline">
              <AdminInput value={editing.tagline} onChange={(e) => setEditing({ ...editing, tagline: e.target.value })} />
            </AdminField>
            <AdminField label="Year">
              <AdminInput value={editing.year} onChange={(e) => setEditing({ ...editing, year: e.target.value })} />
            </AdminField>
            <AdminField label="Role">
              <AdminInput value={editing.role} onChange={(e) => setEditing({ ...editing, role: e.target.value })} />
            </AdminField>
            <AdminField label="Client">
              <AdminInput value={editing.client} onChange={(e) => setEditing({ ...editing, client: e.target.value })} />
            </AdminField>
            <AdminField label="Project URL">
              <AdminInput value={editing.project_url ?? ""} onChange={(e) => setEditing({ ...editing, project_url: e.target.value })} />
            </AdminField>
            <AdminField label="GitHub URL">
              <AdminInput value={editing.github_url ?? ""} onChange={(e) => setEditing({ ...editing, github_url: e.target.value })} />
            </AdminField>
            <AdminField label="Display order">
              <AdminInput
                type="number"
                value={editing.display_order}
                onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })}
              />
            </AdminField>
            <AdminField label="Status">
              <AdminInput value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value })} />
            </AdminField>
          </div>
          <AdminField label="Description">
            <AdminTextarea rows={3} value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
          </AdminField>
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Tools" hint="One per line.">
              <ArrayEditor value={editing.tools} onChange={(tools) => setEditing({ ...editing, tools })} />
            </AdminField>
            <AdminField label="Screenshots" hint="Upload images or paste URLs, one per line.">
              <ArrayEditor value={editing.images} onChange={(images) => setEditing({ ...editing, images })} />
            </AdminField>
          </div>
          <div className="mt-3">
            <AdminButton type="button" variant="ghost" onClick={() => fileRef.current?.click()}>
              Upload screenshot
            </AdminButton>
          </div>
          <div className="mt-4 flex gap-2">
            <AdminButton onClick={() => saveRow(editing)} disabled={status.type === "loading"}>Save</AdminButton>
            <AdminButton variant="ghost" onClick={() => setEditing(null)}>Cancel</AdminButton>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
