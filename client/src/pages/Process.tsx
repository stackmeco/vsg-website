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
    definition: "Systems where critical behaviours can be inspected and, where it matters, formally or empirically proven. Capital flows, access controls, and decision paths must be observable—not hidden inside opaque services.",
  },
  {
    term: "Deterministic AI",
    definition: "AI that behaves like infrastructure, not a slot machine. Narrow in scope, grounded in governed data, and constrained to repeatable, auditable outputs instead of open-ended guesswork.",
  },
  {
    term: "Non-custodial Rails",
    definition: "Financial and identity rails where institutions and individuals retain control of keys and governance. Our systems orchestrate workflows and verification; they do not take custody of customer assets.",
  },
];

const stages = [
  {
    name: "Define",
    focus: "Strategy & Alignment",
    description: "Clarify the problem, constraints, and regulatory surface so we know exactly who we serve, what is at stake, and when the venture should not exist.",
  },
  {
    name: "Validate",
    focus: "Risk & Signal",
    description: "Run small, low-risk experiments to test the core assumptions first, using models, prototypes, and controlled simulations instead of full production builds.",
  },
  {
    name: "Build",
    focus: "Security & Quality",
    description: "Engineer in short, verifiable increments with automated checks, threat modelling, and failure paths designed in from the start so every change is explainable.",
  },
  {
    name: "Deploy",
    focus: "Governed Launch",
    description: "Release into a controlled environment with clear guardrails, observability, and rollback so launch behaves like a structured experiment, not a cliff jump.",
  },
  {
    name: "Evolve",
    focus: "Data & Optimization",
    description: "Use live telemetry, behaviour, and incidents to refine the system so ventures either mature into durable infrastructure or are retired with clean exits.",
  },
  {
    name: "Recurse",
    focus: "Institutional Memory",
    description: "Treat anomalies and failures as high-value signals by running structured post-mortems and feeding the lessons back into our standards and pipeline.",
  },
];


export default function Process() {
  return (
    <Layout>
      <PageMeta 
        title="Process" 
        description="How Verifiable Systems Group moves ventures from concept to governed, verifiable systems using a six-stage, Bitcoin-backed R&D process."
        preloadImage="/hero-texture.png"
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              How ventures move inside VSG
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              A six-stage runway for verifiable ventures.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every venture at VSG follows the same six-stage path. We define and validate the problem, build and deploy under tight controls, then evolve and recurse based on real signals so risk is surfaced early and knowledge compounds instead of resetting with each project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
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
          <p className="text-sm text-muted-foreground mt-6">
            Ventures do not "graduate" by default. After moving through all six stages, they are either adopted as durable infrastructure, wrapped in ongoing governance, or archived with their lessons integrated into our standards and research backlog.
          </p>
        </div>
      </section>

      <section className="py-20" data-testid="section-definitions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
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
                <Card key={def.term} className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical">
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex items-start gap-3 mb-3 h-8">
                      <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <h3 className="font-heading font-semibold text-foreground">{def.term}</h3>
                    </div>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{def.definition}</p>
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Capital Strategy
            </p>
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-foreground mb-6">
              Bitcoin as long-term reserve, not a trading thesis.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Bitcoin is our primary long-term reserve asset. When appropriate, we selectively borrow against it under conservative limits to fund research, infrastructure, and security work so we can keep long-term exposure while still shipping useful systems in the present.
            </p>
            <ul className="space-y-3 mb-6 text-base">
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Fund deep research, security reviews, and shared infrastructure across our ventures.
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Maintain an operating runway that is less exposed to short-term revenue volatility.
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Absorb shocks so individual ventures can be evaluated on their merits, not on market noise.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground italic">
              This is an internal treasury program. We do not pool client funds, manage outside capital, or offer yield products.
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
