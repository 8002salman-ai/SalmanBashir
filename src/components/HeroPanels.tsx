import { Link } from "react-router-dom";
import { heroQuickLinks, heroStack, featuredBuilds, contact } from "@/data/content";
import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

const statusTone: Record<string, string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "In Development": "border-gold-accent/30 bg-gold-accent/10 text-gold-accent",
  Prototype: "border-edge-strong bg-panel-strong text-muted",
};

/* Replaces the old profile card. Two stacked panels: every destination on
   the site in one grid, then the builds and stack behind the work — so a
   visitor sees where to go and what has actually been made. */
export function HeroPanels({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto max-w-md space-y-4", className)}>
      {/* Quick links */}
      <div className="tone tone-cyan overflow-hidden rounded-2xl border border-edge-strong bg-bg-soft/80 shadow-xl backdrop-blur-xl">
        <div className="border-b border-edge px-4 py-3">
          <h2 className="font-display text-sm font-semibold text-strong">
            Jump anywhere
          </h2>
          <p className="mt-0.5 text-xs text-muted">
            Every part of the site, one tap away.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-px bg-edge">
          {heroQuickLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="group flex items-center gap-2.5 bg-bg-soft px-3.5 py-2.5 transition-colors hover:bg-panel-strong"
              >
                <Icon
                  name={link.icon}
                  className="h-4 w-4 shrink-0 text-accent-strong transition-transform group-hover:scale-110 motion-reduce:group-hover:scale-100"
                />
                <span className="truncate text-xs font-medium text-soft group-hover:text-strong">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Builds + stack */}
      <div className="tone tone-rose overflow-hidden rounded-2xl border border-edge-strong bg-bg-soft/80 shadow-xl backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3 border-b border-edge bg-gradient-to-r from-brand-500/10 to-transparent px-4 py-3">
          <div className="min-w-0">
            <h2 className="font-display text-sm font-semibold text-strong">
              What I&rsquo;m building
            </h2>
            <p className="mt-0.5 text-xs text-muted">
              Systems and agents, built hands-on.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 text-xs font-semibold text-accent-strong hover:underline"
          >
            All
          </Link>
        </div>

        <ul className="divide-y divide-edge">
          {featuredBuilds.map((build) => (
            <li key={build.name}>
              <Link
                to={build.href}
                className="group flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-panel-strong"
              >
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs font-semibold text-strong">
                    {build.name}
                  </span>
                  <span className="block truncate text-[11px] text-muted">
                    {build.desc}
                  </span>
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                    statusTone[build.status],
                  )}
                >
                  {build.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-edge px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-faint">
            Built with
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {heroStack.map((tech) => (
              <li
                key={tech.label}
                title={tech.note}
                className="rounded-lg border border-edge bg-panel px-2 py-1 text-[11px] font-medium text-soft"
              >
                {tech.label}
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-primary btn-sm"
            >
              <Icon name="mail2" className="h-4 w-4" />
              Email Me
            </a>
            {contact.socials.github && (
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                GitHub
                <Icon name="github" className="h-4 w-4" />
              </a>
            )}
            {contact.socials.linkedin && (
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                LinkedIn
                <Icon name="linkedin" className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
