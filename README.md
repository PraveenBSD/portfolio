# praveenbsd — portfolio & writing

Personal site and blog. Static [Astro](https://astro.build) build, MDX content collection, deployed on Cloudflare Pages.

## Before you deploy

Set your real domain in **one** place — [`src/consts.ts`](src/consts.ts):

```ts
export const SITE = {
  url: 'https://your-domain.com',   // ← no trailing slash
  ...
}
```

`astro.config.mjs` reads it from there, so canonical URLs, the sitemap, RSS links, and OG tags all follow. Also update the `Sitemap:` line in [`public/robots.txt`](public/robots.txt).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321 — drafts visible
npm run build      # static output to dist/ — drafts excluded
npm run preview    # serve the built site locally
npm run check      # type-check .astro / .ts
```

## Writing a post

Add an `.mdx` file to [`src/content/posts/`](src/content/posts/). The filename becomes the URL: `cloud-bill-leaks.mdx` → `/writing/cloud-bill-leaks/`.

```mdx
---
title: 'Where your cloud bill actually leaks'
description: 'One or two sentences — used on the index rows, RSS, and social previews.'
pubDate: 2026-08-10
tag: finops              # single tag; creates /tags/finops/
hash: 7b02e14            # exactly 7 lowercase hex chars, shown in the changelog row
readingTime: 5 min read  # optional
draft: true              # optional — hides it from the production build
---

Body in Markdown or MDX.
```

Frontmatter is schema-validated in [`src/content.config.ts`](src/content.config.ts), so a typo fails the build rather than shipping quietly. Tag pages, the archive, RSS, and the sitemap all update themselves — no index to maintain by hand.

**Five posts are currently `draft: true`** — they were titles and summaries in the original prototype with no body written. Write the body, drop the `draft` line, done.

## Editing the home page

Everything that is content rather than layout lives in [`src/data/profile.ts`](src/data/profile.ts) — hero copy, the stat tiles, work cards, experience, about, facts. Site title, nav, and social links are in [`src/consts.ts`](src/consts.ts).

## Deploying to Cloudflare Pages

Connect the repo in the Cloudflare dashboard (**Workers & Pages → Create → Pages → Connect to Git**) with:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (env var `NODE_VERSION=22`) |

Then **Custom domains → Set up a domain** and point it at your Cloudflare-managed zone. Every push to `main` redeploys; pull requests get preview URLs.

## Layout

```
src/
  consts.ts              site metadata, nav, social links
  data/profile.ts        home page content as data
  content.config.ts      post frontmatter schema
  content/posts/*.mdx    the posts
  lib/posts.ts           sorting, draft filtering, tag counts
  components/            BaseHead, Nav, Footer, PostRow
  layouts/               BaseLayout, PostLayout
  pages/
    index.astro          home
    writing/index.astro  archive
    writing/[...slug]    post pages
    tags/[tag].astro     tag pages
    rss.xml.js           feed
    404.astro
  styles/global.css      all styling
```

## Design

Light green gradient ground, neon green accents, card-based layout. Every colour is a custom property in the `:root` block at the top of [`src/styles/global.css`](src/styles/global.css).

Green is much lighter than violet at the same saturation, so the palette is split by **what a colour is allowed to touch**. This is the one rule to keep if you retune it:

| Token | | Contrast on white | May be used for |
| --- | --- | --- | --- |
| `--neon` | `#22C55E` | 2.28 | large fills only, with `--neon-ink` on top |
| `--lime` | `#A3E635` | 1.79 | gradient partner to `--neon`, same rule |
| `--neon-ink` | `#052E16` | — | text on `--neon` (6.5:1) / `--lime` (9.9:1) |
| `--accent` | `#16A34A` | 3.30 | graphical marks — meters, dots, rules |
| `--accent-ink` | `#15803D` | 5.02 | anything that is text |
| `--text` / `--text-2` / `--text-3` | | 17.2 / 8.1 / 5.1 | body, secondary, metadata |

**Never put white text on `--neon` or `--lime`** — it lands at 2.3:1. The primary button and active filter pill carry `--neon-ink` for exactly this reason. The headline gradient likewise steps `--accent-ink → --accent → --teal`, all of which clear 3:1 as large text; the earlier violet build could use its brightest hue there, and green cannot.

`--text-3` is darker than it looks like it needs to be — at 11–12px it is normal-size text, so it needs 4.5:1, not 3:1.

Type is two faces with a strict division of labour: **Inter** for anything you read, **JetBrains Mono** for anything you scan — dates, tags, labels, stack lists, code.

## Charts

Two visualisations, both built from data already in [`src/data/profile.ts`](src/data/profile.ts) — no invented numbers.

**Stat tiles** ([`StatTile.astro`](src/components/StatTile.astro)) — a KPI row, not a bar chart, because each value is a single headline number. The meter fill and track are steps of the same violet ramp. The tiles mix polarity (availability is "of 100%", the rest are reductions), so every tile carries a `basis` label saying what its bar measures.

**Career timeline** ([`CareerTimeline.astro`](src/components/CareerTimeline.astro)) — one duration bar per role on a shared year axis, in HTML rather than SVG so labels reflow and stay at real font sizes. Bar geometry and axis ticks are both computed from `start`/`end` in the data, so they cannot drift apart. Durations never round a partial year up (`1y 7m`, not `2y`).

### Chart colours are validated — do not change them blind

`--series-1/2/3` are a **fixed order, never cycled**, and were checked with the data-viz validator rather than by eye:

```
green #166534 · cyan #0891B2 · pink #DB2777
all-pairs, white surface — worst CVD ΔE 10.3 · normal-vision ΔE 20.5 · all ≥3:1
```

Slot 1 is a deeper green than `--accent`. That is deliberate: lighter greens sit too close to cyan and pink under deuteranopia — `#16A34A` with the same partners drops to ΔE 6.1, a WARN. Green is a genuinely harder hue to build a categorical set around than violet was.

If you add a fourth role or change a hue, re-run the validator and only ship a passing set. Colour follows the entity, never its rank — the swatch beside each company name is what ties bar to label, so identity is never carried by colour alone.

### Keeping the timeline current

`TIMELINE_END` in [`src/data/profile.ts`](src/data/profile.ts) is the "present" marker (currently `2026.6`). Bump it as time passes, or the current role's bar stops growing.

## Notes

- **JavaScript only where it earns its place.** The home page and post pages ship none. `/writing/` ships one small script for the category filters, which also syncs the choice to `?tag=` so a filtered view can be linked and reloaded.
- **Fonts are self-hosted.** Astro downloads both families at build time — the page makes no request to `fonts.googleapis.com`.
- The prototype's slide-over modal became real post pages, so posts have their own URLs, work without JS, and can be crawled, shared, and syndicated.
