import { Link } from "react-router-dom";
import { personal, stats, contact, profileCard, ceoNote } from "@/data/content";
import { Icon, type IconName } from "@/components/ui";
import { IntroVideoLightbox } from "@/components/IntroVideoLightbox";

const profileFacts: {
  icon: IconName;
  label: string;
  value: string;
}[] = [
  { icon: "cpu", label: "Current focus", value: profileCard.currentFocus },
  { icon: "calendar", label: "Availability", value: profileCard.availability },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute right-[5%] top-[20%] h-[300px] w-[300px] rounded-full bg-gold-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3 py-1 text-[11px] font-medium text-soft backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              {personal.heroBadge}
            </div>

            <p className="mt-5 font-display text-base font-extrabold uppercase tracking-[0.14em] text-accent-strong sm:text-lg">
              {personal.name}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-faint">
              {ceoNote.title} · {personal.shortTitle}
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-strong sm:text-5xl lg:text-[3rem]">
              <span className="text-gradient">{personal.heroHeading}</span>
            </h1>

            <p className="mt-3 text-base font-medium text-soft sm:text-lg">
              {personal.tagline}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {personal.heroSub}
            </p>

            <div className="mt-4 max-w-xl animate-fade-up rounded-xl border border-edge bg-panel/60 px-4 py-3 shadow-lg shadow-brand-500/5 backdrop-blur-sm [animation-delay:240ms]">
              <p className="text-sm leading-relaxed text-soft">
                <span className="font-semibold text-strong">A note from {personal.name}:</span>{" "}
                {ceoNote.message}
              </p>
            </div>

            <p className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
              <Icon
                name="badge"
                className="h-3.5 w-3.5 shrink-0 text-accent"
                strokeWidth={1.8}
              />
              {personal.heroCredibility}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/book" className="btn btn-primary group">
                Meet up
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Services
              </Link>
              <Link to="/training" className="btn btn-ghost">
                <Icon name="book" className="h-4 w-4" />
                Training
              </Link>
              <IntroVideoLightbox />
            </div>

            {/* Trust labels — qualitative, never invented numbers */}
            <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge bg-panel-strong sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg/40 px-3.5 py-3">
                  <dt className="font-display text-sm font-semibold text-strong">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-faint">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: profile card */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/15 via-transparent to-gold-accent/15 blur-2xl" />

              <div className="overflow-hidden rounded-2xl border border-edge-strong bg-bg-soft/80 shadow-xl backdrop-blur-xl">
                {/* header */}
                <div className="relative bg-gradient-to-br from-brand-500/10 via-transparent to-gold-accent/[0.08] p-5">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-edge-strong bg-panel font-display text-xl font-bold text-accent-strong"
                      role="img"
                      aria-label={`${personal.name} monogram`}
                    >
                      {personal.monogram}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-lg font-semibold text-strong">
                        {personal.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-snug text-muted">
                        {personal.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* body */}
                <div className="space-y-2.5 border-t border-edge p-5">
                  <p className="rounded-xl border border-edge bg-panel px-3.5 py-2.5 text-xs leading-relaxed text-muted">
                    {profileCard.message}
                  </p>

                  {profileFacts.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-panel text-accent-strong">
                        <Icon name={f.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-faint">
                          {f.label}
                        </p>
                        <p className="truncate text-sm font-medium text-strong">
                          {f.value}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-2 pt-1.5">
                    <a
                      href={`mailto:${contact.email}`}
                      className="btn btn-primary btn-sm"
                    >
                      <Icon name="mail2" className="h-4 w-4" />
                      Email Me
                    </a>
                    {contact.socials.github && (
                      <a
                        href={contact.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        GitHub
                        <Icon name="github" className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
