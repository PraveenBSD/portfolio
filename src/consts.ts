/**
 * Site-wide constants. Everything that is "you" rather than "the design"
 * lives here or in `src/data/profile.ts`.
 */

export const SITE = {
	/**
	 * The final public origin, no trailing slash. Drives canonical URLs, the
	 * sitemap, RSS links, and OG tags. If this is wrong, every one of those
	 * points somewhere else. Keep it in sync with public/robots.txt.
	 */
	url: 'https://praveenbsd.com',
	title: 'Praveen B S D | Platform Engineering',
	shortTitle: 'Praveen B S D',
	description:
		'Praveen B S D works on internal developer platforms and the infrastructure behind them. Writing on platform engineering, GitOps, Kubernetes, SRE, and cloud cost.',
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
