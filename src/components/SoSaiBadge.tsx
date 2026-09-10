import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";

const AGENT_TASKS = [
  { action: "Reconciling multi-marketplace orders & payout fees", target: "Supabase DB", status: "OK", latency: "142ms" },
  { action: "Auditing eBay & TikTok Shop inventory velocity", target: "Stock Flow", status: "SYNCED", latency: "89ms" },
  { action: "Streaming Salman OS live project feed", target: "Vercel Edge", status: "ONLINE", latency: "45ms" },
  { action: "Verifying landed costs & supplier replenishment", target: "COGS Model", status: "ACTIVE", latency: "110ms" },
  { action: "Hermes Agent core healthy — listening for operational triggers", target: "Daemon", status: "READY", latency: "12ms" },
];

export function SoSaiBadge() {
  const [taskIndex, setTaskIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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

  return (
    <div className="group relative max-w-xl overflow-hidden rounded-2xl border border-brand-400/30 bg-gradient-to-br from-[#111422] via-[#0c0e17] to-[#08090f] p-4 shadow-2xl transition-all duration-300 hover:border-brand-400/60 hover:shadow-brand-500/15">
      {/* Glow effects */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-emerald-500/15 blur-3xl transition-opacity group-hover:opacity-100" />

      {/* Header Bar */}
      <div className="relative flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-brand-400/10 border border-brand-400/40 text-brand-300 shadow-inner">
            <Icon name="spark" className="h-4 w-4" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-white tracking-tight">
                SoSAi Agent
              </span>
              <span className="text-zinc-500 text-xs">·</span>
              <span className="text-xs font-semibold text-brand-400">
                Salman OS
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">Autonomous Business Operations System</p>
          </div>
        </div>

        {/* Live Active Status Badge */}
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span>Agent Online</span>
        </div>
      </div>

      {/* Live Agent Working Terminal (Agent in Action) */}
      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#06070a] p-3 font-mono text-xs">
        <div className="flex items-center justify-between text-[10px] text-zinc-500 pb-2 border-b border-white/5">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            agent@salman-os:~$ workflow --live
          </span>
          <span className="text-zinc-500">{currentTask.latency}</span>
        </div>

        <div className="pt-2 min-h-[42px] flex items-center">
          <p
            className={`text-[11.5px] leading-relaxed transition-opacity duration-200 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-brand-400 font-semibold mr-1.5">⚡</span>
            <span className="text-zinc-200">{currentTask.action}</span>{" "}
            <span className="text-zinc-500">[{currentTask.target}]</span>{" "}
            <span className="inline-block rounded bg-emerald-500/20 border border-emerald-500/40 px-1 py-0.2 text-[9px] font-bold text-emerald-300 ml-1">
              {currentTask.status}
            </span>
          </p>
        </div>
      </div>

      {/* Core Summary */}
      <p className="mt-3 text-xs leading-relaxed text-zinc-300">
        “Autonomous AI agent designed around real marketplace workflows, monitoring inventory movements, and coordinating business systems.”
      </p>

      {/* Action Links */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2.5 border-t border-white/10 pt-3">
        {/* Direct Link to Real Salman OS Website */}
        <a
          href="https://salman-os-swart.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-3.5 py-1.5 text-xs font-bold text-black shadow-md shadow-brand-500/20 transition-all hover:brightness-110 active:scale-95"
        >
          <span>Open Salman OS</span>
          <Icon name="arrow" className="h-3.5 w-3.5 -rotate-45" />
        </a>

        {/* Links to AI Automation page & custom agent booking */}
        <div className="flex items-center gap-3">
          <Link
            to="/ai-automation"
            className="text-xs font-medium text-zinc-300 transition-colors hover:text-brand-400"
          >
            Architecture Details
          </Link>
          <span className="text-zinc-600">·</span>
          <Link
            to="/book"
            className="text-xs font-semibold text-brand-400 transition-colors hover:text-cyan-300 inline-flex items-center gap-1"
          >
            <span>Custom Agent</span>
            <Icon name="arrow" className="h-3 w-3 inline" />
          </Link>
        </div>
      </div>
    </div>
  );
}
