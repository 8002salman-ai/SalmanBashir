import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, CtaCard } from "@/components/ui";
import { CredentialPreview } from "@/components/CredentialPreview";
import { Achievements } from "@/components/Achievements";
import { credentialSections, credentialsEmptyMessage } from "@/data/credentialsData";

export function CredentialsPage() {
  return (
    <>
      <Seo
        title="Credentials | Salman Bashir"
        description="Certificates, training, tools and platforms, professional documents and verified credentials — shown honestly, with nothing invented ahead of verification."
        path="/credentials"
      />
      <BreadcrumbJsonLd items={[{ name: "Credentials", path: "/credentials" }]} />
      <PageHero
        eyebrow="Credentials"
        title={
          <>
            Credentials,{" "}
            <span className="text-gradient-brand">shown honestly</span>
          </>
        }
        description="No certificates, issuers, dates or IDs are published here until they are verified. Sections below will fill in as documents are added and confirmed."
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl space-y-14 px-5 sm:px-8">
          {credentialSections.map((section, i) => (
            <Reveal key={section.id} delay={i * 60}>
              <div id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                    <Icon name={section.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-strong">
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted">{section.desc}</p>
                  </div>
                </div>

                {section.items.length === 0 ? (
                  <div className="mt-4 rounded-2xl border border-dashed border-edge-strong bg-panel p-6 text-center">
                    <Icon
                      name="file"
                      className="mx-auto h-6 w-6 text-faint"
                      strokeWidth={1.4}
                    />
                    <p className="mt-2 text-sm text-faint">{credentialsEmptyMessage}</p>
                  </div>
                ) : (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <CredentialPreview key={item.title} credential={item} />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          <Achievements />
        </div>
      </section>

      <CtaCard
        eyebrow="Verify the work instead"
        title="Prefer to see real evidence?"
        description="Project case studies show real evidence and honest status — no invented screenshots or results."
        ctaLabel="View Projects"
        ctaHref="/projects"
      />
    </>
  );
}
