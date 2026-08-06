import type { EvidenceItem } from "@/data/projects";
import { sanitizationDisclosure } from "@/data/projects";
import { Icon, Reveal } from "@/components/ui";
import { EvidenceCard } from "./EvidenceCard";

export function ProofOfWork({ evidence }: { evidence: EvidenceItem[] }) {
  if (evidence.length === 0) return null;
  return (
    <Reveal>
      <div>
        <h2 className="font-display text-xl font-semibold text-strong">
          Proof of Work
        </h2>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
          Each item carries an honest evidence status. &ldquo;Verified&rdquo;
          is only used where the item exists today and can be shown to you on
          request.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {evidence.map((e) => (
            <EvidenceCard key={`${e.type}-${e.label}`} item={e} />
          ))}
        </div>
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-faint">
          <Icon
            name="shield"
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
          />
          {sanitizationDisclosure}
        </p>
      </div>
    </Reveal>
  );
}
