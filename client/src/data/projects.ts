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
    slug: "helios",
    name: "Helios",
    stage: "Controlled Deployment",
    stageVariant: "deployment",
    tagline: "Preserve Value.",
    description: "Autonomous treasury engine. v20.0 Production. Sub-4ms latency. It monitors market volatility 24/7 and manages treasury risk with sub-millisecond reaction times, far exceeding human capability.",
    currentState: [
      "v20.0 Production status achieved",
      "Sub-4ms execution latency",
      "Internal deployment active on VSG treasury",
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
    relatedArticle: "/insights/verification-standard",
    nextProjectSlug: "axiom",
  },
  {
    slug: "axiom",
    name: "Axiom",
    stage: "Rapid Validation",
    stageVariant: "validation",
    tagline: "Validate Signal.",
    description: "Forcing AI to be deterministic and source-backed. Large Language Models (LLMs) are probabilistic; they guess. Axiom forces them to cite verified data sources, rendering AI reliable enough for enterprise use.",
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
    relatedArticle: "/insights/insolvency-of-fiction",
    nextProjectSlug: "stackme",
    texture: "axiom",
  },
  {
    slug: "stackme",
    name: "Stackme",
    stage: "Verified Build",
    stageVariant: "build",
    tagline: "Bitcoin-Backed Credit.",
    description: "A transparent lending interface allowing users to borrow against Bitcoin. Engineered to eliminate the hidden risks and predatory terms often found in crypto lending.",
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
    stage: "Strategic Definition",
    stageVariant: "definition",
    tagline: "Physical Asset Twins.",
    description: "Linking high-value physical items to the blockchain via optical surface scanning. This creates a forgery-proof digital certificate for trading real-world assets.",
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
    name: "Uniqueness",
    stage: "Strategic Definition",
    stageVariant: "definition",
    tagline: "Protect Identity.",
    description: "Validating human identity online without biometric surveillance. A privacy-first layer to prevent bot spam and ensure fair access.",
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
  return `/ventures/${project.slug}`;
};

export const getNextProject = (currentSlug: string): { name: string; href: string } | undefined => {
  const current = getProjectBySlug(currentSlug);
  if (!current?.nextProjectSlug) return undefined;
  const next = getProjectBySlug(current.nextProjectSlug);
  if (!next) return undefined;
  return { name: next.name, href: `/ventures/${next.slug}` };
};
