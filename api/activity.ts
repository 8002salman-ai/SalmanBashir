import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  BAD,
  OK,
  clientIp,
  hashIp,
  parseBody,
  sanitizeField,
  serviceSupabase,
} from "./_shared";

/* Authenticated admin activity logging. Verifies the JWT and admin role
   server-side, then inserts via the service role. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return BAD(res, "Method not allowed", 405);

  const ip = clientIp(req);
  const auth = req.headers.authorization ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  const sb = serviceSupabase();
  if (!sb) return BAD(res, "Supabase is not configured on the server.", 503);

  let user;
  try {
    const { data, error } = await sb.auth.getUser(token);
    if (error || !data.user) return BAD(res, "Unauthorized.", 401);
    user = data.user;
  } catch {
    return BAD(res, "Unauthorized.", 401);
  }

  const { data: profile } = await sb
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  if (!profile || profile.role !== "admin") {
    return BAD(res, "Forbidden.", 403);
  }

  const body = parseBody(req.body);
  const action = sanitizeField(body.action, 200);
  if (!action) return BAD(res, "Missing action.");

  const details = body.details && typeof body.details === "object" ? body.details : {};

  await sb.from("activity_logs").insert({
    user_id: user.id,
    email: user.email ?? null,
    action,
    details,
    ip_hash: hashIp(ip),
  });

  return OK(res, "logged");
}
