import { Link } from "react-router-dom";
import { services } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-14 sm:py-20">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/[0.07] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What I Do"
            title={
              <>
                Services built around{" "}
                <span className="text-gradient-brand">practical results</span>
              </>
            }
            description="From marketplace operations reviews to profit dashboards and ERP prototyping — every service is built around the way your business actually runs."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-panel-strong">
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-strong/10 transition-colors group-hover:text-brand-500/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>

                <ul className="mt-3 space-y-1 border-t border-edge pt-3">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/book"
                  className="group/link mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-accent-strong transition-colors hover:text-accent"
                >
                  Discuss This Service
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
          >
            Explore all services
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
