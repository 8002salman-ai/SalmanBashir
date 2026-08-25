import type { VercelRequest, VercelResponse } from "@vercel/node";

const MAX_AGE_SECONDS = 300;

function config(name: string): string {
  return process.env[name]?.trim() || "";
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const baseUrl = config("SALMAN_OS_BASE_URL").replace(/\/$/, "");
  const token = config("PROJECTS_FEED_TOKEN");
  if (!baseUrl || !token) {
    return res.status(503).json({ ok: false, message: "Project feed is not configured." });
  }

  try {
    const response = await fetch(`${baseUrl}/api/projects/feed`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = (await response.json()) as Record<string, unknown>;
    if (!response.ok) {
      return res.status(response.status >= 500 ? 503 : response.status).json({
        ok: false,
        message: "Project feed is temporarily unavailable.",
      });
    }

    res.setHeader("Cache-Control", `public, max-age=${MAX_AGE_SECONDS}, s-maxage=${MAX_AGE_SECONDS}, stale-while-revalidate=600`);
    return res.status(200).json({ ok: true, data: Array.isArray(body.data) ? body.data : [], meta: body.meta ?? {} });
  } catch {
    return res.status(503).json({ ok: false, message: "Project feed is temporarily unavailable." });
  }
}
