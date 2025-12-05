import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, X } from "lucide-react";

const whatHeliosDoesBullets = [
  "Keeps capital working inside predefined guardrails instead of chasing unchecked yield.",
  "Surfaces risk early through continuous monitoring and explainable decision paths.",
  "Gives the studio a live environment to test new patterns before we share them.",
];

const mechanismCards = [
  {
    title: "Monitoring",
    body: "Machine intelligence watches positions, flows, and conditions continuously, flagging behaviour that steps outside defined patterns so humans can decide what to do next.",
  },
  {
    title: "Guardrails",
    body: "Policies define what exposures, venues, and actions are allowed. Anything outside those bounds simply doesn't execute, no matter how attractive it looks in the moment.",
  },
  {
    title: "Playbooks",
    body: "When something breaks or moves fast, we do not improvise from scratch. We follow pre-defined playbooks so responses are consistent, explainable, and logged.",
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

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios"
        description="Helios is VSG's internal capital engine—an AI-native execution system that keeps our treasury working inside explicit, non-custodial guardrails."
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
              Internal venture — Capital systems
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Helios: VSG's internal capital engine.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Helios is how we put our own balance sheet to work. It allocates VSG's reserve assets under explicit limits so capital can move, rebalance, and absorb stress without handing custody to third parties. Every path is designed for observability and rollback before it is trusted with real exposure.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to choose between liquidity and control. Helios treats capital flows as infrastructure: governed experiments, clear failure modes, and no hidden counterparties. We run it for ourselves first so any pattern we share has already survived live markets, not just backtests.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-how-helios-works">
                <Link href="/approach">
                  How Helios works
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to all ventures
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Helios does */}
      <section className="py-20 bg-card" data-testid="section-what-helios-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-what-helios-does">
              What Helios does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-helios-does-body">
              Helios is an AI-native execution system for our digital asset treasury. It coordinates how capital moves across approved venues, when positions change, and how risk is surfaced before it becomes loss. Machine intelligence monitors patterns, stress-tests scenarios, and enforces rules; humans define mandates, constraints, and veto points. There are no pooled client funds, no yield marketing, and no opaque 'strategies'. Helios exists so VSG can operate with institutional-grade observability—first for ourselves, and eventually as a reference pattern for others who need the same kind of discipline.
            </p>
            <ul className="space-y-3">
              {whatHeliosDoesBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`what-helios-does-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we keep control */}
      <section className="py-20" data-testid="section-how-we-keep-control">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-how-we-keep-control">
              How we keep control
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-control-body-1">
              Helios is built around one non-negotiable: capital should not disappear into black boxes. Every action runs through explicit policies that define what we will and will not do. We design for observability first—so we can see where capital is, how it is behaving, and what would happen if conditions change sharply. When something drifts outside its lane, humans are pulled back into the loop to decide what happens next.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-control-body-2">
              Externally, that means we never market Helios as a product, manage outside capital, or promise yields. Internally, it means we treat every new integration as a governed experiment with a clear rollback path. The same standards that protect us are the ones we will expect from any rails we share.
            </p>
          </div>
        </div>
      </section>

      {/* Inside the mechanism - mini cards */}
      <section className="py-20 bg-card" data-testid="section-mechanism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-mechanism">
              Inside the mechanism
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-mechanism-intro">
              Helios is AI-native: machine intelligence sits alongside humans to keep track of patterns and scenarios that would be hard to see manually. But AI does not set mandates or goals—it amplifies our ability to enforce them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mechanismCards.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-mechanism-${index}`}
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
      <section className="py-20" data-testid="section-domains">
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

      {/* Where Helios sits in the studio */}
      <section className="py-20" data-testid="section-studio-context">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-context">
              Where Helios sits in the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-studio-context">
              Within VSG, Helios owns the Capital beam. It doesn't try to solve every problem; it focuses on one: how our treasury should behave when the world is calm, when it is noisy, and when something breaks. Lumina and the Uniqueness Engine feed it better inputs about what is true and who is allowed to act. In return, Helios gives the studio staying power—so we can keep building Truth and Dignity systems through volatility instead of stopping whenever markets swing.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge variant="default" className="text-xs">Capital · Internal venture</Badge>
              <Badge variant="outline" className="text-xs">Runs on our own balance sheet first</Badge>
            </div>
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
