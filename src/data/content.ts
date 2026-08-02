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

/* Verified contact channels. Fiverr and LinkedIn stay empty until
   real URLs are provided — never invent public profile links. */
export const contact = {
  email: "salmanbashir80@gmail.com",
  github: "https://github.com/8002salman-ai",
  fiverr: "",
  linkedin: "",
  availability: "Available for remote consulting, project work and online training",
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
  slug: string;
  name: string;
  type: string;
  tech: string[];
  desc: string;
  overview?: string;
  focusPoints?: string[];
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
    slug: "embani-erp",
    name: "Embani ERP",
    type: "E-commerce ERP & Profit Tracking Platform",
    tech: ["Next.js", "Supabase", "Google Sheets", "Marketplace APIs"],
    desc: "An e-commerce ERP platform being built for marketplace businesses that need one clear system for accounting, profit tracking and daily operations — sales, COGS, fees, tax, inventory, expenses, payroll and payouts.",
    overview:
      "Marketplace businesses often run across spreadsheets, marketplaces and chat — with profit scattered between fees, COGS, tax and payouts. Embani ERP is being built to bring accounting, profit tracking and daily operations into one clear system designed around how a seller's money and inventory actually move.",
    focusPoints: [
      "Designed the product vision and business requirements from real marketplace experience",
      "Mapped the financial workflows — sales, COGS, fees, tax, payouts — before any code",
      "Directed the data structure so reporting stays truthful and reviewable",
      "Led UX direction and tested workflows against real operator scenarios",
    ],
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
    slug: "spotaware",
    name: "SpotAware",
    type: "Business Operations & Workflow Platform",
    tech: ["Next.js", "Supabase", "Vercel", "AI APIs"],
    desc: "A business operations and workflow platform designed to keep sales, inventory, partners and daily operations in one clear system — built around how a real team works.",
    overview:
      "Growing businesses accumulate tools, spreadsheets and responsibility gaps. SpotAware was designed as a single operations platform where sales, inventory, partners and daily work live together, structured around the real flow of the business rather than around features.",
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

/* Structured resume content — built from honest, broad phases.
   Exact employment dates and employer names are not published. */
export const resume = {
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

export const training: Training[] = [
  {
    title: "Marketplace Operations Foundations",
    desc: "A practical walkthrough of how marketplace selling actually works — listings, pricing, inventory, orders, buyer communication and daily routines across the main channels.",
    points: [
      "Listing creation and optimization",
      "Pricing and margin basics",
      "Inventory and order routines",
      "Buyer communication that protects your account",
    ],
    format: "1:1 or small group · live or recorded",
    icon: "cart",
  },
  {
    title: "Profit & COGS Made Clear",
    desc: "Understand what you actually earn. Learn how to track sales, COGS, fees, tax and payouts so profit is a number you trust — not a guess.",
    points: [
      "Breaking down marketplace fees",
      "Real COGS and true cost tracking",
      "Payout and profit reporting",
      "Simple dashboards you can maintain",
    ],
    format: "1:1 · live sessions + follow-up",
    icon: "chart",
  },
  {
    title: "Google Sheets Systems for Sellers",
    desc: "Build safe, organised spreadsheets for sales, stock and payouts — with controlled imports, review steps and tabs that stay reportable.",
    points: [
      "Sales and payout tracking",
      "Safe import and review workflows",
      "Inventory tracking that stays current",
      "Formulas that make sense",
    ],
    format: "1:1 · hands-on, you build as we go",
    icon: "sheet",
  },
  {
    title: "Workflow & Automation Basics",
    desc: "Find the repetitive work worth automating, plan the workflow first, and choose the simplest reliable automation — without over-engineering.",
    points: [
      "Spotting repetitive manual work",
      "Documenting a workflow before automating",
      "Simple automation options per task",
      "Where automation is not worth it",
    ],
    format: "1:1 · consulting-style session",
    icon: "bolt",
  },
  {
    title: "AI-Assisted Product & Business Workflows",
    desc: "Learn practical, hands-on ways to use AI in your business — product development, reporting, SOPs and admin — with realistic expectations set from the start.",
    points: [
      "AI-assisted product development",
      "AI for reporting and documents",
      "Choosing the right AI tool per task",
      "Keeping your data private",
    ],
    format: "1:1 or small group · live",
    icon: "spark",
  },
];

export const book = {
  heading: "Let's talk about your business",
  intro:
    "Tell me where your operations are today and what you want to change. I'll respond personally and honestly — if I'm not the right fit, I'll say so.",
  options: [
    {
      title: "Consultation Call",
      length: "30–60 minutes",
      desc: "A focused conversation about your marketplace operations, profit visibility or automation ideas — with clear, actionable notes after.",
      icon: "message" as IconName,
    },
    {
      title: "Project Work",
      length: "Scoped per project",
      desc: "Dashboards, workflows, integration plans or ERP prototypes — agreed scope, honest delivery, built around your real operations.",
      icon: "layers" as IconName,
    },
    {
      title: "Online Training",
      length: "1:1 or small group",
      desc: "Practical sessions on operations, profit & COGS, Google Sheets systems, automation or AI-assisted workflows.",
      icon: "book" as IconName,
    },
  ] as { title: string; length: string; desc: string; icon: IconName }[],
  process: [
    {
      step: "01",
      title: "You reach out",
      desc: "Share a few details about your business and what you'd like to improve.",
    },
    {
      step: "02",
      title: "We talk",
      desc: "A short call or email exchange to understand your situation and goals.",
    },
    {
      step: "03",
      title: "Clear next step",
      desc: "An honest recommendation — a scope, a session, or a referral if I'm not the right fit.",
    },
  ],
  whatToExpect: [
    "A personal reply from me — not an automated response",
    "Honest advice, even when it means less work for me",
    "Clear, jargon-free recommendations",
    "No pressure and no long-term commitment to start",
  ],
};

export const privacy = {
  updated: "August 2026",
  owner: "Salman Bashir",
  contactEmail: "salmanbashir80@gmail.com",
  sections: [
    {
      title: "Overview",
      body: "This page explains what information this website collects and how it is used. This site is a personal portfolio — it does not sell data, show ads or share your information with third parties.",
    },
    {
      title: "Contact form",
      body: "The contact form opens your email app with a pre-filled message. Your details go directly to my email address — they are not stored in any database or form service, and I do not retain them longer than needed to respond to your inquiry.",
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
      body: "Links to external services (for example GitHub) are provided for your convenience and are subject to their own privacy policies.",
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
