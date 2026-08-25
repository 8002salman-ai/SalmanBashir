export type FiverrGig = {
  title: string;
  tagline: string;
  desc: string;
  deliverables: string[];
  startsAt: string;
};

/**
 * The Fiverr gig offers are shared so the homepage highlight section and the
 * dedicated /fiverr page always render the same set of offers. Edit gigs here
 * and both surfaces update together.
 */
export const fiverrGigs: FiverrGig[] = [
  {
    title: "Marketplace Operations Review",
    tagline: "Find what's costing you margin, time and buyer trust",
    desc: "A practical, operator-level review of your marketplace business — listings, pricing, fees, inventory and payouts — with clear, prioritised improvements.",
    deliverables: [
      "Marketplace & listing structure audit",
      "Pricing and margin analysis",
      "Order / inventory / returns workflow check",
      "Prioritised action plan",
    ],
    startsAt: "$50",
  },
  {
    title: "Profit & COGS Dashboard",
    tagline: "See what you actually earn, not just what you sell",
    desc: "A Google Sheets dashboard built around your real numbers — sales, product cost, fees, tax and expenses — so profit is visible and trustworthy.",
    deliverables: [
      "Sales tracking per channel",
      "COGS & marketplace fee capture",
      "Net profit & payout clarity",
      "Simple monthly maintenance handover",
    ],
    startsAt: "$80",
  },
  {
    title: "Product Sourcing Coordination",
    tagline: "Supplier research and buying with measurable decisions",
    desc: "Structured sourcing support — supplier comparison, MOQ and sample planning, packaging and invoice/packing-list review across AliExpress and Alibaba.",
    deliverables: [
      "Supplier research & shortlist",
      "MOQ / sample planning",
      "Landed-cost comparison",
      "Shipment coordination support",
    ],
    startsAt: "$40",
  },
  {
    title: "SOP & Process Design",
    tagline: "Repeatable operations your team can actually run",
    desc: "Clear written procedures, team responsibilities and checklists so your operations don't depend on who happens to be around.",
    deliverables: [
      "SOP documentation",
      "Team responsibility map",
      "Review systems & checklists",
      "Simple framework to keep them current",
    ],
    startsAt: "$60",
  },
];

/** Short benefit bullets used by the homepage Fiverr highlight card. */
export const fiverrHighlights = [
  "Marketplace operations & listings",
  "Product sourcing coordination",
  "Business systems & dashboards",
  "AI-assisted tools & workflows",
];