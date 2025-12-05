import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const standardCategories = [
  {
    name: "Design standards",
    summary:
      "How systems must be specified before a single line of code ships.",
    details: [
      "Every system has a clear purpose, threat model, and definition of what must never happen.",
      "Truth, Capital, and Dignity risks are identified explicitly in the design, not as an afterthought.",
      "Critical behaviours are modeled up front with clear success, failure, and rollback paths.",
    ],
  },
  {
    name: "Operational standards",
    summary:
      "How systems must behave, be observed, and be supported once they run.",
    details: [
      "Every system ships with logging, monitoring, and alerting appropriate to its impact and complexity.",
      "There are named stewards for each system, with clear responsibilities and escalation paths.",
      "Changes follow a governed process with review, testing, and, where possible, staged rollout.",
    ],
  },
  {
    name: "Risk and incident standards",
    summary:
      "How we surface, triage, and learn from risk, anomalies, and failures.",
    details: [
      "We maintain documented playbooks for incidents, including communication and decision ownership.",
      "Incidents, near-misses, and anomalies are logged and reviewed on a regular cadence.",
      "Lessons from incidents are fed back into design patterns, checklists, and the six-stage process.",
    ],
  },
];

const threeDomainsInPractice = [
  {
    label: "Truth",
    text: "Standards require that decisions and outputs are anchored to evidence, logs, and explanations that can be inspected, not just inferred.",
  },
  {
    label: "Capital",
    text: "Standards require non-custodial control, clear limits, and documented responses for stress and failure before assets are exposed to real risk.",
  },
  {
    label: "Dignity",
    text: "Standards require that participation and personhood are protected by design, avoiding unnecessary collection or exposure of identity and behaviour.",
  },
];

const refuseToShip = [
  "Systems without clear owners, review rhythms, and incident paths.",
  "Systems that cannot explain their critical decisions in terms of evidence and constraints.",
  "Systems without logging or monitoring proportional to their impact.",
  "Systems that depend on hidden assumptions we cannot test or observe.",
  "Systems that expose more about a person's life than is required for them to participate.",
];

export default function Standards() {
  return (
    <Layout>
      <PageMeta 
        title="Standards" 
        description="How Verifiable Systems Group defines quality, risk, and governance for AI-native, non-custodial systems across Truth, Capital, and Dignity before they carry real stakes."
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4" data-testid="text-overline">
              Quality and risk framework
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Standards for systems that carry real stakes.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              These standards define what has to be true before we let a system touch real decisions, real capital, or real lives. They apply across Truth, Capital, and Dignity, whether the venture is a small experiment or a long-lived piece of infrastructure.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-warmth">
              You should not have to reverse-engineer how a critical system behaves under stress. Our standards make behaviours, limits, and responses explicit, so reliability is enforced by design instead of assumed.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild data-testid="button-see-process">
                <Link href="/process">
                  See the six-stage process
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-read-pillars">
                <Link href="/pillars">Read the pillars</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What these standards cover */}
      <section className="py-20 bg-card" data-testid="section-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-intro">
              What these standards cover
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-intro-body">
              Standards are the minimum bar every system must clear. They define how we design, test, operate, and review AI-native systems before and after launch. They apply across the portfolio, regardless of whether we are working in Truth, Capital, or Dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Three categories of standards */}
      <section className="py-20" data-testid="section-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {standardCategories.map((category, index) => (
              <Card
                key={category.name}
                className="flex flex-col justify-between bg-card/60 border-border backdrop-blur"
                data-testid={`card-category-${index}`}
              >
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-base font-semibold tracking-tight text-foreground" data-testid={`heading-category-${index}`}>
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {category.summary}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {category.details.map((item, detailIndex) => (
                      <li key={detailIndex} className="flex gap-2" data-testid={`item-detail-${index}-${detailIndex}`}>
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governed experiments, not bets */}
      <section className="py-20 bg-card" data-testid="section-experiments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-experiments">
              Governed experiments, not bets
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-experiments-body-1">
              We treat changes as governed experiments, not one-way bets. Before we launch, we specify what we are testing, how we will observe it, and what conditions trigger rollback or additional review.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-experiments-body-2">
              For higher-stakes systems, we require progressive exposure, defence in depth, and explicit kill switches. Standards ensure that ambition is paired with constraints, so systems can evolve without putting Truth, Capital, or Dignity at unacceptable risk.
            </p>
          </div>
        </div>
      </section>

      {/* Truth, Capital, Dignity in practice */}
      <section className="py-20" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Truth, Capital, Dignity in practice
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {threeDomainsInPractice.map((item) => (
              <div
                key={item.label}
                className="space-y-2"
                data-testid={`domain-${item.label.toLowerCase()}`}
              >
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary" data-testid={`label-domain-${item.label.toLowerCase()}`}>
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we refuse to ship */}
      <section className="py-20 bg-card" data-testid="section-refuse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-refuse">
              What we refuse to ship
            </h2>
            <ul className="space-y-3 mb-6">
              {refuseToShip.map((item, index) => (
                <li key={index} className="flex gap-3 text-base text-muted-foreground leading-relaxed" data-testid={`item-refuse-${index}`}>
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-refuse-closing">
              If a proposal cannot meet these standards, we either redesign it under tighter constraints or decline it before it ever reaches production.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/50 border-y border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="font-heading font-semibold text-base text-foreground mb-3" data-testid="heading-disclaimer">
              Internal-first, not advice
            </h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-disclaimer">
              These standards describe how we run our own systems and how we expect our ventures to behave under stress. They are not investment, legal, tax, or compliance advice, and they do not describe a public fund or offering. They exist to make our own guardrails inspectable.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="Read notes and updates on how we apply these standards in practice."
        href="/insights"
      />
    </Layout>
  );
}
