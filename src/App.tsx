import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { HowIWork } from "@/components/HowIWork";
import { Stack } from "@/components/Stack";
import { CaseStudies } from "@/components/CaseStudies";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-gold-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-zinc-200">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Projects />
        <HowIWork />
        <Stack />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
