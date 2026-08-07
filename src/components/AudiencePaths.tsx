import { Link } from "react-router-dom";
import { audiencePaths } from "@/data/content";
import { Icon, Reveal } from "@/components/ui";

/* Sits directly under the intro: four self-selection routes so a visitor
   picks their own path instead of scrolling the whole page to find it.
   Each card carries its own tone class, so the accent, glow and CTA colour
   shift per card without any extra styling per card. */
export function AudiencePaths() {
  return (
    <section
      aria-labelledby="audience-paths-heading"
      className="relative py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2
          id="audience-paths-heading"
          className="font-display text-lg font-semibold tracking-tight text-strong sm:text-xl"
        >
          What brings you here?
        </h2>
        <p className="mt-1.5 text-sm text-muted">
          Pick the closest one — it goes straight to the right place.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiencePaths.map((path, i) => (
            <Reveal key={path.href} delay={i * 70} as="div">
              <Link
                to={path.href}
                className={`tone tone-${path.tone} group flex h-full flex-col rounded-2xl border border-edge bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-panel-strong hover:shadow-xl hover:shadow-brand-500/10 motion-reduce:hover:translate-y-0`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-400/25 bg-brand-500/10 text-accent-strong transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  <Icon name={path.icon} className="h-5 w-5" />
                </span>

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.13em] text-accent-strong">
                  {path.audience}
                </p>
                <p className="mt-1.5 font-display text-base font-semibold text-strong">
                  {path.headline}
                </p>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">
                  {path.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-strong">
                  {path.cta}
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
