import { Link } from "react-router-dom";
import { businessPillars } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function BusinessPillars() {
  return (
    <section id="business-pillars" className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-brand-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Business Hub"
            title="Four pillars of my work"
            description="Each area is built on real operational experience. Choose where you want to start."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                to={p.href}
                className="group relative flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-all hover:border-brand-500/40 hover:bg-panel-strong"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong transition-transform duration-300 group-hover:scale-110">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 text-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent-strong"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
