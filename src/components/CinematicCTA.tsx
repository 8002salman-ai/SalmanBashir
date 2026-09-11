import { Link } from "react-router-dom";
import { Icon, Reveal } from "@/components/ui";

export function CinematicCTA() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {/* Panoramic Container with Mountain Highway Background */}
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 shadow-2xl shadow-black/80">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/astra/cta-mountain-highway.jpg"
                alt="Cinematic mountain highway"
                width={1920}
                height={1080}
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              {/* Darkening Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/95 via-[#080d1a]/80 to-[#060810]/90" />
            </div>

            <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Left Headline Content */}
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/20 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                  LET'S BUILD TOGETHER
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Have a business problem worth solving?
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  Let's build the system behind the growth.
                </p>
              </div>

              {/* Right CTA Button & Future Pillars */}
              <div className="flex items-center gap-8 shrink-0">
                <Link
                  to="/book"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-7 py-3.5 text-sm sm:text-base font-black text-white shadow-xl shadow-indigo-600/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] active:scale-95 shrink-0"
                >
                  <span>Meet Salman</span>
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>

                {/* Vertical Decorative Typography */}
                <div className="hidden xl:flex flex-col text-right font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold leading-relaxed border-l border-white/15 pl-6">
                  <span>HIGHER</span>
                  <span>SYSTEMS</span>
                  <span>BIGGER</span>
                  <span>TOMORROW</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
