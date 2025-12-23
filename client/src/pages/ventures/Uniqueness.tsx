import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X, Lock } from "lucide-react";

const currentState = [
  "Architecture and protocol design complete",
  "Privacy-preserving proof systems in development",
  "Integration patterns defined",
  "Sybil-resistance mechanisms validated",
];

const exploring = [
  "Zero-knowledge proofs for presence verification",
  "Cross-platform uniqueness coordination",
  "Credential issuance without data pooling",
  "Decentralized identity binding",
];

const notYet = [
  "Public API access",
  "Credential issuance",
  "Biometric data collection",
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine | Personhood Without Surveillance"
        description="Prove you're a unique human without exposing your identity. Privacy-preserving proof of personhood for the AI age."
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
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Control Layer</p>
                <Badge variant="outline" className="text-xs mt-1">In Development</Badge>
              </div>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine
            </h1>
            <p className="text-xl text-foreground font-medium mb-4">
              Personhood without surveillance.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Prove you're a unique human without exposing your identity. The Uniqueness Engine is privacy-preserving identity infrastructure for the AI age. Sybil-resistant participation while keeping dignity and control intact. Your keys. Your data. Your rules.
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
              "Your keys. Your data. Your agents. Your rules."
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
              <Link href="/ventures">
                All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/connect">
                Get in Touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Products"
        description="See all infrastructure products across Verification, Capital, and Control."
        href="/ventures"
      />
    </Layout>
  );
}
