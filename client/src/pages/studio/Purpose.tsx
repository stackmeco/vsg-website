import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import { purposeRulesOut, purposeHeuristics } from "@/data/studio";

export default function Purpose() {
  return (
    <Layout>
      <PageMeta 
        title="Our Purpose" 
        description="Why VSG exists. To democratize institutional-grade leverage and build tools that restore power to individuals."
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
              Our Purpose
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              To democratize institutional-grade leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20 bg-card" data-testid="section-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Why this exists
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              The Problem We Solve
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              The financial system is built for institutions. Banks, funds, and corporations have access to tools that individuals don't—leverage, liquidity, and verification systems that compound their advantages.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We exist to flip that equation. To build the infrastructure that gives individuals the same financial power as the institutions that have historically excluded them.
            </p>
          </div>
        </div>
      </section>

      {/* What This Rules Out */}
      <section className="py-20" data-testid="section-rules-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              What this purpose rules out
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Clear Boundaries
            </h2>
          </div>
          
          <div className="max-w-3xl space-y-3">
            {purposeRulesOut.map((rule, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3"
                data-testid={`text-rule-${index}`}
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Guides Decisions */}
      <section className="py-20 bg-card" data-testid="section-heuristics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              How it guides decisions
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Decision Heuristics
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {purposeHeuristics.map((heuristic, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-heuristic-${index}`}
              >
                <CardContent className="p-6 flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{heuristic}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        label="Next"
        nextPage="Our Vision"
        description="Where we're heading. The future we're building toward."
        href="/studio/vision"
      />
    </Layout>
  );
}
