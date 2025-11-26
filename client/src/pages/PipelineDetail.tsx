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

type StageVariant = "research" | "requirements" | "architecture" | "development" | "prototype" | "testing";

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
}

const projectData: Record<string, ProjectData> = {
  axiom: {
    name: "Axiom",
    stage: "Prototype",
    stageVariant: "prototype",
    tagline: "High-integrity LLM reasoning with enforced citation.",
    description: "Standard LLMs are probabilistic engines—they guess the next word. Axiom is a constraint layer that forces the model to anchor every claim to a cryptographically verified record. It turns 'creative writing' into 'auditable reporting'.",
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
    stage: "Early Development",
    stageVariant: "development",
    tagline: "Internal BTC-backed strategy engine.",
    description: "Helios automates a portion of our borrowing into bounded, rule-driven DeFi positions. It deploys capital with explicit limits and real-time monitoring — internal only.",
    currentState: [
      "Requirements and architecture defined",
      "Core implementation in progress",
      "Internal testing environment being set up",
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
    nextProject: { name: "stackme", href: "/pipeline/stackme" },
  },
  stackme: {
    name: "stackme",
    stage: "Early Development",
    stageVariant: "development",
    tagline: "A borrower-first BTC credit app.",
    description: "stackme is a BTC-backed lending experience designed around clarity, conservative leverage, and plain-language risk disclosure. Architecture and flows in development.",
    currentState: [
      "Requirements defined",
      "Technical architecture designed",
      "User flows and prototypes in development",
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
    stage: "Requirements",
    stageVariant: "requirements",
    tagline: "Trading cards for real-world assets, with quality and scarcity encoded on-chain.",
    description: "Lumina encodes quality and scarcity of real-world assets (art, collectibles) on-chain as trading cards. Requirements defined; system design in progress.",
    currentState: [
      "Requirements complete",
      "System design in progress",
      "Grading and data pipelines being built",
    ],
    exploring: [
      "Asset grading and verification systems",
      "On-chain provenance tracking",
      "Scarcity and edition mechanics",
      "Quality attestation patterns",
    ],
    notYet: [
      "No prototype yet",
      "No cards issued",
      "Not accepting submissions",
    ],
    nextProject: { name: "Uniqueness Engine", href: "/pipeline/uniqueness-engine" },
  },
  "uniqueness-engine": {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research",
    tagline: "Research into 'one-per-person' signals without surveillance.",
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
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
