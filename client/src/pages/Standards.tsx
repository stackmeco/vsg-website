import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const howWeRunExperiments = [
  {
    title: "Defined scope",
    text: "We specify what the experiment can and cannot touch—systems, assets, and people—before we begin.",
  },
  {
    title: "Explicit limits",
    text: "We set clear thresholds for exposure, volume, and time, and we stop or roll back when those limits are hit.",
  },
  {
    title: "Observable behaviour",
    text: "We define what we will watch, how often, and where it is logged, so no critical change happens in the dark.",
  },
];

const whatWeStandardize = [
  {
    label: "Capital flows",
    description: "How value is allowed to move, which paths are permitted, and how limits and rollback are enforced.",
  },
  {
    label: "Model behaviour",
    description: "How AI and automation are allowed to act, what they can decide alone, and where human veto is mandatory.",
  },
  {
    label: "Access and participation",
    description: "Who can do what, under which conditions, and how we protect people's time and personhood while they participate.",
  },
  {
    label: "Incidents and learnings",
    description: "How we classify incidents, respond under pressure, and feed lessons back into our processes and code.",
  },
];

const rolesAndAccountability = [
  {
    role: "Stewards",
    description: "Stewards own the day-to-day health of a system or experiment. They watch the dashboards, respond to alerts, and propose changes.",
  },
  {
    role: "Approvers",
    description: "Approvers sign off on changes that affect capital, models, or people. No critical path runs without an accountable person who understands the risk.",
  },
  {
    role: "Reviewers",
    description: "Reviewers audit the system after the fact—verifying that limits were respected, logs are complete, and lessons are captured for the next iteration.",
  },
];

const aiNativeGovernance = [
  "Machines scan and simulate; people set mandates and limits.",
  "Automated actions must be explainable at the level stewards need to make decisions.",
  "No critical capital or identity flow runs without a defined human escalation path.",
];

const whatThisPageIs = [
  "A high-level view of how we run governed experiments on our own systems and balance sheet.",
  "A summary of the principles we apply across Truth, Capital, and Dignity.",
  "A way to understand how we think about limits, stewards, and observability.",
];

const whatThisPageIsNot = [
  "Not legal, regulatory, or investment advice.",
  "Not a complete description of our internal playbooks or controls.",
  "Not a guarantee that risk is eliminated—only that it is made explicit, monitored, and acted on.",
];

export default function Governance() {
  return (
    <Layout>
      <PageMeta 
        title="Governance & Standards — Guardrails for Verifiable Systems" 
        description="How VSG runs governed experiments on its own balance sheet first: explicit limits, named stewards, and observable behaviours for systems that must not fail silently."
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
              Governance & Standards
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Guardrails for systems that must not fail silently.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base" data-testid="text-hero-body">
              We treat every serious launch as a governed experiment on our own balance sheet first. That means explicit limits, named stewards, and observable behaviours before anyone else relies on the pattern.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild data-testid="button-how-experiments">
                <a href="#experiments">
                  How we run experiments
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-view-ventures">
                <Link href="/ventures">View the ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="experiments" className="py-20 bg-card scroll-mt-20" data-testid="section-experiments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-experiments">
              How we run experiments
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-experiments-body-1">
              We do not ship unbounded bets. Every serious change—whether in capital flows, models, or access—starts life as a governed experiment with a defined scope, explicit limits, and a rollback path we can describe up front.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-experiments-body-2">
              We wire the experiment through our own balance sheet and operations first. If it fails, we feel it directly and retire or adjust the pattern before it becomes advice, infrastructure, or shared practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howWeRunExperiments.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-experiment-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-standardize">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-standardize-eyebrow">
              Coverage
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-standardize">
              What we standardize
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-standardize-body">
              Our standards are how we make sure Truth, Capital, and Dignity show up the same way across ventures. They cover how we handle information, capital, and people—even when the context changes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whatWeStandardize.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-standardize-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-roles-eyebrow">
              Accountability
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-roles">
              Roles and accountability
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-roles-body">
              Every governed system has named stewards, clear responsibilities, and an explicit escalation path. We care less about titles and more about who is accountable when something breaks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rolesAndAccountability.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-role-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ai-native">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2" data-testid="text-ai-eyebrow">
              AI Governance
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai-native">
              AI-native, human-governed
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-ai-body">
              We assume machine intelligence is in the loop from day one. Our standards define what it is allowed to do, what it must log, and where people retain veto power.
            </p>
            <ul className="space-y-3">
              {aiNativeGovernance.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground" data-testid={`ai-governance-item-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-is-not">
              What this page is / is not
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-background border-border" data-testid="card-what-page-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  What this page is
                </h3>
                <ul className="space-y-3">
                  {whatThisPageIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-page-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-border" data-testid="card-what-page-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What this page is not
                </h3>
                <ul className="space-y-3">
                  {whatThisPageIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-page-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            Nothing on this page should be treated as legal, regulatory, or investment advice. It describes how we hold ourselves to account, not how anyone else must operate.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="See how these standards play out in real post-mortems and notes."
        href="/insights"
      />
    </Layout>
  );
}
