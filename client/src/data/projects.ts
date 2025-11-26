export type StageVariant = "research" | "requirements" | "architecture" | "development" | "prototype" | "testing";

export interface Project {
  name: string;
  stage: string;
  stageVariant: StageVariant;
  description: string;
  exploring: string[];
  href: string;
}

export const projects: Project[] = [
  {
    name: "Helios",
    stage: "Early Development",
    stageVariant: "development",
    description: "Internal BTC-backed strategy engine. Requirements and architecture defined; implementation and early testing in progress.",
    exploring: ["Automated yield strategies with strict risk bounds", "Multi-venue position management", "Real-time health monitoring"],
    href: "/pipeline/helios",
  },
  {
    name: "stackme",
    stage: "Early Development",
    stageVariant: "development",
    description: "A borrower-first BTC credit app. Requirements and technical architecture defined; prototypes and flows in development.",
    exploring: ["Plain-language risk explanation", "Conservative leverage limits", "Gentle liquidation ladders"],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Requirements",
    stageVariant: "requirements",
    description: "Trading cards encoding real-world qualities and scarcity on-chain. Requirements complete; system design and data pipelines in progress.",
    exploring: ["Asset grading and verification", "On-chain provenance tracking", "Scarcity and edition mechanics"],
    href: "/pipeline/lumina",
  },
  {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research",
    description: "Research into signals that help systems enforce 'one per person' rules without centralizing identity data.",
    exploring: ["Privacy-preserving uniqueness proofs", "Sybil resistance without surveillance", "Minimal identity footprint patterns"],
    href: "/pipeline/uniqueness-engine",
  },
];
