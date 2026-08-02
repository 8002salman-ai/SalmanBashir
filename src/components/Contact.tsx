import { useState } from "react";
import { personal } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-7 sm:p-12 lg:p-16">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: CTA copy */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-300">
                Book a Consultation
              </span>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let's build systems around your{" "}
                <span className="text-gradient-brand">real business</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
                {personal.statement}
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300">
                    <Icon name="location" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Location
                    </p>
                    <p className="text-sm font-medium text-white">
                      {personal.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300">
                    <Icon name="globe" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Working with
                    </p>
                    <p className="text-sm font-medium text-white">
                      {personal.markets.join(" · ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300">
                    <Icon name="calendar" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Availability
                    </p>
                    <p className="text-sm font-medium text-white">
                      Project-based · Result-focused
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6 backdrop-blur sm:p-8">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                      <Icon name="check" className="h-7 w-7" strokeWidth={2.2} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">
                      Message received
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      Thank you for reaching out. I'll get back to you shortly to discuss your business needs.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-medium text-brand-300 hover:text-brand-200"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Name" name="name" placeholder="Your name" />
                        <Field
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="you@business.com"
                        />
                      </div>
                      <Field
                        label="Company / Business"
                        name="company"
                        placeholder="Your business name"
                      />
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          What do you need help with?
                        </label>
                        <select
                          name="service"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-ink-900">
                            Select a service
                          </option>
                          <option className="bg-ink-900">AI Business Consultancy</option>
                          <option className="bg-ink-900">
                            E-commerce Operations
                          </option>
                          <option className="bg-ink-900">AI Automation</option>
                          <option className="bg-ink-900">ERP & CRM Systems</option>
                          <option className="bg-ink-900">
                            E-commerce Website Development
                          </option>
                          <option className="bg-ink-900">AI Integration</option>
                          <option className="bg-ink-900">
                            Business Dashboard Development
                          </option>
                          <option className="bg-ink-900">
                            Digital Business Setup
                          </option>
                          <option className="bg-ink-900">
                            Marketplace Growth & Management
                          </option>
                          <option className="bg-ink-900">
                            AI Strategy Session
                          </option>
                          <option className="bg-ink-900">Other / Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                          Tell me about your business
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Describe your current challenges and what you'd like to achieve..."
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                      >
                        Send Message
                        <Icon
                          name="arrow"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </form>
                  )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-zinc-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
      />
    </div>
  );
}
