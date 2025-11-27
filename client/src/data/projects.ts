import type { StageVariant } from "@/components/StageChip";
export type { StageVariant };

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
    stage: "Research",
    stageVariant: "research",
    description: "A deterministic inference layer designed to eliminate hallucination. Forces LLMs to anchor outputs to verified internal data structures.",
    exploring: ["RAG with strict citation enforcement", "Adversarial logic traps", "Mechanistic interpretability"],
    href: "/pipeline/axiom",
  },
  {
    name: "Helios",
    stage: "Internal Alpha",
    stageVariant: "internal",
    description: "Internal BTC-backed strategy engine. Automates treasury operations within bounded risk parameters.",
    exploring: ["Automated yield strategies", "Multi-venue position management", "Real-time solvency monitoring"],
    href: "/pipeline/helios",
  },
  {
    name: "Stackme",
    stage: "Architecture",
    stageVariant: "architecture",
    description: "Protocol-native BTC lending interface. Designed for clarity, conservative leverage, and graduated liquidation mechanics.",
    exploring: ["Risk visualization", "Conservative LTV limits", "Graduated liquidation tranches"],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Specification",
    stageVariant: "specification",
    description: "Digital bearer instruments for physical assets. Features a proprietary optical physics engine for anti-spoofing and topology verification.",
    exploring: ["Photometric stereo scanning", "Edge-compute material analysis", "On-chain provenance"],
    href: "/pipeline/lumina",
  },
  {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research",
    description: "Sybil-resistance signals that enforce uniqueness constraints without biometric surveillance or centralized identity data.",
    exploring: ["Zero-Knowledge uniqueness proofs", "Cost-of-forgery signals", "Minimal footprint identity"],
    href: "/pipeline/uniqueness-engine",
  },
];
