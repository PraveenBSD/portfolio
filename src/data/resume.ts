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
	'8 years of experience in the industry - building Internal Developer Platforms, self-service infrastructure, and the reliability, security, and cost foundations that help product teams ship faster. I treat the platform as a product, designing golden paths and paved roads that cut developer cognitive load and remove ticket-based handoffs. Most of my work has been converting unstable, manually operated systems into declarative, GitOps-driven platforms, with hands-on depth across Infrastructure as Code, Kubernetes at scale, DevSecOps, and FinOps, alongside leading and mentoring SRE and platform teams.';

/** The five headline numbers. The home page shows the first four. */
export const IMPACT = [
	{ value: '~30%', label: 'lower compute spend', detail: 'Spot, On-Demand and Reservation blending, holding capacity for traffic spikes' },
	{ value: '~40%', label: 'lower median MTTR', detail: 'full-stack observability paired with a structured incident-response process' },
	{ value: '99.9%', label: 'availability sustained', detail: 'Pod Disruption Budgets, topology spread, and mixed node pools' },
	{ value: '~33%', label: 'faster releases', detail: 'end-to-end ArgoCD GitOps with automated, auditable delivery' },
	{ value: 'Zero', label: 'data loss on migration', detail: 'full AWS and GCP account moves including DNS cutover, with minimal downtime' },
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

export const PRODUCTS_CLIENTS = [
	{ area: 'Banking & payments infrastructure', detail: 'M2P Fintech is the infrastructure layer behind core banking, card issuing, lending and payments for 200+ banks, 300+ lenders and 800+ fintechs across 30+ markets, carrying programmes for State Bank of India, SBM Bank, DCB Bank, Muthoot and IIFL. I build and run the platform those programmes ship on.' },
	{ area: 'Platform for client delivery teams', detail: 'Every client programme lands on a platform I own end to end - reproducible environments in Terraform, GitOps delivery through ArgoCD, policy guardrails at admission - so client-facing DevOps teams self-serve instead of queueing behind my team.' },
	{ area: 'Banking security', detail: 'Hardened the platform behind card and lending programmes for HDFC and other large Indian banks, where every release carries change control and audit evidence.' },
	{ area: 'Vulnerability management', detail: 'Ran patching and CVE remediation across Red Hat Enterprise Linux fleets and container images, scanning in CI and on running systems so vulnerabilities disclosed after deployment are still caught.' },
	{ area: 'International programmes', detail: 'Supported bank and fintech programmes beyond India across the Middle East and Asia Pacific, where data residency and local regulation shape how each environment is built.' },
	{ area: 'Retail personalisation at scale', detail: "Kept Mad Street Den's recommendation and personalisation engine serving live traffic for Zara, Macy's, Flipkart, MercadoLibre, Tata CLiQ, Tata Neu, Namshi and 6th Street - through peak sale events, when a minute of downtime is a sale lost." },
	{ area: 'Computer-vision cataloguing', detail: "Ran the inference platform behind Vue.ai's tagging models, which read apparel attributes straight from product imagery for Zara and other retailers, replacing catalogue work that used to be done by hand." },
	{ area: 'Document AI for lending & insurance', detail: 'Supported the intelligent document processing product behind loan and insurance document workflows at Sundaram Finance, HDFC Bank and other lenders and insurers.' },
	{ area: 'Edtech traffic at exam season', detail: "Ran the platform behind CoLearn's custom models, holding capacity through exam-season surges when student traffic rises far above baseline." },
	{ area: 'Healthcare', detail: 'Strengthened product security for healthcare customers, including AYA Healthcare.' },
	{ area: 'Digital cinema distribution', detail: 'Qube Cinema delivers films to screens worldwide over the internet, with HSM-backed key management and encryption, moving terabytes of content per release.' },
	{ area: 'Cinema playback systems', detail: 'Tested the playback servers that drive projection in theatres, including image-distortion checks on rendered output before a title reached an audience.' },
] as const;

/** Newest first. `company` repeats where a progression happened in place. */
export const POSITIONS = [
	{
		company: 'M2P Fintech',
		title: 'Senior SDE (Manager), Platform Engineering',
		when: '2025 to Present',
		bullets: [
			'Built a FinOps cost pipeline that attributes cloud spend to product teams from their actual usage, across single-tenant and multi-tenant cloud accounts, making cost ownership visible per team, surfaced through an internal stakeholder dashboard for division leads.',
			"Built GitOps automation agents that auto-raise pull requests for platform updates to each product team's DevOps repositories, propagating changes consistently while product teams keep control through standard review and approval.",
			'Led the migration from Ingress to Kubernetes Gateway API, improving traffic management, security control, and extensibility across services.',
			'Added a bare-metal Kubernetes option for customers running their own in-house servers, provisioned and configured through Ansible, so the same platform ships to cloud and on-premise estates.',
			'Building internal developer tools that let product teams and client DevOps ship faster by following the golden path instead of assembling their own.',
			'Introduced Crossplane to expose cloud infrastructure as self-service, Kubernetes-native APIs, giving product teams golden paths to provision resources without ticket-based handoffs.',
			'Authored reusable Helm charts for all platform services, making Kubernetes deployments consistent, repeatable, and version-controlled.',
			'Developed a Claude-powered self-service skill that walks product teams through platform upgrades and new releases step by step, lowering onboarding friction and reducing support load on the platform team.',
			'Drove a cultural shift from manual deployments to declarative, Kubernetes-native workflows, helping engineering teams adopt GitOps practices.',
			'Built CI pipelines with integrated security scanning and policy gates, improving deployment safety and reducing rollback frequency.',
			'Standardised infrastructure provisioning across all services with Terraform, so environments are reproducible and drift surfaces as a plan diff in review rather than as an incident.',
		],
		stack: ['Terraform', 'Crossplane', 'Helm', 'Gateway API', 'GitHub Actions', 'FinOps'],
	},
	{
		company: 'Mad Street Den',
		title: 'Technical Lead, Site Reliability Engineering',
		when: '2024 to 2025',
		bullets: [
			'Led zero-data-loss cloud account migrations across AWS and GCP during the company acquisition, covering DNS migration, service re-routing and cutover with minimal downtime, and performed cluster version upgrades with no production impact.',
			'Implemented and maintained the platform controls behind SOC 2, HIPAA and ISO compliance, covering change management, access and network policy, audit logging, and backup and retention.',
			'Established end-to-end GitOps with ArgoCD, cutting median rollout time by about a third and delivering auditable, self-service continuous delivery across environments.',
			'Deployed Kyverno for admission-time policy enforcement to standardise workloads, with firewall monitoring and alerting to catch network-level threats early.',
			'Right-sized workloads from load-test and production metrics, bringing CPU and memory requests in line with observed usage and reducing the node count needed to run them.',
			'Engineered pod-stability strategies using Pod Disruption Budgets, topology spread constraints, and Spot plus On-Demand node pools, sustaining 99.9% availability at lower instance cost.',
			'Implemented Karpenter for just-in-time node provisioning and consolidation, improving bin-packing and cutting the time workloads spent waiting for capacity.',
			'Deployed a full DR setup covering circuit breakers, rate limiting, and automated failover, which reduced blast radius during incidents and hardened system resilience.',
			'Hardened security posture with WAF rules and Kubernetes network policies across all production services, and added caching layers that measurably cut backend load and p95 response times.',
		],
		stack: ['Kubernetes', 'ArgoCD', 'Kyverno', 'SOC 2 / HIPAA', 'DR', 'WAF'],
	},
	{
		company: 'Mad Street Den',
		title: 'Senior Site Reliability Engineer',
		when: '2022 to 2024',
		bullets: [
			'Led the migration of legacy workloads to Kubernetes (GKE, EKS and AKS), improving deployment consistency, resource utilisation, and operational scalability across the organisation.',
			'Owned cloud cost engineering: built cost dashboards for engineering and leadership that surfaced spend leaks from NAT gateways, unused volumes, and inefficient data retention.',
			'Built end-to-end observability with OpenTelemetry, Prometheus, Grafana, and Kibana / ELK, cutting median MTTR by ~40% and improving SLA compliance.',
			'Optimised the VM fleet with a Spot, On-Demand, and Reservation blend, achieving ~30% compute-cost reduction while holding capacity for high-volume traffic spikes.',
			'Implemented data backup and retention policies across storage systems, reducing storage spend without compromising restore times or availability.',
			'Ran capacity-planning exercises combining load-test results with production metrics to right-size compute and define scaling policies.',
			'Configured intelligent auto-scaling and alarm rules for traffic surges, cutting steady-state over-provisioning while protecting against performance degradation.',
		],
		stack: ['FinOps', 'AWS', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Kubernetes', 'Right-sizing'],
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
			'Managed Elasticsearch clusters at scale, tuning indexing, shard strategy, and retention to improve query performance and reduce storage overhead.',
		],
		stack: ['SLOs', 'Incident Response', 'On-call', 'Observability', 'Elasticsearch'],
	},
	{
		company: 'Qube Cinema Technologies',
		title: 'Software Engineer (Associate to SE)',
		when: '2018 to 2021',
		bullets: [
			"Built the credit billing logic in Qube Billing for customers invoiced on credit terms, and the distributor and theatre report generation that removed a recurring manual step from the finance team's monthly close.",
			'Tested playback servers end to end, including image-distortion checks on rendered output before titles reached screens.',
			'Managed movie-content storage on AWS S3 with multi-tier storage and lifecycle policies, including retrieval of archived titles on demand, cutting storage costs by ~25%.',
			'Carried out mobile and load testing for Moviebuff, the ticket-booking platform, ahead of high-demand releases.',
			'Built an automated testing tool that roughly halved the manual regression pass and improved release velocity.',
		],
		stack: ['Python', 'AWS', 'Test Automation', 'Billing'],
	},
] as const;

export const SKILLS = [
	{ group: 'Languages', items: ['Go', 'Python', 'Node.js', 'JavaScript', 'Shell'] },
	{ group: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
	{ group: 'OS & Config Management', items: ['Linux', 'Chef', 'Puppet', 'Ansible'] },
	{
		group: 'Containers & Orchestration',
		items: ['Kubernetes (EKS, GKE, AKS, bare metal)', 'Docker', 'Helm', 'Airflow'],
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
		items: ['Terraform', 'Crossplane', 'Pulumi', 'CloudFormation'],
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
		items: [
			'Cost Attribution & Showback',
			'Cost Dashboards',
			'Spend-Leak Detection',
			'Capacity Planning',
			'Reserved & Spot Instance Strategy',
		],
	},
	{ group: 'Compliance', items: ['SOC 2', 'HIPAA', 'ISO - control implementation and evidence'] },
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
