import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, SectionHeading, StatusBadge, CtaCard } from "@/components/ui";
import { hermes, capabilityGroups, type CapabilityStatus } from "@/data/aiAutomation";
import { cn } from "@/utils/cn";

const statusMeta: Record<CapabilityStatus, { tone: "live" | "planning" | "placeholder" }> = {
  Current: { tone: "live" },
  "In Development": { tone: "planning" },
  Planned: { tone: "placeholder" },
};

export function AiAutomationPage() {
  return (
    <>
      <Seo
        title="AI & Automation | Salman Bashir — Hermes AI Agent and Business Automation"
        description="An honest look at AI and automation work — what's live today, what's in development (including the Hermes AI Agent) and what's planned. Nothing planned is presented as live."
        path="/ai-automation"
      />
      <BreadcrumbJsonLd items={[{ name: "AI & Automation", path: "/ai-automation" }]} />
      <PageHero
        eyebrow="AI & Automation"
        title={
          <>
            AI and automation,{" "}
            <span className="text-gradient-brand">grouped honestly</span>
          </>
        }
        description="Hermes AI Agent, Embani ERP, SpotAware, marketplace automation, Google Sheets workflows and AI-assisted websites — grouped as Current, In Development or Planned. Nothing here is presented as live before it is."
      />

      {/* Hermes spotlight */}
      <section className="relative pb-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-brand-500/12 via-transparent to-gold-accent/10 p-8 sm:p-10">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-[90px]" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                  <Icon name="spark" className="h-6 w-6" />
                </span>
                <StatusBadge tone="planning">{hermes.status}</StatusBadge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                {hermes.name}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                {hermes.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={hermes.journeyAnchor} className="btn btn-primary group">
                  View Hermes Agent Journey
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link to="/book" className="btn btn-secondary">
                  Discuss an AI Project
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capability groups */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-14">
          {capabilityGroups.map((group, gi) => (
            <Reveal key={group.status} delay={gi * 60}>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow={group.status}
                  title={group.heading}
                  description={group.intro}
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className={cn(
                        "card p-5",
                        group.status === "Current" && "border-brand-500/20",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-panel-strong text-accent-strong">
                          <Icon name={item.icon} className="h-4 w-4" />
                        </span>
                        <StatusBadge tone={statusMeta[group.status].tone}>
                          {group.status}
                        </StatusBadge>
                      </div>
                      <p className="mt-3 font-display text-sm font-semibold text-strong">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaCard
        eyebrow="See the systems in context"
        title="Curious how this connects to real projects?"
        description="Embani ERP and SpotAware show the same AI-assisted approach applied to real business systems."
        ctaLabel="View Projects"
        ctaHref="/projects"
      />
    </>
  );
}
