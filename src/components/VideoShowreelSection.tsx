import { Link } from "react-router-dom";
import { IntroVideoLightbox } from "@/components/IntroVideoLightbox";
import { Reveal, Eyebrow, Icon } from "@/components/ui";

export function VideoShowreelSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Dynamic Ambient Lighting Backdrops */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-amber-500/15 via-yellow-400/10 to-brand-500/10 blur-[130px]" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-brand-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <Eyebrow className="border-amber-500/30 bg-amber-500/10 text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Executive Showreel · 60 Seconds
            </Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-strong sm:text-5xl">
              See How The Systems Actually Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              A transparent, battle-tested walkthrough of multi-marketplace operations, international freight logistics, custom ERP automation, and audited unit economics.
            </p>
          </div>

          {/* Luxury Video Showcase Console */}
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="relative rounded-3xl sm:rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-b from-panel via-panel-strong to-bg p-3 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] sm:p-6 backdrop-blur-xl">
              {/* Corner Tech Accent Pins */}
              <div className="pointer-events-none absolute -top-1.5 -left-1.5 h-4 w-4 rounded-tl border-t-2 border-l-2 border-amber-400" />
              <div className="pointer-events-none absolute -top-1.5 -right-1.5 h-4 w-4 rounded-tr border-t-2 border-r-2 border-amber-400" />
              <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-4 w-4 rounded-bl border-b-2 border-l-2 border-amber-400" />
              <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-4 w-4 rounded-br border-b-2 border-r-2 border-amber-400" />

              <IntroVideoLightbox className="w-full" />
            </div>
          </div>

          {/* 3 Executive Pillars Under Video */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-edge bg-panel/70 p-5 backdrop-blur transition-all duration-300 hover:border-amber-400/50 hover:bg-panel hover:shadow-lg hover:shadow-amber-500/5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Icon name="store" className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-amber-300 border border-white/10">
                  5+ Marketplaces
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-strong">
                Live Multi-Channel Ops
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Real listings, order velocity, and payout tracking across eBay, TikTok Shop, Etsy, Mercari, and Depop. Not theoretical ideas.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-edge bg-panel/70 p-5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:bg-panel hover:shadow-lg hover:shadow-brand-500/5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
                  <Icon name="cpu" className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-brand-300 border border-white/10">
                  Proprietary Tech
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-strong">
                Custom Systems & AI
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Hermes AI Agent, Embani ERP, and automated operational pipelines designed to streamline fulfillment and eliminate bottleneck delays.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-edge bg-panel/70 p-5 backdrop-blur transition-all duration-300 hover:border-emerald-400/50 hover:bg-panel hover:shadow-lg hover:shadow-emerald-500/5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Icon name="target" className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-emerald-300 border border-white/10">
                  Audited Margins
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-strong">
                True Profit & COGS
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Every system starts with the money: landed product costs, international freight, platform fees, and net profit preservation.
              </p>
            </div>
          </div>

          {/* Quick Action Consultation Bar */}
          <div className="mx-auto mt-8 max-w-2xl flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-105 hover:shadow-amber-500/30 active:scale-95"
            >
              <Icon name="mail" className="h-4 w-4" />
              Discuss Your Operations
            </Link>
            <Link
              to="/fiverr"
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-xs font-semibold text-soft transition-all hover:border-amber-400/50 hover:text-strong"
            >
              <Icon name="spark" className="h-4 w-4 text-amber-400" />
              Hire on Fiverr
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
