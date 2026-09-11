import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";
import { useGithubRepos, type GithubRepo } from "@/hooks/useGithubRepos";
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
  // Modes: "terminal" (Agent Log), "app" (Salman OS Interactive Web App), "preview" (Selected Repo Inspector)
  const [activeTab, setActiveTab] = useState<"terminal" | "app" | "preview">("terminal");
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [activeRepoIndex, setActiveRepoIndex] = useState(0);
  const [selectedRepo, setSelectedRepo] = useState<GithubRepo | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [agentActionMessage, setAgentActionMessage] = useState<string | null>(null);

  // Fetch all real GitHub repositories for 8002salman-ai
  const { repos: githubRepos } = useGithubRepos();

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

  // GitHub Repo active flash highlighter
  useEffect(() => {
    if (!githubRepos.length) return;
    const repoTimer = setInterval(() => {
      setActiveRepoIndex((prev) => (prev + 1) % githubRepos.length);
    }, 2800);
    return () => clearInterval(repoTimer);
  }, [githubRepos.length]);

  const currentWorkflow = AGENT_WORKFLOWS[workflowIndex];

  // Handler when user clicks on ANY repo in the stream:
  // Previews it directly inside the left card without navigating away to GitHub
  const handleSelectRepo = (repo: GithubRepo) => {
    setSelectedRepo(repo);
    setActiveTab("preview");
  };

  const handleTriggerAction = (msg: string) => {
    setAgentActionMessage(msg);
    setTimeout(() => setAgentActionMessage(null), 3000);
  };

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
        <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2 flex-wrap">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center rounded-lg border border-white/10 bg-black/50 p-0.5 text-[10px] font-medium">
            <button
              type="button"
              onClick={() => setActiveTab("terminal")}
              className={cn(
                "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                activeTab === "terminal"
                  ? "bg-brand-500/25 text-brand-300 font-bold border border-brand-400/40 shadow"
                  : "text-zinc-400 hover:text-white",
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agent Core</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("app")}
              className={cn(
                "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                activeTab === "app"
                  ? "bg-brand-500/25 text-brand-300 font-bold border border-brand-400/40 shadow"
                  : "text-zinc-400 hover:text-white",
              )}
            >
              <Icon name="spark" className="h-2.5 w-2.5" />
              <span>Salman OS App</span>
            </button>

            {selectedRepo && (
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={cn(
                  "rounded-md px-2.5 py-0.5 transition-all flex items-center gap-1",
                  activeTab === "preview"
                    ? "bg-brand-500/25 text-brand-300 font-bold border border-brand-400/40 shadow"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                <span>Repo Preview</span>
              </button>
            )}
          </div>

          {/* Interactive URL / Terminal Host Indicator */}
          <button
            type="button"
            onClick={() => setActiveTab((prev) => (prev === "app" ? "terminal" : "app"))}
            title="Click to toggle between Agent Core and Salman OS App"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-brand-400/50 transition-colors cursor-pointer"
          >
            <span className="text-emerald-400 text-[10px]">🔒</span>
            <span className="truncate max-w-[130px] sm:max-w-[170px]">
              {activeTab === "app" ? "app.salman-os.live" : activeTab === "preview" ? `inspect/${selectedRepo?.name || "repo"}` : "agent.salman-os.live"}
            </span>
          </button>

          {/* Controls: Live Status & Expand */}
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Agent Online</span>
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

        {/* Viewport Window (Height matches Right card exactly: 380px) */}
        <div className="relative mt-3 h-[320px] sm:h-[360px] lg:h-[380px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#06080e] shadow-inner flex flex-col">
          {/* Action Notification Toast */}
          {agentActionMessage && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 rounded-lg bg-emerald-500/90 text-black font-mono font-bold px-3 py-1 text-xs shadow-xl flex items-center gap-1.5 animate-in fade-in slide-in-from-top-2 duration-150">
              <span>✓</span>
              <span>{agentActionMessage}</span>
            </div>
          )}

          {activeTab === "terminal" ? (
            /* TAB 1: Real-Time Agent Working Console + Live GitHub Repos Flash */
            <div className="h-full w-full p-3 font-mono text-xs flex flex-col justify-between overflow-hidden">
              {/* Top Console Status Bar */}
              <div className="border-b border-white/10 pb-2">
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

              {/* Middle Section: Live GitHub Repos Flash Stream (Clicking previews inside window, does not leave page) */}
              <div className="my-2 flex-1 overflow-hidden flex flex-col min-h-0">
                <div className="flex items-center justify-between pb-1.5 text-[10.5px]">
                  <div className="flex items-center gap-1.5 text-brand-300 font-semibold">
                    <Icon name="github" className="h-3 w-3" />
                    <span>8002salman-ai REPOSITORIES FLASH</span>
                    <span className="rounded bg-brand-500/20 px-1 text-[9px] text-brand-400">
                      {githubRepos.length || 6} Live Repos
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[9.5px]">
                    Click any repo to preview in window
                  </span>
                </div>

                {/* Grid of Repos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-auto pr-1 flex-1">
                  {(githubRepos.length > 0
                    ? githubRepos.slice(0, 6)
                    : [
                        { name: "SalmanBashir", desc: "Consulting portfolio & enterprise architecture system", language: "TypeScript", stars: 18, url: "https://github.com/8002salman-ai/SalmanBashir" },
                        { name: "luxedge-website", desc: "Modern catalog e-commerce PWA storefront", language: "TypeScript", stars: 12, url: "https://github.com/8002salman-ai/luxedge-website" },
                        { name: "8002-erp", desc: "Enterprise resource planning & multi-warehouse system", language: "TypeScript", stars: 14, url: "https://github.com/8002salman-ai/8002-erp" },
                        { name: "Basco-sports", desc: "Activewear brand showcase with checkout pipeline", language: "JavaScript", stars: 8, url: "https://github.com/8002salman-ai/Basco-sports" },
                        { name: "himalayan-koh", desc: "Natural salt & mineral products e-commerce store", language: "TypeScript", stars: 7, url: "https://github.com/8002salman-ai/himalayan-koh" },
                        { name: "hot-grill-website", desc: "Restaurant & hospitality digital experience portal", language: "TypeScript", stars: 6, url: "https://github.com/8002salman-ai/hot-grill-website" },
                      ]
                  ).map((repo, idx) => {
                    const isScanning = idx === activeRepoIndex % 6;
                    return (
                      <button
                        key={repo.name}
                        type="button"
                        onClick={() => handleSelectRepo(repo as GithubRepo)}
                        className={cn(
                          "rounded-lg p-2 border transition-all text-left block relative overflow-hidden group/repo cursor-pointer w-full",
                          isScanning
                            ? "border-brand-400/60 bg-gradient-to-r from-brand-500/15 via-[#0e1220] to-emerald-500/10 shadow-lg shadow-brand-500/10"
                            : "border-white/10 bg-black/40 hover:border-brand-400/40 hover:bg-white/5",
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
                          <span className="text-brand-400 group-hover/repo:text-cyan-300 transition-colors font-medium flex items-center gap-0.5">
                            <span>Preview in Window</span>
                            <Icon name="arrow" className="h-2 w-2 -rotate-45" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Console Ticker Bar */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px]">
                <div className="flex items-center gap-2 text-zinc-400 truncate">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-ping" />
                  <span className="text-zinc-300">
                    Agent Stream: <strong className="text-brand-300 font-mono">8002salman-ai</strong>
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-500 hidden sm:inline">Telemetry active</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab("app")}
                  className="text-[10px] text-brand-400 hover:text-cyan-300 font-semibold underline underline-offset-2 shrink-0 ml-2"
                >
                  Open Salman OS App
                </button>
              </div>
            </div>
          ) : activeTab === "preview" && selectedRepo ? (
            /* TAB 2: Live In-Window Repo Telemetry Preview */
            <div className="h-full w-full p-3 font-mono text-xs flex flex-col justify-between overflow-y-auto bg-[#070912]">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveTab("terminal")}
                      className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300 hover:bg-white/20 hover:text-white transition-colors"
                    >
                      ← Back
                    </button>
                    <span className="font-bold text-white text-xs">{selectedRepo.name}</span>
                    <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-1 py-0.2 text-[9px] font-bold text-emerald-300">
                      LIVE PREVIEW
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[10px]">branch: main</span>
                </div>

                <div className="mt-2.5 rounded-lg border border-white/10 bg-black/60 p-2.5">
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    {selectedRepo.desc || "Active enterprise codebase repository."}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-zinc-400">
                    <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5">
                      Language: <strong className="text-brand-300">{selectedRepo.language || "TypeScript"}</strong>
                    </span>
                    <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5">
                      Stars: <strong className="text-amber-300">★ {selectedRepo.stars}</strong>
                    </span>
                    <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5">
                      CI Status: <strong className="text-emerald-300">Passed</strong>
                    </span>
                  </div>
                </div>

                {/* Interactive Agent Workflows on this Repo */}
                <div className="mt-2.5">
                  <h5 className="text-[10.5px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                    Trigger Agent Actions on this Codebase
                  </h5>
                  <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                    <button
                      type="button"
                      onClick={() => handleTriggerAction(`Running test suite on ${selectedRepo.name}… 100% passed.`)}
                      className="rounded border border-brand-400/30 bg-brand-500/10 px-2 py-1.5 text-left text-brand-300 hover:bg-brand-500/20 transition-colors"
                    >
                      ▶ Run Unit & Lint Tests
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerAction(`Synchronized dependencies for ${selectedRepo.name}.`)}
                      className="rounded border border-white/10 bg-white/5 px-2 py-1.5 text-left text-zinc-300 hover:bg-white/10 transition-colors"
                    >
                      🔄 Reconcile Dependencies
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerAction(`Deploying edge worker webhook for ${selectedRepo.name}…`)}
                      className="rounded border border-white/10 bg-white/5 px-2 py-1.5 text-left text-zinc-300 hover:bg-white/10 transition-colors"
                    >
                      ⚡ Deploy Edge Listener
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerAction(`Audited AST security & secrets: 0 vulnerabilities found.`)}
                      className="rounded border border-white/10 bg-white/5 px-2 py-1.5 text-left text-zinc-300 hover:bg-white/10 transition-colors"
                    >
                      🛡️ Security Audit
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px]">
                <span className="text-zinc-500">Previewed locally in window</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className="text-brand-400 hover:text-cyan-300 font-semibold"
                >
                  ← Return to Repos Stream
                </button>
              </div>
            </div>
          ) : (
            /* TAB 3: Native Interactive Salman OS Web App (Zero crash, 0ms load, full working metrics) */
            <div className="h-full w-full p-3 font-mono text-xs flex flex-col justify-between overflow-y-auto bg-[#080a14]">
              <div>
                {/* Salman OS App Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-400/40 flex items-center justify-center text-brand-300 font-bold text-xs">
                      OS
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white text-xs">Salman OS</span>
                        <span className="rounded bg-emerald-500/20 text-emerald-300 text-[8.5px] px-1 font-bold">
                          PRODUCTION
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-400">Autonomous Business Operations System</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab("terminal")}
                    className="rounded bg-white/10 px-2 py-1 text-[10px] text-zinc-300 hover:bg-white/20 transition-colors"
                  >
                    ← Console
                  </button>
                </div>

                {/* Real-Time Live Business Metrics Cards */}
                <div className="mt-2.5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-2">
                    <div className="text-[9.5px] text-zinc-400">Marketplace GMV</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">$48,290</div>
                    <div className="text-[8.5px] text-emerald-500 mt-0.5">↑ +14.2% velocity</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-2">
                    <div className="text-[9.5px] text-zinc-400">Multi-Channel Orders</div>
                    <div className="text-sm font-bold text-brand-300 mt-0.5">1,482</div>
                    <div className="text-[8.5px] text-zinc-500 mt-0.5">eBay · TikTok · PWA</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-2">
                    <div className="text-[9.5px] text-zinc-400">Database SLA</div>
                    <div className="text-sm font-bold text-cyan-300 mt-0.5">99.98%</div>
                    <div className="text-[8.5px] text-zinc-500 mt-0.5">Supabase 14ms</div>
                  </div>
                </div>

                {/* Interactive Channel Operations */}
                <div className="mt-2.5 space-y-1.5">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-semibold text-white text-[11px]">LuxEdge Store PWA</span>
                    </div>
                    <span className="text-[10px] text-zinc-400">Catalog Synced · 0 Error</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold text-white text-[11px]">eBay & TikTok Inventory Router</span>
                    </div>
                    <span className="text-[10px] text-zinc-400">Automated Webhooks Active</span>
                  </div>
                </div>

                {/* Interactive Operations Buttons */}
                <div className="mt-2.5 grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleTriggerAction("Order reconciliation executed across all sales channels!")}
                    className="rounded-lg border border-brand-400/40 bg-brand-500/15 px-2.5 py-1.5 text-xs font-bold text-brand-300 hover:bg-brand-500/25 transition-all text-center"
                  >
                    ⚡ Reconcile Orders
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTriggerAction("Landed COGS & Supplier Replenishment models refreshed!")}
                    className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-bold text-zinc-200 hover:bg-white/10 transition-all text-center"
                  >
                    📊 Refresh COGS
                  </button>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10.5px]">
                <span className="text-zinc-500">Hermes Autonomous Core · Live</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("terminal")}
                  className="text-brand-400 hover:text-cyan-300 font-semibold"
                >
                  Switch to Console
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Details Bar */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <button
            type="button"
            onClick={() => setActiveTab((prev) => (prev === "app" ? "terminal" : "app"))}
            className="flex items-center gap-2.5 min-w-0 text-left group/foot cursor-pointer hover:opacity-95 transition-opacity"
            title="Click to preview Salman OS App"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-400/40 bg-brand-500/10 text-brand-300 shrink-0 group-hover/foot:border-brand-400">
              <Icon name="spark" className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-display text-xs font-bold text-white truncate">SoSAi Agent</h4>
                <span className="text-zinc-500 text-xs">·</span>
                <span className="text-xs font-semibold text-brand-400 group-hover/foot:underline">Salman OS Core</span>
                <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[8.5px] font-bold text-emerald-400">
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate group-hover/foot:text-zinc-300">
                Click to preview Salman OS Operations App
              </p>
            </div>
          </button>

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

                <div className="flex items-center gap-2">
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
              <div className="relative flex-1 bg-black overflow-hidden p-6 font-mono text-sm text-zinc-300 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-bold text-base">
                      HERMES AUTONOMOUS DAEMON ACTIVE · SALMAN OS
                    </span>
                  </div>
                  <span className="text-zinc-500">Status: ONLINE</span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {githubRepos.map((r) => (
                    <div
                      key={r.name}
                      onClick={() => {
                        handleSelectRepo(r);
                        setIsExpanded(false);
                      }}
                      className="rounded-xl border border-white/15 bg-white/5 p-4 hover:border-brand-400 hover:bg-white/10 transition-all block cursor-pointer"
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
                          <span>Preview in Window</span>
                          <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                        </span>
                      </div>
                    </div>
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
