import { credibility, personal } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/ui";

export function Credibility() {
  return (
    <section id="credibility" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-gold-500/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Credibility"
            title={
              <>
                Why my experience{" "}
                <span className="text-gradient-brand">matters</span>
              </>
            }
            description="I've worked inside online businesses — not just around them. These are the areas I understand from hands-on experience."
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {credibility.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-500/20 bg-brand-500/10 text-xs font-bold text-brand-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm font-medium text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-400">
              {personal.heroCredibility} This operational foundation is what
              separates practical systems from impressive-looking ones that
              don't fit the business.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
