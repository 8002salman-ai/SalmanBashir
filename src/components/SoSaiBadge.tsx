import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

const AGENT_TASKS = [
  { action: "Reconciling multi-marketplace orders & payout fees", target: "Supabase DB", status: "OK", latency: "142ms" },
  { action: "Auditing eBay & TikTok Shop inventory velocity", target: "Stock Flow", status: "SYNCED", latency: "89ms" },
  { action: "Streaming Salman OS live project feed", target: "Vercel Edge", status: "ONLINE", latency: "45ms" },
  { action: "Verifying landed costs & supplier replenishment", target: "COGS Model", status: "ACTIVE", latency: "110ms" },
  { action: "Hermes Agent core healthy — listening for operational triggers", target: "Daemon", status: "READY", latency: "12ms" },
];

interface SoSaiBadgeProps {
  className?: string;
}

export function SoSaiBadge({ className }: SoSaiBadgeProps) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeTab, setActiveTab] = useState<"system" | "terminal">("system");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTaskIndex((prev) => (prev + 1) % AGENT_TASKS.length);
        setIsFading(false);
      }, 250);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentTask = AGENT_TASKS[taskIndex];
  const previewSrc = `/api/proxy-site?url=https://salman-os-swart.vercel.app&v=${refreshKey}`;

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

        {/* Browser / System Navigation Header Bar */}
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
            <span className="truncate max-w-[130px] sm:max-w-[180px]">salman-os-swart.vercel.app</span>
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

          {/* Controls: Mode Switcher & Expand */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle: System vs Terminal */}
            <div className="flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5 text-[10px] font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("system")}
                className={cn(
                  "rounded-md px-2 py-0.5 transition-colors",
                  activeTab === "system"
                    ? "bg-brand-500/20 text-brand-300 font-semibold border border-brand-400/30"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                App
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={cn(
                  "rounded-md px-2 py-0.5 transition-colors",
                  activeTab === "terminal"
                    ? "bg-brand-500/20 text-brand-300 font-semibold border border-brand-400/30"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                Agent Log
              </button>
            </div>

            {/* Live Badge */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Agent Online</span>
            </div>

            {/* Expand Button */}
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

        {/* Viewport Window (Height matches LiveWebsiteCard exactly) */}
        <div className="relative mt-3 h-[320px] sm:h-[360px] lg:h-[380px] w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-inner">
          {activeTab === "system" ? (
            <>
              {/* Loading State */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0d0e14] text-zinc-400 z-10">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
                  <span className="text-xs font-mono">Connecting to Salman OS…</span>
                </div>
              )}

              {/* Live Salman OS Iframe */}
              <iframe
                key={refreshKey}
                src={previewSrc}
                title="Salman OS Live System Preview"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                className={cn(
                  "h-full w-full border-0 transition-opacity duration-300",
                  iframeLoaded ? "opacity-100" : "opacity-0",
                )}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />

              {/* Floating Real-Time Agent HUD Bar at Bottom */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 rounded-lg border border-white/15 bg-black/85 px-3 py-1.5 backdrop-blur-md">
                <div className="flex items-center gap-2 min-w-0 font-mono text-[10.5px]">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-brand-400 shrink-0">agent:</span>
                  <span
                    className={`truncate text-zinc-200 transition-opacity duration-200 ${
                      isFading ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {currentTask.action}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-1 py-0.2 text-[9px] font-bold text-emerald-300">
                    {currentTask.status}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("terminal")}
                    className="text-[10px] text-zinc-400 hover:text-white underline underline-offset-2 ml-1"
                  >
                    Console
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Dedicated Terminal / Agent Activity Console */
            <div className="h-full w-full bg-[#07090e] p-3.5 font-mono text-xs flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    agent@salman-os:~$ workflow --live-stream
                  </span>
                  <span className="text-zinc-500 font-mono">Hermes-Daemon v2.4</span>
                </div>

                <div className="mt-3 space-y-2 text-[11.5px]">
                  {AGENT_TASKS.map((t, idx) => (
                    <div
                      key={t.action}
                      className={cn(
                        "flex items-start justify-between gap-2 rounded border px-2.5 py-1.5 transition-all",
                        idx === taskIndex
                          ? "border-brand-400/40 bg-brand-500/10 text-white"
                          : "border-white/5 bg-white/[0.02] text-zinc-400",
                      )}
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <span className={idx === taskIndex ? "text-brand-400" : "text-zinc-500"}>
                          {idx === taskIndex ? "▶" : "✓"}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-zinc-200">{t.action}</p>
                          <span className="text-[10px] text-zinc-500">Target: {t.target}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 text-right">
                        <span className="text-[10px] text-zinc-400">{t.latency}</span>
                        <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[9px] font-bold text-emerald-300">
                          {t.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-zinc-500">Daemon PID: 4092 · Memory: 42.8 MB</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("system")}
                  className="text-brand-400 hover:text-cyan-300 font-semibold"
                >
                  ← Back to Web App
                </button>
              </div>
            </div>
          )}

          {/* Overlay hover actions */}
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
              href="https://salman-os-swart.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-2.5 py-1 text-[11px] font-bold text-black shadow-lg hover:brightness-110 transition-all"
            >
              <span>Launch</span>
              <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
            </a>
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-400/40 bg-brand-500/10 text-brand-300 shrink-0">
              <Icon name="spark" className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-display text-xs font-bold text-white truncate">SoSAi Agent</h4>
                <span className="text-zinc-500 text-xs">·</span>
                <span className="text-xs font-semibold text-brand-400">Salman OS</span>
                <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[8.5px] font-bold text-emerald-400">
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                Autonomous Operations System · Multi-channel coordination
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/ai-automation"
              className="text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Architecture
            </Link>
            <span className="text-zinc-600">·</span>
            <Link
              to="/book"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-400 hover:text-cyan-300 transition-colors"
            >
              <span>Build Agent</span>
              <Icon name="arrow" className="h-2.5 w-2.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Fullscreen Expand Modal */}
      {isExpanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Salman OS Live System Preview"
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          >
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsExpanded(false)}
            />

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
                    SoSAi Agent / Salman OS Live Production Platform
                  </span>
                </div>

                <a
                  href="https://salman-os-swart.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-xs font-mono text-zinc-300 hover:text-white hover:border-brand-400"
                >
                  <span className="text-emerald-400">🔒</span>
                  <span>https://salman-os-swart.vercel.app</span>
                  <Icon name="arrow" className="h-3 w-3 -rotate-45 text-zinc-400" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://salman-os-swart.vercel.app"
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
                  title="Salman OS Fullscreen Live Preview"
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
