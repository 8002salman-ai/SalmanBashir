import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { CoreStrength } from "@/components/CoreStrength";
import { BusinessPillars } from "@/components/BusinessPillars";
import { MarketplacePreview } from "@/components/MarketplacePreview";
import { BusinessCards } from "@/components/BusinessCards";
import { SourcingPreview } from "@/components/SourcingPreview";
import { TrainingPreview } from "@/components/TrainingPreview";
import { OpportunitySeats } from "@/components/OpportunitySeats";
import { JourneySection } from "@/components/Journey";
import { TeamPreview } from "@/components/TeamPreview";
import { SelectedWork } from "@/components/SelectedWork";
import { Seo, JsonLd, SITE } from "@/components/Seo";
import { Reveal, Icon } from "@/components/ui";

function BookCta() {
  return (
    <section className="relative py-16 sm:py-24">
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
                className="btn btn-primary btn-lg group shrink-0"
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
        title="Salman Bashir | Marketplace Operations, Sourcing, Training & Business Systems"
        description="E-commerce operations and business automation consultant. I help online sellers organize marketplace operations, understand real profit, improve workflows and turn scattered processes into clear, practical systems."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Salman Bashir",
          description:
            "Marketplace operations, sourcing, training and business systems consulting built around real e-commerce operations.",
          url: `${SITE}/`,
          image: `${SITE}/og-image.png`,
          priceRange: "$$",
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PK",
          },
          sameAs: [
            "https://www.youtube.com/@TheAIWithSalman",
            "https://github.com/8002salman-ai",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketplace services",
                url: `${SITE}/marketplace-services`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sourcing & freight planning",
                url: `${SITE}/sourcing-freight`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Consulting",
                url: `${SITE}/book`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Online training",
                url: `${SITE}/training`,
              },
            },
          ],
        }}
      />
      <Hero />
      <CoreStrength />
      <BusinessPillars />
      <MarketplacePreview />
      <BusinessCards />
      <SourcingPreview />
      <TrainingPreview limit={3} />
      <OpportunitySeats />
      <JourneySection limit={3} />
      <TeamPreview />
      <SelectedWork />
      <BookCta />
    </>
  );
}
