import { Link } from "react-router-dom";
import { sourcingPreview } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function SourcingPreview() {
  return (
    <section id="sourcing-preview" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sourcing & Freight"
            title="Planned sourcing and logistics support"
            description="Structured research and operational guidance for finding products and moving them — with honest limits on what a consultant does and doesn't handle."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {sourcingPreview.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-edge bg-panel p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs font-medium text-soft"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-edge bg-panel p-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-muted">
              More on sourcing research, freight planning and what I do not do.
            </p>
            <Link
              to="/sourcing-freight"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
            >
              View Sourcing & Freight
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
