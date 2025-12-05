import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const ventures = [
  {
    id: "lumina",
    name: "Lumina",
    domain: "truth",
    domainLabel: "Truth",
    tagline: "Physics-aware grading for assets that cannot afford guesswork.",
    description:
      "Lumina turns raw condition into verifiable, consistent signals using sensor data and governed machine intelligence. It is where we explore how to anchor asset quality and risk to evidence instead of opinion.",
    href: "/ventures/lumina",
  },
  {
    id: "helios",
    name: "Helios",
    domain: "capital",
    domainLabel: "Capital",
    tagline: "Resilient digital asset treasury, wired for the worst day.",
    description:
      "Helios is our internal execution engine for routing digital assets under strict limits and scenarios. It exists to test how capital can stay productive without handing control to opaque intermediaries or chasing unsustainable yield.",
    href: "/ventures/helios",
  },
  {
    id: "uniqueness",
    name: "Uniqueness Engine",
    domain: "dignity",
    domainLabel: "Dignity",
    tagline: "Personhood without exposure.",
    description:
      "Uniqueness Engine is infrastructure for proving that one person is present without forcing them to hand over their life story. It explores how networks can resist bots and duplicates while preserving participants' dignity and privacy.",
    href: "/ventures/uniqueness",
  },
];

const howWeThinkAboutVentures = [
  {
    title: "Run on our balance sheet",
    text: "We route our own operations and capital through ventures first so the blast radius of early mistakes is ours, not anyone else's.",
  },
  {
    title: "Governed like infrastructure",
    text: "Every venture follows the same six-stage runway—Define, Validate, Build, Deploy, Evolve, Learn—with explicit limits, stewards, and rollback paths.",
  },
  {
    title: "Anchored to the three domains",
    text: "Each venture primarily serves Truth, Capital, or Dignity, while respecting the others. No system gets a free pass on any domain.",
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
              Where we test what deserves to scale.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Ventures are where we wire hard ideas through real systems under Truth, Capital, and Dignity. We run them on our own balance sheet first, under explicit guardrails, before any pattern is allowed to influence how other people move value, prove reality, or participate.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              If a venture cannot survive our constraints, it does not move forward—no matter how appealing the story sounds.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-how-we-work">
                <Link href="/approach">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" data-testid="button-read-field-notes">
                <Link href="/insights">
                  Read field notes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-we-think">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-think">
              How we think about ventures
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-think-body">
              Each venture is an answer to a specific failure we have lived through—unreliable information, fragile capital, or systems that treat people as exhaust. Ventures are not brands we pitch; they are testbeds where we find out which architectures deserve to become rails.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeThinkAboutVentures.map((item, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-think-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures-grid" className="py-20" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.id} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full"
                data-testid={`card-venture-${venture.id}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2" data-testid={`text-${venture.id}-domain`}>
                    {venture.name} · {venture.domainLabel}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1" data-testid={`heading-${venture.id}`}>
                    {venture.name}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-3" data-testid={`text-${venture.id}-tagline`}>
                    {venture.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.id}-body`}>
                    {venture.description}
                  </p>
                  <Button asChild variant="outline" size="sm" data-testid={`button-venture-${venture.id}`}>
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

      <section className="py-20 bg-card" data-testid="section-what-ventures-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-what-ventures-are">
            What ventures are / are not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-background border-border" data-testid="card-ventures-are">
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
            <Card className="bg-background border-border" data-testid="card-ventures-are-not">
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

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards describe the runway and constraints every venture must clear before it can touch Truth, Capital, or Dignity at scale."
        href="/approach"
      />
    </Layout>
  );
}
