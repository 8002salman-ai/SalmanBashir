import { Icon } from "@/components/ui";

export function RoleSummary({
  role,
  roleAreas,
}: {
  role: string;
  roleAreas: string[];
}) {
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
          <Icon name="briefcase" className="h-4 w-4" />
        </span>
        <h3 className="font-display text-lg font-semibold text-strong">
          Salman&rsquo;s Role
        </h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{role}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {roleAreas.map((r) => (
          <li
            key={r}
            className="rounded-md border border-brand-500/20 bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-accent-strong"
          >
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
