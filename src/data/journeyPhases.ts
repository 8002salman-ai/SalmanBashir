import type { IconName } from "@/components/ui";

export type MediaPlaceholder = {
  type: "image" | "video" | "none";
  src?: string;
  youtubeUrl?: string;
  poster?: string;
  title: string;
  status: "Available" | "Placeholder";
};

export type JourneyPhase = {
  id: string;
  order: number;
  title: string;
  periodLabel: string;
  role: string;
  summary: string;
  skills: string[];
  tools: string[];
  relatedProjects: string[];
  details: string[];
  media: MediaPlaceholder;
  video: MediaPlaceholder;
  icon: IconName;
};

/* Eight career phases, described honestly in broad terms — no invented
   employers, exact dates or performance numbers. Each phase links to
   related project data by slug (see src/data/projects.ts) rather than
   duplicating content. */
export const journeyPhases: JourneyPhase[] = [
  {
    id: "online-operations-and-support",
    order: 1,
    title: "Online Operations and Support",
    periodLabel: "Getting started",
    role: "Online · Hands-on",
    summary:
      "The starting point — learning how online selling actually works by doing it: product research, first listings, buyer communication and the basics of fees, shipping and payouts.",
    skills: [
      "Product research",
      "Basic listing creation",
      "Buyer communication and support",
      "Order handling fundamentals",
    ],
    tools: ["eBay", "Depop", "Email", "Spreadsheets"],
    relatedProjects: ["multi-marketplace-operations"],
    details: [
      "First hands-on exposure to online selling — researching products before listing them, not guessing.",
      "Learned how buyer support, order handling and basic dispute resolution work in practice.",
      "Built the habit of tracking fees, shipping cost and payouts from day one.",
    ],
    media: { type: "none", title: "Early operations snapshot", status: "Placeholder" },
    video: { type: "none", title: "Online operations walkthrough", status: "Placeholder" },
    icon: "globe",
  },
  {
    id: "marketplace-operations",
    order: 2,
    title: "Marketplace Operations",
    periodLabel: "Scaling across channels",
    role: "Marketplace Operations · Remote",
    summary:
      "Running real sales across multiple marketplaces at once — listings, pricing, inventory, orders, returns and payouts, each with its own fee structure and rules.",
    skills: [
      "Multi-marketplace listing and pricing",
      "Inventory and order management",
      "Returns and dispute handling",
      "Fee and payout reconciliation",
      "Profit and COGS tracking",
      "SOP documentation",
    ],
    tools: ["eBay", "Depop", "Mercari", "Poshmark", "Etsy", "TikTok Shop", "AliExpress"],
    relatedProjects: ["multi-marketplace-operations", "himalayan-koh"],
    details: [
      "Ran listings, pricing and inventory consistently across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress.",
      "Reconciled marketplace fees and payouts against recorded sales to track true profit.",
      "Documented SOPs so operations stayed consistent across channels and could be handed off.",
    ],
    media: { type: "none", title: "Marketplace operations dashboard", status: "Placeholder" },
    video: { type: "none", title: "Marketplace operations overview", status: "Placeholder" },
    icon: "cart",
  },
  {
    id: "sourcing-and-product-coordination",
    order: 3,
    title: "Sourcing and Product Coordination",
    periodLabel: "Working with product",
    role: "Sourcing & Operations · Remote",
    summary:
      "Moving upstream from selling into sourcing — comparing suppliers, planning samples and MOQs, and coordinating packaging and shipments before products ever reach a listing.",
    skills: [
      "Supplier research and comparison",
      "MOQ and sample planning",
      "Packaging coordination",
      "Landed cost calculation",
      "Catalogue planning",
    ],
    tools: ["Alibaba", "AliExpress", "Invoices & packing lists", "Freight coordination"],
    relatedProjects: ["himalayan-koh"],
    details: [
      "Compared suppliers on Alibaba and AliExpress against price, MOQ, sample quality and communication reliability.",
      "Planned landed cost — product, freight, duties and fees — before committing to an order.",
      "Coordinated packaging and shipment timelines to keep wholesale and retail catalogues stocked.",
    ],
    media: { type: "none", title: "Sourcing comparison sheet", status: "Placeholder" },
    video: { type: "none", title: "Sourcing and coordination walkthrough", status: "Placeholder" },
    icon: "box",
  },
  {
    id: "google-sheets-and-business-workflows",
    order: 4,
    title: "Google Sheets and Business Workflows",
    periodLabel: "Bringing order to data",
    role: "Operations Systems · Remote",
    summary:
      "Turning scattered exports and manual tracking into controlled Google Sheets workspaces — safe imports, monthly tabs, COGS and profit tracking that could actually be trusted.",
    skills: [
      "Sales workspace design",
      "COGS and profit formulas",
      "Controlled import workflows",
      "Payout reconciliation",
      "Process mapping and SOPs",
    ],
    tools: ["Google Sheets", "Google Workspace"],
    relatedProjects: ["google-sheets-sales-workspace"],
    details: [
      "Designed a controlled sales workspace with safe imports and an explicit review step before data is committed.",
      "Structured monthly tabs so history stays clean, auditable and easy to report from.",
      "Built COGS, fee and profit formulas that are simple enough for a team to maintain.",
    ],
    media: { type: "none", title: "Google Sheets workspace preview", status: "Placeholder" },
    video: { type: "none", title: "Sheets workflow walkthrough", status: "Placeholder" },
    icon: "sheet",
  },
  {
    id: "erp-and-internal-systems",
    order: 5,
    title: "ERP and Internal Systems",
    periodLabel: "Designing systems",
    role: "Product & Systems · Project-based",
    summary:
      "Applying operational understanding to the design of internal systems — ERP workflows, roles and permissions, evidence chains and dashboards built around how the business actually moves money and stock.",
    skills: [
      "ERP workflow design",
      "Business logic and data structure",
      "Roles and permissions planning",
      "Evidence and review workflows",
      "Dashboard and reporting design",
    ],
    tools: ["Supabase", "Google Sheets", "Marketplace APIs", "Next.js"],
    relatedProjects: ["embani-erp", "spotaware"],
    details: [
      "Mapped financial workflows — sales, COGS, fees, tax, payouts — before any interface was built.",
      "Designed roles, permissions and an evidence chain so reporting stays trustworthy and reviewable.",
      "Directed data structure and dashboard design around real operator scenarios, not theoretical ones.",
    ],
    media: { type: "none", title: "ERP workflow diagram", status: "Placeholder" },
    video: { type: "none", title: "ERP and internal systems walkthrough", status: "Placeholder" },
    icon: "layers",
  },
  {
    id: "ai-assisted-websites-and-platforms",
    order: 6,
    title: "AI-Assisted Websites and Platforms",
    periodLabel: "Building the tools",
    role: "Product & Systems · Project-based",
    summary:
      "Using AI-assisted development to turn product plans and workflow designs into working websites and platforms — prototyped, tested and refined against real operator scenarios.",
    skills: [
      "Product vision and requirements",
      "Interface planning and UX direction",
      "AI-assisted implementation",
      "Testing against real workflows",
      "React, TypeScript, Supabase, Vercel",
    ],
    tools: ["React", "TypeScript", "Supabase", "Vercel", "GitHub"],
    relatedProjects: ["embani-erp", "spotaware"],
    details: [
      "Planned product requirements and UX direction from the operator's side, then used AI-assisted development to build working prototypes.",
      "Tested interfaces and workflows against real operational scenarios before committing to a full build.",
      "Worked across React, TypeScript, Supabase, Vercel and GitHub as the practical delivery stack.",
    ],
    media: { type: "none", title: "AI-assisted build preview", status: "Placeholder" },
    video: { type: "none", title: "AI-assisted development walkthrough", status: "Placeholder" },
    icon: "cpu",
  },
  {
    id: "hermes-ai-agent-and-automation",
    order: 7,
    title: "Hermes AI Agent and Automation",
    periodLabel: "In development",
    role: "AI Automation · In Development",
    summary:
      "The current focus — developing Hermes, a locally connected AI operations agent designed to monitor websites, companies, workflows, approvals, integrations and system status from one workspace.",
    skills: [
      "AI agent and workflow design",
      "Automation planning",
      "System and status monitoring design",
      "Approval and integration workflow design",
    ],
    tools: ["AI APIs", "Supabase", "Google Sheets automation", "Marketplace APIs"],
    relatedProjects: [],
    details: [
      "Hermes is being developed as a locally connected AI operations agent — not a live product yet.",
      "The goal is one workspace to monitor websites, companies, workflows, approvals, integrations and system status.",
      "See the full breakdown of what is live, in development and planned on the AI & Automation page.",
    ],
    media: { type: "none", title: "Hermes AI Agent workspace preview", status: "Placeholder" },
    video: { type: "none", title: "Hermes AI Agent walkthrough", status: "Placeholder" },
    icon: "spark",
  },
  {
    id: "consulting-and-practical-training",
    order: 8,
    title: "Consulting and Practical Training",
    periodLabel: "Sharing the work",
    role: "Consulting & Training · Remote",
    summary:
      "Sharing what was learned operationally — marketplace training, profit and COGS sessions, workflow reviews and system planning for sellers and small teams, delivered remotely and honestly.",
    skills: [
      "Workflow reviews",
      "Marketplace training delivery",
      "Profit and COGS coaching",
      "System planning consultations",
      "Zoom and small-group training",
    ],
    tools: ["Zoom", "Google Meet", "Google Sheets"],
    relatedProjects: [],
    details: [
      "Delivers practical, honest training built from real operational experience — not theory.",
      "Runs workflow reviews and profit/COGS sessions for sellers who want clarity, not guesswork.",
      "Supports remote clients connected to the United States, United Kingdom, Norway, Sweden and international markets.",
    ],
    media: { type: "none", title: "Training session preview", status: "Placeholder" },
    video: { type: "none", title: "Training session walkthrough", status: "Placeholder" },
    icon: "book",
  },
];

export function getJourneyPhase(id: string) {
  return journeyPhases.find((p) => p.id === id);
}

/* Four curated stages for the homepage preview — broader groupings of the
   eight detailed phases above, matching the four business pillars. */
export const journeyHomePreview: {
  title: string;
  desc: string;
  icon: IconName;
  anchor: string;
}[] = [
  {
    title: "Marketplace Operations",
    desc: "Hands-on listings, orders, inventory, fees and payouts across eBay, Depop, Mercari, Etsy, TikTok Shop and more.",
    icon: "cart",
    anchor: "marketplace-operations",
  },
  {
    title: "Sourcing and Product Work",
    desc: "Supplier comparison, MOQ and sample planning, packaging and shipment coordination.",
    icon: "box",
    anchor: "sourcing-and-product-coordination",
  },
  {
    title: "Business Systems",
    desc: "Google Sheets workspaces, ERP workflows, dashboards and internal tools built around real operations.",
    icon: "layers",
    anchor: "erp-and-internal-systems",
  },
  {
    title: "AI and Automation",
    desc: "AI-assisted websites, platforms and the Hermes AI Agent — currently in development.",
    icon: "cpu",
    anchor: "hermes-ai-agent-and-automation",
  },
];
