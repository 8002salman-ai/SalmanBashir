import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  adminGetSession,
  adminGetProfile,
  adminSignOut,
} from "@/lib/admin";

/* Protects /admin/dashboard. Redirects to /admin when unauthenticated or
   when the authenticated user is not an admin. */
export function AdminGuard({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [state, setState] = useState<"loading" | "ok" | "denied">("loading");

  useEffect(() => {
    let active = true;
    (async () => {
      const session = await adminGetSession();
      if (!session) {
        if (active) {
          navigate("/admin", { replace: true });
        }
        return;
      }
      const profile = await adminGetProfile(session.user.id);
      if (profile?.role === "admin") {
        if (active) setState("ok");
      } else {
        await adminSignOut();
        if (active) {
          navigate("/admin", { replace: true });
        }
      }
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  if (state === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-3">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-cyan-500" />
          <p className="text-sm text-zinc-500">Checking access…</p>
        </div>
      </main>
    );
  }

  if (state === "denied") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950">
        <p className="text-sm text-zinc-500">Access denied.</p>
      </main>
    );
  }

  return <>{children}</>;
}
