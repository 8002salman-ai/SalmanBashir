import { cn } from "@/utils/cn";

export function SectionDivider({
  accent = "brand",
  label,
  className,
}: {
  accent?: "brand" | "amber" | "emerald" | "indigo" | "gold";
  label?: string;
  className?: string;
}) {
  const accentGlow = {
    brand: "from-transparent via-brand-500/30 to-transparent",
    amber: "from-transparent via-amber-500/30 to-transparent",
    emerald: "from-transparent via-emerald-500/30 to-transparent",
    indigo: "from-transparent via-indigo-500/30 to-transparent",
    gold: "from-transparent via-gold-accent/30 to-transparent",
  }[accent];

  const dotColor = {
    brand: "bg-brand-400 border-brand-500/40",
    amber: "bg-amber-400 border-amber-500/40",
    emerald: "bg-emerald-400 border-emerald-500/40",
    indigo: "bg-indigo-400 border-indigo-500/40",
    gold: "bg-gold-accent border-gold-accent/40",
  }[accent];

  return (
    <div className={cn("relative my-4 sm:my-6 flex items-center justify-center", className)}>
      {/* Background Gradient Hairline */}
      <div className={cn("absolute inset-x-0 h-px bg-gradient-to-r", accentGlow)} />

      {/* Center Luxury Pill or Diamond */}
      <div className="relative z-10 flex items-center gap-2 rounded-full border border-edge-strong bg-panel-strong px-3 py-1 text-[10px] font-mono font-medium tracking-wider text-muted shadow-sm backdrop-blur-md">
        <span className={cn("h-1.5 w-1.5 rounded-full border animate-pulse", dotColor)} />
        {label ? (
          <span className="uppercase text-[9px] tracking-widest text-soft">{label}</span>
        ) : (
          <span className="h-1 w-8 rounded-full bg-edge" />
        )}
      </div>
    </div>
  );
}
