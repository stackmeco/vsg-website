import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const stages = [
  { name: "Idea", description: "A question we think is worth asking." },
  { name: "Requirements", description: "We define what a good answer would look like and what must be true." },
  { name: "Architecture", description: "We design how it could work technically and operationally." },
  { name: "Prototype", description: "We build a minimal version to see where it breaks." },
  { name: "Internal tests", description: "We run it with our own capital under tight limits." },
  { name: "Venture or archive", description: "If it earns long-term trust, it may become a Venture. If not, we write up what we learned." },
];

const projects = [
  {
    name: "Helios",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "Internal BTC-backed strategy engine. Requirements and architecture defined; implementation and early testing are in progress.",
    exploring: [
      "Automated yield strategies with strict risk bounds",
      "Multi-venue position management",
      "Real-time health monitoring and alerts",
    ],
    href: "/pipeline/helios",
  },
  {
    name: "stackme",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "A concept for a borrower-first BTC credit app. Requirements and technical architecture are defined; prototypes and flows are being explored.",
    exploring: [
      "Plain-language risk explanation",
      "Conservative leverage limits",
      "Gentle liquidation ladders",
    ],
    href: "/pipeline/stackme",
  },
  {
    name: "Lumina",
    stage: "Requirements",
    stageVariant: "requirements" as const,
    description: "Trading cards that encode real-world qualities and scarcity on-chain. Requirements are in place; system design and data pipelines are being shaped.",
    exploring: [
      "Asset grading and verification",
      "On-chain provenance tracking",
      "Scarcity and edition mechanics",
    ],
    href: "/pipeline/lumina",
  },
  {
    name: "Uniqueness Engine",
    stage: "Research",
    stageVariant: "research" as const,
    description: "Early research on signals that could help systems enforce 'one per person' type rules without centralizing identity data.",
    exploring: [
      "Privacy-preserving uniqueness proofs",
      "Sybil resistance without surveillance",
      "Minimal identity footprint patterns",
    ],
    href: "/pipeline/uniqueness-engine",
  },
];

export default function Pipeline() {
  return (
    <Layout>
      <PageMeta 
        title="Pipeline" 
        description="Our R&D projects: Helios, stackme, Lumina, and Uniqueness Engine. All self-funded, none public yet." 
      />
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              The Pipeline.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our R&D studio: projects tied to our BTC treasury, moving through defined stages. All self-funded. None public yet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
            How the Pipeline works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stages.map((stage, index) => (
              <Card key={stage.name} className="bg-background border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-mono text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading font-semibold text-foreground">
                      {stage.name}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-9">
                    {stage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
            Current Pipeline projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectTile key={project.name} {...project} />
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See what a graduated project looks like — and why we haven't shipped one yet."
        href="/ventures"
      />
    </Layout>
  );
}
