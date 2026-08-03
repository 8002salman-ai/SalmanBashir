import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { services } from "@/data/content";
import { Link } from "react-router-dom";
import { Reveal, Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

const alternateBg = [
  "border-edge bg-panel",
  "border-edge-strong bg-gradient-to-br from-panel to-transparent",
];

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | Salman Bashir — E-commerce Operations & Automation Consulting"
        description="E-commerce operations reviews, profit and COGS dashboards, marketplace workflow automation, AI-assisted ERP prototyping, integration planning and SOP design — built around how your business actually runs."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Services built around{" "}
            <span className="text-gradient-brand">practical results</span>
          </>
        }
        description="From marketplace operations reviews to profit dashboards and AI-assisted ERP prototyping — every service is built around the way your business actually runs, not around generic templates."
      />

      <section className="relative pb-20 pt-2">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Quick index */}
          <Reveal>
            <nav aria-label="Services index" className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#service-${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-edge bg-panel px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-brand-500/40 hover:text-accent-strong"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="mt-10 space-y-8">
            {services.map((s, i) => (
              <ServiceDetail key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({
  service: s,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <Reveal>
      <article
        id={`service-${s.slug}`}
        className={cn(
          "scroll-mt-24 overflow-hidden rounded-3xl border",
          alternateBg[index % 2],
        )}
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
          {/* Left: intro */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-4xl font-bold text-strong/10">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
              {s.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {s.desc}
            </p>

            <div className="mt-6 space-y-4">
              <Block label="The client problem">
                <p>{s.clientProblem}</p>
              </Block>
              <Block label="Salman's solution">
                <p>{s.solution}</p>
              </Block>
            </div>
          </div>

          {/* Right: details */}
          <div className="space-y-4">
            <Block label="Deliverables" list>
              <ul>
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2.2}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </Block>

            <Block label="Who this is for">
              <p>{s.suitableClient}</p>
            </Block>

            <Block label="How we work">
              <ol className="space-y-2">
                {s.workingMethod.map((step, si) => (
                  <li key={step} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-brand-500/30 bg-brand-500/10 text-[10px] font-bold text-accent-strong">
                      {si + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Block>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
              >
                Book a Consultation
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-edge bg-panel px-5 py-2.5 text-sm font-semibold text-strong transition-colors hover:border-brand-500/40 hover:text-accent-strong"
              >
                Discuss This Service
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Block({
  label,
  list = false,
  children,
}: {
  label: string;
  list?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-edge bg-bg/40 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">
        {label}
      </p>
      <div
        className={cn(
          "mt-2 text-sm leading-relaxed text-soft",
          list && "space-y-2",
        )}
      >
        {children}
      </div>
    </div>
  );
}
