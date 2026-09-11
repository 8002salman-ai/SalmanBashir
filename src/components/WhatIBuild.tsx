import { Link } from "react-router-dom";
import { Icon, Reveal } from "@/components/ui";

const CAPABILITIES = [
  {
    title: "E-commerce Operations",
    icon: "cart" as const,
    accent: "from-cyan-500/20 to-blue-500/5",
    iconBg: "bg-cyan-500/10 text-cyan-300 border-cyan-400/30",
    description:
      "From product sourcing to global sales, I build and manage profitable e-commerce businesses.",
    bullets: [
      "Product Sourcing & Research",
      "Marketplace Growth & Optimization",
      "Operations & Scaling Pipelines",
    ],
    href: "/marketplace-services",
  },
  {
    title: "AI Automations",
    icon: "spark" as const,
    accent: "from-indigo-500/20 to-purple-500/5",
    iconBg: "bg-indigo-500/10 text-indigo-300 border-indigo-400/30",
    description:
      "Custom AI systems and automations that save time, reduce cost and increase productivity.",
    bullets: [
      "AI Agents & Workflows",
      "Content & Asset Automation",
      "Business Process AI Integrations",
    ],
    href: "/ai-automation",
  },
  {
    title: "Business Systems",
    icon: "layers" as const,
    accent: "from-blue-500/20 to-indigo-500/5",
    iconBg: "bg-blue-500/10 text-blue-300 border-blue-400/30",
    description:
      "ERP, dashboards and internal systems to bring structure, clarity and control to your business.",
    bullets: [
      "ERP & Custom Operations Tools",
      "Data & Real-time Profit Reporting",
      "Process & Workflow Optimization",
    ],
    href: "/business-systems",
  },
  {
    title: "Sourcing & Trade",
    icon: "globe" as const,
    accent: "from-emerald-500/20 to-teal-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",
    description:
      "Global supplier network and product sourcing for e-commerce and wholesale businesses.",
    bullets: [
      "Verified Factory & Supplier Sourcing",
      "Quality Assurance & Compliance",
      "End-to-end Freight Logistics Support",
    ],
    href: "/sourcing-freight",
  },
];

export function WhatIBuild() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <Reveal>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              REAL SOLUTIONS FOR REAL BUSINESS GROWTH
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What I Build
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              <span>View All Services</span>
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 60}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_12px_30px_-10px_rgba(99,102,241,0.25)]">
                {/* Subtle card glow */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.accent} blur-2xl transition-opacity group-hover:opacity-100 opacity-60`} />

                <div>
                  {/* Icon */}
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${card.iconBg} shadow-inner`}>
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-lg font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {card.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <Icon name="check" className="h-2.5 w-2.5" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More link */}
                <div className="mt-6 pt-2">
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <Icon
                      name="arrow"
                      className="h-3 w-3 transition-transform group-hover:translate-x-1 text-cyan-400"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
