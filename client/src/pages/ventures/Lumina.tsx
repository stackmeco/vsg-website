import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X, Shield } from "lucide-react";

const currentState = [
  "Core verification architecture complete",
  "Source-backed response system in development",
  "Cryptographic proof generation defined",
  "Integration APIs specified",
];

const exploring = [
  "Multi-model verification",
  "Real-time source validation",
  "Proof aggregation systems",
  "Enterprise integration patterns",
];

const notYet = [
  "Public API access",
  "Consumer products",
  "Model training services",
];

// Note: This file is named Lumina.tsx for backwards compatibility
// but now displays Axiom content per the brand document
export default function Axiom() {
  return (
    <Layout>
      <PageMeta
        title="Axiom | Deterministic AI with Proof"
        description="Force AI to show its work. Cryptographic proof that outputs are accurate, sources are real, and responses are deterministic."
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Verification Layer</p>
                <Badge variant="outline" className="text-xs mt-1">In Development</Badge>
              </div>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Axiom
            </h1>
            <p className="text-xl text-foreground font-medium mb-4">
              Deterministic AI with cryptographic proof.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Force AI to show its work. Axiom is verification infrastructure for AI outputs. Cryptographic proof that responses are accurate, sources are real, and outputs are deterministic. No more hallucinations. No more "trust me."
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-get-updates">
                <Link href="/connect">
                  Get Updates
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-all-products">
                <Link href="/ventures">
                  All Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Principle */}
      <section className="py-16 bg-card" data-testid="section-principle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">The Principle</p>
            <p className="text-xl text-foreground font-medium italic">
              "If it can't be proven, it can't be trusted. If it can be proven, trust becomes irrelevant."
            </p>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="py-20" data-testid="section-status">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Current State
                </h3>
                <ul className="space-y-3">
                  {currentState.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Exploring
                </h3>
                <ul className="space-y-3">
                  {exploring.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Not Yet
                </h3>
                <ul className="space-y-3">
                  {notYet.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/ventures/uniqueness">
                Next: Uniqueness Engine
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/ventures">
                All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Uniqueness Engine"
        description="Personhood without surveillance. Privacy-preserving proof of identity."
        href="/ventures/uniqueness"
      />
    </Layout>
  );
}
