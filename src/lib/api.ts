import { supabase } from "@/lib/supabase";

export type ContactPayload = {
  name: string;
  email: string;
  business?: string;
  country?: string;
  marketplace?: string;
  service?: string;
  budget?: string;
  quantity?: string;
  destination?: string;
  meetingMethod?: string;
  message?: string;
  [key: string]: unknown;
};

export type BookingPayload = {
  name: string;
  email: string;
  country?: string;
  business?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  duration?: string;
  meetingMethod?: string;
  notes?: string;
  [key: string]: unknown;
};

export type ApiResult = { ok: boolean; message: string; error?: string } & Record<string, unknown>;

async function postJson(path: string, body: unknown): Promise<ApiResult> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return toApiResult(res);
}

async function postJsonWithAuth(
  path: string,
  body: unknown,
  token: string,
): Promise<ApiResult> {
  const res = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return toApiResult(res);
}

async function toApiResult(res: Response): Promise<ApiResult> {
  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    /* non-JSON response */
  }
  const message =
    typeof data.message === "string" ? data.message : res.ok ? "Submitted." : "Something went wrong. Please try again.";
  if (!res.ok) {
    return { ok: false, message, error: message, ...data };
  }
  return { ok: true, message, ...data };
}

/* Server-side fallback: store the submission in Supabase when configured.
   Called by the API handlers when the browser client can't be used. */
export async function storeContactSubmission(payload: ContactPayload) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: payload.name,
        email: payload.email,
        business: payload.business ?? null,
        country: payload.country ?? null,
        marketplace: payload.marketplace ?? null,
        service: payload.service ?? null,
        budget: payload.budget ?? null,
        meeting_method: payload.meetingMethod ?? null,
        message: payload.message ?? null,
      })
      .select("id")
      .single();
    if (error) return null;
    return data;
  } catch {
    return null;
  }
}

export async function storeConsultationBooking(payload: BookingPayload) {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from("consultation_bookings")
      .insert({
        name: payload.name,
        email: payload.email,
        country: payload.country ?? null,
        business: payload.business ?? null,
        service: payload.service,
        preferred_date: payload.preferredDate ?? null,
        preferred_time: payload.preferredTime ?? null,
        timezone: payload.timezone ?? null,
        duration: payload.duration ?? null,
        meeting_method: payload.meetingMethod ?? null,
        notes: payload.notes ?? null,
        status: "pending",
      })
      .select("id")
      .single();
    if (error) return null;
    return data;
  } catch {
    return null;
  }
}

export function submitContact(payload: ContactPayload): Promise<ApiResult> {
  return postJson("/api/contact", payload);
}

export function submitBooking(payload: BookingPayload): Promise<ApiResult> {
  return postJson("/api/booking", payload);
}

export type PrivateProfileRequestPayload = {
  name: string;
  email: string;
  company?: string;
  reason?: string;
  message: string;
  [key: string]: unknown;
};

export function submitPrivateProfileRequest(
  payload: PrivateProfileRequestPayload,
  accessToken: string,
): Promise<ApiResult> {
  return postJsonWithAuth("/api/private-profile-request", payload, accessToken);
}

export function askChatbot(question: string): Promise<ApiResult & { answer?: string }> {
  return postJson("/api/chat", { question }) as Promise<
    ApiResult & { answer?: string }
  >;
}
