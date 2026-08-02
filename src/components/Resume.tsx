import { Reveal, Icon } from "@/components/ui";

export function Resume() {
  return (
    <section id="resume" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/10 blur-[90px]" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-gold-500/[0.07] blur-[90px]" />
            </div>

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10 text-brand-300">
              <Icon name="file" className="h-7 w-7" strokeWidth={1.7} />
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Resume Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-zinc-400">
              A structured resume is being prepared. For the current version of
              my experience and projects, reach out directly — I'm happy to
              share a tailored overview of my work.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Request My Resume
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
