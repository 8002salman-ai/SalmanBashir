import { Link } from "react-router-dom";
import { businessCards } from "@/data/content";
import { Reveal, SectionHeading, StatusBadge } from "@/components/ui";

export function BusinessCards() {
  const toneFor = (
    status: (typeof businessCards)[number]["status"],
  ): "active" | "planning" | "placeholder" | "live" => {
    switch (status) {
      case "Active Development":
        return "active";
      case "Planning":
        return "planning";
      case "Live":
        return "live";
      default:
        return "placeholder";
    }
  };

  return (
    <section id="businesses" className="relative py-14 sm:py-20">
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
            description="Current and planned projects, businesses and platforms. Placeholder cards stay honest until the real ones launch."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessCards.map((b, i) => (
            <Reveal key={b.name} delay={i * 60}>
              {b.href ? (
                <Link
                  to={b.href}
                  className="group flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-colors hover:border-brand-500/40 hover:bg-panel-strong"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-strong group-hover:text-accent-strong">
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
                </Link>
              ) : (
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5">
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
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
