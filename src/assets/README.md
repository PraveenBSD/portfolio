# Assets

## portrait.jpg

The landing-block photo. Currently a 1900×1900 square crop of `IMG_4650.JPEG`, taken from the original 3256×4070 frame at offset `+915+689` so the face lands near the centre of the circular mask:

```sh
magick IMG_4650.JPEG -crop 1900x1900+915+689 +repage -quality 92 src/assets/portrait.jpg
```

[`Portrait.astro`](../components/Portrait.astro) picks it up by glob — there is no import to edit. Astro emits 1x and 2x WebP at the 220px display size (~23KB total). If the file is ever removed, the landing block falls back to a monogram rather than failing the build.

### Replacing it

Drop in a new `portrait.{jpg,jpeg,png,webp,avif}`. **Crop it square yourself** — the circular mask shows the inscribed circle of whatever you provide, so an uncropped landscape or portrait frame will fill with background instead of your face.

To preview the circular result at true display size before committing:

```sh
magick -size 220x220 xc:black -fill white -draw "circle 110,110 110,0" /tmp/mask.png
magick src/assets/portrait.jpg -resize 220x220! /tmp/mask.png -alpha off \
  -compose CopyOpacity -composite /tmp/circle-preview.png
```

### Fine-tuning without re-cropping

`--portrait-pos` in [`src/styles/global.css`](../styles/global.css) sets `object-position`:

```css
--portrait-pos:58% 18%;   /* horizontal% vertical% */
```

Note this only shifts the crop when the image is **not** square — with a square source it has no effect, so re-crop instead.
