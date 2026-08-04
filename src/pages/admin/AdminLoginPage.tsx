import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Seo } from "@/components/Seo";
import {
  adminSignIn,
  adminResetPassword,
  adminGetSession,
  adminGetProfile,
} from "@/lib/admin";
import { supabaseConfigured } from "@/lib/supabase";
import { LogoMark } from "@/components/Logo";
import { Icon } from "@/components/ui";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "reset">("signin");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    (async () => {
      const session = await adminGetSession();
      if (!active || !session) return;
      const profile = await adminGetProfile(session.user.id);
      if (profile?.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      }
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (mode === "reset") {
      setLoading(true);
      const result = await adminResetPassword(email);
      setLoading(false);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("If that email is registered, a reset link has been sent. Check your inbox.");
      }
      return;
    }

    setLoading(true);
    const result = await adminSignIn(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    const session = await adminGetSession();
    if (session) {
      const profile = await adminGetProfile(session.user.id);
      if (profile?.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("This account does not have admin access.");
      }
    }
  }

  return (
    <>
      <Seo
        title="Admin | Salman Bashir"
        description="Admin sign in."
        path="/admin" noindex
      />
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 py-12">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-20%] h-96 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>
        <div className="relative w-full max-w-sm">
          <div className="mb-6 flex flex-col items-center gap-3 text-center">
            <span className="h-14 w-14 overflow-hidden rounded-2xl border border-zinc-800">
              <LogoMark className="block h-full w-full" />
            </span>
            <div>
              <h1 className="font-display text-xl font-semibold text-zinc-100">
                Admin Panel
              </h1>
              <p className="mt-1 text-xs text-zinc-500">
                Sign in to manage salmanbashir.vercel.app
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            {!supabaseConfigured && (
              <div
                role="alert"
                className="rounded-lg border border-amber-800 bg-amber-950/40 px-3 py-2 text-xs text-amber-300"
              >
                Supabase isn't configured yet. Add VITE_SUPABASE_URL and
                VITE_SUPABASE_ANON_KEY to .env before signing in.
              </div>
            )}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-800 bg-red-950/40 px-3 py-2 text-sm text-red-300"
              >
                {error}
              </div>
            )}
            {message && (
              <div
                role="status"
                className="rounded-lg border border-emerald-800 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-300"
              >
                {message}
              </div>
            )}

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-zinc-300">
                Admin email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-cyan-500/60"
              />
            </label>

            {mode === "signin" ? (
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-zinc-300">
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-cyan-500/60"
                />
              </label>
            ) : (
              <p className="text-xs leading-relaxed text-zinc-400">
                Enter the admin email above and I'll send a password reset
                link. You'll then be able to set a new password and sign in.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading && <Icon name="clock" className="h-4 w-4 animate-spin" />}
              {mode === "signin"
                ? loading
                  ? "Signing in…"
                  : "Sign In"
                : loading
                  ? "Sending…"
                  : "Send Reset Link"}
            </button>

            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "reset" : "signin");
                setError("");
                setMessage("");
              }}
              className="w-full text-center text-xs text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {mode === "signin"
                ? "Forgot password?"
                : "Back to sign in"}
            </button>
          </form>

          <p className="mt-4 text-center text-[11px] text-zinc-600">
            Authorized admin access only. All access is logged.
          </p>
        </div>
      </main>
    </>
  );
}
