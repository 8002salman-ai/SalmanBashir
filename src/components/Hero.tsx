import { personal, stats, trustItems } from "@/data/content";
import { Icon } from "@/components/ui";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[5%] top-[20%] h-[320px] w-[320px] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute left-[2%] top-[40%] h-[280px] w-[280px] rounded-full bg-brand-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available for new projects · {personal.location}
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              <span className="text-gradient">{personal.heroHeading}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {personal.heroSub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Book a Consultation
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.06]"
              >
                View My Projects
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-950/40 p-4">
                  <dt className="font-display text-2xl font-semibold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-zinc-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: floating dashboard mockup */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              {/* glow behind */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-gold-500/20 blur-2xl" />

              <div className="animate-float rounded-2xl border border-white/10 bg-ink-900/80 p-5 shadow-2xl backdrop-blur-xl">
                {/* window header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gold-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400/70" />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-500">
                    ERP · Marketplace Dashboard
                  </span>
                </div>

                {/* dashboard body */}
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { l: "Sales", v: "Rs 1.2M", c: "text-brand-300" },
                      { l: "Profit", v: "Rs 318K", c: "text-gold-300" },
                      { l: "Payout", v: "Eligible", c: "text-brand-300" },
                    ].map((m) => (
                      <div
                        key={m.l}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5"
                      >
                        <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                          {m.l}
                        </p>
                        <p className={`mt-0.5 text-sm font-semibold ${m.c}`}>
                          {m.v}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* chart */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-zinc-300">
                        Monthly Revenue
                      </p>
                      <span className="rounded-md bg-brand-500/15 px-1.5 py-0.5 text-[10px] font-medium text-brand-300">
                        +18.4%
                      </span>
                    </div>
                    <div className="mt-3 flex h-20 items-end gap-1.5">
                      {[40, 55, 35, 70, 50, 80, 60, 95, 75, 88, 65, 100].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-brand-500/30 to-brand-400"
                            style={{ height: `${h}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* marketplace rows */}
                  <div className="space-y-2">
                    {[
                      { name: "eBay", sales: "Rs 420K", dot: "bg-brand-400" },
                      { name: "Amazon", sales: "Rs 360K", dot: "bg-gold-400" },
                      { name: "TikTok Shop", sales: "Rs 210K", dot: "bg-brand-400" },
                    ].map((mp) => (
                      <div
                        key={mp.name}
                        className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
                      >
                        <span className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className={`h-1.5 w-1.5 rounded-full ${mp.dot}`} />
                          {mp.name}
                        </span>
                        <span className="text-xs font-medium text-white">
                          {mp.sales}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating AI chip */}
              <div className="absolute -left-6 top-1/3 hidden animate-float [animation-delay:1.5s] rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                  AI Control
                </p>
                <p className="text-xs font-semibold text-brand-300">
                  3 models routed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 border-y border-white/[0.06] py-5">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
            A combination most consultants don't bring
          </p>
          <div className="mask-fade-edges overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...trustItems, ...trustItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-zinc-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
