import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navLinks, moreLinks, personal } from "@/data/content";
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
      title={latest ? `Latest: ${latest.name}` : "View projects"}
      className="group hidden items-center gap-1.5 rounded-lg border border-edge bg-panel/60 px-2.5 py-1.5 text-xs font-medium text-soft transition-colors hover:border-brand-500/30 hover:text-strong lg:inline-flex"
    >
      <Icon name="spark" className="h-3 w-3 text-accent-strong" />
      {latest ? (
        <span className="max-w-[9rem] truncate">{latest.name}</span>
      ) : (
        <span>Projects</span>
      )}
    </Link>
  );
}

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
        className={cn(
          "flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
          active || open ? "text-accent-strong" : "text-muted hover:text-strong",
        )}
      >
        More
        <Icon
          name="arrow"
          className={cn("h-3.5 w-3.5 rotate-90 transition-transform", open && "-rotate-90")}
        />
      </button>
      <div
        role="menu"
        className={cn(
          "absolute right-0 top-full z-10 mt-1 w-56 origin-top-right rounded-xl border border-edge bg-bg/95 p-1.5 shadow-lg backdrop-blur-xl transition-all duration-150",
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0",
        )}
      >
        {moreLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={cn(
              "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              isActive(link.href)
                ? "bg-panel text-accent-strong"
                : "text-soft hover:bg-panel hover:text-strong",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-edge bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          to="/"
          aria-label="Salman Bashir — home"
          className="group flex items-center gap-2.5"
        >
          <span className="relative h-12 w-12 shrink-0 drop-shadow-[0_0_14px_rgba(34,211,238,0.35)] sm:h-[52px] sm:w-[52px]">
            <LogoMark className="block h-full w-full" />
          </span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="font-display text-lg font-bold tracking-tight text-strong">
              {personal.name}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              aria-current={isActive(link.href) ? "true" : undefined}
              className={({ isActive: a }) =>
                cn(
                  "nav-link rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                  a || isActive(link.href)
                    ? "text-accent-strong"
                    : "text-muted hover:text-strong",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <MoreMenu isActive={isActive} />
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeSwitcher />
          <LatestRepoBadge />
          <Link
            to="/book"
            className="btn btn-primary btn-sm hidden shrink-0 whitespace-nowrap sm:inline-flex"
          >
            <span className="hidden lg:inline">Meet up</span>
            <span className="lg:hidden">Meet</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-edge-strong text-soft transition-colors hover:text-strong xl:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              className="h-5 w-5"
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-edge bg-bg/95 backdrop-blur-xl transition-all duration-300 xl:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <div className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "true" : undefined}
              className={({ isActive: a }) =>
                cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium",
                  a || isActive(link.href)
                    ? "bg-panel text-accent-strong"
                    : "text-soft hover:bg-panel hover:text-strong",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="my-1 border-t border-edge pt-1">
            <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-faint">
              More
            </p>
            {moreLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "true" : undefined}
                className={({ isActive: a }) =>
                  cn(
                    "block rounded-lg px-3 py-2 text-sm font-medium",
                    a || isActive(link.href)
                      ? "bg-panel text-accent-strong"
                      : "text-soft hover:bg-panel hover:text-strong",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="btn btn-primary btn-block mt-2"
          >
            Meet up
          </Link>
        </div>
      </div>
    </header>
  );
}
