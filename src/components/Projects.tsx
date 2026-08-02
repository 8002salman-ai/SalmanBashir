import { projects } from "@/data/content";
import { Reveal, SectionHeading, Icon, type IconName } from "@/components/ui";
import { cn } from "@/utils/cn";

const featured = projects.find((p) => p.featured) ?? projects[0];
const rest = projects.filter((p) => !p.featured);

const accentClasses = {
  brand: "border-brand-500/20 bg-brand-500/10 text-brand-300",
  gold: "border-gold-500/20 bg-gold-500/10 text-gold-300",
};

function PreviewPlaceholder({ icon }: { icon: IconName }) {
  return (
    <div
      role="img"
      aria-label="Project preview coming soon"
      className="flex h-full min-h-[9rem] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-center"
    >
      <Icon name={icon} className="h-7 w-7 text-zinc-500" />
      <p className="text-xs font-medium text-zinc-500">
        Project preview coming soon
      </p>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title={
              <>
                Systems built around{" "}
                <span className="text-gradient-brand">real business problems</span>
              </>
            }
            description="A focused set of platforms, workflows and tools I've built from the operator's side. Every project is described honestly — no invented customers, users or performance numbers."
          />
        </Reveal>

        {/* Featured project */}
        <Reveal className="mt-14">
          <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
            </div>

            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
                    Featured Project
                  </span>
                  {featured.status && (
                    <span className="flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                      {featured.status}
                    </span>
                  )}
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400">
                    {featured.type}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {featured.desc}
                </p>

                {featured.role && (
                  <div className="mt-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      My Role
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                      {featured.role}
                    </p>
                  </div>
                )}

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {featured.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-zinc-300"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                        strokeWidth={2.2}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview placeholder */}
              <div className="relative">
                <PreviewPlaceholder icon={featured.icon} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Rest of projects */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                <PreviewPlaceholder icon={p.icon} />

                <div className="mt-5 flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                      accentClasses[p.accent],
                    )}
                  >
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-right text-[11px] font-medium leading-tight text-zinc-600">
                    {p.type}
                  </span>
                </div>

                <h4 className="mt-4 font-display text-lg font-semibold text-white">
                  {p.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {p.desc}
                </p>

                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
