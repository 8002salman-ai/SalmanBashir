import { process } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui";

export function HowIWorkSection() {
  return (
    <section id="process" className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How I Work"
            title={
              <>
                A clear path from{" "}
                <span className="text-gradient-brand">problem to system</span>
              </>
            }
            description="Project-based, independent and result-focused. I work around your real operations — not generic templates."
          />
        </Reveal>

        <div className="relative mt-10">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent md:block" />

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="relative">
                  <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/25 bg-bg-soft font-display text-lg font-bold text-accent-strong shadow-lg shadow-brand-500/10">
                    {p.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-strong">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
