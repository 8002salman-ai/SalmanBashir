import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export type Tone = "cyan" | "indigo" | "emerald" | "amber" | "rose" | "sky";

/* Wraps a page section in its own accent family and lights up its ambient
   wash while it is the section the reader is on. The retint itself is pure
   CSS, so it still applies if JavaScript never runs — only the glow depends
   on the observer. */
export function SectionTone({
  tone,
  children,
  className,
  id,
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      // Middle band of the viewport: the section "owns" the screen when its
      // body crosses the centre, so tones hand over cleanly as you scroll.
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={cn("tone", `tone-${tone}`, active && "is-active", className)}
    >
      {children}
    </div>
  );
}
