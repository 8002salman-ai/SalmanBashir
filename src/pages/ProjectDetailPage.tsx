import { Link, useParams } from "react-router-dom";
import { projects } from "@/data/content";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

function ScreenshotPlaceholder({ icon, name }: { icon: IconName; name: string }) {
  return (
    <div
      role="img"
      aria-label={`${name} screenshots coming soon`}
      className="flex h-full min-h-[14rem] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-edge-strong bg-panel p-6 text-center"
    >
      <Icon name={icon} className="h-8 w-8 text-faint" />
      <p className="font-display text-base font-semibold text-strong">
        Project preview coming soon
      </p>
      <p className="max-w-xs text-xs leading-relaxed text-faint">
        Real screenshots will appear here once available. No simulated or fake
        software images are shown.
      </p>
    </div>
  );
}

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
      <BreadcrumbJsonLd
        items={[
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ]}
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
            {/* Left column */}
            <Reveal>
              <div className="space-y-5">
                <DetailCard title="Overview">
                  <p>{project.overview ?? project.desc}</p>
                </DetailCard>

                {project.businessProblem && (
                  <DetailCard title="Business Problem">
                    <p>{project.businessProblem}</p>
                  </DetailCard>
                )}

                {project.solution && (
                  <DetailCard title="Solution">
                    <p>{project.solution}</p>
                  </DetailCard>
                )}

                {project.caseStudy && (
                  <DetailCard title="Case Study">
                    <p>{project.caseStudy}</p>
                  </DetailCard>
                )}

                {project.role && (
                  <DetailCard title="Salman's Role">
                    <p>{project.role}</p>
                  </DetailCard>
                )}
              </div>
            </Reveal>

            {/* Right column */}
            <Reveal delay={80}>
              <div className="space-y-5">
                <DetailCard title="Technology">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-edge bg-panel-strong px-2.5 py-1 text-xs font-medium text-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </DetailCard>

                <DetailCard title="Capabilities">
                  <ul className="space-y-3">
                    {(project.capabilities ?? []).map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-soft">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </DetailCard>

                <DetailCard title="What I Focused On">
                  <ul className="space-y-3">
                    {(project.focusPoints ?? []).map((fp) => (
                      <li key={fp} className="flex items-start gap-3 text-sm text-soft">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {fp}
                      </li>
                    ))}
                  </ul>
                </DetailCard>

                <DetailCard title="Honest Status">
                  <div className="flex items-center gap-2 text-sm text-soft">
                    <Icon name="shield" className="h-4 w-4 shrink-0 text-accent" />
                    {project.status ??
                      "Described honestly — no invented users, customers or performance figures."}
                  </div>
                </DetailCard>
              </div>
            </Reveal>
          </div>

          {/* Screenshots */}
          <Reveal className="mt-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-strong">
                Screenshots
              </h2>
              <p className="mt-1 text-sm text-muted">
                Real screenshots only. Until they're available, this preview is
                shown instead.
              </p>
              <div className="mt-4">
                <ScreenshotPlaceholder icon={icon} name={project.name} />
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-8">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h2 className="font-display text-lg font-semibold text-strong">
                  Want something like this for your business?
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Tell me where your operations are today and we'll find the
                  right starting point.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  Book a Consultation
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-3 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Next project */}
          <Reveal className="mt-8">
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

function DetailCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-strong">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-muted">{children}</div>
    </div>
  );
}
