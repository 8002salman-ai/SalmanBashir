import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/About";
import { StackSection } from "@/components/Stack";
import { CredibilitySection } from "@/components/Credibility";
import { Seo } from "@/components/Seo";
import { personal } from "@/data/content";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | Salman Bashir — E-commerce Operations & Business Automation"
        description="Business experience first, technology built around it. Learn how Salman Bashir turns real marketplace challenges into practical systems, clear workflows and smarter business decisions."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title={
          <>
            Business experience first.{" "}
            <span className="text-gradient-brand">
              Technology built around it.
            </span>
          </>
        }
        description={personal.locationLine}
      />
      <AboutSection />
      <StackSection />
      <CredibilitySection />
    </>
  );
}
