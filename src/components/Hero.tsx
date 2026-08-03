import { Link } from "react-router-dom";
import { personal, stats, trustItems, contact } from "@/data/content";
import { Icon } from "@/components/ui";

const profileFacts: {
  icon: "location" | "globe" | "calendar";
  label: string;
  value: string;
}[] = [
  { icon: "location", label: "Based in", value: personal.location },
  {
    icon: "globe",
    label: "Working with",
    value: personal.markets.slice(0, 4).join(" · "),
  },
  { icon: "calendar", label: "Availability", value: "Remote · International" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[5%] top-[20%] h-[320px] w-[320px] rounded-full bg-gold-accent/10 blur-[120px]" />
        <div className="absolute left-[2%] top-[40%] h-[280px] w-[280px] rounded-full bg-brand-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3.5 py-1.5 text-xs font-medium text-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {personal.heroBadge}
            </div>

            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-strong sm:text-5xl lg:text-[3rem]">
              <span className="text-gradient">{personal.heroHeading}</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {personal.heroSub}
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-soft">
              <Icon
                name="badge"
                className="h-4 w-4 shrink-0 text-accent"
                strokeWidth={1.8}
              />
              {personal.heroCredibility}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                View My Work
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-panel px-4 py-2.5 text-sm font-semibold text-strong backdrop-blur transition-all hover:border-brand-500/40 hover:bg-panel-strong"
              >
                Book a Consultation
              </Link>
              <Link
                to="/training"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-accent-strong transition-colors hover:text-accent"
              >
                <Icon name="book" className="h-4 w-4" />
                Explore Training
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge bg-panel-strong sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg/40 p-3">
                  <dt className="font-display text-xl font-semibold text-strong">
                    {s.value}
                  </dt>
                  <dd className="mt-0.5 text-xs leading-snug text-faint">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: operator profile card */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-gold-accent/20 blur-2xl" />

              <div className="animate-float overflow-hidden rounded-2xl border border-edge-strong bg-bg-soft/80 shadow-2xl backdrop-blur-xl">
                {/* header */}
                <div className="relative bg-gradient-to-br from-brand-500/15 via-transparent to-gold-accent/10 p-5">
                  <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-brand-500/30">
                      <img
                        src="/branding/salman-urdu-logo-dark.svg"
                        alt=""
                        className="logo-theme-dark h-full w-full"
                      />
                      <img
                        src="/branding/salman-urdu-logo-light.svg"
                        alt=""
                        className="logo-theme-light h-full w-full"
                      />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-strong">
                        {personal.name}
                      </p>
                      <p className="text-xs text-muted">{personal.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {personal.supportingIdentity}
                  </p>
                </div>

                {/* body */}
                <div className="space-y-2.5 border-t border-edge p-5">
                  {profileFacts.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-panel text-accent-strong">
                        <Icon name={f.icon} className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-faint">
                          {f.label}
                        </p>
                        <p className="text-sm font-medium text-strong">
                          {f.value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-brand-400"
                    >
                      <Icon name="mail2" className="h-4 w-4" />
                      Email Me
                    </a>
                    {contact.socials.github && (
                      <a
                        href={contact.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-panel px-4 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40"
                      >
                        GitHub
                        <Icon name="github" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* floating chip */}
              <div className="absolute -left-6 top-1/3 hidden animate-float [animation-delay:1.5s] rounded-xl border border-edge bg-bg-soft/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] uppercase tracking-wide text-faint">
                  Currently Building
                </p>
                <p className="text-xs font-semibold text-accent-strong">
                  Embani ERP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 border-y border-edge py-4">
          <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-faint">
            A combination most consultants don't bring
          </p>
          <div className="mask-fade-edges overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-8">
              {[...trustItems, ...trustItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-muted"
                >
                  <Icon
                    name="badge"
                    className="h-4 w-4 shrink-0 text-brand-500/70"
                    strokeWidth={1.8}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
