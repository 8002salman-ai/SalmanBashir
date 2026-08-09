import { useEffect, useState } from "react";

const ORBIT_PATH =
  "M 575 335 C 575 292, 648 292, 675 335 C 703 292, 775 292, 775 335 C 775 378, 703 378, 675 335 C 648 378, 575 378, 575 335 Z";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function FixedWatermark() {
  const reduced = useReducedMotion();
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-1/2 z-0 w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 select-none"
    >
      <div className="relative w-full" style={{ aspectRatio: "1300 / 731" }}>
        <img
          src="/8002-salman-horizontal-transparent.png"
          alt=""
          width={1300}
          height={731}
          loading="eager"
          decoding="async"
          className="h-auto w-full animate-watermark-glow mask-watermark-center opacity-[0.18]"
        />
        {!reduced && (
          <svg
            className="absolute inset-0 h-full w-full opacity-80"
            viewBox="0 0 1300 731"
            fill="none"
          >
            <defs>
              <filter
                id="wm-orb-glow"
                x="-200%"
                y="-200%"
                width="500%"
                height="500%"
              >
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path id="wm-orbit-path" d={ORBIT_PATH} />
            <g filter="url(#wm-orb-glow)">
              <animateMotion dur="4.5s" repeatCount="indefinite" rotate="auto">
                <mpath href="#wm-orbit-path" />
              </animateMotion>
              <circle r="11" fill="#22d3ee" opacity="0.35" />
              <circle r="7" fill="#67e8f9" />
              <circle r="3.5" fill="#ecfeff" />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}
