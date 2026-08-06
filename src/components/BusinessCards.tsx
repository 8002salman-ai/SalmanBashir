import { Link } from "react-router-dom";
import { businessCards, type BusinessCta } from "@/data/content";
import { Reveal, SectionHeading, StatusBadge, Icon } from "@/components/ui";

export function BusinessCards() {
  const toneFor = (
    status: (typeof businessCards)[number]["status"],
  ): "active" | "planning" | "placeholder" | "live" => {
    switch (status) {
      case "Active Development":
        return "active";
      case "Planning":
        return "planning";
      case "Ongoing":
      case "Live":
        return "live";
      default:
        return "placeholder";
    }
  };

  return (
    <section id="businesses" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-gold-accent/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects · Businesses · Platforms"
            title={
              <>
                What I'm <span className="text-gradient-brand">working on</span>
              </>
            }
            description="Current and planned projects, businesses and platforms. Cards stay honest — links are only added when they are real."
          />
          <div className="mt-4">
            <Link
              to="/business-relationships"
              className="btn btn-secondary btn-sm"
            >
              View Business Relationships
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessCards.map((b, i) => (
            <Reveal key={b.name} delay={i * 60}>
              <article className="card card-hover flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold text-strong">
                    {b.name}
                  </h3>
                  <StatusBadge tone={toneFor(b.status)}>{b.status}</StatusBadge>
                </div>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-faint">
                  {b.type}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {b.desc}
                </p>
                <p className="mt-3 border-t border-edge pt-3 text-xs italic text-faint">
                  {b.note}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.ctas.map((c, ci) => (
                    <CtaButton key={c.label} cta={c} primary={ci === 0} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaButton({ cta, primary }: { cta: BusinessCta; primary: boolean }) {
  if (cta.comingSoon) {
    return (
      <span className="inline-flex cursor-default items-center gap-1.5 rounded-lg border border-edge bg-panel px-3.5 py-2 text-xs font-semibold text-faint">
        {cta.label}
        <span className="rounded-full bg-panel-strong px-1.5 py-0.5 text-[9px] uppercase tracking-wide">
          Soon
        </span>
      </span>
    );
  }
  const className = primary
    ? "btn btn-secondary"
    : "btn btn-ghost text-xs";
  if (cta.href?.startsWith("mailto:") || cta.external) {
    return (
      <a
        href={cta.href}
        target={cta.external ? "_blank" : undefined}
        rel={cta.external ? "noopener noreferrer" : undefined}
        className={`${className} inline-flex items-center gap-1.5`}
      >
        {cta.label}
        {cta.external && <Icon name="external" className="h-3.5 w-3.5" />}
      </a>
    );
  }
  return (
    <Link to={cta.href ?? "/"} className={`${className} inline-flex items-center gap-1.5`}>
      {cta.label}
    </Link>
  );
}
