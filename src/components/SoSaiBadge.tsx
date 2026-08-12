import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";

export function SoSaiBadge() {
  return (
    <div className="group relative max-w-lg overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/[0.09] via-panel/80 to-transparent p-4 transition-colors duration-300 hover:border-brand-500/35">
      <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-brand-500/15 blur-2xl transition-colors duration-300 group-hover:bg-brand-500/25" />
      <div className="relative flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
          <Icon name="spark" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link
              to="/ai-automation"
              className="font-display text-sm font-semibold text-strong transition-colors hover:text-accent-strong"
            >
              SoSAi Agent
            </Link>
            <span className="rounded-full border border-gold-accent/30 bg-gold-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gold-accent">
              In Development
            </span>
          </div>
          <p className="mt-0.5 text-[11px] font-medium text-accent-strong">
            Personal AI Operations Agent · Built with Hermes
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted">
            “A practical AI agent designed around real workflows, monitoring,
            coordination and business operations.”
          </p>
          <p className="mt-2 text-xs leading-relaxed text-soft">
            <Link
              to="/book"
              className="font-semibold text-accent-strong transition-colors hover:text-accent"
            >
              Need a Custom AI Agent?
              <Icon
                name="arrow"
                className="ml-1 inline h-3 w-3 -translate-x-0.5 transition-transform group-hover:translate-x-0"
              />
            </Link>
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-faint">
            I can help plan and build a custom AI agent around your own
            business workflow.
          </p>
        </div>
      </div>
    </div>
  );
}
