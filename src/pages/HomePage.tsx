import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/Services";
import { ProjectsSection } from "@/components/Projects";
import { HowIWorkSection } from "@/components/HowIWork";
import { JourneySection } from "@/components/Journey";
import { CredibilitySection } from "@/components/Credibility";
import { StackSection } from "@/components/Stack";
import { ContactSection } from "@/components/Contact";
import { Seo } from "@/components/Seo";
import { Reveal, Icon } from "@/components/ui";

function BookCta() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-brand-500/15 via-transparent to-gold-accent/10 p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-[90px]" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold-accent/10 blur-[90px]" />
            </div>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                  Not sure where to start?
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Tell me where your operations are today and what you want to
                  change. A short conversation is usually enough to see whether
                  I can help.
                </p>
              </div>
              <Link
                to="/book"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Book a Consultation
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Seo
        title="Salman Bashir | E-commerce Operations & Business Automation Consultant"
        description="E-commerce operations and business automation consultant. I help online sellers organize marketplace operations, understand real profit, improve workflows and turn scattered processes into clear, practical systems."
      />
      <Hero />
      <ServicesSection />
      <ProjectsSection limit={3} />
      <HowIWorkSection />
      <JourneySection />
      <CredibilitySection />
      <StackSection />
      <BookCta />
      <ContactSection />
    </>
  );
}
