/**
 * Full experience detail, taken from resume.md.
 *
 * The home page timeline groups this by company (see EXPERIENCE in
 * profile.ts, three bars). This file keeps every position separately, so the
 * Mad Street Den progression shows as three roles rather than one block.
 * If a date changes, change it in both places.
 *
 * Phone number from the resume is deliberately not here. It is on a public
 * page the moment it is added, and email plus LinkedIn already cover contact.
 */

export const SUMMARY =
	'Platform engineering leader with 8 years of experience building Internal Developer Platforms, self-service infrastructure, and the reliability, security, and cost foundations that help product teams ship faster. I treat the platform as a product, designing golden paths and paved roads that cut developer cognitive load and remove ticket-based handoffs. Most of my work has been converting unstable, manually operated systems into declarative, GitOps-driven platforms, with hands-on depth across Infrastructure as Code, Kubernetes at scale, DevSecOps, and FinOps, alongside leading and mentoring SRE and platform teams.';

/** The five headline numbers. The home page shows the first four. */
export const IMPACT = [
	{ value: '~30%', label: 'lower compute spend', detail: 'Spot, On-Demand and Reservation blending, holding capacity for traffic spikes' },
	{ value: '~40%', label: 'lower median MTTR', detail: 'full-stack observability paired with a structured incident-response process' },
	{ value: '99.9%', label: 'availability sustained', detail: 'Pod Disruption Budgets, topology spread, and mixed node pools' },
	{ value: '~33%', label: 'faster releases', detail: 'end-to-end ArgoCD GitOps with automated, auditable delivery' },
	{ value: 'Zero', label: 'data loss on migration', detail: 'full AWS account move including DNS cutover, with minimal downtime' },
] as const;

export const EXPERTISE = [
	'Platform Engineering',
	'Internal Developer Platform',
	'Platform as a Product',
	'Developer Experience',
	'Self-Service Infrastructure',
	'GitOps',
	'Infrastructure as Code',
	'DevSecOps',
	'Site Reliability Engineering',
	'FinOps',
	'Kubernetes',
	'Observability',
	'Disaster Recovery',
	'Incident Response',
] as const;

/** Newest first. `company` repeats where a progression happened in place. */
export const POSITIONS = [
	{
		company: 'M2P Fintech',
		title: 'Senior SDE (Manager), Platform Engineering',
		when: '2025 to Present',
		bullets: [
			'Standardised infrastructure provisioning across all services with Terraform, so environments are reproducible and drift surfaces as a plan diff in review rather than as an incident.',
			'Introduced Crossplane to expose cloud infrastructure as self-service, Kubernetes-native APIs, giving product teams golden paths to provision resources without ticket-based handoffs.',
			'Authored reusable Helm charts for all platform services, making Kubernetes deployments consistent, repeatable, and version-controlled.',
			'Established end-to-end GitOps with ArgoCD, cutting median rollout time by about a third and delivering auditable, self-service continuous delivery across environments.',
			"Built GitOps automation agents that auto-raise pull requests for platform updates to each product team's DevOps repositories, propagating changes consistently while product teams keep control through standard review and approval.",
			'Developed a Claude-powered self-service skill that walks product teams through platform upgrades and new releases step by step, lowering onboarding friction and reducing support load on the platform team.',
			'Drove a cultural shift from manual deployments to declarative, Kubernetes-native workflows, helping engineering teams adopt GitOps practices.',
			'Led the migration from Ingress to Kubernetes Gateway API, improving traffic management, security control, and extensibility across services.',
			'Built CI pipelines with integrated security scanning and policy gates, improving deployment safety and reducing rollback frequency.',
			'Deployed Kyverno for admission-time policy enforcement and set up firewall monitoring and alerting to catch network-level threats early.',
			'Built a FinOps cost pipeline that attributes cloud spend to individual product teams from their actual usage, across both single-tenant and multi-tenant cloud accounts, so cost ownership is visible per team rather than as one organisation-wide figure.',
		],
		stack: ['Terraform', 'Crossplane', 'ArgoCD', 'Helm', 'Gateway API', 'Kyverno', 'GitHub Actions'],
	},
	{
		company: 'Mad Street Den',
		title: 'Technical Lead, Site Reliability Engineering',
		when: '2024 to 2025',
		bullets: [
			'Led a zero-data-loss AWS account migration covering DNS migration, service re-routing and cutover with minimal downtime, and performed cluster version upgrades with no production impact.',
			'Led the migration of legacy workloads to Kubernetes, improving deployment consistency, resource utilisation, and operational scalability across the organisation.',
			'Right-sized workloads from load-test and production metrics, bringing CPU and memory requests in line with observed usage and reducing the node count needed to run them.',
			'Engineered pod-stability strategies using Pod Disruption Budgets, topology spread constraints, and Spot plus On-Demand node pools, sustaining 99.9% availability at lower instance cost.',
			'Deployed a full DR setup covering circuit breakers, rate limiting, and automated failover, which reduced blast radius during incidents and hardened system resilience.',
			'Built end-to-end observability with OpenTelemetry, Prometheus, Grafana, and Kibana / ELK, cutting median MTTR by ~40% and improving SLA compliance.',
			'Hardened security posture with WAF rules and Kubernetes network policies across all production services, and added caching layers that measurably cut backend load and p95 response times.',
		],
		stack: ['Kubernetes', 'OpenTelemetry', 'Prometheus', 'Grafana', 'ELK', 'WAF'],
	},
	{
		company: 'Mad Street Den',
		title: 'Senior Site Reliability Engineer',
		when: '2022 to 2024',
		bullets: [
			'Owned cloud cost engineering: built cost dashboards for engineering and leadership that surfaced spend leaks from NAT gateways, unused volumes, and inefficient data retention.',
			'Optimised the EC2 fleet with a Spot, On-Demand, and Reservation blend, achieving ~30% compute-cost reduction while holding capacity for high-volume traffic spikes.',
			'Implemented data backup and retention policies across storage systems, reducing storage spend without compromising restore times or availability.',
			'Ran capacity-planning exercises combining load-test results with production metrics to right-size compute and define scaling policies.',
			'Configured intelligent auto-scaling and alarm rules for traffic surges, cutting steady-state over-provisioning while protecting against performance degradation.',
			'Managed Elasticsearch clusters at scale, tuning indexing, shard strategy, and retention to improve query performance and reduce storage overhead.',
		],
		stack: ['FinOps', 'AWS', 'Elasticsearch', 'Capacity Planning', 'Right-sizing'],
	},
	{
		company: 'Mad Street Den',
		title: 'Site Reliability Engineer',
		when: '2021 to 2022',
		bullets: [
			'Hired directly by the Director of Tech Support and SRE Director to stabilise a critical AI product suite that was struggling to meet SLA commitments.',
			'Audited all organisation-wide products to map instabilities and failure patterns, then built the observability foundation from scratch: business and system metrics, dashboards, and alerting across all services.',
			'Authored incident-response playbooks and runbooks for known failure patterns, then formed and led a 24/7 support team with on-call rotations, escalation paths, triage, and automation that resolved recurring issues and cut operational toil.',
			'Established an SLO and error-budget framework, moving the team from reactive firefighting to proactive reliability management, with MTTR trending down each quarter as runbooks and alerting matured.',
		],
		stack: ['SLOs', 'Incident Response', 'On-call', 'Observability'],
	},
	{
		company: 'Qube Cinema Technologies',
		title: 'Software Engineer (Associate to SE)',
		when: '2018 to 2021',
		bullets: [
			'Built an automated testing tool that roughly halved the manual regression pass and improved release velocity.',
			'Cut AWS S3 storage costs by ~25% by implementing multi-tier storage and lifecycle policies.',
			"Built the credit user-management feature in Qube Billing and the distributor-theatre report generation feature, removing a recurring manual step from the finance team's monthly reporting.",
		],
		stack: ['Python', 'AWS', 'Test Automation', 'Billing'],
	},
] as const;

export const SKILLS = [
	{ group: 'Languages', items: ['Go', 'Python', 'Node.js', 'JavaScript', 'Shell'] },
	{ group: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
	{
		group: 'Containers & Orchestration',
		items: ['Kubernetes (EKS, GKE, AKS)', 'Docker', 'Helm', 'Airflow'],
	},
	{
		group: 'Kubernetes Platform',
		items: [
			'Gateway API',
			'HPA / VPA',
			'Pod Disruption Budgets',
			'Topology Spread',
			'Karpenter',
			'Network Policies',
			'Kyverno',
		],
	},
	{
		group: 'IaC & Control Planes',
		items: ['Terraform', 'Crossplane', 'Pulumi', 'CloudFormation', 'Ansible'],
	},
	{ group: 'GitOps & CI/CD', items: ['ArgoCD', 'GitHub Actions', 'Jenkins'] },
	{
		group: 'Observability',
		items: [
			'Prometheus',
			'Grafana',
			'VictoriaMetrics',
			'OpenTelemetry',
			'Jaeger',
			'Loki',
			'ELK',
			'CloudWatch',
			'Google Cloud Monitoring',
			'Opsgenie',
		],
	},
	{ group: 'DevSecOps & Policy', items: ['Kyverno', 'Trivy', 'SonarQube', 'Checkov', 'WAF'] },
	{
		group: 'Databases & Analytics',
		items: [
			'PostgreSQL',
			'Elasticsearch',
			'ClickHouse',
			'BigQuery',
			'Redis',
			'DynamoDB',
			'CosmosDB',
			'etcd',
		],
	},
	{
		group: 'Reliability',
		items: [
			'Circuit Breakers',
			'Rate Limiting',
			'Caching Layers',
			'Automated Failover',
			'DR Runbooks',
		],
	},
	{
		group: 'FinOps',
		items: ['Cost Dashboards', 'Spend-Leak Detection', 'Capacity Planning', 'Spot Strategy'],
	},
] as const;

export const CERTIFICATIONS = [
	{ name: 'Apache Airflow Fundamentals 3.x', status: 'Certified' },
	{ name: 'Kubernetes CKA', status: 'Registered, in progress' },
];

export const EDUCATION = {
	degree: 'Bachelor of Engineering, Electronics & Communications',
	school: 'Sri Venkateswara College of Engineering, Sriperumbudur',
	when: '2014 to 2018',
} as const;
