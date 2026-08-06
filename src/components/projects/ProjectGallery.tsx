import type { MediaItem } from "@/data/projects";
import { ScreenshotFrame } from "./ScreenshotFrame";

export function ProjectGallery({ media }: { media: MediaItem[] }) {
  if (media.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {media.map((m, i) => (
        <ScreenshotFrame key={`${m.alt}-${i}`} media={m} />
      ))}
    </div>
  );
}
