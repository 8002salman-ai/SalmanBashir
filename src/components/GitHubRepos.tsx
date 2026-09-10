import { useEffect, useMemo, useRef, useState } from "react";
import { contact, githubRepos } from "@/data/content";
import { fetchProjectFeed, type SalmanOsProject } from "@/lib/projects-feed";
import { useGithubRepos, type GithubRepo } from "@/hooks/useGithubRepos";
import { Icon, Reveal } from "@/components/ui";

function toGithubRepo(project: SalmanOsProject): GithubRepo {
  return {
    name: project.github_repo || project.name,
    desc: project.description || project.name,
    url: `https://github.com/${project.github_owner}/${project.github_repo}`,
    stars: 0,
    language: null,
    topics: [],
    pushedAt: project.last_commit_at,
    homepage: project.production_url,
    category: "new",
    status: project.production_url ? "Live" : "Active",
  };
}

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
    default:
      return "bg-brand-400";
  }
}

/**
 * Interactive, smooth horizontal repository showcase.
 * Replaces the runaway marquee with controlled, high-end interactive browsing.
 */
export function GitHubRepos() {
  const { repos: githubReposLive } = useGithubRepos(githubRepos);
  const [syncedProjects, setSyncedProjects] = useState<GithubRepo[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchProjectFeed(controller.signal)
      .then((projects) => {
        if (!projects.length) return;
        setSyncedProjects(projects.map(toGithubRepo));
      })
      .catch(() => {
        // Keep fallback data
      });
    return () => controller.abort();
  }, []);

  const repos = useMemo(() => {
    if (!syncedProjects.length) return githubReposLive;
    return syncedProjects.map((project) => {
      const live = githubReposLive.find(
        (repo) => repo.name.toLowerCase() === project.name.toLowerCase(),
      );
      return live ? { ...project, ...live, desc: project.desc || live.desc } : project;
    });
  }, [githubReposLive, syncedProjects]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-6 sm:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {/* Header Bar with Interactive Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-edge">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-edge bg-panel text-strong shadow-sm">
                <Icon name="github" className="h-4 w-4" />
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-strong">
                  Open Source & Repositories
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {repos.length} Active Repos
                </span>
              </div>
            </div>

            {/* Right Controls: Arrow Navigation + GitHub Profile Link */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Scroll repos left"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-edge bg-panel text-muted hover:text-strong hover:border-brand-400/40 transition-colors"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Scroll repos right"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-edge bg-panel text-muted hover:text-strong hover:border-brand-400/40 transition-colors"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-panel px-3 py-1 text-xs font-semibold text-soft hover:text-accent-strong hover:border-brand-400/40 transition-colors"
              >
                <span>Profile</span>
                <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Smooth Horizontal Track with Side Fade Masks */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-bg to-transparent" />

        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth px-5 sm:px-8 py-2"
        >
          {repos.map((repo, i) => (
            <a
              key={`${repo.name}-${i}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-[280px] sm:w-[310px] shrink-0 flex-col justify-between rounded-2xl border border-edge bg-panel/80 p-3.5 shadow-md backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-panel-strong hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Top Row: Title + Arrow */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-strong group-hover:text-cyan-300 transition-colors truncate">
                    {repo.name}
                  </span>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-edge bg-white/[0.04] text-muted group-hover:text-cyan-300 group-hover:border-cyan-400/40 transition-colors">
                    <Icon name="arrow" className="h-2.5 w-2.5 -rotate-45" />
                  </span>
                </div>

                <p className="line-clamp-2 text-[11.5px] leading-relaxed text-muted group-hover:text-soft transition-colors">
                  {repo.desc || "Systems and architecture repository by Salman Bashir."}
                </p>
              </div>

              {/* Bottom Meta Row: Language & Status */}
              <div className="mt-3 flex items-center justify-between border-t border-edge/60 pt-2 text-[10.5px]">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${getLanguageColor(repo.language)} shadow-sm`}
                  />
                  <span className="text-soft font-medium">
                    {repo.language || "TypeScript"}
                  </span>
                </div>

                {repo.homepage && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live URL
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
