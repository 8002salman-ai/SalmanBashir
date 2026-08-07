import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { MediaPreview } from "@/components/MediaPreview";
import { introVideo } from "@/data/content";
import { cn } from "@/utils/cn";

/* Animated play trigger + accessible lightbox for the hero intro video.
   Uses MediaPreview's honest empty state until a real video URL is set
   in src/data/content.ts (introVideo.youtubeUrl). */
export function IntroVideoLightbox({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

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
    triggerRef.current?.focus();
  };

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
          "group inline-flex items-center gap-3 rounded-full border border-edge-strong bg-panel py-1.5 pl-1.5 pr-4 text-sm font-medium text-strong transition-colors hover:border-brand-400/60 hover:bg-panel-strong",
          className,
        )}
      >
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400/50 motion-reduce:animate-none" />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-gold-accent text-black shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
            <Icon name="play" className="h-3.5 w-3.5 translate-x-[1px]" />
          </span>
        </span>
        Watch Intro
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
                kind={introVideo.youtubeUrl ? "youtube" : "none"}
                title={introVideo.title}
                description={introVideo.description}
                youtubeUrl={introVideo.youtubeUrl || undefined}
                status={introVideo.youtubeUrl ? "Available" : "Placeholder"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
