# Project Media — Screenshots and Evidence

This folder holds project screenshots and media for the case studies on
`/projects/:slug`.

## Folders

- `embani-erp/` — Embani ERP screenshots
- `spotaware/` — SpotAware screenshots
- `himalayan-koh/` — Himalayan Koh catalogue and product media
- `marketplace-operations/` — sanitized marketplace operation examples
- `sheets-workspace/` — Google Sheets Sales Workspace examples

## Recommended file naming

Use a short, descriptive, lowercase slug per image:

```
embani-erp/
  profit-dashboard.png
  sales-import-workflow.png

spotaware/
  operations-board.png

himalayan-koh/
  catalogue-cover.png

marketplace-operations/
  payout-reconciliation.png

sheets-workspace/
  monthly-tabs.png
```

## Recommended dimensions

- Screenshots: 1600x1000px (16:10) or 1280x800px, rendered responsively with
  explicit `width`/`height` attributes and `loading="lazy"`.
- Catalogues: 1200x900px (4:3).
- Keep the largest asset under ~400 KB.

## Compression

- Use PNG for UI screenshots, or WebP/AVIF with a PNG fallback where the
  build supports it.
- Aim for < 400 KB per file; compress before adding to the repo.

## Privacy rules — before adding any image

Never include visible or recoverable copies of:

- customer names, addresses, phone numbers or emails
- order IDs, payment details, tokens, API keys or login screens
- private dashboard data for clients that is not sanitized
- confidential business data without permission

Every screenshot must be **sanitized** first: blank out or blur names, emails,
order IDs, amounts, account identifiers and any private details. When an image
contains a lot of private data, crop to the relevant workflow only.

## Evidence status

Media is only rendered on the site when it is safe to show. Until then,
the components render a clean placeholder:

> Project media will be added after final verification.

## Where future screenshots should be placed

1. Save the sanitized image into the matching project folder above.
2. Reference it in `src/data/projects.ts` under that case study's `media`
   array as `src: "/images/projects/<folder>/<file>"` with a descriptive
   `alt` text and short `caption`.
3. Keep `status: "Available"` only when the file is committed; otherwise
   leave the `src` unset and keep the placeholder.
