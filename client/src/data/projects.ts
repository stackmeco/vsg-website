import type { StageVariant } from "@/components/StageChip";
export type { StageVariant };

export const STAGES = {
  DEFINE: "Define",
  VALIDATE: "Validate",
  BUILD: "Build",
  DEPLOY: "Deploy",
  EVOLVE: "Evolve",
} as const;

export type DomainType = "Truth" | "Capital" | "Dignity";

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
  texture?: "axiom" | "lumina" | "default";
}

export const projects: Project[] = [
  {
    slug: "helios",
    name: "Helios",
    tag: "Internal venture",
    domain: "Capital",
    stage: STAGES.EVOLVE,
    stageVariant: "evolution",
    summary: "Helios is our internal execution engine for VSG's own digital asset treasury. It routes positions under explicit limits so capital can work without surrendering custody, operating as a non-custodial engine with observability and rollback built in.",
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
    nextProjectSlug: "stackme",
  },
  {
    slug: "stackme",
    name: "Stackme",
    tag: "Consumer venture",
    domain: "Capital",
    stage: STAGES.VALIDATE,
    stageVariant: "validation",
    summary: "A consumer experience for safely accessing leverage on verifiable rails, with clear constraints and real-time risk visibility. Built so individuals can see exactly where they stand before volatility moves.",
    description: "A transparent lending interface for borrowing against Bitcoin. Engineered to eliminate hidden risks and predatory terms common in crypto lending, with clear solvency indicators and conservative risk limits.",
    currentState: [
      "Requirements and risk framework complete",
      "Technical architecture defined and reviewed",
      "Validation phase in active development",
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
    tag: "Market infrastructure",
    domain: "Truth",
    stage: STAGES.BUILD,
    stageVariant: "build",
    summary: "Lumina is physics-aware grading infrastructure for cards and other physical assets. It ties every score to verifiable evidence—sensor readings, anomaly checks, and provenance logs—so grades rest on proof instead of stories.",
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
      "Build phase only",
    ],
    nextProjectSlug: "axiom",
    texture: "lumina",
  },
  {
    slug: "axiom",
    name: "Axiom",
    tag: "In research",
    domain: "Truth",
    stage: STAGES.DEFINE,
    stageVariant: "definition",
    summary: "Our verifiable rails for AI-native flows anchor outputs to provenance and integrity checks. They make it possible to inspect how a decision or result was formed, so automated systems can be audited instead of guessed at.",
    description: "Axiom forces AI to be deterministic and source-backed. LLMs are probabilistic—they guess. Axiom constrains them to cite verified data sources, making AI outputs reliable enough for institutional decision-making.",
    currentState: [
      "Research and requirements phase active",
      "Surveying existing approaches",
      "Defining accuracy and compliance requirements",
      "Establishing success criteria",
    ],
    exploring: [
      "Automated fact-verification with confidence scoring",
      "Citation enforcement for all AI outputs",
      "Domain-specific knowledge graph construction",
      "Latency optimization for real-time verification",
    ],
    notYet: [
      "No public API or external access",
      "Not a general-purpose inference engine",
      "Restricted to curated domain knowledge only",
      "Pure research phase",
    ],
    relatedArticle: "/insights/insolvency-of-fiction",
    texture: "axiom",
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
