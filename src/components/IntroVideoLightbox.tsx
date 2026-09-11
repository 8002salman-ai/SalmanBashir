import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui";
import { introVideo } from "@/data/content";
import { cn } from "@/utils/cn";

const EXIT_MS = 200;

export const SHOWREEL_CHAPTERS = [
  { time: 0, label: "01 Intro", title: "Executive Introduction", desc: "Salman Bashir & Core Philosophy" },
  { time: 8, label: "02 Marketplaces", title: "Multi-Marketplace Ops", desc: "eBay · TikTok Shop · Etsy · Mercari · Depop" },
  { time: 18, label: "03 Sourcing & Freight", title: "Global Supply Chain", desc: "Supplier Vetting · Ocean Freight · Customs" },
  { time: 27, label: "04 AI & Systems", title: "AI Agents & Custom ERP", desc: "Hermes AI Agent · Embani ERP · Automation" },
  { time: 36, label: "05 Profit & COGS", title: "Financial Profit Audits", desc: "Unit Economics · Fee Audits · True Margins" },
  { time: 44, label: "06 Consulting", title: "Hands-on Consulting", desc: "Floor Work · Team Training · Scalable SOPs" },
  { time: 52, label: "07 Outro & CTA", title: "Let's Build Together", desc: "Direct Consultation · Worldwide Remote" },
];

export function IntroVideoLightbox({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60);

  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);

  // Close lightbox on Escape key and prevent background scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, [open]);

  const close = () => {
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setClosing(false);
      triggerRef.current?.focus();
    }, EXIT_MS);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    setCurrentTime(curr);
    
    // Determine which chapter is active
    let currentIdx = 0;
    for (let i = 0; i < SHOWREEL_CHAPTERS.length; i++) {
      if (curr >= SHOWREEL_CHAPTERS[i].time) {
        currentIdx = i;
      }
    }
    setActiveChapter(currentIdx);
  };

  const seekTo = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(() => {});
    }
  };

  const poster = introVideo.posterUrl || "/images/intro-video-poster.jpg";
  const videoSrc = introVideo.mp4Url || "/intro-video.mp4";

  return (
    <>
      {/* Luxury Interactive Trigger Card */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        className={cn(
          "group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-amber-500/20 bg-panel/90 text-left transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_50px_rgba(245,158,11,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
          className,
        )}
      >
        {/* Aspect 16:9 Video Canvas Box */}
        <span className="relative block aspect-video w-full overflow-hidden bg-slate-950">
          {/* Master Poster Image with smooth hover scale */}
          <img
            src={poster}
            alt="Salman Bashir - 60-Second Executive Showreel"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Cinematic Vignette Overlays */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

          {/* Top Bar Badges */}
          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-3 py-1 text-[11px] font-semibold tracking-wider text-amber-300 backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              4K MASTER SHOWREEL
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md">
              <Icon name="clock" className="h-3 w-3 text-amber-400" />
              01:00 RUNTIME
            </span>
          </span>

          {/* Grand Center Play Button with Floating Pulse Rings */}
          <span className="absolute inset-0 flex items-center justify-center z-10">
            <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
              {/* Outer Glowing Ripple */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400/25 animate-ping duration-1000 motion-reduce:animate-none" />
              
              {/* Secondary Halo */}
              <span className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/30 to-transparent blur-md group-hover:opacity-100 opacity-70 transition-opacity" />
              
              {/* Center Glass Button */}
              <span className="relative flex h-full w-full items-center justify-center rounded-full border border-amber-300/60 bg-gradient-to-b from-amber-500/90 to-yellow-600/90 text-slate-950 shadow-2xl shadow-amber-500/40 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <Icon name="play" className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 fill-current text-slate-950" />
              </span>
            </span>
          </span>

          {/* Bottom Title & Chapters Preview */}
          <span className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col gap-2 z-10 pointer-events-none">
            <span className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-white font-display text-base sm:text-lg font-bold tracking-tight drop-shadow-md">
                <span>Watch The 60-Second Walkthrough</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-amber-300/90 bg-amber-500/20 border border-amber-400/30 rounded-full px-2.5 py-0.5 backdrop-blur-md">
                Click to expand <Icon name="arrow" className="h-3 w-3" />
              </span>
            </span>

            {/* Micro Chapter Pills Preview */}
            <span className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
                01 Marketplaces
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
                02 Sourcing & Freight
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
                03 AI & ERP Systems
              </span>
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-200 backdrop-blur-sm border border-white/10">
                04 Profit Audits
              </span>
            </span>
          </span>
        </span>
      </button>

      {/* Full-Screen Cinema Lightbox Modal */}
      {open &&
        createPortal(
          <div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-label="Salman Bashir 60-Second Executive Showreel"
            className={cn(
              "fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto p-2 sm:p-4 md:p-6 transition-all duration-300",
              closing ? "opacity-0" : "opacity-100",
            )}
          >
            {/* Backdrop Blur */}
            <button
              type="button"
              aria-label="Close video theatre"
              onClick={close}
              className={cn(
                "fixed inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-300",
                closing && "opacity-0",
              )}
            />

            {/* Cinema Chassis Container */}
            <div
              className={cn(
                "relative z-10 my-auto w-full max-w-5xl rounded-2xl sm:rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-[0_25px_70px_rgba(0,0,0,0.85)] transition-all duration-300 overflow-hidden",
                closing ? "scale-[0.96] opacity-0" : "scale-100 opacity-100",
              )}
            >
              {/* Cinema Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400">
                    <Icon name="play" className="h-3.5 w-3.5 fill-current" />
                  </span>
                  <div>
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide">
                      SALMAN BASHIR — EXECUTIVE SHOWREEL
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-400">
                      Chapter {activeChapter + 1} of {SHOWREEL_CHAPTERS.length}: {SHOWREEL_CHAPTERS[activeChapter].title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-flex rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-slate-400">
                    Press <kbd className="text-white font-bold ml-1">ESC</kbd>
                  </span>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close showreel"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-amber-400/50 hover:bg-amber-500/20 hover:text-white"
                  >
                    <Icon name="x" className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={poster}
                  controls
                  autoPlay
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={() => {
                    if (videoRef.current) setDuration(videoRef.current.duration || 60);
                  }}
                  className="h-full w-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>

              {/* Interactive Chapter Navigation Bar */}
              <div className="p-3 sm:p-5 border-t border-white/10 bg-slate-950">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Interactive Chapter Index
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, "0")} / {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, "0")}
                  </span>
                </div>

                {/* Chapter Buttons Scrollable Row */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {SHOWREEL_CHAPTERS.map((ch, idx) => {
                    const isActive = activeChapter === idx;
                    return (
                      <button
                        key={ch.time}
                        type="button"
                        onClick={() => seekTo(ch.time)}
                        className={cn(
                          "group/ch flex-shrink-0 flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-all",
                          isActive
                            ? "border-amber-400 bg-amber-500/15 text-white shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                            : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-slate-200",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-mono font-bold",
                            isActive ? "bg-amber-400 text-slate-950" : "bg-white/10 text-slate-300",
                          )}
                        >
                          {idx + 1}
                        </span>
                        <div>
                          <p className="text-[11px] font-semibold leading-tight line-clamp-1">
                            {ch.title}
                          </p>
                          <p className="text-[9px] font-mono text-slate-400 leading-tight">
                            0:{String(ch.time).padStart(2, "0")}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
