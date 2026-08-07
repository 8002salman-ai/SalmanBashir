import { Link } from "react-router-dom";
import { quickLinks } from "@/data/content";
import { Icon } from "@/components/ui";

export function QuickLinks() {
  return (
    <section className="relative overflow-hidden border-t border-edge py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group rounded-xl border border-edge bg-panel/40 p-4 transition-all hover:border-brand-400/50 hover:bg-panel-strong hover:shadow-lg hover:shadow-brand-500/10 sm:p-5"
            >
              <p className="font-display text-sm font-semibold text-strong sm:text-base">
                {link.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted group-hover:text-soft">
                {link.description}
              </p>
              <Icon
                name="arrow"
                className="mt-3 h-4 w-4 text-accent-strong opacity-60 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
