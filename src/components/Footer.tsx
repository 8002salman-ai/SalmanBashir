import { Link } from "react-router-dom";
import { personal, contact } from "@/data/content";
import { Icon, type IconName } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

const socialMeta: { key: string; label: string; icon: IconName; badgeColor: string }[] = [
  { key: "youtube", label: "YouTube", icon: "youtube", badgeColor: "hover:border-rose-500/50 hover:text-rose-400" },
  { key: "github", label: "GitHub", icon: "github", badgeColor: "hover:border-white/40 hover:text-white" },
  { key: "linkedin", label: "LinkedIn", icon: "linkedin", badgeColor: "hover:border-sky-500/50 hover:text-sky-400" },
  { key: "fiverr", label: "Fiverr Pro", icon: "fiverr", badgeColor: "hover:border-emerald-500/50 hover:text-emerald-400" },
];

const navigationColumns = [
  {
    title: "Services & Systems",
    icon: "briefcase" as IconName,
    links: [
      { label: "Overview Services", href: "/services" },
      { label: "Marketplace Operations", href: "/marketplace-services" },
      { label: "Business Systems & ERP", href: "/business-systems" },
      { label: "AI & Automation", href: "/ai-automation" },
      { label: "Sourcing & Freight", href: "/sourcing-freight" },
      { label: "Practical Training", href: "/training" },
    ],
  },
  {
    title: "Ecosystem & Work",
    icon: "layers" as IconName,
    links: [
      { label: "Flagship Projects", href: "/projects" },
      { label: "Live Repositories", href: "/projects#github" },
      { label: "Production Media", href: "/media" },
      { label: "Core Skills & Tech", href: "/skills" },
      { label: "Credentials & Proof", href: "/credentials" },
      { label: "Founder Journey", href: "/journey" },
      { label: "Executive Team", href: "/team" },
    ],
  },
  {
    title: "Direct Connect",
    icon: "message" as IconName,
    links: [
      { label: "About Salman", href: "/about" },
      { label: "Schedule Briefing", href: "/book" },
      { label: "Contact Form", href: "/contact" },
      { label: "Fiverr Marketplace", href: "/fiverr" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  const socialLinks = socialMeta
    .map((s) => ({ ...s, url: contact.socials[s.key] }))
    .filter((s) => Boolean(s.url));

  return (
    <footer className="relative border-t border-white/10 bg-[#07080c] pt-14 pb-12 text-zinc-300">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Pre-Footer Action Banner */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-brand-500/10 via-[#0e1018] to-emerald-500/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                Direct Operator Collaboration
              </span>
              <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                Have an operational problem or need a resilient business system?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                Whether scaling multi-marketplace listings, true profit & fee reconciliation, or deploying custom internal ERP tools — let's engineer what lasts.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-black shadow-lg shadow-brand-500/20 hover:brightness-110 transition-all active:scale-95"
              >
                <Icon name="calendar" className="h-4 w-4" />
                <span>Meet Up / Schedule Call</span>
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Icon name="mail2" className="h-4 w-4 text-brand-400" />
                  <span>Email Direct</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid — 12 Columns Balanced for Any Screen Resolution */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10">
          {/* Brand & Executive Identity Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <Link to="/" className="group inline-flex items-center gap-3">
                <span className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-2xl border border-white/20 bg-gradient-to-br from-brand-500/25 via-white/10 to-transparent p-1 shadow-xl shadow-brand-500/10 backdrop-blur group-hover:border-brand-400/50 transition-all">
                  <LogoMark className="h-full w-full" />
                </span>
                <div className="min-w-0">
                  <span className="block font-display text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-brand-300 transition-colors">
                    {personal.name}
                  </span>
                  <span className="block text-xs font-semibold text-amber-400">
                    Founder & CEO · Systems Architect
                  </span>
                </div>
              </Link>

              <p className="mt-3.5 max-w-sm text-[13.5px] leading-relaxed text-zinc-400">
                {personal.tagline} {personal.statement}
              </p>

              <div className="mt-3 flex items-start gap-2 text-xs text-zinc-400">
                <Icon name="location" className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" />
                <span>Based in Pakistan · Global Remote Support (USA, UK, Norway, Sweden, Worldwide)</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                Official Channels:
              </span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-zinc-300 backdrop-blur transition-all duration-200 hover:bg-white/[0.08] ${s.badgeColor}`}
                  >
                    <Icon name={s.icon} className="h-3.5 w-3.5" />
                    <span>{s.label}</span>
                    <Icon name="arrow" className="h-2 w-2 -rotate-45 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns (2 cols each = 6 cols total) */}
          {navigationColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="flex items-center gap-1.5 mb-3.5 text-xs font-bold uppercase tracking-wider text-white">
                <Icon name={col.icon} className="h-3.5 w-3.5 text-brand-400" />
                <span>{col.title}</span>
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-zinc-400 hover:text-brand-300 transition-colors"
                    >
                      <span className="h-1 w-1 rounded-full bg-zinc-600 group-hover:bg-brand-400 transition-colors" />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Direct Contact Card Column (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1.5 mb-3.5 text-xs font-bold uppercase tracking-wider text-white">
              <Icon name="calendar" className="h-3.5 w-3.5 text-emerald-400" />
              <span>Get in Touch</span>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 backdrop-blur">
              <div className="space-y-3 text-xs">
                {contact.email && (
                  <div>
                    <span className="text-zinc-400 text-[10.5px] uppercase font-bold tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-0.5 text-[12.5px] font-mono text-brand-300 hover:text-white hover:underline break-all block"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}

                <div>
                  <span className="text-zinc-400 text-[10.5px] uppercase font-bold tracking-wider block">
                    Availability
                  </span>
                  <span className="mt-0.5 inline-flex items-center gap-1.5 text-emerald-400 font-semibold text-[11.5px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open for Consulting
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <Link
                    to="/book"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-xs font-bold text-white hover:bg-brand-500 hover:text-black transition-all"
                  >
                    <span>Book Consultation</span>
                    <Icon name="arrow" className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Copyright & Back to Top Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">{personal.name}</strong>. All rights reserved.
          </p>

          <p className="text-center text-zinc-400">
            Built around real business problems — never hype.
          </p>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All Systems Operational
            </span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:border-brand-400/40 hover:bg-white/10 hover:text-white"
            >
              <span>Top</span>
              <Icon name="arrow-up" className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
