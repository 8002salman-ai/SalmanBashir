import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { navLinks, personal } from "@/data/content";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LogoMark } from "@/components/Logo";

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
          className="group flex items-center gap-3"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-brand-500/20">
            <LogoMark className="block h-full w-full" />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold tracking-tight text-strong">
              {personal.name}
            </span>
            <span className="max-w-[13rem] truncate text-[11px] text-faint lg:max-w-[17rem]">
              {personal.supportingIdentity}
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
                  "rounded-lg px-2.5 py-2 text-sm font-medium transition-colors",
                  a || isActive(link.href)
                    ? "text-accent-strong"
                    : "text-muted hover:text-strong",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeSwitcher />
          <Link
            to="/book"
            className="hidden rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/20 sm:inline-flex"
          >
            Book a Consultation
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
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-brand-500 px-3 py-2 text-center text-sm font-semibold text-on-accent"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
