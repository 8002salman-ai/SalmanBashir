import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import {
  marketplaceServiceGroups,
  marketplaceDisclaimer,
} from "@/data/content";
import { Link } from "react-router-dom";
import { Reveal, Accordion, CtaCard, Icon } from "@/components/ui";
import {
  AmazonLogo,
  EbayLogo,
  TikTokShopLogo,
  WalmartLogo,
  EtsyLogo,
  ShopifyLogo,
  AliExpressLogo,
  MercariLogo,
} from "@/components/PlatformLogos";

const platformLogos = [
  { name: "Amazon", component: AmazonLogo, tag: "FBA / FBM & Seller Central" },
  { name: "eBay", component: EbayLogo, tag: "Multi-Store & Promoted Listings" },
  { name: "TikTok Shop", component: TikTokShopLogo, tag: "Fast Dispatch & Live Sales" },
  { name: "Walmart", component: WalmartLogo, tag: "Marketplace & 2-Day Delivery" },
  { name: "Etsy", component: EtsyLogo, tag: "Artisan & Handcrafted Catalogs" },
  { name: "Shopify", component: ShopifyLogo, tag: "Custom DTC Storefronts" },
  { name: "AliExpress", component: AliExpressLogo, tag: "Direct Sourcing & Supplier Sync" },
  { name: "Mercari", component: MercariLogo, tag: "Second-hand & Liquidation" },
];

export function MarketplaceServicesPage() {
  return (
    <>
      <Seo
        title="Marketplace Services | Salman Bashir — Amazon, eBay & Multi-Channel Operations"
        description="Marketplace operations support — listings, catalog upkeep, profit records, inventory reconciliation, and workflow systems across Amazon, eBay, TikTok Shop, Walmart, Etsy, and Shopify."
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
        description="Practical services across listings, operations, profit records and workflow support — built from hands-on selling across Amazon, eBay, TikTok Shop, Walmart, Etsy, and Shopify."
      />

      {/* Platforms with Authentic Brand Logos */}
      <section className="relative pb-6 pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-faint">
                Platforms Managed From Real Hands-On Experience
              </p>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Seller Operations
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {platformLogos.map((p) => {
                const Logo = p.component;
                return (
                  <div
                    key={p.name}
                    className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#090d18] p-3.5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-[#0d1326] text-center"
                  >
                    <div className="flex h-8 items-center justify-center">
                      <Logo className="h-5 w-auto max-w-[70px] text-white transition-transform group-hover:scale-110" />
                    </div>
                    <span className="mt-2 text-xs font-bold text-white tracking-tight">
                      {p.name}
                    </span>
                    <span className="mt-0.5 text-[9px] font-mono text-slate-400 line-clamp-1">
                      {p.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service groups */}
      <section className="relative pb-16 pt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {marketplaceServiceGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <article className="card card-hover flex h-full flex-col p-5">
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

      <section className="relative py-16 sm:py-24">
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

      <div className="flex flex-wrap justify-center gap-3 px-5 sm:px-8">
        <Link to="/business-systems" className="btn btn-secondary">
          Business Systems and Automation
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link to="/sourcing-freight" className="btn btn-secondary">
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
