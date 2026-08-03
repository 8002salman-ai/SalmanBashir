import type { IconName } from "@/components/ui";

export const personal = {
  name: "Salman Bashir",
  monogram: "SB",
  title: "E-commerce Operations & Business Automation Consultant",
  shortTitle: "E-commerce Operations · Marketplace Systems · Automation",
  role: "E-commerce Operations & Business Automation Consultant",
  supportingIdentity:
    "Online Business Operator · Marketplace Systems Builder · AI-Assisted Product Creator",
  tagline: "Built by experience. Driven by purpose.",
  statement:
    "I turn real marketplace challenges into practical systems, clear workflows and smarter business decisions.",
  location: "Pakistan",
  markets: [
    "United States",
    "United Kingdom",
    "Norway",
    "Sweden",
    "Pakistan",
    "International Remote Clients",
  ],
  locationLine:
    "Based in Pakistan and available for remote work, consulting and training with clients connected to the United States, United Kingdom, Norway, Sweden and international online markets.",
  heroHeading:
    "E-commerce Operations, Marketplace Systems & Business Automation",
  heroSub:
    "I help online sellers organize marketplace operations, understand real profit, improve workflows and turn scattered business processes into clear, practical systems.",
  heroCredibility:
    "Hands-on experience across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress.",
  heroBadge: "Available for remote consulting, project work and online training",
  positioning:
    "A Pakistan-based e-commerce operator and business automation consultant who has worked hands-on across marketplace operations — listings, inventory, sales, fees, profit reporting and payouts — and now applies that experience to ERP workflows, profit dashboards, integrations and AI-assisted product development.",
  professionalSummary:
    "I work on the operational side of online business: managing listings, inventory and sales across multiple marketplaces, reconciling fees and payouts, and running the daily processes that keep an online business moving. That hands-on foundation shapes everything I build. Today I help online sellers and growing businesses bring order to their operations — replacing scattered spreadsheets with dashboards that track real profit, automating repetitive marketplace workflows, documenting repeatable processes, and planning internal tools and ERP prototypes that match the way their teams, money and inventory actually move.",
  aboutQuote:
    "I do not build technology for the sake of technology. I build around the way a real business works.",
  journeyQuote:
    "Build with honesty. Work with discipline. Create something that improves real lives.",
};

/* Contact channels.
   - email: public contact address shown on the site.
   - adminEmail: internal admin address — never rendered publicly.
   - socials: verified links are filled; empty entries are hidden, never href="#".
   Only YouTube and GitHub are verified today. */
export const contact = {
  email: "basco.pk@gmail.com",
  adminEmail: "8002salman@gmail.com",
  availability: "Available for remote consulting, project work and online training",
  socials: {
    youtube: "https://www.youtube.com/@TheAIWithSalman",
    github: "https://github.com/8002salman-ai",
    linkedin: "",
    x: "",
    instagram: "",
    fiverr: "",
    facebook: "",
    tiktok: "",
  } as Record<string, string>,
};

/* All figures here are derived from the journey and projects shown on
   this site — no invented clients, revenue, employers or certifications. */
export const stats = [
  { value: "6", label: "Marketplaces Operated" },
  { value: "5", label: "Projects & Systems Built" },
  { value: "3", label: "Core Service Areas" },
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
  slug: string;
  title: string;
  desc: string;
  points: string[];
  icon: IconName;
  clientProblem: string;
  solution: string;
  deliverables: string[];
  suitableClient: string;
  workingMethod: string[];
};

export const services: Service[] = [
  {
    slug: "operations-review",
    title: "E-commerce Operations Review",
    desc: "A practical, operator-level review of how your marketplace business actually runs — listings, pricing, margin, fees, inventory and payouts — with clear, prioritised improvements you can act on.",
    points: [
      "Operations audit across channels",
      "Fees, margin and pricing analysis",
      "Clear, prioritised action plan",
    ],
    icon: "cart",
    clientProblem:
      "You're selling across marketplaces, but operations run on memory, spreadsheets and ad-hoc decisions. Listings and pricing drift, inventory and orders aren't consistently handled, fees eat margin in places you can't see, and nobody has a clear picture of the operational problems actually costing you money.",
    solution:
      "A structured, operator-level review of how your marketplace business really runs — marketplace workflow, product and listing structure, pricing, inventory, order processing, buyer support, fees and payouts. You get findings organised by impact plus a practical action plan, prioritised by what saves money and time first.",
    deliverables: [
      "Marketplace workflow review",
      "Product and listing structure audit",
      "Pricing and margin analysis",
      "Inventory and order process check",
      "Fees and payouts breakdown",
      "Operational problems identified",
      "Practical action plan, prioritised",
    ],
    suitableClient:
      "Sellers running on one or more marketplaces who know sales are happening but can't clearly see what's costing them margin, time or buyer trust.",
    workingMethod: [
      "Short discovery call to map your current setup",
      "Review of listings, pricing, inventory and order flows",
      "Fee, payout and buyer support analysis",
      "Written findings with a prioritised action plan",
      "Optional follow-up session to walk through next steps",
    ],
  },
  {
    slug: "profit-cogs-dashboards",
    title: "Profit and COGS Dashboards",
    desc: "Dashboards that track real profit — sales, COGS, fees, tax and expenses — so you see what you actually earn, not just what you sell.",
    points: [
      "True profit visibility",
      "COGS and fee breakdowns",
      "Payout and expense clarity",
    ],
    icon: "chart",
    clientProblem:
      "Sales look healthy but cash doesn't. Revenue, product cost, marketplace fees, taxes and expenses are scattered across reports, so you can't say what a product really earns — and payouts never quite match expectations.",
    solution:
      "A dashboard built around your real numbers — revenue, product cost, marketplace fees, taxes, expenses and net profit — with payouts reconciled and, where relevant, owner or company allocation made clear. Profit becomes something you can trust and act on.",
    deliverables: [
      "Revenue tracking per channel",
      "Product cost and true COGS capture",
      "Marketplace fee and tax breakdowns",
      "Expense tracking and net profit view",
      "Payout clarity and reconciliation",
      "Owner or company allocation view",
    ],
    suitableClient:
      "Owners and managers who want to stop guessing at profit and see, month after month, what each product and channel actually earns.",
    workingMethod: [
      "Map the data you already have — reports, payout files, expenses",
      "Define COGS, fee, tax and expense rules with you",
      "Build the dashboard incrementally in Google Sheets",
      "Reconcile payouts against recorded sales",
      "Hand it over with clear, simple monthly maintenance",
    ],
  },
  {
    slug: "marketplace-automation",
    title: "Marketplace Workflow Automation",
    desc: "Automation around listings, orders, inventory, support and reporting to cut repetitive manual work across your channels.",
    points: [
      "Order and listing workflows",
      "Inventory sync planning",
      "Support and reporting automation",
    ],
    icon: "bolt",
    clientProblem:
      "Your team spends hours every week moving data between marketplaces and spreadsheets — copying sales, tracking orders, matching payouts and cleaning up reports. The work gets done, but it burns time and breeds errors.",
    solution:
      "Automation around the repetitive work that actually exists in your operations — sales imports, order tracking, inventory workflows, payout matching, data cleanup and reporting — using Google Sheets automation as the practical first layer.",
    deliverables: [
      "Sales import automation",
      "Order tracking workflows",
      "Inventory workflow automation",
      "Payout matching process",
      "Data cleanup routines",
      "Automated reporting",
      "Google Sheets automation",
    ],
    suitableClient:
      "Small teams doing real marketplace volume who are ready to remove repetitive manual data work but want something practical — not an over-engineered build.",
    workingMethod: [
      "Map the repetitive manual tasks with your team",
      "Agree what's worth automating and what isn't",
      "Build the simplest reliable automation",
      "Test against real data",
      "Document the process so the team can run it",
    ],
  },
  {
    slug: "erp-prototyping",
    title: "ERP and Internal Tool Prototyping",
    desc: "AI-assisted product planning and prototyping of ERP workflows and internal tools, built around the way your business actually operates.",
    points: [
      "AI-assisted product planning",
      "Prototypes built to test, not over-engineered",
      "Role and workflow design",
    ],
    icon: "layers",
    clientProblem:
      "You need an internal system or ERP, but full custom development is expensive and risky. Without planning first, you either over-build or buy a package that doesn't fit how your business actually runs.",
    solution:
      "AI-assisted product planning and prototyping. I work through the business requirements, marketplace logic, financial workflows and UX direction, then use AI-assisted development to produce working prototypes you can test against real operations before committing to a full build. This is product planning and prototyping — not a promise that one person writes every line of advanced production code.",
    deliverables: [
      "Business requirements and scope",
      "Financial and marketplace workflow mapping",
      "AI-assisted working prototypes",
      "Data structure and integration planning",
      "UX direction and testing scenarios",
      "Roadmap for production development",
    ],
    suitableClient:
      "Businesses that have outgrown spreadsheets and want to validate an internal tool or ERP properly before spending on full development.",
    workingMethod: [
      "Requirements and scope workshops",
      "Workflow and data mapping",
      "AI-assisted prototyping in short cycles",
      "Testing against real operators and real data",
      "Clear recommendation on build or buy",
    ],
  },
  {
    slug: "integration-planning",
    title: "Marketplace Integration Planning",
    desc: "Clear plans for connecting marketplaces, Google Sheets and internal systems — without over-engineering or unnecessary cost.",
    points: [
      "Marketplace API planning",
      "Google Sheets and ERP connections",
      "Integration roadmaps",
    ],
    icon: "globe",
    clientProblem:
      "You want marketplaces and internal systems to talk to each other, but integration projects quietly fail on unclear data, missing logic and no testing. You need a plan before any code is written.",
    solution:
      "A concrete integration plan — eBay APIs, Google Sheets, Supabase — with data mapping, multi-account planning and clear sales and payout logic, plus testing scenarios, so the build is predictable instead of speculative.",
    deliverables: [
      "eBay API integration plan",
      "Google Sheets and Supabase connections",
      "Data mapping and field definitions",
      "Multi-account planning",
      "Sales and payout logic specification",
      "Testing scenarios and acceptance criteria",
    ],
    suitableClient:
      "Businesses planning to connect marketplaces to internal systems who want to de-risk the build with a proper plan and clear scope.",
    workingMethod: [
      "Understand the systems and data involved",
      "Map data fields and transformations",
      "Define sales and payout logic",
      "Design multi-account handling",
      "Define testing scenarios",
      "Produce an implementation roadmap",
    ],
  },
  {
    slug: "sop-process-design",
    title: "SOP and Business Process Design",
    desc: "Documented, repeatable processes for your team — clear SOPs and workflows that make operations predictable and scalable.",
    points: [
      "SOP documentation",
      "Team workflow design",
      "Process improvement",
    ],
    icon: "file",
    clientProblem:
      "Your team does the work, but everything depends on who's around. There are no written processes, responsibilities blur, and when someone leaves, the knowledge leaves with them.",
    solution:
      "Clear, written operating procedures and processes — SOPs, team responsibilities, review systems, checklists, evidence organization and accountability workflows — so your business runs predictably without depending on one person.",
    deliverables: [
      "SOP documentation",
      "Team responsibility maps",
      "Review systems and checklists",
      "Evidence organization",
      "Accountability workflows",
      "A simple framework to keep them current",
    ],
    suitableClient:
      "Growing teams whose operations depend on key people and who want processes documented, reviewable and consistent.",
    workingMethod: [
      "Observe and document how work actually happens",
      "Agree responsibilities and handoffs",
      "Write practical SOPs in plain language",
      "Add checklists and review systems",
      "Set up accountability and evidence workflows",
    ],
  },
];

/* Consultation session types shown on the homepage and /book page. */
export const consultations: {
  title: string;
  length: string;
  desc: string;
  icon: IconName;
}[] = [
  {
    title: "30-Minute Discovery Call",
    length: "30 minutes",
    desc: "A short, focused call to see whether I can help — your situation, my honest read, clear next steps.",
    icon: "message",
  },
  {
    title: "60-Minute Business Consultation",
    length: "60 minutes",
    desc: "A deeper conversation about your operations, profit visibility and priorities, with actionable notes after.",
    icon: "clock",
  },
  {
    title: "E-commerce Operations Review",
    length: "60–90 minutes",
    desc: "Work through your marketplace workflows, listings, pricing, fees and payouts to find what's costing you margin and time.",
    icon: "cart",
  },
  {
    title: "Profit and COGS Review",
    length: "60 minutes",
    desc: "Go through revenue, COGS, fees, taxes and expenses so you finally see what each product and channel actually earns.",
    icon: "chart",
  },
  {
    title: "Marketplace Workflow Consultation",
    length: "60 minutes",
    desc: "Map your repetitive operational work and decide what's worth automating — and what isn't.",
    icon: "bolt",
  },
  {
    title: "ERP Planning Session",
    length: "60–90 minutes",
    desc: "A structured planning session for an internal tool or ERP — requirements, workflows and a realistic roadmap.",
    icon: "layers",
  },
  {
    title: "AI-Assisted Business Systems Consultation",
    length: "60 minutes",
    desc: "Practical, honest guidance on where AI fits in your product, reporting, SOPs and admin workflows.",
    icon: "spark",
  },
  {
    title: "Private Training Session",
    length: "Per session",
    desc: "A dedicated 1:1 training session on marketplace operations, profit, Google Sheets systems or AI-assisted workflows.",
    icon: "book",
  },
];

export type Project = {
  slug: string;
  name: string;
  type: string;
  tech: string[];
  desc: string;
  overview?: string;
  businessProblem?: string;
  solution?: string;
  capabilities?: string[];
  focusPoints?: string[];
  highlights: string[];
  role?: string;
  status?: string;
  accent: "brand" | "gold";
  icon: IconName;
  featured?: boolean;
  caseStudy?: string;
};

/* Statuses are honest: only Embani ERP is actively in development.
   No invented customers, users, revenue or performance numbers.
   Screenshots are intentionally absent until real ones exist. */
export const projects: Project[] = [
  {
    slug: "embani-erp",
    name: "Embani ERP",
    type: "E-commerce ERP & Profit Tracking Platform",
    tech: ["Next.js", "Supabase", "Google Sheets", "eBay API"],
    desc: "An e-commerce ERP platform being built for marketplace businesses that need one clear system for accounting, profit tracking and daily operations — sales, COGS, fees, tax, inventory, expenses, payroll and payouts.",
    overview:
      "Marketplace businesses often run across spreadsheets, marketplaces and chat — with profit scattered between fees, COGS, tax and payouts. Embani ERP is being built to bring accounting, profit tracking and daily operations into one clear system designed around how a seller's money and inventory actually move.",
    businessProblem:
      "Marketplace businesses run money across marketplaces, payout files and spreadsheets. Real profit is hidden between COGS, fees, tax and expenses, and there's no single place to see what the business actually earns or what the team is working on.",
    solution:
      "One clear system for accounting, profit tracking and daily operations — sales, COGS, fees, taxes, expenses, inventory, payroll and payouts — with Google Sheets and eBay integration workflows, multi-account and multi-company planning, roles and permissions, authentication, an evidence chain and review workflows.",
    capabilities: [
      "Sales, COGS, fees, taxes and expenses tracking",
      "Inventory management",
      "Payroll and payout workflows",
      "Google Sheets and eBay integration workflows",
      "Multi-account and multi-company planning",
      "Roles, permissions and authentication",
      "Evidence chain and review workflows",
    ],
    focusPoints: [
      "Designed the product vision and business requirements from real marketplace experience",
      "Mapped the financial workflows — sales, COGS, fees, tax, payouts — before any code",
      "Directed the data structure so reporting stays truthful and reviewable",
      "Led UX direction and tested workflows against real operator scenarios",
    ],
    role: "Product vision, business requirements, marketplace logic, financial workflows, UX direction, testing, AI-assisted development and project coordination.",
    status: "Active Development",
    highlights: [
      "Profit and COGS tracking",
      "Marketplace sales, fees and tax workflows",
      "Inventory, expenses, payroll and payouts",
      "Google Sheets and eBay integration workflows",
    ],
    caseStudy:
      "The honest status: Embani ERP is in active development. The product vision, business requirements, marketplace logic, financial workflows, UX direction and testing approach are being built from real marketplace experience. There are no production users, customers or revenue figures to report yet — when there are, they will be shown here.",
    accent: "brand",
    icon: "layers",
    featured: true,
  },
  {
    slug: "spotaware",
    name: "SpotAware",
    type: "Business Operations & Workflow Platform",
    tech: ["Next.js", "Supabase", "Vercel", "AI APIs"],
    desc: "A business operations and workflow platform designed to keep sales, inventory, partners and daily operations in one clear system — built around how a real team works.",
    overview:
      "Growing businesses accumulate tools, spreadsheets and responsibility gaps. SpotAware was designed as a single operations platform where sales, inventory, partners and daily work live together, structured around the real flow of the business rather than around features.",
    businessProblem:
      "Businesses accumulate tools, spreadsheets and responsibility gaps as they grow. Sales, inventory, partners and daily work live in different places, and it becomes unclear who owns what.",
    solution:
      "A single operations and workflow platform where sales, inventory, partners and daily work live together — structured around the real flow of the business and role-based access, rather than around features.",
    capabilities: [
      "Operations and workflow structure",
      "Role-based access planning",
      "Data organised around real business flow",
      "Sales and inventory tracking",
      "Partner and payout visibility",
      "Daily operations in one place",
    ],
    focusPoints: [
      "Structured operations and workflow around real team responsibilities",
      "Planned role-based access so each person sees what they need",
      "Organised data around business flow — orders, stock, partners and payouts",
    ],
    highlights: [
      "Operations and workflow structure",
      "Role-based access planning",
      "Data organised around real business flow",
    ],
    caseStudy:
      "SpotAware is a business operations and workflow platform in the design and early development stages. The focus so far has been on structuring operations around real team responsibilities and business flow. No production users, customers or performance figures are published.",
    accent: "brand",
    icon: "cpu",
  },
  {
    slug: "himalayan-koh",
    name: "Himalayan Koh",
    type: "E-commerce & Retailer Experience",
    tech: ["E-commerce", "Product Catalogues", "Operations"],
    desc: "Hands-on e-commerce and retailer experience — product research, listings, inventory and sales workflows built around real marketplace operations.",
    overview:
      "A hands-on e-commerce and retailer role covering the full selling cycle — researching products, building catalogues, managing listings and running inventory and order workflows across marketplaces and retailer channels.",
    businessProblem:
      "An e-commerce and retailer business needs consistent product research, catalogues, listings and order workflows across channels — without margin disappearing between sourcing and sale.",
    solution:
      "Hands-on operations covering the full selling cycle — product research, catalogue building, listing management, inventory and order workflows across marketplaces and retailer channels.",
    capabilities: [
      "Product research and sourcing workflows",
      "Catalogue and listing management",
      "Inventory tracking",
      "Order processing",
      "Retailer and marketplace coordination",
      "Margin-aware operations",
    ],
    focusPoints: [
      "Ran product research and listing workflows end to end",
      "Managed inventory and order processes across channels",
      "Coordinated retailer and marketplace operations",
    ],
    highlights: [
      "Product research and listings",
      "Inventory and order workflows",
      "Retailer and marketplace operations",
    ],
    caseStudy:
      "A hands-on e-commerce and retailer experience covering real daily selling work. This is an operational engagement rather than a software build — the experience it produced now shapes how systems are designed for other businesses.",
    accent: "gold",
    icon: "store",
  },
  {
    slug: "multi-marketplace-operations",
    name: "Multi-Marketplace Operations",
    type: "Hands-on Marketplace Operations",
    tech: ["eBay", "Depop", "Mercari", "Etsy", "TikTok Shop"],
    desc: "Hands-on experience running sales across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress — listings, inventory, fees, support, payouts and reporting.",
    overview:
      "The operational core behind everything I build: real, repeated work running sales across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress. Listings, pricing, inventory, buyer support, fee structures, payouts and reporting — the daily realities that shape how I design systems.",
    businessProblem:
      "Selling across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress means six fee structures, six payout cycles and six ways of handling buyers — chaos without a consistent operating rhythm.",
    solution:
      "Consistent, hands-on operations across all six marketplaces — listings, pricing, inventory, buyer support, fee reconciliation, payouts and reporting — run as disciplined daily practice.",
    capabilities: [
      "Listings, pricing and inventory across six marketplaces",
      "Buyer support and account management",
      "Fee structure comparison",
      "Payout reconciliation",
      "Per-channel profit reporting",
      "Operational routines that scale",
    ],
    focusPoints: [
      "Built and optimised listings across six marketplaces",
      "Reconciled fees, payouts and true profit per channel",
      "Handled buyer support and account management",
    ],
    highlights: [
      "Listings, pricing and inventory",
      "Fees, payouts and profit reporting",
      "Buyer support and account management",
    ],
    caseStudy:
      "This is the operational core behind everything else on this site — real, repeated marketplace work. It is presented as hands-on experience and evidence, not as invented performance numbers.",
    accent: "gold",
    icon: "cart",
  },
  {
    slug: "google-sheets-sales-workspace",
    name: "Google Sheets Sales Workspace",
    type: "Sales Data Workspace",
    tech: ["Google Sheets", "Google Workspace", "Data Workflows"],
    desc: "A controlled sales workspace with safe imports, monthly tabs and review before import — keeping sales data organised, reviewed and safe.",
    overview:
      "A practical response to messy sales records: a controlled Google Sheets workspace with safe imports, monthly tabs and an explicit review step before any data is committed — keeping sales data organised, auditable and safe to report from.",
    businessProblem:
      "Sales records live in scattered exports and messy spreadsheets, so monthly reporting is slow, error-prone and hard to trust.",
    solution:
      "A controlled Google Sheets sales workspace with safe imports, monthly tabs and an explicit review step before any data is committed — keeping sales data organised, auditable and safe to report from.",
    capabilities: [
      "Controlled sales imports",
      "Monthly tabs for clean history",
      "Review-before-import workflow",
      "Data safety by default",
      "Report-ready structure",
      "Simple, maintainable formulas",
    ],
    focusPoints: [
      "Designed controlled import and review workflows",
      "Structured monthly tabs for clean, reportable history",
      "Built data safety into the process by default",
    ],
    highlights: [
      "Controlled sales imports",
      "Monthly tabs and review before import",
      "Data safety and organisation",
    ],
    caseStudy:
      "A practical response to messy sales records. The workspace is designed so data is reviewed before it lands and history stays clean — a pattern now applied to profit and payout tracking.",
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

/* Career stages are described honestly in broad phases — no invented
   employers, titles or exact dates. */
export const journey = [
  {
    period: "Phase One",
    periodLabel: "Foundations",
    title: "Online operations and support work",
    role: "Remote · Freelance / Support",
    points: [
      "Data entry and product information management",
      "File handling and listing support",
      "Online research and customer communication",
      "Administrative support",
    ],
  },
  {
    period: "Phase Two",
    periodLabel: "Hands-on operations",
    title: "Marketplace operations across channels",
    role: "Marketplace Operations · Remote",
    points: [
      "Product research, listings and pricing",
      "Inventory and order processing",
      "Buyer communication and support",
      "Marketplace account management",
    ],
  },
  {
    period: "Phase Three",
    periodLabel: "Systems & automation",
    title: "Business systems, ERP workflows and AI-assisted development",
    role: "Independent · Project-based · Remote",
    points: [
      "Profit, COGS and payout workflows",
      "ERP and internal tool prototyping",
      "Marketplace integrations and automation",
      "AI-assisted product development",
    ],
  },
];

/* Resume content. Until a real resume is uploaded, the page shows
   "Resume Coming Soon" — no fake PDF is generated. */
export const resume = {
  available: false,
  comingSoon:
    "A detailed resume is being prepared and will be available here. Until it is, you can request a tailored overview of relevant work by email or during a call.",
  summary:
    "E-commerce operator turned business systems consultant. Hands-on experience across marketplace listings, inventory, orders, fees, payouts and profit reporting — now applied to ERP prototyping, dashboards, automation and AI-assisted product development for online businesses.",
  phases: journey,
  skills: [
    {
      category: "Marketplace Operations",
      items: [
        "Product research & sourcing",
        "Listing creation & optimization",
        "Inventory management",
        "Order processing",
        "Buyer communication & support",
        "Payout reconciliation",
      ],
    },
    {
      category: "Business Systems & Data",
      items: [
        "Profit & COGS reporting",
        "Google Sheets systems",
        "Dashboard design",
        "SOP documentation",
        "ERP workflow design",
        "Marketplace integrations",
      ],
    },
    {
      category: "Development & Automation",
      items: [
        "Automation planning",
        "AI-assisted product development",
        "Internal tool prototyping",
        "Next.js",
        "Supabase",
        "Node.js",
      ],
    },
  ],
  note:
    "Exact employment dates, employer names and performance figures are intentionally not published. I'm happy to share a tailored overview of relevant work during a direct conversation.",
};

export type Training = {
  title: string;
  desc: string;
  points: string[];
  format: string;
  icon: IconName;
};

/* Practical training programs built from hands-on marketplace experience.
   No invented certificates, students, reviews or success statistics. */
export const training: Training[] = [
  {
    title: "eBay Operations Training",
    desc: "Hands-on eBay training covering the full selling cycle — research, listings, pricing, fees, orders, returns, payouts and profit tracking — built from real marketplace operations.",
    points: [
      "Marketplace overview",
      "Product research",
      "Listings",
      "Pricing",
      "Fees",
      "Orders",
      "Returns",
      "Payouts",
      "Profit tracking",
      "Policies",
      "Evidence and records",
    ],
    format: "1:1 or small group · live",
    icon: "cart",
  },
  {
    title: "Depop Operations Training",
    desc: "Practical Depop training on product presentation, listings, pricing, buyer communication and the daily routines that keep a Depop shop consistent and manageable.",
    points: [
      "Product presentation",
      "Listings",
      "Pricing",
      "Buyer communication",
      "Returns",
      "Disputes",
      "Policies",
      "Sales tracking",
      "Team workflows",
    ],
    format: "1:1 or small group · live",
    icon: "store",
  },
  {
    title: "Mercari Operations Training",
    desc: "Mercari training focused on the full order journey — listings, pricing, offers, order handling, shipping, fees and payout clarity — so you can sell confidently and see your real profit.",
    points: [
      "Listing",
      "Pricing",
      "Offers",
      "Order handling",
      "Shipping",
      "Customer communication",
      "Fees",
      "Payouts",
      "Profit visibility",
    ],
    format: "1:1 or small group · live",
    icon: "box",
  },
  {
    title: "Multi-Marketplace Training",
    desc: "Manage several marketplaces without chaos. Learn cross-platform listings, pricing, fees and reporting across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress.",
    points: [
      "eBay",
      "Depop",
      "Mercari",
      "Etsy",
      "TikTok Shop",
      "AliExpress",
    ],
    format: "Live workshops or 1:1 · structured series",
    icon: "globe",
  },
  {
    title: "Online Business Systems Training",
    desc: "Build the back-office that keeps an online business honest — sales workspaces, COGS, profit dashboards, inventory, SOPs and payout reconciliation, with practical guidance on marketplace integrations, ERP planning and AI-assisted operations.",
    points: [
      "Google Sheets sales workspaces",
      "COGS",
      "Profit dashboards",
      "Inventory",
      "Team processes",
      "SOPs",
      "Payout reconciliation",
      "Marketplace integrations",
      "ERP planning",
      "AI-assisted operations",
    ],
    format: "1:1 · live sessions + follow-up",
    icon: "layers",
  },
];

export const trainingFormats = [
  "One-to-one Zoom training",
  "Small group training",
  "Recorded lessons",
  "Live workshops",
  "Marketplace audit plus training",
  "Custom team training",
];

export const book = {
  heading: "Let's talk about your business",
  intro:
    "Choose a session, share a few details and send the request. I review every request personally — nothing is confirmed until you hear back from me with approval and the meeting details.",
  consultations,
  statusNote:
    "Booking status: pending review. Requests are confirmed only after I approve them and share a meeting link — no booking is treated as confirmed before that.",
  meetingMethods: ["Zoom", "Google Meet", "Custom meeting method"],
  durations: ["30 minutes", "45 minutes", "60 minutes", "90 minutes", "Custom"],
  process: [
    {
      step: "01",
      title: "Send your request",
      desc: "Pick a session and fill in the booking details. No payment and no confirmation yet — just a clear request.",
    },
    {
      step: "02",
      title: "I review and respond",
      desc: "I check availability and your request, then reply to approve it or suggest a better alternative.",
    },
    {
      step: "03",
      title: "Meeting details",
      desc: "After approval I add the meeting link — Zoom, Google Meet or a custom method — and share the final details.",
    },
  ],
  whatToExpect: [
    "A personal reply from me, not an automated response",
    "Clear approval or rejection of your request",
    "Meeting link shared only after approval",
    "Honest advice, even when it means less work for me",
  ],
};

export const privacy = {
  updated: "August 2026",
  owner: "Salman Bashir",
  contactEmail: "basco.pk@gmail.com",
  sections: [
    {
      title: "Overview",
      body: "This page explains what information this website collects and how it is used. This site is a personal portfolio — it does not sell data, show ads or share your information with third parties.",
    },
    {
      title: "Contact and booking forms",
      body: "The contact and booking forms open your email app with a pre-filled message. Your details go directly to the public contact email address — they are not stored in any database or form service, and I do not retain them longer than needed to respond to your inquiry.",
    },
    {
      title: "Theme preference",
      body: "Your light/dark/system theme choice is stored in your own browser's local storage so your preference is remembered on your next visit. It never leaves your device.",
    },
    {
      title: "Analytics & tracking",
      body: "This site does not use analytics trackers, advertising cookies or third-party fingerprinting. Nothing about your browsing here is shared with advertisers.",
    },
    {
      title: "External links",
      body: "Links to external services (for example YouTube and GitHub) are provided for your convenience and are subject to their own privacy policies.",
    },
    {
      title: "Your data",
      body: "Because this site stores no personal data of its own, there is nothing to request, export or delete on this site. For anything you email me directly, you can ask at any time for a copy or deletion of what I hold.",
    },
    {
      title: "Contact",
      body: "Questions about this policy? Email me directly — the address is shown on the contact page.",
    },
  ],
};

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
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];
