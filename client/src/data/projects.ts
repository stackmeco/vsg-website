import type { StageVariant } from "@/components/StageChip";
export type { StageVariant };

export const STAGES = {
  DEFINITION: "Strategic Definition",
  VALIDATION: "Rapid Validation",
  BUILD: "Verified Build",
  DEPLOYMENT: "Controlled Deployment",
  EVOLUTION: "Data-Driven Evolution",
} as const;

export interface Project {
  slug: string;
  name: string;
  stage: string;
  stageVariant: StageVariant;
  tagline: string;
  description: string;
  currentState: string[];
  exploring: string[];
  notYet: string[];
  relatedArticle?: string;
  nextProjectSlug?: string;
  texture?: "axiom" | "lumina" | "default";
}

export const projects: Project[] = [
  {
    slug: "helios",
    name: "Helios",
    stage: STAGES.DEPLOYMENT,
    stageVariant: "deployment",
    tagline: "Preserve Value.",
    description: "Helios is our internal capital engine. It manages VSG's Bitcoin treasury reserve with autonomous monitoring, conservative risk limits, and sub-4ms execution latency. Built to preserve purchasing power over decades, not chase short-term yield.",
    currentState: [
      "v20.0 Production deployed on VSG internal treasury",
      "Sub-4ms execution latency across all operations",
      "24/7 autonomous monitoring with human oversight",
      "Conservative borrowing within strict LTV bounds",
    ],
    exploring: [
      "Multi-venue position management and rebalancing",
      "Real-time solvency monitoring with automated alerts",
      "Policy ladders for graduated risk profiles",
      "Stress-testing frameworks for extreme volatility",
    ],
    notYet: [
      "Not a product or service for external use",
      "No external users or client funds managed",
      "No public API or third-party integrations",
      "No yield products or investment offerings",
    ],
    relatedArticle: "/insights/verification-standard",
    nextProjectSlug: "axiom",
  },
  {
    slug: "axiom",
    name: "Axiom",
    stage: STAGES.VALIDATION,
    stageVariant: "validation",
    tagline: "Validate Signal.",
    description: "Axiom forces AI to be deterministic and source-backed. LLMs are probabilistic—they guess. Axiom constrains them to cite verified data sources, making AI outputs reliable enough for institutional decision-making.",
    currentState: [
      "Core RAG architecture functional and tested",
      "Citation enforcement layer active on all outputs",
      "Internal deployment for VSG research summaries",
      "Validation phase: measuring accuracy against baselines",
    ],
    exploring: [
      "Automated fact-verification with confidence scoring",
      "Integration between Axiom (truth layer) and Helios (value layer)",
      "Latency optimization for real-time verification",
      "Domain-specific knowledge graph construction",
    ],
    notYet: [
      "No public API or external access",
      "Not a general-purpose inference engine",
      "Restricted to curated domain knowledge only",
      "No third-party integrations",
    ],
    relatedArticle: "/insights/insolvency-of-fiction",
    nextProjectSlug: "stackme",
    texture: "axiom",
  },
  {
    slug: "stackme",
    name: "Stackme",
    stage: STAGES.BUILD,
    stageVariant: "build",
    tagline: "Bitcoin-Backed Credit.",
    description: "A transparent lending interface for borrowing against Bitcoin. Engineered to eliminate hidden risks and predatory terms common in crypto lending, with clear solvency indicators and conservative risk limits.",
    currentState: [
      "Requirements and risk framework complete",
      "Technical architecture defined and reviewed",
      "Verified build phase in active development",
      "Security review pipeline established",
    ],
    exploring: [
      "Real-time risk visualization dashboards",
      "Conservative LTV limits with graduated alerts",
      "Transparent liquidation tranches",
      "Solvency indicators visible to borrowers",
    ],
    notYet: [
      "No live users or active loans",
      "No public access or beta program",
      "Not accepting deposits or collateral",
      "Not a licensed financial service",
    ],
    nextProjectSlug: "lumina",
  },
  {
    slug: "lumina",
    name: "Lumina",
    stage: STAGES.DEFINITION,
    stageVariant: "definition",
    tagline: "Physical Asset Twins.",
    description: "Linking high-value physical items to verifiable digital certificates via optical surface scanning. Creates forgery-proof provenance for trading real-world assets without centralized custody.",
    currentState: [
      "Specification and requirements complete",
      "System design in progress",
      "Optical verification research underway",
      "Defining target asset categories",
    ],
    exploring: [
      "Photometric stereo scanning techniques",
      "Edge-compute material analysis",
      "On-chain provenance and ownership records",
      "Surface topology verification algorithms",
    ],
    notYet: [
      "No working prototype yet",
      "No instruments or certificates issued",
      "Not accepting asset submissions",
      "Research phase only",
    ],
    nextProjectSlug: "uniqueness-engine",
    texture: "lumina",
  },
  {
    slug: "uniqueness-engine",
    name: "Uniqueness",
    stage: STAGES.DEFINITION,
    stageVariant: "definition",
    tagline: "Protect Identity.",
    description: "Validating human uniqueness online without biometric surveillance. A privacy-first layer to prevent Sybil attacks and bot spam while ensuring fair access to digital services.",
    currentState: [
      "Research and requirements phase active",
      "Surveying existing identity approaches",
      "Defining privacy and security requirements",
      "Establishing success criteria and threat model",
    ],
    exploring: [
      "Zero-knowledge uniqueness proofs",
      "Cost-of-forgery economic signals",
      "Minimal footprint identity attestations",
      "Decentralized verification models",
    ],
    notYet: [
      "No prototype or proof-of-concept",
      "No defined technical architecture",
      "Not integrated with other VSG projects",
      "Pure research phase",
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
