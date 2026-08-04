import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { Seo, BreadcrumbJsonLd } from "@/components/Seo";
import { book, contact } from "@/data/content";
import { submitBooking } from "@/lib/api";
import { Reveal, Icon } from "@/components/ui";

export function BookPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const honeypot = fd.get("company_website");
    if (honeypot) return;

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const country = String(fd.get("country") ?? "");
    const business = String(fd.get("business") ?? "");
    const service = String(fd.get("service") ?? "");
    const date = String(fd.get("date") ?? "");
    const time = String(fd.get("time") ?? "");
    const timezone = String(fd.get("timezone") ?? "");
    const duration = String(fd.get("duration") ?? "");
    const method = String(fd.get("method") ?? "");
    const notes = String(fd.get("notes") ?? "");

    setSubmitting(true);
    setSubmitError("");
    const result = await submitBooking({
      name,
      email,
      country,
      business,
      service,
      preferredDate: date,
      preferredTime: time,
      timezone,
      duration,
      meetingMethod: method,
      notes,
    });
    setSubmitting(false);

    if (result.ok) {
      form.reset();
      setSent(true);
    } else {
      setSubmitError(result.message);
    }
  };

  return (
    <>
      <Seo
        title="Book a Consultation | Salman Bashir — E-commerce Operations & Automation"
        description="Book a consultation call, project work or online training. Choose a session, share your details and send the request — approved bookings get meeting details after review."
        path="/book"
      />
    <BreadcrumbJsonLd items={[{ name: "Book a consultation", path: "/book" }]} />
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

      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Status banner — no booking is confirmed before approval */}
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-gold-accent/25 bg-gold-accent/[0.08] p-4 text-sm text-soft">
              <Icon
                name="shield"
                className="mt-0.5 h-5 w-5 shrink-0 text-gold-accent"
              />
              <p>{book.statusNote}</p>
            </div>
          </Reveal>

          {/* Consultation types */}
          <Reveal className="mt-8">
            <h2 className="font-display text-xl font-semibold text-strong">
              Choose your session
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {book.consultations.map((c, i) => (
                <Reveal key={c.title} delay={(i % 4) * 60}>
                  <div className="flex h-full flex-col rounded-2xl border border-edge bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-panel-strong">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/20 bg-gradient-to-br from-brand-500/15 to-brand-500/5 text-accent-strong">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold leading-snug text-strong">
                      {c.title}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                      <Icon name="clock" className="h-3.5 w-3.5" />
                      {c.length}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Process */}
          <Reveal className="mt-10">
            <div className="rounded-3xl border border-edge bg-panel p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-strong">
                How booking works
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
              <ul className="mt-6 grid gap-2 border-t border-edge pt-5 sm:grid-cols-2">
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
            </div>
          </Reveal>

          {/* Booking form */}
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-strong sm:text-3xl">
                    Send your booking request
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    Fill in the details below. Your request goes to my public
                    inbox, I review it personally, and approved sessions get a
                    meeting link — Zoom, Google Meet or a custom method — after
                    approval. No booking is confirmed before that.
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
                        <Icon name="check" className="h-7 w-7" strokeWidth={2} />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold text-strong">
                        Request received
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                        Your booking request has been sent and is{" "}
                        <span className="font-medium text-strong">
                          pending review
                        </span>
                        . I'll reply to confirm availability and share meeting
                        details once approved.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-6 text-sm font-medium text-accent-strong hover:text-accent"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <BookField
                          label="Client name"
                          name="name"
                          placeholder="Your full name"
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
                      <div className="grid gap-3 sm:grid-cols-2">
                        <BookField
                          label="Country"
                          name="country"
                          placeholder="e.g., United States"
                        />
                        <BookField
                          label="Business"
                          name="business"
                          placeholder="Business name (optional)"
                        />
                      </div>
                      <BookSelect
                        label="Service"
                        name="service"
                        options={book.consultations.map((c) => c.title)}
                        placeholder="Select a session"
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="date"
                            className="mb-1.5 block text-xs font-medium text-muted"
                          >
                            Preferred date
                          </label>
                          <input
                            id="date"
                            name="date"
                            type="date"
                            className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong [color-scheme:dark]"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="time"
                            className="mb-1.5 block text-xs font-medium text-muted"
                          >
                            Preferred time
                          </label>
                          <input
                            id="time"
                            name="time"
                            type="time"
                            className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong [color-scheme:dark]"
                          />
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <BookField
                          label="Time zone"
                          name="timezone"
                          placeholder="e.g., EST, GMT+5"
                        />
                        <BookSelect
                          label="Session duration"
                          name="duration"
                          options={book.durations}
                          placeholder="Select duration"
                        />
                      </div>
                      <BookSelect
                        label="Meeting method"
                        name="method"
                        options={book.meetingMethods}
                        placeholder="Zoom, Google Meet or custom"
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
                          htmlFor="notes"
                          className="mb-1.5 block text-xs font-medium text-muted"
                        >
                          Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          placeholder="Anything you'd like me to know before the session..."
                          className="w-full resize-none rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
                        />
                      </div>
                      {submitError && (
                        <p
                          role="alert"
                          className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-xs text-red-300"
                        >
                          {submitError} Please try again or email {contact.email} directly.
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3.5 text-sm font-semibold text-on-accent transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : "Send Booking Request"}
                        {!submitting && (
                          <Icon
                            name="send"
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </button>
                      <p className="text-center text-[11px] leading-relaxed text-faint">
                        Your request goes to {contact.email} and stays{" "}
                        <span className="text-strong">pending review</span> until I
                        confirm it with meeting details.
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
