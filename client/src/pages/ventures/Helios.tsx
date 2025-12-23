import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const heliosIs = [
  "An internal execution engine for VSG's own treasury.",
  "Focused on preserving capital and making risk easier to inspect.",
  "Built to keep control non-custodial and decisions explainable.",
  "Run under the same pillars, process, and standards as any other VSG system.",
];

const heliosIsNot = [
  "A pooled fund, custodial platform, or yield product for clients.",
  "A promise about returns or market performance.",
  "A black box; its behaviours and limits must be documented and reviewable.",
  "A shortcut around risk management, governance, or controls.",
];

const studioPosition = [
  {
    title: "Capital beam",
    body: "Helios focuses on how capital behaves\u2014how positions are structured, how limits are enforced, and how shocks are surfaced early instead of hidden.",
  },
  {
    title: "Truth and telemetry",
    body: "Helios relies on trustworthy data and logs so decisions can be inspected later. We care as much about the explanation for a move as the move itself.",
  },
  {
    title: "Dignity and control",
    body: "Helios keeps control non-custodial. Capital moves under governed mandates, not opaque promises, and we avoid designs that require handover to third parties.",
  },
];

const howHeliosRuns = [
  "Runs on VSG's own balance sheet, not pooled client funds.",
  "Pairs simulations and monitoring with human mandates and veto power.",
  "Records decisions in a way that can be revisited during audits and post-mortems.",
  "Feeds lessons back into our standards and six-stage process.",
];

const governanceItems = [
  "Design: clear purpose, defined failure modes, and documented constraints before changes ship.",
  "Operation: named stewards, review rhythms, and monitoring proportional to impact.",
  "Review: structured incident and post-mortem process that feeds changes back into patterns and playbooks.",
];

const refusals = [
  "Take custody of client funds or market performance as a product.",
  "Hide material risk in opaque models or uninspectable integrations.",
  "Rely on a single venue, mechanism, or assumption without alternatives.",
  "Run critical strategies without documented limits and responses.",
  "Ignore incidents or near-misses instead of folding lessons back into the system.",
];

export default function Helios() {
  return (
    <Layout>
      <PageMeta
        title="Helios"
        description="Helios is Verifiable Systems Group's internal execution engine for digital asset treasury\u2014designed to preserve capital under constraints while keeping control non-custodial and behaviours inspectable."
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
              Capital \u00b7 Internal treasury engine
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Helios: governed capital under constraints.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Helios is our internal execution engine for digital asset treasury. It exists to preserve capital under clear limits, keep control non-custodial, and make it easier to understand how positions behave under stress before they carry real stakes.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              You shouldn't have to guess how your own capital will behave when conditions change. Helios was built after we felt that uncertainty ourselves.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-approach">
                <Link href="/approach">
                  See our approach
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-review-standards">
                <Link href="/standards">
                  Review our standards
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Helios is */}
      <section className="py-20 bg-card" data-testid="section-what-helios-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-helios-is">
            What Helios is
          </h2>
          <div className="max-w-3xl mb-8">
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-helios-is-body">
              Helios is the studio's internal engine for managing and testing digital asset treasury under explicit constraints. It is where we model, route, and monitor positions on our own balance sheet before we promote patterns to long-lived infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background border-border" data-testid="card-helios-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Helios is:
                </h3>
                <ul className="space-y-3">
                  {heliosIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-helios-is-${index}`}>
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
                  Helios is not:
                </h3>
                <ul className="space-y-3">
                  {heliosIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-helios-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where Helios sits in the studio */}
      <section className="py-20" data-testid="section-studio-position">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-position">
              Where Helios sits in the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-studio-position">
              Helios lives in the Capital beam, but it depends on the other beams and layers to stay honest. It turns our theories about treasury resilience into day-to-day, governed operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studioPosition.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-studio-position-${index}`}
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

      {/* How Helios runs */}
      <section className="py-20 bg-card" data-testid="section-how-helios-runs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-how-helios-runs">
              How Helios runs
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-how-runs-body-1">
              Helios operates under a set of internal mandates that define what we are optimizing for and what we refuse to risk. Before we change a position, we specify the intent, the acceptable downside, and how we will observe the result.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-how-runs-body-2">
              Decisions combine machine intelligence and human oversight. Machines help scan, simulate, and surface patterns; humans own the mandates, constraints, and final calls. Every significant change is tied back to a reviewable record.
            </p>
            <ul className="space-y-3">
              {howHeliosRuns.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`how-runs-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Governance and standards */}
      <section className="py-20" data-testid="section-governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-governance">
              Governance and standards
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-governance-body">
              Helios operates under the same standards and six-stage process as any other VSG system. It does not get lighter treatment because it is internal; if anything, it is where we apply our strictest controls.
            </p>
            <ul className="space-y-3 mb-6">
              {governanceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`governance-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm" data-testid="button-inline-standards">
                <Link href="/standards">
                  Review our standards
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" data-testid="button-inline-process">
                <Link href="/process">
                  View the six-stage process
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Helios refuses to do */}
      <section className="py-20 bg-card" data-testid="section-refusals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-refusals">
              What Helios refuses to do
            </h2>
            <ul className="space-y-3 mb-6">
              {refusals.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`refusal-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-refusals-closing">
              If a strategy or structure cannot meet these constraints, Helios either runs it in a tightly isolated, experimental way or declines it entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            This page describes how we run our own treasury systems. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="See notes and memos on how we apply these constraints to real decisions."
        href="/insights"
      />
    </Layout>
  );
}
