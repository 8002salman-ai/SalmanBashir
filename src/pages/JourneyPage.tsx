import { PageHero } from "@/components/PageHero";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Link } from "react-router-dom";
import { personal, values } from "@/data/content";
import { Reveal, Icon, SectionHeading } from "@/components/ui";

export function JourneyPage() {
  return (
    <>
      <Seo
        title="Journey | Salman Bashir — From Marketplace Operations to AI Automation"
        description="An interactive, honest timeline across eight phases — from online operations and marketplace work, through sourcing, business systems and AI-assisted development, to the Hermes AI Agent and consulting."
        path="/journey"
      />
      <BreadcrumbJsonLd items={[{ name: "Journey", path: "/journey" }]} />
      <PageHero
        eyebrow="My Journey"
        title={
          <>
            From online operations to{" "}
            <span className="text-gradient-brand">AI-assisted business systems</span>
          </>
        }
        description="A practical transition, told across eight phases — starting on the operational side of online selling, then applying that understanding to sourcing, business systems and AI-assisted development. Select a phase to see skills, tools, related projects and media."
      />

      <section className="relative pb-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <JourneyTimeline />
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Working principles" title="Values I Work By" align="center" />
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {values.map((v) => (
                <span
                  key={v}
                  className="rounded-lg border border-edge bg-panel px-3 py-1.5 text-xs font-medium text-soft"
                >
                  {v}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel p-8 text-center sm:p-10">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/10 blur-[90px]" />
              </div>
              <Icon
                name="message"
                className="mx-auto h-8 w-8 text-accent"
                strokeWidth={1.5}
              />
              <p className="mx-auto mt-4 max-w-lg font-display text-lg font-semibold leading-snug text-strong">
                {personal.aboutQuote}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link to="/skills" className="btn btn-secondary">
                  View Skills
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link to="/ai-automation" className="btn btn-secondary">
                  AI &amp; Automation
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link to="/book" className="btn btn-primary">
                  Work With Me
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
