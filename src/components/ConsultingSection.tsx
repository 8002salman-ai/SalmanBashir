import { Link } from "react-router-dom";
import { consultations } from "@/data/content";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

export function ConsultingSection() {
  return (
    <section id="consulting" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[380px] w-[640px] rounded-full bg-gold-accent/[0.06] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Online Consulting"
            title={
              <>
                Practical consulting,{" "}
                <span className="text-gradient-brand">honest advice</span>
              </>
            }
            description="Focused sessions for marketplace sellers and online businesses — from a discovery call to an ERP planning session. Every request is reviewed personally and nothing is confirmed before approval."
          />
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {consultations.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-accent/30 hover:bg-panel-strong">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-accent/20 bg-gradient-to-br from-gold-accent/15 to-gold-accent/5 text-gold-accent">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-strong">
                  {c.title}
                </h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-gold-accent">
                  <Icon name="clock" className="h-3.5 w-3.5" />
                  {c.length}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-edge bg-panel p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-strong">
                Not sure which session fits?
              </p>
              <p className="mt-1 text-sm text-muted">
                Send a short message and I'll recommend the right way to start —
                no booking is confirmed until you hear back.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Book a Consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-3 text-sm font-semibold text-strong transition-colors hover:border-gold-accent/40 hover:text-accent-strong"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
