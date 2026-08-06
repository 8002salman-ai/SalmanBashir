import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { sourcingSupport, sourcingDisclosure } from "@/data/content";
import { Reveal, SectionHeading, Accordion, CtaCard, Icon } from "@/components/ui";

export function SourcingFreightPage() {
  return (
    <>
      <Seo
        title="Sourcing and Freight Coordination | Salman Bashir"
        description="Sourcing and operational coordination support — supplier comparison, MOQ and sample planning, packaging, air vs sea, landed cost and shipment coordination."
        path="/sourcing-freight"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Sourcing & Freight", path: "/sourcing-freight" }]}
      />
      <PageHero
        eyebrow="Sourcing and Freight Coordination"
        title={
          <>
            Find products. Move them{" "}
            <span className="text-gradient-brand">with a plan.</span>
          </>
        }
        description="Sourcing and operational coordination support so buying decisions are made on real cost and reliability — not guesswork."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sourcingSupport.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 60}>
                <div className="flex items-center gap-3 rounded-xl border border-edge bg-panel p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon
                      name="check"
                      className="h-4 w-4"
                      strokeWidth={2.2}
                    />
                  </span>
                  <p className="text-sm font-medium text-soft">{s}</p>
                </div>
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
                {sourcingDisclosure}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Himalayan Koh */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Project"
                title={
                  <>
                    Himalayan Koh — Product, Retail and{" "}
                    <span className="text-gradient-brand">Export Operations</span>
                  </>
                }
                description="Operational support for salt products across retail, wholesale and export."
                align="left"
              />
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Salt products",
                  "Retail and wholesale preparation",
                  "Packaging coordination",
                  "Catalogue building",
                  "Product operations",
                  "Shipment and export coordination support",
                  "Website and retailer workflows",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-edge bg-panel px-4 py-3 text-sm text-soft"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2.2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-edge bg-panel p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-accent/25 bg-gold-accent/10 text-gold-accent">
                    <Icon name="store" className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-strong">
                      Himalayan Koh
                    </h3>
                    <p className="text-xs text-muted">
                      Ongoing operational and digital-systems support
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Himalayan Koh covers the full product cycle — preparation,
                  packaging, catalogues, operations and export coordination —
                  supported by website and retailer workflows.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to="/projects/himalayan-koh"
                    className="btn btn-primary"
                  >
                    Explore Products
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:basco.pk@gmail.com?subject=Export%20Information%20Request"
                    className="btn btn-secondary"
                  >
                    Request Export Information
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

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
                    "No. I support sourcing and operational coordination — comparison, planning and communication. Clearance and forwarding are handled by licensed professionals.",
                },
                {
                  question: "Which routes do you coordinate?",
                  answer:
                    "Practical coordination support covers China–USA and China–Pakistan flows, including air vs sea comparison, landed cost and shipment communication.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <CtaCard
        eyebrow="Sourcing help"
        title="Planning a sourcing or freight project?"
        description="Start with a short call so we can scope the coordination and planning you actually need."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
