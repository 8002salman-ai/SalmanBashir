import { useEffect, useState } from "react";
import {
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
  AdminSelect,
} from "./ui";
import { getSetting, saveSetting, useAdminClient, useAdminStatus } from "./shared";

type Theme = {
  default_theme?: "dark" | "light" | "system";
  accent_color?: string;
  texture_intensity?: number;
  card_opacity?: number;
  borders?: boolean;
  animation_level?: "minimal" | "standard" | "reduced";
};

export function ThemeSection() {
  const sb = useAdminClient();
  const { status, run, setStatus } = useAdminStatus();
  const [form, setForm] = useState<Theme>({});
  const [rowId, setRowId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [row, data] = await Promise.all([
          sb.from("site_settings").select("id").eq("key", "theme").maybeSingle(),
          getSetting<Theme>(sb, "theme"),
        ]);
        setForm(data ?? {});
        setRowId(row.data?.id ?? null);
      } catch (err) {
        setStatus({ type: "error", message: err instanceof Error ? err.message : "Failed to load." });
      }
    })();
  }, [sb, setStatus]);

  function set<K extends keyof Theme>(key: K, value: Theme[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  return (
    <div className="space-y-5">
      <AdminError message={status.type === "error" ? status.message ?? "" : ""} />
      <AdminNotice message={status.type === "ok" ? status.message ?? "" : ""} />

      <AdminCard
        title="Theme preferences"
        description="Stored preferences for the site appearance. The active theme is controlled by the visitor's ThemeToggle; these are defaults for future dynamic theming."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <AdminField label="Default theme">
            <AdminSelect
              value={form.default_theme ?? "dark"}
              onChange={(e) => set("default_theme", e.target.value as Theme["default_theme"])}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </AdminSelect>
          </AdminField>
          <AdminField label="Accent color">
            <AdminInput type="color" value={form.accent_color ?? "#22d3ee"} onChange={(e) => set("accent_color", e.target.value)} />
          </AdminField>
          <AdminField label="Texture intensity (0–100)">
            <AdminInput
              type="number"
              min={0}
              max={100}
              value={form.texture_intensity ?? 50}
              onChange={(e) => set("texture_intensity", Number(e.target.value))}
            />
          </AdminField>
          <AdminField label="Card opacity (0–100)">
            <AdminInput
              type="number"
              min={0}
              max={100}
              value={form.card_opacity ?? 70}
              onChange={(e) => set("card_opacity", Number(e.target.value))}
            />
          </AdminField>
          <AdminField label="Animation level">
            <AdminSelect
              value={form.animation_level ?? "standard"}
              onChange={(e) => set("animation_level", e.target.value as Theme["animation_level"])}
            >
              <option value="standard">Standard</option>
              <option value="minimal">Minimal</option>
              <option value="reduced">Reduced motion</option>
            </AdminSelect>
          </AdminField>
          <AdminField label="Borders">
            <AdminSelect value={form.borders ? "yes" : "no"} onChange={(e) => set("borders", e.target.value === "yes")}>
              <option value="yes">Show borders</option>
              <option value="no">Hide borders</option>
            </AdminSelect>
          </AdminField>
        </div>
        <div className="mt-4 flex justify-end">
          <AdminButton onClick={() => run(async () => saveSetting(sb, "theme", form as Record<string, unknown>, rowId))}>
            Save theme
          </AdminButton>
        </div>
      </AdminCard>
    </div>
  );
}
