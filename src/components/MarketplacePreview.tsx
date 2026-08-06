import { Link } from "react-router-dom";
import { marketplacePreview } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function MarketplacePreview() {
  return (
    <section id="marketplace-preview" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
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
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketplacePreview.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card card-hover h-full p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-edge bg-panel p-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-muted">
              Full breakdown of marketplace services, deliverables and how I
              work.
            </p>
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
