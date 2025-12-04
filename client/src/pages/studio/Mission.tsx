import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const howWePursue = [
  {
    title: "AI-native, human-governed",
    text: "We assume machine intelligence is in the loop from day one. It handles the mechanics; people keep the mandate, the veto, and the accountability.",
  },
  {
    title: "Balance-sheet-first",
    text: "We wire serious flows through our own capital and operations first, under conservative limits, so we feel the consequences before anyone else does.",
  },
  {
    title: "Non-custodial by design",
    text: "Where capital or identity is involved, we favour architectures where people and institutions keep control of their keys and rights.",
  },
];

const domainMappings = [
  "Truth — infrastructure that makes key decisions inspectable, from grading outputs to model flags.",
  "Capital — infrastructure that lets assets work within guardrails instead of relying on opaque counterparties.",
  "Dignity — infrastructure that lets people prove enough to participate without over-exposure.",
];

export default function Mission() {
  return (
    <Layout>
      <PageMeta 
        title="Mission — We Engineer the Infrastructure of Verifiable Autonomy" 
        description="Our mission is to build rails where flows can be inspected, constrained, and rolled back—by fusing machine intelligence and cryptography, run on our own balance sheet first."
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-testid="text-overline">
              Mission
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              We engineer the infrastructure of verifiable autonomy.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Our mission is to build the rails that let people and systems act with confidence—because the flows they rely on can be inspected, constrained, and, when necessary, rolled back. We do this by fusing machine intelligence and cryptography, and by running every serious pattern on our own balance sheet first.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/ventures">
                <Button size="lg" data-testid="button-explore-ventures">
                  Explore our ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/approach">
                <Button size="lg" variant="outline" data-testid="button-review-approach">
                  Review our approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-we-pursue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-pursue">
              How we pursue this mission
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-pursue-intro">
              We treat "infrastructure of verifiable autonomy" as a job description, not a slogan. It shapes who we hire, which ideas become ventures, and how we respond when systems behave in unexpected ways.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWePursue.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-pursue-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-domain-mappings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-domain-mappings">
              How it maps to Truth, Capital, and Dignity
            </h2>
            <ul className="space-y-4 mb-8">
              {domainMappings.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-domain-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/80 leading-relaxed" data-testid="text-mission-disclaimer">
              This mission describes how we build and operate systems. It does not offer or imply any guarantees of performance or outcomes.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="Explore how the mission shows up in specific ventures inside VSG."
        href="/ventures"
      />
    </Layout>
  );
}
