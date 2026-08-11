import { Link } from "react-router-dom";
import { businessProfile } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function BusinessProfile() {
  return (
    <section id="business-profile" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={businessProfile.eyebrow}
            title={businessProfile.title}
            description={businessProfile.intro}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessProfile.areas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 70}>
              <Link
                to={area.href}
                className="card card-hover group flex h-full flex-col p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon name={area.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-strong">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {area.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                  Explore
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 -translate-x-0.5 transition-transform group-hover:translate-x-0"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex items-start gap-3 rounded-2xl border border-gold-accent/25 bg-gold-accent/[0.08] p-4 text-sm text-soft">
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-gold-accent" />
            <p>{businessProfile.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
