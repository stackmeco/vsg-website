import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const whyStandardsExist = [
  {
    title: "Prevent quiet drift",
    text: "Standards define what cannot happen, not just what would be nice to happen. They keep systems from gradually bending toward convenience or yield at the expense of resilience and dignity.",
  },
  {
    title: "Name stewards and limits",
    text: "Every critical system has named roles, decision rights, and hard boundaries. If no one is clearly responsible—or if the limits are unclear—the design is not ready.",
  },
  {
    title: "Make behavior inspectable",
    text: "Standards specify how behaviors are logged, reviewed, and challenged. If we cannot trace why something happened, we treat that as a failure of the design, not of the user.",
  },
];

const whatStandardsCover = [
  {
    title: "Truth standards",
    text: "How data is collected, processed, and surfaced. This includes provenance requirements, logging expectations, review paths, and how uncertainty must be exposed instead of hidden.",
  },
  {
    title: "Capital standards",
    text: "How our treasury and financial flows may behave. This includes exposure limits, diversification expectations, stress scenarios, and rules for when activity must halt or step down.",
  },
  {
    title: "Dignity standards",
    text: "How systems may interact with people's time, data, and identity. This includes what can be asked, what must remain optional, and how to avoid turning participation into surveillance.",
  },
];

const threeQuestions = [
  {
    label: "Truth",
    text: "Standards demand evidence for claims and clear paths to challenge them. We specify what must be logged, how long it is retained, and how reviewers can reconstruct why a system behaved as it did.",
  },
  {
    label: "Capital",
    text: "Standards require that capital flows can be described under normal and stressed conditions. We specify maximum exposures, concentration bands, and triggers for review or pause.",
  },
  {
    label: "Dignity",
    text: "Standards constrain what systems can ask of people. We specify minimum-disclosure principles, opt-out expectations, and bans on designs that rely on confusing or trapping participants.",
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
  "Not legal, tax, or compliance advice for anyone else.",
  "Not a promise that specific outcomes, returns, or safeguards will always hold.",
  "Not a replacement for independent review by regulators, counsel, or auditors where those are required.",
];

export default function Standards() {
  return (
    <Layout>
      <PageMeta 
        title="Standards — Guardrails for Verifiable Systems" 
        description="How VSG encodes guardrails before writing code: explicit limits, named stewards, and observable behaviors for systems that must not fail silently."
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
              Standards
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              We encode guardrails before we write code.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Our standards define what systems at VSG are allowed to do with truth, capital, and people's time and data. They describe limits, stewards, and logs up front so ventures cannot drift into behaviors that look attractive on paper but fail the three questions in practice.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              Every venture, internal tool, and experiment has to clear these guardrails before it touches our balance sheet or anyone else's decisions.
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

      {/* Why standards exist here */}
      <section className="py-20 bg-card" data-testid="section-why-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-standards">
              Why standards exist here
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-standards-body">
              We have felt what happens when guardrails are implicit instead of explicit: risk accumulates quietly, incentives drift, and people are forced to trust systems they cannot inspect. Our standards exist to make the constraints visible and binding long before anyone writes a line of integration code.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyStandardsExist.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-why-standards-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What our standards cover */}
      <section className="py-20" data-testid="section-what-standards-cover">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-standards-cover">
              What our standards cover
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-standards-cover-body">
              Standards at VSG are organized around how systems behave, not around marketing claims. They cover how we handle information, how we move capital, and how we treat participants.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatStandardsCover.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-standards-cover-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/80 mt-8 max-w-3xl" data-testid="text-standards-cover-footer">
            Every major venture or internal system must map to each of these categories before launch.
          </p>
        </div>
      </section>

      {/* Standards and the three questions */}
      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Standards and the three questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-body">
              The three questions—Truth, Capital, and Dignity—are our simplest test. Our standards are the detailed version of those questions, written down and enforced.
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

          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-disclaimer">
            This page describes how we govern our own work. It is not investment, legal, tax, or compliance advice.
          </p>
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
        nextPage="Ventures"
        description="See how these standards shape our treasury, grading, and personhood ventures before anything touches other people's decisions."
        href="/ventures"
      />
    </Layout>
  );
}
