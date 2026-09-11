import { useState } from "react";
import { askChatbot } from "@/lib/api";
import { Icon } from "@/components/ui";

const PROMPTS = [
  "How can you help my business?",
  "Tell me about Salman OS",
  "Tell me about Luxedge",
  "Your eBay experience",
  "AI automation ideas",
];

const METRIC_CARDS = [
  {
    value: "3+",
    label: "Marketplace Platforms",
    icon: "cart" as const,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    value: "10+",
    label: "Years Experience",
    icon: "calendar" as const,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
  {
    value: "5+",
    label: "Active Projects",
    icon: "layers" as const,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    value: "Global",
    label: "Supplier Network",
    icon: "globe" as const,
    color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  },
];

export function HomeAskAndExperience() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleAsk(qText: string) {
    const q = qText.trim();
    if (!q || busy) return;
    setQuestion(q);
    setBusy(true);
    setAnswer(null);

    try {
      const res = await askChatbot(q);
      setBusy(false);
      if (res.ok && res.answer) {
        setAnswer(String(res.answer));
      } else {
        // High quality fallback
        if (q.toLowerCase().includes("salman os")) {
          setAnswer(
            "Salman OS is Salman's flagship AI Command Center and personal operating system. It features autonomous agent daemons (like Hermes), live telemetry tracking, repository monitoring, and operational pipelines that bridge multi-channel e-commerce with real-time business automation.",
          );
        } else if (q.toLowerCase().includes("luxedge")) {
          setAnswer(
            "Luxedge is a premium pet care e-commerce brand engineered with a modern high-performance catalog, direct checkout, and verified supplier supply chains. It serves as a live demonstration of end-to-end e-commerce brand development.",
          );
        } else if (q.toLowerCase().includes("ebay")) {
          setAnswer(
            "Salman has hands-on operational experience across eBay and major global marketplaces — handling multi-account listing optimization, fee structures, Promoted Listings, payout reconciliation, and automated Google Sheets sync workflows.",
          );
        } else if (q.toLowerCase().includes("help")) {
          setAnswer(
            "Salman helps businesses streamline multi-channel operations, build custom internal tools & ERPs (like Embani ERP), reconcile hidden marketplace fees and COGS, establish factory sourcing lines, and implement AI automation agents.",
          );
        } else {
          setAnswer(
            "Salman Bashir specializes in e-commerce marketplace operations, business systems architecture, and AI automation. He turns chaotic manual spreadsheets into structured, profitable automated workflows.",
          );
        }
      }
    } catch {
      setBusy(false);
      setAnswer(
        "Salman Bashir builds practical systems around real business operations — multi-marketplace selling, automated fee reconciliation, global sourcing, and custom AI agents like Hermes in Salman OS.",
      );
    }
  }

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Ask Salman AI (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#0c1020] to-[#07090e] p-6 sm:p-8 shadow-2xl backdrop-blur relative overflow-hidden">
            {/* Subtle glow in background */}
            <div className="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full bg-indigo-600/15 blur-3xl" />

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-400/40 bg-indigo-500/20 text-indigo-300 shadow-inner">
                  <Icon name="spark" className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                    Ask Salman AI
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 font-semibold">
                    POWERED BY AI • REAL EXPERIENCE
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-300">
                Ask about my experience, systems, projects or how I can help your business.
              </p>

              {/* Chat input box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAsk(question);
                }}
                className="mt-5 relative"
              >
                <div className="relative flex items-center rounded-2xl border border-white/15 bg-white/[0.04] p-1.5 backdrop-blur transition-all focus-within:border-indigo-400/60 focus-within:bg-white/[0.07] focus-within:shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                  <span className="pl-3 text-slate-400">
                    <Icon name="spark" className="h-4 w-4 text-cyan-400" />
                  </span>
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question..."
                    disabled={busy}
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={busy || !question.trim()}
                    aria-label="Send query"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 cursor-pointer"
                  >
                    {busy ? (
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <Icon name="arrow" className="h-4 w-4 -rotate-45" />
                    )}
                  </button>
                </div>
              </form>

              {/* Suggested Prompt Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleAsk(p)}
                    disabled={busy}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-all hover:border-indigo-400/40 hover:bg-white/[0.08] hover:text-white active:scale-95 text-left cursor-pointer"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Display */}
            {answer && (
              <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-950/30 p-4 text-xs sm:text-sm leading-relaxed text-slate-200">
                <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-300 font-bold mb-1">
                  AI Response:
                </div>
                <div className="whitespace-pre-line">{answer}</div>
              </div>
            )}
          </div>

          {/* Right Column: Real Experience. Real Impact. (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#0c1020] to-[#07090e] p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                VERIFIED TRACK RECORD
              </div>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                Real Experience. Real Impact.
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Truthful strengths and operational competencies built from real execution.
              </p>
            </div>

            {/* 4 Cards Matrix */}
            <div className="grid grid-cols-2 gap-3.5 mt-6">
              {METRIC_CARDS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition-all hover:border-indigo-400/40 hover:bg-white/[0.06]"
                >
                  <div className={`inline-flex p-2 rounded-xl border ${m.color}`}>
                    <Icon name={m.icon} className="h-4 w-4" />
                  </div>
                  <div className="mt-3 font-display text-2xl font-black text-white">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400 font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
