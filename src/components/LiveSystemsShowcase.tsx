import { LiveWebsiteCard } from "@/components/LiveWebsiteCard";
import { Icon, Reveal } from "@/components/ui";

export function LiveSystemsShowcase() {
  return (
    <section id="live-systems" className="relative py-16 sm:py-24 scroll-mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE WEBSITE / SYSTEM SHOWCASE
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Live Systems Built by Salman
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Interact with live production platforms, e-commerce brands, and operational systems — proving I engineer real systems rather than simply talk about AI.
            </p>
          </Reveal>

          <Reveal delay={60}>
            <a
              href="https://github.com/8002salman-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              <Icon name="github" className="h-4 w-4" />
              <span>All GitHub Repositories</span>
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Embedded Interactive Live Showcase */}
        <Reveal delay={100}>
          <LiveWebsiteCard />
        </Reveal>
      </div>
    </section>
  );
}
