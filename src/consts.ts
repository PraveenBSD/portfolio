/**
 * Site-wide constants. Everything that is "you" rather than "the design"
 * lives here or in `src/data/profile.ts`.
 */

export const SITE = {
	/**
	 * TODO: replace with your real Cloudflare domain before deploying.
	 * This drives canonical URLs, the sitemap, RSS links, and OG tags —
	 * it must be the final public origin, with no trailing slash.
	 */
	url: 'https://example.com',
	title: 'Praveen B S D — Platform Engineering',
	shortTitle: 'Praveen B S D',
	description:
		'Praveen B S D builds internal developer platforms, self-service infrastructure, and the reliability, security, and cost foundations product teams ship on. Writing on platform engineering, GitOps, SRE, and FinOps.',
	author: 'Praveen B S D',
	locale: 'en',
} as const;

export const NAV_LINKS = [
	{ href: '/writing/', label: 'Writing' },
	{ href: '/#work', label: 'Work' },
	{ href: '/#experience', label: 'Experience' },
	{ href: '/#about', label: 'About' },
] as const;

export const SOCIAL = {
	github: 'https://github.com/PraveenBSD',
	linkedin: 'https://linkedin.com/in/praveen-bsd-91a856130',
	email: 'mailto:praveen.bsd@gmail.com',
} as const;
