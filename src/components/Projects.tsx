import { Link } from "react-router-dom";
import { projects } from "@/data/content";
import { Reveal, SectionHeading, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const featured = projects.find((p) => p.featured) ?? projects[0];
const rest = projects.filter((p) => !p.featured);

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

function PreviewPlaceholder({ icon }: { icon: IconName }) {
  return (
    <div
      role="img"
      aria-label="Project preview image"
      className="flex h-full min-h-[8rem] items-center justify-center rounded-xl border border-dashed border-edge-strong bg-panel"
    >
      <Icon name={icon} className="h-8 w-8 text-faint/60" strokeWidth={1.4} />
    </div>
  );
}

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
                  {featured.status && (
                    <span className="flex items-center gap-1.5 rounded-full border border-gold-accent/30 bg-gold-accent/10 px-3 py-1 text-xs font-medium text-gold-accent">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-accent" />
                      {featured.status}
                    </span>
                  )}
                  <span className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-muted">
                    {featured.type}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-strong sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {featured.desc}
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

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {featured.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-soft"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-edge bg-panel px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to={`/projects/${featured.slug}`}
                    className="btn btn-primary"
                  >
                    View Project
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Preview placeholder */}
              <div className="relative">
                <PreviewPlaceholder icon={featured.icon} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Rest of projects */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 70}>
              <Link
                to={`/projects/${p.slug}`}
                className="card card-hover group flex h-full flex-col p-5 hover:-translate-y-0.5"
              >
                <PreviewPlaceholder icon={p.icon} />

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      accentClasses[p.accent],
                    )}
                  >
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-right text-[11px] font-medium leading-tight text-faint">
                    {p.type}
                  </span>
                </div>

                <h4 className="mt-3 font-display text-lg font-semibold text-strong">
                  {p.name}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>

                {p.role && (
                  <p className="mt-3 border-t border-edge pt-3 text-xs leading-relaxed text-faint">
                    Role: {p.role}
                  </p>
                )}

                <div className="mt-auto flex items-center gap-1.5 pt-3 text-sm font-semibold text-accent-strong">
                  View Details
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </div>
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
