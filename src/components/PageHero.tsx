import type { ReactNode } from "react";
import { Reveal } from "@/components/ui";
import { cn } from "@/utils/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16 border-b border-white/10",
        className,
      )}
    >
      {/* Luxury Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/2 top-[-20%] h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/12 blur-[130px]" />
        <div className="absolute right-1/4 top-10 h-[300px] w-[400px] rounded-full bg-blue-500/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {eyebrow}
            </div>
          )}

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
              {description}
            </p>
          )}

          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
