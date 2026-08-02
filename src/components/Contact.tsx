import { useState } from "react";
import { personal, contact } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

const serviceOptions = [
  "E-commerce Operations Review",
  "Profit and COGS Dashboards",
  "Marketplace Workflow Automation",
  "ERP and Internal Tool Prototyping",
  "Marketplace Integration Planning",
  "SOP and Business Process Design",
  "Other / Not sure yet",
];

const budgetOptions = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const honeypot = fd.get("company_website");
    if (honeypot) return;

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const business = String(fd.get("business") ?? "");
    const marketplace = String(fd.get("marketplace") ?? "");
    const service = String(fd.get("service") ?? "");
    const budget = String(fd.get("budget") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject = `Project inquiry${name ? ` from ${name}` : ""}`;
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      business && `Business: ${business}`,
      marketplace && `Marketplace(s): ${marketplace}`,
      service && `Service: ${service}`,
      budget && `Budget: ${budget}`,
      message && "",
      message && message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    form.reset();
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
                Let's Work Together
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
                    <Icon name="mail2" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                    >
                      {contact.email}
                    </a>
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
                      {contact.availability}
                    </p>
                  </div>
                </div>
                {contact.github && (
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-300">
                      <Icon name="external" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-zinc-500">
                        GitHub
                      </p>
                      <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                      >
                        github.com/8002salman-ai
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-8 flex items-start gap-2.5 text-xs leading-relaxed text-zinc-500">
                <Icon
                  name="shield"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                />
                Your details stay private. I only use the information you share
                to respond to your inquiry — nothing is stored or shared.
              </p>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/[0.08] bg-ink-950/50 p-6 backdrop-blur sm:p-8">
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                      <Icon name="mail2" className="h-7 w-7" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-white">
                      Your email app should now be open
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
                      A message has been pre-filled for you — send it to{" "}
                      <span className="font-medium text-white">
                        {contact.email}
                      </span>{" "}
                      and I'll get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-sm font-medium text-brand-300 hover:text-brand-200"
                    >
                      Write another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@business.com"
                        required
                      />
                    </div>
                    <Field
                      label="Business"
                      name="business"
                      placeholder="Your business name"
                    />
                    <Field
                      label="Marketplace"
                      name="marketplace"
                      placeholder="e.g., eBay, Etsy, TikTok Shop"
                    />
                    {/* Honeypot — humans leave this empty */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company_website">Company website</label>
                      <input
                        id="company_website"
                        name="company_website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Select
                        label="Service"
                        name="service"
                        options={serviceOptions}
                        placeholder="Select a service"
                      />
                      <Select
                        label="Budget"
                        name="budget"
                        options={budgetOptions}
                        placeholder="Select a range"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-medium text-zinc-400"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Describe your business and what you'd like to improve..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                    >
                      Send Message
                      <Icon
                        name="send"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                    <p className="text-center text-[11px] leading-relaxed text-zinc-600">
                      Submitting opens your email app with a pre-filled message
                      to {contact.email}.
                    </p>
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
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-zinc-400"
      >
        {label}
        {required && (
          <span className="text-brand-300" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-zinc-400"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-white outline-none transition-colors focus:border-brand-500/50 focus:bg-white/[0.05]"
      >
        <option value="" disabled className="bg-ink-900 text-white">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} className="bg-ink-900 text-white">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
