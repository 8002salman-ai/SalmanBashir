import { useEffect, useState } from "react";
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

type Homepage = {
  hero_badge?: string;
  hero_headline?: string;
  hero_supporting?: string;
  primary_cta?: string;
  secondary_cta?: string;
  availability_note?: string;
};

export function HomepageSection() {
  const sb = useAdminClient();
  const { status, run, setStatus } = useAdminStatus();
  const [form, setForm] = useState<Homepage>({});
  const [rowId, setRowId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [row, data] = await Promise.all([
          sb.from("site_settings").select("id").eq("key", "homepage").maybeSingle(),
          getSetting<Homepage>(sb, "homepage"),
        ]);
        setForm(data ?? {});
        setRowId(row.data?.id ?? null);
      } catch (err) {
        setStatus({ type: "error", message: err instanceof Error ? err.message : "Failed to load." });
      }
    })();
  }, [sb, setStatus]);

  function set<K extends keyof Homepage>(key: K, value: Homepage[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />

      <AdminCard
        title="Homepage"
        description="Optional overrides for the hero. Leave blank to keep the codebase defaults."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <AdminField label="Hero badge" hint='e.g. "Available for new projects"'>
            <AdminInput value={form.hero_badge ?? ""} onChange={(e) => set("hero_badge", e.target.value)} />
          </AdminField>
          <AdminField label="Availability note">
            <AdminInput value={form.availability_note ?? ""} onChange={(e) => set("availability_note", e.target.value)} />
          </AdminField>
          <AdminField label="Primary CTA label">
            <AdminInput value={form.primary_cta ?? ""} onChange={(e) => set("primary_cta", e.target.value)} />
          </AdminField>
          <AdminField label="Secondary CTA label">
            <AdminInput value={form.secondary_cta ?? ""} onChange={(e) => set("secondary_cta", e.target.value)} />
          </AdminField>
        </div>
        <AdminField label="Hero headline">
          <AdminTextarea rows={2} value={form.hero_headline ?? ""} onChange={(e) => set("hero_headline", e.target.value)} />
        </AdminField>
        <AdminField label="Hero supporting text">
          <AdminTextarea rows={3} value={form.hero_supporting ?? ""} onChange={(e) => set("hero_supporting", e.target.value)} />
        </AdminField>
        <div className="mt-4 flex justify-end">
          <AdminButton onClick={() => run(async () => saveSetting(sb, "homepage", form as Record<string, unknown>, rowId))}>
            Save homepage overrides
          </AdminButton>
        </div>
      </AdminCard>

      <AdminCard title="Sections" description="Which sections render on the Home page. Managed in code with these overrides.">
        <p className="text-sm text-zinc-400">
          Hero, Services, Projects, Training preview, How I work, Credibility, Stack, Journey,
          Consulting CTA and Contact all render from code by default. This CMS stores canonical
          content that a future dynamic render can consume.
        </p>
      </AdminCard>
    </div>
  );
}
