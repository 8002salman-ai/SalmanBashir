import { Link } from "react-router-dom";
import { personal, stats, ceoNote } from "@/data/content";
import { Icon } from "@/components/ui";
import { LiveWebsiteCard } from "@/components/LiveWebsiteCard";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroPanels } from "@/components/HeroPanels";
import { SoSaiBadge } from "@/components/SoSaiBadge";
import { GithubHeroStrip } from "@/components/GithubHeroStrip";
import { YoutubeHeroStrip } from "@/components/YoutubeHeroStrip";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute right-[5%] top-[20%] h-[300px] w-[300px] rounded-full bg-gold-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-6 md:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <div className="relative min-w-0 animate-fade-up">
            <SoSaiBadge className="w-full" />

            {/* Executive Identity Header: Monogram, Name, Verified Badge & Executive Role */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-edge pb-5">
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Luxury Executive Monogram */}
                <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-edge-strong bg-gradient-to-br from-brand-500/30 via-panel to-transparent p-0.5 shadow-xl shadow-brand-500/10 backdrop-blur">
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-panel-strong border border-edge">
                    <span className="font-display text-lg sm:text-xl font-black tracking-wider text-strong">
                      {personal.monogram}
                    </span>
                  </div>
                  {/* Status beacon dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-bg bg-emerald-500" />
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight text-strong drop-shadow-sm whitespace-nowrap">
                      {personal.name}
                    </h2>
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/40 bg-sky-500/15 px-2.5 py-0.5 text-[10.5px] font-bold text-sky-600 dark:text-sky-300 backdrop-blur shadow-sm whitespace-nowrap">
                      <Icon name="check" className="h-2.5 w-2.5 stroke-[3]" />
                      <span>Verified Executive</span>
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/40 bg-amber-400/15 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-amber-600 dark:text-amber-300 shadow-sm">
                      <span>👑</span>
                      <span>{ceoNote.title}</span>
                    </span>
                    <span className="text-muted">·</span>
                    <span className="font-semibold text-soft">
                      Enterprise Systems & Operations Architect
                    </span>
                  </div>
                </div>
              </div>

              {/* Status pill badge */}
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>{personal.heroBadge}</span>
              </div>
            </div>

            {/* Master Headline & Motive — High-Power, Expansive, Ultra-Sharp */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-brand-600 dark:text-brand-300 mb-3 shadow-inner">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 dark:bg-brand-400 animate-pulse" />
                <span>Operator-Led Systems Architecture</span>
              </div>

              <h1 className="font-display text-[2.15rem] sm:text-[2.85rem] lg:text-[3.25rem] font-black leading-[1.12] tracking-[-0.03em] text-strong">
                I master the <span className="text-strong">operations first</span>.
                <br />
                Then I build the{" "}
                <span className="relative inline-block bg-gradient-to-r from-brand-500 via-cyan-500 to-emerald-500 dark:from-brand-300 dark:via-cyan-300 dark:to-emerald-400 bg-clip-text text-transparent drop-shadow">
                  <RotatingWord
                    words={[
                      "Business Systems",
                      "Autonomous ERPs",
                      "Marketplace Engines",
                      "AI Automations",
                      "Supply Chain Pipelines"
                    ]}
                  />
                </span>
                <br className="hidden sm:inline" />
                {" "}that hold up under real-world pressure.
              </h1>

              {/* Expanded Motive & Authoritative Narrative */}
              <p className="mt-4 max-w-2xl text-base sm:text-[17px] leading-relaxed text-soft font-normal">
                Built directly on the front lines of global commerce — managing multi-million order flows, listings, supplier logistics, and algorithmic fee reconciliation. I bridge hands-on operational execution with production-grade engineering: custom ERP workflows, profit engines, and autonomous AI systems built to scale.
              </p>
            </div>

            {/* Marketplace Credibility Badges — Rich Floating Glassmorphic Chips */}
            <div className="mt-5 rounded-xl border border-edge bg-panel p-3 backdrop-blur-sm">
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted flex items-center gap-1.5 mb-2.5">
                <Icon name="badge" className="h-3.5 w-3.5 text-brand-400" />
                <span>Verified Marketplace & Platform Specialization:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-2.5 py-1 text-[11.5px] font-bold text-yellow-700 dark:text-yellow-300 shadow-sm transition-all hover:border-yellow-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                  eBay
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-[11.5px] font-bold text-rose-700 dark:text-rose-300 shadow-sm transition-all hover:border-rose-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-400" />
                  TikTok Shop
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[11.5px] font-bold text-amber-700 dark:text-amber-300 shadow-sm transition-all hover:border-amber-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-400" />
                  Amazon
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-[11.5px] font-bold text-orange-700 dark:text-orange-300 shadow-sm transition-all hover:border-orange-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-orange-500 dark:bg-orange-400" />
                  Etsy
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-[11.5px] font-bold text-sky-700 dark:text-sky-300 shadow-sm transition-all hover:border-sky-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-400" />
                  Mercari
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11.5px] font-bold text-red-700 dark:text-red-300 shadow-sm transition-all hover:border-red-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400" />
                  Depop
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-red-400/30 bg-red-400/10 px-2.5 py-1 text-[11.5px] font-bold text-red-700 dark:text-red-200 shadow-sm transition-all hover:border-red-400 hover:scale-105">
                  <span className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400" />
                  AliExpress
                </span>
              </div>
            </div>

            {/* Executive Action CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/book"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 px-6 py-3.5 text-sm font-extrabold text-black shadow-xl shadow-brand-500/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="calendar" className="h-4 w-4" />
                <span>Meet Up / Schedule Briefing</span>
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-edge-strong bg-panel px-6 py-3.5 text-sm font-bold text-strong shadow-sm backdrop-blur transition-all duration-200 hover:border-brand-400/50 hover:bg-panel-strong hover:text-accent-strong hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="spark" className="h-4 w-4 text-brand-400" />
                <span>Explore Services & Systems</span>
              </Link>
            </div>

            {/* Live website preview card for latest build (e.g. luxedge.us) */}
            <LiveWebsiteCard className="mt-6 w-full md:hidden" />

            {/* Founder Philosophy & Motive Quote Card */}
            <div className="relative mt-6 max-w-xl overflow-hidden rounded-2xl border border-edge bg-panel-strong/60 p-4 backdrop-blur-md shadow-xl transition-all hover:border-brand-400/40">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-400/30 bg-brand-500/15 text-brand-400 font-serif text-2xl">
                  “
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-[13.5px] italic leading-relaxed text-soft">
                    “{ceoNote.message}”
                  </p>
                  <div className="mt-2.5 flex items-center gap-2 pt-2 border-t border-edge">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-strong">
                      Salman Bashir
                    </span>
                    <span className="text-muted">·</span>
                    <span className="text-[11px] font-semibold text-brand-400">Founder & Systems Architect</span>
                    <span className="text-muted hidden sm:inline">·</span>
                    <span className="text-[10.5px] text-muted hidden sm:inline">Operator-First Engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust labels — qualitative, operator credentials */}
            <dl className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-edge bg-panel p-3 backdrop-blur transition-all duration-200 hover:border-brand-400/40 hover:bg-panel-strong"
                >
                  <dt className="font-display text-sm font-bold text-strong">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* YouTube Media Strip — @TheAIWithSalman */}
            <YoutubeHeroStrip className="mt-6" />
          </div>

          {/* Right: live preview on top, then all github repos, then quick links */}
          <div className="relative min-w-0 animate-fade-up [animation-delay:120ms]">
            {/* Live website preview card on top */}
            <LiveWebsiteCard className="mb-6 hidden w-full md:block" />

            {/* All repo links below live preview: new, old, and upcoming projects */}
            <GithubHeroStrip className="mb-6" />

            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/15 via-transparent to-gold-accent/15 blur-2xl" />
              <HeroPanels className="w-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
