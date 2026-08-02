import type { ReactNode } from "react";
import { Reveal, Eyebrow } from "@/components/ui";
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
    <section className={cn("relative overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-32", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-50" />
        <div className="absolute left-1/2 top-[-30%] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/12 blur-[130px]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-strong sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
