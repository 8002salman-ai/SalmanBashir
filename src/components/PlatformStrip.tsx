import { Reveal } from "@/components/ui";
import {
  AmazonLogo,
  EbayLogo,
  EtsyLogo,
  TikTokShopLogo,
  WalmartLogo,
  ShopifyLogo,
  AliExpressLogo,
  YouTubeLogo,
  MercariLogo,
} from "@/components/PlatformLogos";

interface PlatformItem {
  id: string;
  name: string;
  component: React.ComponentType<{ className?: string }>;
  tag: string;
  tagColor: string;
  glowClass: string;
  borderClass: string;
}

const PLATFORMS: PlatformItem[] = [
  {
    id: "amazon",
    name: "Amazon",
    component: AmazonLogo,
    tag: "FBA / FBM",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(255,153,0,0.28)] group-hover:border-amber-400/50",
    borderClass: "hover:border-amber-400/40",
  },
  {
    id: "ebay",
    name: "eBay",
    component: EbayLogo,
    tag: "Multi-Store",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(0,100,210,0.28)] group-hover:border-blue-400/50",
    borderClass: "hover:border-blue-400/40",
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    component: TikTokShopLogo,
    tag: "Fast Dispatch",
    tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(254,44,85,0.28)] group-hover:border-pink-400/50",
    borderClass: "hover:border-pink-400/40",
  },
  {
    id: "etsy",
    name: "Etsy",
    component: EtsyLogo,
    tag: "Artisan & Niche",
    tagColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(241,100,30,0.28)] group-hover:border-orange-400/50",
    borderClass: "hover:border-orange-400/40",
  },
  {
    id: "walmart",
    name: "Walmart",
    component: WalmartLogo,
    tag: "Marketplace",
    tagColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(255,194,32,0.28)] group-hover:border-yellow-400/50",
    borderClass: "hover:border-yellow-400/40",
  },
  {
    id: "shopify",
    name: "Shopify",
    component: ShopifyLogo,
    tag: "DTC Store",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(149,191,71,0.28)] group-hover:border-emerald-400/50",
    borderClass: "hover:border-emerald-400/40",
  },
  {
    id: "aliexpress",
    name: "AliExpress",
    component: AliExpressLogo,
    tag: "Global Sourcing",
    tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(255,71,71,0.28)] group-hover:border-rose-400/50",
    borderClass: "hover:border-rose-400/40",
  },
  {
    id: "youtube",
    name: "YouTube",
    component: YouTubeLogo,
    tag: "@TheAIWithSalman",
    tagColor: "text-red-400 bg-red-400/10 border-red-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(255,0,0,0.28)] group-hover:border-red-400/50",
    borderClass: "hover:border-red-400/40",
  },
  {
    id: "mercari",
    name: "Mercari",
    component: MercariLogo,
    tag: "Resale",
    tagColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
    glowClass: "group-hover:shadow-[0_0_24px_rgba(255,51,75,0.28)] group-hover:border-sky-400/50",
    borderClass: "hover:border-sky-400/40",
  },
];

export function PlatformStrip() {
  return (
    <section
      aria-label="Marketplaces and platforms"
      className="relative border-y border-white/10 bg-[#06080e]/95 py-6 sm:py-8 backdrop-blur-2xl overflow-hidden"
    >
      {/* Background ambient light reflections */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-32 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[90px]" />
        <div className="absolute bottom-0 right-1/4 h-32 w-80 rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Executive Subtitle & Trust Indicator */}
          <div className="mb-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-300">
                PROVEN OPERATIONAL ECOSYSTEM & CHANNELS
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Active Store Management · Real Inventory · Direct P&L Architecture
            </p>
          </div>

          {/* Grid of Authentic Logos in Executive Glass Pods */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 sm:gap-3">
            {PLATFORMS.map((platform) => {
              const Logo = platform.component;
              return (
                <div
                  key={platform.id}
                  className={`group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:py-3.5 sm:px-2.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.07] ${platform.glowClass} ${platform.borderClass}`}
                  title={`${platform.name} (${platform.tag})`}
                >
                  {/* Logo Container with centered visual balance */}
                  <div className="flex h-8 sm:h-9 w-full items-center justify-center text-white transition-transform duration-200 group-hover:scale-105">
                    <Logo className="h-5 sm:h-6 max-w-[90%] object-contain" />
                  </div>

                  {/* Micro pill with platform operational role */}
                  <span
                    className={`mt-2 inline-block rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-tight uppercase whitespace-nowrap transition-colors ${platform.tagColor}`}
                  >
                    {platform.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
