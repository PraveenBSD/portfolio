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

## Notes

- **No client-side framework.** The only JavaScript shipped is the mobile nav toggle; everything else is static HTML.
- **Fonts are self-hosted.** Astro downloads Bricolage Grotesque, Inter, and JetBrains Mono at build time — the page makes no request to `fonts.googleapis.com`.
- The prototype's slide-over modal became real post pages, so posts have their own URLs, work without JS, and can be crawled, shared, and syndicated.
