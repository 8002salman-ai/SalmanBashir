import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, SectionHeading, StatusBadge, Accordion, CtaCard, Icon } from "@/components/ui";

const relationships = [
  {
    name: "Himalayan Koh",
    label: "Ongoing operational and digital-systems support",
    status: "Ongoing" as const,
    desc: "Ongoing operational and digital-systems support across salt product retail, wholesale and export operations.",
    points: [
      "Product and retail operations",
      "Export coordination support",
      "Website and digital-systems support",
    ],
  },
  {
    name: "Embani LLC",
    label: "Project-based marketplace, workflow and business-systems support",
    status: "Active Development" as const,
    desc: "Project-based support on the Embani ERP prototype — marketplace, workflow and business-systems work designed around the way the business actually runs.",
    points: [
      "Marketplace workflows",
      "ERP and dashboard planning",
      "Business-systems support",
    ],
  },
];

const disclosure =
  "These are ongoing operational and project-based business relationships. The companies remain independently owned and operated. No owner, official partner, co-founder, director or managing partner titles are used unless they are true.";

export function BusinessRelationshipsPage() {
  return (
    <>
      <Seo
        title="Business Relationships | Salman Bashir"
        description="Businesses and projects I support — ongoing operational and project-based relationships, described honestly with no invented titles."
        path="/business-relationships"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Business Relationships", path: "/business-relationships" }]}
      />
      <PageHero
        eyebrow="Business Relationships"
        title={
          <>
            Businesses and Projects{" "}
            <span className="text-gradient-brand">I Support</span>
          </>
        }
        description="Ongoing operational and project-based relationships, described with clear, truthful labels — never inflated titles."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {relationships.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <article className="card card-hover flex h-full flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold text-strong">
                      {r.name}
                    </h2>
                    <StatusBadge tone={toneFor(r.status)}>{r.status}</StatusBadge>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-strong">
                    {r.label}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {r.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-edge pt-4">
                    {r.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-xs font-medium text-soft"
                      >
                        <Icon
                          name="check"
                          className="h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <div className="rounded-2xl border border-gold-accent/30 bg-gold-accent/[0.06] p-5">
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-soft">
                <Icon
                  name="shield"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-accent"
                />
                {disclosure}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Honest language"
                title="Support, not ownership"
                description="The language used on this page describes real work — nothing more."
                align="left"
              />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 rounded-xl border border-edge bg-panel px-4 py-3 text-sm font-medium text-soft">
                  <Icon name="badge" className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                  Ongoing operational and digital-systems support
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-edge bg-panel px-4 py-3 text-sm font-medium text-soft">
                  <Icon name="badge" className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                  Project-based marketplace, workflow and business-systems support
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <Accordion
                items={[
                  {
                    question: "Why no official titles?",
                    answer:
                      "Because roles should describe real work. Labels like ongoing operational support and project-based support are precise and verifiable — owner, official partner, co-founder, director or managing partner are not used unless they are true.",
                  },
                  {
                    question: "What does support mean here?",
                    answer:
                      "Ongoing operational and digital-systems support, and project-based marketplace, workflow and business-systems support. The companies remain independently owned and operated.",
                  },
                  {
                    question: "What is Embani LLC?",
                    answer:
                      "A business entity involved in the active Embani ERP project. I work on the operations and systems side of that project.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaCard
        eyebrow="Work together"
        title="Have a project that needs real operational support?"
        description="Tell me what you're building and where the operations are today."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}

function toneFor(
  status: "Active Development" | "Ongoing",
): "active" | "live" {
  switch (status) {
    case "Active Development":
      return "active";
    default:
      return "live";
  }
}
