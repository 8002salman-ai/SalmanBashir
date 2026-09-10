import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "local-preview-proxy",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith("/api/proxy-site")) {
            const urlObj = new URL(req.url, "http://localhost:5173");
            const targetUrl = urlObj.searchParams.get("url") || "https://luxedge.us";
            try {
              const origin = new URL(targetUrl).origin;
              const response = await fetch(targetUrl, {
                headers: {
                  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                  Accept: "*/*",
                },
              });

              res.setHeader("Access-Control-Allow-Origin", "*");
              res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
              const contentType = response.headers.get("content-type") || "";

              if (contentType.includes("text/html")) {
                let html = await response.text();
                html = html.replace(
                  /<head>/i,
                  `<head><base href="${origin}/"><style>html,body{overflow-x:hidden!important;width:100%!important;}</style>`,
                );
                html = html.replace(
                  /(src|href)=["']\/assets\/([^"']+)["']/g,
                  `$1="/api/proxy-site?url=${origin}/assets/$2"`,
                );
                html = html.replace(/\scrossorigin(=["'][^"']*["'])?/gi, "");
                res.setHeader("Content-Type", "text/html; charset=utf-8");
                res.end(html);
                return;
              }

              if (contentType) {
                res.setHeader("Content-Type", contentType);
              } else if (targetUrl.endsWith(".js")) {
                res.setHeader("Content-Type", "text/javascript; charset=utf-8");
              } else if (targetUrl.endsWith(".css")) {
                res.setHeader("Content-Type", "text/css; charset=utf-8");
              }
              const buffer = await response.arrayBuffer();
              res.end(Buffer.from(buffer));
              return;
            } catch {
              res.statusCode = 502;
              res.end("Could not load preview");
              return;
            }
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: [".monkeycode-ai.live"],
  },
  build: {
    chunkSizeWarningLimit: 700,
  },
});
