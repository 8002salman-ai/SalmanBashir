import { services } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function Services() {
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
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-white/[0.04]">
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20" />

                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-brand-300">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/[0.06] transition-colors group-hover:text-brand-500/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>

                <ul className="mt-3 space-y-1 border-t border-white/[0.06] pt-3">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-xs text-zinc-400"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-brand-400"
                        strokeWidth={2.2}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group/link mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
                >
                  Discuss This Service
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
