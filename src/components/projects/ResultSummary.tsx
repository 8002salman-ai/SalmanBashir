import { Icon } from "@/components/ui";

export function ResultSummary({
  outcomes,
}: {
  outcomes: string[];
}) {
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
          <Icon name="trend" className="h-4 w-4" />
        </span>
        <h3 className="font-display text-lg font-semibold text-strong">
          Outcomes and Current Status
        </h3>
      </div>
      <ul className="mt-4 space-y-2.5">
        {outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-soft">
            <Icon
              name="check"
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              strokeWidth={2.2}
            />
            {o}
          </li>
        ))}
      </ul>
    </div>
  );
}
