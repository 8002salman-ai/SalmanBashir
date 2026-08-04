import { Link } from "react-router-dom";
import { trainingPreview } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function TrainingPreview() {
  return (
    <section id="training-preview" className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-brand-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Consulting & Training"
            title="Learn the operational side, not just the tools"
            description="Training areas built around real problems sellers and operators face."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPreview.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-edge bg-panel p-5 transition-colors hover:border-brand-500/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-strong">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {t.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-edge bg-panel p-5 sm:flex-row sm:items-center">
            <p className="text-sm leading-relaxed text-muted">
              See the full training roadmap and how sessions are delivered.
            </p>
            <Link
              to="/training"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
            >
              View Training
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
