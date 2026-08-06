import type { MediaItem } from "@/data/projects";
import { EvidencePlaceholder } from "./EvidencePlaceholder";

export function ScreenshotFrame({ media }: { media: MediaItem }) {
  if (!media.src || media.status !== "Available") {
    return <EvidencePlaceholder label={media.alt} />;
  }
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-edge bg-panel">
        <img
          src={media.src}
          alt={media.alt}
          loading="lazy"
          decoding="async"
          width={1600}
          height={1000}
          className="h-auto w-full object-cover"
        />
      </div>
      {media.caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-faint">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
