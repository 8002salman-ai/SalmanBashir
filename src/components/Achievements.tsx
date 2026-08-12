import { Link } from "react-router-dom";
import { achievements } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function Achievements() {
  return (
    <Reveal>
      <div id="achievements" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
            <Icon name="star" className="h-5 w-5" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-strong">
              Selected Achievements
            </h2>
            <p className="text-sm text-muted">
              Evidence-backed milestones from real project and operational
              work — each linked to the page where it is explained.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <Link
              key={a.title}
              to={a.href}
              className="card card-hover group flex h-full flex-col p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                <Icon name={a.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-3.5 font-display text-sm font-semibold text-strong">
                {a.title}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">
                {a.desc}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-accent-strong">
                View evidence
                <Icon
                  name="arrow"
                  className="h-3 w-3 -translate-x-0.5 transition-transform group-hover:translate-x-0"
                />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-4 text-xs text-faint">
          No awards, clients, revenue or dates are invented here — each
          achievement reflects work shown in the linked projects and case
          studies.
        </p>
      </div>
    </Reveal>
  );
}
