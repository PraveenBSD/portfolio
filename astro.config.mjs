// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { SITE } from './src/consts.ts';

const MONO_FALLBACK = ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'];

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	integrations: [mdx(), sitemap()],

	markdown: {
		shikiConfig: {
			themes: { light: 'github-light-default', dark: 'github-dark-default' },
			wrap: true,
		},
	},

	// Downloaded at build time and served from our own origin — the page makes
	// no request to fonts.googleapis.com at runtime.
	fonts: [
		{
			// Headings. Retro, typewriter-descended, a bit quirky.
			provider: fontProviders.google(),
			name: 'Space Mono',
			cssVariable: '--font-display',
			weights: [400, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: MONO_FALLBACK,
		},
		{
			// Body and code. The most readable mono at paragraph length.
			provider: fontProviders.google(),
			name: 'IBM Plex Mono',
			cssVariable: '--font-body',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: MONO_FALLBACK,
		},
	],
});
