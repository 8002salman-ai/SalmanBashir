import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/content";
import { Seo } from "@/components/Seo";
import { Reveal, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="relative pb-20 pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-xl rounded-3xl border border-edge bg-panel p-10 text-center">
            <h1 className="font-display text-3xl font-semibold text-strong">
              Project not found
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The project you're looking for doesn't exist or has moved.
            </p>
            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-brand-400"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const icon = project.icon as IconName;

  return (
    <>
      <Seo
        title={`${project.name} | Salman Bashir — Projects`}
        description={project.desc}
        path={`/projects/${project.slug}`}
      />
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
          <div className="absolute left-1/2 top-[-30%] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-[130px]" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-strong"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl border",
                accentClasses[project.accent],
              )}
            >
              <Icon name={icon} className="h-6 w-6" />
            </span>
            {project.status && (
              <span className="flex items-center gap-1.5 rounded-full border border-gold-accent/30 bg-gold-accent/10 px-3 py-1 text-xs font-medium text-gold-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-accent" />
                {project.status}
              </span>
            )}
            <span className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-muted">
              {project.type}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-strong sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-edge bg-panel px-2.5 py-1 text-xs font-medium text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Overview */}
            <Reveal>
              <div className="space-y-5">
                <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-strong">
                    Overview
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {project.overview ?? project.desc}
                  </p>
                </div>

                {project.role && (
                  <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                    <h2 className="font-display text-xl font-semibold text-strong">
                      My Role
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-soft sm:text-base">
                      {project.role}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Focus + highlights */}
            <Reveal delay={80}>
              <div className="space-y-5">
                <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-strong">
                    What I Focused On
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {(project.focusPoints ?? []).map((fp) => (
                      <li
                        key={fp}
                        className="flex items-start gap-3 text-sm text-soft"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {fp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-strong">
                    Highlights
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-soft"
                      >
                        <Icon
                          name="badge"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={1.6}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Next project */}
          <Reveal className="mt-10">
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center justify-between gap-4 rounded-3xl border border-edge bg-panel p-6 transition-colors hover:border-brand-500/30 hover:bg-panel-strong"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                  Next project
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-strong">
                  {next.name}
                </p>
              </div>
              <Icon
                name="arrow"
                className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
