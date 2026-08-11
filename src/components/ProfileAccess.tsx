import { useEffect, useState } from "react";
import { profileAccess, contact } from "@/data/content";
import { supabase } from "@/lib/supabase";
import { submitPrivateProfileRequest } from "@/lib/api";
import { Reveal, SectionHeading, Icon } from "@/components/ui";

type Status = "checking" | "signedOut" | "signedIn";
type Mode = "signin" | "signup";

export function ProfileAccess() {
  const [status, setStatus] = useState<Status>("checking");
  const [mode, setMode] = useState<Mode>("signin");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authBusy, setAuthBusy] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authNotice, setAuthNotice] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [signedInEmail, setSignedInEmail] = useState("");

  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!supabase) {
      setStatus("signedOut");
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setStatus("signedIn");
        setAccessToken(data.session.access_token);
        setSignedInEmail(data.session.user.email ?? "");
      } else {
        setStatus("signedOut");
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setStatus("signedIn");
        setAccessToken(session.access_token);
        setSignedInEmail(session.user.email ?? "");
      } else {
        setStatus("signedOut");
        setAccessToken("");
        setSignedInEmail("");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase) return;
    setAuthBusy(true);
    setAuthError("");
    setAuthNotice("");
    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email: authEmail,
        password: authPassword,
      });
      if (error) {
        setAuthError(error.message);
      } else if (data.session) {
        setStatus("signedIn");
        setAccessToken(data.session.access_token);
        setSignedInEmail(data.session.user.email ?? "");
      } else {
        setAuthNotice(
          "Account created. Check your email to confirm it, then sign in.",
        );
        setMode("signin");
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: authEmail,
        password: authPassword,
      });
      if (error) {
        setAuthError(error.message);
      } else if (data.session) {
        setStatus("signedIn");
        setAccessToken(data.session.access_token);
        setSignedInEmail(data.session.user.email ?? "");
      }
    }
    setAuthBusy(false);
  };

  const handleSignOut = async () => {
    await supabase?.auth.signOut();
    setStatus("signedOut");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const honeypot = fd.get("company_website");
    if (honeypot) return;

    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const company = String(fd.get("company") ?? "");
    const reason = String(fd.get("reason") ?? "");
    const message = String(fd.get("message") ?? "");

    setSubmitting(true);
    setSubmitError("");
    const result = await submitPrivateProfileRequest(
      { name, email, company, reason, message },
      accessToken,
    );
    setSubmitting(false);

    if (result.ok) {
      form.reset();
      setSent(true);
    } else {
      setSubmitError(result.message);
    }
  };

  return (
    <section id="private-profile" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={profileAccess.eyebrow}
              title={profileAccess.title}
              description={profileAccess.intro}
            />
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-500/20 bg-brand-500/[0.06] p-4 text-sm text-soft">
              <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>{profileAccess.privacyNote}</p>
            </div>
            <div className="mt-7 space-y-5">
              {profileAccess.steps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="font-display text-sm font-bold text-accent-strong">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-strong">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-edge-strong bg-gradient-to-br from-panel to-transparent p-6 sm:p-8">
              {status === "checking" && (
                <p className="py-10 text-center text-sm text-faint">
                  Checking your session…
                </p>
              )}

              {status === "signedIn" && (
                <div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-brand-500/25 bg-brand-500/10 px-4 py-3">
                    <p className="text-sm text-soft">
                      Signed in as{" "}
                      <span className="font-medium text-strong">
                        {signedInEmail}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="shrink-0 text-xs font-medium text-accent-strong hover:text-accent"
                    >
                      Sign out
                    </button>
                  </div>

                  {sent ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-accent-strong">
                        <Icon name="check" className="h-7 w-7" strokeWidth={2} />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold text-strong">
                        {profileAccess.successTitle}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                        {profileAccess.successBody}
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
                      <RequestField
                        label={profileAccess.form.nameLabel}
                        name="name"
                        placeholder={profileAccess.form.namePlaceholder}
                        required
                      />
                      <RequestField
                        label={profileAccess.form.emailLabel}
                        name="email"
                        type="email"
                        placeholder={profileAccess.form.emailPlaceholder}
                        required
                      />
                      <RequestField
                        label={profileAccess.form.companyLabel}
                        name="company"
                        placeholder={profileAccess.form.companyPlaceholder}
                      />
                      <RequestField
                        label={profileAccess.form.reasonLabel}
                        name="reason"
                        placeholder={profileAccess.form.reasonPlaceholder}
                      />
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-xs font-medium text-muted"
                        >
                          {profileAccess.form.messageLabel}
                          <span className="text-accent-strong" aria-hidden="true">
                            {" "}
                            *
                          </span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder={profileAccess.form.messagePlaceholder}
                          className="w-full resize-none rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
                        />
                      </div>
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
                      {submitError && (
                        <p
                          role="alert"
                          className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-xs text-red-300"
                        >
                          {submitError} Please try again or email{" "}
                          {contact.email} directly.
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn btn-primary btn-block group justify-center disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : profileAccess.form.submit}
                        {!submitting && (
                          <Icon
                            name="send"
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        )}
                      </button>
                      <p className="text-center text-[11px] leading-relaxed text-faint">
                        Requests are reviewed manually. Nothing is approved
                        automatically.
                      </p>
                    </form>
                  )}
                </div>
              )}

              {status === "signedOut" && (
                <div>
                  {supabase ? (
                    <>
                      <h3 className="font-display text-lg font-semibold text-strong">
                        {mode === "signin"
                          ? profileAccess.signInTitle
                          : profileAccess.signUpTitle}
                      </h3>
                      <form onSubmit={handleAuth} className="mt-4 space-y-3">
                        <RequestField
                          label="Email"
                          name="auth_email"
                          type="email"
                          placeholder="you@business.com"
                          value={authEmail}
                          onChange={setAuthEmail}
                          required
                        />
                        <div>
                          <label
                            htmlFor="auth_password"
                            className="mb-1.5 block text-xs font-medium text-muted"
                          >
                            Password
                            <span className="text-accent-strong" aria-hidden="true">
                              {" "}
                              *
                            </span>
                          </label>
                          <input
                            id="auth_password"
                            name="auth_password"
                            type="password"
                            minLength={6}
                            required
                            value={authPassword}
                            onChange={(e) => setAuthPassword(e.target.value)}
                            className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
                          />
                        </div>
                        {authError && (
                          <p
                            role="alert"
                            className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-xs text-red-300"
                          >
                            {authError}
                          </p>
                        )}
                        {authNotice && (
                          <p className="rounded-lg border border-brand-500/25 bg-brand-500/10 px-3 py-2 text-xs text-accent-strong">
                            {authNotice}
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={authBusy}
                          className="btn btn-primary btn-block justify-center disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {authBusy
                            ? "Please wait…"
                            : mode === "signin"
                              ? "Sign in"
                              : "Create account"}
                        </button>
                      </form>
                      <button
                        type="button"
                        onClick={() => {
                          setMode(mode === "signin" ? "signup" : "signin");
                          setAuthError("");
                          setAuthNotice("");
                        }}
                        className="mt-4 text-sm font-medium text-accent-strong hover:text-accent"
                      >
                        {mode === "signin"
                          ? "New here? Create an account"
                          : "Already have an account? Sign in"}
                      </button>
                    </>
                  ) : (
                    <div>
                      <h3 className="font-display text-lg font-semibold text-strong">
                        {profileAccess.signInTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        Secure sign-in isn't available in this preview. Your
                        request below is still submitted for manual review.
                      </p>
                      <div className="mt-5">
                        <ProfileRequestForm
                          onSubmit={handleSubmit}
                          submitting={submitting}
                          submitError={submitError}
                          sent={sent}
                          setSent={setSent}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProfileRequestForm({
  onSubmit,
  submitting,
  submitError,
  sent,
  setSent,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
  submitError: string;
  sent: boolean;
  setSent: (v: boolean) => void;
}) {
  if (sent) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-accent-strong">
          <Icon name="check" className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-strong">
          {profileAccess.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          {profileAccess.successBody}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-accent-strong hover:text-accent"
        >
          Send another request
        </button>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <RequestField
        label={profileAccess.form.nameLabel}
        name="name"
        placeholder={profileAccess.form.namePlaceholder}
        required
      />
      <RequestField
        label={profileAccess.form.emailLabel}
        name="email"
        type="email"
        placeholder={profileAccess.form.emailPlaceholder}
        required
      />
      <RequestField
        label={profileAccess.form.companyLabel}
        name="company"
        placeholder={profileAccess.form.companyPlaceholder}
      />
      <RequestField
        label={profileAccess.form.reasonLabel}
        name="reason"
        placeholder={profileAccess.form.reasonPlaceholder}
      />
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-muted"
        >
          {profileAccess.form.messageLabel}
          <span className="text-accent-strong" aria-hidden="true">
            {" "}
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder={profileAccess.form.messagePlaceholder}
          className="w-full resize-none rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
        />
      </div>
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
        className="btn btn-primary btn-block group justify-center disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : profileAccess.form.submit}
        {!submitting && (
          <Icon
            name="send"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </button>
      <p className="text-center text-[11px] leading-relaxed text-faint">
        Requests are reviewed manually. Nothing is approved automatically.
      </p>
    </form>
  );
}

function RequestField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (v: string) => void;
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
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full rounded-xl border border-edge bg-panel px-3.5 py-3 text-sm text-strong placeholder:text-faint outline-none transition-colors focus:border-brand-500/50 focus:bg-panel-strong"
      />
    </div>
  );
}
