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
  const allowedOrigins = [
    "https://luxedge.us",
    "https://8002-erp.vercel.app",
    "https://salman-os-swart.vercel.app",
    "https://salmanbashir.vercel.app",
  ];
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).send("Origin not permitted for preview");
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "*/*",
      },
    });

    const contentType = response.headers.get("content-type") || "";

    // Always set open CORS headers so assets are never blocked by browser
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");

    if (contentType.includes("text/html")) {
      let html = await response.text();

      // Auto-authenticate 8002 ERP so visitor immediately sees the live colored dashboard
      if (origin.includes("8002-erp")) {
        const erpAuthScript = `<script>try{localStorage.setItem("8002-auth",JSON.stringify({state:{currentUser:{id:"admin-001",email:"admin@8002erp.com",password:"Admin123@@@",name:"8002 Admin",role:"ADMIN",status:"active"},isAuthenticated:true},version:0}));if(location.pathname==="/login")location.replace("/");}catch(e){}</script>`;
        html = html.replace(/<head>/i, `<head>${erpAuthScript}`);
      }

      // Inject base tag and overflow prevention style
      html = html.replace(
        /<head>/i,
        `<head><base href="${origin}/"><style>html,body{overflow-x:hidden!important;width:100%!important;}</style>`,
      );

      // Rewrite asset paths to pass through this proxy so CORS never blocks JS or CSS modules
      html = html.replace(
        /(src|href)=["']\/assets\/([^"']+)["']/g,
        `$1="/api/proxy-site?url=${origin}/assets/$2"`,
      );

      // Remove crossorigin attributes so browser doesn't trigger strict cross-origin module failure
      html = html.replace(/\scrossorigin(=["'][^"']*["'])?/gi, "");

      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(html);
    }

    // For JS, CSS, images, fonts: pass the content-type and body
    if (contentType) {
      res.setHeader("Content-Type", contentType);
    } else if (targetUrl.endsWith(".js")) {
      res.setHeader("Content-Type", "text/javascript; charset=utf-8");
    } else if (targetUrl.endsWith(".css")) {
      res.setHeader("Content-Type", "text/css; charset=utf-8");
    }

    const buffer = await response.arrayBuffer();
    return res.status(200).send(Buffer.from(buffer));
  } catch {
    return res.status(502).send("Could not load preview");
  }
}
