import { Link } from "react-router-dom";
import { businessPillars } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function BusinessPillars() {
  return (
    <section id="business-pillars" className="relative pt-8 pb-12 sm:pt-10 sm:pb-16">
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessPillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                to={p.href}
                className="card card-hover group relative flex h-full flex-col p-5 border-edge-strong bg-gradient-to-b from-panel to-panel/60 hover:border-brand-400/50 hover:shadow-lg hover:shadow-brand-500/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong transition-transform duration-300 group-hover:scale-110">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-faint group-hover:text-accent-strong transition-colors">
                    Pillar 0{i + 1}
                    <Icon
                      name="arrow"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {p.desc}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-1 text-[11px] font-semibold text-accent-strong opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Pillar <Icon name="arrow" className="h-3 w-3" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
