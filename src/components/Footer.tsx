import { Link } from "react-router-dom";
import { personal, contact, footerLinks } from "@/data/content";
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
    <footer className="relative border-t border-edge py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <span className="h-16 w-16 shrink-0 drop-shadow-[0_0_18px_rgba(34,211,238,0.4)] sm:h-20 sm:w-20">
                <LogoMark className="block h-full w-full" />
              </span>
              <span className="font-display text-base font-bold text-strong">
                {personal.name}
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {personal.tagline} {personal.statement}
            </p>
            <p className="mt-3 text-sm text-faint">
              Based in Pakistan · Remote support for the USA, UK, Norway,
              Sweden and international online markets.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="external-link rounded-lg border border-edge bg-panel px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-edge-strong hover:text-strong"
                >
                  <Icon name={s.icon} className="h-3.5 w-3.5" />
                  {s.label}
                  <Icon
                    name="external"
                    className="external-icon h-3 w-3 opacity-70"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-faint">
              Navigate
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted transition-colors hover:text-strong"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
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
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <Icon name="calendar" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="leading-snug">{contact.availability}</span>
              </li>
            </ul>
            <Link to="/book" className="btn btn-primary mt-4">
              Book a Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-edge pt-6 sm:flex-row">
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
