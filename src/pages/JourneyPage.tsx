import { PageHero } from "@/components/PageHero";
import { JourneySection } from "@/components/Journey";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";
import { personal } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function JourneyPage() {
  return (
    <>
      <Seo
        title="Journey | Salman Bashir — From Marketplace Operations to Business Systems"
        description="A practical transition from hands-on marketplace operations to business systems, ERP workflows and AI-assisted product development — described honestly in broad phases."
        path="/journey"
      />
      <PageHero
        eyebrow="My Journey"
        title={
          <>
            From online operations to{" "}
            <span className="text-gradient-brand">building business systems</span>
          </>
        }
        description="A practical transition — starting on the operational side of online selling, then applying that understanding to design, automate and build systems that actually work."
      />

      <JourneySection />

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
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                >
                  View Resume
                  <Icon name="file" className="h-4 w-4" />
                </Link>
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-3 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
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
