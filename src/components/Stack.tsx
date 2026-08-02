import { marketplaces, techStack, aiCapabilities } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function Stack() {
  return (
    <section id="stack" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Platforms & Technology"
            title={
              <>
                Marketplaces, AI models and{" "}
                <span className="text-gradient-brand">tools I work with</span>
              </>
            }
            description="Real operational experience across major marketplaces — paired with a modern, AI-assisted technical stack for building business systems."
          />
        </Reveal>

        {/* Marketplaces */}
        <Reveal className="mt-14">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
            <div className="flex items-center gap-2">
              <Icon name="store" className="h-5 w-5 text-brand-300" />
              <h3 className="font-display text-lg font-semibold text-white">
                E-commerce Marketplaces
              </h3>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Direct operational experience across these platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {marketplaces.map((m) => (
                <span
                  key={m}
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 transition-transform group-hover:scale-125" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* AI capabilities + Tech stack */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {/* AI capabilities */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
              <div className="flex items-center gap-2">
                <Icon name="cpu" className="h-5 w-5 text-brand-300" />
                <h3 className="font-display text-lg font-semibold text-white">
                  AI Consultancy Capabilities
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                Practical AI use-cases for real business workflows.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {aiCapabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-xs text-zinc-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Tech stack */}
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-9">
              <div className="flex items-center gap-2">
                <Icon name="settings" className="h-5 w-5 text-brand-300" />
                <h3 className="font-display text-lg font-semibold text-white">
                  Technical Stack & Tools
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                AI-assisted product building — not traditional software engineering.
              </p>
              <div className="mt-6 space-y-5">
                {techStack.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      {cat.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[11px] font-medium text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
