import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Coins, Lock, AlertTriangle, Eye, Zap, Ban } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

const threePillars = [
  {
    label: "Verification",
    icon: Shield,
    tagline: "Prove it, or it didn't happen.",
    text: "If it can't be proven, it can't be trusted. If it can be proven, trust becomes irrelevant. We build infrastructure that forces AI to show its work—cryptographic proof that outputs are accurate, sources are real, and agents did what they claimed.",
  },
  {
    label: "Capital",
    icon: Coins,
    tagline: "Your wealth, working—without leaving your control.",
    text: "Access without custody. Leverage without liquidation. Defense without compromise. We build non-custodial infrastructure for capital efficiency—borrow against your assets without selling them, execute at HFT speed with DeFi security.",
  },
  {
    label: "Control",
    icon: Lock,
    tagline: "Autonomy isn't optional.",
    text: "Your keys. Your data. Your agents. Your rules. We build systems that keep you in control—of your identity, your capital, and the agents acting on your behalf. Privacy-preserving verification. Non-custodial architecture.",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "AI Hallucinates",
    text: "Models generate confident but false information. No cryptographic proof. No source verification. No accountability.",
  },
  {
    icon: Eye,
    title: "Custodians Fail",
    text: "FTX. Celsius. Mt. Gox. Billions lost because users trusted intermediaries to hold their assets.",
  },
  {
    icon: Zap,
    title: "Agents Act Blindly",
    text: "Autonomous systems make decisions without oversight. Who controls them? Who's accountable when they fail?",
  },
  {
    icon: Ban,
    title: "Trust is Taxed",
    text: "Every interaction requires trusting opaque intermediaries who extract value. Trust is a tax on the individual.",
  },
];

const products = [
  {
    slug: "stackme",
    name: "Stackme",
    pillar: "Capital",
    tagline: "Leverage without liquidation.",
    description: "Non-custodial borrowing infrastructure. Borrow against your crypto without liquidation risk. Your keys, your collateral, your control.",
    status: "Live",
    href: "https://app.stackme.xyz",
    external: true,
  },
  {
    slug: "axiom",
    name: "Axiom",
    pillar: "Verification",
    tagline: "Deterministic AI with proof.",
    description: "Force AI to show its work. Cryptographic proof that outputs are accurate and sources are real. No more hallucinations.",
    status: "In Development",
    href: "/ventures/axiom",
    external: false,
  },
  {
    slug: "uniqueness",
    name: "Uniqueness Engine",
    pillar: "Control",
    tagline: "Personhood without surveillance.",
    description: "Prove you're a unique human without exposing your identity. Privacy-preserving proof of personhood.",
    status: "In Development",
    href: "/ventures/uniqueness",
    external: false,
  },
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta
        title="Verifiable Systems Group | The Infrastructure of Verifiable Autonomy"
        description="Building the verification, capital, and control layers for autonomous systems. Institutional-grade infrastructure for AI agents, DeFi protocols, and the autonomous economy."
        preloadImage={gridTexture}
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-border"
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gridTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-6" data-testid="text-overline">
              Verification. Capital. Control.
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3.5rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              The Infrastructure of Verifiable Autonomy
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl" data-testid="text-hero-body">
              AI agents are rewriting finance, identity, and decision-making. We're building the rails that keep them accountable—the verification layer that proves what's true, the capital infrastructure that preserves your wealth, and the control systems that ensure autonomy isn't just a promise.
            </p>

            <p className="text-base text-muted-foreground/80 leading-relaxed mb-8 max-w-xl" data-testid="text-hero-secondary">
              Trust is a tax. We're building the alternative.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="font-mono text-sm uppercase tracking-wider" data-testid="button-explore-infrastructure">
                <Link href="/ventures">
                  Explore Infrastructure
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono text-sm uppercase tracking-wider" data-testid="button-try-stackme">
                <a href="https://app.stackme.xyz" target="_blank" rel="noopener noreferrer">
                  Try Stackme
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-card" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-problem">
              The Problem
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              AI agents will manage trillions in assets. They'll verify identities, execute trades, and make decisions faster than any human. But here's the problem:
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-foreground">
              You can't verify them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => (
              <Card key={problem.title} className="bg-background border-border" data-testid={`card-problem-${problem.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {problem.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20" data-testid="section-three-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-pillars">
              Three Pillars
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-pillars-intro">
              Everything we build rolls up to three foundational truths.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {threePillars.map((pillar) => (
              <Card key={pillar.label} className="bg-card border-border h-full" data-testid={`card-pillar-${pillar.label.toLowerCase()}`}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {pillar.label}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {pillar.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-card" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-we-are">
                Who We Are
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">Verifiable Systems Group</span> is an infrastructure company at the intersection of AI and cryptography.
              </p>
              <p className="text-lg text-foreground font-medium mb-6">
                We don't build applications. We build the building blocks—the verification layers, capital rails, and control systems that the autonomous economy will run on.
              </p>
            </div>
            <div className="lg:pt-2">
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Purpose</p>
                  <p className="text-sm text-foreground">Democratize institutional-grade infrastructure</p>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Vision</p>
                  <p className="text-sm text-foreground">A future where trust is engineered, not assumed</p>
                </div>
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Mission</p>
                  <p className="text-sm text-foreground">Build the verification, capital, and control layers for autonomous systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20" data-testid="section-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-products">
              The Stack
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Infrastructure layers for the autonomous economy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 h-full"
                data-testid={`card-product-${product.slug}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                      {product.name}
                    </p>
                    <Badge variant={product.status === "Live" ? "default" : "outline"} className="text-xs">
                      {product.status}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {product.tagline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">{product.pillar}</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    {product.external ? (
                      <a href={product.href} target="_blank" rel="noopener noreferrer">
                        {product.status === "Live" ? "Try Now" : "Learn More"}
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href={product.href}>
                        Learn More
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/ventures">
                View All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Building Blocks for the Autonomous Economy
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              If you're building, regulating, or operating in any domain where verification, autonomy, and long-term resilience matter, we'd like to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-mono text-sm uppercase tracking-wider">
                <Link href="/connect">
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono text-sm uppercase tracking-wider">
                <a href="https://app.stackme.xyz" target="_blank" rel="noopener noreferrer">
                  Try Stackme
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
