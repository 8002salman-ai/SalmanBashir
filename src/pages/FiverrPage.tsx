import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { contact } from "@/data/content";
import { fiverrGigs as gigs } from "@/data/gigs";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function FiverrPage() {
  const fiverrUrl = contact.socials.fiverr;

  return (
    <>
      <Seo
        title="Freelance Services on Fiverr | Salman Bashir"
        description="Freelance gigs for marketplace operations, profit & COGS dashboards, product sourcing and SOP design — the same hands-on work shown across this site, available on Fiverr."
        path="/fiverr"
      />
      <BreadcrumbJsonLd items={[{ name: "Freelance Services", path: "/fiverr" }]} />
      <PageHero
        eyebrow="Freelance Services"
        title={
          <>
            Hire the work behind the{" "}
            <span className="text-gradient-brand">site on Fiverr</span>
          </>
        }
        description="The projects on this site are the strength — here they become direct gigs. Same hands-on approach, now available to order on Fiverr."
      >
        {fiverrUrl && (
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg group"
            >
              <Icon name="fiverr" className="h-4 w-4" />
              Open My Fiverr Profile
              <Icon name="external" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/contact"
              className="btn btn-secondary btn-lg"
            >
              Or ask me directly
            </Link>
          </div>
        )}
      </PageHero>

      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Current Gig Offers"
              title={
                <>
                  Every gig starts from{" "}
                  <span className="text-gradient-brand">real operations</span>
                </>
              }
              description="Prices are starting points — the final quote depends on scope. Message me on Fiverr and we'll shape the deliverable to what you actually need."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {gigs.map((gig, i) => (
              <Reveal key={gig.title} delay={Math.min(i, 4) * 60}>
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-strong">
                      {gig.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-gold-accent/30 bg-gold-accent/10 px-2.5 py-1 text-xs font-semibold text-gold-accent">
                      from {gig.startsAt}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-faint">
                    {gig.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {gig.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-edge pt-4">
                    {gig.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-soft">
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-brand-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <a
                      href={fiverrUrl || undefined}
                      target={fiverrUrl ? "_blank" : undefined}
                      rel={fiverrUrl ? "noopener noreferrer" : undefined}
                      className="btn btn-primary btn-sm w-full inline-flex justify-center items-center gap-1.5"
                      aria-disabled={!fiverrUrl}
                    >
                      Hire on Fiverr
                      <Icon name="external" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}