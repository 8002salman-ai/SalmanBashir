import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { teamRoles } from "@/data/content";
import { Reveal, CtaCard, Icon, type IconName } from "@/components/ui";

const howTeamWorks: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "target",
    title: "Salman leads the decisions",
    desc: "Strategy, client communication, and system / workflow decisions stay with Salman.",
  },
  {
    icon: "users",
    title: "The team supports execution",
    desc: "Operational and execution tasks are handled by the support roles below.",
  },
  {
    icon: "settings",
    title: "Coordinated per project",
    desc: "Work is coordinated based on each project's requirements — not a fixed roster.",
  },
];

export function TeamPage() {
  return (
    <>
      <Seo
        title="Team | Salman Bashir"
        description="Salman works with a small operations team supporting marketplace, product, records, research and coordination work. Roles are listed without names until the team is finalized."
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
        description="Salman works with a small operations team supporting marketplace, product, records, research and coordination work."
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

          <Reveal className="mt-10">
            <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-strong">
                How the team works
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {howTeamWorks.map((w, i) => (
                  <Reveal key={w.title} delay={i * 70}>
                    <div className="flex h-full flex-col rounded-2xl border border-edge bg-panel-strong p-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                        <Icon name={w.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3.5 font-display text-sm font-semibold text-strong">
                        {w.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {w.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8">
            <div className="rounded-2xl border border-edge bg-panel p-6 text-center">
              <p className="text-sm leading-relaxed text-muted">
                This is a small, role-based team — not a large agency. No
                employee names, numbers or locations are published. The team
                grows only when the workload justifies it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaCard
        eyebrow="Work with the team"
        title="Work With Salman & Team"
        description="Share your requirement — marketplace support, sourcing & buying, or a business system — and I'll review it personally."
        ctaLabel="Start a Business Inquiry"
        ctaHref="/contact"
      />
    </>
  );
}
