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
    text: "Can you inspect how this system arrives at its claims—and how it can fail—without being asked to just accept it on trust?",
  },
  {
    label: "Capital",
    text: "Does this design keep value resilient under stress, or does it quietly depend on best-case conditions to look safe?",
  },
  {
    label: "Dignity",
    text: "Does this system let people participate without turning their time, data, or identity into exhaust to harvest?",
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

const howWeBuild = [
  {
    title: "Approach",
    text: "See how we design inside constraints, prove patterns on ourselves first, and keep AI in the loop without handing it the mandate.",
    linkLabel: "Review our approach",
    href: "/approach",
  },
  {
    title: "Process",
    text: "Walk through the six-stage runway that every venture follows—from first definition to long-term learning.",
    linkLabel: "View the process",
    href: "/process",
  },
];

export default function Overview() {
  return (
    <Layout>
      <PageMeta 
        title="Verifiable Systems Group" 
        description="Verifiable Systems Group is an AI-native, cryptography-grounded venture studio. We engineer the infrastructure of verifiable autonomy—systems where truth can be inspected, capital stays resilient under stress, and people keep dignity and control."
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
              Verifiable Systems Group
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-[1.1] tracking-tight mb-6" data-testid="text-hero-heading">
              We engineer the infrastructure of verifiable autonomy.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl" data-testid="text-hero-body">
              We are an AI-native, cryptography-grounded venture studio that builds systems where truth can be inspected, capital stays resilient under stress, and people keep their dignity and control. Everything we ship runs on our own balance sheet and operations first, so it is infrastructure we rely on—not just ideas we talk about.
            </p>

            <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 max-w-xl" data-testid="text-hero-secondary">
              You shouldn't have to trade control for leverage or guess how a system will behave when conditions turn.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="font-mono text-sm uppercase tracking-wider" data-testid="button-explore-ventures">
                <Link href="/ventures">
                  Explore ventures
                  <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-mono text-sm uppercase tracking-wider" data-testid="button-see-how-we-work">
                <Link href="/approach">
                  See how we work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three questions at the core */}
      <section className="py-20 bg-card" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Three questions we ask about every system
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions-intro">
              Every venture, tool, or experiment at VSG is held up to the same three questions. If a design fails any one of them, it does not belong on rails other people might rely on.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {threeQuestions.map((item) => (
              <Card key={item.label} className="bg-background border-border h-full" data-testid={`card-question-${item.label.toLowerCase()}`}>
                <CardContent className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3" data-testid={`label-question-${item.label.toLowerCase()}`}>
                    {item.label}
                  </p>
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
              Verifiable Systems Group is an AI-native, cryptography-grounded venture studio that runs every pattern on its own balance sheet and infrastructure first. We engineer verifiable systems for capital, identity, and intelligence—systems where behaviors can be inspected, constraints are explicit, and control stays with the people who rely on them.
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

      {/* How we build */}
      <section className="py-20" data-testid="section-how-we-build">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-we-build">
              How we build
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-we-build-body">
              We treat systems like infrastructure, not experiments on other people. Every venture moves through a six-stage runway—Define, Validate, Build, Deploy, Evolve, Learn—under explicit guardrails for Truth, Capital, and Dignity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {howWeBuild.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" data-testid={`card-how-we-build-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.text}</p>
                  <Button asChild variant="outline" size="sm" data-testid={`button-${item.title.toLowerCase()}`}>
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

      {/* Governance and standards */}
      <section className="py-20 bg-card" data-testid="section-governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-governance">
              Governance and standards
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-governance-body">
              Our standards encode what systems at VSG are allowed to do before anyone writes code. They define limits, stewards, and logging requirements so ventures cannot drift into behaviors that look attractive on paper but fail under real conditions.
            </p>
            <Card className="bg-background border-border" data-testid="card-standards">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Review our standards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  See how Truth, Capital, and Dignity are turned into concrete guardrails for ventures, internal tools, and experiments.
                </p>
                <Button asChild variant="outline" size="sm" data-testid="button-standards">
                  <Link href="/standards">
                    View standards
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Field notes / Insights */}
      <section className="py-20" data-testid="section-field-notes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-field-notes">
              Field notes
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-field-notes-body">
              We publish notes from real experiments—what held up under pressure, what failed, and how we adjusted. No theatrics; just mechanics and lessons.
            </p>
            <Button asChild variant="outline" data-testid="button-read-insights">
              <Link href="/insights">
                Read insights
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
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
