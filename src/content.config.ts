import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		/** Single primary tag. Drives the badge and the /tags/<tag>/ page. */
		tag: z.string(),
		/** Fake-but-stable commit hash shown in the changelog row. */
		hash: z.string().regex(/^[0-9a-f]{7}$/, 'hash must be 7 lowercase hex chars'),
		readingTime: z.string().optional(),
		/** Drafts build locally but are excluded from the production build. */
		draft: z.boolean().default(false),
	}),
});

export const collections = { posts };
