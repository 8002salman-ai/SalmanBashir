import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

export function AdminCard({
  title,
  description,
  children,
  className,
  action,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6",
        className,
      )}
    >
      {(title || action) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && (
              <h3 className="font-display text-base font-semibold text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                {description}
              </p>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function AdminField({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-zinc-300">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-zinc-500">{hint}</span>}
    </label>
  );
}

export const adminInputClass =
  "w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-cyan-500/60";

export function AdminInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(adminInputClass, props.className)} />;
}

export function AdminTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={cn(adminInputClass, "resize-y", props.className)} />
  );
}

export function AdminSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={cn(adminInputClass, props.className)} />
  );
}

export function AdminToggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        checked ? "bg-cyan-500" : "bg-zinc-700",
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1",
        )}
      />
    </button>
  );
}

export function AdminButton({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "danger";
}) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-cyan-500 text-zinc-950 hover:bg-cyan-400",
        variant === "ghost" &&
          "border border-zinc-800 bg-zinc-900 text-zinc-200 hover:border-zinc-700 hover:text-white",
        variant === "danger" &&
          "border border-red-900/60 bg-red-950/40 text-red-300 hover:bg-red-950/70",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function AdminBadge({
  children,
  tone = "zinc",
}: {
  children: ReactNode;
  tone?: "zinc" | "green" | "amber" | "red" | "cyan";
}) {
  const tones = {
    zinc: "border-zinc-700 bg-zinc-800/60 text-zinc-300",
    green: "border-emerald-800 bg-emerald-950/50 text-emerald-300",
    amber: "border-amber-800 bg-amber-950/50 text-amber-300",
    red: "border-red-800 bg-red-950/50 text-red-300",
    cyan: "border-cyan-800 bg-cyan-950/50 text-cyan-300",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function AdminStatus({ label }: { label: string }) {
  const tone = label === "ok" || label === "configured" ? "green" : label === "off" ? "zinc" : "amber";
  return <AdminBadge tone={tone}>{label}</AdminBadge>;
}

export function AdminError({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div
      role="alert"
      className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-sm text-red-300"
    >
      {message}
    </div>
  );
}

export function AdminNotice({ message }: { message: string }) {
  if (!message) return null;
  return (
    <div
      role="status"
      className="rounded-lg border border-emerald-800 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-300"
    >
      {message}
    </div>
  );
}

/* Edits a string array as newline-separated lines. */
export function ArrayEditor({
  value,
  onChange,
  placeholder,
}: {
  value: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      rows={4}
      value={value.join("\n")}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value.split("\n"))}
      className={cn(adminInputClass, "resize-y")}
    />
  );
}
