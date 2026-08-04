import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { contact } from "@/data/content";
import { Reveal, StatusBadge, CtaCard, Icon } from "@/components/ui";

const plans = [
  {
    title: "Applied learning",
    desc: "Hands-on workbooks for sellers and operators learning the operational side of online business.",
    status: "Planned",
  },
  {
    title: "Systems gallery",
    desc: "Live examples of the sheets, dashboards and workflows built in real projects.",
    status: "Planned",
  },
  {
    title: "Sourcing lab",
    desc: "Structured sourcing research and supplier scorecard practice.",
    status: "Planned",
  },
  {
    title: "Q&A and support",
    desc: "A place to ask practical operations questions and get structured answers.",
    status: "Planned",
  },
];

export function CommunityPage() {
  return (
    <>
      <Seo
        title="Community | Salman Bashir"
        description="A planned practice lab for applied learning, systems examples and structured operations support. Details coming soon."
        path="/community"
      />
      <BreadcrumbJsonLd items={[{ name: "Community", path: "/community" }]} />
      <PageHero
        eyebrow="Practice Lab"
        title={
          <>
            A space for{" "}
            <span className="text-gradient-brand">applied learning</span>
          </>
        }
        description="A planned community and practice lab around real operations — experiments, prototypes and applied learning. This page is a placeholder until it launches."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-edge bg-panel p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-base font-semibold text-strong">
                      {p.title}
                    </h2>
                    <StatusBadge tone="planning">{p.status}</StatusBadge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="mx-auto max-w-2xl rounded-2xl border border-edge bg-panel p-6 text-center">
              <p className="text-sm leading-relaxed text-muted">
                Want to hear when the practice lab launches? Reach out and I will
                keep you in the loop.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-brand-400"
              >
                <Icon name="mail2" className="h-4 w-4" />
                Email {contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaCard
        eyebrow="Until the lab launches"
        title="The training and consulting doors are open today"
        description="Applied learning already exists through structured training and project work."
        ctaLabel="View Training"
        ctaHref="/training"
      />
    </>
  );
}
