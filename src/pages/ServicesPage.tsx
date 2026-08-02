import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/components/Services";
import { HowIWorkSection } from "@/components/HowIWork";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";
import { Reveal, Icon } from "@/components/ui";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Salman Bashir — E-commerce Operations & Automation Consulting"
        description="E-commerce operations reviews, profit and COGS dashboards, marketplace workflow automation, ERP prototyping, integration planning and SOP design — built around how your business actually runs."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Services built around{" "}
            <span className="text-gradient-brand">practical results</span>
          </>
        }
        description="From marketplace operations reviews to profit dashboards and ERP prototyping — every service is built around the way your business actually runs, not around generic templates."
      />
      <ServicesSection />
      <HowIWorkSection />
      <section className="relative pb-20 pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-edge bg-panel p-8 text-center sm:p-10">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/10 blur-[90px]" />
              </div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                Prefer to talk first?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
                Book a consultation call or send a message — I'll give you an
                honest read on where to focus first.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
        </div>
      </section>
    </>
  );
}
