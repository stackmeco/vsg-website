import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { ValueCard } from "@/components/ValueCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Shield, Cog, Cpu, Lock, GitBranch } from "lucide-react";
import { pillarsInPractice, executionPrinciples } from "@/data/studio";

const pillarIcons: Record<string, JSX.Element> = {
  "validate-signal": <Eye className="w-5 h-5" />,
  "preserve-value": <Shield className="w-5 h-5" />,
  "protect-identity": <Cog className="w-5 h-5" />,
};

const executionIcons: Record<string, JSX.Element> = {
  "ai-native": <Cpu className="w-5 h-5" />,
  "non-custodial": <Lock className="w-5 h-5" />,
  "five-stage": <GitBranch className="w-5 h-5" />,
};

export default function Mission() {
  return (
    <Layout>
      <PageMeta 
        title="Our Mission" 
        description="What we do every day. Building governed rails for identity, treasury, and liquidity using AI-native, non-custodial infrastructure."
        preloadImage="/hero-texture.png"
      />
      
      {/* Hero Section */}
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
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-6">
              Studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6">
              Our Mission
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              Build governed rails for identity, treasury, and liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Now */}
      <section className="py-20 bg-card" data-testid="section-what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              What we do now
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              The Daily Work
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We operate as a two-founder R&D studio. No outside investors. No board. Just two people building the infrastructure they wish existed.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every venture is funded with our own capital and stress-tested on our own treasury before we deploy it for others. This keeps our incentives aligned with our users.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars in Practice */}
      <section className="py-20" data-testid="section-pillars-practice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Three pillars in practice
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Flagship Ventures
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pillarsInPractice.map((pillar) => (
              <Card 
                key={pillar.id} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-venture-${pillar.project.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex items-start gap-3 mb-3 h-8">
                    {pillarIcons[pillar.id]}
                    <p className="text-sm font-mono uppercase tracking-widest text-primary">
                      {pillar.name}
                    </p>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {pillar.project}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <Link href={pillar.href}>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="p-0 h-auto text-primary hover:text-primary/80 gap-1"
                      data-testid={`button-explore-${pillar.project.toLowerCase()}`}
                    >
                      Explore {pillar.project} <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Execute */}
      <section className="py-20 bg-card" data-testid="section-how-execute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              How we execute
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Execution Principles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {executionPrinciples.map((principle) => (
              <ValueCard
                key={principle.id}
                title={principle.name}
                description={principle.description}
                icon={executionIcons[principle.id]}
              />
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        label="Next"
        nextPage="Our Ventures"
        description="See what we're building across all three pillars."
        href="/ventures"
      />
    </Layout>
  );
}
