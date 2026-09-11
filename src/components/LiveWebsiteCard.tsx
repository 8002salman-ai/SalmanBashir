import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

interface LiveWebsiteCardProps {
  className?: string;
}

export interface ShowcaseSite {
  id: string;
  name: string;
  embedUrl: string;
  displayUrl: string;
  badge: string;
  title: string;
  tagline: string;
  github: string;
  category: string;
}

export const SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: "luxedge",
    name: "LuxEdge",
    embedUrl: "https://luxedge-website.vercel.app",
    displayUrl: "https://luxedge.us",
    badge: "Live Store",
    title: "LuxEdge — Curated Pet & Animal Essentials",
    tagline: "Live e-commerce brand engineered with modern catalog architecture, PWA & checkout",
    github: "https://github.com/8002salman-ai/luxedge-website",
    category: "E-Commerce",
  },
  {
    id: "youtube-automation",
    name: "YouTube AI",
    embedUrl: "https://youtube-automation-azure.vercel.app",
    displayUrl: "https://youtube-automation-azure.vercel.app",
    badge: "AI Agent",
    title: "YouTube Automation & Video AI Pipeline",
    tagline: "Autonomous content generation, voice synthesis & publishing pipeline",
    github: "https://github.com/8002salman-ai/youtube-automation",
    category: "AI Agent",
  },
  {
    id: "8002-erp",
    name: "8002 ERP",
    embedUrl: "/api/proxy-site?url=https://8002-erp.vercel.app",
    displayUrl: "https://8002-erp.vercel.app",
    badge: "Enterprise",
    title: "8002 ERP — Enterprise Resource Planning",
    tagline: "Full-scale multi-warehouse inventory, procurement & financial operations system",
    github: "https://github.com/8002salman-ai/8002-erp",
    category: "Operations",
  },
  {
    id: "basco-sports",
    name: "Basco Sports",
    embedUrl: "https://basco-sports.vercel.app",
    displayUrl: "https://basco-sports.vercel.app",
    badge: "Brand Store",
    title: "Basco Sports — Performance Athletics",
    tagline: "Activewear brand showcase with responsive catalog and checkout pipeline",
    github: "https://github.com/8002salman-ai/Basco-sports",
    category: "E-Commerce",
  },
  {
    id: "himalayan-koh",
    name: "Himalayan Koh",
    embedUrl: "https://himalayan-koh.vercel.app",
    displayUrl: "https://himalayan-koh.vercel.app",
    badge: "Brand Store",
    title: "Himalayan Koh — Natural Salt & Minerals",
    tagline: "Natural wellness brand storefront with global sourcing & logistics integration",
    github: "https://github.com/8002salman-ai/himalayan-koh",
    category: "Wellness",
  },
  {
    id: "hot-grill",
    name: "Hot Grill",
    embedUrl: "https://hot-grill-website.vercel.app",
    displayUrl: "https://hot-grill-website.vercel.app",
    badge: "Hospitality",
    title: "Hot Grill — Restaurant & Dining",
    tagline: "Modern dining menu, online reservations & brand storytelling experience",
    github: "https://github.com/8002salman-ai/hot-grill-website",
    category: "Hospitality",
  },
  {
    id: "watpro",
    name: "Watpro",
    embedUrl: "https://watpro-consultants.vercel.app",
    displayUrl: "https://watpro-consultants.vercel.app",
    badge: "Consulting",
    title: "Watpro Consultants — Industrial Engineering",
    tagline: "Professional engineering consultancy, compliance & project management portal",
    github: "https://github.com/8002salman-ai/watpro-consultants",
    category: "Consulting",
  },
  {
    id: "spotaware",
    name: "SpotAware",
    embedUrl: "https://spotaware-platform.vercel.app",
    displayUrl: "https://spotaware-platform.vercel.app",
    badge: "AI Vision",
    title: "SpotAware Platform — Real-Time Monitoring",
    tagline: "AI-driven spatial awareness, anomaly detection & operational visibility hub",
    github: "https://github.com/8002salman-ai/spotaware-platform",
    category: "AI Platform",
  },
  {
    id: "i-864",
    name: "I-864 Calc",
    embedUrl: "https://i-864-affidavit-support-calculator.vercel.app",
    displayUrl: "https://i-864-affidavit-support-calculator.vercel.app",
    badge: "Legal Tech",
    title: "I-864 Affidavit of Support Calculator",
    tagline: "Automated poverty guidelines calculation & legal compliance tool",
    github: "https://github.com/8002salman-ai/i-864-affidavit-support-calculator",
    category: "Calculator",
  },
];

// Available rotation durations (default 15s as requested by user)
const ROTATION_INTERVALS = [
  { label: "15s", ms: 15 * 1000 },
  { label: "30s", ms: 30 * 1000 },
  { label: "1m", ms: 60 * 1000 },
  { label: "2m", ms: 2 * 60 * 1000 },
];

export function LiveWebsiteCard({ className }: LiveWebsiteCardProps) {
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [zoomMode, setZoomMode] = useState<"fit" | "actual">("fit");
  // Default to 15 seconds interval as requested by user
  const [intervalIndex, setIntervalIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [progressPercent, setProgressPercent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(580);
  const [containerHeight, setContainerHeight] = useState(380);

  const currentSite = SHOWCASE_SITES[activeSiteIndex];
  const currentIntervalMs = ROTATION_INTERVALS[intervalIndex].ms;

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth || 580);
        setContainerHeight(containerRef.current.clientHeight || 380);
      }
    };

    updateDimensions();
    const ro = new ResizeObserver(updateDimensions);
    ro.observe(containerRef.current);
    window.addEventListener("resize", updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Standard target desktop width so the full site layout is completely visible without zoom-in
  const virtualDesktopWidth = 1240;
  const scale =
    zoomMode === "fit"
      ? Math.min(1, Math.max(0.25, containerWidth / virtualDesktopWidth))
      : 1;
  const iframeWidth = zoomMode === "fit" ? virtualDesktopWidth : containerWidth;
  const iframeHeight =
    zoomMode === "fit" ? Math.round(containerHeight / scale) : containerHeight;

  // Auto-rotation timer with visual progress bar (every 10 minutes by default)
  useEffect(() => {
    if (!isAutoRotating) {
      setProgressPercent(0);
      return;
    }

    const stepMs = 100;
    const totalSteps = currentIntervalMs / stepMs;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const percent = Math.min(100, (currentStep / totalSteps) * 100);
      setProgressPercent(percent);

      if (currentStep >= totalSteps) {
        setIframeLoaded(false);
        setActiveSiteIndex((prev) => (prev + 1) % SHOWCASE_SITES.length);
        currentStep = 0;
      }
    }, stepMs);

    return () => clearInterval(progressTimer);
  }, [activeSiteIndex, isAutoRotating, currentIntervalMs]);

  // Embed directly from origin to ensure full React, Tailwind, and JS asset loading with zero CORS issues
  const previewSrc = `${currentSite.embedUrl}?v=${refreshKey}`;

  return (
    <>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#12141e] via-[#0d0e15] to-[#0a0b10] p-4 text-left shadow-2xl transition-all duration-300 hover:border-brand-400/60 hover:shadow-brand-500/10",
          className,
        )}
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-500/15 blur-2xl transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />

        {/* Browser Top Chrome: macOS Controls + Live Showcase Title + 9 Live Sites Counter */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/50" />
            </div>
            <span className="font-display text-[11px] font-semibold text-zinc-300 tracking-wide">
              Live Showcase Browser
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {SHOWCASE_SITES.length} Live Sites
            </span>
          </div>
        </div>

        {/* All 9 Showcase Tabs — 100% visible, completely un-truncated, wrapping cleanly */}
        <div className="py-2.5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-1.5">
            {SHOWCASE_SITES.map((site, idx) => {
              const isActive = activeSiteIndex === idx;
              return (
                <button
                  key={site.id}
                  type="button"
                  onClick={() => {
                    setIframeLoaded(false);
                    setActiveSiteIndex(idx);
                    setProgressPercent(0);
                  }}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-brand-500/25 text-brand-300 font-semibold border border-brand-400/60 shadow-sm shadow-brand-500/20 ring-1 ring-brand-400/30"
                      : "border border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20",
                  )}
                  title={`${site.name} — ${site.title}`}
                >
                  <span
                    className={cn(
                      "text-[9.5px] font-mono",
                      isActive ? "text-brand-300 font-bold" : "opacity-60",
                    )}
                  >
                    #{idx + 1}
                  </span>
                  <span className="whitespace-nowrap font-medium">{site.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dedicated Address Bar & Browser Controls */}
        <div className="flex items-center justify-between gap-2 pt-2.5 pb-1 flex-wrap sm:flex-nowrap">
          {/* Interactive URL bar displaying complete URL */}
          <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3 py-1.5 text-[11.5px] font-mono text-zinc-200 shadow-inner flex-1 min-w-[220px]">
            <span className="text-emerald-400 text-xs shrink-0" title="Secure SSL connection">
              🔒
            </span>
            <a
              href={currentSite.displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-zinc-200 hover:text-brand-300 hover:underline transition-colors flex-1"
              title={`Open full URL: ${currentSite.displayUrl}`}
            >
              {currentSite.displayUrl}
            </a>
            <button
              type="button"
              onClick={() => {
                setIframeLoaded(false);
                setRefreshKey((k) => k + 1);
              }}
              title="Reload live preview"
              className="text-zinc-400 hover:text-white transition-colors shrink-0 p-0.5 rounded hover:bg-white/10"
            >
              <Icon name="clock" className="h-3 w-3" />
            </button>
            <a
              href={currentSite.displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open site in new tab"
              className="text-zinc-400 hover:text-brand-300 transition-colors shrink-0 p-0.5 rounded hover:bg-white/10"
            >
              <Icon name="arrow" className="h-3 w-3 -rotate-45" />
            </a>
          </div>

          {/* Controls: Auto-Rotation Control (15s), Play/Pause, Zoom, Expand */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Auto-Rotation Duration Control (15s / 30s / 1m / 2m) */}
            <button
              type="button"
              onClick={() => {
                setIntervalIndex((prev) => (prev + 1) % ROTATION_INTERVALS.length);
                setProgressPercent(0);
              }}
              title="Change rotation duration"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              <span className="text-amber-400">⏱</span>
              <span>{ROTATION_INTERVALS[intervalIndex].label}</span>
            </button>

            {/* Play / Pause Auto-Rotation */}
            <button
              type="button"
              onClick={() => setIsAutoRotating((r) => !r)}
              title={isAutoRotating ? "Pause rotation" : "Resume auto-rotation"}
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] transition-colors",
                isAutoRotating
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold"
                  : "bg-white/5 text-zinc-400 border-white/10 hover:text-white",
              )}
            >
              {isAutoRotating ? "▶ Auto" : "❚❚ Paused"}
            </button>

            {/* View Zoom Toggle (Fit full desktop site vs 1:1) */}
            <button
              type="button"
              onClick={() => setZoomMode((m) => (m === "fit" ? "actual" : "fit"))}
              title={zoomMode === "fit" ? "Click for 100% view" : "Click to fit entire website"}
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              <span className="text-brand-400">🔍</span>
              <span>{zoomMode === "fit" ? `Fit (${Math.round(scale * 100)}%)` : "100%"}</span>
            </button>

            {/* Expand Button */}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              title="Expand live view"
              className="rounded-md border border-white/10 bg-white/5 p-1.5 text-zinc-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Rotation Progress Bar (indicates progress through current 10 min interval) */}
        {isAutoRotating && (
          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 via-cyan-400 to-emerald-400 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Apple MacBook Pro Luxury Device Chassis */}
        <div className="relative mt-3.5 mx-auto w-full">
          {/* MacBook Display Lid (Top Shell) */}
          <div className="relative rounded-t-2xl sm:rounded-t-[28px] border-2 border-slate-700/70 bg-[#0d0f18] p-2 sm:p-2.5 pb-1 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
            {/* Top Display Bezel with FaceTime Camera & Ambient Sensor */}
            <div className="relative flex items-center justify-center pb-2 pt-0.5">
              <div className="flex items-center gap-1.5 rounded-full bg-[#05060b] px-3 py-0.5 border border-white/10 shadow-inner">
                {/* Camera Lens */}
                <span className="relative flex h-2 w-2 items-center justify-center rounded-full bg-[#171b26] ring-1 ring-white/15">
                  <span className="h-0.5 w-0.5 rounded-full bg-emerald-400 opacity-80" />
                </span>
                {/* Ambient Sensor */}
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Retina Glass Display Screen with Inner Bezel */}
            <div
              ref={containerRef}
              className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full overflow-hidden rounded-lg sm:rounded-xl border border-white/10 bg-black shadow-inner"
            >
              {/* Loading state indicator */}
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#0d0e14] text-zinc-400 z-10 pointer-events-none">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-brand-400 border-t-transparent" />
                  <span className="text-xs font-mono">Loading {currentSite.name} live…</span>
                </div>
              )}

              {/* Embedded live website iframe */}
              <iframe
                key={`${currentSite.id}-${refreshKey}`}
                src={previewSrc}
                title={`${currentSite.name} Live Website Preview`}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                style={{
                  width: `${iframeWidth}px`,
                  height: `${iframeHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                className={cn(
                  "border-0 transition-opacity duration-300 block pointer-events-auto",
                  iframeLoaded ? "opacity-100" : "opacity-0",
                )}
              />

              {/* Overlay hover bar for quick actions */}
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="inline-flex items-center gap-1 rounded-lg bg-black/80 backdrop-blur border border-white/20 px-2 py-1 text-[11px] font-medium text-white shadow-lg hover:bg-black transition-colors"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span>Expand</span>
                </button>
                <a
                  href={currentSite.displayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-2.5 py-1 text-[11px] font-bold text-black shadow-lg hover:brightness-110 transition-all"
                >
                  <span>Visit Site</span>
                  <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
                </a>
              </div>
            </div>
          </div>

          {/* MacBook Lower Base Chassis & Keyboard Lip */}
          <div className="relative mx-auto w-[103%] -left-[1.5%] h-3.5 sm:h-4.5 rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#242836] via-[#161823] to-[#0a0c13] border-t border-white/20 shadow-2xl">
            {/* Signature MacBook Display Open Groove (Thumb notch) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1.5 sm:h-2 w-20 sm:w-28 rounded-b-md bg-[#07090f] border-b border-white/10 shadow-inner" />
            {/* Specular front metallic edge reflection */}
            <div className="absolute inset-x-8 bottom-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          {/* Laptop Base Shadow / Table Surface Glow */}
          <div className="mx-auto w-[88%] h-3.5 bg-black/60 blur-md -mt-1 rounded-full" />
        </div>

        {/* Site Details Bar */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="h-7 w-7 rounded-lg border border-white/10 bg-white/5 p-1 shrink-0 flex items-center justify-center">
              {currentSite.id === "luxedge" ? (
                <img
                  src="/images/projects/luxedge-mark.png"
                  alt="LuxEdge"
                  className="h-full w-full object-contain"
                />
              ) : currentSite.category === "AI Platform" || currentSite.category === "AI Agent" ? (
                <Icon name="spark" className="h-4 w-4 text-brand-300" />
              ) : (
                <Icon name="globe" className="h-4 w-4 text-emerald-400" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="font-display text-xs font-bold text-white truncate">{currentSite.name}</h4>
                <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 text-[8.5px] font-bold text-emerald-400">
                  {currentSite.badge}
                </span>
                <span className="text-zinc-600 text-xs">·</span>
                <span className="text-[10px] text-zinc-400 truncate">
                  Site #{activeSiteIndex + 1} of {SHOWCASE_SITES.length} · Auto-rotating ({ROTATION_INTERVALS[intervalIndex].label})
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                {currentSite.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={currentSite.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <Icon name="github" className="h-3 w-3" />
              <span>Code</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href={currentSite.displayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-400 hover:text-cyan-300 transition-colors"
            >
              <span>Open Website</span>
              <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
            </a>
          </div>
        </div>
      </div>

      {/* Expanded Live Website Modal */}
      {isExpanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${currentSite.name} Live Website Preview`}
            className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsExpanded(false)}
            />

            {/* Modal Dialog Window */}
            <div className="relative flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0c0e14] shadow-2xl">
              {/* Modal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#121520] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="ml-2 font-display text-sm font-bold text-white">
                    {currentSite.title}
                  </span>
                </div>

                {/* Central URL Bar */}
                <a
                  href={currentSite.displayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-xs font-mono text-zinc-300 hover:text-white hover:border-brand-400"
                >
                  <span className="text-emerald-400">🔒</span>
                  <span>{currentSite.displayUrl}</span>
                  <Icon name="arrow" className="h-3 w-3 -rotate-45 text-zinc-400" />
                </a>

                {/* Header Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={currentSite.displayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-1.5 text-xs font-bold text-black hover:brightness-110"
                  >
                    <span>Open in New Tab</span>
                    <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    aria-label="Close preview"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
                  >
                    <Icon name="x" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Project Switcher Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto px-4 py-2 border-b border-white/10 bg-[#0f111a]">
                {SHOWCASE_SITES.map((site, idx) => {
                  const isActive = activeSiteIndex === idx;
                  return (
                    <button
                      key={site.id}
                      type="button"
                      onClick={() => {
                        setActiveSiteIndex(idx);
                        setProgressPercent(0);
                      }}
                      className={cn(
                        "rounded-lg px-3 py-1 text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer",
                        isActive
                          ? "bg-brand-500/25 text-brand-300 font-semibold border border-brand-400/50 shadow-sm"
                          : "border border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:bg-white/10",
                      )}
                    >
                      <span className="text-[10px] font-mono opacity-60">#{idx + 1}</span>
                      <span>{site.name}</span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Fullscreen Iframe */}
              <div className="relative flex-1 bg-black overflow-hidden">
                <iframe
                  src={previewSrc}
                  title={`${currentSite.name} Fullscreen Live Preview`}
                  className="h-full w-full border-0 pointer-events-auto"
                />
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
