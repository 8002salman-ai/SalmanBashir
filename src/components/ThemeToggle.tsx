import { useEffect, useState } from "react";
import { Icon } from "@/components/ui";

const THEMES = ["smoky", "ink", "slate"] as const;
const LABELS: Record<(typeof THEMES)[number], string> = {
  smoky: "Smoky",
  ink: "Ink",
  slate: "Slate",
};

const THEME_COLORS: Record<(typeof THEMES)[number], string> = {
  smoky: "#0e0e11",
  ink: "#070708",
  slate: "#14161c",
};

function getInitial(): (typeof THEMES)[number] {
  try {
    const stored = localStorage.getItem("sb-theme") as (typeof THEMES)[number];
    if (THEMES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "smoky";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<(typeof THEMES)[number]>(getInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("sb-theme", theme);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const cycle = () => {
    const i = THEMES.indexOf(theme);
    setTheme(THEMES[(i + 1) % THEMES.length]);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${LABELS[theme]}. Click to switch theme.`}
      title={`Theme: ${LABELS[theme]}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition-colors hover:text-white"
    >
      <Icon name="spark" className="h-5 w-5" />
    </button>
  );
}
