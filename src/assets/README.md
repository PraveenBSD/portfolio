# Assets

## portrait

Save your photo here as **`portrait.jpg`** (`.jpeg`, `.png`, `.webp` and `.avif` also work).

```
src/assets/portrait.jpg
```

[`Portrait.astro`](../components/Portrait.astro) picks it up automatically — no import to edit. Astro resizes it and emits modern formats at build time, so drop in the full-resolution original rather than a pre-shrunk copy.

Until the file exists the landing block shows a green monogram instead, so the build never breaks on a missing photo.

### If the circular crop cuts the face awkwardly

Adjust `--portrait-pos` in [`src/styles/global.css`](../styles/global.css):

```css
--portrait-pos:58% 18%;   /* horizontal% vertical% — lower the second number to move the crop up */
```
