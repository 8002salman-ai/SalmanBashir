import { useEffect, useState, type ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { adminSignOut, logAdminActivity } from "@/lib/admin";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/ui";
import { OverviewSection } from "@/components/admin/OverviewSection";
import { SettingsSection } from "@/components/admin/SettingsSection";
import { LinksSection } from "@/components/admin/LinksSection";
import { HomepageSection } from "@/components/admin/HomepageSection";
import { ServicesSection } from "@/components/admin/ServicesSection";
import { TrainingSection } from "@/components/admin/TrainingSection";
import { ProjectsSection } from "@/components/admin/ProjectsSection";
import { BookingsSection } from "@/components/admin/BookingsSection";
import { ResumeSection } from "@/components/admin/ResumeSection";
import { ThemeSection } from "@/components/admin/ThemeSection";
import { ActivitySection } from "@/components/admin/ActivitySection";

type SectionId =
  | "overview"
  | "settings"
  | "links"
  | "homepage"
  | "services"
  | "training"
  | "projects"
  | "bookings"
  | "resume"
  | "theme"
  | "activity";

const NAV: { id: SectionId; label: string; icon: string }[] = [
  { id: "overview", label: "Overview", icon: "chart" },
  { id: "settings", label: "Settings & Branding", icon: "settings" },
  { id: "links", label: "Social Links", icon: "external" },
  { id: "homepage", label: "Homepage", icon: "compass" },
  { id: "services", label: "Services", icon: "layers" },
  { id: "training", label: "Training", icon: "book" },
  { id: "projects", label: "Projects", icon: "briefcase" },
  { id: "bookings", label: "Bookings", icon: "calendar" },
  { id: "resume", label: "Resume", icon: "file" },
  { id: "theme", label: "Theme", icon: "target" },
  { id: "activity", label: "Activity Log", icon: "clock" },
];

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [section, setSection] = useState<SectionId>("overview");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    logAdminActivity("admin_opened_dashboard", { section });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSignOut() {
    await logAdminActivity("admin_signed_out", {});
    await adminSignOut();
    navigate("/admin", { replace: true });
  }

  const Sections: Record<SectionId, () => ReactElement> = {
    overview: OverviewSection,
    settings: SettingsSection,
    links: LinksSection,
    homepage: HomepageSection,
    services: ServicesSection,
    training: TrainingSection,
    projects: ProjectsSection,
    bookings: BookingsSection,
    resume: ResumeSection,
    theme: ThemeSection,
    activity: ActivitySection,
  };

  const Active = Sections[section];

  return (
    <>
      <Seo title="Dashboard | Salman Bashir" description="Admin dashboard." path="/admin/dashboard" noindex />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-zinc-800 bg-zinc-900/70 backdrop-blur transition-transform lg:translate-x-0 ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center gap-3 border-b border-zinc-800 px-5">
            <span className="h-8 w-8 overflow-hidden rounded-lg border border-zinc-800">
              <LogoMark className="block h-full w-full" />
            </span>
            <span className="font-display text-sm font-semibold">Admin Panel</span>
          </div>
          <nav className="scrollbar-thin h-[calc(100vh-4rem)] overflow-y-auto p-3">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSection(item.id);
                  setNavOpen(false);
                }}
                className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  section === item.id
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                }`}
              >
                <Icon name={item.icon as never} className="h-4 w-4 shrink-0" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {navOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
            onClick={() => setNavOpen(false)}
          />
        )}

        <div className="lg:pl-64">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-zinc-800 bg-zinc-950/80 px-4 backdrop-blur sm:px-6">
            <button
              type="button"
              aria-label="Open navigation"
              className="rounded-lg border border-zinc-800 p-2 lg:hidden"
              onClick={() => setNavOpen(true)}
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <h1 className="flex-1 font-display text-sm font-semibold sm:text-base">
              {NAV.find((n) => n.id === section)?.label ?? "Dashboard"}
            </h1>
            <Link
              to="/"
              target="_blank"
              className="text-xs text-zinc-400 transition-colors hover:text-cyan-400"
            >
              View site
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-lg border border-zinc-800 px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-red-800 hover:text-red-300"
            >
              Sign out
            </button>
          </header>
          <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
            <Active />
          </main>
        </div>
      </div>
    </>
  );
}
