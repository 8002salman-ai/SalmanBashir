import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import {
  marketplaces,
  marketplaceServiceGroups,
  marketplaceDisclaimer,
} from "@/data/content";
import { Link } from "react-router-dom";
import { Reveal, Accordion, CtaCard, Icon } from "@/components/ui";

export function MarketplaceServicesPage() {
  return (
    <>
      <Seo
        title="Marketplace Services | Salman Bashir"
        description="Marketplace operations support — listings and catalogue, operations, profit and records, and workflow support across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress."
        path="/marketplace-services"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Marketplace Services", path: "/marketplace-services" },
        ]}
      />
      <PageHero
        eyebrow="Marketplace Services"
        title={
          <>
            Order for the marketplaces{" "}
            <span className="text-gradient-brand">you actually sell on</span>
          </>
        }
        description="Practical services across listings, operations, profit records and workflow support — built from hands-on selling, not from theory."
      />

      {/* Platforms */}
      <section className="relative pb-2 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-faint">
              Platforms I work from hands-on experience
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {marketplaces.map((m) => (
                <span
                  key={m}
                  className="rounded-lg border border-edge bg-panel px-3 py-1.5 text-sm font-medium text-soft"
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      <section className="relative pb-4 pt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketplaceServiceGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name={g.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-base font-semibold text-strong">
                    {g.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {g.desc}
                  </p>
                  <ul className="mt-3 space-y-1.5 border-t border-edge pt-3">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-soft"
                      >
                        <Icon
                          name="check"
                          className="h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2}
                        />
                        {item}
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
                {marketplaceDisclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-strong">
                  Common questions
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                  The practical details of how marketplace work is scoped and
                  delivered.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <Accordion
                items={[
                  {
                    question: "Which marketplaces do you support?",
                    answer:
                      "I work from hands-on experience across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress, and I apply the same operational approach to other platforms sellers use.",
                  },
                  {
                    question: "Do you run my store, or do I keep running it?",
                    answer:
                      "My focus is systems and projects: organizing operations, building profit tracking, automating workflows and planning ERP structures. I support the people running the store rather than replacing them.",
                  },
                  {
                    question: "What do you need from me to start?",
                    answer:
                      "A short consultation is usually enough. I need to understand the marketplaces, the products, how money and inventory move today, and what you want to change.",
                  },
                  {
                    question: "Do you guarantee sales or account reinstatement?",
                    answer:
                      "No. I help organize and improve operations, but results depend on execution, platform rules and market conditions. Any service that promises guaranteed results should be treated with caution.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-3 px-5 pb-14 sm:px-8">
        <Link
          to="/business-systems"
          className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
        >
          Business Systems and Automation
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link
          to="/sourcing-freight"
          className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
        >
          Sourcing and Freight Coordination
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>

      <CtaCard
        eyebrow="Get started"
        title="Tell me where your operations are today"
        description="A short conversation is usually enough to see whether I can help and where to start."
        ctaLabel="Book a Consultation"
        ctaHref="/book"
      />
    </>
  );
}
