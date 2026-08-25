# Salman OS Project Feed

The homepage GitHub strip reads the latest public repositories from Salman OS through the server-side Vercel function `GET /api/projects-feed`.

## Vercel variables

Set these in the Salman Bashir Vercel project. They must not use a `VITE_` prefix:

```text
SALMAN_OS_BASE_URL=https://<deployed-salman-os-domain>
PROJECTS_FEED_TOKEN=<same-secret-as-Salman-OS-PROJECTS_FEED_TOKEN>
```

Set the matching `PROJECTS_FEED_TOKEN` in the Salman OS deployment. The browser only calls the local `/api/projects-feed` function; the bearer token is added server-side and is never bundled into the client.

## Behavior

The proxy requests Salman OS's protected `/api/projects/feed` endpoint and caches the successful response for five minutes at the edge. The public site uses the feed when it returns projects and keeps the existing curated `githubRepos` list if the feed is unavailable or not configured.

The Salman OS feed returns public repository metadata only. Private repositories, filesystem paths, and credentials are not exposed.
