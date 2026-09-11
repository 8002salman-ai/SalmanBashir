import { Icon } from "@/components/ui";

const TICKER_ITEMS = [
  { label: "Marketplace Fulfillment", desc: "eBay · TikTok Shop · Etsy · Mercari · Depop", icon: "store" },
  { label: "Unit Economics", desc: "Real-Time COGS & Net Margin Audits", icon: "target" },
  { label: "AI & ERP Architecture", desc: "Hermes AI Agent & Embani ERP", icon: "cpu" },
  { label: "Global Logistics", desc: "Freight Forwarding & Customs Coordination", icon: "globe" },
  { label: "Operational Integrity", desc: "100% Battle-Tested Workflow SOPs", icon: "check" },
] as const;

export function LiveOperationsTicker() {
  return (
    <div className="relative my-4 overflow-hidden border-y border-amber-500/20 bg-gradient-to-r from-panel via-panel-strong to-panel py-3 shadow-inner">
      {/* Ambient edge blur shadows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />

      {/* Floating horizontal ticker stream */}
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap hover:[animation-play-state:paused]">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={`${item.label}-${idx}`} className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400">
              <Icon name={item.icon} className="h-3.5 w-3.5" />
            </span>
            <div className="flex items-center gap-2">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-strong">
                {item.label}:
              </span>
              <span className="font-mono text-xs text-muted">
                {item.desc}
              </span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/40 ml-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
