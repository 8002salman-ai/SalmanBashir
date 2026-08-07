import { useEffect, useState } from "react";

/* Cycles through words with a soft fade/slide. Respects reduced motion by
   holding the first word still. Reserves height via a grid stack so the
   headline never reflows as words change length. */
export function RotatingWord({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled || words.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [enabled, words.length, interval]);

  return (
    <span className={className}>
      {/* Invisible sizer reserves height for the longest word so the headline
          never reflows mid-rotation. min-w-0 lets it wrap on narrow screens
          instead of forcing the column wider than the viewport. */}
      <span className="grid min-w-0">
        <span
          className="invisible col-start-1 row-start-1 min-w-0"
          aria-hidden="true"
        >
          {words.reduce((a, b) => (b.length > a.length ? b : a), "")}
        </span>
        <span
          key={index}
          className="col-start-1 row-start-1 min-w-0 animate-word-in text-gradient"
        >
          {words[index]}
        </span>
      </span>
    </span>
  );
}
