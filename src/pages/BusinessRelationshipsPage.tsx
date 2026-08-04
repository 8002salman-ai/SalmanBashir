import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, SectionHeading, StatusBadge, Accordion, CtaCard, Icon } from "@/components/ui";

const relationships = [
  {
    name: "Himalayan Koh",
    label: "Ongoing operational support",
    status: "Planning" as const,
    desc: "A planned collaboration around marketplace operations and sourcing. Details are shared when the scope is finalized — nothing is claimed before it exists.",
    points: [
      "Marketplace operations planning",
      "Sourcing coordination",
      "Profit visibility systems",
    ],
  },
  {
    name: "Embani LLC",
    label: "Project-based collaboration",
    status: "Active Development" as const,
    desc: "Active internal operations work on the Embani ERP prototype — inventory, sales and profit workflows designed around the way the business actually runs.",
    points: [
      "ERP workflow design",
      "Operations dashboards",
      "Integration planning",
    ],
  },
  {
    name: "Salman Bashir Consulting",
    label: "Digital systems support",
    status: "Live" as const,
    desc: "The consulting practice itself: marketplace systems, profit tracking, automation and training for online sellers and growing businesses.",
    points: [
      "Operations consulting",
      "Automation projects",
      "Online training",
    ],
  },
];

const labels = [
  "Ongoing operational support",
  "Project-based collaboration",
  "Digital systems support",
];

export function BusinessRelationshipsPage() {
  return (
    <>
      <Seo
        title="Business Relationships | Salman Bashir"
        description="Business relationships built on ongoing operational support, project-based collaboration and digital systems support — no invented titles, no inflated claims."
        path="/business-relationships"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Business Relationships", path: "/business-relationships" }]}
      />
      <PageHero
        eyebrow="Business Relationships"
        title={
          <>
            Built on <span className="text-gradient-brand">honest roles</span>
          </>
        }
        description="Collaborations are described with clear, truthful labels — ongoing operational support, project-based collaboration and digital systems support. Never inflated titles."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {relationships.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5">
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
        </div>
      </section>

      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Labels that stay honest"
                title="What each label means"
                description="Language matters. These are the only relationship labels used on this site."
                align="left"
              />
              <ul className="mt-6 space-y-3">
                {labels.map((l) => (
                  <li
                    key={l}
                    className="flex items-center gap-3 rounded-xl border border-edge bg-panel px-4 py-3 text-sm font-medium text-soft"
                  >
                    <Icon
                      name="badge"
                      className="h-4 w-4 shrink-0 text-accent"
                      strokeWidth={1.8}
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <Accordion
                items={[
                  {
                    question: "Why only three relationship labels?",
                    answer:
                      "Because roles should describe real work. 'Ongoing operational support', 'project-based collaboration' and 'digital systems support' are precise and verifiable — titles like partner or director are not used unless they are true.",
                  },
                  {
                    question: "Is Himalayan Koh an active business?",
                    answer:
                      "It is a planned collaboration currently in the planning stage. The card stays in 'Planning' until the scope is finalized and the work begins.",
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
  status: "Active Development" | "Planning" | "Live",
): "active" | "planning" | "live" {
  switch (status) {
    case "Active Development":
      return "active";
    case "Planning":
      return "planning";
    default:
      return "live";
  }
}
