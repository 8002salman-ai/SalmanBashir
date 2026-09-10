import { useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

interface LiveWebsiteCardProps {
  className?: string;
}

export function LiveWebsiteCard({ className }: LiveWebsiteCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const previewSrc = `/api/proxy-site?url=https://luxedge.us&v=${refreshKey}`;

  return (
    <>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#12141e] via-[#0d0e15] to-[#0a0b10] p-4 text-left shadow-2xl transition-all duration-300 hover:border-brand-400/60 hover:shadow-brand-500/10",
          className,
        )}
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-500/15 blur-2xl transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />

        {/* Browser Navigation Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Interactive URL bar */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] font-mono text-zinc-300">
            <span className="text-emerald-400 text-[10px]">🔒</span>
            <span className="truncate max-w-[140px] sm:max-w-[200px]">https://luxedge.us</span>
            <button
              type="button"
              onClick={() => {
                setIframeLoaded(false);
                setRefreshKey((k) => k + 1);
              }}
              title="Reload live preview"
              className="text-zinc-400 hover:text-white transition-colors ml-0.5"
            >
              <Icon name="clock" className="h-2.5 w-2.5" />
            </button>
          </div>

          {/* Controls: Expand / Live Badge */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Live Store</span>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              title="Expand live view"
              className="rounded-md border border-white/10 bg-white/5 p-1 text-zinc-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Live Website Embedded Viewport */}
        <div className="relative mt-3 h-[320px] sm:h-[360px] lg:h-[380px] w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-inner">
          {/* Loading state indicator */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0d0e14] text-zinc-400 z-10">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
              <span className="text-xs font-mono">Loading live luxedge.us…</span>
            </div>
          )}

          {/* Embedded live website iframe */}
          <iframe
            key={refreshKey}
            src={previewSrc}
            title="LuxEdge Live Website Preview"
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
            className={cn(
              "h-full w-full border-0 transition-opacity duration-300",
              iframeLoaded ? "opacity-100" : "opacity-0",
            )}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />

          {/* Overlay hover bar for quick actions */}
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-1 rounded-lg bg-black/80 backdrop-blur border border-white/20 px-2 py-1 text-[11px] font-medium text-white shadow-lg hover:bg-black transition-colors"
            >
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>Expand</span>
            </button>
            <a
              href="https://luxedge.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-2.5 py-1 text-[11px] font-bold text-black shadow-lg hover:brightness-110 transition-all"
            >
              <span>Visit Site</span>
              <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
            </a>
          </div>
        </div>

        {/* Site Details Bar */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-7 w-7 rounded-lg border border-white/10 bg-white/5 p-1 shrink-0">
              <img
                src="/images/projects/luxedge-mark.png"
                alt="LuxEdge"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-display text-xs font-bold text-white truncate">LuxEdge</h4>
                <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[8.5px] font-bold text-emerald-400">
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                Live e-commerce storefront · Pet & Animal Essentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://github.com/8002salman-ai/luxedge-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <Icon name="github" className="h-3 w-3" />
              <span>Code</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://luxedge.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-400 hover:text-cyan-300 transition-colors"
            >
              <span>Open Store</span>
              <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
            </a>
          </div>
        </div>
      </div>

      {/* Expanded Live Website Modal */}
      {isExpanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="LuxEdge Live Website Preview"
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsExpanded(false)}
            />

            {/* Modal Dialog Window */}
            <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0c0e14] shadow-2xl">
              {/* Modal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#121520] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="ml-2 font-display text-sm font-bold text-white">
                    LuxEdge Live Production Preview
                  </span>
                </div>

                {/* Central URL Bar */}
                <a
                  href="https://luxedge.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-xs font-mono text-zinc-300 hover:text-white hover:border-brand-400"
                >
                  <span className="text-emerald-400">🔒</span>
                  <span>https://luxedge.us</span>
                  <Icon name="arrow" className="h-3 w-3 -rotate-45 text-zinc-400" />
                </a>

                {/* Header Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://luxedge.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-1.5 text-xs font-bold text-black hover:brightness-110"
                  >
                    <span>Open in New Tab</span>
                    <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    aria-label="Close preview"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
                  >
                    <Icon name="x" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Fullscreen Iframe */}
              <div className="relative flex-1 bg-black">
                <iframe
                  src={previewSrc}
                  title="LuxEdge Live Desktop Preview"
                  className="h-full w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
