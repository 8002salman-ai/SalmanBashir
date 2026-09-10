import type { IconName } from "@/components/ui";
import type { Tone } from "@/components/SectionTone";

export type MediaItem = {
  title: string;
  description: string;
  /** YouTube watch/share URL. Empty until a real video exists. */
  youtubeUrl?: string;
  /** Direct MP4 source. Empty until a real file exists. */
  mp4Src?: string;
  /** Poster / thumbnail path under /public. */
  poster?: string;
  /** Journey phase this piece relates to, when relevant. */
  relatedPhase?: string;
  status: "Available" | "Placeholder" | "Private";
};

export type MediaCollection = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
  items: MediaItem[];
};

/* No invented videos, thumbnails or view counts. Each collection ships with
   an empty item list and renders its honest empty state until real media is
   recorded and reviewed. */
export const mediaCollections: MediaCollection[] = [
  {
    id: "vlogs",
    title: "Vlogs & Production Films",
    description:
      "Factory tours, mining extractions, industrial supply chain operations, and brand films.",
    icon: "youtube",
    tone: "rose",
    items: [
      {
        title: "How Pakistan's Himalayan Pink Salt Products Are Made | Mine to Factory",
        description:
          "Behind-the-scenes look at Himalayan pink salt extraction, sorting, artisanal carving, and worldwide export pipelines.",
        youtubeUrl: "https://www.youtube.com/watch?v=YOBlXCyOh28",
        status: "Available",
      },
      {
        title: "How Livestock Salt Licks Are Made & Used Worldwide | Factory to Farm",
        description:
          "High-pressure hydraulic block pressing, animal trace-mineral formulations, and global agricultural distribution.",
        youtubeUrl: "https://www.youtube.com/watch?v=jnbtdcHif7k",
        status: "Available",
      },
      {
        title: "How Pomegranate Juice Is Made in a 1 Million Bottle Factory",
        description:
          "Industrial-scale food processing, automated extraction, pasteurization, and high-speed bottling assembly lines.",
        youtubeUrl: "https://www.youtube.com/watch?v=6CdRrnkClVU",
        status: "Available",
      },
      {
        title: "Himalayan Koh Salt Block | Premium Ranch CGI Commercial",
        description:
          "High-end CGI brand commercial featuring Himalayan Koh natural mineral lick blocks in rugged mountain ranch environments.",
        youtubeUrl: "https://www.youtube.com/watch?v=OFLtliQ4BMI",
        status: "Available",
      },
    ],
  },
  {
    id: "build-logs",
    title: "Build Logs",
    description:
      "Walkthroughs of systems as they come together: ERP screens, dashboards, sheets and AI workflows.",
    icon: "layers",
    tone: "sky",
    items: [],
  },
  {
    id: "training-clips",
    title: "Training Clips",
    description:
      "Short lessons pulled from live sessions — listings, pricing, COGS and payout reconciliation.",
    icon: "book",
    tone: "amber",
    items: [],
  },
  {
    id: "travel",
    title: "Travel",
    description:
      "Sourcing trips, supplier visits and the places the work has taken me.",
    icon: "globe",
    tone: "emerald",
    items: [],
  },
  {
    id: "activity",
    title: "Extra Activity",
    description:
      "Everything outside the desk — community, events and the rest of the picture.",
    icon: "users",
    tone: "indigo",
    items: [],
  },
];

export const mediaEmptyState =
  "Video will be added after final review.";
