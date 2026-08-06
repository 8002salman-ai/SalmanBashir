import type { IconName } from "@/components/ui";

export type ProjectStatus =
  | "Live"
  | "Prototype"
  | "In Development"
  | "Planned"
  | "Ongoing";

export type EvidenceType =
  | "Live website"
  | "GitHub repository"
  | "Screenshot"
  | "Dashboard"
  | "Spreadsheet"
  | "Workflow diagram"
  | "Catalogue"
  | "Documentation"
  | "Deployment"
  | "Operational record";

export type EvidenceStatus =
  | "Verified"
  | "Available on Request"
  | "Private / Sanitized"
  | "In Development"
  | "Planned";

export type EvidenceItem = {
  type: EvidenceType;
  label: string;
  status: EvidenceStatus;
  url?: string;
};

export type MediaItem = {
  src?: string;
  alt: string;
  caption?: string;
  status: "Available" | "Placeholder";
};

export type ProjectArea = {
  title: string;
  desc: string;
  status: ProjectStatus;
};

export type ProcessStep = {
  title: string;
  desc: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  overview: string;
  businessProblem: string;
  objectives: string[];
  role: string;
  roleAreas: string[];
  process: ProcessStep[];
  features: string[];
  areas?: ProjectArea[];
  tools: string[];
  outcomes: string[];
  limitations: string;
  evidence: EvidenceItem[];
  media: MediaItem[];
  related: string[];
  accent: "brand" | "gold";
  icon: IconName;
  featured?: boolean;
};

const baseProcess = [
  {
    title: "Understand",
    desc: "How sales, inventory, fees, payouts and team workflows actually run today — from the operator's side, not from theory.",
  },
  {
    title: "Map",
    desc: "Document the current process and the data behind it — where profit is hidden and where work repeats.",
  },
  {
    title: "Design",
    desc: "Specify the business logic, workflow and data structure before any code is written.",
  },
  {
    title: "Build",
    desc: "Direct AI-assisted implementation so the system is planned from the operator's side.",
  },
  {
    title: "Test",
    desc: "Test workflows against real operator scenarios before they are trusted.",
  },
  {
    title: "Document",
    desc: "Write the SOPs, permissions and review steps that let a team actually run it.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "embani-erp",
    title: "Embani ERP",
    category: "E-commerce ERP & Profit Tracking Platform",
    status: "In Development",
    summary:
      "An e-commerce ERP for marketplace businesses — sales, COGS, fees, inventory, payouts and daily operations in one clear system.",
    overview:
      "Marketplace businesses often run across spreadsheets, marketplaces and chat, with profit scattered between fees, COGS, tax and payouts. Embani ERP is being built to bring accounting, profit tracking and daily operations into one clear system designed around how a seller's money and inventory actually move.",
    businessProblem:
      "Sales records are scattered across exports, payout files and spreadsheets. Real profit is hidden between COGS, fees, tax and expenses, and there is no single place to see what the business actually earns or what the team is working on.",
    objectives: [
      "One clear view of sales, COGS, fees, taxes and expenses",
      "Payout reconciliation that matches money received to sales",
      "Buying and inventory workflows with reorder visibility",
      "Marketplace and Google Sheets integration workflows",
      "Roles, permissions and an evidence chain for every entry",
    ],
    role: "Operational planning, business logic, workflow design, product direction, testing and AI-assisted implementation.",
    roleAreas: [
      "Operational planning",
      "Business logic",
      "Workflow design",
      "Product direction",
      "Testing",
      "AI-assisted implementation",
    ],
    process: baseProcess,
    features: [
      "Sales, COGS, fees, taxes and expenses tracking",
      "Inventory management",
      "Payroll and payout workflows",
      "Google Sheets and eBay integration workflows",
      "Multi-account and multi-company planning",
      "Roles, permissions and authentication",
      "Evidence chain and review workflows",
    ],
    areas: [
      {
        title: "Scattered sales records",
        desc: "Consolidating sales from exports and marketplaces into one structure.",
        status: "In Development",
      },
      {
        title: "COGS and profit visibility",
        desc: "Profit that includes cost of goods, fees, tax and expenses.",
        status: "In Development",
      },
      {
        title: "Payout reconciliation",
        desc: "Matching received payouts back to sales and fees.",
        status: "Planned",
      },
      {
        title: "Buying and inventory workflows",
        desc: "Purchase records, stock levels and reorder planning.",
        status: "Planned",
      },
      {
        title: "Marketplace and Google Sheets integrations",
        desc: "Import workflows from Google Sheets and planned marketplace connections.",
        status: "In Development",
      },
      {
        title: "Admin and permissions",
        desc: "Roles, authentication and an evidence chain for every entry.",
        status: "Planned",
      },
    ],
    tools: ["Next.js", "Supabase", "Google Sheets", "eBay API", "Vercel", "GitHub"],
    outcomes: [
      "Product vision and business requirements documented from real marketplace experience",
      "Financial workflow mapping (sales, COGS, fees, tax, payouts) complete",
      "Data structure planned for truthful, reviewable reporting",
      "Google Sheets import and review workflow designed",
      "Role and permission model planned around how a team works",
    ],
    limitations:
      "Embani ERP is in active development. The product vision, business logic, workflows and testing approach are being built — there are no production users, customers or revenue figures to report yet. Areas above are marked Live, Prototype, In Development or Planned; nothing is presented as live unless it is.",
    evidence: [
      {
        type: "Documentation",
        label: "Requirements and workflow documentation",
        status: "In Development",
      },
      {
        type: "Dashboard",
        label: "Profit and operations prototype",
        status: "In Development",
      },
      {
        type: "Spreadsheet",
        label: "Google Sheets import and review workflow",
        status: "Private / Sanitized",
      },
    ],
    media: [
      {
        alt: "Embani ERP profit dashboard preview",
        caption: "Dashboard — prototype, to be added after final verification.",
        status: "Placeholder",
      },
      {
        alt: "Embani ERP Google Sheets import workflow preview",
        caption: "Import workflow — to be added after final verification.",
        status: "Placeholder",
      },
    ],
    related: ["google-sheets-sales-workspace", "spotaware"],
    accent: "brand",
    icon: "layers",
    featured: true,
  },
  {
    slug: "spotaware",
    title: "SpotAware",
    category: "Business Operations & Workflow Platform",
    status: "In Development",
    summary:
      "A business operations and workflow platform that keeps sales, inventory, partners and daily work in one clear system.",
    overview:
      "Growing businesses accumulate tools, spreadsheets and responsibility gaps as they grow. SpotAware was designed as a single operations platform where sales, inventory, partners and daily work live together — structured around the real flow of the business rather than around features.",
    businessProblem:
      "Sales, inventory, partners and daily work live in different places, and it becomes unclear who owns what — so operations slow down and responsibilities blur.",
    objectives: [
      "Structure operations around real team responsibilities",
      "Plan role-based access so each person sees what they need",
      "Organise data around business flow — orders, stock, partners and payouts",
      "Keep daily operations visible in one place",
    ],
    role: "Product concept, operational use cases, workflow design, interface direction, testing and AI-assisted implementation.",
    roleAreas: [
      "Product concept",
      "Operational use cases",
      "Workflow design",
      "Interface direction",
      "Testing",
      "AI-assisted implementation",
    ],
    process: baseProcess,
    features: [
      "Operations and workflow structure",
      "Role-based access planning",
      "Data organised around real business flow",
      "Sales and inventory tracking",
      "Partner and payout visibility",
      "Daily operations in one place",
    ],
    tools: ["Next.js", "Supabase", "Vercel", "GitHub", "AI APIs"],
    outcomes: [
      "Operations and workflow structure designed around team responsibilities",
      "Role-based access model planned",
      "Data structure organised around business flow",
    ],
    limitations:
      "SpotAware is in the design and early development stages. The focus so far has been structuring operations around real team responsibilities and business flow. No production users, customers, usage or revenue figures are published — and none are invented here.",
    evidence: [
      {
        type: "Documentation",
        label: "Concept and workflow planning",
        status: "In Development",
      },
      {
        type: "Workflow diagram",
        label: "Operations and role-based access design",
        status: "In Development",
      },
    ],
    media: [
      {
        alt: "SpotAware operations board preview",
        caption: "Interface direction — to be added after final verification.",
        status: "Placeholder",
      },
    ],
    related: ["embani-erp"],
    accent: "brand",
    icon: "cpu",
  },
  {
    slug: "himalayan-koh",
    title: "Himalayan Koh — Product, Retail and Export Operations",
    category: "Product, Retail, Wholesale and Export Operations",
    status: "Ongoing",
    summary:
      "Operational support for salt products across retail, wholesale and export — packaging, catalogues, product operations and shipment coordination.",
    overview:
      "Himalayan Koh covers product, retail, wholesale and export operations around salt products. The work spans packaging preparation, catalogue building, product operations and shipment and export coordination support — plus the website and retailer workflows that keep the business selling.",
    businessProblem:
      "A product business selling salt across retail, wholesale and export needs consistent packaging, catalogues and operations — with coordination between the website, retailers and shipments.",
    objectives: [
      "Consistent packaging and catalogue preparation",
      "Retail and wholesale product operations",
      "Shipment and export coordination support",
      "Website and retailer workflow support",
    ],
    role: "Operational planning, workflow design, product and catalogue direction, documentation and coordination support.",
    roleAreas: [
      "Operational planning",
      "Workflow design",
      "Product and catalogue direction",
      "Documentation",
      "Coordination support",
    ],
    process: baseProcess,
    features: [
      "Salt product operations",
      "Retail and wholesale preparation",
      "Packaging coordination",
      "Catalogue building",
      "Shipment and export coordination support",
      "Website and retailer workflows",
    ],
    tools: ["Catalogue and product tools", "Google Sheets", "Website workflows"],
    outcomes: [
      "Retail, wholesale and export preparation supported",
      "Packaging and catalogue coordination in place",
      "Website and retailer workflows planned and supported",
    ],
    limitations:
      "Salman provides operational and project support for Himalayan Koh and is not the owner, customs broker or licensed freight forwarder. The business remains independently owned and operated.",
    evidence: [
      {
        type: "Catalogue",
        label: "Product catalogue",
        status: "Private / Sanitized",
      },
      {
        type: "Documentation",
        label: "Operational and packaging documentation",
        status: "Available on Request",
      },
      {
        type: "Operational record",
        label: "Coordination records",
        status: "Private / Sanitized",
      },
    ],
    media: [
      {
        alt: "Himalayan Koh product catalogue preview",
        caption: "Catalogue — to be added after final verification.",
        status: "Placeholder",
      },
      {
        alt: "Himalayan Koh packaging preview",
        caption: "Packaging — to be added after final verification.",
        status: "Placeholder",
      },
    ],
    related: ["multi-marketplace-operations"],
    accent: "gold",
    icon: "store",
  },
  {
    slug: "multi-marketplace-operations",
    title: "Marketplace Operations",
    category: "Hands-on Marketplace Operations",
    status: "Ongoing",
    summary:
      "Real, repeated operations across eBay, Depop, Mercari, Poshmark, Etsy and TikTok Shop — the daily work behind the systems.",
    overview:
      "The operational core behind everything on this site: real, repeated work running sales across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress. Listings, pricing, inventory, buyer support, fee structures, payouts and reporting — the daily realities that shape how the systems are designed.",
    businessProblem:
      "Selling across many marketplaces means many fee structures, payout cycles and ways of handling buyers — chaos without a consistent operating rhythm.",
    objectives: [
      "Consistent listings, pricing and inventory across marketplaces",
      "Fee and payout reconciliation that shows true profit per channel",
      "Buyer support that keeps accounts healthy",
      "Documented routines a team can actually run",
    ],
    role: "Operational planning, workflow design, testing, documentation and AI-assisted system building (Sheets and SOPs).",
    roleAreas: [
      "Operational planning",
      "Workflow design",
      "Testing",
      "Documentation",
      "AI-assisted implementation",
    ],
    process: baseProcess,
    features: [
      "Product research",
      "Listings and pricing",
      "Inventory and order processing",
      "Returns and buyer communication",
      "Fees, COGS and payout reconciliation",
      "SOPs and team workflows",
    ],
    areas: [
      { title: "Product research", desc: "Demand and margin checks before listing.", status: "Ongoing" },
      { title: "Listings and pricing", desc: "Listing creation, pricing and catalogue upkeep.", status: "Ongoing" },
      { title: "Orders, returns and buyer communication", desc: "Order handling and account health.", status: "Ongoing" },
      { title: "Fees, COGS and payouts", desc: "Reconciliation that shows true per-channel profit.", status: "Ongoing" },
      { title: "SOPs and team workflows", desc: "Documented routines a team can run.", status: "Ongoing" },
    ],
    tools: ["eBay", "Depop", "Mercari", "Poshmark", "Etsy", "TikTok Shop", "Google Sheets"],
    outcomes: [
      "Consistent operating rhythm across marketplaces",
      "Fee and payout reconciliation routines",
      "Documented SOPs for listings, orders and support",
    ],
    limitations:
      "This is hands-on marketplace work presented as experience and process — not as invented performance numbers. Customer names, account details, order data and sales figures are private and sanitized; nothing identifiable is shown.",
    evidence: [
      {
        type: "Operational record",
        label: "Marketplace operation records",
        status: "Private / Sanitized",
      },
      {
        type: "Spreadsheet",
        label: "Fee and payout reconciliation sheets",
        status: "Private / Sanitized",
      },
      {
        type: "Documentation",
        label: "SOPs and team workflows",
        status: "Private / Sanitized",
      },
      {
        type: "Workflow diagram",
        label: "Operations workflow examples",
        status: "Available on Request",
      },
    ],
    media: [
      {
        alt: "Marketplace operations workflow example",
        caption: "Sanitized example — to be added after final verification.",
        status: "Placeholder",
      },
    ],
    related: ["embani-erp", "google-sheets-sales-workspace"],
    accent: "gold",
    icon: "cart",
  },
  {
    slug: "google-sheets-sales-workspace",
    title: "Google Sheets Sales Workspace",
    category: "Sales Data Workspace",
    status: "In Development",
    summary:
      "A controlled sales workspace with safe imports, monthly tabs and review-before-import — keeping sales data organised, auditable and reportable.",
    overview:
      "A practical response to messy sales records: a controlled Google Sheets workspace with safe imports, monthly tabs and an explicit review step before any data is committed — keeping sales data organised, auditable and safe to report from.",
    businessProblem:
      "Sales records live in scattered exports and messy spreadsheets, so monthly reporting is slow, error-prone and hard to trust.",
    objectives: [
      "Safe, controlled sales imports",
      "Monthly tabs for clean history",
      "Company and account separation",
      "Profit and COGS visibility",
      "Payout tracking",
      "Controlled read/write workflow",
    ],
    role: "Workflow design, business logic, testing, documentation and AI-assisted implementation.",
    roleAreas: [
      "Workflow design",
      "Business logic",
      "Testing",
      "Documentation",
      "AI-assisted implementation",
    ],
    process: baseProcess,
    features: [
      "Controlled sales imports",
      "Monthly tabs for clean history",
      "Company and account separation",
      "Profit and COGS visibility",
      "Payout tracking",
      "Sheets API and OAuth planning",
      "Controlled read/write workflow",
    ],
    tools: ["Google Sheets", "Google Workspace", "Google Apps Script", "Sheets API"],
    outcomes: [
      "Import and review workflow designed so data is checked before it lands",
      "Monthly structure keeps history clean and reportable",
      "Data safety built into the process by default",
    ],
    limitations:
      "The workspace is a working tool for real sales records, so private data is never shown. Sales figures, account emails and customer details are not exposed; any future screenshots will be sanitized examples only.",
    evidence: [
      {
        type: "Spreadsheet",
        label: "Sales workspace structure",
        status: "Private / Sanitized",
      },
      {
        type: "Documentation",
        label: "Import and review workflow",
        status: "Available on Request",
      },
      {
        type: "Workflow diagram",
        label: "Sheets API and OAuth planning",
        status: "In Development",
      },
    ],
    media: [
      {
        alt: "Google Sheets sales workspace monthly tabs preview",
        caption: "Sanitized example — to be added after final verification.",
        status: "Placeholder",
      },
    ],
    related: ["embani-erp", "multi-marketplace-operations"],
    accent: "brand",
    icon: "sheet",
  },
];

export function getCaseStudy(slug?: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getRelated(slug: string): CaseStudy[] {
  const study = getCaseStudy(slug);
  if (!study) return [];
  return study.related
    .map((s) => getCaseStudy(s))
    .filter((c): c is CaseStudy => Boolean(c));
}

export const evidenceTypes: EvidenceType[] = [
  "Live website",
  "GitHub repository",
  "Screenshot",
  "Dashboard",
  "Spreadsheet",
  "Workflow diagram",
  "Catalogue",
  "Documentation",
  "Deployment",
  "Operational record",
];

export const evidenceStatuses: EvidenceStatus[] = [
  "Verified",
  "Available on Request",
  "Private / Sanitized",
  "In Development",
  "Planned",
];

export const sanitizationDisclosure =
  "Some screenshots are sanitized to protect customer, account and business information.";

export const mediaPlaceholderText =
  "Project media will be added after final verification.";
