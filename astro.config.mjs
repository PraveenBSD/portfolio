// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { SITE } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	integrations: [mdx(), sitemap()],

	markdown: {
		shikiConfig: {
			theme: 'github-light',
			wrap: true,
		},
	},

	// Downloaded at build time and served from our own origin — the page makes
	// no request to fonts.googleapis.com at runtime.
	fonts: [
		{
			// Everything readable.
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
		},
		{
			// Metadata, labels, tags, code — the technical register.
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
		},
	],
});
