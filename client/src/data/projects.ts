import type { StageVariant } from "@/components/StageChip";
export type { StageVariant };

export const STAGES = {
  RESEARCH: "Research",
  BUILD: "In Development",
  LIVE: "Live",
} as const;

export type DomainType = "Verification" | "Capital" | "Control";

export interface Project {
  slug: string;
  name: string;
  tag: string;
  domain: DomainType;
  stage: string;
  stageVariant: StageVariant;
  summary: string;
  description: string;
  currentState: string[];
  exploring: string[];
  notYet: string[];
  relatedArticle?: string;
  nextProjectSlug?: string;
  texture?: "lumina" | "default";
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "stackme",
    name: "Stackme",
    tag: "Capital infrastructure",
    domain: "Capital",
    stage: STAGES.LIVE,
    stageVariant: "evolution",
    summary: "Non-custodial leverage and borrowing infrastructure. Borrow against your crypto without liquidation risk. Your keys, your collateral, your control.",
    description: "Stackme is non-custodial borrowing infrastructure. Borrow against your assets without selling them. No liquidation risk. No custody sacrifice. Access capital while maintaining full control of your collateral.",
    currentState: [
      "Live and operational at app.stackme.xyz",
      "Non-custodial architecture - you keep your keys",
      "No liquidation risk borrowing",
      "Multiple collateral types supported",
    ],
    exploring: [
      "Multi-chain expansion",
      "Additional collateral types",
      "Institutional integrations",
      "Advanced position management",
    ],
    notYet: [
      "Yield products",
      "Custody services",
      "Investment advice",
    ],
    nextProjectSlug: "helios",
    externalUrl: "https://app.stackme.xyz",
  },
  {
    slug: "helios",
    name: "Helios",
    tag: "Execution infrastructure",
    domain: "Capital",
    stage: STAGES.BUILD,
    stageVariant: "build",
    summary: "Sub-millisecond execution with on-chain security. High-frequency trading performance meets DeFi-grade custody.",
    description: "Helios delivers HFT-speed execution without sacrificing DeFi security. Sub-millisecond latency, on-chain settlement, non-custodial architecture. Execute at institutional speed with self-custody guarantees.",
    currentState: [
      "Core execution engine in development",
      "Sub-4ms execution latency achieved",
      "Non-custodial architecture finalized",
      "Integration patterns defined",
    ],
    exploring: [
      "Multi-venue position management",
      "Real-time risk monitoring",
      "Cross-chain execution",
      "Institutional API access",
    ],
    notYet: [
      "Public API access",
      "External user onboarding",
      "Third-party integrations",
    ],
    nextProjectSlug: "sentinel",
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    tag: "Defense infrastructure",
    domain: "Capital",
    stage: STAGES.BUILD,
    stageVariant: "build",
    summary: "Cross-chain liquidation defense. Protect your positions across every chain from one interface.",
    description: "Sentinel is automated liquidation defense infrastructure. Monitor and protect DeFi positions across multiple chains. When markets turn, Sentinel acts to defend your capital before liquidation hits.",
    currentState: [
      "Architecture and protocol design complete",
      "Cross-chain monitoring in development",
      "Automated defense mechanisms defined",
      "Alert and action systems specified",
    ],
    exploring: [
      "Multi-protocol coverage",
      "Predictive risk modeling",
      "Flash loan defense strategies",
      "MEV-resistant execution",
    ],
    notYet: [
      "Public beta access",
      "External integrations",
      "Guaranteed protection",
    ],
    nextProjectSlug: "axiom",
  },
  {
    slug: "axiom",
    name: "Axiom",
    tag: "Verification infrastructure",
    domain: "Verification",
    stage: STAGES.BUILD,
    stageVariant: "build",
    summary: "Deterministic AI with cryptographic proof. Force AI to show its work with source-backed verification.",
    description: "Axiom is verification infrastructure for AI outputs. Cryptographic proof that AI responses are accurate, sources are real, and outputs are deterministic. No more hallucinations. No more 'trust me.'",
    currentState: [
      "Core verification architecture complete",
      "Source-backed response system in development",
      "Cryptographic proof generation defined",
      "Integration APIs specified",
    ],
    exploring: [
      "Multi-model verification",
      "Real-time source validation",
      "Proof aggregation systems",
      "Enterprise integration patterns",
    ],
    notYet: [
      "Public API access",
      "Consumer products",
      "Model training services",
    ],
    nextProjectSlug: "uniqueness",
  },
  {
    slug: "uniqueness",
    name: "Uniqueness Engine",
    tag: "Identity infrastructure",
    domain: "Control",
    stage: STAGES.BUILD,
    stageVariant: "build",
    summary: "Prove personhood without surveillance. Privacy-preserving proof that one person is behind an account.",
    description: "Uniqueness Engine is privacy-preserving identity infrastructure. Prove you're a unique human without exposing your identity. Sybil-resistant participation while keeping dignity and control intact.",
    currentState: [
      "Architecture and protocol design complete",
      "Privacy-preserving proof systems in development",
      "Integration patterns defined",
      "Sybil-resistance mechanisms validated",
    ],
    exploring: [
      "Zero-knowledge proofs for presence verification",
      "Cross-platform uniqueness coordination",
      "Credential issuance without data pooling",
      "Decentralized identity binding",
    ],
    notYet: [
      "Public API access",
      "Credential issuance",
      "Biometric data collection",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectHref = (project: Project): string => {
  return `/ventures/${project.slug}`;
};

export const getNextProject = (currentSlug: string): { name: string; href: string } | undefined => {
  const current = getProjectBySlug(currentSlug);
  if (!current?.nextProjectSlug) return undefined;
  const next = getProjectBySlug(current.nextProjectSlug);
  if (!next) return undefined;
  return { name: next.name, href: `/ventures/${next.slug}` };
};
