import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { marketplacePreview } from "@/data/content";
import { Link } from "react-router-dom";
import { Reveal, SectionHeading, Accordion, CtaCard, Icon } from "@/components/ui";

export function MarketplaceServicesPage() {
  return (
    <>
      <Seo
        title="Marketplace Services | Salman Bashir"
        description="Marketplace operations support for online sellers — listings, inventory, profit and COGS reporting, workflow automation and ERP planning. Built from hands-on marketplace experience."
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
            Operations, profit and systems{" "}
            <span className="text-gradient-brand">for online sellers</span>
          </>
        }
        description="Hands-on marketplace operations experience applied to the platforms sellers actually use. I organize the work, make profit visible and remove repetitive manual steps."
      />

      <section className="relative pb-4 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketplacePreview.map((s, i) => (
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="Common questions"
                description="The practical details of how marketplace work is scoped and delivered."
                align="left"
              />
            </Reveal>
            <Reveal>
              <Accordion
                items={[
                  {
                    question: "Which marketplaces do you support?",
                    answer:
                      "I work from hands-on experience across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress, and I apply the same operational approach to other platforms sellers use.",
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
                    question: "Can you show real examples first?",
                    answer:
                      "The projects and systems on this site are the evidence. I prefer starting with a small, well-defined piece of work before committing to a larger engagement.",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-3 px-5 pb-14 sm:px-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
        >
          View All Services
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link
          to="/sourcing-freight"
          className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
        >
          Sourcing & Freight
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
