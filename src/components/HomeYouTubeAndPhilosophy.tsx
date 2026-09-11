import { Link } from "react-router-dom";
import { Icon } from "@/components/ui";

const VIDEOS = [
  {
    title: "How Livestock Salt Licks Are Made & Used Worldwide",
    duration: "7:15",
    url: "https://www.youtube.com/watch?v=jnbtdcHif7k",
    image: "/images/astra/yt-salt-licks.jpg",
  },
  {
    title: "E-commerce Business Step by Step Guide",
    duration: "10:24",
    url: "https://www.youtube.com/@TheAIWithSalman",
    image: "/images/astra/yt-ecommerce-guide.jpg",
  },
  {
    title: "AI Automation for Online Business",
    duration: "8:36",
    url: "https://www.youtube.com/@TheAIWithSalman",
    image: "/images/astra/yt-ai-automation.jpg",
  },
];

export function HomeYouTubeAndPhilosophy() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Latest from YouTube (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#0c1020] to-[#07090e] p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                    IDEAS, GUIDES AND REAL BUSINESS CONTENT
                  </div>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                    Latest from YouTube
                  </h3>
                </div>

                <a
                  href="https://www.youtube.com/@TheAIWithSalman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors shrink-0"
                >
                  <span>View Channel</span>
                  <Icon
                    name="arrow"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* 3 Video Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
                {VIDEOS.map((v) => (
                  <a
                    key={v.title}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.06]"
                  >
                    {/* Thumbnail with duration */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={v.image}
                        alt={v.title}
                        width={320}
                        height={200}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/90 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-0.5">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Duration pill */}
                      <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-white">
                        {v.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="p-3">
                      <h4 className="font-medium text-xs text-slate-200 line-clamp-2 group-hover:text-white transition-colors">
                        {v.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: What People Say / Operating Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/12 bg-gradient-to-b from-[#0c1020] to-[#07090e] p-6 sm:p-8 shadow-2xl backdrop-blur">
            <div>
              <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-indigo-400">
                TRUSTED BY BUSINESS OWNERS
              </div>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                What People Say
              </h3>
            </div>

            {/* Testimonial / Philosophy Card */}
            <div className="my-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-relaxed text-slate-300 italic">
                “Salman's systems and automation ideas helped us streamline our operations and save countless hours. Highly recommended!”
              </p>

              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-md">
                  BO
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    Business Owner
                  </div>
                  <div className="text-[11px] text-slate-400">
                    E-commerce & Wholesale
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect link */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Have a system requirement?</span>
              <Link to="/book" className="font-bold text-cyan-300 hover:text-white transition-colors">
                Meet Salman →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
