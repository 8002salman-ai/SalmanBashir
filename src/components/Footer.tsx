import { Link } from "react-router-dom";
import { personal, contact, navLinks } from "@/data/content";
import { Icon, type IconName } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

const socialMeta: { key: string; label: string; icon: IconName }[] = [
  { key: "youtube", label: "YouTube", icon: "youtube" },
  { key: "github", label: "GitHub", icon: "github" },
  { key: "linkedin", label: "LinkedIn", icon: "linkedin" },
  { key: "x", label: "X / Twitter", icon: "x" },
  { key: "instagram", label: "Instagram", icon: "instagram" },
  { key: "fiverr", label: "Fiverr", icon: "fiverr" },
  { key: "facebook", label: "Facebook", icon: "facebook" },
  { key: "tiktok", label: "TikTok", icon: "tiktok" },
];

export function Footer() {
  const socialLinks = socialMeta
    .map((s) => ({ ...s, url: contact.socials[s.key] }))
    .filter((s) => Boolean(s.url));

  return (
    <footer className="relative border-t border-edge py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <span className="h-10 w-10 overflow-hidden rounded-xl">
                <LogoMark className="block h-full w-full" />
              </span>
              <span className="font-display text-base font-semibold text-strong">
                {personal.name}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {personal.tagline} {personal.statement}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {personal.markets.slice(0, 4).map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-edge bg-panel px-2 py-1 text-[11px] text-faint"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-edge bg-panel px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-edge-strong hover:text-strong"
                >
                  <Icon name={s.icon} className="h-3.5 w-3.5" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-faint">
              Navigate
            </p>
            <ul className="mt-3 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted transition-colors hover:text-strong"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="text-sm text-muted transition-colors hover:text-strong"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted transition-colors hover:text-strong"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-faint">
              Get in touch
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted">
                <Icon name="location" className="h-4 w-4 text-accent" />
                {personal.location}
              </li>
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-strong"
                  >
                    <Icon name="mail2" className="h-4 w-4 text-accent" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5 text-sm text-muted">
                <Icon name="calendar" className="h-4 w-4 text-accent" />
                {contact.availability}
              </li>
            </ul>
            <Link
              to="/book"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-panel-strong px-4 py-2.5 text-sm font-semibold text-strong transition-colors hover:bg-edge"
            >
              Book a Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-edge pt-5 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-faint">
              Built around real business problems — not hype.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-edge-strong hover:text-strong"
            >
              <Icon name="arrow-up" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
