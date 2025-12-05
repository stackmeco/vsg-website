import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";

const howStandardIsStructured = [
  {
    title: "Scope",
    text: "Defines which systems, ventures, or processes it applies to, and which domains it touches—Truth, Capital, Dignity, or a combination.",
  },
  {
    title: "Controls & limits",
    text: "Specifies the behaviours that must be enforced, the limits that may not be exceeded, and how those limits are measured or checked.",
  },
  {
    title: "Stewardship & review",
    text: "Names accountable roles, review cadence, and the conditions under which the standard must be revisited or tightened.",
  },
];

const domainStandards = [
  {
    domain: "Truth",
    title: "Truth — evidence you can inspect",
    body: "Truth standards require that critical claims are anchored to evidence that can be traced and challenged. Inputs must be documented, sources must be inspectable, and key paths must not depend on unverifiable feeds or opaque logic.",
    bullets: [
      "Document how critical facts are captured and stored.",
      "Ensure important decisions can be traced back to identifiable inputs.",
      "Avoid dependencies on unverified or unbounded external signals.",
    ],
  },
  {
    domain: "Capital",
    title: "Capital — resilience over yield",
    body: "Capital standards prioritize survival and resilience over raw yield. They require explicit limits on exposures, clear escalation paths when those limits are approached, and defined behaviours for degraded or stressed conditions.",
    bullets: [
      "Define which risks are acceptable and which are not.",
      "Specify how exposures are measured and monitored.",
      "Require documented actions when conditions breach predefined thresholds.",
    ],
  },
  {
    domain: "Dignity",
    title: "Dignity — protect time and personhood",
    body: "Dignity standards require that participation does not depend on over-exposure, coercive lock-in, or turning people into the product. Identity-related flows must minimize data collected, retain user control where possible, and avoid hidden incentives built on exploitation.",
    bullets: [
      "Limit the amount of personal information required for participation.",
      "Avoid designs that make exit unreasonably costly or risky.",
      "Require clarity on how people's data and contributions are used.",
    ],
  },
];

const stewardshipCards = [
  {
    title: "Clear ownership",
    text: "Each standard is assigned to a steward role, not an anonymous group. Ownership is explicit.",
  },
  {
    title: "Regular review",
    text: "Standards are reviewed on a fixed cadence or when triggered by incidents, architectural changes, or external shifts.",
  },
  {
    title: "Documented decisions",
    text: "Changes, exceptions, and waivers are documented so we can see why a decision was made and what it impacted.",
  },
];

const changeManagementCards = [
  {
    title: "Triggering events",
    text: "Incidents, near-misses, new failure modes, or significant environmental changes trigger a review of affected standards.",
  },
  {
    title: "Structured updates",
    text: "Changes move through a defined review process before they are adopted, including impact assessment on existing systems.",
  },
  {
    title: "Versioned record",
    text: "Standards are versioned so stewards can see what changed, when it changed, and which systems were built under which assumptions.",
  },
];

const whatStandardsAre = [
  "Internal operating requirements we apply to our own ventures and systems.",
  "Constraints that shape how we design, build, and run infrastructure.",
  "A way to make our expectations and responsibilities explicit.",
];

const whatStandardsAreNot = [
  "Not a guarantee of specific outcomes, returns, or performance.",
  "Not a legal, regulatory, or compliance manual for third parties.",
  "Not investment, legal, or tax advice.",
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
              The guardrails we commit to.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Standards are how we turn principles into requirements. They describe how our systems are expected to behave under Truth, Capital, and Dignity—what is allowed, what is not, and who is responsible when something needs to change.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild data-testid="button-see-approach">
                <Link href="/approach">
                  See our approach
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-view-process">
                <Link href="/process">View the six-stage runway</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-publish">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-publish">
              Why we publish standards
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-publish-1">
              Systems that move truth, capital, or participation need more than intent—they need constraints that can be inspected. We publish standards so it is clear how we expect our own rails to behave, which risks we accept, and which behaviours are out of bounds.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-why-publish-2">
              These standards apply to our internal ventures and infrastructure first. They are the baseline we hold ourselves to before anyone else can rely on our patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-structure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-structure">
              How a standard is structured
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-structure-body">
              Each standard follows the same basic shape so stewards and builders know what is being required and why.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howStandardIsStructured.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-structure-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-domain-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domain-standards">
              Standards for Truth, Capital, and Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-domain-standards-body">
              Different systems surface different risks. We group standards around the three questions that underlie our work.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {domainStandards.map((item, index) => (
              <Card key={index} className="bg-background border-border" data-testid={`card-domain-${item.domain.toLowerCase()}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.body}</p>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-stewards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-stewards">
              Stewards and accountability
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-stewards-body">
              Every standard has a steward. Stewards are accountable for keeping the standard accurate, ensuring it is applied where it should be, and initiating changes when reality or risk moves.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stewardshipCards.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-steward-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-change-management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-change-management">
              Change management
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-change-management-body">
              Standards are living documents. When incidents, audits, or new information reveal gaps, we treat that as a requirement to update the standard—not to ignore it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {changeManagementCards.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-change-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  What these standards are
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
                  What these standards are not
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
            This page describes how we choose to govern our own work. It does not constitute advice and should not be used as the sole basis for any decision.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Insights"
        description="Our insights highlight incidents, changes, and lessons from running our own rails under these guardrails."
        href="/insights"
      />
    </Layout>
  );
}
