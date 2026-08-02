import { personal, strengths, idealClients, principles } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: professional summary */}
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About Salman"
              title={
                <>
                  Business experience first.{" "}
                  <span className="text-gradient-brand">
                    Technology built around it.
                  </span>
                </>
              }
            />

            <p className="mt-4 text-base leading-relaxed text-muted">
              {personal.positioning}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {personal.professionalSummary}
            </p>

            {/* Highlighted quote */}
            <blockquote className="relative mt-6 overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-transparent p-5">
              <Icon
                name="message"
                className="absolute -right-3 -top-3 h-16 w-16 text-brand-500/10"
                strokeWidth={1.2}
              />
              <p className="font-display text-lg font-semibold leading-snug text-strong">
                {personal.aboutQuote}
              </p>
            </blockquote>

            {/* Working principles */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
              {principles.map((pr) => (
                <div
                  key={pr.title}
                  className="flex flex-col items-start gap-2.5 rounded-xl border border-edge bg-panel p-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name={pr.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-strong">
                      {pr.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: strengths + ideal clients */}
          <Reveal delay={100}>
            <div className="space-y-4 lg:sticky lg:top-24">
              {/* Strengths */}
              <div className="rounded-3xl border border-edge bg-panel p-5">
                <div className="flex items-center gap-2">
                  <Icon name="bolt" className="h-5 w-5 text-gold-accent" />
                  <h3 className="font-display text-lg font-semibold text-strong">
                    Core Strengths
                  </h3>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {strengths.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 rounded-xl border border-edge bg-panel-strong px-3 py-2"
                    >
                      <Icon
                        name="check"
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      <span className="text-sm text-soft">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal clients */}
              <div className="rounded-3xl border border-edge bg-panel p-5">
                <div className="flex items-center gap-2">
                  <Icon name="users" className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-lg font-semibold text-strong">
                    Who I Help
                  </h3>
                </div>
                <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {idealClients.map((c) => (
                    <div
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      {c}
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
