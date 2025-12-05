import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const threeQuestions = [
  {
    title: "Truth — does it hold up?",
    body: "What needs to be evidence-backed for this to matter? Truth is about making key decisions inspectable so we can see what they rest on when it's quiet—and when it's not.",
  },
  {
    title: "Capital — does it survive the worst day?",
    body: "What happens to capital when markets move, venues fail, or assumptions break? Capital is about routes that keep value under governed control instead of handing the keys to intermediaries.",
  },
  {
    title: "Dignity — who carries the cost?",
    body: "Whose time, safety, or personhood is on the line if we are wrong? Dignity is about letting people participate and prove presence without being over-exposed or turned into a product.",
  },
];

const stages = [
  { name: "Define", description: "Clarify the problem, constraints, and reasons not to build." },
  { name: "Validate", description: "Test the riskiest assumptions in low-exposure experiments." },
  { name: "Build", description: "Engineer in small, verifiable increments with clear checks." },
  { name: "Deploy", description: "Launch into a controlled environment with rollback planned." },
  { name: "Evolve", description: "Adapt to real signals, tightening or retiring paths as we learn." },
  { name: "Learn", description: "Feed incidents and insights back into our standards and code." },
];

const balanceSheetBullets = [
  "We feel the real stress and cost before anyone else depends on the pattern.",
  "We retire or rewrite paths that fail instead of externalizing the lessons.",
  "We share patterns only after they've survived real conditions, not just simulations.",
];

const aiNativeBullets = [
  "Machines scan high-velocity data, simulate paths, and flag anomalies.",
  "People define objectives, constraints, and emergency stops—and can override at any time.",
  "Automated actions must be explainable at the level stewards need to make decisions.",
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
              From first questions to governed systems.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              We start every serious venture by asking three things: Does it hold true? Does capital survive the worst day? Does it protect people's dignity even under pressure? Our approach turns those questions into a six-stage path, governed experiments, and patterns we run on our own balance sheet first.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/process">
                <Button size="lg" data-testid="button-six-stages">
                  See the six stages
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/standards">
                <Button size="lg" variant="outline" data-testid="button-standards">
                  Review governance
                </Button>
              </Link>
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
              Before we draw an architecture diagram or write a line of code, we test the idea against three domains. If it fails here, it never becomes a venture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeQuestions.map((item) => {
              const slugTitle = item.title.split(" — ")[0].toLowerCase();
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-question-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3" data-testid={`heading-question-${slugTitle}`}>
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed" data-testid={`text-question-${slugTitle}`}>
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
              Once a venture passes the first questions, it moves through a six-stage path: Define, Validate, Build, Deploy, Evolve, and Learn. Each stage has its own gates, limits, and artefacts so risk is surfaced early and knowledge compounds instead of resetting.
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
          <Link href="/process">
            <Button variant="outline" data-testid="button-full-process">
              Read the full Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-balance-sheet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-balance-sheet">
              Balance-sheet-first by design
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-balance-sheet-body">
              We do not ask others to trust patterns we have not run ourselves. Serious flows—especially those touching capital, identity, or automation—are wired through VSG's own balance sheet and operations first under conservative limits.
            </p>
            <ul className="space-y-3">
              {balanceSheetBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-balance-sheet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ai-native">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai-native">
              AI-native, human-governed
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-ai-native-body">
              We assume machine intelligence is in the loop from day one, but we never outsource mandates or responsibility. AI handles the mechanics; people keep the veto.
            </p>
            <ul className="space-y-3">
              {aiNativeBullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-ai-native-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-governed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-governed">
              Governed experiments, not bets
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-governed-body">
              Our approach treats every serious change as a governed experiment: defined scope, explicit limits, named stewards, and clear observability. If we cannot describe how a system fails and how we roll it back, we do not ship it.
            </p>
            <Link href="/standards">
              <Button variant="outline" data-testid="button-governance-standards">
                Governance & Standards
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="See the ventures"
        description="Helios, Lumina, and Uniqueness Engine are where this approach meets real conditions."
        href="/ventures"
      />
    </Layout>
  );
}
