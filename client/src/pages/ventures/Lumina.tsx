import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const whatLuminaIs = [
  {
    title: "Infrastructure, not a logo",
    body: "Lumina is designed as rails that other experiences can sit on—mobile flows, marketplace checks, pre-grading tools, inventory workflows—rather than a logo you ship cards to and hope for the best.",
  },
  {
    title: "Evidence-first",
    body: "Everything starts with what can be measured: edges, surfaces, centering, print artifacts, handling scars. If we cannot trace a signal back to a physical or sensor-detected feature, it does not drive a conclusion.",
  },
  {
    title: "AI-native, but governed",
    body: "Machine intelligence does the high-volume patterning and anomaly detection. People define what counts as evidence, what ranges are acceptable, and where uncertainty must be surfaced instead of hidden.",
  },
];

const problemCards = [
  {
    title: "Opaque decisions",
    body: "Most grading today happens behind closed doors. You see a label and a number, but not the chain of evidence or the thresholds that led there.",
  },
  {
    title: "Inconsistent outcomes",
    body: "Similar cards can receive different results, even from the same provider. That uncertainty flows directly into pricing, insurance, and trust.",
  },
  {
    title: "Friction everywhere",
    body: "Shipping, wait times, and limited capacity create bottlenecks. Many cards never get evaluated at all, even when condition clearly affects risk.",
  },
];

const howLuminaWorks = [
  {
    title: "Capture and context",
    body: "Cards are captured with defined setups that control for lighting, angles, and motion. We record enough context so we know what the system saw—and what it could not see.",
  },
  {
    title: "Detection and signals",
    body: "Machine intelligence looks for specific, documented features: edge wear, surface issues, centering drift, printing artifacts, and other condition markers. Each becomes a signal with an explanation, not just a floating score.",
  },
  {
    title: "Outputs and decisions",
    body: "Lumina outputs structured condition signals, not final instructions. Those signals can drive pre-grading decisions, insurance checks, pricing workflows, or human reviews—under rules that can be audited and adjusted.",
  },
];

const threeQuestions = [
  {
    label: "Truth",
    text: "Lumina anchors condition to evidence. Every key signal must trace back to something observable in the capture. If we cannot show where it came from, it should not drive a decision.",
  },
  {
    label: "Capital",
    text: "Condition signals feed into pricing, insurance, and collateral decisions. By making those signals consistent and transparent, we reduce the chance that unseen defects or inconsistent treatment quietly distort risk.",
  },
  {
    label: "Dignity",
    text: "Collectors and platforms deserve to know how their assets are evaluated. Lumina aims to reduce the need to blindly trust, replacing 'just accept this' with 'here is what we saw and how it was interpreted'.",
  },
];

const useCases = [
  {
    title: "Pre-grading decisions",
    body: "Helping collectors and platforms decide which assets are worth sending into full grading or insurance workflows—before they spend time and money.",
  },
  {
    title: "Inventory and intake checks",
    body: "Giving marketplaces and vaults a structured way to flag condition risk on intake, instead of relying solely on manual inspection or after-the-fact disputes.",
  },
  {
    title: "Risk and pricing inputs",
    body: "Supporting pricing and risk models with consistent, machine-readable condition signals rather than ad-hoc, one-off impressions.",
  },
];

const luminaIs = [
  "Grading infrastructure focused on evidence and repeatability.",
  "A Truth-domain venture that we run on our own collections and internal use cases first.",
  "A way to turn condition into structured signals that other systems and teams can understand.",
];

const luminaIsNot = [
  "Not a promise that we will grade or insure anyone's assets.",
  "Not a guarantee of specific valuations, prices, or outcomes.",
  "Not an offer of investment, yield, or securities.",
];

export default function Lumina() {
  return (
    <Layout>
      <PageMeta
        title="Lumina — Physics-Aware Grading"
        description="Lumina is grading infrastructure for the trading card ecosystem. It turns physical condition into evidence-backed grading signals that anyone can inspect and reason about."
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
              Truth · Venture
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Lumina is physics-aware grading infrastructure.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-hero-body">
              Lumina turns the condition of an asset into evidence you can inspect, not a guess you have to accept. It focuses on one question: how do you turn what a card has actually lived through into repeatable, verifiable signals instead of inconsistent, opaque scores?
            </p>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-hero-secondary">
              We run Lumina against our own collections and internal use cases first, so every pattern we share has survived real handling, imperfections, and edge cases.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" data-testid="button-see-how-we-work">
                <Link href="/approach">
                  See how we work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-lumina-is">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-lumina-is">
              What Lumina is
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-lumina-is">
              Lumina is grading infrastructure focused on evidence. It uses sensors and machine intelligence to turn physical wear, defects, and anomalies into structured signals. Those signals can feed decisions about grading, insurance, pricing, and risk—without forcing anyone to trust a single opaque opinion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatLuminaIs.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-what-is-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-problem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-problem">
              The problem Lumina addresses
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-problem">
              Collectors, platforms, and insurers all hit the same wall: condition is critical, but the path from card to grade is often slow, inconsistent, and opaque. You can send two copies of the same card and receive meaningfully different outcomes—with no way to inspect why.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problemCards.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-problem-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-how-lumina-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-lumina-works">
              How Lumina works (high-level)
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-lumina-works">
              Lumina is built as a pipeline, not a black box. It starts with how the card is captured, moves through a series of detection and analysis passes, and ends with structured outputs that other systems can use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howLuminaWorks.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-how-works-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6 max-w-3xl" data-testid="text-how-works-note">
            The goal is not to remove people—it is to give them better, inspectable inputs.
          </p>
        </div>
      </section>

      <section className="py-20" data-testid="section-three-questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-three-questions">
              Lumina and the three questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-three-questions">
              Lumina lives primarily in Truth, but any system that affects asset value and access has consequences for Capital and Dignity too.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {threeQuestions.map((item, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border" 
                data-testid={`card-question-${item.label.toLowerCase()}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.label}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-use-cases">
              Use cases Lumina is exploring
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-use-cases">
              Because Lumina is infrastructure, it can sit underneath different experiences. We focus first on cases where condition uncertainty has the highest impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-use-case-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What Lumina is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-border" data-testid="card-lumina-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  Lumina is
                </h3>
                <ul className="space-y-3">
                  {luminaIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`lumina-is-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card border-border" data-testid="card-lumina-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  Lumina is not
                </h3>
                <ul className="space-y-3">
                  {luminaIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`lumina-is-not-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-lumina-disclaimer">
            This page describes how we build and use Lumina for our own needs. It is not investment, legal, tax, or insurance advice.
          </p>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-cross-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <Button asChild variant="outline" size="sm" data-testid="link-all-ventures">
              <Link href="/ventures">
                Back to all ventures
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-insights">
              <Link href="/insights">
                Read related insights
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" data-testid="link-approach">
              <Link href="/approach">
                Review our approach
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards describe how Truth, Capital, and Dignity shape systems like Lumina before they touch anyone else's decisions."
        href="/approach"
      />
    </Layout>
  );
}
