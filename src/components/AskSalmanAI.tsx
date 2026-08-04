import { useEffect, useRef, useState } from "react";
import { askChatbot } from "@/lib/api";
import { cn } from "@/utils/cn";
import { Icon } from "@/components/ui";

const SUGGESTED = [
  "What does Salman do?",
  "What services does he offer?",
  "How can I book a consultation?",
  "Does he offer training programs?",
];

type Message = { role: "user" | "assistant"; content: string };

export function AskSalmanAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      setMessages([
        {
          role: "assistant",
          content:
            "Hi, I'm Salman's AI assistant. I can tell you about his consulting, training, projects and how to get in touch. How can I help?",
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
    setError("");
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setBusy(true);
    const result = await askChatbot(question);
    setBusy(false);
    if (result.ok && result.answer) {
      setMessages((m) => [...m, { role: "assistant", content: result.answer as string }]);
    } else {
      setError(
        result.error ?? "I couldn't reach my brain right now. Please try again in a moment.",
      );
      setMessages((m) => [...m, { role: "assistant", content: "Sorry, something went wrong. Could you try again?" }]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Ask Salman AI" : "Open Ask Salman AI"}
        className={cn(
          "fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-brand-500/20 transition-transform hover:scale-105",
          open ? "bg-zinc-800 text-zinc-100" : "bg-brand-500 text-white",
        )}
      >
        <Icon name={open ? "x" : "message"} className="h-6 w-6" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Ask Salman AI chat"
          className="fixed bottom-24 right-4 left-4 z-[70] flex h-[min(560px,70vh)] flex-col overflow-hidden rounded-2xl border border-edge bg-panel shadow-2xl sm:left-auto sm:w-[380px]"
        >
          <div className="flex items-center gap-3 border-b border-edge bg-panel px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
              <Icon name="spark" className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-strong">Ask Salman AI</p>
              <p className="text-[11px] text-faint">AI assistant · powered by OpenRouter</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-lg p-1.5 text-faint transition-colors hover:bg-edge hover:text-strong"
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  m.role === "user"
                    ? "ml-auto bg-brand-500 text-white"
                    : "border border-edge bg-surface text-soft",
                )}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-2 border border-edge bg-surface px-3.5 py-2.5 text-xs text-faint">
                <Icon name="clock" className="h-3.5 w-3.5 animate-spin" />
                Salman is thinking…
              </div>
            )}
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-edge px-4 py-3">
              {SUGGESTED.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-edge bg-surface px-3 py-1.5 text-xs text-soft transition-colors hover:border-brand-500/50 hover:text-strong"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-edge p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              aria-label="Your question"
              className="flex-1 rounded-xl border border-edge bg-surface px-3.5 py-2.5 text-sm text-strong outline-none placeholder:text-faint focus:border-brand-500/60"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send question"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white transition-colors hover:bg-brand-400 disabled:opacity-40"
            >
              <Icon name="send" className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
