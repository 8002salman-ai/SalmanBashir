import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { training, trainingFormats, contact } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function TrainingPage() {
  return (
    <>
      <Seo
        title="Training | Salman Bashir — Practical Marketplace & Business Systems Training"
        description="Practical online training built from hands-on marketplace experience: eBay, Depop, Mercari, multi-marketplace operations and online business systems — 1:1, small group, recorded or live."
        path="/training"
      />
      <PageHero
        eyebrow="Training"
        title={
          <>
            Practical training from{" "}
            <span className="text-gradient-brand">hands-on operations</span>
          </>
        }
        description="Training built from real marketplace work — not theory and not hype. Sessions cover the marketplaces you actually sell on and the systems that keep your profit honest, with no invented certificates or success statistics."
      />

      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {training.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-panel-strong">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold text-strong">
                    {t.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t.desc}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5 border-t border-edge pt-3">
                    {t.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-md border border-edge bg-panel-strong px-2 py-1 text-[11px] font-medium text-soft"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-panel-strong px-3 py-1 text-[11px] font-medium text-faint">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                      {t.format}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Formats */}
          <Reveal className="mt-10">
            <SectionHeading
              align="left"
              eyebrow="Training Formats"
              title={
                <>
                  Learn in the format that{" "}
                  <span className="text-gradient-brand">fits your team</span>
                </>
              }
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trainingFormats.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-2xl border border-edge bg-panel p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-accent-strong">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <p className="text-sm font-medium text-strong">{f}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal className="mt-10">
            <div className="rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                <Link
                  to="/book"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-brand-500/25 bg-brand-500/10 p-6 text-center transition-all hover:border-brand-500/50 hover:bg-brand-500/15"
                >
                  <Icon name="calendar" className="h-7 w-7 text-accent-strong" />
                  <span className="font-display text-base font-semibold text-strong">
                    Book Private Training
                  </span>
                  <span className="text-xs text-muted">
                    Pick a session and send a booking request
                  </span>
                </Link>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(
                    "Training plan request",
                  )}&body=${encodeURIComponent(
                    "Hi Salman,\n\nI'm interested in a training plan. Here is a little about my business and what I'd like to learn:\n\n- Marketplaces:\n- Experience level:\n- Training goals:\n",
                  )}`}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-edge bg-panel p-6 text-center transition-all hover:border-gold-accent/40 hover:bg-panel-strong"
                >
                  <Icon name="book" className="h-7 w-7 text-gold-accent" />
                  <span className="font-display text-base font-semibold text-strong">
                    Request a Training Plan
                  </span>
                  <span className="text-xs text-muted">
                    Get a suggested curriculum for your goals
                  </span>
                </a>
                <Link
                  to="/contact"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-edge bg-panel p-6 text-center transition-all hover:border-gold-accent/40 hover:bg-panel-strong"
                >
                  <Icon name="users" className="h-7 w-7 text-gold-accent" />
                  <span className="font-display text-base font-semibold text-strong">
                    Ask About Group Sessions
                  </span>
                  <span className="text-xs text-muted">
                    Small group or custom team training
                  </span>
                </Link>
              </div>
              <p className="mt-6 text-center text-xs text-faint">
                No certificates, student counts, reviews or success statistics
                are invented — every session is practical and honest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
