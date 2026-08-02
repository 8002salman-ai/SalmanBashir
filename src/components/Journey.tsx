import { Link } from "react-router-dom";
import { journey, values, personal } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function JourneySection() {
  return (
    <section id="journey" className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-brand-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Journey"
            title={
              <>
                From online operations to{" "}
                <span className="text-gradient-brand">building business systems</span>
              </>
            }
            description="A practical transition — starting on the operational side of online selling, then applying that understanding to design, automate and build systems that actually work."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <ol className="relative space-y-8 border-l border-edge pl-8 sm:pl-10">
            {journey.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90} className="relative">
                <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-brand-400 ring-4 ring-brand-500/15 sm:-left-10" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-accent-strong">
                    {item.period}
                  </span>
                  <span className="text-xs font-medium text-faint">
                    {item.role}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-strong">
                  {item.title}
                </h3>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          {/* Quote + values */}
          <Reveal delay={120}>
            <blockquote className="mt-10 rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-transparent p-5 text-center">
              <Icon
                name="badge"
                className="mx-auto h-8 w-8 text-accent"
                strokeWidth={1.6}
              />
              <p className="mx-auto mt-3 max-w-lg font-display text-lg font-semibold leading-snug text-strong">
                {personal.journeyQuote}
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                Values I Work By
              </p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-lg border border-edge bg-panel px-3 py-1.5 text-xs font-medium text-soft"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8 text-center">
            <Link
              to="/journey"
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
            >
              Read the full journey
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
