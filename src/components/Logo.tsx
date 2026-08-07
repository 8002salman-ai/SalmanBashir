import { cn } from "@/utils/cn";

/* Brand mark: an "SB" monogram inside a hand-drawn heart. The heart outline
   draws itself in once on mount (held still under reduced motion) and the
   whole mark inherits the brand gradient, so it works on every theme. */

export function LogoMark({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Salman Bashir"
        className={cn("h-full w-full", imgClassName)}
      >
        <defs>
          <linearGradient id="sb-logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--sb-accent-strong)" />
            <stop offset="55%" stopColor="var(--sb-accent)" />
            <stop offset="100%" stopColor="var(--sb-gold)" />
          </linearGradient>
          <linearGradient id="sb-logo-tile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--sb-panel-strong)" />
            <stop offset="100%" stopColor="var(--sb-bg-soft)" />
          </linearGradient>
        </defs>

        {/* tile */}
        <rect
          width="64"
          height="64"
          rx="16"
          fill="url(#sb-logo-tile)"
          stroke="var(--sb-border-strong)"
        />

        {/* hand-drawn heart */}
        <path
          className="sb-logo-heart"
          d="M32 51.5C14.5 39.5 9.5 27.5 16.5 20.5C22 15 29 17 32 22.5C35 17 42 15 47.5 20.5C54.5 27.5 49.5 39.5 32 51.5Z"
          fill="none"
          stroke="url(#sb-logo-grad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* SB monogram */}
        <text
          x="32"
          y="36.5"
          textAnchor="middle"
          fill="url(#sb-logo-grad)"
          style={{
            fontFamily: "var(--font-display, inherit)",
            fontSize: "17px",
            fontWeight: 800,
            letterSpacing: "-0.5px",
          }}
        >
          SB
        </text>
      </svg>
    </span>
  );
}
