import type { IconName } from "@/components/ui";

export const hermes = {
  name: "Hermes AI Agent",
  status: "In Development" as const,
  description:
    "A locally connected AI operations agent being developed to monitor websites, companies, workflows, approvals, integrations and system status from one workspace.",
  journeyAnchor: "/journey#hermes-ai-agent-and-automation",
};

export type CapabilityStatus = "Current" | "In Development" | "Planned";

export type Capability = {
  title: string;
  desc: string;
  icon: IconName;
};

export type CapabilityGroup = {
  status: CapabilityStatus;
  heading: string;
  intro: string;
  items: Capability[];
};

/* Grouped honestly under Current / In Development / Planned — nothing
   planned is presented as live. */
export const capabilityGroups: CapabilityGroup[] = [
  {
    status: "Current",
    heading: "Current",
    intro: "Automation and AI-assisted work already in active use today.",
    items: [
      {
        title: "Google Sheets Workflow Automation",
        desc: "Controlled sales imports, monthly tabs and review-before-import workflows already running for real marketplace data.",
        icon: "sheet",
      },
      {
        title: "AI-Assisted Website and Platform Development",
        desc: "Product planning, workflow design and AI-assisted implementation used to build Embani ERP, SpotAware and this site.",
        icon: "cpu",
      },
      {
        title: "Marketplace Operations Automation",
        desc: "Repetitive marketplace tasks — sales imports, order tracking, payout matching — automated with Google Sheets as the practical first layer.",
        icon: "bolt",
      },
    ],
  },
  {
    status: "In Development",
    heading: "In Development",
    intro: "Being actively built and tested — not yet live in production.",
    items: [
      {
        title: "Hermes AI Agent",
        desc: hermes.description,
        icon: "spark",
      },
      {
        title: "Embani ERP",
        desc: "One clear system for accounting, profit tracking and daily marketplace operations, with Google Sheets and eBay integration workflows.",
        icon: "layers",
      },
      {
        title: "SpotAware",
        desc: "A business operations and workflow platform structuring sales, inventory, partners and daily operations around real team responsibilities.",
        icon: "settings",
      },
    ],
  },
  {
    status: "Planned",
    heading: "Planned",
    intro: "Concepts and directions being scoped for future development — nothing here is live yet.",
    items: [
      {
        title: "Website Status Monitoring",
        desc: "A planned concept for Hermes to check uptime and basic health across managed websites.",
        icon: "globe",
      },
      {
        title: "SEO Health Summaries",
        desc: "Planned lightweight SEO health summaries surfaced from within the Hermes workspace.",
        icon: "trend",
      },
      {
        title: "Crawling Concepts",
        desc: "Early concepts for controlled site crawling to support status and content checks.",
        icon: "compass",
      },
      {
        title: "Company Overview Dashboard",
        desc: "A planned single view of connected companies, projects and their current status.",
        icon: "briefcase",
      },
      {
        title: "Approvals Workflow",
        desc: "Planned approval routing so decisions and sign-offs happen in one place instead of scattered chats.",
        icon: "check",
      },
      {
        title: "API Status Monitoring",
        desc: "A planned view of connected API and integration health across systems.",
        icon: "cpu",
      },
      {
        title: "WhatsApp Workflow Planning",
        desc: "Early planning for structured WhatsApp-based workflow notifications — concept stage only.",
        icon: "message",
      },
      {
        title: "AI Workspace Connections",
        desc: "Planned connections between Hermes and other AI-assisted tools used across projects.",
        icon: "spark",
      },
      {
        title: "Performance Summaries",
        desc: "Planned plain-language summaries of operational and system performance.",
        icon: "chart",
      },
      {
        title: "Multiple Website Management",
        desc: "A planned direction for managing several connected websites from a single Hermes workspace.",
        icon: "layers",
      },
    ],
  },
];
