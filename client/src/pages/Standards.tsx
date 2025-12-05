import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const coreDimensions = [
  {
    title: "Limits",
    text: "We set explicit limits before systems touch real value or people. Limits may cover scale, depth, or exposure, and they must be testable, observable, and enforceable—not aspirational.",
  },
  {
    title: "Stewards",
    text: "Every system has named stewards—roles, not personalities—responsible for approving changes, monitoring behavior, and triggering rollback procedures when something crosses a boundary.",
  },
  {
    title: "Evidence",
    text: "Claims about a system's behavior must be backed by evidence: logs, traces, or records that can be inspected and, where appropriate, replayed. If we can't show it, we don't assert it.",
  },
  {
    title: "Escalation",
    text: "When something breaks or drifts, we expect clear paths for escalation and rollback. Escalation is not a failure of design; silence in the face of a problem is.",
  },
];

const threeQuestions = [
  {
    label: "Truth",
    text: "Evidence and provenance instead of unverified feeds.",
  },
  {
    label: "Capital",
    text: "Exposure under constraints instead of drift.",
  },
  {
    label: "Dignity",
    text: "Participation without overexposure, with clear limits on what data systems can demand from people.",
  },
];

const ventureExamples = [
  {
    title: "In treasury work",
    text: "Before a treasury pattern goes live, we apply capital standards that define what kinds of venues are allowed, how exposure is capped, and how often positions must be reviewed.",
  },
  {
    title: "In grading flows",
    text: "Before a grading pipeline touches real assets, we apply truth standards that define how captures are controlled, which signals count as evidence, and how disagreements are handled.",
  },
  {
    title: "In uniqueness checks",
    text: "Before an identity-related mechanism is piloted, we apply dignity standards that define what can be collected, how it is transformed, and what the participant can later revoke.",
  },
];

const aiInsideStandards = [
  {
    title: "Monitoring and alerts",
    text: "Machine intelligence scans logs and metrics for patterns people would miss, flagging behaviors that cross defined lines or look meaningfully different from expected baselines.",
  },
  {
    title: "Simulations and drills",
    text: "We use AI to stress-test designs with simulated events and sequences. Standards define which scenarios must be rehearsed and what constitutes a failed drill.",
  },
  {
    title: "Human veto preserved",
    text: "AI may recommend, but it does not have final say. Standards require that critical actions that could materially affect money, access, or reputation remain interceptable by people.",
  },
];

const whatStandardsAre = [
  "Internal rules for how we build and run systems on our own balance sheet and infrastructure.",
  "A way to keep Truth, Capital, and Dignity in view even when conditions are noisy.",
  "Living documents that can evolve, but only through explicit review and versioning.",
];

const whatStandardsAreNot = [
  "Not investment, legal, or tax advice for anyone else.",
  "Not a promise that specific outcomes, returns, or safeguards will always hold.",
  "Not a replacement for independent review by regulators, counsel, or auditors where those are required.",
];

export default function Standards() {
  return (
    <Layout>
      <PageMeta 
        title="Standards & Guardrails" 
        description="How Verifiable Systems Group defines guardrails, limits, and stewards for verifiable systems—before they touch real value or real people."
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
              Standards · Governance
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Standards and guardrails for verifiable systems.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              This is where we define what must be true before our systems touch real value or real people. Standards set the guardrails: how risk is bounded, who is responsible, what must be logged, and what has to fail closed when something goes wrong.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We run these standards on our own systems first. They do not describe public offers, funds, or advice—they describe the expectations we place on anything that claims to answer questions of Truth, Capital, or Dignity.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild data-testid="button-see-approach">
                <Link href="/approach">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-explore-ventures">
                <Link href="/ventures">Explore ventures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What these standards are for */}
      <section className="py-20 bg-card" data-testid="section-why-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-standards">
              What these standards are for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-standards-body">
              Our standards exist to prevent silent failure. They define how we bound risk, name stewards, and require evidence before and after systems go live. They are not meant to impress regulators or investors—they exist so we can explain, in plain language, how a system is supposed to behave when markets are calm, stressed, or failing.
            </p>
          </div>
        </div>
      </section>

      {/* Core dimensions of our standards */}
      <section className="py-20" data-testid="section-core-dimensions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-core-dimensions">
              Core dimensions of our standards
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-core-dimensions-body">
              Every standard we care about fits into a small set of dimensions. Together they define how we bound behavior instead of just trusting intent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDimensions.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-dimension-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How standards relate to Truth, Capital, and Dignity */}
      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              How standards relate to Truth, Capital, and Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-body">
              We use standards to keep our work honest to the three questions that organize the studio. For Truth, that means evidence and provenance instead of unverified feeds. For Capital, it means exposure under constraints instead of drift. For Dignity, it means participation without overexposure, with clear limits on what data systems can demand from people.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {threeQuestions.map((item, index) => (
              <Card key={index} className="bg-background border-border" data-testid={`card-question-${item.label.toLowerCase()}`}>
                <CardContent className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3" data-testid={`label-question-${item.label.toLowerCase()}`}>
                    {item.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How standards show up in ventures */}
      <section className="py-20" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              How standards show up in ventures
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-body">
              Standards are not a separate binder that no one reads. They are wired into how ventures are scoped, reviewed, and deployed. If a venture cannot be expressed in these terms, it is not ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventureExamples.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-venture-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How we use AI inside standards */}
      <section className="py-20 bg-card" data-testid="section-ai-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ai-standards">
              How we use AI inside standards
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ai-standards-body">
              Our standards assume machine intelligence is watching the system alongside people. AI is used to surface anomalies, replay scenarios, and flag drift—not to quietly rewrite the rules.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiInsideStandards.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-ai-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What these standards are / are not */}
      <section className="py-20" data-testid="section-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-is-not">
              What these standards are / are not
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-card border-border" data-testid="card-what-standards-are">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Our standards are
                </h3>
                <ul className="space-y-3">
                  {whatStandardsAre.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-standards-are-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border" data-testid="card-what-standards-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Our standards are not
                </h3>
                <ul className="space-y-3">
                  {whatStandardsAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-standards-are-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internal-first, not advice */}
      <section className="py-12 bg-card/50 border-y border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="font-heading font-semibold text-base text-foreground mb-3" data-testid="heading-disclaimer">
              Internal-first, not advice
            </h3>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-disclaimer">
              These standards describe how we run our own systems and how we expect our ventures to behave under stress. They are not investment, legal, or tax advice, and they do not describe a public fund or offering. They exist to make our own guardrails inspectable.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild data-testid="link-ventures">
              <Link href="/ventures">
                See how ventures apply these standards
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-approach">
              <Link href="/approach">
                Review our approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-insights">
              <Link href="/insights">
                Read field notes and updates
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="See how these standards hold up in the field—drills, post-mortems, and notes from running our own systems."
        href="/insights"
      />
    </Layout>
  );
}
