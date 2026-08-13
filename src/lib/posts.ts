import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * All publishable posts, newest first.
 * Drafts are visible while running `astro dev` and dropped from `astro build`.
 */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Tag -> post count, ordered by count desc then name. */
export async function getTags(): Promise<{ tag: string; count: number }[]> {
	const posts = await getPosts();
	const counts = new Map<string, number>();
	for (const post of posts) {
		counts.set(post.data.tag, (counts.get(post.data.tag) ?? 0) + 1);
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
