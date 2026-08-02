import { marketplaces, techStack, aiCapabilities } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function Stack() {
  return (
    <section id="stack" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Marketplace Experience & Tools"
            title={
              <>
                Hands-on working experience,{" "}
                <span className="text-gradient-brand">not a skills list</span>
              </>
            }
            description="These are the marketplaces I've operated on and the tools I use to build systems — presented as experience, without fake skill percentages."
          />
        </Reveal>

        {/* Marketplace Experience */}
        <Reveal className="mt-10">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Icon name="store" className="h-5 w-5 text-brand-300" />
                <h3 className="font-display text-lg font-semibold text-white">
                  Marketplace Experience
                </h3>
              </div>
              <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                Operations · Listings · Support · Payouts
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Hands-on working experience across these platforms — listings,
              inventory, pricing, buyer support and payout workflows.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {marketplaces.map((m) => (
                <span
                  key={m}
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-white"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 transition-transform group-hover:scale-125" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* AI capabilities + Tools */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* AI-assisted capabilities */}
          <Reveal>
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Icon name="cpu" className="h-5 w-5 text-brand-300" />
                <h3 className="font-display text-lg font-semibold text-white">
                  AI-Assisted Capabilities
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                Practical, hands-on working experience applying AI to real
                business workflows.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="h-full rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Icon name="settings" className="h-5 w-5 text-brand-300" />
                <h3 className="font-display text-lg font-semibold text-white">
                  Tools & Platforms
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                The tools behind the systems I build and run.
              </p>
              <div className="mt-4 space-y-4">
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
