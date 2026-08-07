import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, CtaCard } from "@/components/ui";
import { skillGroups, type SkillLevel } from "@/data/skillsGroups";
import { projects } from "@/data/content";
import { cn } from "@/utils/cn";

const levelTone: Record<SkillLevel, string> = {
  "Hands-on": "border-brand-500/30 bg-brand-500/10 text-accent-strong",
  Operational: "border-gold-accent/30 bg-gold-accent/10 text-gold-accent",
  Building: "border-edge-strong bg-panel-strong text-soft",
  Learning: "border-edge bg-panel text-muted",
};

export function SkillsPage() {
  return (
    <>
      <Seo
        title="Skills | Salman Bashir — Marketplace, Sourcing, Systems and AI-Assisted Development"
        description="An honest breakdown of skills across marketplace operations, sourcing and product operations, business systems, AI-assisted development and consulting — labelled hands-on, operational, building or learning, not invented percentages."
        path="/skills"
      />
      <BreadcrumbJsonLd items={[{ name: "Skills", path: "/skills" }]} />
      <PageHero
        eyebrow="Skills"
        title={
          <>
            Skills built through{" "}
            <span className="text-gradient-brand">real operational work</span>
          </>
        }
        description="Grouped honestly, with qualitative labels instead of percentage bars: Hands-on experience, Operational use, actively Building, or currently Learning."
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group, i) => {
              const relatedProjects = group.relatedProjects
                .map((slug) => projects.find((p) => p.slug === slug))
                .filter((p): p is NonNullable<typeof p> => Boolean(p));

              return (
                <Reveal key={group.id} delay={i * 60}>
                  <div id={group.id} className="card scroll-mt-24 p-6">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                        <Icon name={group.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-strong">
                          {group.title}
                        </h2>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {group.desc}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium",
                            levelTone[skill.level],
                          )}
                        >
                          {skill.name}
                          <span className="opacity-70">· {skill.level}</span>
                        </li>
                      ))}
                    </ul>

                    {relatedProjects.length > 0 && (
                      <div className="mt-5 border-t border-edge pt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                          Related projects
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {relatedProjects.map((p) => (
                            <Link
                              key={p.slug}
                              to={`/projects/${p.slug}`}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel-strong px-3 py-1.5 text-xs font-semibold text-accent-strong transition-colors hover:border-brand-500/40"
                            >
                              {p.name}
                              <Icon name="arrow" className="h-3 w-3" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaCard
        eyebrow="See it in context"
        title="Want to see how these skills were built?"
        description="Walk through the full journey — from marketplace operations to AI-assisted business systems."
        ctaLabel="Explore My Journey"
        ctaHref="/journey"
      />
    </>
  );
}
