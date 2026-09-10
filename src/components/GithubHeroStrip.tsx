import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { contact } from "@/data/content";
import { Icon } from "@/components/ui";
import { useGithubRepos, type GithubRepo } from "@/hooks/useGithubRepos";

type FilterTab = "all" | "new" | "old" | "coming";

function getLanguageColor(lang: string | null): string {
  switch (lang?.toLowerCase()) {
    case "typescript":
      return "bg-sky-400";
    case "javascript":
      return "bg-amber-400";
    case "python":
      return "bg-emerald-400";
    case "c#":
      return "bg-violet-400";
    case "swift":
    case "system":
      return "bg-orange-400";
    default:
      return "bg-zinc-400";
  }
}

export function GithubHeroStrip({ className }: { className?: string }) {
  const { repos, live } = useGithubRepos();
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  if (!repos || repos.length === 0) return null;

  // Filter repos based on tab and optional search query
  const filteredRepos = repos.filter((r) => {
    const matchesTab =
      activeTab === "all" ? true : r.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.language && r.language.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const counts = {
    all: repos.length,
    new: repos.filter((r) => r.category === "new").length,
    old: repos.filter((r) => r.category === "old").length,
    coming: repos.filter((r) => r.category === "coming").length,
  };

  // Limit initially displayed repos unless expanded
  const displayLimit = isExpanded ? filteredRepos.length : 5;
  const visibleRepos = filteredRepos.slice(0, displayLimit);

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-gradient-to-b from-[#11131c] via-[#0c0d14] to-[#090a0f] p-3.5 shadow-xl transition-all duration-300 hover:border-brand-400/40",
        className,
      )}
    >
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <Icon name="github" className="h-3.5 w-3.5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                All GitHub Repositories
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                {repos.length} Repos
              </span>
            </div>
            <p className="truncate text-[10px] text-zinc-400">
              New launches, production systems & upcoming projects
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10.5px] font-medium text-zinc-300 transition-colors hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
          >
            <span>Profile</span>
            <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
          </a>
        </div>
      </div>

      {/* Category Filter Pills & Search */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={cn(
              "rounded-lg px-2 py-1 text-[10.5px] font-semibold transition-all shrink-0 flex items-center gap-1.5",
              activeTab === "all"
                ? "bg-brand-500 text-black shadow-md shadow-brand-500/20"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white",
            )}
          >
            <span>All</span>
            <span
              className={cn(
                "rounded-full px-1 py-0.2 text-[9px]",
                activeTab === "all" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-300",
              )}
            >
              {counts.all}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("new")}
            className={cn(
              "rounded-lg px-2 py-1 text-[10.5px] font-semibold transition-all shrink-0 flex items-center gap-1.5",
              activeTab === "new"
                ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>New & Active</span>
            <span
              className={cn(
                "rounded-full px-1 py-0.2 text-[9px]",
                activeTab === "new" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-300",
              )}
            >
              {counts.new}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("old")}
            className={cn(
              "rounded-lg px-2 py-1 text-[10.5px] font-semibold transition-all shrink-0 flex items-center gap-1.5",
              activeTab === "old"
                ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Old / Systems</span>
            <span
              className={cn(
                "rounded-full px-1 py-0.2 text-[9px]",
                activeTab === "old" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-300",
              )}
            >
              {counts.old}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("coming")}
            className={cn(
              "rounded-lg px-2 py-1 text-[10.5px] font-semibold transition-all shrink-0 flex items-center gap-1.5",
              activeTab === "coming"
                ? "bg-amber-400 text-black shadow-md shadow-amber-400/20"
                : "border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white",
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>Coming Projects</span>
            <span
              className={cn(
                "rounded-full px-1 py-0.2 text-[9px]",
                activeTab === "coming" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-300",
              )}
            >
              {counts.coming}
            </span>
          </button>
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[120px] max-w-[160px] flex-1 sm:flex-initial">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search repo…"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-zinc-200 placeholder:text-zinc-500 focus:border-brand-400/60 focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2 top-1.5 text-[10px] text-zinc-400 hover:text-white"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Repositories List */}
      <div className="mt-2.5 space-y-1.5 max-h-[340px] overflow-y-auto pr-1 no-scrollbar">
        {visibleRepos.length === 0 ? (
          <div className="rounded-xl border border-white/5 bg-white/5 py-4 text-center text-xs text-zinc-400">
            No repositories found matching your filter.
          </div>
        ) : (
          visibleRepos.map((repo) => {
            const isNew = repo.category === "new";
            const isComing = repo.category === "coming";

            return (
              <div
                key={repo.name}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-2.5 transition-all duration-200 hover:border-brand-400/30 hover:bg-white/[0.06]"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Repo Name with Direct Link to GitHub */}
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold text-white transition-colors hover:text-brand-300 hover:underline"
                    >
                      {repo.name}
                    </a>

                    {/* Category / Status Badge */}
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.2 text-[8.5px] font-bold uppercase tracking-wide",
                        isNew
                          ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                          : isComing
                            ? "border border-amber-400/30 bg-amber-400/15 text-amber-300"
                            : "border border-white/10 bg-white/5 text-zinc-400",
                      )}
                    >
                      {repo.status || (isNew ? "New" : isComing ? "Coming" : "System")}
                    </span>

                    {/* Star count */}
                    {repo.stars > 0 && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-amber-400">
                        <Icon name="star" className="h-2.5 w-2.5" />
                        {repo.stars}
                      </span>
                    )}

                    {/* Language dot */}
                    {repo.language && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-zinc-400">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            getLanguageColor(repo.language),
                          )}
                        />
                        <span>{repo.language}</span>
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-0.5 line-clamp-1 text-[11px] text-zinc-400">
                    {repo.desc}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  {/* Live demo link if available */}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20"
                      title={`Open live site for ${repo.name}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Site</span>
                      <Icon name="arrow" className="h-2 w-2 -rotate-45" />
                    </a>
                  )}

                  {/* GitHub Repo Code Link */}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                    title={`View ${repo.name} on GitHub`}
                  >
                    <Icon name="github" className="h-2.5 w-2.5 text-zinc-400" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer / Expand & View All Toggle */}
      {filteredRepos.length > 5 && (
        <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 text-[11px]">
          <span className="text-zinc-400">
            Showing {visibleRepos.length} of {filteredRepos.length} repositories
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded((e) => !e)}
            className="inline-flex items-center gap-1 font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            <span>{isExpanded ? "Collapse View ▲" : `View All ${filteredRepos.length} Repos ▼`}</span>
          </button>
        </div>
      )}
    </div>
  );
}