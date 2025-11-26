import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ProjectTile } from "@/components/ProjectTile";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";

const stages = [
  { 
    name: "Strategic Definition", 
    focus: "Alignment & ROI",
    description: "We start with the problem, not the code. Before development begins, we verify the 'Why.' We define clear, measurable objectives for every project, ensuring every hour of engineering time translates directly to business value." 
  },
  { 
    name: "Rapid Validation", 
    focus: "Risk Mitigation",
    description: "We prove the concept early. Risk is best managed before the build. We utilize rapid prototyping and user modeling to validate assumptions immediately — saving time and resources for the features that truly matter." 
  },
  { 
    name: "The Verified Build", 
    focus: "Security & Stability",
    description: "Engineering with automated safeguards. We build in iterative cycles with continuous verification. Automated testing suites check system integrity throughout development, so stability and security are foundational." 
  },
  { 
    name: "Controlled Deployment", 
    focus: "Reliability",
    description: "We aim for zero-downtime with staged rollouts. No 'big bang' releases. Features deploy incrementally, validated under real-world loads before full release." 
  },
  { 
    name: "Data-Driven Evolution", 
    focus: "Continuous Improvement",
    description: "Launch is the starting point. Once live, we monitor performance and user interactions, continuously refining based on real data." 
  },
];

const projects = [
  {
    name: "Helios",
    stage: "Early Development",
    stageVariant: "development" as const,
    description: "Internal BTC-backed strategy engine. Requirements and architecture defined; implementation and early testing in progress.",
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
    description: "A borrower-first BTC credit app. Requirements and technical architecture defined; prototypes and flows in development.",
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
    description: "Trading cards encoding real-world qualities and scarcity on-chain. Requirements complete; system design and data pipelines in progress.",
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
    description: "Research into signals that help systems enforce 'one per person' rules without centralizing identity data.",
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
      <section className="py-20 lg:py-28 relative" data-testid="section-hero">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              The Pipeline
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our R&D projects, tied to our BTC treasury, moving through defined stages. All self-funded. None public yet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Our R&D process
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              How we verify value at every step
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We treat software development as a rigorous discipline. Our process is designed to surface risk early and build systems designed for stability and security.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <Card key={stage.name} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl sm:text-2xl font-mono text-primary font-bold leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">
                        {stage.name}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-primary">
                        {stage.focus}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
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
        nextPage="Governance"
        description="See how we manage risk, treasury, and compliance."
        href="/governance"
      />
    </Layout>
  );
}
