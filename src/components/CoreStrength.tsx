import { coreStrengths, personal } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function CoreStrength() {
  return (
    <section id="core-strength" className="relative pt-12 pb-8 sm:pt-16 sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Core Strength"
            title={
              <>
                {personal.coreMessage}
              </>
            }
            description={personal.supportingLine}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreStrengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover group relative h-full overflow-hidden p-5 border-edge-strong bg-gradient-to-b from-panel via-panel to-panel/70 hover:border-brand-400/50 hover:shadow-lg hover:shadow-brand-500/10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-500/15 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong transition-transform group-hover:scale-110">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] font-bold text-faint group-hover:text-accent-strong transition-colors">
                    0{i + 1} //
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {s.desc}
                </p>
                <ul className="mt-3.5 space-y-1.5 border-t border-edge/60 pt-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs font-medium text-soft"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
