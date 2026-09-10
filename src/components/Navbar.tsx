import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navLinks, moreLinks as baseMoreLinks, personal } from "@/data/content";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/ui";
import { useGithubRepos } from "@/hooks/useGithubRepos";

function LatestRepoBadge() {
  const { repos } = useGithubRepos([]);
  const latest = repos[0];
  return (
    <Link
      to="/projects"
      title={latest ? `Latest build: ${latest.name}` : "View projects"}
      className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-soft backdrop-blur transition-all duration-200 hover:border-brand-400/40 hover:text-strong hover:bg-white/[0.07]"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="max-w-[8rem] truncate text-[11.5px]">
        {latest ? latest.name : "Projects"}
      </span>
    </Link>
  );
}

function MoreMenu({ isActive }: { isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Expanded menu items including Sourcing and Training for seamless access on all screen sizes
  const extendedLinks = [
    { label: "Sourcing & Freight", href: "/sourcing-freight" },
    { label: "Training & Consulting", href: "/training" },
    ...baseMoreLinks,
  ];

  const active = extendedLinks.some((l) => isActive(l.href));

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs lg:px-3 lg:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap",
          active || open
            ? "bg-gradient-to-r from-brand-500/25 via-cyan-400/20 to-brand-500/15 text-cyan-300 dark:text-cyan-300 [data-theme=light]:text-cyan-700 font-bold border border-cyan-400/40 shadow-[0_0_14px_rgba(34,211,238,0.25)]"
            : "text-muted hover:text-strong hover:bg-white/[0.06] [data-theme=light]:hover:bg-black/[0.05]",
        )}
      >
        <span>More</span>
        <Icon
          name="arrow"
          className={cn(
            "h-3 w-3 rotate-90 transition-transform duration-200 opacity-60",
            open && "-rotate-90 text-cyan-300 opacity-100",
          )}
        />
      </button>

      <div
        role="menu"
        className={cn(
          "absolute right-0 top-full z-30 mt-2 w-64 origin-top-right rounded-2xl border border-white/12 [data-theme=light]:border-black/10 bg-[#0a0b12]/95 [data-theme=light]:bg-white/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-200",
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 -translate-y-1",
        )}
      >
        <div className="px-3 py-1.5 border-b border-edge/60 mb-1 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
            Ecosystem Directory
          </span>
          <span className="text-[9px] rounded-full bg-brand-500/20 text-cyan-300 px-1.5 py-0.5 font-bold">
            Live
          </span>
        </div>

        <div className="max-h-[22rem] overflow-y-auto space-y-0.5 pr-1">
          {extendedLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={cn(
                "group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all duration-150",
                isActive(link.href)
                  ? "bg-brand-500/20 text-cyan-300 font-bold border border-cyan-400/30 shadow-sm"
                  : "text-soft hover:bg-white/[0.08] [data-theme=light]:hover:bg-black/[0.05] hover:text-strong",
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isActive(link.href)
                      ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                      : "bg-white/30 group-hover:bg-cyan-400",
                  )}
                />
                <span>{link.label}</span>
              </div>
              <Icon
                name="arrow"
                className="h-3 w-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    location.pathname === href ||
    (href === "/projects" && location.pathname.startsWith("/projects/"));

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-3 sm:px-6 pt-2.5 sm:pt-3.5 transition-all duration-500">
      {/* Executive Floating Glass Capsule */}
      <div
        className={cn(
          "pointer-events-auto mx-auto max-w-7xl rounded-2xl sm:rounded-full border transition-all duration-300 relative",
          "backdrop-blur-2xl px-3 sm:px-4 py-2 sm:py-2.5",
          "bg-[#08090e]/85 dark:bg-[#08090e]/90 [data-theme=light]:bg-white/90",
          "border-white/10 dark:border-white/12 [data-theme=light]:border-black/10",
          "shadow-[0_12px_40px_-8px_rgba(0,0,0,0.65)] [data-theme=light]:shadow-[0_10px_35px_-8px_rgba(0,0,0,0.12)]",
          scrolled &&
            "border-brand-500/35 shadow-[0_16px_50px_-10px_rgba(34,211,238,0.2)] bg-[#05060a]/95 [data-theme=light]:bg-white/95",
        )}
      >
        {/* Subtle top edge metallic reflection beam */}
        <div className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Ambient subtle glow aura behind the pill */}
        <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl sm:rounded-full bg-gradient-to-r from-brand-500/10 via-cyan-400/5 to-gold-accent/5 blur-xl opacity-75" />

        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-2 sm:gap-4"
        >
          {/* Executive Brand Cluster */}
          <Link
            to="/"
            aria-label="Salman Bashir — home"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap"
          >
            {/* Luxury Logo with glowing ring */}
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-brand-500/25 via-panel to-transparent p-0.5 shadow-md shadow-brand-500/15 group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-300">
              <LogoMark className="h-full w-full object-contain" />
              {/* Live operational status beacon */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-bg bg-emerald-500" />
              </span>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-sm sm:text-[15px] font-black tracking-tight text-strong group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {personal.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-0.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-1.5 py-0.2 text-[9px] font-bold text-cyan-300 uppercase tracking-wider">
                  Pro
                </span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono tracking-wider text-muted group-hover:text-soft transition-colors truncate">
                Systems Architect
              </span>
            </div>
          </Link>

          {/* Center Navigation: Segmented Glass Pill Dock */}
          <div className="hidden md:flex items-center gap-0.5 rounded-full border border-white/[0.08] [data-theme=light]:border-black/[0.08] bg-white/[0.03] [data-theme=light]:bg-black/[0.03] p-1 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isCurrent = isActive(link.href);
              // On tablet screens (md: 768px-1279px), hide Sourcing & Training to prevent cramped layout; they're in MoreMenu
              const isSecondaryOnTablet =
                link.href === "/sourcing-freight" || link.href === "/training";

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  aria-current={isCurrent ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-2.5 xl:px-3 py-1.5 text-xs xl:text-[13px] font-semibold transition-all duration-200 whitespace-nowrap",
                    isSecondaryOnTablet
                      ? "hidden xl:inline-flex"
                      : "inline-flex items-center",
                    isCurrent
                      ? "bg-gradient-to-r from-brand-500/25 via-cyan-400/20 to-brand-500/15 text-cyan-300 dark:text-cyan-300 [data-theme=light]:text-cyan-700 font-bold border border-cyan-400/40 shadow-[0_0_14px_rgba(34,211,238,0.25)]"
                      : "text-muted hover:text-strong hover:bg-white/[0.06] [data-theme=light]:hover:bg-black/[0.05]",
                  )}
                >
                  {isCurrent && (
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                  )}
                  {link.label}
                </NavLink>
              );
            })}
            <MoreMenu isActive={isActive} />
          </div>

          {/* Right-Side Executive Actions & Controls */}
          <div className="flex items-center gap-2 lg:gap-2.5 shrink-0">
            <ThemeSwitcher />

            <div className="hidden 2xl:block">
              <LatestRepoBadge />
            </div>

            {/* Direct Executive CTA Button */}
            <Link
              to="/book"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 px-3.5 sm:px-4 py-1.5 text-xs font-black text-black shadow-md shadow-brand-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_22px_rgba(34,211,238,0.5)] active:scale-[0.98] shrink-0"
            >
              <Icon name="calendar" className="h-3.5 w-3.5" />
              <span className="tracking-wide">Meet up</span>
              <Icon
                name="arrow"
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-soft transition-colors hover:text-strong hover:border-brand-400/40 md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="h-4 w-4"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Frosted Glass Drawer */}
        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            open ? "max-h-[34rem] mt-3 pt-3 border-t border-edge/60" : "max-h-0",
          )}
        >
          <div className="space-y-1 py-1">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "true" : undefined}
                  className={({ isActive: a }) =>
                    cn(
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-colors",
                      a || isActive(link.href)
                        ? "bg-brand-500/20 text-cyan-300 border border-cyan-400/30"
                        : "text-soft hover:bg-white/[0.06] hover:text-strong",
                    )
                  }
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      isActive(link.href) ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]" : "bg-white/20",
                    )}
                  />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-edge/50">
              <p className="px-2 pb-1.5 text-[10.5px] font-mono font-bold uppercase tracking-wider text-muted">
                Additional Ecosystem
              </p>
              <div className="grid grid-cols-2 gap-1">
                {baseMoreLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "true" : undefined}
                    className={({ isActive: a }) =>
                      cn(
                        "rounded-lg px-2.5 py-1.5 text-[11.5px] font-medium transition-colors",
                        a || isActive(link.href)
                          ? "text-cyan-300 font-semibold"
                          : "text-muted hover:text-strong",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 py-2.5 text-xs font-black text-black shadow-lg"
            >
              <Icon name="calendar" className="h-4 w-4" />
              <span>Schedule Direct Briefing</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
