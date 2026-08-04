# OpenRouter Setup ("Ask Salman AI")

The floating "Ask Salman AI" chatbot answers questions about Salman's services, training, projects and how to contact him. It calls OpenRouter strictly from the `POST /api/chat` serverless function — the API key never leaves the server.

## 1. Get an OpenRouter API key

1. Go to https://openrouter.ai and create an account.
2. Open **Keys** and create an API key.
3. Add credit if needed (free models exist, but paid models are more reliable).

## 2. Environment variable (Vercel)

Set in **Vercel → Project → Settings → Environment Variables**:

- `OPENROUTER_API_KEY` — your OpenRouter key (server-only)

Without this key, `/api/chat` returns a 503 and the chatbot shows a friendly "unavailable" error instead of a fake answer.

## 3. Behavior and safety

- Requests go to `https://openrouter.ai/api/v1/chat/completions` with your key in the `Authorization` header. The key is never logged.
- A constrained system prompt describes Salman as an e-commerce operations and automation consultant and instructs the model to decline anything unrelated to the site, including anything personal, private, financial, or credential-related.
- Chatbot settings are stored in the `chatbot_settings` table:
  - `enabled` — master on/off for the chat endpoint (default true)
  - `model` — OpenRouter model id (default `openrouter/auto`)
  - `system_prompt` — overrides the default prompt if set
  - `rate_limit_per_minute` — per-IP limit (default 10)
- Every question is stored in `chatbot_logs` (question, answer, model, hashed IP) for abuse review.
- The floating widget has a welcome message, suggested questions, loading state, honest error handling, a reset/new chat behaviour and mobile-friendly sizing.

## 4. Testing

1. Deploy with `OPENROUTER_API_KEY` set.
2. Open any page and tap the chat bubble.
3. Ask "What does Salman do?" — you should get a coherent answer.
4. Ask something off-topic or private — the model should decline.
5. Remove the key in Vercel and redeploy to verify the error path shows a friendly message, not a crash.
