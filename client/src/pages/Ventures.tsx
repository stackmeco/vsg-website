import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Coins, Lock } from "lucide-react";

const ventures = [
  {
    slug: "stackme",
    name: "Stackme",
    pillar: "Capital",
    pillarlabel: "Capital · Live",
    tagline: "Leverage without liquidation.",
    description: "Non-custodial borrowing infrastructure. Borrow against your crypto without liquidation risk. Your keys, your collateral, your control.",
    status: "Live",
    href: "https://app.stackme.xyz",
    external: true,
  },
  {
    slug: "helios",
    name: "Helios",
    pillar: "Capital",
    pillarlabel: "Capital · In Development",
    tagline: "Sub-millisecond execution, on-chain security.",
    description: "High-frequency trading performance meets DeFi-grade custody. Execute at institutional speed with self-custody guarantees.",
    status: "In Development",
    href: "/ventures/helios",
    external: false,
  },
  {
    slug: "sentinel",
    name: "Sentinel",
    pillar: "Capital",
    pillarlabel: "Capital · In Development",
    tagline: "Cross-chain liquidation defense.",
    description: "Protect your positions across every chain from one interface. When markets turn, Sentinel acts to defend your capital.",
    status: "In Development",
    href: "/ventures/sentinel",
    external: false,
  },
  {
    slug: "axiom",
    name: "Axiom",
    pillar: "Verification",
    pillarlabel: "Verification · In Development",
    tagline: "Deterministic AI with cryptographic proof.",
    description: "Force AI to show its work. Cryptographic proof that outputs are accurate, sources are real, and responses are deterministic.",
    status: "In Development",
    href: "/ventures/axiom",
    external: false,
  },
  {
    slug: "uniqueness",
    name: "Uniqueness Engine",
    pillar: "Control",
    pillarlabel: "Control · In Development",
    tagline: "Personhood without surveillance.",
    description: "Prove you're a unique human without exposing your identity. Privacy-preserving proof of personhood for the AI age.",
    status: "In Development",
    href: "/ventures/uniqueness",
    external: false,
  },
];

const pillars = [
  {
    id: "verification",
    name: "Verification",
    icon: Shield,
    tagline: "Prove it, or it didn't happen.",
    products: ["Axiom", "Agent Attestation"],
  },
  {
    id: "capital",
    name: "Capital",
    icon: Coins,
    tagline: "Your wealth, working—without leaving your control.",
    products: ["Stackme", "Helios", "Sentinel"],
  },
  {
    id: "control",
    name: "Control",
    icon: Lock,
    tagline: "Autonomy isn't optional.",
    products: ["Uniqueness Engine", "Agent Control"],
  },
];

export default function Ventures() {
  return (
    <Layout>
      <PageMeta
        title="Products | Verifiable Systems Group"
        description="Infrastructure layers for the autonomous economy. Verification. Capital. Control."
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4" data-testid="text-overline">
              The Stack
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Infrastructure layers for the autonomous economy.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              We build the verification, capital, and control layers that the autonomous economy will run on. Each product is infrastructure—not an application, but the building blocks that applications depend on.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-try-stackme">
                <a href="https://app.stackme.xyz" target="_blank" rel="noopener noreferrer">
                  Try Stackme
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-read-approach">
                <Link href="/approach">
                  Our Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Summary */}
      <section className="py-20 bg-card" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-pillars">
              Three Pillars
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Everything we build rolls up to three foundational truths.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.id} className="bg-background border-border" data-testid={`card-pillar-${pillar.id}`}>
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{pillar.name}</h3>
                  <p className="text-sm text-primary mb-3">{pillar.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.products.map((product) => (
                      <Badge key={product} variant="outline" className="text-xs">{product}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="py-20" data-testid="section-products-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              All Products
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card
                key={venture.slug}
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 h-full"
                data-testid={`card-venture-${venture.slug}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                      {venture.name}
                    </p>
                    <Badge variant={venture.status === "Live" ? "default" : "outline"} className="text-xs">
                      {venture.status}
                    </Badge>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid={`heading-${venture.slug}`}>
                    {venture.tagline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.slug}-body`}>
                    {venture.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">{venture.pillar}</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm" data-testid={`button-venture-${venture.slug}`}>
                    {venture.external ? (
                      <a href={venture.href} target="_blank" rel="noopener noreferrer">
                        Try Now
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href={venture.href}>
                        Learn More
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild data-testid="link-approach">
              <Link href="/approach">
                Our Approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-values">
              <Link href="/values">
                Our Values
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-connect">
              <Link href="/connect">
                Get in Touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how we build infrastructure for the autonomous economy."
        href="/approach"
      />
    </Layout>
  );
}
