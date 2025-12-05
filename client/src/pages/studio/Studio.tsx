import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const weAre = [
  "An AI-native studio that assumes machine intelligence from day one.",
  "Cryptography-grounded: we think in proofs, logs, and constraints.",
  "Balance-sheet-first: we run our own patterns before we offer them to anyone.",
  "Focused on Truth, Capital, and Dignity as the beams that hold the work together.",
];

const weAreNot = [
  "A consultancy selling bespoke advice without skin in the game.",
  "A custodial platform, yield product, or asset pool.",
  "A generic 'AI startup' chasing hype without guardrails.",
  "An agency that rebuilds the same thing differently for each client.",
];

const pvm = [
  {
    label: "Purpose",
    line: "To democratize institutional-grade leverage.",
    description:
      "We exist to dismantle the barriers that keep individuals from using the same caliber of tools as large institutions. Verifiable systems, non-custodial control, and clear constraints should be accessible without needing a boardroom or a trading desk.",
  },
  {
    label: "Vision",
    line: "A future where trust is an engineered feature, not a gamble.",
    description:
      "Today, too many systems depend on blind faith in intermediaries and opaque algorithms. We want a world where Truth, Capital, and Dignity are anchored to evidence, governed flows, and privacy by design—so people can see how systems behave before they depend on them.",
  },
  {
    label: "Mission",
    line: "We engineer the infrastructure of verifiable autonomy.",
    description:
      "Our mission is to design and operate AI-native, cryptography-grounded systems where decisions, capital, and participation are constrained by construction. That infrastructure shows up in our ventures and in the patterns we publish once they have survived our own stress tests.",
  },
];

const studioOps = [
  {
    title: "Balance-sheet-first",
    body:
      "We test every pattern on our own capital and infrastructure before anyone else depends on it. That means we feel the upside and the downside of our designs directly, and we retire ideas that do not hold under stress.",
  },
  {
    title: "Three beams: Truth, Capital, Dignity",
    body:
      "Every venture lives at the intersection of Truth, Capital, and Dignity. Truth systems handle evidence and explanation, Capital systems handle non-custodial flows and limits, and Dignity systems handle personhood and participation without overexposure.",
  },
  {
    title: "Three layers: Pillars, Process, Standards",
    body:
      "Pillars define what we refuse to compromise on. Process describes our six-stage venture path. Standards define the quality and risk bar systems must clear before they carry real stakes. Together, they make the studio's behaviour inspectable.",
  },
];

const ventures = [
  {
    name: "Helios",
    role: "Capital beam",
    description:
      "Our internal execution engine for digital asset treasury. Helios focuses on preserving capital under constraints, making it easier to understand how positions behave under stress while remaining under governed, non-custodial control.",
    href: "/ventures/helios",
  },
  {
    name: "Lumina",
    role: "Truth beam",
    description:
      "Physics-aware grading infrastructure for physical collectibles. Lumina turns messy real-world condition into consistent, inspectable signals that help people make decisions without trusting a black-box score.",
    href: "/ventures/lumina",
  },
  {
    name: "Uniqueness Engine",
    role: "Dignity beam",
    description:
      "Privacy-preserving personhood verification. The Uniqueness Engine proves that a participant is a real, singular person without forcing them to expose more about their life than is necessary to join.",
    href: "/ventures/uniqueness",
  },
];

const whoThisIsFor = [
  "Operators and founders who have felt the cost of opaque systems first-hand.",
  "Stewards of capital who care as much about drawdowns and downside paths as upside.",
  "Builders who want AI-native systems that can explain themselves under stress.",
  "Partners who prefer clear constraints and logs over slogans and promises.",
];

export default function Studio() {
  return (
    <Layout>
      <PageMeta
        title="Studio"
        description="Who Verifiable Systems Group is: an AI-native, cryptography-grounded venture studio building the infrastructure of verifiable autonomy across Truth, Capital, and Dignity—run on our own balance sheet first."
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
              AI-native venture studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              The studio behind verifiable autonomy.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Verifiable Systems Group is an AI-native, cryptography-grounded venture studio. We design and run systems where Truth, Capital, and Dignity are protected by construction, not by handshakes—starting on our own balance sheet before anyone else depends on them.
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-warmth">
              You shouldn't have to choose between safety and leverage. We built VSG after hitting that wall ourselves, and every venture we ship is shaped by that experience.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild data-testid="button-see-approach">
                <Link href="/approach">
                  See how we build
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild data-testid="button-read-standards">
                <Link href="/standards">Read our standards</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What VSG is */}
      <section className="py-20 bg-card" data-testid="section-what-vsg-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-what-vsg-is">
              What Verifiable Systems Group is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-vsg-is-intro">
              Verifiable Systems Group (VSG) is a studio for systems that must not fail silently. We fuse machine intelligence and cryptography to build AI-native, non-custodial infrastructure—tested first on our own balance sheet, then shared as patterns and ventures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border" data-testid="card-we-are">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">We are:</h3>
                <ul className="space-y-3">
                  {weAre.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-we-are-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-we-are-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">We are not:</h3>
                <ul className="space-y-3">
                  {weAreNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed" data-testid={`item-we-are-not-${index}`}>
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

      {/* Purpose, Vision, Mission */}
      <section className="py-20" data-testid="section-pvm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-pvm">
              Purpose, vision, and mission
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-pvm-intro">
              These are the canonical lines. They anchor every narrative—from how we describe VSG in a sentence to how we design a venture or negotiate a constraint.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pvm.map((item) => (
              <Card
                key={item.label}
                className="flex flex-col justify-between bg-card/60 border-border backdrop-blur"
                data-testid={`card-pvm-${item.label.toLowerCase()}`}
              >
                <CardContent className="p-6 space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground" data-testid={`label-pvm-${item.label.toLowerCase()}`}>
                    {item.label}
                  </p>
                  <h3 className="text-sm font-semibold tracking-tight sm:text-base text-foreground" data-testid={`line-pvm-${item.label.toLowerCase()}`}>
                    {item.line}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How the studio operates */}
      <section className="py-20 bg-card" data-testid="section-studio-ops">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-studio-ops">
              How the studio operates
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-studio-ops-intro">
              We keep VSG predictable by separating what never changes from what can evolve, and by running everything on our own balance sheet before we promote it to shared infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studioOps.map((item, index) => (
              <Card
                key={item.title}
                className="flex flex-col h-full bg-background border-border"
                data-testid={`card-studio-ops-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures inside the studio */}
      <section className="py-20" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-ventures">
              Ventures inside the studio
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-ventures-intro">
              Each venture answers a specific question about Truth, Capital, or Dignity. They run on our own balance sheet first, and we only share patterns once they have survived real conditions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <Card
                key={venture.name}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-venture-${venture.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-2" data-testid={`label-venture-${venture.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {venture.role}
                  </p>
                  <h3 className="font-heading font-semibold text-foreground mb-3">{venture.name}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">{venture.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={venture.href}>
                      Learn more
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who this studio is for */}
      <section className="py-20 bg-card" data-testid="section-who-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-who-for">
              Who this studio is for
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-who-for-intro">
              We build for people and teams who already carry real risk and want systems that make that risk more inspectable—not for those looking for shortcuts or speculation.
            </p>
            <ul className="space-y-3">
              {whoThisIsFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed" data-testid={`item-who-for-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/50 border-y border-border" data-testid="section-disclaimer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-disclaimer">
              Nothing on this page is investment, legal, or tax advice. It describes how we choose to operate, not a recommendation for anyone else's structure.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="See how our pillars, process, and standards turn into governed, AI-native systems."
        href="/approach"
      />
    </Layout>
  );
}
