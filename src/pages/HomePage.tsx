import { Seo, JsonLd, SITE } from "@/components/Seo";
import { AstraHero } from "@/components/AstraHero";
import { PlatformStrip } from "@/components/PlatformStrip";
import { WhatIBuild } from "@/components/WhatIBuild";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HomeAskAndExperience } from "@/components/HomeAskAndExperience";
import { HomeYouTubeAndPhilosophy } from "@/components/HomeYouTubeAndPhilosophy";
import { LiveSystemsShowcase } from "@/components/LiveSystemsShowcase";
import { CinematicCTA } from "@/components/CinematicCTA";

export function HomePage() {
  return (
    <>
      <Seo
        title="Salman Bashir — Operator, Entrepreneur, AI Systems Builder"
        description="I turn messy business operations into systems that make money, scale and run smarter. E-commerce operations, business systems, AI automations, and global sourcing."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Salman Bashir",
          description:
            "Operator, Entrepreneur, and AI Systems Builder. E-commerce operations, business systems, and AI automation.",
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
            "https://www.linkedin.com/in/salmanbashir80",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketplace Operations",
                url: `${SITE}/marketplace-services`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Automation",
                url: `${SITE}/ai-automation`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Systems & ERP",
                url: `${SITE}/business-systems`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sourcing & Freight",
                url: `${SITE}/sourcing-freight`,
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Executive Consultation",
                url: `${SITE}/book`,
              },
            },
          ],
        }}
      />

      {/* Astra Reference Hero */}
      <AstraHero />

      {/* Platform Credibility Strip */}
      <PlatformStrip />

      {/* What I Build: 4 Capability Cards */}
      <WhatIBuild />

      {/* Featured Projects: Luxedge, Salman OS, Salman ML, Embani ERP */}
      <FeaturedProjects />

      {/* Dual Split 1: Ask Salman AI + Real Experience. Real Impact. */}
      <HomeAskAndExperience />

      {/* Dual Split 2: Latest from YouTube + What People Say */}
      <HomeYouTubeAndPhilosophy />

      {/* Live Production Systems Showcase (Interactive Preview) */}
      <LiveSystemsShowcase />

      {/* Full-width Cinematic Mountain Road CTA Banner */}
      <CinematicCTA />
    </>
  );
}
