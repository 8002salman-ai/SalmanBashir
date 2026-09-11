import { Reveal } from "@/components/ui";

const PLATFORMS = [
  { name: "amazon", style: "font-black tracking-tight text-white/90 text-lg hover:text-amber-400" },
  { name: "ebay", style: "font-black tracking-tighter text-white/90 text-lg hover:text-cyan-400" },
  { name: "Etsy", style: "font-serif italic font-bold text-white/90 text-xl hover:text-orange-400" },
  { name: "TikTok Shop", style: "font-bold tracking-tight text-white/90 text-base hover:text-pink-400" },
  { name: "Walmart", style: "font-bold tracking-tight text-white/90 text-lg hover:text-yellow-400" },
  { name: "shopify", style: "font-bold tracking-tight text-white/90 text-lg hover:text-emerald-400" },
  { name: "YouTube", style: "font-bold tracking-tight text-white/90 text-lg hover:text-rose-400" },
];

export function PlatformStrip() {
  return (
    <section className="relative border-y border-white/10 bg-[#070a12]/80 py-5 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Platforms list */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-9">
              {PLATFORMS.map((p) => (
                <div
                  key={p.name}
                  className={`cursor-default transition-all duration-200 select-none ${p.style}`}
                >
                  {p.name}
                </div>
              ))}
            </div>

            {/* Credibility Label */}
            <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-slate-400 text-center md:text-right shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-6">
              From Marketplaces to AI Systems
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
