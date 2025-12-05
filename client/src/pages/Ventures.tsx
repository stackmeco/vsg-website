import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const ventures = [
  {
    slug: "helios",
    name: "Helios",
    domainLabel: "Capital · Venture",
    tagline: "Treasury execution under explicit constraints.",
    description:
      "Helios is our internal execution engine for digital asset treasuries. It focuses on one task: routing positions across approved venues under predefined risk limits, so capital remains resilient under stress instead of quietly drifting toward hidden exposures.",
    primaryDomain: "Capital",
    secondaryDomains: ["Truth", "Dignity"],
    href: "/ventures/helios",
  },
  {
    slug: "lumina",
    name: "Lumina",
    domainLabel: "Truth · Venture",
    tagline: "Physics-aware grading infrastructure.",
    description:
      "Lumina turns the condition of an asset into evidence you can inspect, not a guess you have to accept. It uses sensors and machine intelligence to convert wear, defects, and anomalies into structured signals that can feed grading, insurance, and pricing decisions.",
    primaryDomain: "Truth",
    secondaryDomains: ["Capital", "Dignity"],
    href: "/ventures/lumina",
  },
  {
    slug: "uniqueness",
    name: "Uniqueness Engine",
    domainLabel: "Dignity · Venture",
    tagline: "Personhood without exposure.",
    description:
      "Uniqueness Engine is infrastructure for one-person-one-presence—helping systems distinguish real participants from duplicates and automation without turning identity into surveillance or lock-in.",
    primaryDomain: "Dignity",
    secondaryDomains: ["Truth", "Capital"],
    href: "/ventures/uniqueness",
  },
];

const venturesSummary = [
  {
    name: "Helios",
    domain: "Capital",
    summary: "Resilient treasury execution.",
  },
  {
    name: "Lumina",
    domain: "Truth",
    summary: "Evidence-first condition signals.",
  },
  {
    name: "Uniqueness Engine",
    domain: "Dignity",
    summary: "Personhood without overexposure.",
  },
];

const venturesAre = [
  "Internal testbeds for architectures we may turn into long-lived rails.",
  "Run on our own balance sheet and operations first.",
  "Constrained by Truth, Capital, and Dignity from day one.",
];

const venturesAreNot = [
  "Not offers of yield, products, or services to the public.",
  "Not promises of specific returns or outcomes.",
  "Not advice or a template for anyone else's compliance.",
];

export default function Ventures() {
  return (
    <Layout>
      <PageMeta 
        title="Ventures — Helios, Lumina, Uniqueness Engine" 
        description="See how VSG proves Truth, Capital, and Dignity through Helios, Lumina, and Uniqueness Engine—ventures wired through our own balance sheet before patterns are shared."
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
              Ventures
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Each venture is a proof of how we think.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Every venture inside VSG starts with a failure we have lived—uninspectable flows, brittle treasuries, extractive identity checks—and then moves through our six-stage runway under Truth, Capital, and Dignity. We run them on our own balance sheet and systems first, so they are infrastructure we rely on, not ideas we only pitch.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              If a venture cannot survive our guardrails, it never leaves the whiteboard.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-see-approach">
                <Link href="/approach">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-review-process">
                <Link href="/process">
                  Review the process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How these ventures fit together */}
      <section className="py-20 bg-card" data-testid="section-fit-together">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-fit-together">
              How these ventures fit together
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-fit-together-body">
              Each venture sits in a different part of the stack, but they share the same spine: systems that must not fail silently. Helios focuses on how capital moves under stress. Lumina focuses on whether information about condition can be trusted. Uniqueness Engine focuses on who is present and how they are treated. Together, they pressure-test our answers to Truth, Capital, and Dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {venturesSummary.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-md bg-background border border-border" data-testid={`summary-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Badge variant="outline" className="shrink-0">{item.domain}</Badge>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section id="ventures-grid" className="py-20" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.slug} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full"
                data-testid={`card-venture-${venture.slug}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3" data-testid={`text-${venture.slug}-domain`}>
                    {venture.domainLabel}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid={`heading-${venture.slug}`}>
                    {venture.name}
                  </h3>
                  <p className="text-sm font-medium text-foreground/80 mb-3" data-testid={`text-${venture.slug}-tagline`}>
                    {venture.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.slug}-body`}>
                    {venture.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="default" className="text-xs">{venture.primaryDomain}</Badge>
                    {venture.secondaryDomains.map((domain) => (
                      <Badge key={domain} variant="outline" className="text-xs">{domain}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" data-testid={`button-venture-${venture.slug}`}>
                    <Link href={venture.href}>
                      View venture
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal-first note */}
      <section className="py-8 bg-card/50 border-y border-border" data-testid="section-internal-first">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground/80 leading-relaxed text-center max-w-3xl mx-auto" data-testid="text-internal-first">
            We run these ventures on our own balance sheet and infrastructure first. This overview describes how we build and use them internally; it is not an offer of investment, yield, or services to the public.
          </p>
        </div>
      </section>

      {/* What ventures are / are not */}
      <section className="py-20" data-testid="section-what-ventures-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-ventures-are">
            What ventures are / are not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-ventures-are">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Ventures are
                </h3>
                <ul className="space-y-3">
                  {venturesAre.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-ventures-are-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-ventures-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Ventures are not
                </h3>
                <ul className="space-y-3">
                  {venturesAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-ventures-are-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-ventures-disclaimer">
            This page describes how we run our own ventures. It is not investment, legal, tax, or compliance advice.
          </p>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-card border-t border-border" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" asChild data-testid="link-approach">
              <Link href="/approach">
                Review our approach
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-process">
              <Link href="/process">
                See the full process
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="link-insights">
              <Link href="/insights">
                Read field notes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how ventures move through our six-stage runway under Truth, Capital, and Dignity before they touch anyone else's decisions."
        href="/approach"
      />
    </Layout>
  );
}
