import type { IconName } from "@/components/ui";

export type SkillLevel = "Hands-on" | "Operational" | "Building" | "Learning";

export type Skill = {
  name: string;
  level: SkillLevel;
};

export type SkillGroup = {
  id: string;
  title: string;
  desc: string;
  icon: IconName;
  skills: Skill[];
  relatedProjects: string[];
};

/* Honest, qualitative skill levels — no percentage bars or invented scores.
   "Hands-on" = repeated real-world use. "Operational" = used to run live
   workflows. "Building" = actively developing/prototyping with it.
   "Learning" = early or growing familiarity. */
export const skillGroups: SkillGroup[] = [
  {
    id: "marketplace-operations",
    title: "Marketplace Operations",
    desc: "Running real sales across multiple marketplaces — listings, pricing, inventory, orders, returns, payouts and profit tracking.",
    icon: "cart",
    relatedProjects: ["multi-marketplace-operations", "himalayan-koh"],
    skills: [
      { name: "eBay", level: "Hands-on" },
      { name: "Depop", level: "Hands-on" },
      { name: "Mercari", level: "Hands-on" },
      { name: "Poshmark", level: "Operational" },
      { name: "Etsy", level: "Operational" },
      { name: "TikTok Shop", level: "Operational" },
      { name: "AliExpress", level: "Operational" },
      { name: "Listings and cataloguing", level: "Hands-on" },
      { name: "Pricing strategy", level: "Hands-on" },
      { name: "Inventory management", level: "Hands-on" },
      { name: "Order and returns handling", level: "Hands-on" },
      { name: "Payout reconciliation", level: "Hands-on" },
      { name: "COGS and profit tracking", level: "Hands-on" },
      { name: "SOP documentation", level: "Operational" },
    ],
  },
  {
    id: "sourcing-and-product-operations",
    title: "Sourcing and Product Operations",
    desc: "Comparing suppliers, planning samples and MOQs, and coordinating packaging, catalogues and shipments before product reaches a listing.",
    icon: "box",
    relatedProjects: ["himalayan-koh"],
    skills: [
      { name: "Alibaba sourcing", level: "Operational" },
      { name: "Supplier comparison", level: "Operational" },
      { name: "MOQ planning", level: "Operational" },
      { name: "Sample coordination", level: "Operational" },
      { name: "Packaging coordination", level: "Operational" },
      { name: "Landed cost calculation", level: "Operational" },
      { name: "Shipment coordination", level: "Operational" },
      { name: "Catalogue planning", level: "Operational" },
      { name: "Wholesale workflows", level: "Operational" },
      { name: "Retail workflows", level: "Operational" },
    ],
  },
  {
    id: "business-systems",
    title: "Business Systems",
    desc: "Turning scattered spreadsheets and manual steps into ERP workflows, dashboards and internal tools that match how the business runs.",
    icon: "layers",
    relatedProjects: ["embani-erp", "spotaware", "google-sheets-sales-workspace"],
    skills: [
      { name: "ERP workflow design", level: "Building" },
      { name: "Dashboard design", level: "Building" },
      { name: "Google Sheets systems", level: "Hands-on" },
      { name: "Process mapping", level: "Operational" },
      { name: "Business logic design", level: "Building" },
      { name: "Internal tool planning", level: "Building" },
      { name: "Roles and permissions", level: "Building" },
      { name: "Evidence workflows", level: "Building" },
      { name: "Payout reconciliation systems", level: "Operational" },
    ],
  },
  {
    id: "ai-assisted-development",
    title: "AI-Assisted Development",
    desc: "Planning product vision and workflows, then using AI-assisted implementation to build and test working prototypes.",
    icon: "cpu",
    relatedProjects: ["embani-erp", "spotaware"],
    skills: [
      { name: "Product vision", level: "Building" },
      { name: "Workflow design", level: "Building" },
      { name: "Interface planning", level: "Building" },
      { name: "Testing", level: "Building" },
      { name: "React", level: "Building" },
      { name: "TypeScript", level: "Building" },
      { name: "Supabase", level: "Building" },
      { name: "Vercel", level: "Building" },
      { name: "GitHub", level: "Building" },
      { name: "API planning", level: "Building" },
    ],
  },
  {
    id: "consulting-and-training",
    title: "Consulting and Training",
    desc: "Sharing hands-on experience through workflow reviews, marketplace training and system planning sessions.",
    icon: "book",
    relatedProjects: [],
    skills: [
      { name: "Workflow reviews", level: "Hands-on" },
      { name: "Marketplace training", level: "Hands-on" },
      { name: "Profit and COGS sessions", level: "Hands-on" },
      { name: "System planning consultations", level: "Operational" },
      { name: "Zoom and small-group training", level: "Hands-on" },
    ],
  },
];

export function getSkillGroup(id: string) {
  return skillGroups.find((g) => g.id === id);
}
