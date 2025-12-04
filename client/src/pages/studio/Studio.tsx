import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const beliefs = [
  {
    title: "Leverage should be accessible.",
    text: "Institutional-grade tools for protecting and growing value should not be reserved for the largest players. We design for individuals and small teams with real scar tissue, not just institutions.",
  },
  {
    title: "Trust should be engineered.",
    text: "If a decision or flow matters, it should rest on evidence you can inspect—not opaque narratives or black-box scores. Truth is something you can verify, not just something you are told.",
  },
  {
    title: "People should not be the product.",
    text: "Participation should not require over-exposure. We design systems where people can prove enough to participate while keeping personhood and time protected.",
  },
];

const domains = [
  {
    title: "Truth",
    body: "Does this system rest on evidence solid enough to depend on? We build Truth ventures to make key decisions—like grading or risk flags—inspectable instead of opaque.",
  },
  {
    title: "Capital",
    body: "Can capital move through this system without hidden downside? We build Capital ventures to make assets work without handing the keys to intermediaries.",
  },
  {
    title: "Dignity",
    body: "Does this system protect people's personhood and time? We build Dignity ventures to let people prove presence and rights without being turned into products.",
  },
];

const ventureSteps = [
  {
    step: "1. Test the questions",
    text: "Does it hold true? Does capital survive the worst day? Does it protect dignity under stress? If not, we don't build it.",
  },
  {
    step: "2. Run the runway",
    text: "The idea moves through our six-stage path—Define, Validate, Build, Deploy, Evolve, Recurse—with limits, artefacts, and reviews at each step.",
  },
  {
    step: "3. Prove it under stress",
    text: "We wire it through our own systems first, under conservative limits, and keep it only if it survives real conditions and improves on what we already have.",
  },
];

const howWeOperate = [
  "We run ventures on our own balance sheet first under conservative limits.",
  "We build AI-native systems where machines handle the mechanics and people keep the veto.",
  "We design for non-custodial control wherever capital or identity is involved.",
  "We publish patterns and standards once they've survived real conditions—not just simulations.",
];

const whatWeAreNot = [
  "Not a custodial exchange, wallet, or vault provider.",
  "Not a pooled investment vehicle, yield product, or fund.",
  "Not a generic consultancy or agency taking hourly briefs.",
  "Not a place where users hand over their keys or identities in exchange for promises.",
];

export default function Studio() {
  return (
    <Layout>
      <PageMeta
        title="Studio — The Studio Behind the Rails"
        description="Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds infrastructure for verifiable autonomy across Truth, Capital, and Dignity."
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
              Studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              The studio behind the rails.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds infrastructure for verifiable autonomy. We run patterns on our own balance sheet first across Truth, Capital, and Dignity before they become rails anyone else can rely on.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/ventures">
                <Button size="lg" data-testid="button-explore-ventures">
                  Explore our ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/approach">
                <Button size="lg" variant="outline" data-testid="button-how-we-work">
                  See how we work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-we-are">
              Who we are
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-who-we-are-1">
              We are an architect's office for digital infrastructure. Instead of shipping generic tools or chasing hype cycles, we design and operate systems for capital, identity, and intelligence that must not fail silently.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-who-we-are-2">
              We fuse machine intelligence and cryptography to build rails where behaviours can be inspected, limits are explicit, and people keep control over how they participate. We don't just publish patterns—we run them ourselves first.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-we-believe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-we-believe">
              What we believe
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-we-believe-intro">
              Our work is guided by a simple set of beliefs about how modern systems should behave.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-belief-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Three domains we design for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domains-intro">
              Every venture we run has a home domain. That gives us clarity about what it is responsible for protecting.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((item) => {
              const slugTitle = item.title.toLowerCase();
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-domain-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-domain-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-domain-${slugTitle}`}>
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-venture-becomes-real">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-venture-becomes-real">
              How a venture becomes real
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-venture-becomes-real-intro">
              We do not treat ideas as assets. To become a venture, an idea must clear our domain questions, survive the six-stage runway, and prove itself under governed experiments on our own balance sheet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {ventureSteps.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-venture-step-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.step}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/process">
            <Button variant="outline" data-testid="button-full-process">
              Read the full Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-we-operate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-operate">
              How we operate (and what we are not)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-operate-intro">
              We run VSG as a focused studio, not a general-purpose agency or fund. That means clear boundaries around what we do—and what we refuse to do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-background border-border" data-testid="card-how-we-operate">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">How we operate</h3>
                <ul className="space-y-3">
                  {howWeOperate.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-how-we-operate-${index}`}>
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-what-we-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">What we are not</h3>
                <ul className="space-y-3">
                  {whatWeAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-what-we-are-not-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-studio-disclaimer">
            Nothing on this page is investment, legal, or tax advice. It describes how we choose to operate, not a recommendation for anyone else's structure.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="See how this shows up in practice"
        description="Explore the ventures, approach, and insights that put these principles under real conditions."
        href="/ventures"
      />
    </Layout>
  );
}
