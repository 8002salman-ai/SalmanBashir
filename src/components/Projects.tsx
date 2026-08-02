import { projects } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title={
              <>
                Real systems built for{" "}
                <span className="text-gradient-brand">real businesses</span>
              </>
            }
            description="A selection of platforms, dashboards and automation systems I've designed and built — from multi-company ERPs to AI-powered applications."
          />
        </Reveal>

        {/* Featured project */}
        <Reveal className="mt-14">
          <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
            </div>

            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                    Featured Case Study
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                    {featured.type}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {featured.desc}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {featured.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-zinc-300"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                        strokeWidth={2.2}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mock dashboard preview */}
              <div className="relative">
                <div className="rounded-2xl border border-white/10 bg-ink-950/60 p-4 shadow-2xl">
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { l: "Annual Sales", v: "Rs 14.2M", c: "text-brand-300" },
                      { l: "Owner Profit", v: "Rs 3.8M", c: "text-gold-300" },
                      { l: "Partner Profit", v: "Rs 1.2M", c: "text-brand-300" },
                      { l: "Available Withdrawal", v: "Rs 640K", c: "text-gold-300" },
                    ].map((m) => (
                        <div
                          key={m.l}
                          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                        >
                          <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                            {m.l}
                          </p>
                          <p className={`mt-1 text-sm font-semibold ${m.c}`}>
                            {m.v}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="mt-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                      Marketplace Performance
                    </p>
                    <div className="mt-2 space-y-1.5">
                      {[
                        { n: "eBay", w: "85%" },
                        { n: "Amazon", w: "70%" },
                        { n: "TikTok Shop", w: "55%" },
                      ].map((r) => (
                        <div key={r.n} className="flex items-center gap-2">
                          <span className="w-20 text-[11px] text-zinc-400">
                            {r.n}
                          </span>
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
                              style={{ width: r.w }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Rest of projects */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl border",
                      p.accent === "brand"
                        ? "border-brand-500/20 bg-brand-500/10 text-brand-300"
                        : "border-gold-500/20 bg-gold-500/10 text-gold-300",
                    )}
                  >
                    <Icon name="layers" className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-medium text-zinc-600">
                    {p.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.desc}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-zinc-400"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 shrink-0 text-brand-400"
                        strokeWidth={2.2}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-zinc-500"
                    >
                      {t}
                    </span>
                    ))}
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
    </section>
  );
}
