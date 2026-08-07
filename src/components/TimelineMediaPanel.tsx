import { MediaPreview } from "@/components/MediaPreview";
import type { JourneyPhase } from "@/data/journeyPhases";

/* Media + video panel shown inside an expanded journey timeline entry.
   Two reserved-space boxes side by side on wider screens, stacked on
   mobile — no layout shift regardless of whether real media exists yet. */
export function TimelineMediaPanel({ phase }: { phase: JourneyPhase }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <MediaPreview
        kind={phase.media.type === "image" ? "image" : "none"}
        title={phase.media.title}
        poster={phase.media.src}
        status={phase.media.status}
        description="Snapshot"
      />
      <MediaPreview
        kind={phase.video.type === "video" && phase.video.youtubeUrl ? "youtube" : "none"}
        title={phase.video.title}
        youtubeUrl={phase.video.youtubeUrl}
        status={phase.video.status}
        description="Video walkthrough"
      />
    </div>
  );
}
