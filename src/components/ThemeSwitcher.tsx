import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const THEMES = ["dark", "light", "system"] as const;
export type Theme = (typeof THEMES)[number];

const LABELS: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};

const THEME_COLORS: Record<Theme, string> = {
  dark: "#040405",
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
        "inline-flex items-center gap-0.5 rounded-xl border border-edge bg-panel p-0.5",
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
            "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
            theme === t
              ? "bg-brand-500/15 text-brand-300"
              : "text-faint hover:text-soft",
          )}
        >
          {t === "dark" && <SunOffIcon />}
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
      className="h-[18px] w-[18px]"
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
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
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
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
