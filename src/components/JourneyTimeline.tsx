import { useState } from "react";
import { Link } from "react-router-dom";
import { journeyPhases } from "@/data/journeyPhases";
import { projects } from "@/data/content";
import { Icon, StatusBadge } from "@/components/ui";
import { TimelineMediaPanel } from "@/components/TimelineMediaPanel";
import { cn } from "@/utils/cn";

/* Interactive, keyboard-accessible vertical timeline of the eight career
   phases. Each entry is a real <button> that toggles an accordion panel,
   with aria-expanded wired for assistive tech. No 3D effects, no parallax,
   no auto-scroll — reveal is a simple height/opacity transition that
   respects prefers-reduced-motion globally (see index.css). */
export function JourneyTimeline() {
  const [openId, setOpenId] = useState<string>(journeyPhases[journeyPhases.length - 1].id);

  return (
    <ol className="relative space-y-3">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-[19px] top-2 w-px bg-edge sm:left-[23px]"
      />
      {journeyPhases.map((phase) => {
        const open = openId === phase.id;
        const relatedProjects = phase.relatedProjects
          .map((slug) => projects.find((p) => p.slug === slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <li key={phase.id} id={phase.id} className="relative scroll-mt-24">
            <div
              className={cn(
                "relative rounded-2xl border bg-panel transition-colors duration-300",
                open ? "border-brand-500/35" : "border-edge",
              )}
            >
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`phase-panel-${phase.id}`}
                  id={`phase-button-${phase.id}`}
                  onClick={() => setOpenId(open ? "" : phase.id)}
                  className="flex w-full items-start gap-4 rounded-2xl p-4 text-left sm:p-5"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-11 sm:w-11",
                      open
                        ? "border-brand-400 bg-brand-500/15 text-accent-strong"
                        : "border-edge-strong bg-panel-strong text-muted",
                    )}
                  >
                    <Icon name={phase.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent-strong">
                        Phase {phase.order}
                      </span>
                      <span className="text-xs font-medium text-faint">
                        {phase.periodLabel}
                      </span>
                    </span>
                    <span className="mt-1.5 block font-display text-lg font-semibold text-strong sm:text-xl">
                      {phase.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {phase.summary}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-edge text-muted transition-transform duration-300",
                      open && "rotate-45 border-brand-500/40 text-accent-strong",
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </h3>

              <div
                id={`phase-panel-${phase.id}`}
                role="region"
                aria-labelledby={`phase-button-${phase.id}`}
                className={cn(
                  "grid transition-all duration-300",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="space-y-5 px-4 pb-5 sm:px-5 sm:pb-6">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {phase.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm leading-relaxed text-soft">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.2} />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                          Key skills
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {phase.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-lg border border-edge bg-panel-strong px-2.5 py-1 text-xs font-medium text-soft"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                          Tools and platforms
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {phase.tools.map((t) => (
                            <span
                              key={t}
                              className="rounded-lg border border-edge bg-panel-strong px-2.5 py-1 text-xs font-medium text-soft"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <TimelineMediaPanel phase={phase} />

                    {relatedProjects.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                          Related projects
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {relatedProjects.map((p) => (
                            <Link
                              key={p.slug}
                              to={`/projects/${p.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel-strong px-3 py-1.5 text-xs font-semibold text-accent-strong transition-colors hover:border-brand-500/40"
                            >
                              {p.name}
                              <Icon name="arrow" className="h-3 w-3" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.id === "hermes-ai-agent-and-automation" && (
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge tone="active">In Development</StatusBadge>
                        <Link to="/ai-automation" className="btn btn-secondary btn-sm">
                          View AI &amp; Automation
                          <Icon name="arrow" className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
