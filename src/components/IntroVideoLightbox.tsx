import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { MediaPreview } from "@/components/MediaPreview";
import { introVideo } from "@/data/content";
import { cn } from "@/utils/cn";

/* Animated play trigger + accessible lightbox for the hero intro video.
   Plays the 60-second showreel once a URL is set in src/data/content.ts
   (introVideo.youtubeUrl for YouTube, introVideo.mp4Url for a direct MP4).
   Until then it shows MediaPreview's honest "coming soon" empty state. */
export function IntroVideoLightbox({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [mp4Failed, setMp4Failed] = useState(false);
  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  // If the MP4 file isn't there yet (drop-in path), show the placeholder
  // instead of a broken player until the file is actually uploaded.
  const kind: "youtube" | "mp4" | "none" =
    introVideo.youtubeUrl
      ? "youtube"
      : introVideo.mp4Url && !mp4Failed
        ? "mp4"
        : "none";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setMp4Failed(false);
    triggerRef.current?.focus();
  };

  const src = introVideo.mp4Url || undefined;
  const poster = introVideo.posterUrl || undefined;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={dialogId}
        className={cn(
          "group w-full overflow-hidden rounded-2xl border border-edge-strong bg-gradient-to-b from-panel to-panel/40 text-left transition-all hover:border-brand-400/60 hover:shadow-lg hover:shadow-brand-500/10",
          className,
        )}
      >
        {/* Muted autoplay showreel preview — loops silently in the hero,
            full sound + lightbox on click. Decorative: hidden from AT. */}
        <span className="relative block aspect-video w-full overflow-hidden bg-panel-strong">
          {src ? (
            <video
              src={src}
              poster={poster}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center">
              <Icon name="youtube" className="h-8 w-8 text-faint" strokeWidth={1.4} />
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute bottom-2.5 left-2.5 flex items-center gap-2">
            <span className="relative flex h-10 w-10 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-brand-400/40 motion-reduce:animate-none" />
              <span className="relative flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-gold-accent text-black shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
                <Icon name="play" className="h-5 w-5 translate-x-[1px]" />
              </span>
            </span>
            <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
              Showreel
            </span>
          </span>
        </span>
        <span className="block p-4">
          <span className="block font-display text-sm font-semibold text-strong sm:text-base">
            Watch the 60-second intro
          </span>
          <span className="mt-0.5 block text-xs leading-snug text-muted">
            How I actually work — in my own words.
          </span>
        </span>
      </button>

      {open && (
        <div
          id={dialogId}
          role="dialog"
          aria-modal="true"
          aria-label={introVideo.title}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up"
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={close}
            className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl rounded-2xl border border-edge-strong bg-bg-soft shadow-2xl">
            <button
              type="button"
              onClick={close}
              aria-label="Close video"
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-edge-strong bg-panel-strong text-soft shadow-lg transition-colors hover:text-strong"
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
            <div className="p-4 sm:p-5">
              <MediaPreview
                kind={kind}
                title={introVideo.title}
                description={introVideo.description}
                youtubeUrl={introVideo.youtubeUrl || undefined}
                mp4Src={introVideo.mp4Url || undefined}
                poster={introVideo.posterUrl || undefined}
                onVideoError={() => setMp4Failed(true)}
                status={kind === "none" ? "Placeholder" : "Available"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
