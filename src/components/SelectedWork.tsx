import { Link } from "react-router-dom";
import { caseStudies, type CaseStudy } from "@/data/projects";
import { Reveal, SectionHeading, Icon } from "@/components/ui";
import { cn } from "@/utils/cn";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";

const selectedSlugs = [
  "embani-erp",
  "spotaware",
  "himalayan-koh",
  "multi-marketplace-operations",
];

const accentClasses: Record<CaseStudy["accent"], string> = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

export function SelectedWork() {
  const selected = selectedSlugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is CaseStudy => Boolean(c));

  if (selected.length === 0) return null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Case studies from{" "}
                <span className="text-gradient-brand">real operations</span>
              </>
            }
            description="A small set of systems and workflows I plan, design and verify — each documented with honest status and evidence."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {selected.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 70}>
              <Link
                to={`/projects/${c.slug}`}
                className="card card-hover group flex h-full flex-col p-5 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                      accentClasses[c.accent],
                    )}
                  >
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <ProjectStatusBadge status={c.status} />
                </div>

                <h4 className="mt-4 font-display text-lg font-semibold text-strong">
                  {c.title}
                </h4>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-faint">
                  {c.category}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                  {c.summary}
                </p>

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

        <Reveal className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
          >
            View All Projects
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
