import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const THEMES = ["dark", "soft", "light", "system"] as const;
export type Theme = (typeof THEMES)[number];

const LABELS: Record<Theme, string> = {
  dark: "Dark",
  soft: "Soft (textured charcoal)",
  light: "Light",
  system: "System",
};

const THEME_COLORS: Record<Theme, string> = {
  dark: "#040405",
  soft: "#17181c",
  light: "#f5f6f8",
  system: "#040405",
};

function getInitial(): Theme {
  try {
    const stored = localStorage.getItem("sb-theme");
    if (THEMES.includes(stored as Theme)) return stored as Theme;
  } catch {
    /* ignore */
  }
  return "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
}

export function ThemeSwitcher({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("sb-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-0.5 shadow-inner backdrop-blur-md",
        className,
      )}
    >
      {THEMES.map((t) => (
        <button
          key={t}
          type="button"
          role="radio"
          aria-checked={theme === t}
          aria-label={`${LABELS[t]} theme`}
          title={LABELS[t]}
          onClick={() => setTheme(t)}
          className={cn(
            "inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
            theme === t
              ? "bg-brand-500/25 text-cyan-700 dark:text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.25)] border border-cyan-400/40"
              : "text-muted hover:text-strong hover:bg-black/[0.05] dark:hover:bg-white/[0.08]",
          )}
        >
          {t === "dark" && <SunOffIcon />}
          {t === "soft" && <SoftIcon />}
          {t === "light" && <SunIcon />}
          {t === "system" && <MonitorIcon />}
        </button>
      ))}
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function SunOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SoftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
