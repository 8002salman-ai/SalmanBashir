import { coreStrengths, personal } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function CoreStrength() {
  return (
    <section id="core-strength" className="relative py-16 sm:py-24">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreStrengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover group relative h-full overflow-hidden p-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <ul className="mt-3 space-y-1.5">
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
