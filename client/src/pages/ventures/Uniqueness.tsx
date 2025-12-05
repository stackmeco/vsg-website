import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const problemBullets = [
  "Sybil and bot risk in systems that assume one-person-one-presence.",
  "Identity checks that collect far more data than the risk actually requires.",
  "People losing control over how, where, and how long their data is used.",
];

const whatUniquenessIs = [
  {
    title: "Uniqueness, not biography",
    body: "The system cares about whether someone is a single, real participant—not about their full life story. Where possible, it works with derived proofs or attributes instead of raw documents.",
  },
  {
    title: "Context-bound proofs",
    body: "Proofs are bound to specific contexts and purposes, with clear limits on reuse. Being unique in one network does not silently become a global identifier.",
  },
  {
    title: "Infrastructure role",
    body: "The Uniqueness Engine is meant to plug into access control, voting, and allocation flows as a source of personhood signals—not as a stand-alone social network or data broker.",
  },
];

const uniquenessDomains = [
  {
    domain: "Truth",
    body: "The system produces claims that can be checked: what was asserted, in which context, under which rules. Stewards can see when and how uniqueness checks were performed without seeing more about people than is necessary.",
  },
  {
    domain: "Capital",
    body: "Many capital flows depend on fair participation and resistance to abuse. By reducing fake or repeated identities, the Uniqueness Engine helps systems allocate resources more fairly without defaulting to heavy-handed identity programs.",
  },
  {
    domain: "Dignity",
    body: "People should not have to surrender their entire identity to prove they are real. The Uniqueness Engine is designed to minimize exposure and give participants a say in which attributes are revealed, where, and for how long.",
  },
];

const howUniquenessUsesAI = [
  {
    title: "Pattern detection",
    body: "Models help spot abnormal patterns—repeated attempts, suspicious clusters, or behaviors that suggest automation—so stewards can tighten rules where needed.",
  },
  {
    title: "Risk scoring under constraints",
    body: "AI can suggest risk scores and recommended actions, but those outputs are bounded by policies that define what the system may and may not do with participants.",
  },
  {
    title: "Escalation, not judgment",
    body: "AI can flag and prioritize cases; it cannot unilaterally exclude someone. Critical decisions remain interceptable and reviewable by humans, with logs for why a flag was raised.",
  },
];

const uniquenessIsItems = [
  "Infrastructure for enforcing one-person-one-presence in governed systems.",
  "A way to connect uniqueness checks to concrete policies without exposing full identities.",
  "A tool we run and test on our own projects before considering any broader use.",
];

const uniquenessIsNotItems = [
  "Not a public identity database or social profile system.",
  "Not a replacement for legal or regulatory identity checks where those are required.",
  "Not a tool for bypassing sanctions, KYC, or other compliance obligations.",
];

const studioContext = [
  { domain: "Truth", venture: "Lumina", text: "physics-aware grading infrastructure." },
  { domain: "Capital", venture: "Helios", text: "constraint-aware treasury execution." },
  { domain: "Dignity", venture: "Uniqueness Engine", text: "personhood without exposure." },
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine"
        description="The Uniqueness Engine is personhood infrastructure from VSG—proving one-person-one-presence without exposing people's full identities or turning them into product."
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
              Uniqueness Engine · Dignity · Venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Personhood without exposure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              The Uniqueness Engine helps systems enforce one-person-one-presence without demanding full dossiers on everyone who shows up. It focuses on uniqueness, not identity—proving that a participant is a real, singular person while revealing as little as possible.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We built it after seeing how often 'anti-fraud' tooling became an excuse to over-collect, profile, and lock people into systems they could not meaningfully audit.
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

      {/* The problem Uniqueness Engine exists to solve */}
      <section className="py-20 bg-card" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-problem">
              The problem Uniqueness Engine exists to solve
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-problem-body">
              Most systems that try to prevent abuse—bots, multi-accounts, coordinated fraud—reach for heavy identity checks. People are asked to hand over documents, biometrics, and behavioral traces just to prove they are not an attacker. That creates new risks: over-collection, reuse of data in ways no one agreed to, and lock-in.
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
              The Uniqueness Engine exists to separate uniqueness from exposure—so systems can enforce basic protections without turning people into raw material.
            </p>
          </div>
        </div>
      </section>

      {/* What the Uniqueness Engine is */}
      <section className="py-20" data-testid="section-what-uniqueness-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-uniqueness-is">
              What the Uniqueness Engine is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-uniqueness-is-intro">
              The Uniqueness Engine is infrastructure for proving that a participant is a unique person in a given context, under clear constraints, without becoming a surveillance system. It focuses on the rails that connect event-level checks to higher-level guarantees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatUniquenessIs.map((card, index) => (
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

      {/* Uniqueness Engine under Truth, Capital, and Dignity */}
      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Uniqueness Engine under Truth, Capital, and Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domains-intro">
              We apply the same three questions here that we apply across the studio.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {uniquenessDomains.map((card, index) => (
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

      {/* How the Uniqueness Engine uses AI */}
      <section className="py-20" data-testid="section-ai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai">
              How the Uniqueness Engine uses AI
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-intro">
              The Uniqueness Engine is AI-native, but AI does not get to decide who counts as a person in a vacuum. Machine intelligence helps spot patterns and edge cases; humans define the rules, thresholds, and escalation paths.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howUniquenessUsesAI.map((card, index) => (
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

      {/* What the Uniqueness Engine is / is not */}
      <section className="py-20 bg-card" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What the Uniqueness Engine is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border" data-testid="card-uniqueness-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  The Uniqueness Engine is
                </h3>
                <ul className="space-y-3">
                  {uniquenessIsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-uniqueness-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  The Uniqueness Engine is not
                </h3>
                <ul className="space-y-3">
                  {uniquenessIsNotItems.map((item, index) => (
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
            This page describes infrastructure we design and test in our own environments. It is not legal, compliance, or regulatory advice.
          </p>
        </div>
      </section>

      {/* Where the Uniqueness Engine sits in the broader studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where the Uniqueness Engine sits in the broader studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              The Uniqueness Engine is our primary answer to the Dignity question: how people participate in systems without becoming product. It works alongside ventures focused on Truth and Capital so that evidence, flows, and personhood are all treated as first-class concerns.
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See how the Uniqueness Engine fits alongside Lumina and Helios in the VSG venture portfolio.</p>
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
                <h3 className="font-heading font-semibold text-foreground mb-3">Review our approach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">Understand the principles and process that shape how the Uniqueness Engine is built and governed.</p>
                <Button asChild variant="outline" size="sm" data-testid="button-review-approach">
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

      <NextStepBlock
        nextPage="Standards"
        description="See the standards and guardrails that shape how personhood infrastructure like the Uniqueness Engine is designed and operated."
        href="/standards"
      />
    </Layout>
  );
}
