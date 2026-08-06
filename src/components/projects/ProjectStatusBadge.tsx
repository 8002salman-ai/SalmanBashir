import type { ProjectStatus } from "@/data/projects";
import { StatusBadge } from "@/components/ui";

const projectTone: Record<ProjectStatus, "live" | "active" | "planning" | "placeholder"> = {
  Live: "live",
  Prototype: "active",
  "In Development": "active",
  Planned: "planning",
  Ongoing: "live",
};

export function ProjectStatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <StatusBadge tone={projectTone[status]} className={className}>
      {status}
    </StatusBadge>
  );
}
