import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const whyExistsBullets = [
  "Reduce guesswork before cards ever leave your hands.",
  "Make condition assessments repeatable instead of purely subjective.",
  "Turn condition into data that can be compared, audited, and improved.",
];

const whatLuminaDoes = [
  {
    title: "Captures the evidence",
    body: "Uses defined capture flows—such as mobile scans or workstation sessions—to record how a card looks and behaves under consistent conditions.",
  },
  {
    title: "Builds the signals",
    body: "Transforms those captures into structured signals that describe defects, centering, surface quality, and other attributes in a consistent format.",
  },
  {
    title: "Anchors the decisions",
    body: "Produces grading signals that can be linked to downstream decisions—what to grade, insure, or move—so everyone can see what those choices rest on.",
  },
];

const howLuminaOperates = [
  {
    title: "Evidence-first",
    body: "Every grading signal traces back to captured evidence. If the underlying data isn't there, the signal doesn't exist.",
  },
  {
    title: "Machine-assisted, not magic",
    body: "Models help detect patterns and inconsistencies at scale, but their role is constrained and auditable—no unexplained jumps from raw input to final score.",
  },
  {
    title: "Explainable decisions",
    body: "Signals are structured so stewards and partners can ask: What evidence did this depend on? How would the result change if that evidence did?",
  },
];

const whatLuminaIsNot = [
  "Not a public grading service where you submit cards for official slabs.",
  "Not a marketplace or exchange for cards, grades, or securities.",
  "Not an investment advisory or appraisal service.",
  "Not a promise of higher sale prices, yields, or returns.",
];

const whoLuminaSupports = [
  {
    title: "Collectors and stewards",
    body: "People deciding what to ship, insure, or hold based on condition they can see and compare.",
  },
  {
    title: "Ecosystem builders",
    body: "Teams wiring marketplaces, vaults, or logistics that depend on reliable, repeatable grading signals.",
  },
  {
    title: "Risk and coverage providers",
    body: "Organizations that need transparent condition data to underwrite or protect card-backed positions.",
  },
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
              Ventures · Truth
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-heading">
              Lumina — physics-aware grading.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Lumina is grading infrastructure for the trading card ecosystem. Instead of asking people to trust a stranger's eye or a black-box score, it turns physical condition into evidence-backed grading signals that anyone can inspect and reason about.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild size="lg" data-testid="button-back-to-ventures">
                <Link href="/ventures">
                  Back to all ventures
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

      <section className="py-20 bg-card" data-testid="section-why-lumina-exists">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-why-lumina-exists">
              Why Lumina exists
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-why-lumina-1">
              Card grading asks you to make serious decisions—what to ship, insure, or sell—based on processes you can't see. Criteria live in manuals, judgments happen behind closed doors, and scores can drift over time. That opacity turns every submission into a gamble.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-why-lumina-2">
              Lumina exists to anchor those decisions in measurable evidence. If a grade will affect what you do with an asset, you should be able to see which physical signals it rests on and how they were captured.
            </p>
            <ul className="space-y-3">
              {whyExistsBullets.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`why-exists-bullet-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-what-lumina-does">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-lumina-does">
              What Lumina does
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-lumina-does">
              Lumina turns raw physical condition into structured evidence for grading and risk decisions. It uses sensor inputs and defined checks to produce grading signals that can be traced, inspected, and replayed—not just accepted on trust.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatLuminaDoes.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-does-${index}`}
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

      <section className="py-20 bg-card" data-testid="section-how-lumina-operates">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-how-lumina-operates">
              How Lumina operates
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-how-lumina-operates">
              Lumina is AI-native but not a guessing machine. Machine intelligence helps extract and compare patterns from captures, while the system stays grounded in observable evidence and defined checks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {howLuminaOperates.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-operates-${index}`}
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

      <section className="py-20" data-testid="section-what-lumina-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-lumina-is-not">
              What Lumina is not
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-what-lumina-is-not-intro">
              Lumina is infrastructure for generating and using grading signals. It is not a grading company, marketplace, or investment product.
            </p>
            <Card className="bg-card border-border" data-testid="card-lumina-is-not">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {whatLuminaIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`is-not-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground/80 leading-relaxed mt-6" data-testid="text-is-not-disclaimer">
              This page describes how we think about grading infrastructure. It is not investment, legal, tax, or appraisal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-who-lumina-supports">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-who-lumina-supports">
              Who Lumina supports
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-who-lumina-supports">
              Lumina is built for people and teams who need grading to be more than a black box: collectors, marketplaces, insurers, and infrastructure providers who want condition to be measurable and explainable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whoLuminaSupports.map((card, index) => (
              <Card 
                key={index} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical" 
                data-testid={`card-supports-${index}`}
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

      <section className="py-20" data-testid="section-where-lumina-fits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-where-lumina-fits">
              Where Lumina fits inside VSG
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6" data-testid="text-where-lumina-fits">
              Lumina sits in the Truth domain. It gives us a way to anchor trading card decisions in measurable evidence, complementing the resilience we build with Helios in Capital and the protections we pursue with Uniqueness Engine in Dignity.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/ventures" className="text-sm text-primary hover:underline" data-testid="link-all-ventures">
                See all ventures
              </Link>
              <Link href="/insights" className="text-sm text-primary hover:underline" data-testid="link-insights">
                Read more insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Approach"
        description="Our approach and standards pages show how Truth, Capital, and Dignity show up across the studio."
        href="/approach"
      />
    </Layout>
  );
}
