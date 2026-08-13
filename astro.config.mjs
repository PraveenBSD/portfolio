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
			theme: 'github-dark-default',
			wrap: true,
		},
	},

	// Fonts are downloaded at build time and served from our own origin, so the
	// page makes no request to fonts.googleapis.com at runtime.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Bricolage Grotesque',
			cssVariable: '--font-display',
			weights: [500, 600, 700, 800],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-body',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			weights: [400, 500, 600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
		},
	],
});
