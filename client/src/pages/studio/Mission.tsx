import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Shield, Cog, Cpu, Lock, GitBranch } from "lucide-react";

const pillarsInPractice = [
  {
    name: "Validate Signal",
    project: "Axiom",
    description: "AI-powered news verification that separates signal from noise in real-time.",
    icon: <Eye className="w-5 h-5" />,
    href: "/ventures/axiom",
  },
  {
    name: "Preserve Value",
    project: "Helios",
    description: "Non-custodial treasury management for individuals and small operators.",
    icon: <Shield className="w-5 h-5" />,
    href: "/ventures/helios",
  },
  {
    name: "Protect Identity",
    project: "Uniqueness Engine",
    description: "Sybil-resistant identity verification without surveillance.",
    icon: <Cog className="w-5 h-5" />,
    href: "/ventures/uniqueness",
  },
];

const executionPrinciples = [
  {
    name: "AI-Native",
    description: "Every tool we build assumes AI as a core capability, not an add-on. We design for human-AI collaboration from the start.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    name: "Non-Custodial",
    description: "We never hold user funds or control user assets. Our systems are designed so users maintain full sovereignty.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    name: "Five-Stage Process",
    description: "Every venture moves through Strategic Definition, Rapid Validation, Verified Build, Controlled Deployment, and Data-Driven Evolution—with clear gates between each stage.",
    icon: <GitBranch className="w-5 h-5" />,
  },
];

export default function Mission() {
  return (
    <Layout>
      <PageMeta 
        title="Our Mission" 
        description="What we do every day. Building governed rails for identity, treasury, and liquidity using AI-native, non-custodial infrastructure."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-block text-sm font-mono uppercase tracking-widest text-primary mb-4" data-testid="text-category">
            Studio
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6" data-testid="text-page-title">
            Our Mission
          </h1>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed" data-testid="text-tldr">
            Build governed rails for identity, treasury, and liquidity.
          </p>
        </div>
      </section>

      {/* What We Do Now */}
      <section className="py-16 sm:py-20" data-testid="section-what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            What we do now
          </p>
          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed mb-4">
              We operate as a two-founder R&D studio. No outside investors. No board. Just two people building the infrastructure they wish existed.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every venture is funded with our own capital and stress-tested on our own treasury before we deploy it for others. This keeps our incentives aligned with our users.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars in Practice */}
      <section className="py-16 sm:py-20 bg-card" data-testid="section-pillars-practice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Three pillars in practice
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            Each pillar has a flagship venture
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pillarsInPractice.map((pillar) => (
              <Card 
                key={pillar.name} 
                className="bg-background border-border hover:border-primary/30 transition-colors h-full"
                data-testid={`card-pillar-${pillar.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {pillar.icon}
                  </div>
                  <p className="text-sm font-mono uppercase tracking-widest text-primary mb-1">
                    {pillar.name}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {pillar.project}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {pillar.description}
                  </p>
                  <Link href={pillar.href} data-testid={`link-venture-${pillar.project.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80" data-testid={`button-venture-${pillar.project.toLowerCase().replace(/\s+/g, "-")}`}>
                      Explore {pillar.project} <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Execute */}
      <section className="py-16 sm:py-20" data-testid="section-how-execute">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            How we execute
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            Execution principles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {executionPrinciples.map((principle) => (
              <Card 
                key={principle.name} 
                className="bg-card border-border"
                data-testid={`card-execution-${principle.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                    {principle.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
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
