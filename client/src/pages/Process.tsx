import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { StepCard } from "@/components/StepCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Layers, Hash } from "lucide-react";
import gearsTexture from "@assets/gears_texture.png";

const definitions = [
  {
    term: "Verifiable Systems",
    definition: "Infrastructure that is fully auditable. No black boxes. The rules are visible, the risk is defined, and the outcome is mathematically provable.",
  },
  {
    term: "Deterministic AI",
    definition: "Artificial Intelligence that follows rules instead of guessing. It anchors every output to a verified data source, eliminating hallucination.",
  },
  {
    term: "Digital Bearer Assets",
    definition: "Assets you truly own, not just IOUs. They can move freely across the internet instantly, without needing permission from a bank or platform.",
  },
];

const stages = [
  { 
    name: "Strategic Definition", 
    focus: "Why before How",
    description: "We start with the problem, not the technology. Before any code is written, we validate the business case and define measurable success criteria." 
  },
  { 
    name: "Rapid Validation", 
    focus: "Risk Reduction",
    description: "Prove viability before building. We use rapid prototyping to test assumptions early—reducing the cost of failure and focusing resources on what works." 
  },
  { 
    name: "Verified Build", 
    focus: "Security First",
    description: "Engineering with continuous checks. Automated testing verifies system integrity throughout the build, making security and stability foundational, not afterthoughts." 
  },
  { 
    name: "Controlled Deployment", 
    focus: "Incremental Release",
    description: "No big-bang releases. Features roll out in stages, validated under real-world conditions before reaching all users." 
  },
  { 
    name: "Continuous Evolution", 
    focus: "Data-Driven Iteration",
    description: "Launch is the beginning. We monitor performance and refine continuously based on real usage data." 
  },
];


export default function Process() {
  return (
    <Layout>
      <PageMeta 
        title="Process" 
        description="How we operate: our R&D process, Bitcoin treasury strategy, and the principles that govern our development lifecycle." 
      />
      <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(/hero-texture.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6">
              Own The Engine.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              We are pilots, not passengers. We require deep financial fluency and a first-principles understanding of how value is created, stored, and protected.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              R&D Process
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              From Idea to Impact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every venture moves through a validated development process. This structure surfaces risk early and ensures we build systems designed for long-term stability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <StepCard
                key={stage.name}
                number={index + 1}
                title={stage.name}
                description={stage.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-definitions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              System Primitives
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Core Concepts
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {definitions.map((def, index) => {
              const icons = [Terminal, Layers, Hash];
              const Icon = icons[index % icons.length];
              return (
                <Card key={def.term} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-heading font-semibold text-foreground">{def.term}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{def.definition}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" data-testid="section-treasury">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gearsTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Capital strategy
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6">
              Powered by Bitcoin
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our treasury is built on Bitcoin. When conditions are favorable, we borrow against a portion of our holdings using trusted, non-custodial lending venues. The proceeds either:
            </p>
            <ul className="space-y-3 mb-6 text-base">
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Fund development and infrastructure for our ventures, or
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Allow strategic Bitcoin accumulation during market downturns.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground italic">
              This is an internal program. We do not manage external capital or offer yield products.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See our active projects and their current development status."
        href="/ventures"
      />
    </Layout>
  );
}
