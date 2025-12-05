import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const whatLuminaDoesBullets = [
  "Captures condition in a structured, reusable way instead of a single opaque score.",
  "Assists experts with consistent, repeatable checks while keeping humans in charge of judgment.",
  "Anchors every conclusion to recorded inputs and procedures for later review.",
];

const featureCards = [
  {
    title: "Evidence-first",
    body: "Lumina starts with the record: what was observed, when, and how. Grades and decisions are built on top of that, not the other way around.",
  },
  {
    title: "Consistent procedures",
    body: "Machine intelligence helps apply the same checks, in the same order, every time—while humans decide where exceptions and nuance belong.",
  },
  {
    title: "Audit-ready outputs",
    body: "Each conclusion is tied back to recorded inputs so disputes can be resolved with shared facts instead of guesswork or memory.",
  },
  {
    title: "Composable rails",
    body: "Designed to integrate with existing grading, insurance, and marketplace workflows without forcing everyone into a single closed platform.",
  },
];

const luminaDomains = [
  {
    domain: "Truth",
    body: "Every output in Lumina has a trail back to raw captures and derived features. You can see what was measured, how anomalies were flagged, and why a given condition score emerged.",
  },
  {
    domain: "Capital",
    body: "By surfacing condition earlier and more consistently, Lumina can reduce unnecessary shipping, insurance, and friction. Better evidence up front makes it easier to decide what to grade, insure, or sell—and what to leave alone.",
  },
  {
    domain: "Dignity",
    body: "Collectors and partners get visibility into how their assets are evaluated, rather than being asked to accept a black-box judgment. Decisions can be inspected and challenged on the mechanics, not vibes.",
  },
];

const luminaIsItems = [
  "Infrastructure for converting physical condition into structured, verifiable evidence.",
  "A way to reuse condition data across grading, insurance, and pricing flows.",
  "One of the ways we pressure-test our answers to the Truth question.",
];

const luminaIsNotItems = [
  "Not a grading house you ship cards to.",
  "Not a marketplace or auction platform.",
  "Not a one-size-fits-all score or investment recommendation.",
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina"
        description="Lumina is verifiable grading infrastructure for physical assets—turning condition into evidence people can inspect, not just a one-line opinion."
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
              Venture — Truth systems
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Lumina: verifiable grading infrastructure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Lumina is grading infrastructure for physical assets like trading cards, built to answer a simple question: what is actually true about this object? Instead of relying on a single opaque judgment, Lumina ties condition to captured data and tamper-evident records so people can inspect how a conclusion was reached.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to ship a card into a black box and hope for the best. Lumina is designed for transparency: clear inputs, consistent procedures, and outputs that can be audited, not just believed. It's Truth infrastructure that can plug into existing grading and insurance workflows.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-ventures">
                <Link href="/ventures">
                  See all ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-how-we-build">
                <Link href="/approach">
                  How we build Truth systems
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Lumina does */}
      <section className="py-20 bg-card" data-testid="section-what-lumina-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-what-lumina-does">
              What Lumina does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-lumina-does-body">
              Lumina turns condition into evidence instead of opinion. It helps turn raw observations—surface wear, centering, corners, edges, print issues—into structured data that can be reused across grading, insurance, trading, and archive workflows. Machine intelligence assists with detection and consistency; humans set the rules and thresholds. The goal is not to replace experts, but to give them a clearer, auditable foundation to work from. Every output is tied back to recorded inputs so conclusions can be challenged on facts, not memory.
            </p>
            <ul className="space-y-3">
              {whatLuminaDoesBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`what-lumina-does-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Lumina exists */}
      <section className="py-20" data-testid="section-why-lumina-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-why-lumina-exists">
                Why Lumina exists
              </h2>
              <Badge variant="outline" className="text-xs">Truth · Infrastructure</Badge>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-lumina-exists-body">
              Grading has become a bottleneck and a blind spot. Collectors, marketplaces, and insurers all depend on grades, yet the process is often opaque, inconsistent, and slow. A single number on a label can move thousands of dollars with very little visibility into how that number was produced. Lumina exists to make those decisions inspectable. By tying conclusions to recorded observations and repeatable procedures, it reduces disputes, helps experts focus on edge cases instead of routine checks, and gives downstream systems a better foundation than vibes and screenshots.
            </p>
          </div>
        </div>
      </section>

      {/* Inside Lumina - feature cards */}
      <section className="py-20 bg-card" data-testid="section-inside-lumina">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-inside-lumina">
              Inside Lumina
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-inside-lumina-intro">
              Lumina is AI-native: machine intelligence handles repetitive checks while humans stay in control of judgment and policy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lumina under Truth, Capital, and Dignity */}
      <section className="py-20" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Lumina under Truth, Capital, and Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domains-intro">
              We apply the same three questions to Lumina that we apply across the studio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {luminaDomains.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-domain-${card.domain.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">{card.domain}</p>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Lumina is / is not */}
      <section className="py-20 bg-card" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What Lumina is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border" data-testid="card-lumina-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Lumina is
                </h3>
                <ul className="space-y-3">
                  {luminaIsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-lumina-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Lumina is not
                </h3>
                <ul className="space-y-3">
                  {luminaIsNotItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where Lumina sits in the studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where Lumina sits in the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              Within VSG, Lumina owns the Truth beam. It focuses on one job: turning messy, real-world assets into objects with verifiable, shared understanding of their condition. Helios relies on Lumina-style evidence when capital decisions depend on physical collateral. The Uniqueness Engine can pair with Lumina so people can prove which items they're connected to without oversharing. Together, they form a loop: Truth about the world, disciplined Capital behaviour, and Dignity for the people involved.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="default" className="text-xs">Truth · Venture</Badge>
              <Badge variant="outline" className="text-xs">Plugs into existing grading and insurance flows</Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-ventures">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Explore all ventures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See how Lumina fits alongside Helios and Uniqueness Engine in the VSG venture portfolio.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-explore-ventures">
                  <Link href="/ventures">
                    View ventures
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-approach">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">How we build Truth systems</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See the approach and process that shapes Lumina and our other ventures.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-view-approach">
                  <Link href="/approach">
                    View approach
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            Lumina is grading infrastructure, not an offer to grade or insure assets on your behalf. Nothing on this page is investment, legal, tax, or compliance advice, and no specific guarantees about card values or outcomes are implied.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="See how Lumina sits alongside Helios and the Uniqueness Engine as one of our three concrete proofs of Truth, Capital, and Dignity."
        href="/ventures"
      />
    </Layout>
  );
}
