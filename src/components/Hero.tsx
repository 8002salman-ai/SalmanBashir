import { Link } from "react-router-dom";
import { personal, stats, ceoNote } from "@/data/content";
import { Icon } from "@/components/ui";
import { IntroVideoLightbox } from "@/components/IntroVideoLightbox";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroPanels } from "@/components/HeroPanels";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[140px]" />
        <div className="absolute right-[5%] top-[20%] h-[300px] w-[300px] rounded-full bg-gold-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="relative min-w-0 animate-fade-up">
            {/* Large brand watermark behind the hero copy */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 left-0 -z-10 w-[min(100%,560px)] select-none opacity-[0.16] sm:-top-12 sm:w-[min(100%,640px)]"
            >
              <img
                src="/8002-salman-horizontal-transparent.png"
                alt=""
                width={1300}
                height={731}
                loading="eager"
                decoding="async"
                className="h-auto w-full mask-logo-watermark"
              />
            </div>

            {/* Keeps the original vertical rhythm of the hero copy */}
            <div aria-hidden="true" className="h-10 sm:h-12" />

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3 py-1 text-[11px] font-medium text-soft backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              {personal.heroBadge}
            </div>

            <p className="mt-5 font-display text-[1.65rem] font-black leading-none tracking-tight text-strong sm:text-[2.15rem]">
              {personal.name}
            </p>
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-strong sm:text-xs">
              {ceoNote.title}
            </p>

            <h1 className="mt-4 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-strong sm:text-4xl lg:text-[2.75rem]">
              <span className="block text-muted">I work in</span>
              <RotatingWord
                words={personal.heroRotatingWords}
                className="block"
              />
              <span className="block text-muted">and build what holds up.</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-soft sm:text-base">
              {personal.heroSub}
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-wide text-faint sm:text-xs">
              <Icon
                name="badge"
                className="h-3.5 w-3.5 shrink-0 text-accent"
                strokeWidth={1.8}
              />
              {personal.heroCredibility}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Link to="/book" className="btn btn-primary btn-lg group">
                Meet up
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>

            {/* Video sits inline on small screens; on desktop it moves into
                the right column so that column is not left half-empty. */}
            <IntroVideoLightbox className="mt-5 w-full sm:w-auto lg:hidden" />

            <div className="mt-6 max-w-md rounded-xl border-l-2 border-brand-400/60 bg-panel/40 py-2.5 pl-4 pr-3">
              <p className="text-sm italic leading-relaxed text-soft">
                “{ceoNote.message}”
              </p>
            </div>

            {/* Trust labels — qualitative, never invented numbers */}
            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-edge bg-panel-strong sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-bg/40 px-3.5 py-3">
                  <dt className="font-display text-sm font-semibold text-strong">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-faint">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: video, then destinations and the work itself */}
          <div className="relative min-w-0 animate-fade-up [animation-delay:120ms] lg:pt-12">
            <IntroVideoLightbox className="mx-auto mb-4 hidden w-full max-w-md lg:flex" />

            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/15 via-transparent to-gold-accent/15 blur-2xl" />
              <HeroPanels />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
