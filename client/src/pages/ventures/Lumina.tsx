import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const problemBullets = [
  "Slow, opaque grading processes that are hard to audit or replay.",
  "Single-use decisions that cannot be reused for insurance, pricing, or risk.",
  "Collectors taking physical risk on every shipment just to learn if a card is 'worth grading'.",
];

const whatLuminaIs = [
  {
    title: "Sensor-level rails",
    body: "Lumina defines how devices capture surfaces, edges, and defects—standardizing angles, lighting, and checks so inputs are consistent enough to compare and reuse.",
  },
  {
    title: "Evidence engine",
    body: "Captured data is converted into structured features and anomaly flags. Each output ties back to the underlying captures so decisions can be replayed, audited, and improved over time.",
  },
  {
    title: "Infrastructure, not a marketplace",
    body: "Lumina is built to plug into grading, insurance, and pricing flows as a source of evidence. It is not a public grading brand or trading venue.",
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

const howLuminaUsesAI = [
  {
    title: "Computer vision",
    body: "Models help detect surface defects, centering, edges, and patterns that are difficult to spot consistently by eye, especially at scale.",
  },
  {
    title: "Anomaly detection",
    body: "Lumina flags outliers and inconsistencies—both in assets and in the capture process—so humans can decide whether to trust, repeat, or discard a run.",
  },
  {
    title: "Replayable, not magical",
    body: "We avoid 'AI does the rest'. The focus is on pipelines you can replay and refine, not one-off predictions you have to accept without context.",
  },
];

const luminaIsItems = [
  "Infrastructure for converting physical condition into structured, verifiable signals.",
  "A way to reuse condition data across grading, insurance, and pricing flows.",
  "One of the ways we pressure-test our answers to the Truth question.",
];

const luminaIsNotItems = [
  "Not a consumer-facing grading brand or slab service.",
  "Not a marketplace, exchange, or pricing oracle.",
  "Not a guarantee of asset value, condition, or future grading outcomes.",
];

const studioContext = [
  { domain: "Truth", venture: "Lumina", text: "physics-aware grading infrastructure." },
  { domain: "Capital", venture: "Helios", text: "constraint-aware treasury execution." },
  { domain: "Dignity", venture: "Uniqueness Engine", text: "personhood without exposure." },
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina"
        description="Lumina is VSG's physics-aware grading infrastructure—turning the condition of physical assets into structured, verifiable signals that can feed grading, insurance, and pricing decisions."
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
              Lumina · Truth · Venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Physics-aware grading infrastructure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Lumina turns the condition of physical assets into structured, verifiable signals. Instead of shipping cards and waiting weeks for an opaque grade, you capture data from your own devices and Lumina converts it into evidence that can feed grading, insurance, or pricing workflows.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We built it after watching value hinge on single, uninspectable decisions—grades that could not be explained or replayed.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-read-insights">
                <Link href="/insights">
                  Read field notes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The problem Lumina exists to solve */}
      <section className="py-20 bg-card" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-problem">
              The problem Lumina exists to solve
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-problem-body">
              Grading and condition assessment often happen behind closed doors. You ship an asset, wait, and get back a number. If the outcome feels off, it is hard to see why, hard to contest, and hard to reuse the underlying observations for anything else.
            </p>
            <ul className="space-y-3 mb-6">
              {problemBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`problem-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-problem-closing">
              Lumina exists to turn condition into reusable, inspectable data instead of one-time, opaque judgments.
            </p>
          </div>
        </div>
      </section>

      {/* What Lumina is */}
      <section className="py-20" data-testid="section-what-lumina-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-lumina-is">
              What Lumina is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-lumina-is-intro">
              Lumina is infrastructure for measuring and representing physical condition, not a grading house or marketplace. It focuses on the rails that turn raw captures into structured, verifiable signals other systems can trust.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatLuminaIs.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-what-is-${index}`}
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
      <section className="py-20 bg-card" data-testid="section-domains">
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
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
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

      {/* How Lumina uses AI */}
      <section className="py-20" data-testid="section-ai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai">
              How Lumina uses AI
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-intro">
              Lumina is AI-native: machine intelligence is in the loop from the first capture, but always under clear constraints. It handles volume, patterning, and anomaly detection. People define the standards, thresholds, and how evidence is used.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howLuminaUsesAI.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-ai-${index}`}
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
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            This page describes infrastructure we operate and test on our own collections. It is not investment, legal, tax, or pricing advice.
          </p>
        </div>
      </section>

      {/* Where Lumina sits in the broader studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where Lumina sits in the broader studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              Lumina sits alongside other ventures as a proof of how we think about systems that must not fail silently. It focuses on Truth: turning claims about condition into evidence you can inspect. Other ventures focus on Capital and Dignity, together forming a view across how value moves, what evidence we trust, and how people participate.
            </p>
            <ul className="space-y-3 mb-8">
              {studioContext.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`studio-context-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{item.domain} · {item.venture}</span> — {item.text}
                  </span>
                </li>
              ))}
            </ul>
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
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-process">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Review our process</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See the six-stage runway that Lumina—and every VSG venture—follows from definition to long-term learning.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-review-process">
                  <Link href="/process">
                    View process
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="Read field notes from the experiments and drills that shape Lumina and our other ventures."
        href="/insights"
      />
    </Layout>
  );
}
