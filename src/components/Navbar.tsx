import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navLinks, moreLinks, personal } from "@/data/content";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/ui";

function MoreMenu({ isActive }: { isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = moreLinks.some((l) => isActive(l.href));

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
        id="more-menu-button"
        className={cn(
          "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs xl:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer",
          active || open
            ? "bg-indigo-600/25 text-white font-semibold border border-indigo-400/40 shadow-[0_0_16px_rgba(99,102,241,0.25)]"
            : "text-slate-300 hover:text-white hover:bg-white/[0.08]",
        )}
      >
        <span>More</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200 opacity-70",
            open && "rotate-180 opacity-100 text-cyan-300",
          )}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        role="menu"
        aria-labelledby="more-menu-button"
        className={cn(
          "absolute right-0 top-full z-40 mt-2.5 w-72 origin-top-right rounded-2xl border border-white/12 bg-[#090d18]/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-200",
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 -translate-y-1.5",
        )}
      >
        <div className="px-3 py-1.5 border-b border-white/10 mb-1.5 flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Ecosystem Directory
          </span>
          <span className="text-[9px] rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 font-bold uppercase tracking-wider">
            Verified
          </span>
        </div>

        <div className="max-h-[23rem] overflow-y-auto space-y-0.5 pr-1 scrollbar-thin">
          {moreLinks.map((link) => {
            const isCurrent = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={cn(
                  "group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-all duration-150",
                  isCurrent
                    ? "bg-indigo-600/25 text-white font-bold border border-indigo-400/40 shadow-sm"
                    : "text-slate-300 hover:bg-white/[0.08] hover:text-white",
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full shrink-0 transition-colors",
                      isCurrent
                        ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                        : "bg-white/30 group-hover:bg-cyan-400",
                    )}
                  />
                  <span className="truncate">{link.label}</span>
                </div>
                <Icon
                  name="arrow"
                  className="h-3 w-3 opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-cyan-400 shrink-0 ml-2"
                />
              </Link>
            );
          })}
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
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape key support for mobile drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    if (href === "/projects") {
      return location.pathname === "/projects" || location.pathname.startsWith("/projects/");
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-3 sm:px-6 pt-2.5 sm:pt-4 transition-all duration-300">
      {/* Executive Floating Glass Capsule matching Astra */}
      <div
        className={cn(
          "pointer-events-auto mx-auto max-w-7xl rounded-2xl sm:rounded-full border transition-all duration-300 relative",
          "backdrop-blur-2xl px-3.5 sm:px-5 py-2 sm:py-2.5",
          "bg-[#07090e]/90 [data-theme=light]:bg-white/90",
          "border-white/10 [data-theme=light]:border-black/10",
          "shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7)]",
          scrolled &&
            "border-indigo-500/30 shadow-[0_16px_45px_-8px_rgba(79,70,229,0.25)] bg-[#05060b]/95 [data-theme=light]:bg-white/95",
        )}
      >
        {/* Subtle top edge metallic reflection beam */}
        <div className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-3 sm:gap-6"
        >
          {/* Executive Brand matching Astra */}
          <Link
            to="/"
            aria-label="Salman Bashir — Home"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 whitespace-nowrap"
          >
            {/* SB Logo with luxury glowing ring */}
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-indigo-500/25 via-[#0b1020] to-transparent p-1 shadow-md shadow-indigo-500/20 group-hover:scale-105 group-hover:border-cyan-400/60 transition-all duration-300">
              <LogoMark className="h-full w-full object-contain" />
              {/* Status beacon */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[#07090e] bg-emerald-500" />
              </span>
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-display text-sm sm:text-base font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                {personal.name.toUpperCase()}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-slate-400 group-hover:text-slate-300 transition-colors truncate">
                {personal.executiveSubtitle || "Entrepreneur | Systems | AI"}
              </span>
            </div>
          </Link>

          {/* Center Navigation: Segmented Glass Pill Dock */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isCurrent = isActive(link.href);
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-xs xl:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer",
                    isCurrent
                      ? "bg-indigo-600/35 text-white font-semibold border border-indigo-400/40 shadow-[0_0_14px_rgba(99,102,241,0.35)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.07]",
                  )}
                >
                  {isCurrent && (
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                  )}
                  {link.label}
                </NavLink>
              );
            })}
            <MoreMenu isActive={isActive} />
          </div>

          {/* Right Executive Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeSwitcher />

            {/* Direct Executive CTA Button: Work With Me → */}
            <Link
              to="/book"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(99,102,241,0.6)] active:scale-[0.98] shrink-0"
            >
              <span>Work With Me</span>
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation-drawer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-slate-200 transition-colors hover:text-white hover:border-indigo-400/40 lg:hidden cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
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

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation-drawer"
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            open ? "max-h-[80vh] mt-3 pt-3 border-t border-white/10" : "max-h-0",
          )}
        >
          <div className="space-y-3 py-1 max-h-[70vh] overflow-y-auto pr-1">
            {/* Primary Nav Grid */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isCurrent = isActive(link.href);
                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all min-h-[44px]",
                      isCurrent
                        ? "bg-indigo-600/30 text-white border border-indigo-400/40 shadow-sm"
                        : "text-slate-300 hover:bg-white/[0.08] hover:text-white bg-white/[0.02]",
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full shrink-0",
                        isCurrent ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]" : "bg-white/20",
                      )}
                    />
                    <span className="truncate">{link.label}</span>
                  </NavLink>
                );
              })}
            </div>

            {/* Extended Ecosystem Links */}
            <div className="pt-3 border-t border-white/10">
              <p className="px-1 pb-2 text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Additional Ecosystem
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {moreLinks.map((link) => {
                  const isCurrent = isActive(link.href);
                  return (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-2.5 py-2 text-[11.5px] font-medium transition-colors truncate min-h-[36px] flex items-center",
                        isCurrent
                          ? "text-cyan-300 font-semibold bg-indigo-500/10"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]",
                      )}
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Direct Executive Action in Drawer */}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 py-3 text-xs font-black text-white shadow-lg shadow-indigo-600/25 min-h-[48px]"
            >
              <Icon name="calendar" className="h-4 w-4" />
              <span>Work With Me — Schedule Meeting</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
