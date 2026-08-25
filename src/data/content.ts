import type { IconName } from "@/components/ui";

export const personal = {
  name: "Salman Bashir",
  monogram: "SB",
  title: "E-commerce Operations & Business Automation Consultant",
  shortTitle: "E-commerce Operations · Marketplace Systems · Automation",
  role: "E-commerce Operations & Business Automation Consultant",
  supportingIdentity:
    "Marketplace Operator · Sourcing Specialist · Systems Builder · Trainer",
  tagline: "Built by experience. Driven by purpose.",
  coreMessage:
    "I understand the operation first. Then I build the system around it.",
  supportingLine:
    "I understand how online businesses actually work — and I turn that understanding into practical systems.",
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
    "Marketplace Operations, Sourcing, Training & Business Systems",
  /* Rotating word in the hero headline — keeps the H1 short on mobile. */
  heroRotatingWords: [
    "Marketplace Operations",
    "Sourcing",
    "Business Systems",
    "AI & Automation",
    "Training",
  ],
  heroSub:
    "I run the operations first, then build the systems around them — listings, profit, sourcing and internal tools.",
  heroCredibility: "eBay · Depop · Mercari · Etsy · TikTok Shop · AliExpress",
  heroBadge: "Available for remote work",
  positioning:
    "A Pakistan-based e-commerce operator and business automation consultant who has worked hands-on across marketplace operations — listings, inventory, sales, fees, profit reporting and payouts — and now applies that experience to ERP workflows, profit dashboards, integrations and AI-assisted product development.",
  professionalSummary:
    "My work started on the operational side of online selling — researching products, building listings, handling orders and reconciling fees and payouts across real marketplaces. That hands-on foundation shapes everything I do. Today I help online businesses in three connected ways: marketplace services that bring order to listings, operations and profit records; sourcing and freight coordination support that makes buying decisions measurable; and business systems — dashboards, Google Sheets workflows, internal tools and ERP prototypes — built with AI-assisted implementation and planned from the operator's side. I also train sellers and small teams on the practical side of these skills, working remotely with clients connected to the United States, United Kingdom, Norway, Sweden and international online markets.",
  aboutQuote:
    "I do not build technology for the sake of technology. I build around the way a real business works.",
  journeyQuote:
    "Build with honesty. Work with discipline. Create something that improves real lives.",
};

/* Contact channels.
   - email: public contact address shown on the site.
   - adminEmail: internal admin address — never rendered publicly.
   - socials: verified links are filled; empty entries are hidden, never href="#".
   Only YouTube, GitHub and LinkedIn are verified today. */
export const contact = {
  email: "basco.pk@gmail.com",
  adminEmail: "8002salman@gmail.com",
  availability: "Available for remote consulting, project work and online training",
  /* Unified business inquiry types — used by the contact form and the
     Business & Trade homepage cards. */
  inquiryTypes: [
    "Himalayan Salt / Himalayan Koh",
    "Wholesale / Bulk Order",
    "Private Label",
    "Product Sourcing / Buying",
    "Alibaba Supplier Research",
    "Marketplace Operations",
    "eBay Operations",
    "Business Systems / ERP",
    "AI & Automation",
    "Training / Consulting",
    "Other Business Inquiry",
  ],
  socials: {
    youtube: "https://www.youtube.com/@TheAIWithSalman",
    github: "https://github.com/8002salman-ai",
    linkedin: "https://www.linkedin.com/in/salmanbashir80",
    x: "",
    instagram: "",
    fiverr: "https://www.fiverr.com/pe/BbB0Ply",
    facebook: "",
    tiktok: "",
  } as Record<string, string>,
};

/* URL-safe slugs for each inquiry type, used to pre-select a type when a
   Business & Trade card links into the contact form. */
export const inquiryTypeSlugs: Record<string, string> = {
  "Himalayan Salt / Himalayan Koh": "himalayan-salt",
  "Wholesale / Bulk Order": "wholesale-bulk",
  "Private Label": "private-label",
  "Product Sourcing / Buying": "product-sourcing",
  "Alibaba Supplier Research": "alibaba-research",
  "Marketplace Operations": "marketplace-operations",
  "eBay Operations": "ebay-operations",
  "Business Systems / ERP": "business-systems-erp",
  "AI & Automation": "ai-automation",
  "Training / Consulting": "training-consulting",
  "Other Business Inquiry": "other",
};

/* Professional profile (About page). Business identity only — no personal,
   financial or sensitive details are published anywhere on the site. */
export const aboutProfile = {
  name: "Salman Bashir",
  title: "E-commerce Operations & Business Automation Consultant",
  badge: "E-commerce Operations · Business Automation",
  identity: [
    "Marketplace Operations",
    "Sourcing & Product Coordination",
    "Business Systems & ERP Workflows",
    "AI-Assisted Development",
    "Consulting & Training",
  ],
  intro:
    "A Pakistan-based e-commerce operator and business automation consultant who works hands-on across marketplace operations, sourcing and coordination, and business systems — then applies that experience to ERP workflows, profit dashboards, integrations and AI-assisted product development.",
  focusLabel: "Professional focus",
  focus: [
    "Marketplace operations — listings, inventory, fees, profit and payouts",
    "Sourcing and product coordination for measurable buying decisions",
    "Business systems — dashboards, Google Sheets workflows, internal tools and ERP prototypes",
    "AI-assisted development and automation workflows",
    "Consulting and practical training for sellers and small teams",
  ],
  location:
    "Based in Pakistan · Remote support for the USA, UK, Norway, Sweden and international online markets",
  signatureProjects: [
    { name: "Embani ERP", href: "/projects/embani-erp" },
    { name: "SpotAware", href: "/projects/spotaware" },
    { name: "Himalayan Koh", href: "/projects/himalayan-koh" },
    { name: "Hermes AI Agent", href: "/ai-automation" },
  ],
};

/* Business Profile — professional capabilities only, never private
   revenue or financial figures. */
export const businessProfile = {
  eyebrow: "Business Profile",
  title: "What I do professionally",
  intro:
    "A working profile built around capabilities, not numbers. Each area links to the page where the work is explained in detail.",
  note:
    "This profile shows professional capabilities only. Private revenue, profit or financial figures are never published here and are shared only directly with qualified partners under confidentiality.",
  areas: [
    {
      icon: "store",
      title: "Marketplace Operations",
      desc: "Listings, inventory, pricing, orders, fees, profit reporting and payout workflows across real marketplaces.",
      href: "/marketplace-services",
    },
    {
      icon: "box",
      title: "Sourcing & Product Operations",
      desc: "Product research, supplier coordination, packaging and export/shipment coordination support that keeps buying decisions measurable.",
      href: "/sourcing-freight",
    },
    {
      icon: "settings",
      title: "Business Systems & Automation",
      desc: "Profit dashboards, Google Sheets workflows, internal tools and ERP prototypes planned from the operator's side.",
      href: "/business-systems",
    },
    {
      icon: "spark",
      title: "AI Agents & Workflows",
      desc: "AI-assisted development, automation workflows and the Hermes AI Agent — built around real processes.",
      href: "/ai-automation",
    },
    {
      icon: "briefcase",
      title: "Consulting & Training",
      desc: "Consultation sessions and practical online training for sellers and small teams, with a clear review step before anything is scheduled.",
      href: "/book",
    },
    {
      icon: "chart",
      title: "Projects & Case Studies",
      desc: "Selected work — Embani ERP, SpotAware, Himalayan Koh and more — with honest status labels on every item.",
      href: "/projects",
    },
  ] satisfies { icon: IconName; title: string; desc: string; href: string }[],
};

/* Private Profile Access — a safe, gated request flow. No private or
   sensitive data lives in this file or anywhere in the browser bundle. */
export const profileAccess = {
  eyebrow: "Private Profile Access",
  title: "Need more information?",
  intro:
    "Some professional and project details are shared only when appropriate. If you're a potential client, partner or employer and need deeper context, request access and I'll review your request personally.",
  privacyNote:
    "No sensitive or personal information is published on this site. Approved requests are handled manually and privately.",
  steps: [
    {
      step: "01",
      title: "Sign in or create an account",
      desc: "Requests are tied to a verified account so they can be reviewed properly.",
    },
    {
      step: "02",
      title: "Submit your request",
      desc: "Tell me who you are, your organization and why you need access.",
    },
    {
      step: "03",
      title: "Manual review",
      desc: "I review each request personally and contact you if access is appropriate.",
    },
  ],
  form: {
    nameLabel: "Full name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "you@business.com",
    companyLabel: "Company / organization",
    companyPlaceholder: "Business or organization (optional)",
    reasonLabel: "Reason for request",
    reasonPlaceholder: "e.g., Client engagement, partnership, employment",
    messageLabel: "Message",
    messagePlaceholder: "What specific information do you need and why?",
    submit: "Request Private Profile Access",
  },
  signInTitle: "Sign in to request access",
  signUpTitle: "Create an account to request access",
  successTitle: "Request received",
  successBody:
    "Your request is under review. If access is appropriate, I'll contact you directly — no automated approvals.",
};

/* Trust labels — qualitative on purpose. No invented numbers, clients or
   performance figures are shown anywhere on this site. */
export const stats = [
  { value: "Hands-on", label: "Marketplace operations experience" },
  { value: "Operator-led", label: "Projects and systems built from real work" },
  { value: "Honest", label: "No invented metrics, clients or results" },
  { value: "Remote", label: "USA · UK · Norway · Sweden · Pakistan" },
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

/* Selected Achievements — evidence-backed milestones, each linked to the
   page where the work is explained. No invented awards, clients, revenue
   or dates. */
export const achievements: {
  icon: IconName;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: "cart",
    title: "Multi-Marketplace Operations",
    desc: "Hands-on operations across eBay, Depop, Mercari, Etsy, TikTok Shop and AliExpress — listings, inventory, fees, payouts and profit reporting.",
    href: "/projects/multi-marketplace-operations",
  },
  {
    icon: "layers",
    title: "Embani ERP",
    desc: "Product vision, business logic, financial workflows and ERP planning for an e-commerce accounting and profit-tracking platform in active development.",
    href: "/projects/embani-erp",
  },
  {
    icon: "settings",
    title: "SpotAware",
    desc: "Product concept and workflow design for a business operations platform structured around real team responsibilities.",
    href: "/projects/spotaware",
  },
  {
    icon: "store",
    title: "Himalayan Koh",
    desc: "Operational and digital-systems support across retail, wholesale and export — packaging, catalogues and coordination.",
    href: "/projects/himalayan-koh",
  },
  {
    icon: "spark",
    title: "SoSAi / Hermes AI Agent",
    desc: "Designed and actively developing a personal AI operations agent built with Hermes — monitoring, coordination and workflows.",
    href: "/ai-automation",
  },
  {
    icon: "sheet",
    title: "Google Sheets Workflow Systems",
    desc: "Controlled sales workspaces, profit and COGS tracking and workflow automation built in Google Sheets around real data.",
    href: "/projects/google-sheets-sales-workspace",
  },
  {
    icon: "cpu",
    title: "AI-Assisted Development",
    desc: "AI-assisted websites, platforms and internal tools built around real processes — with honest status on every item.",
    href: "/ai-automation",
  },
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
    role: "Operational planning, business logic, workflow design, product direction, testing and AI-assisted implementation.",
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
    role: "Product concept, operational use cases, workflow design, interface direction and testing.",
    caseStudy:
      "SpotAware is a business operations and workflow platform in the design and early development stages. The focus so far has been on structuring operations around real team responsibilities and business flow. No production users, customers or performance figures are published.",
    accent: "brand",
    icon: "cpu",
  },
  {
    slug: "himalayan-koh",
    name: "Himalayan Koh",
    type: "Product, Retail, Wholesale and Export Operations",
    tech: ["Salt Products", "Catalogue", "Retail & Wholesale", "Export Coordination"],
    desc: "Operational support for salt products across retail, wholesale and export — packaging, catalogues, product operations and shipment coordination.",
    overview:
      "Himalayan Koh covers product, retail, wholesale and export operations around salt products. The work spans packaging preparation, catalogue building, product operations and shipment and export coordination support — plus the website and retailer workflows that keep the business selling.",
    businessProblem:
      "A product business selling salt across retail, wholesale and export needs consistent packaging, catalogues and operations — with coordination between website, retailers and shipments.",
    solution:
      "Operational support across the full product cycle — retail and wholesale preparation, packaging, catalogues, product operations, and shipment and export coordination — with website and retailer workflows.",
    capabilities: [
      "Salt product operations",
      "Retail and wholesale preparation",
      "Packaging coordination",
      "Catalogue building",
      "Shipment and export coordination support",
      "Website and retailer workflows",
    ],
    focusPoints: [
      "Supported retail, wholesale and export preparation",
      "Coordinated packaging, catalogues and product operations",
      "Planned website and retailer workflows",
    ],
    highlights: [
      "Salt products and catalogue",
      "Retail and wholesale operations",
      "Export coordination support",
    ],
    caseStudy:
      "A product and export operations engagement. Salman's role covers operational and digital-systems support — the companies remain independently owned and operated.",
    accent: "gold",
    icon: "store",
  },
  {
    slug: "multi-marketplace-operations",
    name: "Multi-Marketplace Operations",
    type: "Hands-on Marketplace Operations",
    tech: ["eBay", "Depop", "Mercari", "Poshmark", "Etsy", "TikTok Shop"],
    desc: "Hands-on experience running sales across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress — listings, inventory, fees, support, payouts and reporting.",
    overview:
      "The operational core behind everything I build: real, repeated work running sales across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress. Listings, pricing, inventory, buyer support, fee structures, payouts and reporting — the daily realities that shape how I design systems.",
    businessProblem:
      "Selling across eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop and AliExpress means many fee structures, payout cycles and ways of handling buyers — chaos without a consistent operating rhythm.",
    solution:
      "Consistent, hands-on operations across the marketplaces — listings, pricing, inventory, buyer support, fee reconciliation, payouts and reporting — run as disciplined daily practice.",
    capabilities: [
      "Listings, pricing and inventory across marketplaces",
      "Buyer support and account management",
      "Fee structure comparison",
      "Payout reconciliation",
      "Per-channel profit reporting",
      "Operational routines that scale",
    ],
    focusPoints: [
      "Built and optimised listings across marketplaces",
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
  "Poshmark",
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
    periodLabel: "Getting started",
    title: "Early online selling",
    role: "Online · Hands-on",
    points: [
      "First marketplace listings and sales",
      "Product research and listing basics",
      "Learning fees, shipping and payouts",
    ],
  },
  {
    period: "Phase Two",
    periodLabel: "Scaling across channels",
    title: "Multi-platform operations",
    role: "Marketplace Operations · Remote",
    points: [
      "Running sales across several marketplaces",
      "Listings, inventory and order processing",
      "Per-channel fees and payout handling",
    ],
  },
  {
    period: "Phase Three",
    periodLabel: "Working with product",
    title: "Sourcing and product coordination",
    role: "Sourcing & Operations · Remote",
    points: [
      "Supplier research and comparison",
      "MOQ and sample planning",
      "Packaging and shipment coordination support",
    ],
  },
  {
    period: "Phase Four",
    periodLabel: "Bringing order to data",
    title: "Spreadsheets and business systems",
    role: "Operations Systems · Remote",
    points: [
      "Sales workspaces in Google Sheets",
      "COGS, fees and profit tracking",
      "SOPs and team workflows",
    ],
  },
  {
    period: "Phase Five",
    periodLabel: "Building tools",
    title: "AI-assisted websites and ERP",
    role: "Product & Systems · Project-based",
    points: [
      "Operational planning for ERP and dashboards",
      "Business logic and workflow design",
      "AI-assisted implementation",
    ],
  },
  {
    period: "Phase Six",
    periodLabel: "Sharing the work",
    title: "Consulting and training direction",
    role: "Consulting & Training · Remote",
    points: [
      "Marketplace and profit consulting",
      "Practical operations training",
      "International remote support",
    ],
  },
];

/* Resume shown as a professional overview on the /resume page.
   A downloadable CV is a later phase — nothing fake is generated. */
export const resume = {
  available: false,
  summary:
    "E-commerce operator turned business systems consultant. Hands-on experience across marketplace listings, inventory, orders, fees, payouts and profit reporting — now applied to ERP prototyping, dashboards, automation and AI-assisted product development for online businesses.",
  coreCapabilities: [
    "Marketplace operations",
    "Profit and COGS tracking",
    "Workflow design and SOPs",
    "Google Sheets systems",
    "ERP and internal tool planning",
    "AI-assisted implementation",
  ],
  marketplaceExperience: [
    "Product research and listing creation",
    "Inventory and order processing",
    "Buyer support and account management",
    "Fee structures and payout reconciliation",
    "Profit reporting per channel",
  ],
  sourcing: [
    "Supplier research and comparison",
    "MOQ and sample planning",
    "Packaging coordination",
    "Invoice and packing-list review",
    "Air vs sea and landed cost planning",
    "Shipment coordination support",
  ],
  businessSystems: [
    "Profit dashboards and sales workspaces",
    "Marketplace integration planning",
    "ERP workflows and prototypes",
    "AI-assisted website and system planning",
  ],
  tools: [
    "eBay",
    "Depop",
    "Mercari",
    "Etsy",
    "TikTok Shop",
    "Google Sheets",
    "Supabase",
    "Vercel",
    "GitHub",
    "Next.js",
    "Node.js",
  ],
  projectHighlights: [
    "Embani ERP — accounting and marketplace operations system",
    "SpotAware — business operations and workflow platform",
    "Himalayan Koh — product, retail and export operations",
    "Marketplace operations across multiple platforms",
    "Google Sheets sales workspace",
  ],
  remoteAvailability:
    "Available for remote consulting, project work and online training. Based in Pakistan, supporting clients connected to the United States, United Kingdom, Norway, Sweden and international online markets.",
  note:
    "This is a professional overview. Exact employment dates, employer names and performance figures are intentionally not published. A downloadable version will be added in a future phase.",
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
  "Workflow reviews",
  "Marketplace training",
  "Profit and COGS sessions",
  "ERP planning",
  "AI-assisted website and system planning",
];

export const trainingTopics = [
  "eBay",
  "Depop",
  "Mercari",
  "Listings",
  "Research",
  "Pricing",
  "Fees",
  "COGS",
  "Profit calculations",
  "Orders and returns",
  "Payout reconciliation",
  "Google Sheets",
  "SOPs",
  "Business-system planning",
];

export const trainingDisclosure =
  "Training is educational and based on practical operational experience. Results depend on execution, marketplace rules and business conditions — no results are guaranteed.";

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
      body: "This page explains what information this website collects and how it is used. This site is a personal portfolio. It does not sell your personal data. Google AdSense may display contextual advertisements on public pages after Google approves the site; Google may use cookies or similar technologies to measure and personalise advertising under its own policies.",
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
      body: "This site does not use an independent analytics tracker or third-party fingerprinting. If AdSense ads are served, Google may use cookies or similar technologies for ad delivery, measurement and personalisation. You can manage advertising preferences through Google's Ads Settings and your browser controls."
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
  { label: "Marketplace", href: "/marketplace-services" },
  { label: "Sourcing", href: "/sourcing-freight" },
  { label: "Systems", href: "/business-systems" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/* Secondary navigation shown under a "More" menu so the primary nav stays
   uncluttered. Also linked from the footer, homepage previews and
   related-page CTAs. */
export const moreLinks = [
  { label: "My Journey", href: "/journey" },
  { label: "Skills", href: "/skills" },
  { label: "Team", href: "/team" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Media", href: "/media" },
  { label: "Credentials", href: "/credentials" },
  { label: "Resume", href: "/resume" },
  { label: "Fiverr Gigs", href: "/fiverr" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Marketplace Services", href: "/marketplace-services" },
  { label: "Sourcing & Freight", href: "/sourcing-freight" },
  { label: "Business Systems", href: "/business-systems" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Skills", href: "/skills" },
  { label: "Team", href: "/team" },
  { label: "AI & Automation", href: "/ai-automation" },
  { label: "Media", href: "/media" },
  { label: "Credentials", href: "/credentials" },
  { label: "Fiverr Gigs", href: "/fiverr" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

/* Phase-1 homepage & business hub content */

export const profileCard = {
  message:
    "I work hands-on across marketplaces first, then build the systems around the way the business really runs.",
  currentFocus: "Embani ERP — internal operations prototype",
  availability: "Remote consulting · Project work · Online training",
};

export const ceoNote = {
  title: "Founder & CEO",
  message:
    "Every system I build starts on the operations floor, not the whiteboard. Real orders. Real payouts. Real deadlines.",
};

/* Compact destination list shown in the hero, so a visitor can jump
   anywhere without scrolling or opening the menu. */
export const heroQuickLinks: {
  icon: IconName;
  label: string;
  href: string;
}[] = [
  { icon: "book", label: "Training", href: "/training" },
  { icon: "users", label: "Community", href: "/community" },
  { icon: "store", label: "Marketplace", href: "/marketplace-services" },
  { icon: "box", label: "Sourcing", href: "/sourcing-freight" },
  { icon: "layers", label: "Projects", href: "/projects" },
  { icon: "cpu", label: "AI & Automation", href: "/ai-automation" },
  { icon: "settings", label: "Systems", href: "/business-systems" },
  { icon: "chart", label: "Skills", href: "/skills" },
  { icon: "compass", label: "Journey", href: "/journey" },
  { icon: "youtube", label: "Media", href: "/media" },
  { icon: "badge", label: "Credentials", href: "/credentials" },
  { icon: "file", label: "Resume", href: "/resume" },
];

/* Short "built with" strip for the hero. The full breakdown lives in
   techStack below; this is the glanceable version. */
export const heroStack: { label: string; note: string }[] = [
  { label: "React", note: "UI" },
  { label: "TypeScript", note: "Types" },
  { label: "Supabase", note: "Database & auth" },
  { label: "Vercel", note: "Deploys" },
  { label: "GitHub", note: "Source" },
  { label: "Tailwind", note: "Styling" },
];

/* Flagship builds, surfaced in the hero so the work is visible immediately.
   Statuses stay honest — nothing in development is shown as shipped. */
export const featuredBuilds: {
  name: string;
  desc: string;
  status: "Live" | "In Development" | "Prototype";
  href: string;
}[] = [
  {
    name: "Hermes AI Agent",
    desc: "Local AI operations agent",
    status: "In Development",
    href: "/ai-automation",
  },
  {
    name: "Embani ERP",
    desc: "Internal operations system",
    status: "Prototype",
    href: "/projects/embani-erp",
  },
  {
    name: "SpotAware",
    desc: "Location awareness tool",
    status: "Prototype",
    href: "/projects/spotaware",
  },
];

/* Audience-first entry points. Someone landing here should find their own
   route in one glance instead of reading the whole page. */
export const audiencePaths: {
  icon: IconName;
  audience: string;
  headline: string;
  description: string;
  href: string;
  cta: string;
  tone: "amber" | "emerald" | "rose" | "sky";
}[] = [
  {
    icon: "book",
    audience: "I want to learn",
    headline: "Training & Bootcamps",
    description:
      "Marketplace selling, profit and COGS, and the workflows behind them — taught from real operations.",
    href: "/training",
    cta: "See training",
    tone: "amber",
  },
  {
    icon: "store",
    audience: "I run a business",
    headline: "Operations & Systems",
    description:
      "Listings, inventory, payouts and profit visibility brought into one system your team can actually run.",
    href: "/services",
    cta: "See services",
    tone: "emerald",
  },
  {
    icon: "cpu",
    audience: "I need AI & automation",
    headline: "AI Agents & Workflows",
    description:
      "Hermes AI Agent, automated marketplace workflows and AI-assisted internal tools built around real processes.",
    href: "/ai-automation",
    cta: "Explore AI work",
    tone: "rose",
  },
  {
    icon: "layers",
    audience: "Show me the work",
    headline: "Projects & Case Studies",
    description:
      "Embani ERP, SpotAware and the rest — what was built, why, and what it changed.",
    href: "/projects",
    cta: "View projects",
    tone: "sky",
  },
];

export const introVideo = {
  title: "A quick word from Salman",
  description:
    "A short introduction to how I work with marketplaces, sourcing and business systems.",
  /* 60-second showreel: set ONE of these and the hero video button plays it.
     - youtubeUrl: any YouTube watch/share link (e.g. https://youtu.be/XXXX)
     - mp4Url:     a direct .mp4 file URL. The default below is drop-in ready:
                   drop your file at public/intro-video.mp4 and it just works.
     If the file isn't there yet (or the URL 404s), the honest "coming soon"
     placeholder shows instead of a broken player. */
  youtubeUrl: "",
  mp4Url: "/intro-video.mp4",
};

export type StrengthCard = {
  icon: IconName;
  title: string;
  desc: string;
  points: string[];
};

export const coreStrengths: StrengthCard[] = [
  {
    icon: "store",
    title: "Real Marketplace Experience",
    desc: "I have run actual listings, orders, inventory and payouts across multiple marketplaces — the work is not theoretical.",
    points: ["Multi-marketplace operations", "Buyer and seller workflows", "Fee and payout reality"],
  },
  {
    icon: "target",
    title: "Business Problem-Solving",
    desc: "I start with the operational problem and the money, then decide what actually needs to change.",
    points: ["Profit and COGS thinking", "Root-cause process work", "Practical priorities"],
  },
  {
    icon: "layers",
    title: "Systems Thinking",
    desc: "Scattered spreadsheets and manual steps become one clear system that matches how the business really runs.",
    points: ["Workflow design", "Data structure", "Google Sheets systems"],
  },
  {
    icon: "bolt",
    title: "Practical Execution",
    desc: "Small, tested increments instead of over-engineered builds — built, tested and handed over to the team.",
    points: ["Incremental builds", "AI-assisted implementation", "Documented handover"],
  },
];

export const businessPillars: {
  icon: IconName;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    icon: "cart",
    title: "Marketplace Services",
    desc: "Listings, operations, profit records and workflow support across the marketplaces you sell on.",
    href: "/marketplace-services",
  },
  {
    icon: "box",
    title: "Sourcing and Freight Coordination",
    desc: "Supplier comparison, MOQ planning, landed cost and shipment coordination support.",
    href: "/sourcing-freight",
  },
  {
    icon: "cpu",
    title: "Business Systems and Automation",
    desc: "Dashboards, internal tools and ERP prototypes built around how your business runs.",
    href: "/business-systems",
  },
  {
    icon: "book",
    title: "Consulting and Practical Training",
    desc: "Hands-on training and consultations on marketplace operations, profit and systems.",
    href: "/training",
  },
];

/* Business & Trade — a compact gateway section on the homepage pointing
   buyers, sellers and sourcing clients into the unified inquiry flow.
   Wording stays within "sourcing & trade coordination" limits: nothing
   claims licensed freight-forwarding, customs brokerage or import/export. */
export const businessTrade = {
  eyebrow: "Business & Trade",
  title: "One entry point for business inquiries",
  intro:
    "From marketplace operations to product sourcing, wholesale inquiries and business systems — practical support built around real operations.",
  cards: [
    {
      icon: "store",
      title: "Himalayan Salt & Wholesale",
      audience: "For Himalayan Koh products, retail, wholesale, bulk orders, export and private label / packaging inquiries.",
      points: [
        "Retail & wholesale supply",
        "Bulk orders & export inquiries",
        "Private label / packaging",
      ],
      href: "/contact?inquiry=himalayan-salt",
      cta: "Request Salt Quote",
    },
    {
      icon: "box",
      title: "Product Sourcing & Buying",
      audience: "For businesses needing products sourced from Alibaba, AliExpress, China suppliers and other verified channels.",
      points: [
        "Product research & supplier comparison",
        "MOQ, samples & quotation comparison",
        "Packaging, landed-cost & shipment coordination",
      ],
      href: "/contact?inquiry=product-sourcing",
      cta: "Discuss a Sourcing Requirement",
      disclosure:
        "Sourcing & trade coordination support only — Salman is not a licensed freight forwarder or customs broker.",
    },
    {
      icon: "cart",
      title: "Marketplace Operations",
      audience: "For sellers running eBay, Depop, Mercari, Poshmark, Etsy, TikTok Shop, AliExpress or similar.",
      points: [
        "Listings, pricing, inventory & order workflow",
        "Returns, payouts & COGS / profit tracking",
        "Sourcing for resale, SOPs & workflow improvement",
      ],
      href: "/contact?inquiry=marketplace-operations",
      cta: "Get Marketplace Support",
      note: "Salman and the team can help you source or buy products AND operate or manage your marketplace workflows.",
    },
  ] as {
    icon: IconName;
    title: string;
    audience: string;
    points: string[];
    href: string;
    cta: string;
    disclosure?: string;
    note?: string;
  }[],
};

export const marketplacePreview: StrengthCard[] = [
  {
    icon: "cart",
    title: "Listing and Catalogue",
    desc: "Research, listings, titles, pricing and catalogue structure done properly.",
    points: ["Product research", "Listing creation", "Catalogue structure"],
  },
  {
    icon: "settings",
    title: "Operations",
    desc: "Orders, inventory, returns and buyer issues handled with a clear workflow.",
    points: ["Order handling", "Inventory control", "Team SOPs"],
  },
  {
    icon: "chart",
    title: "Profit and Records",
    desc: "Fees, COGS and payouts tracked so real profit is visible, not guessed.",
    points: ["Fee mapping", "COGS tracking", "Payout reconciliation"],
  },
  {
    icon: "bolt",
    title: "Workflow Support",
    desc: "SOPs, dashboards and operational reviews that keep the business consistent.",
    points: ["SOP creation", "Dashboards", "Operational reviews"],
  },
];

/* Detailed service groups for the Marketplace Services page. */
export const marketplaceServiceGroups: {
  icon: IconName;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: "cart",
    title: "Listing and Catalogue",
    desc: "Products researched, listed and catalogued so they sell on their own strength — not on guesswork.",
    items: [
      "Product research",
      "Listing creation",
      "Titles and descriptions",
      "Pricing",
      "Item specifics",
      "Images and catalogue",
      "Variations and inventory",
    ],
  },
  {
    icon: "settings",
    title: "Operations",
    desc: "The daily work of selling handled with a clear, consistent workflow.",
    items: [
      "Orders",
      "Inventory",
      "Returns",
      "Customer issues",
      "Handling workflow",
      "Account organization",
      "Team SOPs",
    ],
  },
  {
    icon: "chart",
    title: "Profit and Records",
    desc: "Every sale tied back to fees, cost and payout so the real number is visible.",
    items: [
      "Marketplace fees",
      "COGS",
      "Payouts",
      "Profit visibility",
      "Buying records",
      "Spreadsheets",
      "Reconciliation planning",
    ],
  },
  {
    icon: "bolt",
    title: "Workflow Support",
    desc: "Processes documented and reviewed so the business runs without depending on one person.",
    items: [
      "SOP creation",
      "Role structure",
      "Task flow",
      "Quality control",
      "Dashboards",
      "Operational reviews",
    ],
  },
];

export const marketplaceDisclaimer =
  "I help sellers organize and improve their operations. I do not promise guaranteed sales, guaranteed revenue or account reinstatement — marketplace results depend on execution, platform rules and market conditions.";

export const businessSystems = {
  summary:
    "I combine operational knowledge with AI-assisted development to build practical websites, dashboards and internal systems.",
  role: [
    "Product vision",
    "Business logic",
    "Workflow design",
    "Interface planning",
    "Testing",
    "AI-assisted implementation",
  ],
  stack: ["Supabase", "Vercel", "GitHub", "Google Sheets"],
  examples: [
    "Embani ERP",
    "SpotAware",
    "Google Sheets Sales Workspace",
    "Marketplace dashboards",
    "Internal workflow tools",
  ],
  note:
    "This is product and systems work from an operator's perspective — planning, workflow design and AI-assisted implementation. It is not positioning Salman as a senior software engineer.",
};

export type BusinessCta = {
  label: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type BusinessCard = {
  name: string;
  type: string;
  status: "Active Development" | "Planning" | "Ongoing" | "Placeholder" | "Live";
  desc: string;
  note: string;
  ctas: BusinessCta[];
};

export const businessCards: BusinessCard[] = [
  {
    name: "Shin Dev",
    type: "Website and Digital Development",
    status: "Placeholder",
    desc: "Websites and digital development work — planned and scoped as projects come in.",
    note: "Details shared when a project is scoped.",
    ctas: [
      { label: "Explore Shin Dev", comingSoon: true },
      { label: "Start a Website Project", href: "/contact" },
    ],
  },
  {
    name: "Himalayan Koh",
    type: "Salt Products, Retail, Wholesale and Export Operations",
    status: "Ongoing",
    desc: "Product, retail, wholesale and export operations around salt products.",
    note: "Ongoing operational and digital-systems support.",
    ctas: [
      { label: "Explore Products", href: "/projects/himalayan-koh" },
      {
        label: "Request Salt Quote",
        href: "/contact?inquiry=himalayan-salt",
      },
    ],
  },
  {
    name: "Embani ERP",
    type: "E-commerce Accounting and Marketplace Operations System",
    status: "Active Development",
    desc: "One clear system for accounting, profit tracking and daily marketplace operations.",
    note: "Built around the way a real business works.",
    ctas: [
      { label: "Explore Embani ERP", href: "/projects/embani-erp" },
      { label: "Discuss an ERP Project", href: "/book" },
    ],
  },
  {
    name: "Fiverr",
    type: "Freelance Services",
    status: "Live",
    desc: "Freelance services for marketplace operations, sourcing and business systems work.",
    note: "Freelance gigs available now on Fiverr.",
    ctas: [
      {
        label: "Hire Me on Fiverr",
        href: "https://www.fiverr.com/pe/BbB0Ply",
        external: true,
      },
    ],
  },
  {
    name: "Salman Bashir Consulting",
    type: "Consulting and Training",
    status: "Live",
    desc: "Consulting, systems and training built around real marketplace operations.",
    note: "Consulting and project work available now.",
    ctas: [
      { label: "Book a Consultation", href: "/book" },
      { label: "View Training", href: "/training" },
    ],
  },
];

export const sourcingPreview: StrengthCard[] = [
  {
    icon: "globe",
    title: "Sourcing Coordination",
    desc: "Alibaba and AliExpress sourcing with supplier comparison and shortlists.",
    points: ["Supplier research", "Quote comparison", "MOQ and sample planning"],
  },
  {
    icon: "box",
    title: "Freight Planning Notes",
    desc: "Air vs sea comparison, landed cost and shipment coordination support.",
    points: ["Air vs sea", "Landed cost", "Shipment communication"],
  },
  {
    icon: "sheet",
    title: "Documents and Records",
    desc: "Invoice and packing-list review with supplier follow-up and tracking.",
    points: ["Invoice review", "Packing lists", "Supplier follow-up"],
  },
];

export const sourcingSupport = [
  "Alibaba and AliExpress sourcing",
  "Supplier comparison",
  "MOQ and sample planning",
  "Packaging coordination",
  "Invoice and packing-list review",
  "Air vs sea comparison",
  "Landed cost calculation",
  "China–USA coordination",
  "China–Pakistan coordination",
  "Supplier follow-up",
  "Shipment communication",
];

export const sourcingDisclosure =
  "Salman provides sourcing and operational coordination support. He is not a licensed freight forwarder, customs broker or legal adviser. For customs clearance, duties and regulated logistics, qualified professionals handle those steps.";

export const trainingPreview: StrengthCard[] = [
  {
    icon: "cart",
    title: "Marketplace Training",
    desc: "Practical training on the marketplaces you actually sell on.",
    points: ["eBay, Depop, Mercari", "Listings and research", "Pricing and fees"],
  },
  {
    icon: "chart",
    title: "Profit & COGS Sessions",
    desc: "Understand what a sale really costs and how to read real margin.",
    points: ["COGS", "Profit calculations", "Payout reconciliation"],
  },
  {
    icon: "sheet",
    title: "Google Sheets Systems",
    desc: "Build practical sheets for sales tracking, inventory and reporting.",
    points: ["Sales workspaces", "Formulas", "Dashboards"],
  },
  {
    icon: "file",
    title: "SOPs and Process Planning",
    desc: "Document processes and plan business systems that stick.",
    points: ["SOP writing", "Workflow reviews", "System planning"],
  },
  {
    icon: "settings",
    title: "ERP Planning",
    desc: "The concepts behind ERP workflows for teams moving off spreadsheets.",
    points: ["Master data", "Process flows", "Reporting"],
  },
  {
    icon: "cpu",
    title: "AI-Assisted System Planning",
    desc: "Plan websites and internal systems with AI-assisted implementation.",
    points: ["Website planning", "System planning", "AI-assisted builds"],
  },
];

export const opportunitySeats = {
  heading: "Opportunity Seats",
  copy: "Limited free or sponsored learning seats may be offered to committed learners with limited financial resources.",
  selection: [
    "Genuine need",
    "Commitment",
    "Attendance",
    "Assignments",
    "Respectful participation",
  ],
  cta: "Apply for an Opportunity Seat",
  href: "/book",
};

export const practiceLab = {
  heading: "Hands-on Practice Lab",
  tagline: "Learn it. Practise it. Build it.",
  copy: "Structured exercises where learners practise the real operational work — with mock data, not live accounts.",
  exercises: [
    "Mock listings",
    "Pricing",
    "Fees",
    "COGS",
    "Profit",
    "Returns",
    "Payout reconciliation",
    "Google Sheets",
    "SOP writing",
    "Mini operational project",
  ],
  note: "Structured practice only — not live client-account access.",
  href: "/community",
};

export type TeamRole = {
  role: string;
  desc: string;
  placeholder: boolean;
};

/* All GitHub repositories — surfaced in a compact strip on the homepage. */
export const githubRepos: {
  name: string;
  desc: string;
  url: string;
}[] = [
  {
    name: "luxedge-website",
    desc: "LuxEdge website",
    url: "https://github.com/8002salman-ai/luxedge-website",
  },
  {
    name: "himalayan-koh",
    desc: "Himalayan Koh product site",
    url: "https://github.com/8002salman-ai/himalayan-koh",
  },
  {
    name: "SalmanBashir",
    desc: "Portfolio & business site",
    url: "https://github.com/8002salman-ai/SalmanBashir",
  },
  {
    name: "watpro-consultants",
    desc: "Watpro Consultants",
    url: "https://github.com/8002salman-ai/watpro-consultants",
  },
  {
    name: "EbayErp",
    desc: "eBay ERP system",
    url: "https://github.com/8002salman-ai/EbayErp",
  },
  {
    name: "8002PDF",
    desc: "PDF tool",
    url: "https://github.com/8002salman-ai/8002PDF",
  },
  {
    name: "spotaware-platform",
    desc: "SpotAware platform",
    url: "https://github.com/8002salman-ai/spotaware-platform",
  },
  {
    name: "8002-erp",
    desc: "8002 ERP",
    url: "https://github.com/8002salman-ai/8002-erp",
  },
  {
    name: "commerceos",
    desc: "CommerceOS",
    url: "https://github.com/8002salman-ai/commerceos",
  },
  {
    name: "i-864-affidavit-support-calculator",
    desc: "I-864 Affidavit calculator",
    url: "https://github.com/8002salman-ai/i-864-affidavit-support-calculator",
  },
  {
    name: "hot-grill-website",
    desc: "Hot Grill website",
    url: "https://github.com/8002salman-ai/hot-grill-website",
  },
];

export const teamRoles: TeamRole[] = [
  {
    role: "Marketplace Operations Support",
    desc: "Order, inventory and marketplace workflow support.",
    placeholder: true,
  },
  {
    role: "Listing & Product Support",
    desc: "Research, listings, pricing and catalogue support.",
    placeholder: true,
  },
  {
    role: "Sourcing & Buying Support",
    desc: "Supplier research, MOQ review, samples and buying coordination support.",
    placeholder: true,
  },
  {
    role: "Sales & Records Support",
    desc: "Sales records, profit tracking and payout reconciliation support.",
    placeholder: true,
  },
  {
    role: "Research & Coordination",
    desc: "Product, supplier and shipment coordination support.",
    placeholder: true,
  },
  {
    role: "Systems / Workflow Support",
    desc: "Google Sheets systems, SOPs and workflow improvement support.",
    placeholder: true,
  },
];
