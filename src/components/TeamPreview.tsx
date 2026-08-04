import { Link } from "react-router-dom";
import { teamRoles, personal } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function TeamPreview() {
  return (
    <section id="team-preview" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Small Operations Team"
            title="A lean team, built around real work"
            description="Roles are listed with placeholders until the team is finalized. No invented names, no inflated headcount."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teamRoles.map((r, i) => (
            <Reveal key={r.role} delay={i * 60}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-edge bg-panel p-5">
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
                  {r.placeholder && (
                    <span className="mt-2 inline-block rounded-full border border-edge bg-panel-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-faint">
                      Role placeholder
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted">
            {personal.name} leads the consulting practice directly.
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
