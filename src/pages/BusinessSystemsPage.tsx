import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { businessSystems, projects } from "@/data/content";
import { Reveal, SectionHeading, CtaCard, Icon } from "@/components/ui";

export function BusinessSystemsPage() {
  return (
    <>
      <Seo
        title="Business Systems and Automation | Salman Bashir"
        description="Dashboards, internal tools and ERP prototypes planned from the operator's side and built with AI-assisted implementation — Supabase, Vercel, GitHub and Google Sheets."
        path="/business-systems"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Business Systems", path: "/business-systems" }]}
      />
      <PageHero
        eyebrow="Business Systems and Automation"
        title={
          <>
            Systems planned from the{" "}
            <span className="text-gradient-brand">operator's side</span>
          </>
        }
        description={businessSystems.summary}
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Role */}
            <Reveal>
              <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-strong">
                  What I bring to a build
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Practical business systems need the operational logic right
                  first. This is where I focus.
                </p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {businessSystems.role.map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-2.5 rounded-xl border border-edge bg-panel-strong px-3.5 py-2.5"
                    >
                      <Icon
                        name="check"
                        className="h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      <span className="text-sm text-soft">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                    Built with
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {businessSystems.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-edge bg-panel px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Examples */}
            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-strong">
                  Examples of this work
                </h2>
                <ul className="mt-5 space-y-3">
                  {businessSystems.examples.map((e) => (
                    <li key={e} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                        <Icon name="cpu" className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-strong">
                        {e}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-faint">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {businessSystems.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Related projects"
              title={
                <>
                  Systems built around{" "}
                  <span className="text-gradient-brand">real problems</span>
                </>
              }
              description="The projects behind this work — described honestly, without invented metrics."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) =>
                ["embani-erp", "spotaware", "google-sheets-sales-workspace"].includes(
                  p.slug,
                ),
              )
              .map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-colors hover:border-brand-500/40 hover:bg-panel-strong"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-strong group-hover:text-accent-strong">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-faint">
                      {p.type}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      <CtaCard
        eyebrow="Business systems"
        title="Need a dashboard, internal tool or ERP prototype?"
        description="Tell me how your operations actually run and we'll plan the system around it."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
