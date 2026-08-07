import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { Reveal, Icon, CtaCard } from "@/components/ui";
import { MediaPreview } from "@/components/MediaPreview";
import { SectionTone } from "@/components/SectionTone";
import { mediaCollections, mediaEmptyState } from "@/data/mediaData";

export function MediaPage() {
  return (
    <>
      <Seo
        title="Media | Salman Bashir — Vlogs, Build Logs, Training Clips and Travel"
        description="Video and media from Salman Bashir: operator vlogs, build logs from real systems, training clips, sourcing travel and community activity. Nothing is published here until it has been recorded and reviewed."
        path="/media"
      />
      <BreadcrumbJsonLd items={[{ name: "Media", path: "/media" }]} />
      <PageHero
        eyebrow="Media"
        title={
          <>
            The work,{" "}
            <span className="text-gradient-brand">on camera</span>
          </>
        }
        description="Vlogs, build logs, training clips, sourcing travel and everything outside the desk. Each collection fills in as videos are recorded and reviewed — nothing is staged in ahead of that."
      />

      {/* In-page jump list — each collection owns its own accent */}
      <nav aria-label="Media collections" className="relative pb-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="flex flex-wrap gap-2">
            {mediaCollections.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className={`tone tone-${c.tone} inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-accent-strong transition-colors hover:bg-brand-500/20`}
                >
                  <Icon name={c.icon} className="h-3.5 w-3.5" />
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="relative pb-20">
        {mediaCollections.map((collection, i) => (
          <SectionTone key={collection.id} tone={collection.tone}>
            <section
              id={collection.id}
              className="scroll-mt-24 py-10 sm:py-12"
              aria-labelledby={`${collection.id}-heading`}
            >
              <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <Reveal delay={i * 50}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10 text-accent-strong">
                      <Icon name={collection.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h2
                        id={`${collection.id}-heading`}
                        className="font-display text-xl font-semibold text-strong"
                      >
                        {collection.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {collection.description}
                      </p>
                    </div>
                  </div>

                  {collection.items.length > 0 ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {collection.items.map((item) => (
                        <MediaPreview
                          key={item.title}
                          kind={
                            item.youtubeUrl
                              ? "youtube"
                              : item.mp4Src
                                ? "mp4"
                                : item.poster
                                  ? "image"
                                  : "none"
                          }
                          title={item.title}
                          description={item.description}
                          youtubeUrl={item.youtubeUrl}
                          mp4Src={item.mp4Src}
                          poster={item.poster}
                          status={item.status}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-2xl border border-dashed border-edge-strong bg-panel/40 px-5 py-8 text-center">
                      <Icon
                        name="youtube"
                        className="mx-auto h-6 w-6 text-faint"
                        strokeWidth={1.4}
                      />
                      <p className="mt-2.5 text-sm font-medium text-muted">
                        {mediaEmptyState}
                      </p>
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
          </SectionTone>
        ))}
      </div>

      <CtaCard
        eyebrow="Work with me"
        title="Prefer a conversation over a video?"
        description="Tell me where your operations are today and what you want to change."
        ctaLabel="Meet up"
        ctaHref="/book"
      />
    </>
  );
}
