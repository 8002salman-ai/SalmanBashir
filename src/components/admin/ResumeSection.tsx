import { useEffect, useRef, useState } from "react";
import {
  AdminBadge,
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
  AdminToggle,
} from "./ui";
import { fetchList, formatDate, useAdminClient, useAdminStatus } from "./shared";

type ResumeFile = {
  id?: string;
  title: string;
  file_path: string;
  file_url?: string;
  version: string;
  is_active: boolean;
  created_at?: string;
};

export function ResumeSection() {
  const sb = useAdminClient();
  const { status, run } = useAdminStatus();
  const [files, setFiles] = useState<ResumeFile[]>([]);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      const rows = await fetchList<ResumeFile>(sb, "resume_files", { order: "created_at" });
      setFiles(rows);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load resume files.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function upload(file: File | null) {
    if (!file) return;
    await run(async () => {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "pdf";
      const path = `resume-${Date.now()}.${ext}`;
      const { error: upError } = await sb.storage.from("resume").upload(path, file);
      if (upError) throw new Error(upError.message);
      const { data } = sb.storage.from("resume").getPublicUrl(path);
      const { error } = await sb.from("resume_files").insert({
        title: title.trim() || "Resume",
        version: version.trim() || "v1",
        file_path: path,
        file_url: data.publicUrl,
        is_active: true,
      });
      if (error) throw new Error(error.message);
      setTitle("");
      setVersion("");
      if (fileRef.current) fileRef.current.value = "";
      await load();
    });
  }

  async function toggleRow(row: ResumeFile) {
    await run(async () => {
      const { error } = await sb.from("resume_files").update({ is_active: !row.is_active }).eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function deleteRow(row: ResumeFile) {
    if (!row.id) return;
    await run(async () => {
      await sb.storage.from("resume").remove([row.file_path]);
      const { error } = await sb.from("resume_files").delete().eq("id", row.id);
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
        title="Resume files"
        description="Upload PDF resumes to the Supabase 'resume' bucket. Active files are linked from the Resume page."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <AdminField label="Title">
            <AdminInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resume" />
          </AdminField>
          <AdminField label="Version">
            <AdminInput value={version} onChange={(e) => setVersion(e.target.value)} placeholder="v1" />
          </AdminField>
          <AdminField label="File">
            <input ref={fileRef} type="file" accept=".pdf,application/pdf" className="hidden" onChange={(e) => upload(e.target.files?.[0] ?? null)} />
            <AdminButton type="button" onClick={() => fileRef.current?.click()} disabled={status.type === "loading"}>
              {status.type === "loading" ? "Uploading…" : "Upload PDF"}
            </AdminButton>
          </AdminField>
        </div>

        <ul className="mt-4 divide-y divide-zinc-800">
          {files.length === 0 && <li className="py-2 text-sm text-zinc-500">No resume files yet.</li>}
          {files.map((f) => (
            <li key={f.id ?? f.file_path} className="flex items-center gap-3 py-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-100">{f.title}</p>
                <p className="truncate text-xs text-zinc-500">
                  {f.version} · {formatDate(f.created_at)}
                </p>
              </div>
              {f.is_active ? <AdminBadge tone="green">active</AdminBadge> : <AdminBadge tone="zinc">hidden</AdminBadge>}
              {f.file_url && (
                <a href={f.file_url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-400 hover:underline">
                  Open
                </a>
              )}
              <AdminToggle label={`Toggle ${f.title}`} checked={f.is_active} onChange={() => toggleRow(f)} />
              <AdminButton variant="danger" onClick={() => deleteRow(f)}>Delete</AdminButton>
            </li>
          ))}
        </ul>
      </AdminCard>
    </div>
  );
}
