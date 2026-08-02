import { personal, contact, navLinks } from "@/data/content";
import { Icon } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-sm font-bold text-ink-950">
                {personal.monogram}
              </span>
              <span className="font-display text-base font-semibold text-white">
                {personal.name}
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              {personal.heroSub}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {personal.markets.slice(0, 4).map((m) => (
                <span
                  key={m}
                  className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-[11px] text-zinc-500"
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  GitHub
                  <Icon name="external" className="h-3.5 w-3.5" />
                </a>
              )}
              {contact.fiverr && (
                <a
                  href={contact.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold-500/20 bg-gold-500/5 px-3 py-2 text-xs font-medium text-gold-300 transition-colors hover:border-gold-500/40"
                >
                  Fiverr
                  <Icon name="external" className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigate
            </p>
            <ul className="mt-3 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Get in touch
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-zinc-400">
                <Icon name="location" className="h-4 w-4 text-brand-400" />
                {personal.location}
              </li>
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <Icon name="mail2" className="h-4 w-4 text-brand-400" />
                    {contact.email}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2.5 text-sm text-zinc-400">
                <Icon name="calendar" className="h-4 w-4 text-brand-400" />
                {contact.availability}
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
            >
              Book a Consultation
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-5 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-zinc-600">
              Built around real business problems — not hype.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <Icon name="arrow-up" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
