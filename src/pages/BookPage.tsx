import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo } from "@/components/Seo";
import { book, contact } from "@/data/content";
import { Reveal, Icon } from "@/components/ui";

export function BookPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const honeypot = fd.get("company_website");
    if (honeypot) return;

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const type = String(fd.get("type") ?? "");
    const business = String(fd.get("business") ?? "");
    const message = String(fd.get("message") ?? "");

    const subject = `Booking request${name ? ` from ${name}` : ""}`;
    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      type && `I'm interested in: ${type}`,
      business && `Business: ${business}`,
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
    <>
      <Seo
        title="Book a Consultation | Salman Bashir — E-commerce Operations & Automation"
        description="Book a consultation call, scoped project work or online training. Tell me where your operations are today and what you want to change."
        path="/book"
      />
      <PageHero
        eyebrow="Book"
        title={
          <>
            Let's talk about{" "}
            <span className="text-gradient-brand">your business</span>
          </>
        }
        description={book.intro}
      />

      {/* Options */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {book.options.map((o, i) => (
              <Reveal key={o.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-panel-strong">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                    <Icon name={o.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold text-strong">
                    {o.title}
                  </h2>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                    {o.length}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {o.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Process */}
          <Reveal className="mt-8">
            <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-strong">
                What happens next
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {book.process.map((p) => (
                  <div key={p.step}>
                    <span className="font-display text-sm font-bold text-accent-strong">
                      {p.step}
                    </span>
                    <h3 className="mt-1.5 font-display text-base font-semibold text-strong">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                    Start with a short message
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    Sharing a few lines now means we can use the first call for
                    real discussion instead of introductions.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {book.whatToExpect.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-soft"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          strokeWidth={2.2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted">
                    Prefer email?{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-semibold text-accent-strong hover:text-accent"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Questions about how I work?{" "}
                    <Link
                      to="/services"
                      className="font-semibold text-accent-strong hover:text-accent"
                    >
                      See services →
                    </Link>
                  </p>
                </div>

                <div className="rounded-2xl border border-edge bg-bg/50 p-5 backdrop-blur sm:p-6">
                  {sent ? (
                    <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-accent-strong">
                        <Icon name="calendar" className="h-7 w-7" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold text-strong">
                        Your email app should now be open
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                        A booking request has been pre-filled for you. Send it
                        and I'll come back with next steps.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-6 text-sm font-medium text-accent-strong hover:text-accent"
                      >
                        Write another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <BookField
                          label="Name"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                        <BookField
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="you@business.com"
                          required
                        />
                      </div>
                      <BookSelect
                        label="I'm interested in"
                        name="type"
                        options={[
                          "Consultation call",
                          "Project work",
                          "Online training",
                          "Not sure yet",
                        ]}
                        placeholder="Select an option"
                      />
                      <BookField
                        label="Business"
                        name="business"
                        placeholder="Your business name (optional)"
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
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-xs font-medium text-muted"
                        >
                          What would you like to work on?
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Tell me a little about your business and your goals..."
                          className="w-full resize-none rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30"
                      >
                        Send Booking Request
                        <Icon
                          name="send"
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </button>
                      <p className="text-center text-[11px] leading-relaxed text-faint">
                        Submitting opens your email app with a pre-filled
                        message to {contact.email}.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function BookField({
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
        className="mb-1.5 block text-xs font-medium text-muted"
      >
        {label}
        {required && (
          <span className="text-accent-strong" aria-hidden="true">
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
        className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
      />
    </div>
  );
}

function BookSelect({
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
        className="mb-1.5 block text-xs font-medium text-muted"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
      >
        <option value="" disabled className="bg-bg-soft text-strong">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} className="bg-bg-soft text-strong">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
