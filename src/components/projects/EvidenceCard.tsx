import type { EvidenceItem, EvidenceStatus } from "@/data/projects";
import { Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const evidenceIcon: Record<EvidenceItem["type"], IconName> = {
  "Live website": "globe",
  "GitHub repository": "github",
  Screenshot: "file",
  Dashboard: "chart",
  Spreadsheet: "sheet",
  "Workflow diagram": "trend",
  Catalogue: "store",
  Documentation: "book",
  Deployment: "box",
  "Operational record": "layers",
};

const statusStyles: Record<EvidenceStatus, string> = {
  Verified: "border-brand-500/30 bg-brand-500/10 text-accent-strong",
  "Available on Request": "border-edge-strong bg-panel-strong text-strong",
  "Private / Sanitized": "border-edge bg-panel text-faint",
  "In Development": "border-gold-accent/30 bg-gold-accent/10 text-gold-accent",
  Planned: "border-edge bg-panel text-muted",
};

export function EvidenceCard({ item }: { item: EvidenceItem }) {
  const tone = item.status === "Verified" ? "live" : undefined;
  return (
    <div className="card flex h-full flex-col p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
          <Icon name={evidenceIcon[item.type]} className="h-4 w-4" />
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium",
            statusStyles[item.status],
          )}
        >
          {tone === "live" && (
            <span className="h-1 w-1 rounded-full bg-current opacity-80" />
          )}
          {item.status}
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold text-strong">{item.label}</p>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-faint">
        {item.type}
      </p>
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="external-link mt-3 text-xs font-semibold text-accent-strong hover:text-accent"
        >
          View evidence
          <Icon name="external" className="external-icon h-3 w-3 opacity-70" />
        </a>
      )}
    </div>
  );
}
