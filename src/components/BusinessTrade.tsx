import { Link } from "react-router-dom";
import { businessTrade } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function BusinessTrade() {
  return (
    <section id="business-trade" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-1/2 h-[280px] w-[280px] rounded-full bg-gold-accent/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={businessTrade.eyebrow}
            title={businessTrade.title}
            description={businessTrade.intro}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessTrade.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="card card-hover group flex h-full flex-col p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong transition-transform duration-300 group-hover:scale-110">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-strong">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {c.audience}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-xs font-medium text-soft"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                        strokeWidth={2}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                {c.disclosure && (
                  <p className="mt-3 border-t border-edge pt-3 text-[11px] italic leading-relaxed text-faint">
                    {c.disclosure}
                  </p>
                )}
                {c.note && (
                  <p className="mt-3 border-t border-edge pt-3 text-[11px] leading-relaxed text-faint">
                    {c.note}
                  </p>
                )}
                <div className="mt-4 flex flex-1 items-end">
                  <Link
                    to={c.href}
                    className="btn btn-secondary btn-sm group/link w-full"
                  >
                    {c.cta}
                    <Icon
                      name="arrow"
                      className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
