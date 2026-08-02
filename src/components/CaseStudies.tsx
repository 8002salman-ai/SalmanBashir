import { caseStudies } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-gold-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title={
              <>
                Outcomes that speak{" "}
                <span className="text-gradient-brand">for themselves</span>
              </>
            }
            description="A closer look at how systems, automation and AI integration translate into measurable business control."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                    {cs.client}
                  </span>
                  <Icon
                    name="arrow"
                    className="h-5 w-5 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-brand-300"
                  />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {cs.outcome}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-display text-base font-semibold text-brand-300">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-zinc-500">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-brand-500/10 px-2 py-0.5 text-[11px] font-medium text-brand-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
