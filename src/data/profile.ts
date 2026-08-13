/**
 * The content of the home page, as data. Edit here — not in the markup.
 */

export const HERO = {
	now: 'Platform Engineering · Chennai, India',
	headlineLead: 'I build the platforms',
	headlineAccent: 'other engineers build on.',
	lede: 'Platform engineering lead with 8 years turning unstable, hand-run systems into declarative, self-service platforms. I write here about the real work: GitOps, internal developer platforms, SRE, and keeping the cloud bill honest.',
} as const;

/**
 * Stat tiles. `pct` drives the meter fill and is a magnitude 0–100, so the
 * `basis` label has to say what the bar is measuring — availability is
 * "of 100% uptime", the rest are "reduction achieved".
 */
export const STATS = [
	{
		key: 'Availability',
		value: '99.9',
		unit: '%',
		pct: 99.9,
		basis: 'of 100% uptime',
		note: 'sustained on mixed node pools',
	},
	{
		key: 'MTTR',
		value: '−50',
		unit: '%',
		pct: 50,
		basis: 'reduction',
		note: 'observability + incident response',
	},
	{
		key: 'Cloud cost',
		value: '−40',
		unit: '%',
		pct: 40,
		basis: 'reduction',
		note: 'spot + reserved blending',
	},
	{
		key: 'Config drift',
		value: '−70',
		unit: '%',
		pct: 70,
		basis: 'reduction',
		note: 'terraform standardisation',
	},
] as const;

/**
 * Career timeline. `start`/`end` are decimal years and drive the bar geometry;
 * `end: null` means "present". Colours are assigned by index in fixed order and
 * never cycled — slot 1 violet, 2 cyan, 3 pink.
 */
export const TIMELINE_END = 2026.6; // "present" — bump as time passes

export const EXPERIENCE = [
	{
		when: '2025 — Present',
		start: 2025,
		end: null,
		company: 'M2P Fintech',
		role: 'Senior SDE (Manager), Platform Engineering',
		summary:
			'Standardised infrastructure on Terraform and Crossplane, shipped end-to-end GitOps with ArgoCD, and built the automation and policy layer that lets product teams self-serve safely.',
		highlights: ['Terraform', 'Crossplane', 'ArgoCD', 'Kyverno'],
	},
	{
		when: '2021 — 2025',
		start: 2021,
		end: 2025,
		company: 'Mad Street Den',
		role: 'SRE → Senior SRE → Technical Lead',
		summary:
			'Grew from stabilising a critical AI product suite to leading SRE: Kubernetes migration, DR and resilience, full-stack observability that halved MTTR, and FinOps work that cut compute cost ~40%.',
		highlights: ['Kubernetes', 'Observability', 'DR', 'FinOps'],
	},
	{
		when: '2018 — 2021',
		start: 2018,
		end: 2021,
		company: 'Qube Cinema Technologies',
		role: 'Software Engineer (Associate → SE)',
		summary:
			'Built automated testing that halved manual QA, cut S3 storage cost ~35%, and shipped billing and reporting features for distribution partners.',
		highlights: ['Automation', 'AWS', 'Billing'],
	},
] as const;

export const WORK = [
	{
		slug: 'idp',
		title: 'Internal Developer Platform',
		blurb:
			'Self-service infrastructure on Kubernetes-native APIs, with golden paths that let product teams provision without a ticket in sight.',
		stack: ['Crossplane', 'Terraform', 'Helm', 'ArgoCD'],
	},
	{
		slug: 'gitops-agents',
		title: 'GitOps Auto-PR Agents',
		blurb:
			'Automation that raises pull requests for platform updates across every product repo — consistent propagation, human-in-the-loop merges.',
		stack: ['GitOps', 'GitHub Actions', 'Go'],
	},
	{
		slug: 'release-copilot',
		title: 'Release Self-Service Skill',
		blurb:
			'A Claude-powered assistant that walks product teams through platform upgrades step by step, cutting onboarding friction and support load.',
		stack: ['Claude', 'DevEx', 'Automation'],
	},
	{
		slug: 'finops',
		title: 'FinOps Cost Engine',
		blurb:
			'Cost dashboards and spend-leak detection feeding a Spot + On-Demand + Reservation strategy that cut compute spend ~40%.',
		stack: ['FinOps', 'AWS', 'Capacity Planning'],
	},
] as const;

export const ABOUT_PARAGRAPHS = [
	"<strong>I'm Praveen — a platform engineer based in Chennai.</strong> I like the unglamorous middle of the stack: the paved roads, the reconciliation loops, the guardrails that turn “please raise a ticket” into “just push to main.”",
	"Over eight years I've moved from firefighting SRE to building platforms product teams actually want to use — treating the platform as a product, with developer experience as the metric that matters.",
	'This site is where I think out loud. New posts land most days: short, specific, and drawn from real work rather than trend cycles.',
] as const;

export const FACTS = [
	{ label: 'Now', value: 'Platform Eng. Lead, M2P Fintech' },
	{ label: 'Based', value: 'Chennai, India' },
	{ label: 'Focus', value: 'IDP · GitOps · SRE · FinOps' },
	{ label: 'Stack', value: 'K8s · Terraform · Crossplane' },
	{ label: 'Writing', value: 'Most days, on main' },
] as const;
