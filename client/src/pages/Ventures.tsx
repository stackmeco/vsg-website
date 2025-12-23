import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const ventures = [
  {
    slug: "helios",
    name: "Helios",
    lane: "Capital",
    domainLabel: "Capital · Internal venture",
    tagline: "VSG's internal capital engine.",
    description:
      "Helios is our internal execution engine for digital asset treasury. It helps us keep capital working while risk stays inside explicit limits—always on our own balance sheet first. No pooled client funds, no yield marketing, just governed paths for our own exposure.",
    primaryDomain: "Capital",
    secondaryDomains: ["Truth", "Dignity"],
    href: "/ventures/helios",
  },
  {
    slug: "lumina",
    name: "Lumina",
    lane: "Truth",
    domainLabel: "Truth · Venture",
    tagline: "Verifiable grading infrastructure.",
    description:
      "Lumina turns condition into evidence instead of opinion. Starting with trading cards, it anchors grading signals to sensor data and tamper-evident records, so collectors and partners can inspect how a conclusion was reached—not just accept a single opaque score.",
    primaryDomain: "Truth",
    secondaryDomains: ["Capital", "Dignity"],
    href: "/ventures/lumina",
  },
  {
    slug: "uniqueness",
    name: "Uniqueness Engine",
    lane: "Dignity",
    domainLabel: "Dignity · Venture",
    tagline: "Personhood without overexposure.",
    description:
      "The Uniqueness Engine proves that one person is behind an account or action without demanding their entire life story. It enables sybil-resistant access and fair participation while keeping control of identity with the individual, not yet another centralized profile silo.",
    primaryDomain: "Dignity",
    secondaryDomains: ["Truth", "Capital"],
    href: "/ventures/uniqueness",
  },
];

const venturesAre = [
  "Internal testbeds for architectures we may turn into long-lived rails.",
  "Run on our own balance sheet and operations first.",
  "Constrained by Truth, Capital, and Dignity from day one.",
];

const venturesAreNot = [
  "Not offers of yield, products, or services to the public.",
  "Not promises of specific returns or outcomes.",
  "Not advice or a template for anyone else's compliance.",
];

export default function Ventures() {
  return (
    <Layout>
      <PageMeta 
        title="Ventures" 
        description="A small portfolio of AI-native ventures that turn Truth, Capital, and Dignity into verifiable systems—run on our own balance sheet first."
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
              All ventures
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              A small portfolio built on our own balance sheet first.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Each venture in the studio is a proof, not a pitch deck. We use AI-native and cryptography-grounded systems to turn three beams—Truth, Capital, and Dignity—into infrastructure that can survive real-world stress. Every pattern runs on our own balance sheet first before anyone else depends on it.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We keep the portfolio intentionally small: a capital engine that keeps assets working inside strict limits, a truth system that ties claims to evidence, and a dignity layer that lets people prove enough about themselves without giving everything away.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-visit-helios">
                <Link href="/ventures/helios">
                  Visit Helios
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-read-approach">
                <Link href="/approach">
                  Read how we build
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How the portfolio fits together */}
      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-three-questions">
              How the portfolio fits together
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-body">
              Ventures don't live in separate silos; they reinforce each other. Helios keeps capital resilient so we can keep building through volatility. Lumina turns messy inputs into evidence, so decisions about real-world assets can be grounded instead of guessed. The Uniqueness Engine protects the ability to participate without surrendering identity. Together, they give us a studio where we can test new ideas without gambling on custody, unverifiable feeds, or exploitative data practices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default" className="text-xs">Truth</Badge>
            <Badge variant="default" className="text-xs">Capital</Badge>
            <Badge variant="default" className="text-xs">Dignity</Badge>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section id="ventures-grid" className="py-20" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.slug} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full"
                data-testid={`card-venture-${venture.slug}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3" data-testid={`text-${venture.slug}-domain`}>
                    {venture.domainLabel}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid={`heading-${venture.slug}`}>
                    {venture.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mb-3" data-testid={`text-${venture.slug}-tagline`}>
                    {venture.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.slug}-body`}>
                    {venture.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="default" className="text-xs">{venture.primaryDomain}</Badge>
                    {venture.secondaryDomains.map((domain) => (
                      <Badge key={domain} variant="outline" className="text-xs">{domain}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" data-testid={`button-venture-${venture.slug}`}>
                    <Link href={venture.href}>
                      View venture
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting text below grid */}
      <section className="py-8 bg-card/50 border-y border-border" data-testid="section-supporting-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground/80 leading-relaxed text-center max-w-3xl mx-auto" data-testid="text-supporting">
            We treat each venture as a live proof of how we think about Truth, Capital, and Dignity. Patterns that hold up under real conditions become part of our shared standards; patterns that do not are documented, retired, and folded back into our internal playbooks.
          </p>
        </div>
      </section>

      {/* What ventures are / are not */}
      <section className="py-20" data-testid="section-what-ventures-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-ventures-are">
            What ventures are / are not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-ventures-are">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Ventures are
                </h3>
                <ul className="space-y-3">
                  {venturesAre.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-ventures-are-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-ventures-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Ventures are not
                </h3>
                <ul className="space-y-3">
                  {venturesAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-ventures-are-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-ventures-disclaimer">
            This page describes how we run our own ventures. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild data-testid="link-approach">
              <Link href="/approach">
                Review our approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-process">
              <Link href="/process">
                See the full process
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-insights">
              <Link href="/insights">
                Read field notes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how we decide which questions become ventures—and how they move through our six-stage runway."
        href="/approach"
      />
    </Layout>
  );
}
