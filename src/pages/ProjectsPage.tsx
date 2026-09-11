import { PageHero } from "@/components/PageHero";
import { ProjectsSection } from "@/components/Projects";
import { GithubReposSection } from "@/components/GithubReposSection";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Salman Bashir — Live E-Commerce Stores, Enterprise ERP & AI Systems"
        description="Explore Salman Bashir's verified live production projects: LuxEdge, 8002 ERP, YouTube Video AI, Basco Sports, Himalayan Koh, and hands-on multi-channel marketplace systems with 100% verified uptime."
        path="/projects"
      />
      <BreadcrumbJsonLd items={[{ name: "Projects", path: "/projects" }]} />
      <PageHero
        eyebrow="Verified Production Portfolio"
        title={
          <>
            Live systems built around{" "}
            <span className="text-gradient-brand">real business operations</span>
          </>
        }
        description="Every platform, storefront and automation system below is deployed live in production. Explore verified live URLs, open-source code repositories, and deep operator case studies."
      />
      <ProjectsSection />
      <GithubReposSection />
    </>
  );
}
