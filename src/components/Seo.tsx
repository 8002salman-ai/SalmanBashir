import { useEffect } from "react";

const SITE = "https://salmanbashir.vercel.app";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export function Seo({
  title,
  description,
  path = "/",
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    if (noindex) {
      setMeta('meta[name="robots"]', "content", "noindex, nofollow");
      setMeta('meta[property="og:image"]', "content", "");
    }
  }, [title, description, path, noindex]);

  return null;
}

/* Injects a JSON-LD structured-data script for the current page. Replaces any
   existing script with the same @type so navigation doesn't stack duplicates. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  useEffect(() => {
    const type = data["@type"];
    document
      .querySelectorAll(`script[data-jsonld-type="${String(type)}"]`)
      .forEach((el) => el.remove());
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-jsonld-type", String(type));
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }, [JSON.stringify(data)]);
  return null;
}

export { SITE };

/* Breadcrumb JSON-LD. `items` are `{ name, path }` pairs; the Home crumb is
   added automatically. */
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
  return <JsonLd data={data as Record<string, unknown>} />;
}
