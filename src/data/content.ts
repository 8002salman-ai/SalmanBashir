import type { IconName } from "@/components/ui";

export const personal = {
  name: "Salman Bashir",
  monogram: "SB",
  title: "E-commerce Operations & Business Automation Consultant",
  shortTitle: "E-commerce Operations · Marketplace Systems · Automation",
  role: "E-commerce Operations & Business Automation Consultant",
  tagline:
    "Online Business Operator · Marketplace Systems Builder · AI-Assisted Product Creator",
  location: "Pakistan",
  markets: ["USA", "UK", "UAE", "Pakistan", "International online businesses"],
  heroHeading:
    "E-commerce Operations, Marketplace Systems & Business Automation",
  heroSub:
    "I help online sellers organize marketplace operations, track real profit, improve workflows and turn scattered business processes into clear, practical systems.",
  heroCredibility:
    "Hands-on experience across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress.",
  heroBadge: "Available for remote projects and international collaboration",
  positioning:
    "A Pakistan-based e-commerce operator and business automation consultant who has worked hands-on across marketplace operations — listings, inventory, sales, fees, profit reporting and payouts — and now applies that experience to ERP workflows, profit dashboards, integrations and AI-assisted product development.",
  professionalSummary:
    "I have spent several years working on the operational side of online business: managing listings, inventory and sales across multiple marketplaces, reconciling fees and payouts, and running the daily processes that keep an online business moving. That hands-on foundation shapes everything I build. Today I help online sellers and growing businesses bring order to their operations — replacing scattered spreadsheets with dashboards that track real profit, automating repetitive marketplace workflows, documenting repeatable processes, and planning internal tools and ERP prototypes that match the way their teams, money and inventory actually move.",
  aboutQuote:
    "I do not build technology for the sake of technology. I build around the way a real business works.",
  journeyQuote:
    "Build with honesty. Work with discipline. Create something that improves real lives.",
  statement:
    "I help e-commerce businesses replace scattered spreadsheets, repetitive work and disconnected tools with practical systems, clear workflows and AI-assisted product development.",
};

/* Verified contact channels. Fiverr and LinkedIn stay empty until
   real URLs are provided — never invent public profile links. */
export const contact = {
  email: "salmanbashir80@gmail.com",
  github: "https://github.com/8002salman-ai",
  fiverr: "",
  linkedin: "",
  availability: "Available for remote projects and international collaboration",
};

/* All figures here are derived from the journey and projects shown on
   this site — no invented clients, revenue, employers or certifications. */
export const stats = [
  { value: "5+", label: "Years in Online Operations" },
  { value: "6", label: "Marketplaces Operated" },
  { value: "5", label: "Projects & Systems Built" },
  { value: "Multi", label: "ERP & BI Workflows Designed" },
];

export const trustItems = [
  "Marketplace Operations",
  "Profit & COGS",
  "Google Sheets Systems",
  "ERP Workflows",
  "Marketplace Integrations",
  "AI-Assisted Development",
];

/* Hands-on experience areas — presented as evidence, not invented numbers. */
export const credibility = [
  "Product sourcing and research",
  "Listing creation and optimization",
  "Inventory management",
  "Order processing and sales",
  "Marketplace fee structures",
  "Sales tax handling",
  "COGS and true cost tracking",
  "Profit reporting",
  "Payout reconciliation",
  "Team workflow coordination",
  "SOP documentation",
  "Google Sheets systems",
  "ERP workflow design",
  "Marketplace integration planning",
  "AI-assisted product development",
];

export type Service = {
  title: string;
  desc: string;
  points: string[];
  icon: IconName;
};

export const services: Service[] = [
  {
    title: "E-commerce Operations Review",
    desc: "A practical, operator-level review of how your marketplace business actually runs — listings, pricing, margin, fees, inventory and payouts — with clear, prioritised improvements you can act on.",
    points: [
      "Operations audit across channels",
      "Fees, margin and pricing analysis",
      "Clear, prioritised action plan",
    ],
    icon: "cart",
  },
  {
    title: "Profit and COGS Dashboards",
    desc: "Dashboards that track real profit — sales, COGS, fees, tax and expenses — so you see what you actually earn, not just what you sell.",
    points: [
      "True profit visibility",
      "COGS and fee breakdowns",
      "Payout and expense clarity",
    ],
    icon: "chart",
  },
  {
    title: "Marketplace Workflow Automation",
    desc: "Automation around listings, orders, inventory, support and reporting to cut repetitive manual work across your channels.",
    points: [
      "Order and listing workflows",
      "Inventory sync planning",
      "Support and reporting automation",
    ],
    icon: "bolt",
  },
  {
    title: "ERP and Internal Tool Prototyping",
    desc: "Practical prototypes of ERP workflows and internal tools built around the way your business actually operates — from roles to payouts.",
    points: [
      "Internal tool prototypes",
      "Role and workflow design",
      "Data structure planning",
    ],
    icon: "layers",
  },
  {
    title: "Marketplace Integration Planning",
    desc: "Clear plans for connecting marketplaces, Google Sheets and internal systems — without over-engineering or unnecessary cost.",
    points: [
      "Marketplace API planning",
      "Google Sheets and ERP connections",
      "Integration roadmaps",
    ],
    icon: "globe",
  },
  {
    title: "SOP and Business Process Design",
    desc: "Documented, repeatable processes for your team — clear SOPs and workflows that make operations predictable and scalable.",
    points: [
      "SOP documentation",
      "Team workflow design",
      "Process improvement",
    ],
    icon: "file",
  },
];

export type Project = {
  name: string;
  type: string;
  tech: string[];
  desc: string;
  highlights: string[];
  role?: string;
  status?: string;
  accent: "brand" | "gold";
  icon: IconName;
  featured?: boolean;
};

/* Statuses are honest: only Embani ERP is actively in development.
   No invented customers, users, revenue or performance numbers. */
export const projects: Project[] = [
  {
    name: "Embani ERP",
    type: "E-commerce ERP & Profit Tracking Platform",
    tech: ["Next.js", "Supabase", "Google Sheets", "Marketplace APIs"],
    desc: "An e-commerce ERP platform being built for marketplace businesses that need one clear system for accounting, profit tracking and daily operations — sales, COGS, fees, tax, inventory, expenses, payroll and payouts.",
    role: "Product vision, business requirements, marketplace logic, financial workflows, UX direction, testing and AI-assisted development.",
    status: "Active Development",
    highlights: [
      "Profit and COGS tracking",
      "Marketplace sales, fees and tax workflows",
      "Inventory, expenses, payroll and payouts",
      "Google Sheets and eBay integration workflows",
    ],
    accent: "brand",
    icon: "layers",
    featured: true,
  },
  {
    name: "SpotAware",
    type: "Business Operations & Workflow Platform",
    tech: ["Next.js", "Supabase", "Vercel", "AI APIs"],
    desc: "A business operations and workflow platform designed to keep sales, inventory, partners and daily operations in one clear system — built around how a real team works.",
    highlights: [
      "Operations and workflow structure",
      "Role-based access planning",
      "Data organised around real business flow",
    ],
    accent: "brand",
    icon: "cpu",
  },
  {
    name: "Himalayan Koh",
    type: "E-commerce & Retailer Experience",
    tech: ["E-commerce", "Product Catalogues", "Operations"],
    desc: "Hands-on e-commerce and retailer experience — product research, listings, inventory and sales workflows built around real marketplace operations.",
    highlights: [
      "Product research and listings",
      "Inventory and order workflows",
      "Retailer and marketplace operations",
    ],
    accent: "gold",
    icon: "store",
  },
  {
    name: "Multi-Marketplace Operations",
    type: "Hands-on Marketplace Operations",
    tech: ["eBay", "Depop", "Mercari", "Etsy", "TikTok Shop"],
    desc: "Hands-on experience running sales across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress — listings, inventory, fees, support, payouts and reporting.",
    highlights: [
      "Listings, pricing and inventory",
      "Fees, payouts and profit reporting",
      "Buyer support and account management",
    ],
    accent: "gold",
    icon: "cart",
  },
  {
    name: "Google Sheets Sales Workspace",
    type: "Sales Data Workspace",
    tech: ["Google Sheets", "Google Workspace", "Data Workflows"],
    desc: "A controlled sales workspace with safe imports, monthly tabs and review before import — keeping sales data organised, reviewed and safe.",
    highlights: [
      "Controlled sales imports",
      "Monthly tabs and review before import",
      "Data safety and organisation",
    ],
    accent: "brand",
    icon: "sheet",
  },
];

export const process = [
  {
    step: "01",
    title: "Understand",
    desc: "How sales, inventory, fees, payouts and team workflows actually run today — from the operator's side, not from theory.",
  },
  {
    step: "02",
    title: "Map",
    desc: "Document the current process and the data behind it — where profit is hidden and where work repeats.",
  },
  {
    step: "03",
    title: "Simplify",
    desc: "Remove what does not need to exist and design a simpler flow around the real business.",
  },
  {
    step: "04",
    title: "Build",
    desc: "Build the dashboards, workflows and systems practically, incrementally and around real operations.",
  },
  {
    step: "05",
    title: "Test and Improve",
    desc: "Validate with real data and real users, then iterate until the system genuinely saves time and effort.",
  },
];

export const marketplaces = [
  "eBay",
  "Depop",
  "Mercari",
  "Etsy",
  "TikTok Shop",
  "AliExpress",
];

export const techStack = [
  {
    category: "Development & Deployment",
    items: [
      "Google Sheets",
      "Supabase",
      "GitHub",
      "Vercel",
      "Next.js",
      "Node.js",
    ],
  },
  {
    category: "Marketplace & Data",
    items: [
      "Marketplace APIs",
      "eBay integration workflows",
      "Google Sheets automation",
    ],
  },
  {
    category: "AI-Assisted Development",
    items: ["Claude Code", "Codex", "VS Code"],
  },
];

export const aiCapabilities = [
  "AI-assisted product development",
  "AI-assisted dashboard and tool building",
  "Practical AI use-case planning",
  "AI-assisted reporting workflows",
  "AI provider selection guidance",
  "Automated document processing",
  "AI-assisted SOP and content writing",
  "AI-assisted admin tool workflows",
];

export const strengths = [
  "Hands-on marketplace experience",
  "Business operator's understanding",
  "Real profit and COGS thinking",
  "Practical, incremental builds",
  "Complex workflows made simple",
  "Bridge between business and technology",
  "AI-assisted product development",
  "Independent project execution",
  "Long-term thinking",
];

export const values = [
  "Honesty",
  "Ownership",
  "Discipline",
  "Practical Thinking",
  "Long-Term Impact",
];

/* Working principles shown in the About section. */
export const principles: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "target",
    title: "Business-first",
    desc: "Systems are designed around how your business actually runs.",
  },
  {
    icon: "shield",
    title: "Private by default",
    desc: "Your data, processes and financials stay private and controlled.",
  },
  {
    icon: "trend",
    title: "Practical results",
    desc: "Every build is judged by time saved, clarity gained and decisions improved.",
  },
];

/* Career stages are described honestly — no invented employers. */
export const journey = [
  {
    period: "2019 — 2020",
    title: "Started in online operations support",
    role: "Online Support Assistant · Freelance / Remote",
    points: [
      "Data entry and product information management",
      "File handling and listing support",
      "Online research and customer communication",
      "Administrative support",
    ],
  },
  {
    period: "2020 — Present",
    title: "Hands-on e-commerce operations",
    role: "E-commerce Executive · Marketplace Operations",
    points: [
      "Product research, listings and pricing",
      "Inventory and order processing",
      "Buyer communication and support",
      "Marketplace account management",
    ],
  },
  {
    period: "Present",
    title: "Business systems, ERP workflows & AI-assisted development",
    role: "Independent · Project-based · Remote",
    points: [
      "Profit, COGS and payout workflows",
      "ERP and internal tool prototyping",
      "Marketplace integrations and automation",
      "AI-assisted product development",
    ],
  },
];

export const idealClients = [
  "Marketplace sellers and online businesses",
  "Multi-channel sellers",
  "Importers and exporters",
  "Wholesale and retail businesses",
  "Family-owned businesses",
  "Businesses running on spreadsheets and WhatsApp",
  "Businesses wanting real profit visibility",
  "Businesses planning ERP or internal tools",
  "Businesses needing marketplace automation",
  "Overseas Pakistani business owners",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Journey", href: "#journey" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
