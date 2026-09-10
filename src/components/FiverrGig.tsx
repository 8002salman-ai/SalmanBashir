import { Link } from "react-router-dom";
import { contact } from "@/data/content";
import { fiverrHighlights } from "@/data/gigs";
import { Icon, Reveal } from "@/components/ui";

/**
 * Compact Executive Fiverr Feature Card with 3D Consultant Character Visual.
 * Streamlined vertical footprint, high-trust visual cues, and direct contract CTAs.
 */
export function FiverrGig() {
  const url = contact.socials.fiverr || "https://www.fiverr.com";

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-[#061410]/95 via-[#090d14]/95 to-[#061118]/95 p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-xl shadow-emerald-500/5">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-500/15 blur-[100px]" />
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Compact Copy, Capabilities & Direct CTAs */}
              <div className="lg:col-span-7 xl:col-span-8">
                {/* Header Tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Freelance Services · Live on Fiverr
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10.5px] font-bold text-amber-300">
                    ★ 5.0 Rated
                  </span>
                </div>

                {/* Headline */}
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black tracking-tight text-strong">
                  Hire Salman on <span className="text-emerald-400">Fiverr</span>
                </h2>

                <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-muted max-w-xl">
                  Marketplace operations, real profit dashboards, sourcing coordination and custom AI systems — delivered directly through structured freelance gigs.
                </p>

                {/* Compact Capability Matrix */}
                <ul className="mt-3.5 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs font-medium text-soft">
                  {fiverrHighlights.slice(0, 4).map((p) => (
                    <li key={p} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <Icon name="check" className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span className="truncate">{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons & Trust Indicators */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-black shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-400/40 active:scale-[0.98]"
                  >
                    <span>Hire Me on Fiverr</span>
                    <Icon name="external" className="h-3.5 w-3.5" />
                  </a>

                  <Link
                    to="/fiverr"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-edge-strong bg-panel px-4 py-2.5 text-xs sm:text-sm font-semibold text-strong transition-all duration-200 hover:border-brand-400/40 hover:bg-panel-strong"
                  >
                    <span>View all gigs</span>
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </Link>

                  <span className="text-[11px] text-muted flex items-center gap-1.5 ml-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Rapid Delivery · Safe Payment Protection
                  </span>
                </div>
              </div>

              {/* Right Column: 3D Consultant Cartoon / Tech Character Visual */}
              <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[260px] sm:max-w-[280px]">
                  {/* Subtle Background Glow behind the visual */}
                  <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/25 via-cyan-400/15 to-transparent blur-xl" />

                  {/* Character Card Frame */}
                  <div className="relative overflow-hidden rounded-2xl border border-emerald-400/35 bg-[#090d14] shadow-2xl shadow-emerald-500/20">
                    <img
                      src="/images/fiverr-consultant-3d.jpg"
                      alt="Salman Bashir — 3D E-Commerce Operations & Systems Consultant"
                      className="aspect-square w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />

                    {/* Integrated Floating Status Bar */}
                    <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/85 px-3 py-1.5 text-[10.5px] backdrop-blur-md shadow-lg">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        <span className="font-bold text-white">Salman Bashir</span>
                      </div>
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9.5px] font-bold text-emerald-300">
                        Pro Consultant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}