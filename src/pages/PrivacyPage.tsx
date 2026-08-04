import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { privacy, contact } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Salman Bashir"
        description="A simple, honest privacy policy for salmanbashir.vercel.app — no data selling, no ads, no third-party tracking."
        path="/privacy"
      />
    <BreadcrumbJsonLd items={[{ name: "Privacy", path: "/privacy" }]} />
      <PageHero
        eyebrow="Privacy"
        title={
          <>
            A simple, honest{" "}
            <span className="text-gradient-brand">privacy policy</span>
          </>
        }
        description={`This page explains what this website collects and how it is used. Last updated: ${privacy.updated}.`}
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="space-y-4">
            {privacy.sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 40}>
                <article className="rounded-2xl border border-edge bg-panel p-5 sm:p-6">
                  <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-strong">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-xs font-bold text-accent-strong">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-edge bg-panel p-5">
              <p className="flex items-center gap-2.5 text-sm text-muted">
                <Icon name="shield" className="h-4 w-4 text-accent" />
                Questions? Email{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-accent-strong hover:text-accent"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
