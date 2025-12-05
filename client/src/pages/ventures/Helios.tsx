import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const problemBullets = [
  "Positions across venues without a single, inspectable view of limits.",
  "Short-term optimization that hides long-term fragility.",
  "Playbooks that exist in documents, not in the execution layer itself.",
];

const whatHeliosIs = [
  {
    title: "Execution engine",
    body: "Helios takes high-level risk and allocation constraints and turns them into concrete execution rules for moving positions across approved venues and instruments.",
  },
  {
    title: "Constraint-first design",
    body: "Limits—on exposures, concentrations, and stress behaviors—are defined up front. Helios treats those limits as boundaries it cannot cross, not suggestions it can quietly override.",
  },
  {
    title: "Internal-first",
    body: "We route our own capital through Helios first. If a pattern fails, it fails on us. We do not pool client funds or market Helios as a yield or investment product.",
  },
];

const heliosDomains = [
  {
    domain: "Truth",
    body: "Helios is designed so you can reconstruct why a move happened. Execution logic, constraints, and key decisions are logged, with enough detail for stewards to replay scenarios and understand trade-offs instead of guessing.",
  },
  {
    domain: "Capital",
    body: "Helios prioritizes resilience over short-term optimization. It encodes caps on exposures and concentrations, defines when to slow or halt changes, and favors structures that can be unwound under stress instead of only when conditions are ideal.",
  },
  {
    domain: "Dignity",
    body: "Even internal systems touch people's time and decisions. Helios is designed to reduce paging, surprise, and manual fire drills—surfacing issues early so humans can focus on judgment, not wrestling with opaque positions at the worst possible moment.",
  },
];

const howHeliosUsesAI = [
  {
    title: "Monitoring",
    body: "AI keeps watch on positions, limits, and venue conditions, flagging unusual patterns early instead of waiting for a crisis to reveal them.",
  },
  {
    title: "Simulation",
    body: "We use AI to run simulations and drills—testing how portfolios behave under different shocks and what it would take to rebalance or unwind within defined constraints.",
  },
  {
    title: "Escalation, not automation",
    body: "AI can recommend—but it cannot commit—material changes to the treasury. Critical moves remain interceptable by humans, with clear logs of why an action was proposed.",
  },
];

const whatHeliosIsItems = [
  "An internal execution system for how our own digital asset treasury moves under explicit limits.",
  "A way to embed risk constraints and playbooks into the mechanisms that actually move capital.",
  "One of the ways we test and refine our answers to the Capital question.",
];

const whatHeliosIsNotItems = [
  "Not a public investment fund, yield product, or advisory service.",
  "Not a guarantee of any outcome or protection in all market conditions.",
  "Not a substitute for independent review by stewards, counsel, or auditors where those are required.",
];

const studioContext = [
  { domain: "Truth", venture: "Lumina", text: "making condition and grading flows inspectable." },
  { domain: "Capital", venture: "Helios", text: "making treasury execution constraint-aware." },
  { domain: "Dignity", venture: "Uniqueness Engine", text: "making personhood provable without turning identity into product." },
];

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios"
        description="Helios is Verifiable Systems Group's internal treasury execution engine—routing digital asset positions under explicit constraints so capital remains resilient under stress."
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
              Helios · Capital · Venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Treasury execution under explicit constraints.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Helios is our internal execution engine for digital asset treasuries. It focuses on one task: routing positions across approved venues under predefined limits so capital stays resilient under stress instead of drifting into hidden exposures.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We built it after seeing how quickly exposure can stack up inside opaque systems—even when everyone thinks they are being careful.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-see-standards">
                <Link href="/standards">
                  See our standards
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The problem Helios exists to solve */}
      <section className="py-20 bg-card" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-problem">
              The problem Helios exists to solve
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-problem-body">
              Most digital asset treasuries grow more complex over time—positions spread across venues, new assets appear, and risk accumulates quietly in the background. Exposure looks fine when charts are up and volatility is low, but during stress it becomes obvious that no one can clearly say where the limits are or how to unwind cleanly.
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
              Helios exists to make those limits explicit and binding in the way the treasury actually behaves.
            </p>
          </div>
        </div>
      </section>

      {/* What Helios is */}
      <section className="py-20" data-testid="section-what-helios-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-helios-is">
              What Helios is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-helios-is-intro">
              Helios is not a fund, product, or strategy deck. It is an internal system that enforces how our treasury is allowed to move.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatHeliosIs.map((card, index) => (
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

      {/* Helios under Truth, Capital, and Dignity */}
      <section className="py-20 bg-card" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              Helios under Truth, Capital, and Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domains-intro">
              The same three questions we apply to every system—Truth, Capital, and Dignity—shape how Helios is designed and operated.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {heliosDomains.map((card, index) => (
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

      {/* How Helios uses AI */}
      <section className="py-20" data-testid="section-ai">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai">
              How Helios uses AI
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-intro">
              Helios is AI-native: machine intelligence sits alongside humans to keep track of patterns and scenarios that would be hard to see manually. But AI does not set mandates or goals—it amplifies our ability to enforce them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howHeliosUsesAI.map((card, index) => (
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

      {/* What Helios is / is not */}
      <section className="py-20 bg-card" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What Helios is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border" data-testid="card-helios-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Helios is
                </h3>
                <ul className="space-y-3">
                  {whatHeliosIsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-helios-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Helios is not
                </h3>
                <ul className="space-y-3">
                  {whatHeliosIsNotItems.map((item, index) => (
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
            This page describes how we run our own treasury systems. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      {/* Where Helios sits in the broader studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where Helios sits in the broader studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              Helios is one piece of a larger picture. It focuses on how capital moves. Other ventures focus on what information can be trusted and how people participate without overexposure. Together, they pressure-test our answers to Truth, Capital, and Dignity.
            </p>
            <ul className="space-y-3 mb-8">
              {studioContext.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`studio-context-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{item.domain} · {item.venture}:</span> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid="card-cross-ventures">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Explore all ventures</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See how Helios fits alongside Lumina and Uniqueness Engine in the VSG venture portfolio.</p>
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">See the six-stage runway that Helios—and every VSG venture—follows from definition to long-term learning.</p>
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
        nextPage="Standards"
        description="See how the same Truth, Capital, and Dignity guardrails that shape Helios apply across ventures, internal tools, and experiments."
        href="/standards"
      />
    </Layout>
  );
}
