import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const targetUrl = (req.query.url as string) || "https://luxedge.us";

  let origin = "https://luxedge.us";
  try {
    const urlObj = new URL(targetUrl);
    origin = urlObj.origin;
  } catch {
    return res.status(400).send("Invalid target URL");
  }

  // Allowed targets
  const allowedOrigins = ["https://luxedge.us", "https://salman-os-swart.vercel.app"];
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).send("Origin not permitted for preview");
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    let html = await response.text();
    // Inject base tag so all assets, css and scripts resolve against the live site origin
    html = html.replace(/<head>/i, `<head><base href="${origin}/">`);

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).send(html);
  } catch {
    return res.status(502).send("Could not load preview");
  }
}
