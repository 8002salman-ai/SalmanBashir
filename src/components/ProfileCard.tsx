import { Link } from "react-router-dom";
import { aboutProfile, contact } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function ProfileCard() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-edge bg-panel p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10">
            {/* Photo */}
            <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-transparent to-gold-accent/15 blur-2xl" />
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/profile/salman-bashir.webp"
                />
                <img
                  src="/images/profile/salman-bashir.png"
                  alt="Salman Bashir"
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full rounded-2xl border border-edge-strong object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.015]"
                />
              </picture>
            </div>

            {/* Professional identity */}
            <div className="mt-8 flex flex-col justify-center lg:mt-0">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-accent-strong">
                <Icon name="badge" className="h-3.5 w-3.5" />
                {aboutProfile.badge}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-strong sm:text-4xl">
                {aboutProfile.name}
              </h2>
              <p className="mt-2 text-base font-medium text-accent-strong">
                {aboutProfile.title}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {aboutProfile.identity.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-edge bg-panel-strong px-3 py-1.5 text-xs font-medium text-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                {aboutProfile.intro}
              </p>

              <div className="mt-5 flex items-start gap-2.5 text-sm text-soft">
                <Icon
                  name="location"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                />
                <span>{aboutProfile.location}</span>
              </div>

              {/* Signature projects */}
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                  Selected projects
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {aboutProfile.signatureProjects.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className="group inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel-strong px-3 py-1.5 text-xs font-medium text-soft transition-colors hover:border-brand-500/30 hover:text-strong"
                    >
                      {p.name}
                      <Icon
                        name="arrow"
                        className="h-3 w-3 -translate-x-0.5 text-faint transition-transform group-hover:translate-x-0"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/book" className="btn btn-primary btn-sm">
                  Work with me
                </Link>
                <Link to="/services" className="btn btn-secondary btn-sm">
                  See services
                </Link>
                <a
                  href={`mailto:${contact.email}`}
                  className="btn btn-secondary btn-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
