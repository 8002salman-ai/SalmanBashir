import { personal, strengths, idealClients } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

const workingPrinciples: { icon: "target" | "shield" | "trend"; title: string; desc: string }[] = [
  {
    icon: "target",
    title: "Business-first",
    desc: "Systems are designed around how your business actually runs.",
  },
  {
    icon: "shield",
    title: "Private by default",
    desc: "Your data, processes and financials stay private and controlled.",
  },
  {
    icon: "trend",
    title: "Practical results",
    desc: "Every build is judged by time saved, clarity gained and decisions improved.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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

            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              {personal.positioning}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              I started on the operational side of online business — working
              with real listings, real orders, real fees and real payouts across
              multiple marketplaces. That experience shapes everything I build:
              dashboards that track true profit, workflows that remove
              repetitive work, and internal tools that match how a business
              actually operates.
            </p>

            {/* Highlighted quote */}
            <blockquote className="relative mt-8 overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-transparent p-6">
              <Icon
                name="message"
                className="absolute -right-3 -top-3 h-16 w-16 text-brand-500/10"
                strokeWidth={1.2}
              />
              <p className="font-display text-lg font-semibold leading-snug text-white">
                {personal.aboutQuote}
              </p>
            </blockquote>

            {/* Working principles */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {workingPrinciples.map((pr) => (
                <div
                  key={pr.title}
                  className="flex flex-col items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-brand-300">
                    <Icon name={pr.icon} className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {pr.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: strengths + ideal clients */}
          <Reveal delay={100}>
            <div className="space-y-5 lg:sticky lg:top-24">
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

              {/* Ideal clients */}
              <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="flex items-center gap-2">
                  <Icon name="users" className="h-5 w-5 text-brand-300" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    Who I Help
                  </h3>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
