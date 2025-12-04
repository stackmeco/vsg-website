import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const futureCharacteristics = [
  {
    title: "Transparent by design",
    text: "Key decisions come with evidence: where the inputs came from, how they were transformed, and which limits were enforced.",
  },
  {
    title: "Non-custodial by default",
    text: "Control over capital and identity stays as close to the edge as possible. Intermediaries run rails; they do not hold keys.",
  },
  {
    title: "Governed, not improvised",
    text: "Systems are built with clear mandates, limits, and rollback paths. Surprises are treated as design failures, not acceptable cost.",
  },
];

const whatWeSayYesTo = [
  "We say yes to systems we can explain under stress.",
  "We say yes to designs that reduce asymmetry between incumbents and individuals.",
  "We say yes to ventures that make it easier to verify first and trust second.",
];

export default function Vision() {
  return (
    <Layout>
      <PageMeta 
        title="Vision — A Future Where Trust Is Engineered" 
        description="We envision a world where trust is an engineered feature, not a gamble—where flows that matter are verifiable by design and people can inspect what they depend on."
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
              Vision
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              A future where "trust" is an engineered feature, not a gamble.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              Most systems still ask you to take trust on faith: hand over capital, data, or time and hope the rails hold. Our vision is a world where that hope is replaced with engineering—where the flows that matter are verifiable by design, and trust is something you can inspect, not just feel.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/approach">
                <Button size="lg" data-testid="button-how-we-design">
                  See how we design
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/ventures">
                <Button size="lg" variant="outline" data-testid="button-explore-ventures">
                  Explore the ventures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-future-looks-like">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-future-looks-like">
              What this future looks like
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-future-looks-like">
              In our vision, the systems that matter most—those that move capital, anchor decisions, or govern participation—are observable end to end. They expose enough of their inner workings that stewards can see how they behave on the calmest and worst days, and people can understand how they are being treated.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {futureCharacteristics.map((item, index) => (
              <Card
                key={index}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-future-${index}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-guides-choices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6" data-testid="heading-guides-choices">
              How it guides what we say yes to
            </h2>
            <ul className="space-y-4 mb-8">
              {whatWeSayYesTo.map((item, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`list-say-yes-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground/80 leading-relaxed" data-testid="text-vision-note">
              If we cannot see how something behaves under stress, we do not build on it.
            </p>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Mission"
        description="See what we are actually doing today to move toward this vision."
        href="/mission"
      />
    </Layout>
  );
}
