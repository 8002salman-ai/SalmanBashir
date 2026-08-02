import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { training } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function TrainingPage() {
  return (
    <>
      <Seo
        title="Training | Salman Bashir — Marketplace Operations, Profit & Automation"
        description="Practical online training for sellers: marketplace operations foundations, profit & COGS made clear, Google Sheets systems, workflow automation and AI-assisted product workflows."
        path="/training"
      />
      <PageHero
        eyebrow="Training"
        title={
          <>
            Learn the operations that{" "}
            <span className="text-gradient-brand">protect your profit</span>
          </>
        }
        description="Practical, hands-on training for online sellers — not theory. Sessions are built from real marketplace operations and can be 1:1, small group, live or recorded."
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
                  <ul className="mt-3 space-y-1.5 border-t border-edge pt-3">
                    {t.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs text-muted"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
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

          <Reveal className="mt-8">
            <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-strong">
                    How training works
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    Every session starts with your situation. I adapt the
                    material to your marketplaces, your products and your
                    current systems — and I keep everything practical enough to
                    use the same day.
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      "Starts with your actual setup",
                      "Hands-on, not just slides",
                      "1:1 or small group",
                      "Live or recorded",
                      "No locked-in commitments",
                      "Honest about what's worth doing",
                    ].map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm text-soft"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/[0.07] p-6 text-center">
                  <Icon
                    name="book"
                    className="h-8 w-8 text-accent"
                    strokeWidth={1.6}
                  />
                  <p className="font-display text-lg font-semibold text-strong">
                    Ready to get started?
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Tell me what you want to learn and I'll suggest the right
                    format.
                  </p>
                  <Link
                    to="/book"
                    className="mt-2 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                  >
                    Book a Session
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
