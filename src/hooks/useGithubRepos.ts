import { useEffect, useState } from "react";
import { githubRepos, type PortfolioRepo } from "@/data/content";

export type GithubRepo = {
  name: string;
  desc: string;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  pushedAt: string | null;
  homepage: string | null;
  category: "new" | "old" | "coming";
  status: string;
};

const GITHUB_USER = "8002salman-ai";
const CACHE_KEY = "gh-repos-cache-v4";
const CACHE_STALE_MS = 6 * 60 * 60 * 1000; // revalidate every 6h to catch any new live launch daily

function toGithubRepo(p: PortfolioRepo): GithubRepo {
  return {
    name: p.name,
    desc: p.desc,
    url: p.url,
    stars: 0,
    language: p.language || null,
    topics: [],
    pushedAt: null,
    homepage: p.homepage || null,
    category: p.category,
    status: p.status,
  };
}

/**
 * Syncs public repos for Salman Bashir's GitHub profile — newest activity first.
 * Automatically checks daily for new projects or new live websites.
 */
export function useGithubRepos(fallback: PortfolioRepo[] = githubRepos) {
  const [repos, setRepos] = useState<GithubRepo[]>(fallback.map(toGithubRepo));
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let shouldFetch = true;

    // Fast-path: immediately hydrate from cache (zero delay)
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as { at: number; repos: GithubRepo[] };
        if (parsed.repos?.length) {
          setRepos(parsed.repos);
          setLive(true);
          // If fresh (< 6h), we can avoid immediate network spam
          if (Date.now() - parsed.at < CACHE_STALE_MS) {
            shouldFetch = false;
          }
        }
      }
    } catch {
      /* corrupted cache — proceed to fetch */
    }

    if (!shouldFetch) return;

    // Daily background sync to discover any new repositories or live sites
    (async () => {
      try {
        // Try local/Vercel daily cached serverless route first
        let reposFromApi: GithubRepo[] | null = null;
        try {
          const apiRes = await fetch("/api/github-repos");
          if (apiRes.ok) {
            const json = (await apiRes.json()) as { ok: boolean; repos: GithubRepo[] };
            if (json.ok && Array.isArray(json.repos) && json.repos.length > 0) {
              reposFromApi = json.repos;
            }
          }
        } catch {
          /* ignore and fallback to direct GitHub API */
        }

        if (reposFromApi && !cancelled) {
          setRepos(reposFromApi);
          setLive(true);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ at: Date.now(), repos: reposFromApi }),
            );
          } catch {
            /* ignore */
          }
          return;
        }

        // Direct GitHub API fallback
        const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=100`,
          { headers },
        );
        if (!res.ok) return;
        const data = (await res.json()) as {
          name: string;
          description: string | null;
          html_url: string;
          homepage: string | null;
          stargazers_count: number;
          language: string | null;
          topics: string[] | undefined;
          pushed_at: string;
          fork: boolean;
        }[];
        if (!Array.isArray(data) || data.length === 0 || cancelled) return;

        // Map lookup for known categories and curated details
        const fallbackMap = new Map<string, PortfolioRepo>();
        fallback.forEach((f) => fallbackMap.set(f.name.toLowerCase(), f));

        const latest: GithubRepo[] = data
          .slice()
          .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
          .map((r) => {
            const meta = fallbackMap.get(r.name.toLowerCase());
            const daysSincePushed = (Date.now() - Date.parse(r.pushed_at)) / (1000 * 60 * 60 * 24);
            const isRecent = daysSincePushed <= 45;

            const category: "new" | "old" | "coming" =
              meta?.category || (isRecent ? "new" : "old");
            const homepage = r.homepage || meta?.homepage || null;

            return {
              name: r.name,
              desc: meta?.desc || r.description || `${r.name} repository`,
              url: r.html_url,
              stars: r.stargazers_count ?? 0,
              language: r.language || meta?.language || null,
              topics: r.topics?.slice(0, 3) ?? [],
              pushedAt: r.pushed_at,
              homepage,
              category,
              status: meta?.status || (homepage ? "Live" : isRecent ? "New" : "Repo"),
            };
          });

        // Ensure any fallback coming/planned projects not yet pushed are included
        fallback.forEach((f) => {
          if (!latest.some((l) => l.name.toLowerCase() === f.name.toLowerCase())) {
            latest.push(toGithubRepo(f));
          }
        });

        if (!cancelled) {
          setRepos(latest);
          setLive(true);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ at: Date.now(), repos: latest }),
            );
          } catch {
            /* storage full — non-fatal */
          }
        }
      } catch {
        /* network error — fallback list stays */
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [fallback]);

  return { repos, live };
}
