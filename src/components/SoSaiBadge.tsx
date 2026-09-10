import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { cn } from "@/utils/cn";

const AGENT_WORKFLOWS = [
  { action: "Scanning 8002salman-ai repos for active commit logs & CI builds", target: "GitHub API", status: "SYNCED", latency: "38ms" },
  { action: "Auditing multi-marketplace order sync & fees in luxedge-website", target: "Stock Flow", status: "ONLINE", latency: "74ms" },
  { action: "Inspecting Supabase database connections for salman-os daemon", target: "Postgres", status: "HEALTHY", latency: "52ms" },
  { action: "Verifying Edge proxy routes & asset bundling on Vercel deployment", target: "Edge Network", status: "ACTIVE", latency: "22ms" },
  { action: "Autonomous Hermes core standing by — monitoring operational webhooks", target: "Agent Daemon", status: "READY", latency: "14ms" },
];

interface SoSaiBadgeProps {
  className?: string;
}

export function SoSaiBadge({ className }: SoSaiBadgeProps) {
  // By default, open directly to the live Agent Log & Repo Flash as requested
  const [activeTab, setActiveTab] = useState<"terminal" | "system">("terminal");
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [activeRepoIndex, setActiveRepoIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const zoomMode = "fit";

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(580);
  const [containerHeight, setContainerHeight] = useState(380);

  // Fetch all real GitHub repositories for 8002salman-ai
  const { repos: githubRepos, live: reposLive } = useGithubRepos([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth || 580);
        setContainerHeight(containerRef.current.clientHeight || 380);
      }
    };

    updateDimensions();
    const ro = new ResizeObserver(updateDimensions);
    ro.observe(containerRef.current);
    window.addEventListener("resize", updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Standard target desktop width for Salman OS system view
  const virtualDesktopWidth = 1240;
  const scale =
    zoomMode === "fit"
      ? Math.min(1, Math.max(0.25, containerWidth / virtualDesktopWidth))
      : 1;
  const iframeWidth = zoomMode === "fit" ? virtualDesktopWidth : containerWidth;
  const iframeHeight =
    zoomMode === "fit" ? Math.round(containerHeight / scale) : containerHeight;

  // Workflow cyclic ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setWorkflowIndex((prev) => (prev + 1) % AGENT_WORKFLOWS.length);
        setIsFading(false);
      }, 200);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  // GitHub Repo active flash highlighter (cycles every 2.8 seconds)
  useEffect(() => {
    if (!githubRepos.length) return;
    const repoTimer = setInterval(() => {
      setActiveRepoIndex((prev) => (prev + 1) % githubRepos.length);
    }, 2800);
    return () => clearInterval(repoTimer);
  }, [githubRepos.length]);

  const currentWorkflow = AGENT_WORKFLOWS[workflowIndex];
  const activeRepo = githubRepos[activeRepoIndex] || {
    name: "luxedge-website",
    desc: "Production e-commerce storefront with modern catalog architecture",
    stars: 12,
    language: "TypeScript",
    url: "https://github.com/8002salman-ai/luxedge-website",
  };

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
            <span className="truncate max-w-[130px] sm:max-w-[180px]">agent.salman-os.live</span>
            <button
              type="button"
              onClick={() => {
                setRefreshKey((k) => k + 1);
              }}
              title="Reload agent telemetry"
              className="text-zinc-400 hover:text-white transition-colors ml-0.5"
            >
              <Icon name="clock" className="h-2.5 w-2.5" />
            </button>
          </div>

          {/* Controls: Mode Switcher & Expand */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle: Agent Log (Default) vs Live App */}
            <div className="flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5 text-[10px] font-medium">
              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={cn(
                  "rounded-md px-2 py-0.5 transition-colors flex items-center gap-1",
                  activeTab === "terminal"
                    ? "bg-brand-500/20 text-brand-300 font-semibold border border-brand-400/30"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Agent Core</span>
              </button>
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
                Web App
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

        {/* Viewport Window (Height matches LiveWebsiteCard exactly: 380px) */}
        <div
          ref={containerRef}
          className="relative mt-3 h-[320px] sm:h-[360px] lg:h-[380px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#06080e] shadow-inner"
        >
          {activeTab === "terminal" ? (
            /* Dedicated Agent Working Console + Real GitHub Repos Live Stream */
            <div className="h-full w-full p-3 font-mono text-xs flex flex-col justify-between overflow-hidden">
              {/* Top Console Status Bar */}
              <div className="border-b border-white/10 pb-2.5">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-300 font-semibold">
                      agent@salman-os:~$ hermes --watch-repos
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[10px] hidden sm:inline">
                    Hermes Agent Core v2.4 · PID 4092
                  </span>
                </div>

                {/* Active Real-Time Workflow Event */}
                <div className="mt-2 flex items-center justify-between gap-2 rounded-lg bg-black/60 border border-white/10 px-2.5 py-1.5 text-[11px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-brand-400 font-bold shrink-0">⚡ RUNNING:</span>
                    <span
                      className={`truncate text-zinc-200 transition-opacity duration-200 ${
                        isFading ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {currentWorkflow.action}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-zinc-500">[{currentWorkflow.target}]</span>
                    <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-1 py-0.2 text-[9px] font-bold text-emerald-300">
                      {currentWorkflow.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Section: Live GitHub Repos Flash Stream */}
              <div className="my-2.5 flex-1 overflow-hidden flex flex-col min-h-0">
                <div className="flex items-center justify-between pb-1.5 text-[10.5px]">
                  <div className="flex items-center gap-1.5 text-brand-300 font-semibold">
                    <Icon name="github" className="h-3 w-3" />
                    <span>8002salman-ai REPOSITORIES FLASH</span>
                    <span className="rounded bg-brand-500/20 px-1 text-[9px] text-brand-400">
                      {githubRepos.length || 6} Live Repos
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[9.5px]">
                    Auto-scanning {reposLive ? "Synced with GitHub" : "Local Cache"}
                  </span>
                </div>

                {/* Scrolling Grid of Repos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto pr-1 flex-1">
                  {(githubRepos.length > 0
                    ? githubRepos.slice(0, 6)
                    : [
                        { name: "SalmanBashir", desc: "Consulting portfolio & enterprise architecture system", language: "TypeScript", stars: 18, url: "https://github.com/8002salman-ai/SalmanBashir" },
                        { name: "luxedge-website", desc: "Modern catalog e-commerce PWA storefront", language: "TypeScript", stars: 12, url: "https://github.com/8002salman-ai/luxedge-website" },
                        { name: "salman-os", desc: "Autonomous AI agent operations platform", language: "TypeScript", stars: 9, url: "https://github.com/8002salman-ai/salman-os" },
                        { name: "ebay-inventory-sync", desc: "Multi-channel automated stock & pricing daemon", language: "Python", stars: 7, url: "https://github.com/8002salman-ai" },
                        { name: "tiktok-shop-automation", desc: "Order router and fulfillment webhook listener", language: "JavaScript", stars: 5, url: "https://github.com/8002salman-ai" },
                        { name: "cogs-margin-engine", desc: "Landed cost and profit margin reconciliation", language: "Python", stars: 4, url: "https://github.com/8002salman-ai" },
                      ]
                  ).map((repo, idx) => {
                    const isScanning = idx === activeRepoIndex % 6;
                    return (
                      <a
                        key={repo.name}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "rounded-lg p-2 border transition-all text-left block relative overflow-hidden group/repo",
                          isScanning
                            ? "border-brand-400/60 bg-gradient-to-r from-brand-500/15 via-[#0e1220] to-emerald-500/10 shadow-lg shadow-brand-500/10"
                            : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-white/5",
                        )}
                      >
                        {/* Scanning scanner line beam */}
                        {isScanning && (
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent animate-pulse" />
                        )}

                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-white text-[11px] truncate flex items-center gap-1">
                            <span className={isScanning ? "text-brand-400 animate-pulse" : "text-zinc-500"}>
                              {isScanning ? "⚡" : "📁"}
                            </span>
                            <span className="group-hover/repo:text-brand-300 transition-colors">
                              {repo.name}
                            </span>
                          </span>
                          {repo.language && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-white/10 text-zinc-300 shrink-0">
                              {repo.language}
                            </span>
                          )}
                        </div>

                        <p className="text-[9.5px] text-zinc-400 truncate mt-1">
                          {repo.desc || "Operational codebase repository"}
                        </p>

                        <div className="mt-1.5 flex items-center justify-between text-[9px] text-zinc-500 border-t border-white/5 pt-1">
                          <span className="flex items-center gap-1">
                            <span className={isScanning ? "text-emerald-400 font-bold" : "text-zinc-500"}>
                              {isScanning ? "● AUDITING" : "READY"}
                            </span>
                          </span>
                          <span className="text-zinc-400 group-hover/repo:text-white transition-colors flex items-center gap-0.5">
                            <span>Open</span>
                            <Icon name="arrow" className="h-2 w-2 -rotate-45" />
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Console Ticker Bar */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px]">
                <div className="flex items-center gap-2 text-zinc-400 truncate">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-ping" />
                  <span className="text-zinc-300">
                    Flash: <strong className="text-brand-300 font-mono">{activeRepo.name}</strong>
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-500 hidden sm:inline">Telemetry streaming live</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("system")}
                  className="text-[10px] text-brand-400 hover:text-cyan-300 font-semibold underline underline-offset-2 shrink-0 ml-2"
                >
                  View Web App
                </button>
              </div>
            </div>
          ) : (
            /* Live Salman OS Web App Preview */
            <>
              <iframe
                key={refreshKey}
                src={previewSrc}
                title="Salman OS Live System Preview"
                loading="lazy"
                style={{
                  width: `${iframeWidth}px`,
                  height: `${iframeHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                className="border-0 block"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />

              {/* Switch back button floating */}
              <div className="absolute bottom-2 right-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className="rounded-lg bg-black/85 backdrop-blur border border-white/20 px-2.5 py-1 text-[11px] font-bold text-brand-400 hover:text-cyan-300 shadow-xl"
                >
                  ← Back to Agent Core
                </button>
              </div>
            </>
          )}

          {/* Quick Expand Button */}
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
                <span className="text-xs font-semibold text-brand-400">Autonomous Core</span>
                <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[8.5px] font-bold text-emerald-400">
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                Active workflow automation & live GitHub operations daemon
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
            aria-label="SoSAi Agent Live System Preview"
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
                    SoSAi Agent / Autonomous Operations Console
                  </span>
                </div>

                <a
                  href="https://github.com/8002salman-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-xs font-mono text-zinc-300 hover:text-white hover:border-brand-400"
                >
                  <Icon name="github" className="h-3.5 w-3.5" />
                  <span>github.com/8002salman-ai</span>
                  <Icon name="arrow" className="h-3 w-3 -rotate-45 text-zinc-400" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://salman-os-swart.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-1.5 text-xs font-bold text-black hover:brightness-110"
                  >
                    <span>Launch Salman OS</span>
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

              {/* Fullscreen Content */}
              <div className="relative flex-1 bg-black overflow-hidden p-6 font-mono text-sm text-zinc-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-bold text-base">
                      HERMES AUTONOMOUS DAEMON ACTIVE
                    </span>
                  </div>
                  <span className="text-zinc-500">Node: vercel-iad1 · Status: ONLINE</span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {githubRepos.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-brand-400 hover:bg-white/10 transition-all block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{r.name}</span>
                        {r.language && (
                          <span className="text-xs px-2 py-0.5 rounded bg-brand-500/20 text-brand-300">
                            {r.language}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2">{r.desc}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 border-t border-white/10 pt-2">
                        <span>★ {r.stars} stars</span>
                        <span className="text-brand-400 font-medium inline-flex items-center gap-1">
                          <span>View Code</span>
                          <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
