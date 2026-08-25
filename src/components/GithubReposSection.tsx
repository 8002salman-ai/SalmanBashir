import { contact } from "@/data/content";
import { Icon, Reveal, SectionHeading } from "@/components/ui";
import { useGithubRepos } from "@/hooks/useGithubRepos";

function timeAgo(iso: string | null): string | null {
  if (!iso) return null;
  const days = Math.floor((Date.now() - Date.parse(iso)) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
  return `${Math.floor(months / 12)} year${months >= 24 ? "s" : ""} ago`;
}

/**
 * Detailed, live-synced grid of every public GitHub repository —
 * newest activity first. Shown on the Projects page.
 */
export function GithubReposSection() {
  const { repos, live } = useGithubRepos([]);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Open Source on GitHub"
            title={
              <>
                Every repo,{" "}
                <span className="text-gradient-brand">live from GitHub</span>
              </>
            }
            description="Synced directly from my GitHub profile — newest activity first. When I push a new project, it shows up here automatically."
          />
          <div className="mt-4 flex justify-center">
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Icon name="github" className="h-3.5 w-3.5" />
              View GitHub Profile
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={Math.min(i, 8) * 50}>
              <a
                href={repo.homepage || repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-edge bg-bg-soft">
                      <Icon name="github" className="h-4 w-4 text-muted" />
                    </span>
                    <h3 className="truncate font-display text-sm font-semibold text-strong">
                      {repo.name}
                    </h3>
                  </div>
                  <Icon
                    name="external"
                    className="h-3.5 w-3.5 shrink-0 text-faint transition-colors group-hover:text-accent-strong"
                  />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {repo.desc}
                </p>

                {repo.topics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-edge bg-panel px-2 py-0.5 text-[10px] font-medium text-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-edge pt-3 text-xs text-faint">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5 font-medium text-muted">
                      <span className="h-2 w-2 rounded-full bg-brand-500/70" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && (
                    <span className="inline-flex items-center gap-1 font-medium text-gold-accent">
                      <Icon name="star" className="h-3 w-3" />
                      {repo.stars}
                    </span>
                  )}
                  {timeAgo(repo.pushedAt) && (
                    <span className="ml-auto">Updated {timeAgo(repo.pushedAt)}</span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-faint">
          {live
            ? "Live data from the GitHub API — refreshed daily."
            : "Showing cached repository list."}
        </p>
      </div>
    </section>
  );
}
