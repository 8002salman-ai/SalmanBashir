import { useEffect, useMemo, useState } from "react";
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
  };
}

/**
 * Compact, auto-scrolling strip of GitHub repo badges (plus a Fiverr chip).
 * Salman OS supplies the public project set; GitHub metadata enriches it when
 * available. Static content remains the fallback when either service is down.
 */
export function GitHubRepos() {
  const { repos: githubReposLive } = useGithubRepos(githubRepos);
  const [syncedProjects, setSyncedProjects] = useState<GithubRepo[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchProjectFeed(controller.signal)
      .then((projects) => {
        if (!projects.length) return;
        setSyncedProjects(projects.map(toGithubRepo));
      })
      .catch(() => {
        // Keep GitHub/static data when the server-side feed is unavailable.
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

  return (
    <section className="relative overflow-hidden py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="github" className="h-4 w-4 text-muted" />
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">
              Open Source on GitHub
            </span>
            <span className="h-px flex-1 bg-edge" />
            <a
              href={contact.socials.fiverr || "https://www.fiverr.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent-strong hover:underline"
            >
              Fiverr ↗
            </a>
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent-strong hover:underline"
            >
              View Profile →
            </a>
          </div>
        </Reveal>
      </div>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee gap-2.5 px-4 group-hover:[animation-play-state:paused]">
          {contact.socials.fiverr && (
            <a
              href={contact.socials.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-gold-accent/30 bg-gold-accent/10 px-4 py-2.5 text-left transition-all hover:border-gold-accent/50 hover:bg-gold-accent/15 hover:-translate-y-0.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gold-accent/30 bg-bg-soft">
                <Icon name="fiverr" className="h-3.5 w-3.5 text-gold-accent" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold text-strong">Fiverr</span>
                <span className="block truncate text-[10px] text-faint">Hire me for freelance work</span>
              </span>
              <Icon name="external" className="h-3 w-3 shrink-0 text-faint transition-colors group-hover:text-gold-accent" />
            </a>
          )}
          {[...repos, ...repos].map((repo, i) => (
            <a
              key={`${repo.name}-${i}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-edge bg-panel/60 px-4 py-2.5 text-left backdrop-blur-sm transition-all hover:border-brand-500/30 hover:bg-panel-strong hover:-translate-y-0.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-edge bg-bg-soft">
                <Icon name="github" className="h-3.5 w-3.5 text-muted" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="max-w-[160px] truncate text-xs font-semibold text-strong">{repo.name}</span>
                  {repo.stars > 0 && (
                    <span className="inline-flex shrink-0 items-center gap-0.5 text-[10px] font-medium text-gold-accent">
                      <Icon name="star" className="h-2.5 w-2.5" />
                      {repo.stars}
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-1.5">
                  {repo.language && (
                    <span className="inline-flex shrink-0 items-center gap-1 text-[10px] text-faint">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500/70" />
                      {repo.language}
                    </span>
                  )}
                  <span className="max-w-[130px] truncate text-[10px] text-faint">
                    {repo.language ? `· ${repo.desc}` : repo.desc}
                  </span>
                </span>
              </span>
              <Icon name="external" className="h-3 w-3 shrink-0 text-faint transition-colors group-hover:text-accent-strong" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
