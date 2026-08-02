import { problems } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function Problems() {
  return (
    <section id="problems" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Problems I Solve"
            title={
              <>
                Sound familiar? These are the{" "}
                <span className="text-gradient-brand">real business pain points</span>{" "}
                I fix
              </>
            }
            description="Most businesses aren't broken — they're just running on scattered spreadsheets, manual work and disconnected tools. I turn that chaos into clear, automated systems."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                  <Icon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
