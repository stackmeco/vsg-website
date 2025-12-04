import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

const domainCards = [
  {
    title: "Truth",
    text: "If leverage is going to be shared, the facts underneath it have to be inspectable. We build Truth ventures so decisions—like grading or risk flags—rest on evidence, not just authority.",
  },
  {
    title: "Capital",
    text: "If capital is going to work for more people, it has to move without hidden downside. We build Capital ventures so assets can be put to work under explicit limits instead of opaque promises.",
  },
  {
    title: "Dignity",
    text: "If leverage is going to be fair, people cannot become the product. We build Dignity ventures so people can participate, prove presence, and protect their time without being over-exposed.",
  },
];

const purposeIs = [
  "A design constraint on every venture we run.",
  "A test we apply before we commit capital or time.",
  "A lens for deciding which problems we are willing to work on.",
];

const purposeIsNot = [
  "Not a slogan for marketing campaigns.",
  "Not a promise of returns, yields, or outcomes.",
  "Not a guarantee that every tool is for everyone.",
];

export default function Purpose() {
  return (
    <Layout>
      <PageMeta 
        title="Purpose — To Democratize Institutional-Grade Leverage" 
        description="VSG exists to close the gap between institutional-grade tools and the people who need them most—without forcing anyone to surrender control."
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
              Purpose
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
              To democratize institutional-grade leverage.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-hero-body">
              We exist because most of the world still runs on rails that favour the largest players. They get the best tools, the clearest information, and the safest ways to put capital to work—everyone else gets complexity or risk. Our purpose is to close that gap by building infrastructure that lets individuals and small teams access institutional-grade leverage without surrendering control.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/ventures">
                <Button size="lg" data-testid="button-see-ventures">
                  See the ventures
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/approach">
                <Button size="lg" variant="outline" data-testid="button-how-we-work">
                  How we work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-what-this-means">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-what-this-means">
              What this means in practice
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4" data-testid="text-what-this-means-1">
              Democratizing institutional-grade leverage does not mean copying institutional products. It means giving people access to the kind of control, clarity, and protection usually reserved for the largest players—without turning them into institutions.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-what-this-means-2">
              In our work, this looks like non-custodial rails, verifiable decision flows, and systems that keep people in charge of mandates while machines handle the mechanics. You shouldn't have to choose between keeping your assets idle or handing the keys to a black box.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4" data-testid="heading-domains">
              How it shapes Truth, Capital, and Dignity
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {domainCards.map((item) => {
              const slugTitle = item.title.toLowerCase();
              return (
                <Card
                  key={item.title}
                  className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                  data-testid={`card-domain-${slugTitle}`}
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-is-is-not">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8" data-testid="heading-is-is-not">
            What this purpose is / is not
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-background border-border" data-testid="card-purpose-is">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">This purpose is</h3>
                <ul className="space-y-3">
                  {purposeIs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-purpose-is-${index}`}>
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-background border-border" data-testid="card-purpose-is-not">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">This purpose is not</h3>
                <ul className="space-y-3">
                  {purposeIsNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`list-purpose-is-not-${index}`}>
                      <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-3xl" data-testid="text-purpose-disclaimer">
            This page describes why we exist as a studio. It is not investment, legal, or tax advice.
          </p>
        </div>
      </section>

      <NextStepBlock
        nextPage="Vision"
        description="See the future state we're working toward if we do our job well."
        href="/vision"
      />
    </Layout>
  );
}
