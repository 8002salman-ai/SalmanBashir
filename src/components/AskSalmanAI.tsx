import { useEffect, useRef, useState } from "react";
import { askChatbot } from "@/lib/api";
import { cn } from "@/utils/cn";
import { Icon } from "@/components/ui";

const SUGGESTED = [
  "What services does Salman offer?",
  "Tell me about Embani ERP",
  "How do I book a consultation?",
  "What marketplaces does he work with?",
];

type Message = { role: "user" | "assistant"; content: string };

function getHumanPortfolioResponse(question: string): string {
  const q = question.toLowerCase().trim();

  // 1. Greetings & Pleasantries
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|howdy|salam|aoa)/i.test(q) || q === "hi" || q === "hello") {
    return "Hello! Great to meet you. 👋\n\nI'm Salman's assistant. I'm here to help you explore his consulting work, learn how he helps online sellers automate their operations, walk you through projects like Embani ERP, or help you book a call with him.\n\nWhat can I help you with today?";
  }

  // 2. Who is Salman / Background / About
  if (/(who is|about salman|tell me about salman|background|bio|who are you|experience|track record|operator)/i.test(q)) {
    return "Salman Bashir is an **E-commerce Operations & Business Automation Consultant** with over 4 years of hands-on operator experience.\n\nInstead of just offering generic advice, he has managed multi-account stores across eBay, TikTok Shop, Etsy, Depop, and AliExpress. He specializes in turning chaotic spreadsheets and manual tasks into clean, predictable systems — building automated inventory pipelines, real profit dashboards, and custom software like Embani ERP.\n\nWant to learn more about his background? Take a look at the **/about** and **/journey** pages!";
  }

  // 3. Services / Consulting / What he offers
  if (/(service|services|offer|what can he do|how can he help|solutions|consulting|what do you do|work with)/i.test(q)) {
    return "Salman helps e-commerce sellers and brand owners across four core areas:\n\n1. **Marketplace Operations Consulting**: Setting up resilient multi-account architectures, safeguarding seller metrics, resolving holds, and organizing daily listing and dispatch flows (eBay, TikTok Shop, Etsy, Depop).\n2. **True Profit & COGS Dashboards**: Building transparent live tracking (using Supabase + Google Sheets) so you see your actual net profit after marketplace fees, advertising, refunds, and shipping.\n3. **Custom Business Automation & ERP Prototyping**: Eliminating repetitive manual data entry by designing dedicated systems like Embani ERP tailored to your unique workflow.\n4. **Sourcing & Freight Strategy**: China-to-UK/US supply chain strategy, factory vetting, logistics planning, and landed cost calculation.\n\nYou can explore deep dives and case studies on the **/services** page!";
  }

  // 4. Projects / Embani ERP / SpotAware / Case Studies
  if (/(project|projects|embani|spotaware|portfolio|case stud|built|software|tool|app)/i.test(q)) {
    return "Salman has designed and engineered several practical tools for e-commerce operators:\n\n• **Embani ERP**: His flagship e-commerce operating system. It unifies order management, multi-platform inventory, live marketplace fee calculation, and COGS into a single clean interface.\n• **SpotAware**: A market intelligence and signal detection tool designed to spot market trends and product opportunities early.\n• **eBay-to-Sheets Real-time Sync**: Automated pipelines that pull live transaction and payout data into spreadsheet models without manual copy-pasting.\n\nYou can inspect full breakdowns, architecture diagrams, and problem-solution writeups on the **/projects** page!";
  }

  // 5. Marketplaces (eBay, TikTok Shop, Etsy, Depop, Mercari, AliExpress, Amazon)
  if (/(ebay|tiktok|etsy|depop|mercari|aliexpress|amazon|marketplace|channel)/i.test(q)) {
    return "Marketplaces are Salman's core expertise! Here is how he helps on specific platforms:\n\n• **eBay**: Complex fee calculations, Promoted Listings analysis, Managed Payments reconciliation, and multi-store operations.\n• **TikTok Shop**: Fast-turnaround dispatch workflows, creator sample management, and inventory velocity.\n• **Etsy & Depop**: Brand-centric catalog organization, batch pricing updates, and shipping rules.\n• **AliExpress & 1688**: Supplier vetting, lead time buffers, and landed cost models.\n\nCheck out the **/marketplace-services** page for platform-specific insights!";
  }

  // 6. Booking a Consultation / Schedule a Call
  if (/(book|booking|meeting|consult|appointment|schedule|call|hire|speak|talk|session)/i.test(q)) {
    return "Booking a strategy session with Salman is quick and straightforward!\n\n• **Direct Scheduling**: Head over to the **/book** page, pick a date and time that fits your schedule, and let him know what operational bottlenecks your store is facing.\n• **Quick Inquiry**: If you prefer to drop a message first, you can fill out the form on the **/contact** page or email him directly at **basco.pk@gmail.com**.\n\nDuring the session, Salman conducts an honest operational audit and shares actionable steps to streamline your workflows.";
  }

  // 7. Pricing / Rates / Fees / Cost
  if (/(price|pricing|rate|rates|fee|fees|cost|how much|charges|budget|quote)/i.test(q)) {
    return "Because every e-commerce business has different operational scale and bottlenecks, consulting and development engagements are scoped individually:\n\n• **Operational Audit & Strategy Sessions**: Fixed-rate introductory deep dive into your store workflows and profit leaks.\n• **Custom Dashboards & Tooling**: Scoped based on your data sources (eBay, TikTok Shop, Supabase, Google Sheets).\n• **Full-scale Systems & ERP**: Tailored development milestones.\n\nThe easiest way to get an accurate estimate is to submit a brief note on the **/contact** page or book an intro call on **/book**.";
  }

  // 7. Training / Mentorship / Learning
  if (/(train|training|course|courses|learn|classes|mentorship|teach|coaching|student)/i.test(q)) {
    return "Yes! Salman offers intensive **1-on-1 and team training** for online sellers and operators:\n\n• **Marketplace Store Operations**: Account configuration, policy adherence, and dispute handling.\n• **Listing & Catalog Strategy**: Building scalable listing flows that convert.\n• **Inventory & Fulfillment**: Setting up foolproof dispatch, safety stock thresholds, and supplier replenishment schedules.\n• **Financial Visibility**: How to calculate real product profit and track true margins.\n\nYou can review the complete curriculum and available seats on the **/training** page!";
  }


  // 9. Tech Stack / Tools / Development
  if (/(tech|stack|technology|tools|react|supabase|typescript|python|developer|code|api)/i.test(q)) {
    return "Salman builds practical, fast, and maintainable software using a modern stack:\n\n• **Frontend**: React 19, TypeScript, Tailwind CSS, Vite\n• **Backend & Data**: Supabase (PostgreSQL), Node.js, Vercel Serverless Functions\n• **Integrations**: Official eBay REST APIs, Google Sheets API, Resend, OpenRouter AI\n\nHe focuses on lightweight, resilient architectures that solve real operational headaches without unnecessary bloat.";
  }

  // 10. Contact Details / Socials
  if (/(contact|email|phone|whatsapp|linkedin|github|reach|address|location)/i.test(q)) {
    return "Here is how you can connect directly with Salman:\n\n• **Email**: basco.pk@gmail.com\n• **Contact Form**: /contact\n• **Schedule a Meeting**: /book\n• **GitHub**: github.com/8002salman-ai\n• **LinkedIn**: linkedin.com/in/salman-bashir\n• **Location**: Pakistan (working with clients across the UK, USA, and globally).";
  }

  // 11. Credentials & Proof of Work
  if (/(credential|credentials|proof|case study|results|testimonial|reviews|verified)/i.test(q)) {
    return "Salman believes in proof of work over promises. On the **/credentials** and **/projects** pages, you'll find documented milestones, operational audits, architecture schematics, and case studies detailing how store workflows and net margins were stabilized.\n\nFeel free to explore the **/credentials** page for verified background records!";
  }

  // 12. Resume / CV
  if (/(resume|cv|hiring|job|career|qualification)/i.test(q)) {
    return "You can view Salman's complete interactive resume directly on the **/resume** page, complete with a timeline of his operator experience, key competencies, tech proficiencies, and verified achievements.";
  }

  // 13. Conversational Default with context reflection
  return `Thanks for reaching out! Regarding "${question}":\n\nSalman helps e-commerce sellers automate operations, build custom dashboards, and develop dedicated tools like Embani ERP.\n\nWould you like me to tell you more about his **Services**, walk through his **Projects**, or help you **Book a Consultation**?`;
}

export function AskSalmanAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      setMessages([
        {
          role: "assistant",
          content:
            "Hi! I'm Salman's AI assistant. How can I help you today? Feel free to ask about his consulting services, custom tools like Embani ERP, training, or how to book a strategy session.",
        },
      ]);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setBusy(true);

    try {
      const result = await askChatbot(question);
      setBusy(false);
      if (result.ok && result.answer) {
        setMessages((m) => [...m, { role: "assistant", content: result.answer as string }]);
      } else {
        // Natural human-like English response
        const answer = getHumanPortfolioResponse(question);
        setMessages((m) => [...m, { role: "assistant", content: answer }]);
      }
    } catch {
      setBusy(false);
      const answer = getHumanPortfolioResponse(question);
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Ask Salman AI" : "Open Ask Salman AI"}
        className={cn(
          "fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-2xl shadow-brand-500/30 transition-all duration-300 hover:scale-110 active:scale-95",
          open
            ? "bg-zinc-800 text-zinc-100 ring-2 ring-zinc-600"
            : "bg-gradient-to-tr from-brand-600 to-cyan-400 text-black ring-2 ring-cyan-300/40",
        )}
      >
        <Icon name={open ? "x" : "message"} className="h-6 w-6" />
      </button>

      {/* Chat Window Dialog */}
      {open && (
        <div
          role="dialog"
          aria-label="Ask Salman AI chat"
          className="fixed bottom-24 right-4 left-4 z-[70] flex h-[min(580px,75vh)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0e1017] text-white shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/10 sm:left-auto sm:w-[390px] animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Solid Header */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-[#141622] px-4 py-3.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-brand-400/10 border border-brand-400/30 text-brand-300 shadow-inner">
              <Icon name="spark" className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-white tracking-tight">Ask Salman AI</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.2 text-[9px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 truncate">E-commerce Operations & Systems Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div ref={scrollRef} className="flex-1 space-y-3.5 overflow-y-auto bg-[#0a0b10] px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm whitespace-pre-line",
                  m.role === "user"
                    ? "ml-auto rounded-tr-sm bg-gradient-to-r from-brand-500 to-cyan-400 text-black font-medium shadow-brand-500/20"
                    : "rounded-tl-sm border border-white/10 bg-[#161822] text-zinc-200",
                )}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-sm border border-white/10 bg-[#161822] px-4 py-3 text-xs text-zinc-400">
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
                Salman is thinking…
              </div>
            )}
          </div>

          {/* Quick Suggestions */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-1.5 border-t border-white/10 bg-[#10121a] px-3.5 py-2.5">
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-white/10 bg-[#181a26] px-3 py-1 text-xs text-zinc-300 transition-all hover:border-brand-400/60 hover:bg-brand-500/15 hover:text-brand-300 active:scale-95 text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 bg-[#13151f] p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about consulting, Embani ERP, booking..."
              aria-label="Your question"
              className="flex-1 rounded-xl border border-white/15 bg-[#1b1d2a] px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send question"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
            >
              <Icon name="send" className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
