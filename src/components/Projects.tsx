import { Link } from "react-router-dom";
import { caseStudies } from "@/data/projects";
import { Reveal, SectionHeading, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { EvidencePlaceholder } from "@/components/projects/EvidencePlaceholder";

const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];
const rest = caseStudies.filter((c) => c !== featured);

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

export function ProjectsSection({ limit }: { limit?: number }) {
  const visible = limit ? rest.slice(0, limit) : rest;
  return (
    <section id="projects" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Systems built around{" "}
                <span className="text-gradient-brand">real business problems</span>
              </>
            }
            description="A focused set of platforms, workflows and tools I've built from the operator's side. Every project is described honestly — no invented customers, users or performance numbers."
          />
        </Reveal>

        {/* Featured project */}
        <Reveal className="mt-10">
          <article className="group relative overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-accent/10 blur-[100px]" />
            </div>

            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-accent-strong">
                    Featured Project
                  </span>
                  <ProjectStatusBadge status={featured.status} />
                  <span className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-muted">
                    {featured.category}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-strong sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {featured.summary}
                </p>

                {featured.role && (
                  <div className="mt-4 rounded-xl border border-edge bg-panel p-3.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                      My Role
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-soft">
                      {featured.role}
                    </p>
                  </div>
                )}

                {featured.areas && (
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                      Key Areas
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {featured.areas.slice(0, 4).map((a) => (
                        <li
                          key={a.title}
                          className="rounded-lg border border-edge bg-panel px-2.5 py-1 text-xs font-medium text-soft"
                        >
                          {a.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <Link
                    to={`/projects/${featured.slug}`}
                    className="btn btn-primary"
                  >
                    View Case Study
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Preview placeholder */}
              <div className="relative">
                <EvidencePlaceholder label={`${featured.title} preview`} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Rest of projects */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 70}>
              <Link
                to={`/projects/${c.slug}`}
                className="card card-hover group flex h-full flex-col p-5 hover:-translate-y-0.5"
              >
                <EvidencePlaceholder
                  compact
                  label={`${c.title} preview`}
                  className="rounded-xl"
                />

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      accentClasses[c.accent],
                    )}
                  >
                    <Icon name={c.icon as IconName} className="h-5 w-5" />
                  </span>
                  <span className="text-right text-[11px] font-medium leading-tight text-faint">
                    {c.category}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-semibold text-strong">
                  {c.title}
                </h4>

                <div className="mt-2">
                  <ProjectStatusBadge status={c.status} />
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.summary}
                </p>

                {c.areas && (
                  <p className="mt-3 border-t border-edge pt-3 text-xs leading-relaxed text-faint">
                    Key areas:{" "}
                    {c.areas
                      .slice(0, 3)
                      .map((a) => a.title)
                      .join(", ")}
                  </p>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-accent-strong">
                  View Case Study
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {limit && rest.length > limit && (
          <Reveal className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
            >
              View all projects
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
