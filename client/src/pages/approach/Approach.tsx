import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const threeQuestions = [
  {
    title: "Truth — is this real enough to depend on?",
    body: "We start by asking whether the problem, the data, and the mechanism are grounded in reality. Decisions should rest on evidence, not stories, so we design for inspectable behaviours and provenance from day one.",
  },
  {
    title: "Capital — can this survive real conditions?",
    body: "We test whether capital can move through the system without exposing people to hidden downside. That means conservative limits, clear observability, and rollback paths before we scale exposure or volume.",
  },
  {
    title: "Dignity — does this protect people's personhood and time?",
    body: "We examine how people show up in the system: what they must reveal, how much control they keep, and how the flows treat their time. Dignity means you are not forced into exposure or grind-you-down processes just to participate.",
  },
];

const pipelineBullets = [
  "Define the boundary conditions and criteria for when the venture should not exist.",
  "Validate that the problem and mechanism are real before we scale people or capital.",
  "Build, deploy, and evolve inside explicit guardrails, then recurse what we learn back into our standards.",
];

const ventureLinks = [
  {
    label: "Helios · Capital",
    text: "Our internal engine for routing treasury under explicit limits.",
    href: "/ventures/helios",
    testId: "helios",
  },
  {
    label: "Lumina · Truth",
    text: "Physics-aware grading built on evidence, not vibes.",
    href: "/ventures/lumina",
    testId: "lumina",
  },
  {
    label: "Uniqueness Engine · Dignity",
    text: "Personhood without exposure for sybil-resistant systems.",
    href: "/ventures/uniqueness",
    testId: "uniqueness",
  },
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
              How we design and prove systems.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              Our work starts from three questions: Is it true enough to depend on? Can capital survive it? Does it respect people's dignity? From there, every serious venture runs through a six-stage path—defined, tested, governed, and hardened on our own balance sheet first.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/approach/process">
                <Button size="lg" data-testid="button-six-stages">
                  See the six stages
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/approach/standards">
                <Button size="lg" variant="outline" data-testid="button-standards">
                  Read our standards
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground" data-testid="heading-three-questions">
              Three questions we ask first
            </h2>
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

      <section className="py-20" data-testid="section-pipeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-pipeline">
              From idea to governed system
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-pipeline-body">
              Every serious venture follows the same six-stage path: Define, Validate, Build, Deploy, Evolve, and Recurse. The goal is simple: surface risk early, keep capital within guardrails, and make sure lessons compound instead of resetting with each project.
            </p>
            <ul className="space-y-3 mb-8">
              {pipelineBullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground"
                  data-testid={`list-pipeline-${index}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
            <Link href="/approach/process">
              <Button variant="outline" data-testid="button-deep-dive">
                Deep dive into the six stages
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-ventures-link">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures-link">
              Where we prove the rails
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-link-body">
              We are a studio, not a single product. Helios, Lumina, and Uniqueness Engine are where we prove our approach under load—each in a different domain of Truth, Capital, and Dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventureLinks.map((venture) => (
              <Card
                key={venture.testId}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-venture-link-${venture.testId}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-2" data-testid={`text-${venture.testId}-label`}>
                    {venture.label}
                  </p>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4" data-testid={`text-${venture.testId}-desc`}>
                    {venture.text}
                  </p>
                  <Link
                    href={venture.href}
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors mt-auto"
                    data-testid={`link-venture-${venture.testId}`}
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-governance">
              Governance baked in
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-governance-body">
              We treat every launch as a governed experiment: defined scope, explicit limits, named stewards, and pre-agreed rollback paths. If we cannot describe how a system behaves when things break, we do not ship it.
            </p>
            <Link href="/approach/standards">
              <Button variant="outline" data-testid="button-review-standards">
                Review our standards
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Process"
        description="See the six-stage venture process that every VSG venture follows."
        href="/approach/process"
      />
    </Layout>
  );
}
