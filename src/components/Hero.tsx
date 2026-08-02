import { personal, stats, trustItems, contact } from "@/data/content";
import { Icon } from "@/components/ui";

const profileFacts: { icon: "location" | "globe" | "calendar"; label: string; value: string }[] = [
  { icon: "location", label: "Based in", value: personal.location },
  { icon: "globe", label: "Working with", value: personal.markets.slice(0, 4).join(" · ") },
  { icon: "calendar", label: "Availability", value: "Remote · International" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute right-[5%] top-[20%] h-[320px] w-[320px] rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute left-[2%] top-[40%] h-[280px] w-[280px] rounded-full bg-brand-400/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {personal.heroBadge}
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
              <span className="text-gradient">{personal.heroHeading}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {personal.heroSub}
            </p>

            <p className="mt-5 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-300">
              <Icon
                name="badge"
                className="h-4 w-4 shrink-0 text-brand-400"
                strokeWidth={1.8}
              />
              {personal.heroCredibility}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                View My Work
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/30 hover:bg-white/[0.06]"
              >
                Work With Me
              </a>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink-950/40 p-4">
                  <dt className="font-display text-2xl font-semibold text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-zinc-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: operator profile card */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-transparent to-gold-500/20 blur-2xl" />

              <div className="animate-float overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-2xl backdrop-blur-xl">
                {/* header */}
                <div className="relative bg-gradient-to-br from-brand-500/15 via-transparent to-gold-500/10 p-6">
                  <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 font-display text-lg font-bold text-ink-950 shadow-lg shadow-brand-500/30">
                      {personal.monogram}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        {personal.name}
                      </p>
                      <p className="text-xs text-zinc-400">{personal.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                    {personal.tagline}
                  </p>
                </div>

                {/* body */}
                <div className="space-y-3 border-t border-white/[0.06] p-6">
                  {profileFacts.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-300">
                        <Icon name={f.icon} className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                          {f.label}
                        </p>
                        <p className="text-sm font-medium text-white">
                          {f.value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-300"
                    >
                      <Icon name="mail2" className="h-4 w-4" />
                      Email Me
                    </a>
                    {contact.github && (
                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30"
                      >
                        GitHub
                        <Icon name="external" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* floating chip */}
              <div className="absolute -left-6 top-1/3 hidden animate-float [animation-delay:1.5s] rounded-xl border border-white/10 bg-ink-900/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
                <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                  Currently Building
                </p>
                <p className="text-xs font-semibold text-brand-300">
                  Embani ERP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 border-y border-white/[0.06] py-5">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-600">
            A combination most consultants don't bring
          </p>
          <div className="mask-fade-edges overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10">
              {[...trustItems, ...trustItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-zinc-400"
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
