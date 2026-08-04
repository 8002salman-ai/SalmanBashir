import { useEffect, useRef, useState } from "react";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
  AdminTextarea,
} from "./ui";
import { getSetting, saveSetting, useAdminClient, useAdminStatus } from "./shared";

type General = {
  name?: string;
  title?: string;
  tagline?: string;
  supportingText?: string;
  publicEmail?: string;
  location?: string;
  countries?: string;
  availability?: string;
  footer?: string;
  logo?: string;
  favicon?: string;
};

export function SettingsSection() {
  const sb = useAdminClient();
  const { status, run, setStatus } = useAdminStatus();
  const [form, setForm] = useState<General>({});
  const [rowId, setRowId] = useState<string | null>(null);
  const [uploading, setUploading] = useState("");
  const logoInput = useRef<HTMLInputElement>(null);
  const faviconInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const [row, data] = await Promise.all([
          sb.from("site_settings").select("id").eq("key", "general").maybeSingle(),
          getSetting<General>(sb, "general"),
        ]);
        setForm(data ?? {});
        setRowId(row.data?.id ?? null);
      } catch (err) {
        setStatus({ type: "error", message: err instanceof Error ? err.message : "Failed to load." });
      }
    })();
  }, [sb, setStatus]);

  function set<K extends keyof General>(key: K, value: General[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleUpload(field: "logo" | "favicon", file: File | null) {
    if (!file) return;
    setUploading(field);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() ?? "png";
      const path = `site-${field}.${ext}`;
      const { error: upError } = await sb.storage
        .from("branding")
        .upload(path, file, { upsert: true });
      if (upError) throw new Error(upError.message);
      const { data } = sb.storage.from("branding").getPublicUrl(path);
      set(field, data.publicUrl);
      setStatus({ type: "ok", message: `Uploaded ${field}. Click Save to persist.` });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Upload failed." });
    } finally {
      setUploading("");
    }
  }

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />

      <AdminCard
        title="Branding"
        description="Upload the logo and favicon. Files are stored in the Supabase 'branding' bucket and served publicly."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {(["logo", "favicon"] as const).map((field) => (
            <AdminField key={field} label={field === "logo" ? "Logo image" : "Favicon image"}>
              <input
                ref={field === "logo" ? logoInput : faviconInput}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleUpload(field, e.target.files?.[0] ?? null)}
              />
              <div className="flex items-center gap-3">
                {form[field] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form[field]}
                    alt={`${field} preview`}
                    className={`${field === "favicon" ? "h-8 w-8 rounded" : "h-12 w-12 rounded-lg"} border border-zinc-800 object-contain bg-zinc-950`}
                  />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-[10px] text-zinc-600">
                    none
                  </span>
                )}
                <div className="flex flex-col gap-2">
                  <AdminButton
                    type="button"
                    variant="ghost"
                    onClick={() => (field === "logo" ? logoInput : faviconInput).current?.click()}
                    disabled={uploading === field}
                  >
                    {uploading === field ? "Uploading…" : "Upload"}
                  </AdminButton>
                  {form[field] && (
                    <button
                      type="button"
                      onClick={() => set(field, undefined)}
                      className="text-left text-[11px] text-zinc-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </AdminField>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-zinc-500">
          For the public site to show these, update the site config in the codebase too — the
          admin CMS stores canonical content here for future dynamic rendering.
        </p>
      </AdminCard>

      <AdminCard title="General information" description="Used in the footer, contact page and metadata.">
        <div className="grid gap-4 sm:grid-cols-2">
          <AdminField label="Name">
            <AdminInput value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} />
          </AdminField>
          <AdminField label="Title">
            <AdminInput value={form.title ?? ""} onChange={(e) => set("title", e.target.value)} />
          </AdminField>
          <AdminField label="Tagline">
            <AdminInput value={form.tagline ?? ""} onChange={(e) => set("tagline", e.target.value)} />
          </AdminField>
          <AdminField label="Public email" hint="Shown publicly on the contact section.">
            <AdminInput value={form.publicEmail ?? ""} onChange={(e) => set("publicEmail", e.target.value)} />
          </AdminField>
          <AdminField label="Location">
            <AdminInput value={form.location ?? ""} onChange={(e) => set("location", e.target.value)} />
          </AdminField>
          <AdminField label="Availability">
            <AdminInput value={form.availability ?? ""} onChange={(e) => set("availability", e.target.value)} />
          </AdminField>
          <AdminField label="Countries" hint="Comma-separated list served by the consultant.">
            <AdminInput value={form.countries ?? ""} onChange={(e) => set("countries", e.target.value)} />
          </AdminField>
          <AdminField label="Footer note">
            <AdminInput value={form.footer ?? ""} onChange={(e) => set("footer", e.target.value)} />
          </AdminField>
        </div>
        <AdminField label="Supporting text" hint="Short paragraph for the hero / about intro.">
          <AdminTextarea
            rows={3}
            value={form.supportingText ?? ""}
            onChange={(e) => set("supportingText", e.target.value)}
          />
        </AdminField>
        <div className="mt-4 flex justify-end">
          <AdminButton onClick={() => run(async () => saveSetting(sb, "general", form as Record<string, unknown>, rowId))}>
            Save general settings
          </AdminButton>
        </div>
      </AdminCard>
    </div>
  );
}
