export function ToolsUsed({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <span
          key={t}
          className="rounded-lg border border-edge bg-panel px-3 py-1.5 text-xs font-medium text-soft"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
