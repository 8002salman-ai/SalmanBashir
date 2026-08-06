import type { ProcessStep } from "@/data/projects";
import { Reveal } from "@/components/ui";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative ml-2 space-y-6 border-l border-edge pl-6 sm:pl-8">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 60} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 ring-4 ring-brand-500/15 sm:-left-[39px]"
          />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
            Step {String(i + 1).padStart(2, "0")}
          </p>
          <h4 className="mt-1 font-display text-base font-semibold text-strong">
            {s.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
}
