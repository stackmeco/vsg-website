import type { StageVariant } from "@/components/StageChip";
export type { StageVariant };

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
    slug: "axiom",
    name: "Axiom",
    stage: "Research",
    stageVariant: "research",
    tagline: "Deterministic inference with enforced citation.",
    description: "Standard LLMs are probabilistic engines—predicting the next token. Axiom is a constraint layer that forces the model to anchor every claim to a cryptographically verified record. Transforms probabilistic generation into deterministic, cited reporting.",
    currentState: [
      "Core RAG architecture functional",
      "Citation enforcement layer active",
      "Internal deployment for VSG research summaries",
    ],
    exploring: [
      "Automated fact-verification loops",
      "Truth layer (Axiom) to Value layer (Helios) integration",
      "Latency optimization for real-time verification",
    ],
    notYet: [
      "No public API",
      "Not a general-purpose inference engine",
      "Restricted domain knowledge only",
    ],
    relatedArticle: "/thesis/insolvency-of-fiction",
    nextProjectSlug: "helios",
    texture: "axiom",
  },
  {
    slug: "helios",
    name: "Helios",
    stage: "Internal Alpha",
    stageVariant: "internal",
    tagline: "Internal BTC-backed strategy engine.",
    description: "Helios automates treasury operations into bounded, rule-driven positions. Deploys capital with explicit limits and real-time solvency monitoring. Internal use only.",
    currentState: [
      "Architecture and specification complete",
      "Core implementation in progress",
      "Internal deployment underway",
    ],
    exploring: [
      "Automated yield strategies within risk bounds",
      "Multi-venue position management",
      "Real-time solvency monitoring and alerts",
      "Policy ladders for risk profiles",
    ],
    notYet: [
      "No external users",
      "No public API",
      "Not a product or service",
    ],
    relatedArticle: "/thesis/verification-standard",
    nextProjectSlug: "stackme",
  },
  {
    slug: "stackme",
    name: "Stackme",
    stage: "Architecture",
    stageVariant: "architecture",
    tagline: "Protocol-native BTC lending interface.",
    description: "Stackme is a protocol-native lending interface designed for clarity, conservative leverage, and graduated liquidation mechanics. Technical architecture defined; verified build phase in progress.",
    currentState: [
      "Requirements complete",
      "Technical architecture defined",
      "Verified build phase in progress",
    ],
    exploring: [
      "Risk visualization",
      "Conservative LTV limits",
      "Graduated liquidation tranches",
      "Solvency indicators",
    ],
    notYet: [
      "No live users",
      "No public access",
      "Not accepting deposits or loans",
    ],
    nextProjectSlug: "lumina",
  },
  {
    slug: "lumina",
    name: "Lumina",
    stage: "Specification",
    stageVariant: "specification",
    tagline: "Digital bearer instruments for physical assets.",
    description: "Lumina links high-value physical inventory to on-chain rails via a proprietary optical physics engine. Verifies surface topology and material response, anchoring digital instruments to proven physical reality.",
    currentState: [
      "Specification complete",
      "System design in progress",
      "Optical verification pipeline in development",
    ],
    exploring: [
      "Photometric stereo scanning",
      "Edge-compute material analysis",
      "On-chain provenance",
      "Surface topology verification",
    ],
    notYet: [
      "No prototype yet",
      "No instruments issued",
      "Not accepting submissions",
    ],
    nextProjectSlug: "uniqueness-engine",
    texture: "lumina",
  },
  {
    slug: "uniqueness-engine",
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research",
    tagline: "Sybil-resistance without biometric surveillance.",
    description: "Sybil-resistance signals that enforce uniqueness constraints without biometric surveillance or centralized identity data. Enables 'one-per-person' verification while preserving privacy.",
    currentState: [
      "Research and requirements phase",
      "Surveying existing approaches",
      "Defining success criteria",
    ],
    exploring: [
      "Zero-Knowledge uniqueness proofs",
      "Cost-of-forgery signals",
      "Minimal footprint identity",
      "Decentralized attestation models",
    ],
    notYet: [
      "No prototype",
      "No defined architecture",
      "Not integrated with other projects",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectHref = (project: Project): string => {
  return `/pipeline/${project.slug}`;
};

export const getNextProject = (currentSlug: string): { name: string; href: string } | undefined => {
  const current = getProjectBySlug(currentSlug);
  if (!current?.nextProjectSlug) return undefined;
  const next = getProjectBySlug(current.nextProjectSlug);
  if (!next) return undefined;
  return { name: next.name, href: `/pipeline/${next.slug}` };
};
