import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";
import { Icon } from "@/components/ui";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="404 — Page Not Found | Salman Bashir"
        description="The requested page could not be found. Explore Salman Bashir's systems, projects, and e-commerce operations."
      />
      <section className="relative min-h-[75vh] flex items-center justify-center py-20 px-5 sm:px-8">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[400px] w-[550px] rounded-full bg-gradient-to-tr from-brand-500/15 via-indigo-500/10 to-transparent blur-[140px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="relative mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-rose-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-ping" />
            HTTP 404 · Route Not Found
          </div>

          <h1 className="mt-6 font-display text-6xl sm:text-8xl font-black tracking-tight text-white">
            404
          </h1>

          <h2 className="mt-3 font-display text-xl sm:text-2xl font-bold text-slate-200">
            This system node does not exist
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">
            The page you requested may have been moved, renamed, or never deployed. Choose a verified destination below to continue exploring.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:border-brand-400/40 hover:bg-white/10 transition-all"
            >
              <Icon name="layers" className="h-4 w-4 text-brand-400" />
              <span>Explore Projects</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:border-brand-400/40 hover:bg-white/10 transition-all"
            >
              <Icon name="mail2" className="h-4 w-4 text-cyan-400" />
              <span>Contact Direct</span>
            </Link>
          </div>

          {/* Quick Ecosystem Links */}
          <div className="mt-12 border-t border-white/10 pt-6 text-left">
            <p className="text-center text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Direct Quick Links
            </p>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <Link to="/about" className="rounded-lg bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors">About</Link>
              <Link to="/services" className="rounded-lg bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors">Services</Link>
              <Link to="/ai-automation" className="rounded-lg bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors">AI & Automation</Link>
              <Link to="/book" className="rounded-lg bg-white/[0.03] p-2 text-slate-300 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors">Work With Me</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
