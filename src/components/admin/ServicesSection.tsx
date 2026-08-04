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
import { fetchList, useAdminClient, useAdminStatus } from "./shared";

type Service = {
  id?: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  display_order: number;
  is_active: boolean;
};

const empty = (): Service => ({
  title: "",
  tagline: "",
  description: "",
  icon: "layers",
  features: [],
  display_order: 0,
  is_active: true,
});

export function ServicesSection() {
  const sb = useAdminClient();
  const { status, run } = useAdminStatus();
  const [items, setItems] = useState<Service[]>([]);
  const [editing, setEditing] = useState<Service | null>(null);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const rows = await fetchList<Service>(sb, "services", { order: "display_order" });
      setItems(rows);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load services.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function saveRow(row: Service) {
    await run(async () => {
      const { error } = await sb.from("services").upsert(row);
      if (error) throw new Error(error.message);
      setEditing(null);
      await load();
    });
  }

  async function toggleRow(row: Service) {
    await run(async () => {
      const { error } = await sb.from("services").update({ is_active: !row.is_active }).eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function deleteRow(row: Service) {
    if (!row.id) return;
    await run(async () => {
      const { error } = await sb.from("services").delete().eq("id", row.id);
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
        title="Services"
        description="Consulting services shown on the Services and Home pages."
        action={<AdminButton onClick={() => setEditing(empty())}>Add service</AdminButton>}
      >
        {items.length === 0 && <p className="text-sm text-zinc-500">No services yet.</p>}
        <ul className="divide-y divide-zinc-800">
          {items.map((item) => (
            <li key={item.id ?? item.title} className="flex items-center gap-3 py-3">
              <AdminBadge tone="cyan">{item.icon}</AdminBadge>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-100">{item.title}</p>
                <p className="truncate text-xs text-zinc-500">{item.tagline}</p>
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
        <AdminCard title={editing.id ? "Edit service" : "New service"}>
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Title">
              <AdminInput value={editing.title} onChange={(e) => setEditing({ ...editing, title: e.target.value })} />
            </AdminField>
            <AdminField label="Icon" hint="Icon name from the site library.">
              <AdminInput value={editing.icon} onChange={(e) => setEditing({ ...editing, icon: e.target.value })} />
            </AdminField>
            <AdminField label="Tagline" hint="Short subtitle under the title.">
              <AdminInput value={editing.tagline} onChange={(e) => setEditing({ ...editing, tagline: e.target.value })} />
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
          <AdminField label="Features" hint="One per line.">
            <ArrayEditor value={editing.features} onChange={(features) => setEditing({ ...editing, features })} />
          </AdminField>
          <div className="mt-4 flex gap-2">
            <AdminButton onClick={() => saveRow(editing)} disabled={status.type === "loading"}>Save</AdminButton>
            <AdminButton variant="ghost" onClick={() => setEditing(null)}>Cancel</AdminButton>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
