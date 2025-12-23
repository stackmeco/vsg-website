import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const whatUniquenessEngineDoesBullets = [
  "Proves that one person sits behind an identity without demanding full biographical exposure.",
  "Makes it harder to create fake or duplicate accounts at scale, while keeping honest participants in control.",
  "Supports fair allocation, voting, and access controls in systems that depend on real people, not bots.",
];

const featureCards = [
  {
    title: "Uniqueness, not dossiers",
    body: "The system focuses on proving that one person is present, not on collecting or storing their entire identity. Proofs are narrowly scoped to what a given interaction actually needs.",
  },
  {
    title: "Controlled disclosure",
    body: "Participants reveal only what is necessary for a specific context—no more. Different communities can set different thresholds while still relying on the same underlying rails.",
  },
  {
    title: "Abuse visibility",
    body: "When abuse or fraud occurs, systems can respond with clear rules for limiting or removing access without exposing unrelated aspects of someone's life.",
  },
  {
    title: "Composable for many systems",
    body: "The Uniqueness Engine is meant to plug into existing networks, applications, and communities as an underlying layer, not to replace them with a single central platform.",
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

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine"
        description="The Uniqueness Engine proves personhood without overexposure—enabling fair, sybil-resistant participation while people keep control of who they are."
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
              Venture — Dignity systems
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Uniqueness Engine: personhood without overexposure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              The Uniqueness Engine proves that one person sits behind an account or action—without demanding their entire life story in return. It enables sybil-resistant participation and fair allocation in systems that depend on people, not bots or duplicate identities, while keeping control of identity with the individual instead of another centralized profile silo.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to expose everything about yourself just to prove you're real. The Uniqueness Engine is designed to minimise what is shared, limit how it's reused, and make abuses of identity visible instead of invisible—so dignity is enforced by design, not just by policy.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-ventures">
                <Link href="/ventures">
                  See all ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-how-we-design">
                <Link href="/approach">
                  How we design Dignity systems
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What the Uniqueness Engine does */}
      <section className="py-20 bg-card" data-testid="section-what-uniqueness-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-what-uniqueness-does">
              What the Uniqueness Engine does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-uniqueness-does-body">
              The Uniqueness Engine is infrastructure for personhood. It gives systems a way to tell that one person is behind an identity or action, without turning that person into a product. Instead of relying on crude checks or blanket KYC, it focuses on uniqueness: one person, one presence, one weight in a decision. It is designed to support fair distribution, spam-resistance, and community protection while revealing as little as possible about any individual. Attributes are proven only when necessary, and only for the context at hand.
            </p>
            <ul className="space-y-3">
              {whatUniquenessEngineDoesBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`what-uniqueness-does-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why the Uniqueness Engine exists */}
      <section className="py-20" data-testid="section-why-uniqueness-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-why-uniqueness-exists">
                Why the Uniqueness Engine exists
              </h2>
              <Badge variant="outline" className="text-xs">Dignity · Infrastructure</Badge>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-uniqueness-exists-body">
              Most systems that try to keep out abuse force people into a trade-off: surrender detailed identity data to a central authority, or accept a flood of bots, fraud, and Sybil attacks. Both options erode dignity—either by overexposure or by making participation unsafe. The Uniqueness Engine exists to give systems a third option. It focuses on what is necessary for fairness and safety, and nothing more. That means uniqueness instead of surveillance, accountability without permanent dossiers, and rules that people can actually understand and inspect.
            </p>
          </div>
        </div>
      </section>

      {/* Inside the Uniqueness Engine - feature cards */}
      <section className="py-20 bg-card" data-testid="section-inside-uniqueness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-inside-uniqueness">
              Inside the Uniqueness Engine
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-inside-uniqueness-intro">
              The Uniqueness Engine is AI-native: machine intelligence assists with pattern detection and risk scoring while humans define policies and review edge cases.
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

      {/* Uniqueness Engine under Truth, Capital, and Dignity */}
      <section className="py-20" data-testid="section-domains">
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
        </div>
      </section>

      {/* Where the Uniqueness Engine sits in the studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where the Uniqueness Engine sits in the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              Within VSG, the Uniqueness Engine owns the Dignity beam. It protects the people inside systems that are otherwise focused on capital and information flows. Helios uses Dignity-aware signals to limit how capital can be abused by coordinated identities. Lumina can pair with the Uniqueness Engine so claims about assets and claims about people align without oversharing. Together, they form rails where people can participate, hold value, and act with confidence that their presence matters—without surrendering control to another profile silo.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="default" className="text-xs">Dignity · Venture</Badge>
              <Badge variant="outline" className="text-xs">Designed to pair with Truth and Capital systems</Badge>
            </div>
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
                <h3 className="font-heading font-semibold text-foreground mb-3">How we design Dignity systems</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">Understand the principles and process that shape how the Uniqueness Engine is built and governed.</p>
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
            This page describes infrastructure we design and test in our own environments. It is not legal, compliance, or regulatory advice, and nothing here should be construed as a substitute for required identity or compliance checks.
          </p>
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
