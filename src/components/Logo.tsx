import { cn } from "@/utils/cn";

/* Brand mark. The Urdu tile is served in dark + light variants and the
   correct one is shown via CSS based on the active theme (including the
   "system" preference). */

export function LogoMark({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <img
        src="/branding/salman-urdu-logo-dark.svg"
        alt=""
        className={cn("logo-theme-dark h-full w-full", imgClassName)}
      />
      <img
        src="/branding/salman-urdu-logo-light.svg"
        alt=""
        className={cn("logo-theme-light h-full w-full", imgClassName)}
      />
    </span>
  );
}
