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
    tagline: "The AI Fact-Checker.",
    description: "Large Language Models (LLMs) are probabilistic; they guess. Axiom forces them to be deterministic by citing verified data sources. It renders AI reliable enough for enterprise use.",
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
    nextProjectSlug: "helios",
    texture: "axiom",
  },
  {
    slug: "helios",
    name: "Helios",
    stage: "Internal Alpha",
    stageVariant: "internal",
    tagline: "The Autonomous Treasury.",
    description: "An automated capital engine. It monitors market volatility 24/7 and manages treasury risk with sub-millisecond reaction times, far exceeding human capability.",
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
    relatedArticle: "/insights/verification-standard",
    nextProjectSlug: "stackme",
  },
  {
    slug: "stackme",
    name: "Stackme",
    stage: "Architecture",
    stageVariant: "architecture",
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
    stage: "Specification",
    stageVariant: "specification",
    tagline: "Digital Twins for Physical Assets.",
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
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research",
    tagline: "Proof of Human.",
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
  return { name: next.name, href: `/pipeline/${next.slug}` };
};
