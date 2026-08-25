export type SalmanOsProject = {
  id: string;
  name: string;
  slug: string;
  description: string;
  github_owner: string;
  github_repo: string;
  repository_visibility: "public" | "private";
  default_branch: string;
  production_url: string | null;
  preview_url: string | null;
  vercel_project: string | null;
  status: string;
  health_score: number | null;
  last_commit: string | null;
  last_commit_at: string | null;
  last_deployment_at: string | null;
  updated_at: string | null;
};

type FeedResponse = { data?: unknown };

function isProject(value: unknown): value is SalmanOsProject {
  if (!value || typeof value !== "object") return false;
  const project = value as Record<string, unknown>;
  return (
    typeof project.id === "string" &&
    typeof project.name === "string" &&
    typeof project.slug === "string" &&
    typeof project.github_owner === "string" &&
    typeof project.github_repo === "string"
  );
}

export async function fetchProjectFeed(signal?: AbortSignal): Promise<SalmanOsProject[]> {
  const response = await fetch("/api/projects-feed", {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal,
  });
  if (!response.ok) throw new Error(`Project feed returned ${response.status}`);
  const payload = (await response.json()) as FeedResponse;
  return Array.isArray(payload.data) ? payload.data.filter(isProject) : [];
}
