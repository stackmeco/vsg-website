import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

const threeBeams = [
  {
    label: "Truth",
    title: "Truth",
    text: "What can we actually know, and show, about the world? Truth systems turn messy inputs into evidence people can inspect and reuse. Think sensor data tied to a specific object at a specific time, or audit trails that make AI-derived answers accountable instead of mysterious.",
  },
  {
    label: "Capital",
    title: "Capital",
    text: "How should capital behave under stress while people keep control of it? Capital systems define how assets move, what limits they respect, and how risk is surfaced early instead of hiding in footnotes. We start with our own treasury so incentives stay aligned.",
  },
  {
    label: "Dignity",
    title: "Dignity",
    text: "How do people prove who they are without giving everything away? Dignity systems let individuals participate, qualify, and coordinate without handing their identities to yet another silo. They protect the person while still making fraud and abuse provably harder.",
  },
];

const whatVsgIsBullets = [
  "AI-native systems, not bolt-on features.",
  "Non-custodial rails for capital and identity.",
  "Tested on our own balance sheet first.",
];

const ventures = [
  {
    slug: "helios",
    metaLine: "Helios · Capital",
    tagline: "Treasury execution under explicit constraints.",
    description: "Our internal execution engine for digital asset treasury. Helios helps us keep capital working while risk stays inside explicit limits—always on our own balance sheet first.",
    primaryDomain: "Capital",
    href: "/ventures/helios",
  },
  {
    slug: "lumina",
    metaLine: "Lumina · Truth",
    tagline: "Verifiable grading infrastructure.",
    description: "Verifiable grading infrastructure for physical assets like trading cards. Lumina turns condition into evidence people can inspect, not just a one-line opinion.",
    primaryDomain: "Truth",
    href: "/ventures/lumina",
  },
  {
    slug: "uniqueness",
    metaLine: "Uniqueness Engine · Dignity",
    tagline: "Personhood without exposure.",
    description: "Personhood without overexposure. The Uniqueness Engine proves that one person is behind an account or action without demanding their entire life story in return.",
    primaryDomain: "Dignity",
    href: "/ventures/uniqueness",
  },
];

const howStudioFitsTogether = [
  {
    title: "Ventures",
    text: "Concrete systems that answer specific questions about Truth, Capital, or Dignity—run on our own balance sheet first, then offered as patterns once they survive real conditions.",
    linkLabel: "Explore ventures",
    href: "/ventures",
  },
  {
    title: "Approach",
    text: "The reasoning behind how we build: why we favor internal-first development, cryptographic checkpoints, and constraint-based design over traditional playbooks.",
    linkLabel: "Read our approach",
    href: "/approach",
  },
  {
    title: "Process",
    text: "Our six-stage runway—Define, Validate, Build, Deploy, Evolve, Learn—turns ideas into governed systems with clear milestones and exit conditions.",
    linkLabel: "See the runway",
    href: "/process",
  },
  {
    title: "Standards",
    text: "The reference point for what must be true before systems touch real value or real people—limits, stewards, and playbooks that shape how we operate.",
    linkLabel: "Review standards",
    href: "/standards",
  },
  {
    title: "Insights",
    text: "Field notes, drills, and memos from running our own systems—what held up, what didn't, and how we adjusted.",
    linkLabel: "Read insights",
    href: "/insights",
  },
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta 
        title="Verifiable Systems Group" 
        description="An AI-native venture studio that builds verifiable systems for Truth, Capital, and Dignity—run on our own balance sheet first."
        preloadImage={gridTexture}
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${gridTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "grayscale(100%) contrast(120%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background from-20% via-background/50 to-background/30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-background/30 pointer-events-none" aria-hidden="true" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-6" data-testid="text-overline">
              AI-native venture studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              We engineer the infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl" data-testid="text-hero-body">
              You shouldn't have to choose between speed and safety. Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that builds systems for decisions that cannot afford guesswork. We run them on our own balance sheet first, so Truth, Capital, and Dignity are enforced in practice—not just promised.
            </p>

            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 max-w-xl" data-testid="text-hero-secondary">
              Across a small portfolio of ventures, we turn three questions into infrastructure: What is actually true? How should capital behave? How do people keep control of who they are? Everything else in the studio hangs off those three beams.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="font-mono text-sm uppercase tracking-wider" data-testid="button-explore-ventures">
                <Link href="/ventures">
                  Explore ventures
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono text-sm uppercase tracking-wider" data-testid="button-see-how-we-build">
                <Link href="/approach">
                  How we build
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three beams: Truth, Capital, Dignity */}
      <section className="py-20 bg-card" data-testid="section-three-beams">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-beams">
              Three beams: Truth, Capital, Dignity
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-beams-intro">
              Every venture in the studio exists to answer one of three questions. We design around these beams so the portfolio stays coherent, even as the surface area evolves.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {threeBeams.map((item) => (
              <Card key={item.label} className="bg-background border-border h-full" data-testid={`card-beam-${item.label.toLowerCase()}`}>
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3" data-testid={`label-beam-${item.label.toLowerCase()}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-beam-${item.label.toLowerCase()}`}>
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What VSG is */}
      <section className="py-20" data-testid="section-what-vsg-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-vsg-is">
                What VSG is
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-vsg-is-body">
                Verifiable Systems Group (VSG) is an AI-native, cryptography-grounded venture studio. We build systems where critical behaviours are observable, constrained by design, and able to withstand stress in the real world. We start on our own balance sheet: new rails are tested against our assets, time, and risk before anyone else is invited in. We are not a consultancy, a custodial platform, or a hype engine. We are an architect's office for digital infrastructure—designing patterns that others can trust because we trusted them first.
              </p>
            </div>
            <div className="lg:pt-2">
              <ul className="space-y-3" data-testid="list-what-vsg-is">
                {whatVsgIsBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground" data-testid={`bullet-what-vsg-${index}`}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures inside the studio */}
      <section className="py-20 bg-card" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              Ventures inside the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-intro">
              We keep the portfolio intentionally small. Each venture is a concrete proof that the beams of Truth, Capital, and Dignity can be engineered into systems—not just talked about.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card 
                key={venture.slug} 
                className="bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" 
                data-testid={`card-venture-${venture.slug}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3" data-testid={`text-${venture.slug}-meta`}>
                    {venture.metaLine}
                  </p>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2" data-testid={`heading-${venture.slug}`}>
                    {venture.tagline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4" data-testid={`text-${venture.slug}-body`}>
                    {venture.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="default" className="text-xs">{venture.primaryDomain}</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm" data-testid={`button-venture-${venture.slug}`}>
                    <Link href={venture.href}>
                      View {venture.slug === "uniqueness" ? "Uniqueness Engine" : venture.slug.charAt(0).toUpperCase() + venture.slug.slice(1)}
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How we build and govern systems */}
      <section className="py-20" data-testid="section-how-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-build">
              How we build and govern systems
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-build-body">
              We do not ship one-off experiments. Every venture moves through a defined sequence: clarify the problem, run small experiments, build in short verifiable steps, launch under guardrails, learn from incidents, and feed that learning back into the studio standards. Pillars describe what we refuse to compromise on; Process defines the six stages ventures move through; Standards encode the quality bar. The same rules that protect us apply to anyone building on these rails.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {howStudioFitsTogether.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-studio-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.text}</p>
                  <Button asChild variant="outline" size="sm" data-testid={`button-studio-${item.title.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    <Link href={item.href}>
                      {item.linkLabel}
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="font-mono text-sm uppercase tracking-wider" data-testid="button-explore-approach">
              <Link href="/approach">
                Explore the approach
                <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 bg-card" data-testid="section-why-we-exist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-why-we-exist">
              Why we exist
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-why-we-exist-body">
              Our purpose is simple to say and hard to execute: democratize institutional-grade leverage. Most rails favour incumbents who can afford opaque systems and bespoke intermediaries. We build for the people who can't. That means no hidden custodians, no fine-print games, and no dependence on unverifiable feeds. When we say we run systems on our own balance sheet first, it's because we've been on the wrong end of that asymmetry ourselves. The studio exists so those lessons become infrastructure anyone can use.
            </p>
            <Button asChild variant="outline" size="lg" className="font-mono text-sm uppercase tracking-wider" data-testid="button-read-purpose">
              <Link href="/studio">
                Read our purpose
                <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Talk to the studio */}
      <section className="py-20" data-testid="section-talk-studio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-talk-studio">
              Talk to the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-talk-studio-body">
              If you're building, regulating, or operating in any domain where verification, autonomy, and long-term resilience matter, we'd like to hear from you.
            </p>
            <Button asChild size="lg" className="font-mono text-sm uppercase tracking-wider" data-testid="button-start-conversation">
              <Link href="/connect">
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
