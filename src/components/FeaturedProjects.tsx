import { Link } from "react-router-dom";
import { Icon, Reveal } from "@/components/ui";

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "LIVE" | "ACTIVE" | "IN DEVELOPMENT";
  statusColor: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  detailUrl?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "luxedge",
    name: "Luxedge",
    category: "Pet Products E-commerce",
    description: "Modern pet care products for a healthier, happier life.",
    status: "LIVE",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    image: "/images/astra/project-luxedge.jpg",
    liveUrl: "https://luxedge.us",
    githubUrl: "https://github.com/8002salman-ai/luxedge-website",
    detailUrl: "/projects",
  },
  {
    id: "salman-os",
    name: "Salman OS",
    category: "AI Command Center",
    description: "Personal AI operating system to automate and manage everything.",
    status: "LIVE",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    image: "/images/astra/project-salman-os.jpg",
    liveUrl: "https://salman-os.vercel.app",
    githubUrl: "https://github.com/8002salman-ai",
    detailUrl: "/ai-automation",
  },
  {
    id: "youtube-automation",
    name: "YouTube Video AI",
    category: "Autonomous AI Pipeline",
    description: "Autonomous content generation, voice synthesis & video publishing pipeline.",
    status: "LIVE",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    image: "/images/astra/yt-ai-automation.jpg",
    liveUrl: "https://youtube-automation-azure.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/youtube-automation",
    detailUrl: "/projects/youtube-automation",
  },
  {
    id: "embani-erp",
    name: "8002 ERP",
    category: "Enterprise Operations",
    description: "Multi-warehouse inventory, accounting and marketplace order management.",
    status: "LIVE",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    image: "/images/astra/project-embani-erp.jpg",
    liveUrl: "https://8002-erp.vercel.app",
    githubUrl: "https://github.com/8002salman-ai/8002-erp",
    detailUrl: "/projects/embani-erp",
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="relative py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <Reveal>
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              REAL PROJECTS. REAL RESULTS.
            </div>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              <span>View All Projects</span>
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60}>
              <div
                id={project.id}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#090d18] shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/50 hover:shadow-[0_16px_36px_-10px_rgba(79,70,229,0.3)] scroll-mt-28"
              >
                {/* Image Header with Status Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.name}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-80" />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md ${project.statusColor}`}
                    >
                      {project.status === "LIVE" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-300 mt-0.5">
                      {project.category}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons: Live Site & GitHub */}
                  <div className="mt-5 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-95 text-center"
                      >
                        <span>Live Site</span>
                        <Icon name="arrow" className="h-3 w-3 -rotate-45" />
                      </a>
                    ) : (
                      <Link
                        to={project.detailUrl || "/projects"}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition-all hover:bg-indigo-500 active:scale-95 text-center"
                      >
                        <span>Details</span>
                      </Link>
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95 text-center"
                      >
                        <Icon name="github" className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <Link
                        to="/projects"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-white/30 hover:bg-white/10 text-center"
                      >
                        <span>Overview</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
