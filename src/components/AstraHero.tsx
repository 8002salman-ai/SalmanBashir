import { Link } from "react-router-dom";
import { personal } from "@/data/content";
import { Icon, Reveal } from "@/components/ui";

const METRICS = [
  { value: "3+", label: "Marketplace Platforms" },
  { value: "10+", label: "Years Experience" },
  { value: "5+", label: "Active Projects" },
  { value: "Global", label: "Supplier Network" },
];

export function AstraHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Cinematic Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Executive Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                BUILDING A SMARTER, AUTOMATED TOMORROW
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
                {personal.name.toUpperCase()}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-cyan-300">
                Operator. Entrepreneur. AI Systems Builder.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl">
                I turn messy business operations into systems that make money, scale and run smarter.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-indigo-600/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_26px_rgba(99,102,241,0.5)] active:scale-95"
                >
                  <span>Explore My Work</span>
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white active:scale-95"
                >
                  <Icon name="calendar" className="h-4 w-4 text-cyan-400" />
                  <span>Work With Me</span>
                </Link>
              </div>
            </Reveal>

            {/* 4 Metric Badges */}
            <Reveal delay={240}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur transition-colors hover:border-indigo-400/30"
                  >
                    <div className="font-display text-xl sm:text-2xl font-black text-white">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-tight text-slate-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Founder Quote */}
            <Reveal delay={300}>
              <div className="border-l-2 border-indigo-500/50 pl-4 py-1 text-xs sm:text-sm text-slate-400 italic">
                “Systems create freedom.” <span className="not-italic text-slate-300 font-medium">— Salman Bashir</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Original Executive Portrait Composition */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <Reveal delay={150}>
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Floating Keywords Strip */}
                <div className="hidden sm:flex absolute -top-8 right-0 z-20 flex-col items-end gap-0.5 text-right font-mono text-[10px] tracking-[0.25em] text-slate-400/80 uppercase font-semibold pointer-events-none">
                  <span>IDEAS</span>
                  <span>SYSTEMS</span>
                  <span>AUTOMATION</span>
                  <span>GROWTH</span>
                  <span>FREEDOM</span>
                </div>

                {/* Portrait Card Container with Luxury Glass Border */}
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] via-[#090d19] to-[#06080f] p-2 sm:p-3 shadow-2xl shadow-black/80">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[#06080f]">
                    <img
                      src="/images/astra/hero-salman-executive.jpg"
                      alt="Salman Bashir — Operator, Entrepreneur, AI Systems Builder"
                      width={1024}
                      height={768}
                      fetchPriority="high"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-102"
                    />

                    {/* Gradient darkening at base for seamless visual blending */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent" />
                  </div>

                  {/* Founder Signature Overlay */}
                  <div className="absolute bottom-5 right-6 z-20 text-right">
                    <div className="font-serif italic text-lg sm:text-xl font-bold tracking-wide text-white drop-shadow-md">
                      Salman Bashir
                    </div>
                    <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold">
                      FOUNDER
                    </div>
                  </div>
                </div>

                {/* Subtle outer glow ring */}
                <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-transparent blur-xl" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
