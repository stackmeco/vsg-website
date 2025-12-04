import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ventures = [
  {
    id: "helios",
    name: "Helios",
    domain: "Capital",
    badge: "Helios · Capital",
    tagline: "Resilient capital engine.",
    description: "The internal execution engine that routes VSG's own digital asset treasury under explicit limits so capital can work without surrendering control.",
    href: "/ventures/helios",
  },
  {
    id: "lumina",
    name: "Lumina",
    domain: "Truth",
    badge: "Lumina · Truth",
    tagline: "Physics-aware grading.",
    description: "Infrastructure that turns card condition into evidence-backed grading signals so decisions rest on measurable inputs instead of guesswork.",
    href: "/ventures/lumina",
  },
  {
    id: "uniqueness",
    name: "Uniqueness Engine",
    domain: "Dignity",
    badge: "Uniqueness Engine · Dignity",
    tagline: "Personhood without exposure.",
    description: "Infrastructure for proving that one person is present without forcing them to hand over their life story, raising the cost of bots and duplicates.",
    href: "/ventures/uniqueness",
  },
];

const howWeTreatVentures = [
  {
    title: "Internal-first",
    text: "We run each venture on our own balance sheet and operations first, under conservative limits.",
  },
  {
    title: "Domain-anchored",
    text: "Every venture has a home domain—Truth, Capital, or Dignity—so we know what it is responsible for protecting.",
  },
  {
    title: "Governed by standards",
    text: "Ventures inherit our governance, risk, and incident standards from day one, not as an afterthought.",
  },
];

const whoVenturesServe = [
  {
    title: "Stewards of capital",
    text: "People responsible for keeping treasuries resilient under stress.",
  },
  {
    title: "Ecosystem builders",
    text: "Teams wiring markets, grading flows, and infrastructure that others rely on.",
  },
  {
    title: "Communities and networks",
    text: "Networks that need stronger defences against bots and duplicates without resorting to heavy-handed identity checks.",
  },
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
              Where we prove the rails.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground" data-testid="text-hero-body">
              We are a focused venture studio. Helios, Lumina, and Uniqueness Engine are where we run our ideas against real conditions on our own balance sheet first—across Truth, Capital, and Dignity.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/approach">
                <Button size="lg" data-testid="button-how-we-work">
                  See how we work
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/standards">
                <Button size="lg" variant="outline" data-testid="button-review-governance">
                  Review governance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ventures-grid" className="py-20 bg-card" data-testid="section-ventures-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.id} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full"
                data-testid={`card-venture-${venture.id}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2" data-testid={`text-${venture.id}-badge`}>
                    {venture.badge}
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
                  <Link 
                    href={venture.href} 
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                    data-testid={`link-venture-${venture.id}`}
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-we-treat-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-treat-ventures">
              How we treat ventures
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-treat-ventures-body">
              At VSG, a venture is not just a project. It is a system that survives real stress, carries clear guardrails, and earns its place in the portfolio by protecting Truth, Capital, or Dignity better than what came before.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howWeTreatVentures.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-treat-ventures-${index}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-ventures-serve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-ventures-serve">
              Who these ventures serve
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whoVenturesServe.map((item, index) => (
              <Card 
                key={index} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-who-serve-${index}`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="See how we build and govern"
        description="Our approach and standards show how Truth, Capital, and Dignity show up in practice."
        href="/approach"
      />
    </Layout>
  );
}
