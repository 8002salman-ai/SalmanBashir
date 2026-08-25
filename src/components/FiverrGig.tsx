import { Link } from "react-router-dom";
import { contact } from "@/data/content";
import { fiverrHighlights } from "@/data/gigs";
import { Icon, Reveal } from "@/components/ui";

const gigPoints = fiverrHighlights;

/**
 * Homepage highlight for the Fiverr freelance channel —
 * projects are the strength, so the gig sits right next to the repo strip.
 */
export function FiverrGig() {
  const url = contact.socials.fiverr;
  if (!url) return null;

  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-accent/25 bg-gradient-to-br from-gold-accent/10 via-transparent to-brand-500/10 p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-accent/15 blur-[90px]" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-500/10 blur-[90px]" />
            </div>

            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold-accent/30 bg-bg-soft">
                    <Icon name="fiverr" className="h-4 w-4 text-gold-accent" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-accent">
                    Freelance Services · Live on Fiverr
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                  Hire me for your next project on{" "}
                  <span className="text-gradient-brand">Fiverr</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  The same hands-on work you see across this site — marketplace
                  operations, sourcing coordination, business systems and
                  AI-assisted tools — available as freelance gigs.
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {gigPoints.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-soft"
                    >
                      <Icon
                        name="check"
                        className="h-3.5 w-3.5 shrink-0 text-gold-accent"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col items-stretch gap-3 sm:items-start">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg group"
                >
                  Hire Me on Fiverr
                  <Icon
                    name="external"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <Link
                  to="/fiverr"
                  className="btn btn-secondary btn-lg group"
                >
                  View all gigs
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}