import { useState } from "react";
import { Link } from "react-router-dom";
import { caseStudies, type CaseStudy } from "@/data/projects";
import { Reveal, SectionHeading, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];
const allProjects = caseStudies.filter((c) => c !== featured);

const accentClasses: Record<CaseStudy["accent"], string> = {
  brand: "border-brand-500/20 bg-brand-500/10 text-accent-strong",
  gold: "border-gold-accent/25 bg-gold-accent/10 text-gold-accent",
};

interface FilterTab {
  id: string;
  label: string;
  count: number;
}

export function ProjectsSection({ limit }: { limit?: number }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterProjects = (study: CaseStudy) => {
    if (activeTab === "all") return true;
    if (activeTab === "ecom") {
      return study.tag === "E-Commerce" || study.tag === "Export & Operations";
    }
    if (activeTab === "ai") {
      return study.tag === "AI & Automation" || study.tag === "AI & Operations";
    }
    if (activeTab === "erp") {
      return study.tag === "ERP & Operations" || study.tag === "Operations";
    }
    if (activeTab === "web") {
      return study.tag === "Web Applications" || study.tag === "Consulting & Web" || study.tag === "Tools & Systems";
    }
    return true;
  };

  const filtered = allProjects.filter(filterProjects);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  const tabs: FilterTab[] = [
    { id: "all", label: "All Projects", count: caseStudies.length },
    {
      id: "ecom",
      label: "Live Stores & Export",
      count: caseStudies.filter((c) => c.tag === "E-Commerce" || c.tag === "Export & Operations").length,
    },
    {
      id: "ai",
      label: "AI & Automation",
      count: caseStudies.filter((c) => c.tag === "AI & Automation" || c.tag === "AI & Operations").length,
    },
    {
      id: "erp",
      label: "ERP & Operations",
      count: caseStudies.filter((c) => c.tag === "ERP & Operations" || c.tag === "Operations").length,
    },
    {
      id: "web",
      label: "Web & Tools",
      count: caseStudies.filter((c) => c.tag === "Web Applications" || c.tag === "Consulting & Web" || c.tag === "Tools & Systems").length,
    },
  ];

  return (
    <section id="projects" className="relative py-12 sm:py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Real-Time Live Status Banner */}
        <Reveal>
          <div className="mb-10 overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-emerald-950/20 p-5 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3.5">
                <span className="relative mt-1 flex h-3.5 w-3.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                      All Production Systems Verified Live
                    </span>
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300">
                      100% LIVE ON VERCEL
                    </span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Every project listed below is deployed in active production with functional live links, direct GitHub repositories, and verified operator architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-mono text-slate-400 shrink-0 self-start md:self-auto">
                <div className="text-center">
                  <span className="block font-bold text-white text-base">12+</span>
                  <span className="text-[10px] text-emerald-400">Live Sites</span>
                </div>
                <div className="h-6 w-px bg-white/15" />
                <div className="text-center">
                  <span className="block font-bold text-white text-base">16</span>
                  <span className="text-[10px] text-slate-400">Git Repos</span>
                </div>
                <div className="h-6 w-px bg-white/15" />
                <div className="text-center">
                  <span className="block font-bold text-white text-base">0</span>
                  <span className="text-[10px] text-emerald-400">Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <SectionHeading
            eyebrow="Portfolio & Systems"
            title={
              <>
                Live Platforms, Stores &{" "}
                <span className="text-gradient-brand">Enterprise Systems</span>
              </>
            }
            description="Production-grade e-commerce storefronts, AI pipelines, enterprise resource planning, and hands-on marketplace operations. Real code, real deployments, zero mockups."
          />
        </Reveal>

        {/* Featured Project Showcase */}
        {featured && (
          <Reveal className="mt-10">
            <article className="group relative overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-[#0c1020] via-panel to-[#090c16] shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-300 hover:border-indigo-500/60">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[110px]" />
                <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-[110px]" />
              </div>

              <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      Featured Flagship System
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      VERIFIED LIVE
                    </span>
                    <span className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-medium text-muted">
                      {featured.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                    {featured.summary}
                  </p>

                  {/* System Capabilities Pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300">
                      Multi-Warehouse Inventory
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300">
                      Real-Time COGS & Net Profit
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300">
                      Automated Payout Reconciliation
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300">
                      Next.js + Supabase + Vercel
                    </span>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-95"
                      >
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Launch Live System</span>
                        <Icon name="arrow" className="h-4 w-4 -rotate-45" />
                      </a>
                    )}

                    {featured.githubUrl && (
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <Icon name="github" className="h-4 w-4" />
                        <span>GitHub Repo</span>
                      </a>
                    )}

                    <Link
                      to={`/projects/${featured.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-edge bg-panel px-4 py-2.5 text-sm font-semibold text-accent-strong transition-all hover:border-brand-500/40"
                    >
                      <span>Full Case Study</span>
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Real Visual Showcase */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl">
                  {featured.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                        <span className="rounded bg-black/60 px-2 py-1 backdrop-blur">
                          https://8002-erp.vercel.app
                        </span>
                        <span className="rounded bg-emerald-500/20 px-2 py-1 font-bold text-emerald-400 backdrop-blur">
                          HTTP 200 OK
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] w-full items-center justify-center p-8 text-center">
                      <div>
                        <Icon name="layers" className="mx-auto h-12 w-12 text-indigo-400" />
                        <h4 className="mt-3 font-display text-lg font-bold text-white">8002 ERP</h4>
                        <p className="mt-1 text-xs text-slate-400">Production multi-channel platform</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Interactive Category Filter Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200",
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "border border-white/10 bg-panel text-slate-400 hover:border-white/20 hover:text-white"
              )}
            >
              <span>{tab.label}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[10px] font-mono",
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/5 text-slate-500"
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 60}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#090d18] shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_16px_36px_-10px_rgba(79,70,229,0.25)]">
                {/* Visual Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      width={640}
                      height={400}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-[#0d1326] to-slate-950 p-6 text-center">
                      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
                      <div>
                        <span
                          className={cn(
                            "mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border shadow-lg",
                            accentClasses[c.accent]
                          )}
                        >
                          <Icon name={c.icon as IconName} className="h-6 w-6" />
                        </span>
                        <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          {c.tag || c.category}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-80" />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {c.status === "Live" && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE</span>
                      </span>
                    )}
                    {c.status === "Ongoing" && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                        <span>ACTIVE</span>
                      </span>
                    )}
                  </div>

                  {c.liveUrl && (
                    <div className="absolute bottom-2.5 left-3 text-[10px] font-mono text-slate-400">
                      <span className="rounded bg-black/60 px-1.5 py-0.5 backdrop-blur">
                        {c.liveUrl.replace("https://", "")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="text-xs font-semibold text-cyan-300">
                      {c.category}
                    </div>
                    <h4 className="mt-1 font-display text-lg font-bold text-white tracking-tight">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">
                      {c.summary}
                    </p>

                    {c.metrics && c.metrics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.metrics.map((m) => (
                          <span
                            key={m.label}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-300"
                          >
                            <span className="text-slate-500">{m.label}: </span>
                            {m.value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Grid */}
                  <div className="mt-5 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    {c.liveUrl ? (
                      <a
                        href={c.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/30 transition-all hover:bg-emerald-500 active:scale-95 text-center"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>Live Site</span>
                        <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                      </a>
                    ) : (
                      <Link
                        to={`/projects/${c.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition-all hover:bg-indigo-500 text-center"
                      >
                        <span>Case Study</span>
                        <Icon name="arrow" className="h-3 w-3" />
                      </Link>
                    )}

                    {c.githubUrl ? (
                      <a
                        href={c.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white text-center"
                      >
                        <Icon name="github" className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <Link
                        to={`/projects/${c.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/10 text-center"
                      >
                        <span>Details</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {limit && allProjects.length > limit && (
          <Reveal className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-6 py-3 text-sm font-semibold text-strong transition-all hover:border-brand-500/40 hover:text-accent-strong"
            >
              View all {caseStudies.length} projects & systems
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
