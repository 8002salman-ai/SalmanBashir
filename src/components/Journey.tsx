import { Link } from "react-router-dom";
import { journeyHomePreview } from "@/data/journeyPhases";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

/* Homepage "My Journey" preview — four concise stage cards linking through
   to the full interactive timeline at /journey. Kept short on purpose:
   the full detail (skills, tools, media, related projects) lives on the
   dedicated page. */
export function JourneySection({ limit }: { limit?: number }) {
  const items = limit ? journeyHomePreview.slice(0, limit) : journeyHomePreview;
  return (
    <section id="journey" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-brand-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="My Journey"
            title={
              <>
                From online operations to{" "}
                <span className="text-gradient-brand">building business systems</span>
              </>
            }
            description="A practical transition — starting on the operational side of online selling, then applying that understanding to sourcing, business systems and AI-assisted automation."
          />
        </Reveal>

        <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Link
                to={`/journey#${item.anchor}`}
                className="card card-hover flex h-full flex-col p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-base font-semibold text-strong">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link to="/journey" className="btn btn-secondary">
            Explore My Full Journey
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
