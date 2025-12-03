import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Key, FlaskConical } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    name: "Verifiable Systems",
    tagline: "If you cannot inspect it, you cannot trust it.",
    description:
      "Every critical behavior must be observable and, where it matters, formally or empirically provable. Capital flows, access controls, and decision paths are exposed for audit, not hidden behind opaque APIs or black-box models.",
    implications: [
      "No hidden state changes affecting user assets",
      "All decision logic is documented and reviewable",
      "Audit trails are first-class, not afterthoughts",
      "Proofs over promises, data over claims",
    ],
  },
  {
    icon: Key,
    name: "Non-custodial Rails",
    tagline: "Your keys, your control.",
    description:
      "Institutions and individuals retain custody of their assets and keys. Our systems orchestrate verification, workflows, and interfaces; they do not hold customer funds or private material.",
    implications: [
      "No pooling of client assets under our control",
      "User-held keys for all sensitive operations",
      "Transparent lending terms when borrowing exists",
      "Regulatory clarity through clear custody boundaries",
    ],
  },
  {
    icon: FlaskConical,
    name: "Governed Experiments",
    tagline: "Innovation with guardrails.",
    description:
      "Every venture starts as a constrained experiment with explicit limits, exit criteria, and failure paths designed in from day one. We design for clean shutdown, not hidden blast radius.",
    implications: [
      "Explicit risk limits on every project stage",
      "Pre-defined exit triggers, not panic decisions",
      "Lessons are captured and fed back into standards",
      "Commercial appeal does not override safety",
    ],
  },
];

export default function Pillars() {
  return (
    <Layout>
      <PageMeta
        title="Pillars"
        description="The foundational principles that guide every decision at VSG: verifiable systems, non-custodial rails, and governed experiments."
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
              Foundational Principles
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              The pillars that define what we build and what we refuse.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Pillars are not aspirations. They are hard constraints. They define what "acceptable" looks like and draw bright lines we will not cross, even when crossing them looks commercially attractive.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Core Pillars
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground">
              Three principles, no exceptions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.name}
                  className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-pillar-${pillar.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{pillar.name}</h3>
                        <p className="text-sm text-primary italic">{pillar.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>
                    <ul className="mt-auto space-y-2">
                      {pillar.implications.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-2 text-sm text-foreground"
                          data-testid={`text-implication-${pillar.name.toLowerCase().replace(/\s+/g, "-")}-${index}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-application">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Application
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              How pillars shape decisions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Pillars are applied at every decision point: whether to start a venture, how to architect a system, and when to say no. They are the first filter, not the last.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-application-accept">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">We accept ideas that</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2" data-testid="text-accept-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Can be built with verifiable, auditable logic
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-accept-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Respect user custody and key control
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-accept-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Can fail cleanly without hidden contagion
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-application-reject">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">We reject ideas that</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2" data-testid="text-reject-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      Require opaque or unverifiable systems
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-reject-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      Pool or custodize client assets
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-reject-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      Cannot define clear exit or failure paths
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See how ventures move through our six-stage development process."
        href="/approach/process"
      />
    </Layout>
  );
}
