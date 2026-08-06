import { mediaPlaceholderText } from "@/data/projects";
import { Icon } from "@/components/ui";
import { cn } from "@/utils/cn";

export function EvidencePlaceholder({
  label,
  className,
  compact = false,
}: {
  label?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label ?? "Media placeholder"}
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-edge-strong bg-panel p-6 text-center",
        compact ? "min-h-[8rem]" : "min-h-[12rem]",
        className,
      )}
    >
      <Icon
        name="file"
        className={cn("text-faint/70", compact ? "h-6 w-6" : "h-7 w-7")}
        strokeWidth={1.4}
      />
      <p className="max-w-xs text-xs leading-relaxed text-faint">
        {mediaPlaceholderText}
      </p>
    </div>
  );
}
