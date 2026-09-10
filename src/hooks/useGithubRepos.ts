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
const CACHE_KEY = "gh-repos-cache-v3";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // refresh from GitHub once a day

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
 * Categorized into 'new', 'old' systems, and 'coming' projects.
 */
export function useGithubRepos(fallback: PortfolioRepo[] = githubRepos) {
  const [repos, setRepos] = useState<GithubRepo[]>(fallback.map(toGithubRepo));
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Serve from cache when it is fresh (< 24h old).
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as { at: number; repos: GithubRepo[] };
        if (Date.now() - parsed.at < CACHE_TTL_MS && parsed.repos?.length) {
          setRepos(parsed.repos);
          setLive(true);
          return;
        }
      }
    } catch {
      /* corrupted cache — ignore and refetch */
    }

    (async () => {
      try {
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
            return {
              name: r.name,
              desc: meta?.desc || r.description || "GitHub repository",
              url: r.html_url,
              stars: r.stargazers_count ?? 0,
              language: r.language || meta?.language || null,
              topics: r.topics?.slice(0, 3) ?? [],
              pushedAt: r.pushed_at,
              homepage: r.homepage || meta?.homepage || null,
              category: meta?.category || "old",
              status: meta?.status || (r.homepage ? "Live" : "Repo"),
            };
          });

        // Ensure any fallback coming/planned projects not yet pushed are included
        fallback.forEach((f) => {
          if (!latest.some((l) => l.name.toLowerCase() === f.name.toLowerCase())) {
            latest.push(toGithubRepo(f));
          }
        });

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
