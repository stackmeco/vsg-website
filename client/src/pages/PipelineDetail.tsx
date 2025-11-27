import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
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
    tagline: "High-integrity LLM reasoning with enforced citation.",
    description: "Standard LLMs are probabilistic engines—they guess the next word. Axiom is a constraint layer that forces the model to anchor every claim to a cryptographically verified record. It turns 'creative writing' into 'auditable reporting'.",
    texture: axiomTexture,
    currentState: [
      "Core RAG architecture functional",
      "Citation enforcement layer active (refuses to answer without source)",
      "Internal dogfooding for VSG research summaries",
    ],
    exploring: [
      "Automated fact-checking loops",
      "Connecting the 'Truth' layer (Axiom) to the 'Value' layer (Helios)",
      "Latency optimization for real-time verification",
    ],
    notYet: [
      "No public API",
      "Not a general-purpose chatbot",
      "Restricted domain knowledge only",
    ],
    nextProject: { name: "Helios", href: "/pipeline/helios" },
  },
  helios: {
    name: "Helios",
    stage: "Internal Alpha",
    stageVariant: "internal",
    tagline: "Internal BTC-backed strategy engine.",
    description: "Helios automates a portion of our borrowing into bounded, rule-driven DeFi positions. It deploys capital with explicit limits and real-time monitoring — internal only.",
    currentState: [
      "Architecture and specification complete",
      "Core implementation in progress",
      "Internal dogfooding underway",
    ],
    exploring: [
      "Automated yield strategies with strict risk bounds",
      "Multi-venue position management",
      "Real-time health monitoring and alerts",
      "Policy ladders for different risk profiles",
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
    tagline: "A borrower-first BTC credit app.",
    description: "Stackme is a BTC-backed lending experience designed around clarity, conservative leverage, and plain-language risk disclosure. Technical architecture defined; verified build phase in progress.",
    currentState: [
      "Requirements complete",
      "Technical architecture defined",
      "Verified build phase in progress",
    ],
    exploring: [
      "Plain-language risk explanation",
      "Conservative LTV limits (no extreme leverage)",
      "Gentle liquidation ladders",
      "Clear health indicators",
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
    description: "Lumina links high-value physical inventory to on-chain rails. We are architecting a proprietary optical physics engine that utilizes smartphone cameras to verify surface topology and material response, ensuring the digital asset is anchored to a proven physical reality.",
    texture: luminaTexture,
    currentState: [
      "Specification complete",
      "System design in progress",
      "Optical verification pipeline being built",
    ],
    exploring: [
      "Photometric stereo for anti-spoofing",
      "Real-time material analysis on edge devices",
      "On-chain provenance tracking",
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
    tagline: "Sybil-resistance signals without biometric surveillance.",
    description: "Uniqueness Engine is research into signals that help systems enforce 'one per person' rules without centralizing identity data or enabling surveillance.",
    currentState: [
      "Research and requirements phase",
      "Surveying existing approaches",
      "Defining success criteria",
    ],
    exploring: [
      "Privacy-preserving uniqueness proofs",
      "Sybil resistance patterns",
      "Minimal identity footprint approaches",
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

  return (
    <Layout>
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-hero">
        {/* Project-specific texture background */}
        {project.texture && (
          <>
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${project.texture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.1,
                filter: "grayscale(100%) contrast(120%)",
              }}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/50" />
          </>
        )}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/pipeline">Pipeline</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground">
              {project.name}
            </h1>
            <StageChip stage={project.stage} variant={project.stageVariant} />
          </div>
          <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-current-state">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
            Where it is now
          </h2>
          <ul className="space-y-3 max-w-2xl">
            {project.currentState.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20" data-testid="section-exploring">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                What we're exploring
              </h2>
              <ul className="space-y-3">
                {project.exploring.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                What's not happening yet
              </h2>
              <Card className="bg-card border-card-border">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {project.notYet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
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
    </Layout>
  );
}
