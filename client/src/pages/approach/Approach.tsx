import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const threeBeams = [
  {
    domain: "Truth",
    body: "How do we know what is actually happening? Truth systems turn messy inputs into evidence and records people can inspect and reuse. Lumina lives here, starting with condition for physical assets like trading cards.",
  },
  {
    domain: "Capital",
    body: "How should capital behave under stress while people keep control? Capital systems define how assets move, what limits they respect, and how risk is surfaced early instead of hiding in footnotes. Helios lives here.",
  },
  {
    domain: "Dignity",
    body: "How do people prove enough about themselves to participate safely without overexposure? Dignity systems protect identity, access, and personhood. The Uniqueness Engine lives here.",
  },
];

const threeLayers = [
  {
    title: "Pillars",
    subtitle: "What we refuse to compromise on",
    body: "Pillars are the principles we will not trade away for speed, convenience, or trend cycles. They define how we treat Truth, Capital, and Dignity when no one is watching, and they constrain which ventures we will even consider.",
    cta: "Read the pillars",
    href: "/pillars",
  },
  {
    title: "Process",
    subtitle: "The six-stage venture path",
    body: "Every venture moves through the same six-stage path: Define, Validate, Build, Deploy, Evolve, Learn. Each stage has explicit entry/exit criteria, so ventures either earn the right to advance or are archived with their lessons captured.",
    cta: "View the six stages",
    href: "/process",
  },
  {
    title: "Standards",
    subtitle: "The quality and risk framework",
    body: "Standards describe the quality bar, risk controls, and review rhythms that apply to every system we run, regardless of domain. They cover how we log behaviour, respond to incidents, and decide when something is safe enough to carry real stakes.",
    cta: "Review our standards",
    href: "/standards",
  },
];

const sixStages = [
  { name: "Define", description: "Clarify the problem, who it is for, and when the venture should not exist." },
  { name: "Validate", description: "Run small, low-risk experiments to test the core assumptions first." },
  { name: "Build", description: "Engineer in short, verifiable increments with checks and failure paths designed in." },
  { name: "Deploy", description: "Launch under explicit guardrails, observability, and rollback—not as a cliff jump." },
  { name: "Evolve", description: "Refine based on live behaviour, telemetry, and incidents instead of wishful thinking." },
  { name: "Learn", description: "Capture lessons into studio standards so knowledge compounds instead of resetting." },
];

const refuseToDoItems = [
  "We do not pool client funds or market Helios as a yield product.",
  "We do not treat identity or behaviour data as something to harvest or resell.",
  "We do not ship systems whose failure modes we cannot describe in plain language.",
  "We do not hide risk in opaque models or uninspectable integrations.",
];

export default function Approach() {
  return (
    <Layout>
      <PageMeta
        title="Approach"
        description="How Verifiable Systems Group designs and governs AI-native ventures across Truth, Capital, and Dignity using clear pillars, a six-stage process, and enforceable standards."
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
              How we build and govern
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              A governed approach to AI-native systems.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              We build systems for decisions that cannot afford guesswork. Our approach is simple to say and strict to execute: define what must never happen, design rails that make it hard to happen by accident, and run everything on our own balance sheet before anyone else depends on it.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to reverse-engineer how a critical system behaves. Our approach is documented, testable, and enforced through three layers—Pillars, Process, and Standards—so Truth, Capital, and Dignity are protected by design, not just by intention.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-view-process">
                <Link href="/process">
                  View the six-stage process
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-see-pillars">
                <Link href="/pillars">
                  See our pillars
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three beams: Truth, Capital, Dignity */}
      <section className="py-20 bg-card" data-testid="section-three-beams">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-beams">
              Three beams: Truth, Capital, Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-beams-intro">
              Everything in the studio hangs off three beams. They keep the portfolio coherent even as individual ventures evolve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeBeams.map((item) => (
              <Card
                key={item.domain}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-beam-${item.domain.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">{item.domain}</p>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three layers of the approach */}
      <section className="py-20" data-testid="section-three-layers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-layers">
              Three layers of the approach
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-layers-intro">
              We keep the studio predictable by separating what never changes from what can evolve. Pillars set the non-negotiables, Process defines how ventures move, Standards encode the minimum quality bar.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeLayers.map((layer) => (
              <Card
                key={layer.title}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-layer-${layer.title.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-1">{layer.title}</h3>
                  <p className="text-xs text-muted-foreground/70 mb-3">{layer.subtitle}</p>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">{layer.body}</p>
                  <Button asChild variant="outline" size="sm" data-testid={`button-${layer.title.toLowerCase()}`}>
                    <Link href={layer.href}>
                      {layer.cta}
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The six stages at a glance */}
      <section className="py-20 bg-card" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-stages">
              The six stages at a glance
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-stages-intro">
              Process is where ambition meets discipline. Every venture moves through the same six stages, with clear criteria for entering and leaving each one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {sixStages.map((stage, index) => (
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
          <Button asChild variant="outline" data-testid="button-full-process">
            <Link href="/process">
              View the full process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* What we refuse to do */}
      <section className="py-20" data-testid="section-refuse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-refuse">
              What we refuse to do
            </h2>
            <Card className="bg-card border-border mb-6" data-testid="card-refuse">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {refuseToDoItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`refuse-item-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-refuse-closing">
              These constraints exist so that when we talk about Truth, Capital, and Dignity, they describe how our systems behave in practice—not just how we wish they behaved.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            This page describes how we build and operate our own systems. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      {/* Cross links */}
      <section className="py-12" data-testid="section-cross-links">
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
