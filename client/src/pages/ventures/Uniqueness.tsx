import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const whyExistsBullets = [
  "Raise the cost of bots and duplicates without locking people out.",
  "Let stewards enforce one-person constraints without turning into surveillance systems.",
  "Protect people from over-sharing just to be allowed in.",
];

const whatUniquenessEngineDoes = [
  {
    title: "Establishes presence",
    body: "Creates a durable signal that a single participant exists behind an account, session, or credential—without requiring a full identity dossier.",
  },
  {
    title: "Keeps attributes minimal",
    body: "Focuses on the minimum information needed to enforce rules like one-person-one-vote or one-benefit-per-person, instead of turning people into data profiles.",
  },
  {
    title: "Travels as infrastructure",
    body: "Packages uniqueness signals so they can be integrated into other systems—governance, rewards, access—without exposing raw personal data.",
  },
];

const howUniquenessEngineOperates = [
  {
    title: "Proof over disclosure",
    body: "Uses proof-style checks so systems can confirm that presence and limits are respected without needing to see the underlying documents, biometrics, or history.",
  },
  {
    title: "Machine-assisted defence",
    body: "Machine intelligence helps detect patterns that suggest botting or duplication, but its role is bounded and explainable—no opaque social scoring.",
  },
  {
    title: "Human-governed rules",
    body: "Stewards define what counts as 'one person' for a given context, what risks are acceptable, and when additional checks are required. People, not models, own the mandate.",
  },
];

const whatUniquenessEngineIsNot = [
  "Not a KYC provider for financial compliance.",
  "Not an identity broker or data reseller.",
  "Not a social scoring or reputation ranking system.",
  "Not a surveillance tool or always-on tracker.",
  "Not a product where people upload their lives to a central database.",
];

const whoUniquenessEngineSupports = [
  {
    title: "Communities and networks",
    body: "Groups that need one-person-one-vote, fair rewards, or limited benefits without enforcing heavy-handed identity checks.",
  },
  {
    title: "Governance and access systems",
    body: "Protocols, DAOs, and applications that want to raise the cost of sybil attacks while keeping entry as light as possible for real people.",
  },
  {
    title: "Infrastructure builders",
    body: "Teams wiring identity-aware rails into wallets, apps, or platforms that want personhood signals they can integrate without inheriting raw personal data.",
  },
];

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine — Personhood Without Exposure"
        description="Uniqueness Engine is infrastructure for proving that one person is present without forcing them to hand over their life story. It gives networks a way to resist bots and duplicates while protecting dignity and privacy."
        preloadImage="/hero-texture.png"
      />

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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-testid="text-overline">
              Ventures · Dignity
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine — personhood without exposure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Uniqueness Engine is infrastructure for proving that one person is present without forcing them to hand over their life story. It gives networks a way to resist bots and duplicates while protecting the dignity and privacy of the people who participate.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to all ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-see-how-we-work">
                <Link href="/approach">
                  See how we work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-uniqueness-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-uniqueness-exists">
              Why Uniqueness Engine exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-1">
              Networks get noisy when anyone can spin up infinite accounts. Bots game incentives, multi-accounting distorts votes and rewards, and stewards are forced toward heavier identity checks just to restore basic trust.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-why-2">
              On the other side, people are asked to over-expose themselves just to prove they are real—uploading documents, handing over biometrics, or linking accounts that were never meant to be shared. That tradeoff erodes dignity over time.
            </p>
            <ul className="space-y-3">
              {whyExistsBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`why-exists-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-uniqueness-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-uniqueness-does">
              What Uniqueness Engine does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-uniqueness-does">
              Uniqueness Engine lets systems ask a narrow question—'Is there exactly one person behind this presence?'—and get a structured answer without collecting more information than they need. It separates personhood from biography.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatUniquenessEngineDoes.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-does-${index}`}
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

      <section className="py-20 bg-card" data-testid="section-how-uniqueness-operates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-uniqueness-operates">
              How Uniqueness Engine operates
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-uniqueness-operates">
              Uniqueness Engine combines cryptographic proofs and machine intelligence inside clear constraints. The goal is simple: make it harder to pretend to be many people, without making it harder to be yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howUniquenessEngineOperates.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-operates-${index}`}
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

      <section className="py-20" data-testid="section-what-uniqueness-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-uniqueness-is-not">
              What Uniqueness Engine is not
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-uniqueness-is-not-intro">
              Uniqueness Engine is infrastructure for presence and fairness, not a way to harvest or resell identities.
            </p>
            <Card className="bg-card border-border" data-testid="card-uniqueness-is-not">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {whatUniquenessEngineIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`is-not-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6" data-testid="text-is-not-disclaimer">
              This page describes how we think about personhood infrastructure. It is not investment, legal, tax, or compliance advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-uniqueness-supports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-uniqueness-supports">
              Who Uniqueness Engine supports
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-who-uniqueness-supports">
              Uniqueness Engine is built for networks, communities, and applications that need to stay open while defending against bots and duplicates—without turning participation into a privacy risk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whoUniquenessEngineSupports.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-supports-${index}`}
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

      <section className="py-20" data-testid="section-where-uniqueness-fits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-where-uniqueness-fits">
              Where Uniqueness Engine fits inside VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-where-uniqueness-fits">
              Uniqueness Engine sits in the Dignity domain. It complements the way we protect Capital with Helios and anchor Truth with Lumina—ensuring that the people behind systems can participate fairly without being over-exposed.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures" className="text-sm text-primary hover:underline" data-testid="link-all-ventures">
                See all ventures
              </Link>
              <Link href="/insights" className="text-sm text-primary hover:underline" data-testid="link-insights">
                Read more insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards show how we protect people's time and personhood alongside Truth and Capital."
        href="/approach"
      />
    </Layout>
  );
}
