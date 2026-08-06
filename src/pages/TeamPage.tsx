import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { teamRoles } from "@/data/content";
import { Reveal, CtaCard, Icon } from "@/components/ui";

export function TeamPage() {
  return (
    <>
      <Seo
        title="Team | Salman Bashir"
        description="A small operations team built around real work. Roles are listed without names until the team is finalized."
        path="/team"
      />
      <BreadcrumbJsonLd items={[{ name: "Team", path: "/team" }]} />
      <PageHero
        eyebrow="Small Operations Team"
        title={
          <>
            Supported by a{" "}
            <span className="text-gradient-brand">Small Operations Team</span>
          </>
        }
        description="Roles only — no names yet. The team grows only when the workload justifies it."
      />

      <section className="relative pb-20 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {teamRoles.map((r, i) => (
              <Reveal key={r.role} delay={i * 60}>
                <article className="card card-hover flex h-full items-start gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name="users" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-strong">
                      {r.role}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {r.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-edge bg-panel p-6 text-center">
              <p className="text-sm leading-relaxed text-muted">
                The team grows only when the workload justifies it. Until then,
                work is kept honest, focused and personal — that is the point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaCard
        eyebrow="Work with the team"
        title="Interested in a project?"
        description="Start with a conversation about your operations and what needs to change."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
