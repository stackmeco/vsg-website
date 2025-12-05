import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const threeQuestions = [
  {
    title: "Truth",
    body: "Is this grounded in evidence we're willing to depend on? If we can't see how the facts are gathered, checked, and challenged, we don't treat them as a foundation.",
  },
  {
    title: "Capital",
    body: "Can this design survive a bad day, not just a good one? If we don't understand how capital behaves under stress, it doesn't go into the system.",
  },
  {
    title: "Dignity",
    body: "Does this protect people's time and personhood? If participation requires over-exposure or turns people into the product, we walk away.",
  },
];

const stages = [
  { name: "Define", description: "Clarify the problem, constraints, and who it is for." },
  { name: "Validate", description: "Test the riskiest assumptions with small, low-impact experiments." },
  { name: "Build", description: "Ship in short, verifiable increments with checks and failure paths designed in." },
  { name: "Deploy", description: "Launch as a governed experiment with observability and rollback." },
  { name: "Evolve", description: "Use real usage and incidents to refine or retire the system." },
  { name: "Learn", description: "Run structured post-mortems, codify lessons, and update standards so we do not repeat the same failure twice." },
];

const governedExperiments = [
  {
    title: "Limits encoded up front",
    body: "We define what 'too far' looks like before we start—across exposure, impact, and blast radius—so we know when to slow down or stop.",
  },
  {
    title: "Evidence instead of vibes",
    body: "We measure the things that matter and decide based on what we see, not what we hope. If the evidence isn't there, we don't pretend it is.",
  },
  {
    title: "Rollbacks rehearsed",
    body: "We plan and test how to unwind changes. If a system can't be rolled back safely, it doesn't make it into production.",
  },
];

const aiNativeCards = [
  {
    title: "AI handles the mechanics",
    body: "High-volume analysis, simulations, and anomaly detection are automated wherever it is safe and explainable to do so.",
  },
  {
    title: "Humans own the mandate",
    body: "People set objectives, constraints, and emergency stops. They remain accountable for the decisions that matter.",
  },
  {
    title: "We feel it first",
    body: "When something fails, it hits us before it can hit anyone who depends on our patterns. That is by design, not an accident.",
  },
];

const whatApproachIs = [
  "A set of constraints we apply to ourselves first.",
  "A way to decide which ideas should never become ventures.",
  "A blueprint for how we run experiments, not just talk about them.",
];

const whatApproachIsNot = [
  "Not a promise of specific returns, yields, or outcomes.",
  "Not a guarantee that every venture will succeed.",
  "Not a generic framework for anyone else's compliance.",
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
              How we turn hard questions into rails.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Our work starts with a small set of non-negotiable questions: Is it true enough to depend on? Can capital survive the worst day? Does it protect people's time and personhood? Our approach is how we move from those questions to governed, verifiable systems that we run on our own balance sheet first.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-six-stages">
                <Link href="/process">
                  See the six-stage runway
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-standards">
                <Link href="/standards">
                  Review our standards
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              We start with three questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-intro">
              Every venture, system, or experiment inside VSG has to clear the same three questions before it gets real time or capital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeQuestions.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
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
        </div>
      </section>

      <section className="py-20" data-testid="section-stages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-stages">
              The six-stage runway
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-stages-body">
              Once an idea clears those questions, it moves onto a six-stage runway—Define, Validate, Build, Deploy, Evolve, Learn. Each stage has artefacts, limits, and review gates so nothing moves forward on enthusiasm alone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {stages.map((stage, index) => (
              <Card
                key={stage.name}
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
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
              Read the detailed Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-governed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-governed">
              Governed experiments, not bets
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-governed-body">
              We treat launches and changes as governed experiments. That means explicit limits, clear success and failure conditions, and named stewards—not open-ended bets that depend on luck or heroics.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {governedExperiments.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-governed-${index}`}
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

      <section className="py-20" data-testid="section-ai-native">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai-native">
              AI-native, balance-sheet-first
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-native-body">
              We assume machine intelligence is in the loop from day one—but always under human-defined mandates. AI handles the mechanics; people keep the veto. And we wire serious patterns through our own operations and balance sheet first before anyone else can rely on them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiNativeCards.map((card, index) => (
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

      <section className="py-20 bg-card" data-testid="section-standards-logs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-standards-logs">
              Standards and logs
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-standards-logs-body">
              An approach is only real if it shows up in standards and logs. We encode what we learn into standards that guide new work, and we keep public-facing notes about what went wrong and what changed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background border-border" data-testid="card-standards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Standards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our standards capture the controls, limits, and responsibilities we are willing to commit to—how we expect systems to behave across Truth, Capital, and Dignity.
                </p>
                <Link href="/standards" className="text-sm text-primary hover:underline" data-testid="link-standards">
                  Review standards
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-insights">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Our insights are field notes and post-mortems from running our own rails—what we missed, what failed, and how we rewired it.
                </p>
                <Link href="/insights" className="text-sm text-primary hover:underline" data-testid="link-insights">
                  Read insights
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-approach-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-approach-is">
              What this approach is / is not
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border" data-testid="card-what-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What this approach is
                </h3>
                <ul className="space-y-3">
                  {whatApproachIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-what-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What this approach is not
                </h3>
                <ul className="space-y-3">
                  {whatApproachIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6 max-w-3xl" data-testid="text-disclaimer">
            This page describes how we choose to work. It is not investment, legal, or tax advice.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="Our Process page walks through each stage—from Define to Learn—with the guardrails we rely on in practice."
        href="/process"
      />
    </Layout>
  );
}
