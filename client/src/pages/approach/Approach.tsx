import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const howWeApproach = [
  {
    title: "Start from real pain",
    body: "We begin with specific asymmetries we have lived—uninspectable flows, brittle treasuries, extractive identity checks—not abstract opportunity slides.",
  },
  {
    title: "Design inside constraints",
    body: "We define the limits first: what must be observable, what cannot be outsourced, and what is off-limits entirely. Ambition is wired through guardrails, not the other way around.",
  },
  {
    title: "Prove it on ourselves first",
    body: "We route our own operations and capital through new patterns before anyone else touches them. If a system fails, the blast radius lands on us.",
  },
];

const threeQuestions = [
  {
    title: "Truth",
    body: "Can you inspect how this system arrives at its claims—what data it used, how it processed it, and how it can fail? If key behaviors cannot be observed or challenged, they are not acceptable foundations.",
  },
  {
    title: "Capital",
    body: "Does this design keep value resilient under stress, or does it quietly depend on best-case conditions? We care as much about exits and degraded modes as we do about normal operation.",
  },
  {
    title: "Dignity",
    body: "Does this system treat people as participants with agency, or as exhaust to harvest? People should be able to use the rails without surrendering unnecessary control over their time, identity, or data.",
  },
];

const stages = [
  { name: "Define", description: "Clarify the problem, constraints, stakeholders, and regulatory surface. Decide not just what we might build, but when it should not exist." },
  { name: "Validate", description: "Run small, low-risk experiments to test the core assumptions with models, prototypes, and simulations instead of full production builds." },
  { name: "Build", description: "Engineer in short, verifiable increments with automated checks and explicit failure paths so every change is explainable." },
  { name: "Deploy", description: "Release into a controlled environment with guardrails, observability, and rollback. Launch is treated as a structured experiment, not a cliff jump." },
  { name: "Evolve", description: "Use live behavior, incidents, and telemetry to refine the system. Ventures either mature into durable infrastructure or are reduced in scope." },
  { name: "Learn", description: "Run structured post-mortems and feed lessons back into our standards and pipeline so we do not repeat the same mistakes." },
];

const howWeUseAi = [
  {
    title: "Machines handle the volume",
    body: "High-velocity tasks—monitoring, anomaly detection, scenario runs—are offloaded to machine intelligence so we can see more than any human team could track directly.",
  },
  {
    title: "Humans set the rules",
    body: "Targets, thresholds, and trade-offs are set by people, documented in standards, and enforced by code. AI does not invent mandates; it executes under them.",
  },
  {
    title: "No closed-loop autonomy",
    body: "Critical paths keep a human veto. If a system could materially affect someone's money, time, or reputation, there must be a way for a person to inspect and intervene.",
  },
];

const internalFirst = [
  {
    title: "Run on our own balance sheet",
    body: "Treasury and financial experiments happen on our capital first. The pain from any early mistakes is ours.",
  },
  {
    title: "Control stays with the owner",
    body: "Where we touch capital or identity, we aim for non-custodial designs: you keep keys, you hold proofs, systems orchestrate flows under your rules.",
  },
  {
    title: "No hidden dependencies",
    body: "We avoid architectures that quietly rely on a single opaque intermediary. If a system depends on a chokepoint we cannot inspect, we redesign it.",
  },
];

const weWill = [
  "Run new architectures on our own balance sheet and operations first.",
  "Document constraints, failure modes, and rollback paths before launch.",
  "Design for verification, not blind trust, across Truth, Capital, and Dignity.",
];

const weWillNot = [
  "We will not market yield, funds, or investment products.",
  "We will not ask for more data or custody than a system truly needs.",
  "We will not ship systems whose behavior we cannot explain under stress.",
];

export default function Approach() {
  return (
    <Layout>
      <PageMeta
        title="Approach — How VSG Designs and Proves Systems"
        description="From first questions about Truth, Capital, and Dignity to governed launches, VSG runs every serious venture through a six-stage path on its own balance sheet first."
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
              Approach
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              We treat systems like infrastructure, not experiments on other people.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Our approach starts with lived failures—assets trapped, signals we could not inspect, systems that treated people as exhaust. From there, we design under clear constraints, run everything on our own balance sheet first, and move ventures through a six-stage runway anchored in Truth, Capital, and Dignity.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              If a design cannot survive our guardrails, it does not move forward—no matter how appealing the story sounds.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-explore-ventures">
                <Link href="/ventures">
                  Explore ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-see-process">
                <Link href="/process">
                  See the full process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-we-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-approach">
              How we approach verifiable autonomy
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-approach-body">
              We build as if our systems will carry value, decisions, and identities for decades—but we only ship what we can observe, test, and roll back today. Every design starts with a specific failure we never want to repeat, then moves through tightly scoped experiments before it is allowed anywhere near other people's money, time, or reputation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeApproach.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-how-approach-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Three questions we ask about every system
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-intro">
              Every venture, internal tool, or experiment inside VSG is held up to the same three questions. If a design fails any one of them, it does not belong on rails other people might rely on.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeQuestions.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col h-full bg-card border-border"
                data-testid={`card-question-${item.title.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-question-${item.title.toLowerCase()}`}>
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-question-${item.title.toLowerCase()}`}>
                    {item.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6 max-w-3xl" data-testid="text-three-questions-note">
            If we cannot answer all three, we do not ship.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-stages">
              The six-stage runway
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-stages-body">
              Every venture moves through the same six-stage runway. The goal is simple: surface risk early, keep learning compounding, and avoid shipping anything that we cannot later explain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {stages.map((stage, index) => (
              <Card
                key={stage.name}
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-stage-${index}`}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-heading font-semibold text-foreground">{stage.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            For the detailed version of this runway, see the full Process page.
          </p>
          <Button asChild variant="outline" data-testid="button-full-process">
            <Link href="/process">
              Read the detailed Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20" data-testid="section-ai-native">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai-native">
              How we use AI
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-native-body">
              We are AI-native: we design on the assumption that machine intelligence is in the loop from day one. But AI handles the mechanics; humans hold the mandate. Systems are built so machines scan, simulate, and surface risk, while people define objectives, constraints, and ethics—and retain the veto.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeUseAi.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-ai-native-${index}`}
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

      <section className="py-20 bg-card" data-testid="section-internal-first">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-internal-first">
              Internal-first and non-custodial
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-internal-first-body">
              We prove every pattern on ourselves before we point it at anyone else. That includes how capital moves, how truth is established, and how access is granted. We do not pool outside funds, and we do not build systems that require handing us custody to gain leverage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {internalFirst.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-internal-first-${index}`}
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

      <section className="py-20" data-testid="section-will-will-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-will-will-not">
              What we will and will not do
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border" data-testid="card-we-will">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  We will
                </h3>
                <ul className="space-y-3">
                  {weWill.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-will-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-we-will-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  We will not
                </h3>
                <ul className="space-y-3">
                  {weWillNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-will-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6 max-w-3xl" data-testid="text-disclaimer">
            This page describes how we build and operate our own systems. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <Button asChild variant="outline" size="sm" data-testid="link-ventures">
              <Link href="/ventures">
                Explore ventures
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-standards">
              <Link href="/standards">
                Review our standards
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-insights">
              <Link href="/insights">
                Read field notes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Ventures"
        description="From treasury to grading and personhood, each venture is a live test of these principles under Truth, Capital, and Dignity."
        href="/ventures"
      />
    </Layout>
  );
}
