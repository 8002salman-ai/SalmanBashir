import { useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";
import { Icon } from "@/components/ui";

export interface YoutubeVideoItem {
  id: string;
  title: string;
  duration: string;
  tag: string;
  thumbnail: string;
  youtubeUrl: string;
  viewsBadge: string;
}

export const YOUTUBE_VIDEOS: YoutubeVideoItem[] = [
  {
    id: "YOBlXCyOh28",
    title: "How Pakistan's Himalayan Pink Salt Products Are Made | Mine to Factory",
    duration: "6:43",
    tag: "Mine to Factory",
    thumbnail: "https://i.ytimg.com/vi/YOBlXCyOh28/hq720.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=YOBlXCyOh28",
    viewsBadge: "Verified Production",
  },
  {
    id: "jnbtdcHif7k",
    title: "How Livestock Salt Licks Are Made & Used Worldwide | Factory to Farm",
    duration: "7:15",
    tag: "Factory to Farm",
    thumbnail: "https://i.ytimg.com/vi/jnbtdcHif7k/hq720.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=jnbtdcHif7k",
    viewsBadge: "Global Sourcing",
  },
  {
    id: "6CdRrnkClVU",
    title: "How Pomegranate Juice Is Made in a 1 Million Bottle Factory",
    duration: "5:20",
    tag: "Industrial Scale",
    thumbnail: "https://i.ytimg.com/vi/6CdRrnkClVU/hq720.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=6CdRrnkClVU",
    viewsBadge: "Factory Production",
  },
  {
    id: "OFLtliQ4BMI",
    title: "Himalayan Koh Salt Block | Premium Ranch CGI Commercial",
    duration: "0:45",
    tag: "Himalayan Koh",
    thumbnail: "https://i.ytimg.com/vi/OFLtliQ4BMI/hq720.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=OFLtliQ4BMI",
    viewsBadge: "CGI Brand Film",
  },
];

export function YoutubeHeroStrip({ className }: { className?: string }) {
  const [activeVideo, setActiveVideo] = useState<YoutubeVideoItem | null>(null);

  return (
    <>
      <div className={cn("mt-6", className)}>
        {/* Strip Header */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-md bg-rose-500/15 border border-rose-500/30 px-1.5 py-0.5 text-rose-400">
            <Icon name="youtube" className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">
              YouTube
            </span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-faint">
            Latest on @TheAIWithSalman
          </span>
          <span className="h-px flex-1 bg-edge" />
          <a
            href="https://www.youtube.com/@TheAIWithSalman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-rose-400 hover:text-rose-300 hover:underline flex items-center gap-1 transition-colors"
          >
            <span>Visit Channel</span>
            <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
          </a>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {YOUTUBE_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative overflow-hidden rounded-xl border border-edge bg-panel/50 p-2 transition-all duration-200 hover:border-rose-500/40 hover:bg-panel-strong hover:shadow-lg hover:shadow-rose-500/5 cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/60">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600/90 text-white shadow-lg backdrop-blur transition-transform duration-200 group-hover:scale-110 group-hover:bg-rose-500">
                    <svg className="h-4 w-4 ml-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-1.5 right-1.5 rounded bg-black/85 px-1.5 py-0.5 text-[9.5px] font-mono font-bold text-white shadow">
                  {video.duration}
                </div>

                {/* Tag Badge */}
                <div className="absolute top-1.5 left-1.5 rounded bg-rose-950/80 border border-rose-500/30 px-1.5 py-0.5 text-[9px] font-semibold text-rose-300 backdrop-blur">
                  {video.tag}
                </div>
              </div>

              {/* Video Title & Metadata */}
              <div className="mt-2 min-w-0">
                <h4 className="line-clamp-2 text-xs font-semibold text-strong leading-snug group-hover:text-rose-300 transition-colors">
                  {video.title}
                </h4>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-faint pt-1 border-t border-edge/40">
                  <span className="truncate">{video.viewsBadge}</span>
                  <span className="inline-flex items-center gap-0.5 text-rose-400 font-medium group-hover:underline">
                    <span>Watch video</span>
                    <Icon name="arrow" className="h-2 w-2 -rotate-45" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Video Lightbox Modal */}
      {activeVideo &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveVideo(null)}
            />

            {/* Modal Dialog Window */}
            <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#0c0e14] shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#121520] px-4 py-3">
                <div className="flex items-center gap-2 min-w-0 pr-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-600 text-white shrink-0">
                    <Icon name="youtube" className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-white">
                      {activeVideo.title}
                    </span>
                    <span className="text-[11px] text-zinc-400">
                      AI With Salman · @TheAIWithSalman
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <span>Open in YouTube</span>
                    <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(null)}
                    aria-label="Close video player"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Icon name="x" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* YouTube Embed Player (Responsive 16:9) */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              {/* Modal Footer Bar */}
              <div className="flex items-center justify-between border-t border-white/10 bg-[#0e1017] px-4 py-2.5 text-xs">
                <span className="text-zinc-400 truncate">
                  Channel: <strong>AI With Salman</strong> ({activeVideo.tag})
                </span>
                <a
                  href="https://www.youtube.com/@TheAIWithSalman?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-rose-400 hover:text-rose-300"
                >
                  <span>Subscribe on YouTube</span>
                  <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
