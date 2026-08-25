import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { contact } from "@/data/content";
import { Icon } from "@/components/ui";
import { useGithubRepos, type GithubRepo } from "@/hooks/useGithubRepos";

function sitesFor(repo: GithubRepo): { label: string; href: string; home: boolean }[] {
  const out: { label: string; href: string; home: boolean }[] = [];
  if (repo.homepage) out.push({ label: "Live site", href: repo.homepage, home: true });
  out.push({ label: "GitHub", href: repo.url, home: false });
  return out;
}

/* Strip of GitHub repos so latest work is visible right in the hero —
   newest first, star count when there is one, and a "Live site" link
   whenever a repo ships a homepage. Compact, no layout shift. */
export function GithubHeroStrip({ className }: { className?: string }) {
  const { repos } = useGithubRepos([]);
  if (repos.length === 0) return null;

  return (
    <div className={cn("mt-5", className)}>
      <div className="mb-2 flex items-center gap-2">
        <Icon name="github" className="h-3.5 w-3.5 text-muted" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-faint">
          Latest on GitHub
        </span>
        <span className="h-px flex-1 bg-edge" />
        <a
          href={contact.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-accent-strong hover:underline"
        >
          View Profile →
        </a>
      </div>

      <ul className="flex flex-col gap-2">
        {repos.slice(0, 4).map((repo) => (
          <li
            key={repo.name}
            className="rounded-xl border border-edge bg-panel/50 px-3 py-2 transition-colors hover:bg-panel-strong"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-edge bg-bg-soft">
                <Icon name="github" className="h-3 w-3 text-muted" />
              </span>
              <Link to="/projects" className="min-w-0 group">
                <span className="block truncate text-xs font-semibold text-strong group-hover:text-accent-strong">
                  {repo.name}
                  {repo.stars > 0 && (
                    <span className="ml-1.5 inline-flex items-center gap-0.5 align-middle text-[10px] font-medium text-gold-accent">
                      <Icon name="star" className="h-2.5 w-2.5" />
                      {repo.stars}
                    </span>
                  )}
                </span>
                <span className="block truncate text-[10px] text-muted">
                  {repo.language ? `${repo.language} · ` : ""}
                  {repo.desc}
                </span>
              </Link>
              <span className="ml-auto flex shrink-0 gap-1.5">
                {sitesFor(repo).map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[9px] font-semibold",
                      s.home
                        ? "border-brand-500/30 bg-brand-500/10 text-accent-strong"
                        : "border-edge bg-bg-soft text-muted",
                    )}
                  >
                    {s.home && <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />}
                    {s.label}
                  </a>
                ))}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}