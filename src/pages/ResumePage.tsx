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
        description="Professional overview: marketplace operations, sourcing, business systems, tools and project highlights — described honestly, no invented metrics."
        path="/resume"
      />
    <BreadcrumbJsonLd items={[{ name: "Resume", path: "/resume" }]} />
      <PageHero
        eyebrow="Resume"
        title={
          <>
            A professional overview built from{" "}
            <span className="text-gradient-brand">real work</span>
          </>
        }
        description="Summary, capabilities, experience and tools — described honestly. A downloadable version will be added in a future phase."
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Summary */}
          <Reveal>
            <div className="rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name="briefcase" className="h-5 w-5" />
                </span>
                <h2 className="font-display text-xl font-semibold text-strong">
                  Summary
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {resume.summary}
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Core capabilities */}
            <Reveal>
              <OverviewCard
                title="Core Capabilities"
                icon="bolt"
                items={resume.coreCapabilities}
              />
            </Reveal>

            {/* Project highlights */}
            <Reveal delay={60}>
              <OverviewCard
                title="Project Highlights"
                icon="star"
                items={resume.projectHighlights}
              />
            </Reveal>

            {/* Marketplace experience */}
            <Reveal>
              <OverviewCard
                title="Marketplace Experience"
                icon="cart"
                items={resume.marketplaceExperience}
              />
            </Reveal>

            {/* Sourcing */}
            <Reveal delay={60}>
              <OverviewCard
                title="Sourcing and Coordination"
                icon="box"
                items={resume.sourcing}
              />
            </Reveal>

            {/* Business systems */}
            <Reveal>
              <OverviewCard
                title="Business Systems"
                icon="cpu"
                items={resume.businessSystems}
              />
            </Reveal>

            {/* Tools */}
            <Reveal delay={60}>
              <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name="settings" className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-strong">
                    Tools and Platforms
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {resume.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-edge bg-panel-strong px-2 py-1 text-[11px] font-medium text-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Remote availability */}
          <Reveal className="mt-6">
            <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name="globe" className="h-5 w-5" />
                </span>
                <h2 className="font-display text-xl font-semibold text-strong">
                  Remote Availability
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                {resume.remoteAvailability}
              </p>
            </div>
          </Reveal>

          {/* Note + CTA */}
          <Reveal className="mt-6">
            <div className="rounded-3xl border border-edge bg-panel p-6 text-center sm:p-8">
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted">
                {resume.note}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Resume / work overview request",
                  )}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  Request a Tailored Overview
                  <Icon name="mail2" className="h-4 w-4" />
                </a>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel-strong px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
                  Book a Call
                  <Icon name="calendar" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function OverviewCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: "bolt" | "star" | "cart" | "box" | "cpu";
  items: string[];
}) {
  return (
    <div className="h-full rounded-3xl border border-edge bg-panel p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-semibold text-strong">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
            <Icon
              name="check"
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              strokeWidth={2.2}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
