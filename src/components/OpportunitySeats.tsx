import { Link } from "react-router-dom";
import { opportunitySeats } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function OpportunitySeats() {
  return (
    <section id="opportunity" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="Limited, focused ways to work together"
            description="Small capacity keeps the work personal and the systems practical."
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {opportunitySeats.map((o, i) => (
            <Reveal key={o.title} delay={i * 80}>
              <Link
                to={o.href}
                className="group flex h-full flex-col rounded-2xl border border-edge bg-panel p-6 transition-colors hover:border-brand-500/40 hover:bg-panel-strong"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-strong">
                  {o.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {o.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong">
                  {o.cta}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
