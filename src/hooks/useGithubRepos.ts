import { useEffect, useState } from "react";

export type GithubRepo = {
  name: string;
  desc: string;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  pushedAt: string | null;
  homepage: string | null;
};

const GITHUB_USER = "8002salman-ai";
const CACHE_KEY = "gh-repos-cache-v2";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // refresh from GitHub once a day

/**
 * Syncs public repos for the GitHub profile — newest activity first.
 * Cached in localStorage for 24h ("daily sync"); every new public repo
 * appears automatically without a rebuild. Falls back to `fallback`
 * (the static list in content.ts) when offline or rate-limited.
 */
export function useGithubRepos(fallback: { name: string; desc: string; url: string }[]) {
  const [repos, setRepos] = useState<GithubRepo[]>(
    fallback.map((r) => ({
      name: r.name,
      desc: r.desc,
      url: r.url,
      stars: 0,
      language: null,
      topics: [],
      pushedAt: null,
      homepage: null,
    })),
  );
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
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=100`,
          { headers: { Accept: "application/vnd.github+json" } },
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
        const latest: GithubRepo[] = data
          .slice()
          .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
          .map((r) => ({
            name: r.name,
            desc: r.description || "GitHub repository",
            url: r.html_url,
            stars: r.stargazers_count ?? 0,
            language: r.language,
            topics: r.topics?.slice(0, 3) ?? [],
            pushedAt: r.pushed_at,
            homepage: r.homepage || null,
          }));
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
  }, []);

  return { repos, live };
}
