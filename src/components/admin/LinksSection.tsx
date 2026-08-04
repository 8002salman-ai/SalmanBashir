import { useEffect, useState } from "react";
import {
  AdminBadge,
  AdminButton,
  AdminCard,
  AdminError,
  AdminField,
  AdminInput,
  AdminNotice,
  AdminSelect,
  AdminToggle,
} from "./ui";
import { fetchList, useAdminClient, useAdminStatus } from "./shared";

type Link = {
  id?: string;
  platform: string;
  url: string;
  handle: string;
  icon: string;
  display_order: number;
  is_active: boolean;
};

const PLATFORMS = ["github", "linkedin", "x", "youtube", "instagram", "facebook", "tiktok", "fiverr"];

const empty = (): Link => ({
  platform: "github",
  url: "https://",
  handle: "",
  icon: "github",
  display_order: 0,
  is_active: true,
});

export function LinksSection() {
  const sb = useAdminClient();
  const { status, run } = useAdminStatus();
  const [links, setLinks] = useState<Link[]>([]);
  const [editing, setEditing] = useState<Link | null>(null);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const rows = await fetchList<Link>(sb, "social_links", { order: "display_order" });
      setLinks(rows);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load links.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sb]);

  async function saveRow(row: Link) {
    await run(async () => {
      const { error } = await sb.from("social_links").upsert(row);
      if (error) throw new Error(error.message);
      setEditing(null);
      await load();
    });
  }

  async function toggleRow(row: Link) {
    await run(async () => {
      const { error } = await sb
        .from("social_links")
        .update({ is_active: !row.is_active })
        .eq("id", row.id);
      if (error) throw new Error(error.message);
      await load();
    });
  }

  async function deleteRow(row: Link) {
    if (!row.id) return;
    await run(async () => {
      const { error } = await sb.from("social_links").delete().eq("id", row.id);
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
        title="Social links"
        description="Links shown in the navbar, footer and contact section. Only active links display."
        action={
          <AdminButton onClick={() => setEditing(empty())}>Add link</AdminButton>
        }
      >
        {links.length === 0 && (
          <p className="text-sm text-zinc-500">No social links yet.</p>
        )}
        <ul className="divide-y divide-zinc-800">
          {links.map((link) => (
            <li key={link.id ?? link.platform} className="flex items-center gap-3 py-3">
              <AdminBadge tone="cyan">{link.platform}</AdminBadge>
              <span className="flex-1 truncate text-sm text-zinc-300">{link.url}</span>
              {!link.is_active && <AdminBadge tone="zinc">hidden</AdminBadge>}
              <AdminToggle
                label={`Toggle ${link.platform}`}
                checked={link.is_active}
                onChange={() => toggleRow(link)}
              />
              <div className="flex gap-2">
                <AdminButton variant="ghost" onClick={() => setEditing({ ...link })}>
                  Edit
                </AdminButton>
                <AdminButton variant="danger" onClick={() => deleteRow(link)}>
                  Delete
                </AdminButton>
              </div>
            </li>
          ))}
        </ul>
      </AdminCard>

      {editing && (
        <AdminCard title={editing.id ? "Edit link" : "New link"}>
          <div className="grid gap-4 sm:grid-cols-2">
            <AdminField label="Platform">
              <AdminSelect
                value={editing.platform}
                onChange={(e) => setEditing({ ...editing, platform: e.target.value, icon: e.target.value })}
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </AdminSelect>
            </AdminField>
            <AdminField label="Display order">
              <AdminInput
                type="number"
                value={editing.display_order}
                onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })}
              />
            </AdminField>
            <AdminField label="URL" hint="Full URL including https://">
              <AdminInput value={editing.url} onChange={(e) => setEditing({ ...editing, url: e.target.value })} />
            </AdminField>
            <AdminField label="Handle" hint="e.g. @salmanbashir">
              <AdminInput value={editing.handle} onChange={(e) => setEditing({ ...editing, handle: e.target.value })} />
            </AdminField>
          </div>
          <div className="mt-4 flex gap-2">
            <AdminButton onClick={() => saveRow(editing)} disabled={status.type === "loading"}>
              Save
            </AdminButton>
            <AdminButton variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </AdminButton>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
