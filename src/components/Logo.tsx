import { cn } from "@/utils/cn";

/* Official brand mark: the round 8002 + Salman Bashir badge served from
   /public (transparent background so it blends with any surface). It is the
   single source of truth for the compact site logo and is used by the
   Navbar, Footer, admin areas and other shared locations. */

export function LogoMark({
  className,
  imgClassName,
  alt = "8002 Salman Bashir logo",
}: {
  className?: string;
  imgClassName?: string;
  alt?: string;
}) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <img
        src="/logo-transparent.png"
        alt={alt}
        loading="eager"
        className={cn("h-full w-full object-contain", imgClassName)}
      />
    </span>
  );
}
