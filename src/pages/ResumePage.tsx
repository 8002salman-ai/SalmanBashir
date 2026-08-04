import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { resume, contact } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function ResumePage() {
  return (
    <>
      <Seo
        title="Resume | Salman Bashir — E-commerce Operations & Business Systems"
        description="A detailed resume is being prepared and will be available here. In the meantime, request a tailored overview of relevant work by email or during a call."
        path="/resume"
      />
    <BreadcrumbJsonLd items={[{ name: "Resume", path: "/resume" }]} />
      <PageHero
        eyebrow="Resume"
        title={
          <>
            A resume built from{" "}
            <span className="text-gradient-brand">real work</span>
          </>
        }
        description="The full resume is being prepared. Until it's ready, you can see the honest professional phases and skills below, or request a tailored overview directly."
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Coming soon card */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-8 text-center sm:p-12">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-40%] h-64 w-96 -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
              </div>
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                <Icon name="file" className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                Resume Coming Soon
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                {resume.comingSoon}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Resume / work overview request",
                  )}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  Request My Resume
                  <Icon name="mail2" className="h-4 w-4" />
                </a>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-3 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
                  Book a Call
                  <Icon name="calendar" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Honest phases preview */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-strong">
                  Professional Phases
                </h2>
                <p className="mt-1 text-xs text-faint">
                  Broad phases rather than exact dates — described honestly.
                </p>
                <ol className="mt-6 space-y-7 border-l border-edge pl-6">
                  {resume.phases.map((phase) => (
                    <li key={phase.title} className="relative">
                      <span className="absolute -left-6 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 ring-4 ring-brand-500/15" />
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent-strong">
                          {phase.period}
                        </span>
                        <span className="text-xs text-faint">{phase.role}</span>
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-strong">
                        {phase.title}
                      </h3>
                      <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                        {phase.points.map((pt) => (
                          <li
                            key={pt}
                            className="flex items-start gap-2 text-sm text-muted"
                          >
                            <Icon
                              name="check"
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                              strokeWidth={2.2}
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-strong">
                  Skills
                </h2>
                <div className="mt-5 space-y-5">
                  {resume.skills.map((cat) => (
                    <div key={cat.category}>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
                        {cat.category}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-edge bg-panel-strong px-2 py-1 text-[11px] font-medium text-soft"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
