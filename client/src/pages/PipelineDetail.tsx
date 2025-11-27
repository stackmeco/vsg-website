import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { StageChip } from "@/components/StageChip";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import type { StageVariant } from "@/data/projects";
import gridTexture from "@assets/grid_texture.png";
import axiomTexture from "@assets/axiom_cube.png";
import luminaTexture from "@assets/lumina_lens.png";

interface ProjectData {
  name: string;
  stage: string;
  stageVariant: StageVariant;
  tagline: string;
  description: string;
  currentState: string[];
  exploring: string[];
  notYet: string[];
  nextProject?: { name: string; href: string };
  texture?: string;
}

const projectData: Record<string, ProjectData> = {
  axiom: {
    name: "Axiom",
    stage: "Research",
    stageVariant: "research",
    tagline: "Deterministic inference with enforced citation.",
    description: "Standard LLMs are probabilistic engines—predicting the next token. Axiom is a constraint layer that forces the model to anchor every claim to a cryptographically verified record. Transforms probabilistic generation into deterministic, cited reporting.",
    texture: axiomTexture,
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
    nextProject: { name: "Helios", href: "/pipeline/helios" },
  },
  helios: {
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
    nextProject: { name: "Stackme", href: "/pipeline/stackme" },
  },
  stackme: {
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
    nextProject: { name: "Lumina", href: "/pipeline/lumina" },
  },
  lumina: {
    name: "Lumina",
    stage: "Specification",
    stageVariant: "specification",
    tagline: "Digital bearer instruments for physical assets.",
    description: "Lumina links high-value physical inventory to on-chain rails via a proprietary optical physics engine. Verifies surface topology and material response, anchoring digital instruments to proven physical reality.",
    texture: luminaTexture,
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
    nextProject: { name: "Uniqueness Engine", href: "/pipeline/uniqueness-engine" },
  },
  "uniqueness-engine": {
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
};

export default function PipelineDetail() {
  const [, params] = useRoute("/pipeline/:slug");
  const slug = params?.slug || "";
  const project = projectData[slug];

  if (!project) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
            Project not found
          </h1>
          <Link href="/pipeline">
            <Button variant="outline">Back to Pipeline</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const heroTexture = project.texture || gridTexture;

  return (
    <Layout>
      <PageMeta
        title={`${project.name} | Pipeline`}
        description={project.description}
      />
      {/* THE HUD - Header Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden border-b border-border" data-testid="section-hero">
        {/* LAYER 1: Base Background */}
        <div className="absolute inset-0 bg-background" />

        {/* LAYER 2: Grid/Project Texture */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "grayscale(100%) contrast(120%)",
          }}
        />

        {/* LAYER 3: Vignette Gradients */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/50" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1" data-testid="breadcrumb-home">
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/pipeline" data-testid="breadcrumb-pipeline">Pipeline</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title + Status Chip (Inline) */}
          <div className="flex flex-wrap items-center gap-4 mb-4" data-testid="project-header">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground" data-testid="text-project-name">
              {project.name}
            </h1>
            <StageChip stage={project.stage} variant={project.stageVariant} />
          </div>

          {/* Tagline */}
          <p className="text-lg text-primary font-medium mb-3">{project.tagline}</p>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* THE BENTO GRID - Technical Specification Sheet */}
      <section className="py-12" data-testid="section-spec-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT COLUMN: Active System State (Span 2) */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Panel 1: Current State */}
              <Card className="bg-card border-card-border" data-testid="card-system-status">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    System Status
                  </h3>
                  <ul className="space-y-3" data-testid="list-current-state">
                    {project.currentState.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`item-current-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Panel 2: Active R&D */}
              <Card className="bg-card border-card-border" data-testid="card-active-rd">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">
                    Active R&D Modules
                  </h3>
                  <ul className="space-y-3" data-testid="list-exploring">
                    {project.exploring.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`item-exploring-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN: Operational Constraints (Span 1) */}
            <div className="lg:col-span-1">
              <Card className="h-full border-destructive/20 bg-destructive/5" data-testid="card-constraints">
                <CardContent className="p-6">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-destructive/80 mb-4">
                    Negative Constraints
                  </h3>
                  <ul className="space-y-3" data-testid="list-not-yet">
                    {project.notYet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground" data-testid={`item-constraint-${index}`}>
                        <span className="w-1.5 h-1.5 rounded-[1px] bg-destructive/50 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <div className="mt-12">
        {project.nextProject ? (
          <NextStepBlock
            nextPage={project.nextProject.name}
            description={`Continue exploring the Pipeline.`}
            href={project.nextProject.href}
          />
        ) : (
          <NextStepBlock
            nextPage="Governance"
            description="See how we govern risk, treasury, and compliance."
            href="/governance"
          />
        )}
      </div>
    </Layout>
  );
}
