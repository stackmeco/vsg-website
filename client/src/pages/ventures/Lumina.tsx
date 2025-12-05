import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

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

const howLuminaWorks = [
  {
    title: "Capture",
    body: "A device—often a phone with a guided flow—captures images and sensor data of the item. Lumina enforces consistent angles, lighting checks, and basic quality gates so the raw inputs are usable.",
  },
  {
    title: "Compute",
    body: "Machine intelligence and physics-aware models analyze the captured data for features and anomalies. The output is structured: measurements, flags, and confidence ranges tied to that specific item at that specific moment.",
  },
  {
    title: "Share",
    body: "The results are packaged as a verifiable record that can travel with the asset—into grading workflows, insurance flows, or marketplaces—without Lumina taking custody or dictating a final price or grade.",
  },
  {
    title: "Re-check",
    body: "Over time, the same item can be scanned again. Lumina makes it easy to compare states, track damage, and see how condition has changed instead of relying on memory or one-off notes.",
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

const studioContext = [
  { domain: "Truth", venture: "Lumina", text: "physics-aware grading infrastructure." },
  { domain: "Capital", venture: "Helios", text: "constraint-aware treasury execution." },
  { domain: "Dignity", venture: "Uniqueness Engine", text: "personhood without exposure." },
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina · Truth"
        description="Lumina is verifiable grading infrastructure for physical assets—using sensors, physics, and machine intelligence to turn condition into evidence that people can inspect, not just a one-line opinion."
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
              Lumina · Truth venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Grading that starts with evidence.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Lumina is verifiable grading infrastructure for physical assets like trading cards. It uses sensors, physics, and machine intelligence to capture the state of an item and turn it into structured evidence—so people can make decisions based on what is actually measured, not just a one-time opinion.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We build Lumina as rails, not a grading house or marketplace. It is meant to plug into existing grading, insurance, and trading workflows without taking custody of assets or becoming the arbiter of taste.
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

      {/* What Lumina is */}
      <section className="py-20 bg-card" data-testid="section-what-lumina-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-lumina-is">
              What Lumina is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-lumina-is-intro">
              Lumina is how we address the Truth question for physical assets: what can actually be known, and shown, about their condition? It captures measurable features—surface, edges, corners, centering—as structured data tied to a specific item at a specific time. That data becomes a foundation for grading, insurance, and pricing, without forcing anyone to trust a single black-box verdict.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatLuminaIs.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
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

      {/* How Lumina works */}
      <section className="py-20" data-testid="section-how-lumina-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-lumina-works">
              How Lumina works
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-lumina-works-intro">
              Lumina turns physical condition into structured evidence through three simple phases: capture, compute, and share.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howLuminaWorks.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-how-works-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">{String(index + 1).padStart(2, '0')}</p>
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

      {/* Who Lumina is for */}
      <section className="py-20" data-testid="section-who-lumina-is-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-lumina-is-for">
              Who Lumina is for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-who-lumina-is-for">
              Lumina is for people and organizations who depend on condition and authenticity: graders, marketplaces, insurers, vaults, and serious collectors. It gives them a way to anchor decisions in shared evidence, not just screenshots or opinions. We design it so they can integrate it into their own workflows and rules, instead of handing control to another silo.
            </p>
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
              Lumina lives in the Truth lane. It is a proof that we can turn physical reality into evidence people can inspect and reuse, instead of relying on opaque, subjective calls. Standards from the studio define how Lumina records and exposes data; insights from Lumina feed back into how we think about provenance, logs, and tamper-evidence in other ventures.
            </p>
            <p className="text-sm text-muted-foreground/80 italic mb-8" data-testid="text-studio-bar">
              If the evidence isn't clear enough to inspect and reuse, it doesn't meet the bar for Lumina.
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
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-insights">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Read field notes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See insights from the experiments and drills that shape Lumina and our other ventures.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-view-insights">
                  <Link href="/insights">
                    View insights
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
