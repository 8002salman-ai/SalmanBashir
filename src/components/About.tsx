import { personal, strengths, values, experience, idealClients } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: intro + portrait card */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About Salman"
              title={
                <>
                  E-commerce operator &{" "}
                  <span className="text-gradient-brand">
                    AI-assisted systems builder
                  </span>
                </>
              }
            />

            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              {personal.positioning}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Based in {personal.location}, working with businesses across{" "}
              {personal.markets.slice(0, 4).join(", ")} and beyond. I focus on
              project-based, independent and result-focused work — building
              systems, automation and business-building projects rather than
              routine employment.
            </p>

            {/* Values */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Personal Values
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal clients */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                Ideal Clients
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {idealClients.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                      strokeWidth={2.2}
                    />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: experience + strengths */}
          <Reveal delay={100}>
            <div className="space-y-5">
              {/* Experience */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="flex items-center gap-2">
                  <Icon name="compass" className="h-5 w-5 text-brand-300" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    Professional Experience
                  </h3>
                </div>
                <div className="mt-6 space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.role} className="relative pl-6">
                      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-brand-400 ring-4 ring-brand-500/15" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h4 className="font-display text-base font-semibold text-white">
                          {exp.role}
                        </h4>
                        <span className="text-xs font-medium text-brand-300">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-500">{exp.company}</p>
                      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                        {exp.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-xs text-zinc-400"
                          >
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="flex items-center gap-2">
                  <Icon name="bolt" className="h-5 w-5 text-gold-300" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    Core Strengths
                  </h3>
                </div>
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {strengths.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5"
                    >
                      <Icon
                        name="check"
                        className="h-4 w-4 shrink-0 text-brand-400"
                        strokeWidth={2.2}
                      />
                      <span className="text-sm text-zinc-300">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
