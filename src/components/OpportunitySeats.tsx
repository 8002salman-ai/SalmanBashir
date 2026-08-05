import { Link } from "react-router-dom";
import { opportunitySeats, practiceLab } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function OpportunitySeats() {
  return (
    <section id="opportunity" className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brand-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="Learning and practice, built to be accessible"
            description="Two ways to learn and practise the operational side of online business — one for committed learners with limited resources, one for structured hands-on practice."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {/* Opportunity Seats */}
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-strong">
                  {opportunitySeats.heading}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {opportunitySeats.copy}
              </p>
              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                  Selection based on
                </p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {opportunitySeats.selection.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-xs font-medium text-soft"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-5">
                <Link
                  to={opportunitySeats.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  {opportunitySeats.cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-[11px] text-faint">
                  Internal application — details shared on request.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Practice Lab */}
          <Reveal delay={80}>
            <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-accent/25 bg-gold-accent/10 text-gold-accent">
                  <Icon name="cpu" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-strong">
                    {practiceLab.heading}
                  </h3>
                  <p className="text-xs font-medium text-accent-strong">
                    {practiceLab.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {practiceLab.copy}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {practiceLab.exercises.map((e) => (
                  <span
                    key={e}
                    className="rounded-md border border-edge bg-panel-strong px-2.5 py-1 text-[11px] font-medium text-soft"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-faint">
                <Icon
                  name="shield"
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                />
                {practiceLab.note}
              </p>
              <div className="mt-auto pt-4">
                <Link
                  to={practiceLab.href}
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel-strong px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
                  Visit the Practice Lab
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
