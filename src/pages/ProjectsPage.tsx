import { PageHero } from "@/components/PageHero";
import { ProjectsSection } from "@/components/Projects";
import { Seo } from "@/components/Seo";

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Salman Bashir — E-commerce ERP, Dashboards & Systems"
        description="Systems built around real business problems: an e-commerce ERP platform, a business operations platform, multi-marketplace operations and Google Sheets sales workspaces — described honestly."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Systems built around{" "}
            <span className="text-gradient-brand">real business problems</span>
          </>
        }
        description="A focused set of platforms, workflows and tools I've built from the operator's side. Every project is described honestly — no invented customers, users or performance numbers."
      />
      <ProjectsSection />
    </>
  );
}
