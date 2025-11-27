export type StageVariant = "research" | "specification" | "architecture" | "prototype" | "internal" | "production";

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
    name: "Axiom",
    stage: "Prototype",
    stageVariant: "prototype",
    description: "A deterministic inference layer designed to eliminate hallucination. It forces LLMs to cite verified internal data structures before generating output.",
    exploring: ["Retrieval-Augmented Generation (RAG) with strict citation enforcement", "Adversarial testing against known logic traps", "Mechanistic interpretability (tracing 'why' the model said X)"],
    href: "/pipeline/axiom",
  },
  {
    name: "Helios",
    stage: "Internal Alpha",
    stageVariant: "internal",
    description: "Internal BTC-backed strategy engine. Architecture defined; implementation and dogfooding in progress.",
    exploring: ["Automated yield strategies with strict risk bounds", "Multi-venue position management", "Real-time health monitoring"],
    href: "/pipeline/helios",
  },
  {
    name: "Stackme",
    stage: "Architecture",
    stageVariant: "architecture",
    description: "A borrower-first BTC credit app. Technical architecture defined; verified build phase in progress.",
    exploring: ["Plain-language risk explanation", "Conservative leverage limits", "Gentle liquidation ladders"],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Specification",
    stageVariant: "specification",
    description: "Digital bearer instruments for physical assets. Features a proprietary optical physics engine for anti-spoofing and surface topology verification.",
    exploring: ["Photometric stereo for anti-spoofing", "Real-time material analysis on edge devices", "On-chain provenance tracking"],
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
