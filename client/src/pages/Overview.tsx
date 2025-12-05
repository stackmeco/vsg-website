import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import gridTexture from "@assets/grid_texture.png";

const threeQuestions = [
  {
    label: "Truth",
    title: "Truth · What can be trusted?",
    text: "We care about what can be proven, not just stated. Truth here means evidence: provenance trails, logs, and behaviors you can inspect and replay—not black-box scores or unverifiable feeds.",
  },
  {
    label: "Capital",
    title: "Capital · How should value move?",
    text: "We focus on how value moves under constraints: limits, buffers, and clear paths for rollback. Capital should work without leaving governed control, not drift into opaque, brittle exposures.",
  },
  {
    label: "Dignity",
    title: "Dignity · How do people participate?",
    text: "People should not have to surrender their whole identity to show up. Dignity means personhood without exposure: proving enough to participate without becoming the product of the system.",
  },
];

const whatVsgIs = [
  {
    title: "AI-native studio",
    text: "We design as if machine intelligence is in the loop from day one. AI handles the mechanics—monitoring, patterning, and stress-testing—while people own mandates, ethics, and the veto.",
  },
  {
    title: "Cryptography-grounded",
    text: "We anchor flows to proofs, audit trails, and constraints instead of narratives. Verifiability and rollback paths are designed in before slogans and decks.",
  },
  {
    title: "Internal-first and non-custodial",
    text: "We route our own operations and capital through new architectures first, favoring non-custodial rails where possible. If a pattern fails early, the blast radius lands on us—not on outsiders.",
  },
];

const ventures = [
  {
    slug: "helios",
    metaLine: "Helios · Capital · Venture",
    tagline: "Treasury execution under explicit constraints.",
    description: "Helios is our internal execution engine for digital asset treasuries. It focuses on routing positions across approved venues under predefined risk limits, so capital remains resilient under stress instead of drifting into hidden exposures.",
    primaryDomain: "Capital",
    href: "/ventures/helios",
  },
  {
    slug: "lumina",
    metaLine: "Lumina · Truth · Venture",
    tagline: "Physics-aware grading infrastructure.",
    description: "Lumina turns the condition of an asset into evidence you can inspect, not a guess you have to accept. It converts wear, defects, and anomalies into structured signals that can feed grading, insurance, and pricing decisions.",
    primaryDomain: "Truth",
    href: "/ventures/lumina",
  },
  {
    slug: "uniqueness",
    metaLine: "Uniqueness Engine · Dignity · Venture",
    tagline: "Personhood without exposure.",
    description: "Uniqueness Engine is infrastructure for one-person-one-presence—helping systems distinguish real participants from duplicates and automation without turning identity into surveillance or lock-in.",
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
        description="Verifiable Systems Group is an AI-native, cryptography-grounded venture studio. We engineer the infrastructure of verifiable autonomy across Truth, Capital, and Dignity—run on our own balance sheet first."
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
              Verifiable Systems Group · Studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              The infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl" data-testid="text-hero-body">
              Verifiable Systems Group (VSG) is an AI-native, cryptography-grounded venture studio. We design and run systems where behaviors are inspectable, capital moves under explicit constraints, and people participate without becoming product—starting with our own balance sheet and environments before any pattern becomes a public claim.
            </p>

            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 max-w-xl" data-testid="text-hero-secondary">
              You shouldn't have to trust untested rails. We organize everything we build around three questions: what can be trusted, how should capital move, and how do people keep their dignity online.
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
                  See how we build
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three questions we organize around */}
      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Three questions we organize around
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-intro">
              Instead of generic pillars, we use three questions to orient our work. Every venture, standard, and experiment has to answer at least one of them clearly—and it needs a way to prove that answer under stress.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {threeQuestions.map((item) => (
              <Card key={item.label} className="bg-background border-border h-full" data-testid={`card-question-${item.label.toLowerCase()}`}>
                <CardContent className="p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3" data-testid={`label-question-${item.label.toLowerCase()}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-question-${item.label.toLowerCase()}`}>
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
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-vsg-is">
              What VSG is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-vsg-is-body">
              VSG is an AI-native, cryptography-grounded venture studio. We run every pattern on our own balance sheet first. We engineer systems where truth is provable, capital moves under constraints instead of vibes, and participation does not require overexposure. Our work is infrastructure-grade by design: precise, governed, and built to handle failure modes, not hide them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatVsgIs.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical h-full" data-testid={`card-what-vsg-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures: proofs of how we think */}
      <section className="py-20 bg-card" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              Ventures: proofs of how we think
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-intro">
              Each venture is a concrete answer to a problem we have lived ourselves: a treasury that felt brittle, a grade that could not be inspected, or an identity check that asked for too much. They exist to prove that our principles survive contact with real constraints.
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

      {/* How the studio fits together */}
      <section className="py-20" data-testid="section-how-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-build">
              How the studio fits together
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-build-body">
              We don't ship in isolation. Ventures, our six-stage runway, and our standards framework reinforce each other—so every new system has a path from concept to governed operation, with clear reasons to exist.
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
        </div>
      </section>

      {/* Talk to the studio */}
      <section className="py-20 bg-card" data-testid="section-talk-studio">
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
