import { Link } from "react-router-dom";
import { skillGroups } from "@/data/skillsGroups";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

/* Homepage "Skills Preview" — concise cards per group, no percentage bars,
   linking through to the full /skills page for detail. */
export function SkillsPreviewSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title={
              <>
                Skills built through{" "}
                <span className="text-gradient-brand">real operational work</span>
              </>
            }
            description="Honest, qualitative skill levels — hands-on, operational, building or learning. No invented percentages."
          />
        </Reveal>

        <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 70}>
              <Link
                to={`/skills#${group.id}`}
                className="card card-hover flex h-full flex-col p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-sm font-semibold text-strong">
                  {group.title}
                </p>
                <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted">
                  {group.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link to="/skills" className="btn btn-secondary">
            View All Skills
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
