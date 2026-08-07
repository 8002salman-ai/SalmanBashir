import { MediaPreview } from "@/components/MediaPreview";
import type { MediaPlaceholder } from "@/data/journeyPhases";

/* Video card for a single journey phase. Wraps MediaPreview with the phase
   title so the card reads consistently on /journey and in the AI Automation
   cross-links. No autoplay, lazy-loaded, accessible controls. */
export function JourneyVideoCard({
  phaseTitle,
  video,
}: {
  phaseTitle: string;
  video: MediaPlaceholder;
}) {
  return (
    <MediaPreview
      kind={video.type === "video" && video.youtubeUrl ? "youtube" : "none"}
      title={video.title || `${phaseTitle} — video walkthrough`}
      description={`Related to: ${phaseTitle}`}
      youtubeUrl={video.youtubeUrl}
      status={video.status}
    />
  );
}
