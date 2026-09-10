import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

interface LiveWebsiteCardProps {
  className?: string;
}

export function LiveWebsiteCard({ className }: LiveWebsiteCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#12141e] via-[#0d0e15] to-[#0a0b10] p-4 text-left shadow-2xl transition-all duration-300 hover:border-brand-400/60 hover:shadow-brand-500/10",
        className,
      )}
    >
      {/* Decorative ambient gradient */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-500/15 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />

      {/* Browser Bar Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>

        {/* Mock Browser URL Bar */}
        <a
          href="https://luxedge.us"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-mono text-zinc-300 transition-colors hover:border-brand-400/50 hover:text-white"
        >
          <span className="text-emerald-400 text-[10px]">🔒</span>
          <span className="truncate">luxedge.us</span>
          <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45 text-zinc-400" />
        </a>

        {/* Live Pulse Indicator */}
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span>Live Site</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-3.5 flex items-start gap-3.5">
        {/* Brand Mark */}
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white/5 p-2 shadow-inner">
          <img
            src="/images/projects/luxedge-mark.png"
            alt="Luxedge Logo"
            className="h-full w-full object-contain"
            onError={(e) => {
              // Fallback to text icon if image fails
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-brand-300 font-display -z-10">
            LX
          </div>
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-sm font-bold text-white tracking-tight sm:text-base">
              LuxEdge
            </h3>
            <span className="rounded bg-brand-500/15 border border-brand-400/30 px-1.5 py-0.2 text-[9px] font-semibold uppercase tracking-wider text-brand-300">
              Active Store
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-zinc-300">
            Live e-commerce brand engineered with modern catalog architecture, PWA, and optimized checkout flow.
          </p>
        </div>
      </div>

      {/* Feature tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
          Pet Supplies
        </span>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
          React & Vite
        </span>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">
          PWA
        </span>
        <span className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 text-[10px] text-emerald-300 font-medium">
          Production Live
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-3.5 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
        <a
          href="https://luxedge.us"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-2 text-xs font-bold text-black shadow-md shadow-brand-500/20 transition-all hover:brightness-110 active:scale-95"
        >
          <span>Open Website</span>
          <Icon name="arrow" className="h-3 w-3 -rotate-45" />
        </a>
        <a
          href="https://github.com/8002salman-ai/luxedge-website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white active:scale-95"
        >
          <Icon name="github" className="h-3.5 w-3.5" />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  );
}
