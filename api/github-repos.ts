import type { VercelRequest, VercelResponse } from "@vercel/node";

const GITHUB_USER = "8002salman-ai";

interface EnrichedRepo {
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
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  // Cache at Vercel Edge for 24 hours (daily), serving stale while revalidating
  res.setHeader(
    "Cache-Control",
    "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200"
  );

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "SalmanBashir-Portfolio-DailySync",
    };

    const token = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=100`,
      { headers }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        message: `GitHub API returned ${response.status}`,
      });
    }

    const data = (await response.json()) as {
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

    if (!Array.isArray(data)) {
      return res.status(500).json({ ok: false, message: "Invalid GitHub API response" });
    }

    const repos: EnrichedRepo[] = data.map((r) => {
      const daysSincePushed = (Date.now() - Date.parse(r.pushed_at)) / (1000 * 60 * 60 * 24);
      const isRecent = daysSincePushed <= 45;
      const homepage = r.homepage && r.homepage.trim() ? r.homepage.trim() : null;

      let category: "new" | "old" | "coming" = isRecent ? "new" : "old";
      if (r.name.toLowerCase() === "commerceos") {
        category = "coming";
      }

      const status = homepage
        ? (category === "new" ? "Active Store" : "Live")
        : (isRecent ? "New Project" : "Production System");

      return {
        name: r.name,
        desc: r.description || `${r.name} repository`,
        url: r.html_url,
        stars: r.stargazers_count ?? 0,
        language: r.language || null,
        topics: r.topics?.slice(0, 3) ?? [],
        pushedAt: r.pushed_at,
        homepage,
        category,
        status,
      };
    });

    // Ensure commerceos is present as upcoming architecture project
    if (!repos.some((r) => r.name.toLowerCase() === "commerceos")) {
      repos.push({
        name: "commerceos",
        desc: "Next-gen omnichannel commerce operating system & headless API",
        url: `https://github.com/${GITHUB_USER}/commerceos`,
        stars: 0,
        language: "TypeScript",
        topics: ["ecommerce", "architecture"],
        pushedAt: null,
        homepage: null,
        category: "coming",
        status: "Architecture / Coming",
      });
    }

    return res.status(200).json({
      ok: true,
      syncedAt: new Date().toISOString(),
      repos,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
}
