import { Link } from "react-router-dom";
import { teamRoles } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function TeamPreview() {
  return (
    <section id="team-preview" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Small Operations Team"
            title="Supported by a Small Operations Team"
            description="Roles only — no names yet. The team grows only when the workload justifies it."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {teamRoles.slice(0, 4).map((r, i) => (
            <Reveal key={r.role} delay={i * 60}>
              <article className="card card-hover flex h-full items-start gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-strong">
                    {r.role}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {r.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted">
            Salman works with a small operations team supporting marketplace,
            product, records, research and coordination work.
          </p>
          <Link
            to="/team"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors hover:text-accent"
          >
            View the team page
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
