import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AskSalmanAI } from "@/components/AskSalmanAI";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function ScrollProgress() {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.getElementById("scroll-progress-bar");
      if (bar) {
        bar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-gold-accent transition-[width] duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}

export function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg bg-texture text-soft">
      <div className="noise-layer" aria-hidden="true" />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative">
        <Outlet />
      </main>
      <Footer />
      <AskSalmanAI />
    </div>
  );
}
