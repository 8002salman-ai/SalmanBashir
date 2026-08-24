import { githubRepos, contact } from "@/data/content";
import { Icon } from "@/components/ui";
import { Reveal } from "@/components/ui";

/**
 * Compact, auto-scrolling strip of GitHub repo badges.
 * Sits right below the hero so every repo is visible immediately
 * without taking vertical space or breaking the layout.
 */
export function GitHubRepos() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="github" className="h-4 w-4 text-muted" />
            <span className="text-xs font-semibold uppercase tracking-wider text-faint">
              Open Source on GitHub
            </span>
            <span className="h-px flex-1 bg-edge" />
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent-strong hover:underline"
            >
              View Profile →
            </a>
          </div>
        </Reveal>
      </div>

      {/* Auto-scrolling marquee row */}
      <div className="group relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24" />

        <div className="flex w-max animate-marquee gap-2.5 px-4 group-hover:[animation-play-state:paused]">
          {/* Duplicate for seamless loop */}
          {[...githubRepos, ...githubRepos].map((repo, i) => (
            <a
              key={`${repo.name}-${i}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2.5 rounded-xl border border-edge bg-panel/60 px-4 py-2.5 text-left backdrop-blur-sm transition-all hover:border-brand-500/30 hover:bg-panel-strong hover:-translate-y-0.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-edge bg-bg-soft">
                <Icon name="github" className="h-3.5 w-3.5 text-muted" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold text-strong">
                  {repo.name}
                </span>
                <span className="block truncate text-[10px] text-faint">
                  {repo.desc}
                </span>
              </span>
              <Icon
                name="external"
                className="h-3 w-3 shrink-0 text-faint transition-colors group-hover:text-accent-strong"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
