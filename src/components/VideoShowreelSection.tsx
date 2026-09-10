import { IntroVideoLightbox } from "@/components/IntroVideoLightbox";
import { Reveal, Eyebrow } from "@/components/ui";

export function VideoShowreelSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Subtle ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Showreel</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-strong sm:text-4xl">
              Watch the 60-Second Intro
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              A short, transparent walkthrough of how I analyze marketplace operations, audit real product profit, and build custom business systems.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative rounded-3xl border border-edge-strong bg-gradient-to-b from-panel via-panel-strong to-bg p-3 shadow-2xl sm:p-5">
              <IntroVideoLightbox className="w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
