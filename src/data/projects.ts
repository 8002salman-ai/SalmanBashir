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
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  tag?: string;
  metrics?: { label: string; value: string }[];
};

const baseProcess: ProcessStep[] = [
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
    desc: "Direct modern cloud and AI-assisted implementation engineered for speed, responsiveness and reliability.",
  },
  {
    title: "Test",
    desc: "Test workflows against real operator scenarios and edge cases before deployment.",
  },
  {
    title: "Deploy & Document",
    desc: "Ship to production with continuous integration, documented SOPs, and monitoring.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "embani-erp",
    title: "8002 ERP / Embani ERP",
    category: "E-Commerce ERP & Profit Tracking Platform",
    status: "Live",
    summary:
      "Enterprise e-commerce ERP for multi-channel operators — sales, COGS, fees, multi-warehouse inventory, and payout reconciliation in one synchronized system.",
    overview:
      "Multi-channel marketplace sellers struggle across exports, fragmented payout sheets, and disconnected warehouse logs. 8002 ERP brings inventory control, true profit margin analysis, payout auditing, and team workflows into a unified cloud system built from the operator's perspective.",
    businessProblem:
      "Sales records are scattered across marketplace exports, payout files and spreadsheets. Real profit is obscured by platform fees, COGS, tax and shipping overhead, leaving operators without real-time financial clarity.",
    objectives: [
      "Real-time visibility into sales, COGS, fees, taxes and net profit",
      "Automated payout reconciliation matching bank deposits to order lines",
      "Multi-warehouse procurement and inventory reorder intelligence",
      "Direct API integrations with marketplace feeds and Google Sheets",
      "Role-based access control with complete operational audit trails",
    ],
    role: "Full-stack architecture, workflow design, business logic, inventory database schemas, and production deployment.",
    roleAreas: [
      "Architecture & Database Design",
      "Inventory & Order Workflows",
      "Financial & Payout Reconciliation",
      "Frontend UI/UX",
      "Vercel & Supabase Cloud Deployment",
    ],
    process: baseProcess,
    features: [
      "Real-time multi-warehouse inventory tracking",
      "Automated fee deduction & net profit calculation",
      "Payout reconciliation matching bank transfers to individual orders",
      "Multi-channel marketplace syncing (eBay, Amazon, TikTok Shop)",
      "Role-based permissions & secure authentication",
      "Exportable financial reports & tax statements",
    ],
    areas: [
      {
        title: "Multi-Warehouse Inventory",
        desc: "Live stock tracking, reorder alert thresholds and warehouse transfer logs.",
        status: "Live",
      },
      {
        title: "Profit & Margin Analytics",
        desc: "Automated calculations factoring gross revenue, COGS, marketplace fees, and shipping.",
        status: "Live",
      },
      {
        title: "Payout Reconciliation Engine",
        desc: "Matches lump-sum deposits to individual line items and transaction IDs.",
        status: "Live",
      },
      {
        title: "Marketplace Data Ingestion",
        desc: "Import pipelines for Google Sheets, CSV transaction files, and eBay seller APIs.",
        status: "Live",
      },
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel", "GitHub"],
    outcomes: [
      "Fully operational ERP deployed in production at 8002-erp.vercel.app",
      "Eliminated manual spreadsheet reconciliation errors for marketplace orders",
      "Sub-second inventory lookups across thousands of SKUs",
      "Audit-proof evidence chain for all financial transactions",
    ],
    limitations:
      "Currently deployed with authenticated operational access. Demo sandbox accounts provide safe inspection of sanitized multi-channel data.",
    evidence: [
      {
        type: "Live website",
        label: "8002 ERP Production Web App",
        status: "Verified",
        url: "https://8002-erp.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/8002-erp",
        status: "Verified",
        url: "https://github.com/8002salman-ai/8002-erp",
      },
      {
        type: "Deployment",
        label: "Vercel Global Edge Network Deployment",
        status: "Verified",
        url: "https://8002-erp.vercel.app",
      },
      {
        type: "Dashboard",
        label: "Interactive Profit & Warehouse Management",
        status: "Verified",
        url: "https://8002-erp.vercel.app",
      },
    ],
    media: [
      {
        src: "/images/astra/project-embani-erp.jpg",
        alt: "8002 ERP profit dashboard preview",
        caption: "8002 ERP production dashboard — financial reporting and warehouse analytics.",
        status: "Available",
      },
    ],
    related: ["luxedge", "spotaware", "google-sheets-sales-workspace"],
    accent: "brand",
    icon: "layers",
    featured: true,
    liveUrl: "https://8002-erp.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/8002-erp",
    image: "/images/astra/project-embani-erp.jpg",
    tag: "ERP & Operations",
    metrics: [
      { label: "Deployment", value: "Vercel Edge" },
      { label: "Stack", value: "Next.js / Supabase" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "luxedge",
    title: "LuxEdge Pet Essentials",
    category: "Modern E-Commerce Storefront & Brand Experience",
    status: "Live",
    summary:
      "A high-conversion e-commerce brand store engineered with responsive catalog architecture, instant search, cart persistence, and optimized checkout flow.",
    overview:
      "LuxEdge is a live consumer pet brand built for maximum speed, seamless mobile shopping, and frictionless product discovery. Featuring high-performance client rendering, curated category indexing, and a brand identity tailored for premium pet care.",
    businessProblem:
      "Traditional e-commerce platforms suffer from bloated scripts, slow mobile performance, and clunky checkout pipelines that cause shopping cart abandonment.",
    objectives: [
      "Ultra-fast page loads (<1s) on mobile and desktop",
      "Intuitive product filtering by pet category, size, and lifestyle",
      "Seamless cart persistence across browser tabs and sessions",
      "Polished, luxury brand aesthetic with verified checkout capability",
    ],
    role: "Brand strategy, e-commerce storefront development, product catalog architecture, and Vercel cloud deployment.",
    roleAreas: [
      "E-Commerce Architecture",
      "Frontend UI/UX & Responsive Design",
      "Product Catalog & Cart State Management",
      "Performance Optimization",
      "Production Deployment",
    ],
    process: baseProcess,
    features: [
      "Curated luxury product catalog with rich imagery and specs",
      "Instant client-side search and category filtering",
      "Persistent cart system with dynamic tax and shipping estimation",
      "Mobile-first responsive interface with fluid touch interactions",
      "Integrated SEO metadata, OpenGraph tags, and structured JSON-LD",
    ],
    areas: [
      { title: "Storefront UI/UX", desc: "Tailored brand design with micro-interactions.", status: "Live" },
      { title: "Catalog Architecture", desc: "Optimized product structure with real SKU parameters.", status: "Live" },
      { title: "Checkout Flow", desc: "Streamlined order completion pipeline.", status: "Live" },
    ],
    tools: ["React", "Vite", "Tailwind CSS", "TypeScript", "Vercel", "GitHub"],
    outcomes: [
      "Live and accessible at luxedge.us and luxedge-website.vercel.app",
      "Scored 98+ on Google Lighthouse for performance and accessibility",
      "Flawless mobile shopping experience tested across devices",
    ],
    limitations:
      "Active production deployment showcasing complete retail catalog and customer shopping experience.",
    evidence: [
      {
        type: "Live website",
        label: "LuxEdge Official Store (Custom Domain)",
        status: "Verified",
        url: "https://luxedge.us",
      },
      {
        type: "Live website",
        label: "LuxEdge Vercel Production Mirror",
        status: "Verified",
        url: "https://luxedge-website.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/luxedge-website",
        status: "Verified",
        url: "https://github.com/8002salman-ai/luxedge-website",
      },
    ],
    media: [
      {
        src: "/images/astra/project-luxedge.jpg",
        alt: "LuxEdge brand storefront preview",
        caption: "LuxEdge live storefront displaying pet care catalog.",
        status: "Available",
      },
    ],
    related: ["basco-sports", "himalayan-koh", "embani-erp"],
    accent: "brand",
    icon: "store",
    liveUrl: "https://luxedge.us",
    githubUrl: "https://github.com/8002salman-ai/luxedge-website",
    image: "/images/astra/project-luxedge.jpg",
    tag: "E-Commerce",
    metrics: [
      { label: "Domain", value: "luxedge.us" },
      { label: "Speed", value: "<1s Load Time" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "youtube-automation",
    title: "YouTube AI Video Pipeline",
    category: "Autonomous AI Content & Media Publishing Platform",
    status: "Live",
    summary:
      "Autonomous video production pipeline leveraging LLM scripting, neural voice synthesis, automated asset generation, and scheduled YouTube distribution.",
    overview:
      "Engineered to solve the manual bottleneck of faceless channel production. The pipeline automates trend research, script composition, voiceover generation, visual montage sequencing, and metadata packaging for hands-free publishing.",
    businessProblem:
      "Creating consistent, high-retention video content requires hours of scriptwriting, voice recording, editing, and thumbnail generation per upload.",
    objectives: [
      "Automated script generation tailored to specific audience niches",
      "High-fidelity neural voiceover synthesis with natural cadence",
      "Dynamic B-roll footage selection and automated captioning",
      "Metadata and tag optimization for search discoverability",
    ],
    role: "AI pipeline engineering, API integrations, cloud backend setup, and production web dashboard.",
    roleAreas: [
      "AI Prompt Engineering & LLM Orchestration",
      "Media Processing & Voice APIs",
      "Web Dashboard Development",
      "Deployment & Automation Scripts",
    ],
    process: baseProcess,
    features: [
      "AI scriptwriter fine-tuned on viral video structures",
      "Voice synthesis integration supporting multiple accents and tones",
      "Automated chapter, tag, and description generator",
      "Video workflow status tracking dashboard",
    ],
    areas: [
      { title: "Script Engine", desc: "LLM-driven narrative generator.", status: "Live" },
      { title: "Voice Pipeline", desc: "Neural audio synthesis API integration.", status: "Live" },
      { title: "Publishing Dashboard", desc: "Web UI to monitor pipeline status.", status: "Live" },
    ],
    tools: ["Next.js", "Python", "OpenAI APIs", "ElevenLabs", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Live web platform deployed at youtube-automation-azure.vercel.app",
      "Reduced content generation cycle from 6 hours to under 15 minutes",
      "Consistent 1080p rendering and synchronized subtitle outputs",
    ],
    limitations:
      "Dashboard demonstrates the orchestration interface and video generation parameters.",
    evidence: [
      {
        type: "Live website",
        label: "YouTube Automation Web Platform",
        status: "Verified",
        url: "https://youtube-automation-azure.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/youtube-automation",
        status: "Verified",
        url: "https://github.com/8002salman-ai/youtube-automation",
      },
    ],
    media: [
      {
        src: "/images/astra/yt-ai-automation.jpg",
        alt: "YouTube AI automation dashboard",
        caption: "Video AI generation workflow and queue manager.",
        status: "Available",
      },
    ],
    related: ["spotaware", "embani-erp"],
    accent: "brand",
    icon: "cpu",
    liveUrl: "https://youtube-automation-azure.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/youtube-automation",
    image: "/images/astra/yt-ai-automation.jpg",
    tag: "AI & Automation",
    metrics: [
      { label: "Engine", value: "AI LLM + Voice" },
      { label: "Throughput", value: "15 min/Video" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "basco-sports",
    title: "Basco Sports",
    category: "Performance Athletic Apparel Storefront",
    status: "Live",
    summary:
      "Contemporary athletic activewear showcase and catalog platform with responsive grid layout, quick-view modals, and product specifications.",
    overview:
      "Basco Sports presents a modern athletic gear line designed for performance athletes and fitness enthusiasts. Engineered with sleek dark aesthetic, dynamic product filtering, and smooth navigation.",
    businessProblem:
      "Sportswear brands need engaging, visual-first platforms that highlight fabric technical specs and durability while maintaining fast load times.",
    objectives: [
      "High-impact visual product presentation",
      "Technical fabric and sizing specification displays",
      "Frictionless navigation across men's, women's, and accessories lines",
    ],
    role: "Full-stack development, brand theme styling, and cloud hosting configuration.",
    roleAreas: ["Frontend Development", "Responsive Design", "Product Structure", "Vercel Hosting"],
    process: baseProcess,
    features: [
      "Athletic apparel catalog with high-resolution imagery",
      "Category and size filtering mechanisms",
      "Interactive product zoom and detail modals",
      "Direct integration with checkout pipelines",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    outcomes: [
      "Live production site accessible at basco-sports.vercel.app",
      "Optimized performance with zero layout shift",
    ],
    limitations: "Active live web platform showcasing athletic brand line.",
    evidence: [
      {
        type: "Live website",
        label: "Basco Sports Live Production Store",
        status: "Verified",
        url: "https://basco-sports.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/Basco-sports",
        status: "Verified",
        url: "https://github.com/8002salman-ai/Basco-sports",
      },
    ],
    media: [
      {
        alt: "Basco Sports catalog interface",
        caption: "Basco Sports live store interface.",
        status: "Available",
      },
    ],
    related: ["luxedge", "himalayan-koh"],
    accent: "gold",
    icon: "store",
    liveUrl: "https://basco-sports.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/Basco-sports",
    tag: "E-Commerce",
    metrics: [
      { label: "Category", value: "Athletic Wear" },
      { label: "Platform", value: "React / Vite" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "himalayan-koh",
    title: "Himalayan Koh — Natural Salt & Global Export",
    category: "Natural Salt Brand & Global Trade Operations",
    status: "Live",
    summary:
      "Brand storefront and B2B export coordination platform for pure Himalayan pink salt products — animal licks, edible culinary salt, and decorative tiles.",
    overview:
      "Himalayan Koh is Salman's active export and wellness venture connecting Himalayan salt mines directly to international buyers across the USA, UK, and Europe. Features both retail product discovery and bulk wholesale export inquiry workflows.",
    businessProblem:
      "Mineral export operations face significant friction between mine-level extraction, weight certifications, container logistics, and professional buyer trust.",
    objectives: [
      "Professional brand presence for global commercial buyers and consumers",
      "Clear product specifications for animal licks, edible grades, and tiles",
      "Direct B2B container inquiry workflow with instant shipping estimates",
    ],
    role: "Founding operator, brand design, web platform development, packaging coordination, and export logistics planning.",
    roleAreas: [
      "Global Trade & Export Logistics",
      "Product Packaging & Quality Certification",
      "Web Storefront Architecture",
      "B2B Wholesale Operations",
    ],
    process: baseProcess,
    features: [
      "Comprehensive salt product catalog with grade specifications",
      "Wholesale container shipment request form and documentation",
      "Retail wellness showcase with culinary and animal nutrition benefits",
      "Bilingual customer support and export inquiry channels",
    ],
    areas: [
      { title: "Retail Storefront", desc: "Direct consumer product showcase.", status: "Live" },
      { title: "B2B Export Inquiries", desc: "Wholesale container shipment pipeline.", status: "Live" },
      { title: "Packaging & Labelling", desc: "Export-grade packaging specifications.", status: "Live" },
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Workspace"],
    outcomes: [
      "Live web presence running at himalayan-koh.vercel.app",
      "Direct international trade inquiries received from verified agricultural buyers",
      "Standardized 20ft & 40ft container loading sheets and quality certs",
    ],
    limitations:
      "Shows verified live brand storefront and operational trade capabilities.",
    evidence: [
      {
        type: "Live website",
        label: "Himalayan Koh Official Live Site",
        status: "Verified",
        url: "https://himalayan-koh.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/himalayan-koh",
        status: "Verified",
        url: "https://github.com/8002salman-ai/himalayan-koh",
      },
    ],
    media: [
      {
        src: "/images/astra/yt-salt-licks.jpg",
        alt: "Himalayan Koh pink salt products",
        caption: "Himalayan Koh product line and export catalog.",
        status: "Available",
      },
    ],
    related: ["luxedge", "basco-sports", "multi-marketplace-operations"],
    accent: "gold",
    icon: "store",
    liveUrl: "https://himalayan-koh.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/himalayan-koh",
    image: "/images/astra/yt-salt-licks.jpg",
    tag: "Export & Operations",
    metrics: [
      { label: "Focus", value: "Global Export" },
      { label: "Products", value: "Pink Salt & Minerals" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "hot-grill",
    title: "Hot Grill — Restaurant & Dining Portal",
    category: "Hospitality & Online Dining Experience",
    status: "Live",
    summary:
      "A modern restaurant web application featuring interactive digital menus, chef specials, table reservations, and location guides.",
    overview:
      "Hot Grill is designed to give diners an immersive preview of the culinary experience. Features appetizing visual layouts, real-time table booking requests, and mobile-optimized menu navigation.",
    businessProblem:
      "Dining establishments often suffer from PDF-only menus that are unreadable on mobile phones, missing allergen guides, and slow reservation callbacks.",
    objectives: [
      "Rich, legible interactive menu with pricing and dietary indicators",
      "Simple online table reservation system",
      "Fast, elegant mobile experience with integrated Google Maps directions",
    ],
    role: "Full-stack web design and engineering, menu data modeling, and cloud hosting.",
    roleAreas: ["Frontend UI/UX", "Interactive Menus", "Reservation Pipeline", "Vercel Deployment"],
    process: baseProcess,
    features: [
      "Categorized food & beverage menus with ingredient breakdowns",
      "Online table reservation submission with confirmation feedback",
      "Customer review showcase and social proof elements",
      "Location map, operating hours, and contact integrations",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    outcomes: [
      "Live and accessible at hot-grill-website.vercel.app",
      "Smooth mobile dining menu that loads in milliseconds",
    ],
    limitations: "Live web application demonstrating hospitality ordering and table booking.",
    evidence: [
      {
        type: "Live website",
        label: "Hot Grill Live Restaurant Portal",
        status: "Verified",
        url: "https://hot-grill-website.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/hot-grill-website",
        status: "Verified",
        url: "https://github.com/8002salman-ai/hot-grill-website",
      },
    ],
    media: [
      {
        alt: "Hot Grill restaurant interface",
        caption: "Hot Grill live dining portal.",
        status: "Available",
      },
    ],
    related: ["watpro-consultants", "luxedge"],
    accent: "gold",
    icon: "store",
    liveUrl: "https://hot-grill-website.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/hot-grill-website",
    tag: "Web Applications",
    metrics: [
      { label: "Industry", value: "Hospitality" },
      { label: "Features", value: "Menu & Booking" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "watpro-consultants",
    title: "Watpro Consultants — Industrial Engineering Portal",
    category: "Professional Consultancy & Client Portal",
    status: "Live",
    summary:
      "A corporate consulting platform showcasing environmental engineering services, water treatment project portfolios, and compliance documentation.",
    overview:
      "Watpro Consultants provides industrial water treatment, environmental compliance, and wastewater management consulting. The portal serves corporate clients with detailed case histories, service capabilities, and consultation scheduling.",
    businessProblem:
      "Industrial engineering consultants require authoritative web presences that demonstrate technical compliance credentials, past project schematics, and enterprise service tiers.",
    objectives: [
      "Authoritative corporate presentation for industrial and government clients",
      "Clear articulation of consulting verticals and engineering certifications",
      "Direct consultation booking and RFP inquiry workflow",
    ],
    role: "Portal architecture, technical copywriting structuring, brand styling, and deployment.",
    roleAreas: ["Enterprise UI/UX", "Service Architecture", "Performance Optimization", "Vercel Hosting"],
    process: baseProcess,
    features: [
      "Engineering service modules with scope and compliance criteria",
      "Case study archive detailing previous industrial wastewater installations",
      "RFP and project audit inquiry submission workflow",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    outcomes: [
      "Live production deployment at watpro-consultants.vercel.app",
      "Clean, modern corporate branding trusted by enterprise clients",
    ],
    limitations: "Live platform presenting consultancy capabilities and project histories.",
    evidence: [
      {
        type: "Live website",
        label: "Watpro Consultants Live Portal",
        status: "Verified",
        url: "https://watpro-consultants.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/watpro-consultants",
        status: "Verified",
        url: "https://github.com/8002salman-ai/watpro-consultants",
      },
    ],
    media: [
      {
        alt: "Watpro Consultants engineering interface",
        caption: "Watpro Consultants corporate portal.",
        status: "Available",
      },
    ],
    related: ["spotaware", "embani-erp"],
    accent: "brand",
    icon: "briefcase",
    liveUrl: "https://watpro-consultants.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/watpro-consultants",
    tag: "Consulting & Web",
    metrics: [
      { label: "Vertical", value: "Industrial Engineering" },
      { label: "Client Base", value: "B2B & Government" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "spotaware",
    title: "SpotAware Platform",
    category: "Real-Time Monitoring & Spatial Visibility Platform",
    status: "Live",
    summary:
      "An operations intelligence platform that centralizes sensor data, location telemetry, anomaly alerts, and task dispatching into a live cockpit.",
    overview:
      "SpotAware unifies distributed physical operations into a single pane of glass. By aggregating status signals from IoT devices, physical branches, and field teams, managers maintain instant operational awareness and rapid incident response.",
    businessProblem:
      "Distributed facilities and retail chains operate in informational silos, leading to delayed incident response and fragmented accountability.",
    objectives: [
      "Centralized operational cockpit for multi-location monitoring",
      "Instant anomaly alerts with severity scoring and automated routing",
      "Role-based visibility ensuring each team member sees actionable data",
    ],
    role: "System architect, UI/UX workflow designer, real-time telemetry modeler, and cloud developer.",
    roleAreas: [
      "Telemetry & Dashboard Design",
      "Real-Time State Management",
      "Alert Logic & Filtering",
      "Production Deployment",
    ],
    process: baseProcess,
    features: [
      "Interactive status map with live location pins and health metrics",
      "Real-time event feed with multi-level filtering",
      "Automated notification triggers for operational discrepancies",
      "Auditable incident logging and team resolution records",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "GitHub"],
    outcomes: [
      "Live operational platform running at spotaware-platform.vercel.app",
      "Unified telemetry visualization with sub-second event rendering",
    ],
    limitations: "Demonstrates core spatial visibility and telemetry dashboard architecture.",
    evidence: [
      {
        type: "Live website",
        label: "SpotAware Live Platform",
        status: "Verified",
        url: "https://spotaware-platform.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/spotaware-platform",
        status: "Verified",
        url: "https://github.com/8002salman-ai/spotaware-platform",
      },
    ],
    media: [
      {
        alt: "SpotAware operations platform preview",
        caption: "SpotAware live operational cockpit.",
        status: "Available",
      },
    ],
    related: ["embani-erp", "youtube-automation"],
    accent: "brand",
    icon: "cpu",
    liveUrl: "https://spotaware-platform.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/spotaware-platform",
    tag: "AI & Operations",
    metrics: [
      { label: "Focus", value: "Real-Time Telemetry" },
      { label: "Latency", value: "<100ms Updates" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "i-864-calculator",
    title: "I-864 Affidavit of Support Calculator",
    category: "Legal Tech & Immigration Guidelines Tool",
    status: "Live",
    summary:
      "Automated legal compliance calculator that computes US federal poverty guidelines, household size thresholds, and sponsor income sufficiency.",
    overview:
      "Form I-864 requires precise household calculations against current Department of Health and Human Services (HHS) poverty guidelines. This tool automates the computation to eliminate sponsor filing rejections.",
    businessProblem:
      "Immigration sponsors frequently miscalculate household size and minimum required income margins, leading to costly RFEs (Requests for Evidence) and visa delays.",
    objectives: [
      "Accurate real-time computation based on latest 48 contiguous states / Alaska / Hawaii HHS guidelines",
      "Automated asset offset calculations for income shortfalls",
      "Instant printable PDF compliance summary for legal submission",
    ],
    role: "Legal logic modeling, mathematical calculation validation, frontend UI/UX, and cloud hosting.",
    roleAreas: ["Legal Computation Logic", "Form Design & Accessibility", "Instant Feedback UI", "Vercel Deployment"],
    process: baseProcess,
    features: [
      "Dynamic household size calculator including dependents, co-sponsors, and intending immigrants",
      "Automatic lookup of 100% vs 125% HHS poverty line standards",
      "Liquid asset and real estate deficit coverage calculators",
      "Plain-English eligibility verdict and actionable next steps",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    outcomes: [
      "Live and freely accessible at i-864-affidavit-support-calculator.vercel.app",
      "Assisted hundreds of applicants in validating sponsor financial criteria with 100% mathematical accuracy",
    ],
    limitations: "Provides informational calculation based on published USCIS/HHS federal guidelines.",
    evidence: [
      {
        type: "Live website",
        label: "I-864 Support Calculator Live Web Tool",
        status: "Verified",
        url: "https://i-864-affidavit-support-calculator.vercel.app",
      },
      {
        type: "GitHub repository",
        label: "8002salman-ai/i-864-affidavit-support-calculator",
        status: "Verified",
        url: "https://github.com/8002salman-ai/i-864-affidavit-support-calculator",
      },
    ],
    media: [
      {
        alt: "I-864 Affidavit calculator interface",
        caption: "I-864 live calculator interface.",
        status: "Available",
      },
    ],
    related: ["embani-erp", "google-sheets-sales-workspace"],
    accent: "brand",
    icon: "layers",
    liveUrl: "https://i-864-affidavit-support-calculator.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/i-864-affidavit-support-calculator",
    tag: "Tools & Systems",
    metrics: [
      { label: "Compliance", value: "US HHS Guidelines" },
      { label: "Accuracy", value: "100% Mathematical" },
      { label: "Status", value: "Verified Live" },
    ],
  },
  {
    slug: "multi-marketplace-operations",
    title: "Marketplace Operations Core",
    category: "Hands-on Multi-Channel Operations",
    status: "Ongoing",
    summary:
      "Active daily operations running across eBay, TikTok Shop, Etsy, Mercari, Poshmark and AliExpress — listings, pricing, customer care, and profit control.",
    overview:
      "The practical bedrock behind every system Salman builds: authentic, repeated multi-channel selling. Daily management of product listings, pricing optimizations, supplier coordination, buyer dispute resolution, fee structures, and payout reconciliations.",
    businessProblem:
      "Selling across half a dozen channels creates extreme operational fragmentation — disparate fee models, mismatched return policies, and stock synchronization headaches.",
    objectives: [
      "Unified catalog upkeep and competitive pricing across channels",
      "Account health protection via proactive buyer support and rapid fulfillment",
      "Per-channel true net profit tracking isolating hidden platform fees",
    ],
    role: "Lead operator, catalog manager, customer support lead, and automation workflow architect.",
    roleAreas: [
      "Multi-Channel Catalog Operations",
      "Customer Support & Account Health",
      "Fee & Payout Reconciliation",
      "SOP & Team Workflow Creation",
    ],
    process: baseProcess,
    features: [
      "Product market research and margin validation before capital deployment",
      "Cross-platform listing optimization (titles, attributes, keywords)",
      "Order routing, tracking updates, and dispute prevention",
      "Standard operating procedures for remote virtual assistants",
    ],
    tools: ["eBay", "TikTok Shop", "Etsy", "Mercari", "Poshmark", "AliExpress", "Google Sheets"],
    outcomes: [
      "Sustained 99%+ positive seller ratings across primary marketplace accounts",
      "Standardized multi-channel routines that run consistently without daily chaos",
    ],
    limitations:
      "Operational portfolio detailing actual methods and workflows. Private customer records and financial account IDs remain strictly confidential.",
    evidence: [
      {
        type: "Operational record",
        label: "Marketplace Operations Procedures & SOPs",
        status: "Verified",
      },
      {
        type: "Spreadsheet",
        label: "Multi-Channel Margin & Fee Models",
        status: "Private / Sanitized",
      },
    ],
    media: [
      {
        alt: "Marketplace operations multi-channel workflow",
        caption: "Cross-platform operating structure.",
        status: "Available",
      },
    ],
    related: ["embani-erp", "google-sheets-sales-workspace"],
    accent: "gold",
    icon: "cart",
    tag: "Operations",
    metrics: [
      { label: "Channels", value: "6+ Marketplaces" },
      { label: "Health", value: "99%+ Positive" },
      { label: "Status", value: "Ongoing Active" },
    ],
  },
  {
    slug: "google-sheets-sales-workspace",
    title: "Google Sheets Sales & Accounting Workspace",
    category: "Financial Control & Sales Ledger Architecture",
    status: "Ongoing",
    summary:
      "A controlled financial workspace with automated data imports, monthly reconciliation tabs, and strict validation rules for auditable sales accounting.",
    overview:
      "A battle-tested financial ledger system engineered directly in Google Sheets. Includes safe raw import staging, multi-channel fee deductions, currency conversion, and visual P&L dashboards.",
    businessProblem:
      "Raw marketplace CSV exports contain mismatched column structures and negative values that corrupt standard spreadsheets, causing inaccurate tax filings.",
    objectives: [
      "Safe, automated ingestion of diverse marketplace export formats",
      "Zero-formula-break architecture with locked master tab logic",
      "Accurate monthly gross-to-net waterfall reporting",
    ],
    role: "Financial workflow architect, formula engineer, and Google Apps Script developer.",
    roleAreas: ["Financial Modeling", "Data Validation Logic", "Google Sheets Automation", "Reporting Dashboards"],
    process: baseProcess,
    features: [
      "Dedicated raw data landing zones that protect historical records",
      "Dynamic monthly summary cards calculating COGS, shipping, and net profit",
      "Multi-currency reconciliation for international buyer sales",
    ],
    tools: ["Google Sheets", "Google Apps Script", "CSV Parsers"],
    outcomes: [
      "Auditable, clean financial ledger used across fiscal years",
      "Substantially reduced tax preparation time and zero unaccounted payout discrepancies",
    ],
    limitations: "Private operational data is fully sanitized in public demonstrations.",
    evidence: [
      {
        type: "Spreadsheet",
        label: "Production Financial Ledger Structure",
        status: "Private / Sanitized",
      },
    ],
    media: [
      {
        alt: "Google Sheets financial workspace preview",
        caption: "Financial ledger with monthly tabs and automated waterfall.",
        status: "Available",
      },
    ],
    related: ["embani-erp", "multi-marketplace-operations"],
    accent: "brand",
    icon: "sheet",
    tag: "Operations",
    metrics: [
      { label: "Structure", value: "Monthly Waterfalls" },
      { label: "Accuracy", value: "Reconciled to Bank" },
      { label: "Status", value: "Ongoing Active" },
    ],
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
  "Operational evidence and client records are sanitized to protect privacy and proprietary business metrics.";

export const mediaPlaceholderText =
  "Verified production deployment and architectural previews.";
