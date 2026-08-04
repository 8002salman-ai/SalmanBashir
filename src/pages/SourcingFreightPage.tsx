import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { sourcingPreview } from "@/data/content";
import { Reveal, Accordion, CtaCard, Icon } from "@/components/ui";

export function SourcingFreightPage() {
  return (
    <>
      <Seo
        title="Sourcing & Freight | Salman Bashir"
        description="Sourcing research, supplier coordination and freight planning support — operational guidance built from real marketplace and sourcing experience."
        path="/sourcing-freight"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Sourcing & Freight", path: "/sourcing-freight" }]}
      />
      <PageHero
        eyebrow="Sourcing & Freight"
        title={
          <>
            Find products. Move them{" "}
            <span className="text-gradient-brand">with a plan.</span>
          </>
        }
        description="Structured sourcing research and freight planning so buying decisions are made on real cost and reliability — not guesswork."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {sourcingPreview.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-edge bg-panel p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-semibold text-strong">
                    {s.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {s.points.map((p) => (
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
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-gold-accent/30 bg-gold-accent/[0.06] p-5">
              <p className="text-sm leading-relaxed text-soft">
                <span className="font-semibold text-strong">
                  An honest boundary:{" "}
                </span>
                I am not a licensed customs broker or freight forwarder. My
                support covers sourcing research, supplier coordination, cost
                comparison and freight planning notes. For customs clearance,
                duties and regulated logistics, I connect you to qualified
                professionals — I do not act as one.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <Accordion
              items={[
                {
                  question: "How do you research a product before sourcing?",
                  answer:
                    "I structure the research: market demand, competitor prices, landed cost math, supplier shortlists and reliability checks — before you commit money to a batch.",
                },
                {
                  question: "Do you handle customs or freight forwarding?",
                  answer:
                    "No. I plan routes, compare costs and prepare document checklists, but clearance and forwarding must be done by licensed professionals. I will point you to the right ones.",
                },
                {
                  question: "Can you build a supplier scorecard for my team?",
                  answer:
                    "Yes. A Google Sheets scorecard tracks quotes, lead times, quality notes and reliability so sourcing decisions have a history instead of a memory.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaCard
        eyebrow="Sourcing help"
        title="Planning a sourcing or freight project?"
        description="Start with a short call so we can scope the research and planning you actually need."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
