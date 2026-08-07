import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

export type MediaKind = "youtube" | "mp4" | "image" | "none";

export type MediaPreviewProps = {
  kind: MediaKind;
  title: string;
  description?: string;
  /** YouTube watch/share URL — converted to an embeddable URL. */
  youtubeUrl?: string;
  /** Direct MP4 source, used with a real <video> element. */
  mp4Src?: string;
  /** Poster/thumbnail image for video or the image itself for kind="image". */
  poster?: string;
  /** Privacy / review status shown as a small badge. */
  status?: "Available" | "Placeholder" | "Private";
  className?: string;
};

function toEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    const id = u.searchParams.get("v");
    if (id) return `https://www.youtube.com/embed/${id}`;
    return url;
  } catch {
    return url;
  }
}

/* Reusable, accessible media box used across Journey, Credentials and
   AI Automation pages. Reserves space via aspect-ratio (no layout shift),
   never autoplays, lazy-loads, and shows an honest empty state when no
   media has been provided yet. */
export function MediaPreview({
  kind,
  title,
  description,
  youtubeUrl,
  mp4Src,
  poster,
  status = "Placeholder",
  className,
}: MediaPreviewProps) {
  const hasMedia = kind !== "none" && (youtubeUrl || mp4Src || poster);

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-edge bg-panel", className)}>
      <div className="relative aspect-video w-full bg-panel-strong">
        {kind === "youtube" && youtubeUrl ? (
          <iframe
            src={toEmbedUrl(youtubeUrl)}
            title={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : kind === "mp4" && mp4Src ? (
          <video
            controls
            preload="none"
            poster={poster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={mp4Src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        ) : kind === "image" && poster ? (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
            <Icon name="youtube" className="h-7 w-7 text-faint" strokeWidth={1.4} />
            <p className="text-xs font-medium text-faint">
              Video will be added after final review.
            </p>
          </div>
        )}
      </div>
      {(title || description) && (
        <div className="flex items-start justify-between gap-3 p-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-strong">{title}</p>
            {description && (
              <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-muted">
                {description}
              </p>
            )}
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium",
              hasMedia
                ? "border-brand-500/30 bg-brand-500/10 text-accent-strong"
                : "border-edge-strong bg-panel text-faint",
            )}
          >
            {status}
          </span>
        </div>
      )}
    </div>
  );
}
