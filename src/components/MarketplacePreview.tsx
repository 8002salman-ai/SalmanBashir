import { Link } from "react-router-dom";
import { marketplacePreview } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function MarketplacePreview() {
  return (
    <section id="marketplace-preview" className="relative pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Marketplace Services"
              title={
                <>
                  Operations, profit and systems{" "}
                  <span className="text-gradient-brand">for online sellers</span>
                </>
              }
              description="Practical services built from running marketplaces hands-on — not theory."
              align="left"
            />
            {/* Live platform pills */}
            <div className="flex flex-wrap items-center gap-1.5 pb-2">
              {["eBay", "TikTok Shop", "Etsy", "Mercari", "Depop"].map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-300 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplacePreview.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover h-full p-5 border-edge-strong bg-gradient-to-b from-panel to-panel/70 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-panel via-panel-strong to-panel p-5 sm:flex-row sm:items-center shadow-md">
            <div>
              <p className="text-sm font-semibold text-strong">
                Ready to organize your store operations?
              </p>
              <p className="text-xs text-muted mt-0.5">
                Full breakdown of marketplace services, deliverables and operational milestones.
              </p>
            </div>
            <Link
              to="/marketplace-services"
              className="btn btn-primary shrink-0"
            >
              Explore Marketplace Services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
