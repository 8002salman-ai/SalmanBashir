import { supabase } from "@/lib/supabase";

/* Admin authentication helpers. Everything flows through Supabase Auth
   (email + password, plus reset-password email). No password is ever
   stored in code, env, local storage or content tables. */

export async function adminSignIn(email: string, password: string) {
  if (!supabase) {
    return {
      error: "Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.",
    };
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) return { error: safeAuthMessage(error.message) };
  return { data };
}

export async function adminSignOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function adminResetPassword(email: string) {
  if (!supabase) {
    return { error: "Supabase is not configured." };
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/admin`,
  });
  if (error) return { error: safeAuthMessage(error.message) };
  return { ok: true };
}

export async function adminGetSession() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function adminGetUser() {
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export type AdminProfile = {
  id: string;
  email: string | null;
  full_name: string | null;
  role: string;
};

export async function adminGetProfile(userId: string): Promise<AdminProfile | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, full_name, role")
    .eq("id", userId)
    .single();
  if (error || !data) return null;
  return data as AdminProfile;
}

export async function adminIsAdmin(): Promise<boolean> {
  const user = await adminGetUser();
  if (!user) return false;
  const profile = await adminGetProfile(user.id);
  return profile?.role === "admin";
}

/* Log an admin action. Route through the serverless endpoint so the
   service role (not the browser) performs the insert. */
export async function logAdminActivity(action: string, details: Record<string, unknown> = {}) {
  const session = await adminGetSession();
  if (!session) return;
  try {
    await fetch("/api/activity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({ action, details }),
    });
  } catch {
    /* logging is best-effort; never block admin work on it */
  }
}

export function safeAuthMessage(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("invalid login credentials") || lower.includes("invalid_credentials")) {
    return "Invalid email or password.";
  }
  if (lower.includes("rate limit") || lower.includes("too many requests")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (lower.includes("email not confirmed")) {
    return "Please confirm your email address before signing in.";
  }
  return "Unable to sign in. Please try again.";
}

export function onAdminAuth(callback: (session: unknown) => void) {
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });
  return () => data.subscription.unsubscribe();
}
