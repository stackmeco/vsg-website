import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, CheckCircle } from "lucide-react";
import { purposeRulesOut, purposeHeuristics } from "@/data/studio";

export default function Purpose() {
  return (
    <Layout>
      <PageMeta 
        title="Our Purpose" 
        description="Why VSG exists. To democratize institutional-grade leverage and build tools that restore power to individuals."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-4 block" data-testid="text-category">
            Studio
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6" data-testid="text-page-title">
            Our Purpose
          </h1>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed" data-testid="text-tldr">
            To democratize institutional-grade leverage.
          </p>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-20" data-testid="section-why">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Why this exists
          </p>
          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed mb-4">
              The financial system is built for institutions. Banks, funds, and corporations have access to tools that individuals don't—leverage, liquidity, and verification systems that compound their advantages.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We exist to flip that equation. To build the infrastructure that gives individuals the same financial power as the institutions that have historically excluded them.
            </p>
          </div>
        </div>
      </section>

      {/* What This Rules Out */}
      <section className="py-20 bg-card" data-testid="section-rules-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            What this purpose rules out
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            Clear boundaries shape better decisions
          </h2>
          
          <div className="max-w-3xl">
            <ul className="space-y-4">
              {purposeRulesOut.map((rule, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`rule-out-${index}`}
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Guides Decisions */}
      <section className="py-20" data-testid="section-heuristics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            How it guides decisions
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            Decision heuristics
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {purposeHeuristics.map((heuristic, index) => (
              <Card 
                key={index} 
                className="bg-card border-border"
                data-testid={`heuristic-${index}`}
              >
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground leading-relaxed">{heuristic}</span>
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
