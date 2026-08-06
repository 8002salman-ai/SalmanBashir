import { Link, useParams } from "react-router-dom";
import { getCaseStudy, getRelated } from "@/data/projects";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, SectionHeading, CtaCard } from "@/components/ui";
import { cn } from "@/utils/cn";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { RoleSummary } from "@/components/projects/RoleSummary";
import { ProcessTimeline } from "@/components/projects/ProcessTimeline";
import { ToolsUsed } from "@/components/projects/ToolsUsed";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProofOfWork } from "@/components/projects/ProofOfWork";
import { ResultSummary } from "@/components/projects/ResultSummary";

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-12">
          <SectionHeading
            eyebrow=""
            title={title}
            className="lg:sticky lg:top-24 lg:self-start"
          />
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  if (!study) {
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
            <Link to="/projects" className="btn btn-primary mt-6">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const related = getRelated(study.slug);

  return (
    <>
      <Seo
        title={`${study.title} | Salman Bashir — Projects`}
        description={study.summary}
        path={`/projects/${study.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Projects", path: "/projects" },
          { name: study.title, path: `/projects/${study.slug}` },
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
                accentClasses[study.accent],
              )}
            >
              <Icon name={study.icon} className="h-6 w-6" />
            </span>
            <ProjectStatusBadge status={study.status} />
            <span className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-muted">
              {study.category}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-strong sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {study.summary}
          </p>
        </div>
      </section>

      {/* Status / category */}
      {study.areas && study.areas.length > 0 && (
        <Section title="Status by Area">
          <div className="grid gap-3 sm:grid-cols-2">
            {study.areas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-edge bg-panel p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-strong">
                    {area.title}
                  </p>
                  <ProjectStatusBadge status={area.status} />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Overview */}
      <Section title="Overview">
        <p className="max-w-3xl text-base leading-relaxed text-soft sm:text-lg">
          {study.overview}
        </p>
      </Section>

      {/* Business problem */}
      <Section title="Business Problem">
        <div className="rounded-2xl border border-edge bg-panel p-5 sm:p-6">
          <p className="text-base leading-relaxed text-soft">
            {study.businessProblem}
          </p>
        </div>
      </Section>

      {/* Role */}
      <Section title="Role">
        <RoleSummary role={study.role} roleAreas={study.roleAreas} />
      </Section>

      {/* Process */}
      <Section title="Process">
        <ProcessTimeline steps={study.process} />
      </Section>

      {/* Features */}
      <Section title="Features">
        <div className="grid gap-3 sm:grid-cols-2">
          {study.features.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 rounded-2xl border border-edge bg-panel p-4 text-sm leading-relaxed text-soft"
            >
              <Icon
                name="check"
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                strokeWidth={2.2}
              />
              {f}
            </div>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Tools">
        <ToolsUsed tools={study.tools} />
      </Section>

      {/* Media */}
      {study.media.length > 0 && (
        <Section title="Screenshots & Media">
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Real screenshots only — no simulated images. Placeholders mark where
            verified media will appear.
          </p>
          <ProjectGallery media={study.media} />
        </Section>
      )}

      {/* Proof / evidence */}
      <Section title="Evidence">
        <ProofOfWork evidence={study.evidence} />
      </Section>

      {/* Outcomes / status */}
      <Section title="Outcomes">
        <ResultSummary outcomes={study.outcomes} />
      </Section>

      {/* Limitations / disclosure */}
      <Section title="Disclosure">
        <div className="rounded-2xl border border-edge-strong bg-panel p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Icon
              name="shield"
              className="mt-0.5 h-5 w-5 shrink-0 text-accent"
            />
            <p className="text-sm leading-relaxed text-muted">
              {study.limitations}
            </p>
          </div>
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative pb-8 pt-16 sm:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="" title="Related Projects" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.slug} delay={80}>
                  <Link
                    to={`/projects/${r.slug}`}
                    className="card-hover card flex h-full flex-col p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
                          accentClasses[r.accent],
                        )}
                      >
                        <Icon name={r.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-strong">
                          {r.title}
                        </p>
                        <p className="text-xs text-muted">{r.category}</p>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                      {r.summary}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent-strong">
                      View case study
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaCard
        eyebrow="Let's talk"
        title="Want something like this for your business?"
        description="Tell me where your operations are today and we'll find the right starting point."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
