import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Sparkles, Trophy } from "lucide-react";

const brokenItems = [
  "Trust is assumed, not verified.",
  "Intermediaries extract value at every step.",
  "Identity is fragmented across hundreds of databases you don't control.",
  "Leverage is reserved for the already-wealthy.",
];

const futureItems = [
  "Verification replaces blind faith.",
  "Non-custodial rails eliminate the need for intermediaries.",
  "Identity becomes portable, private, and user-controlled.",
  "Institutional-grade tools become accessible to individuals.",
];

const successItems = [
  "Individuals can verify any claim without trusting the source.",
  "Treasury management works for a solo operator as well as it does for a fund.",
  "One proof of humanity unlocks access everywhere.",
  "The tools we build become invisible infrastructure—just how things work.",
];

export default function Vision() {
  return (
    <Layout>
      <PageMeta 
        title="Our Vision" 
        description="Where we're heading. A future where verification replaces trust and individuals control their own identity, treasury, and access."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-block text-sm font-mono uppercase tracking-widest text-primary mb-4" data-testid="text-category">
            Studio
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6" data-testid="text-page-title">
            Our Vision
          </h1>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed" data-testid="text-tldr">
            A future where trust is engineered, not assumed.
          </p>
        </div>
      </section>

      {/* What's Broken Today */}
      <section className="py-16 sm:py-20" data-testid="section-broken">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              What's broken today
            </p>
          </div>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            The current system is built on fragile assumptions
          </h2>
          
          <div className="max-w-3xl">
            <ul className="space-y-4">
              {brokenItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 pl-4 border-l-2 border-destructive/30"
                  data-testid={`broken-${index}`}
                >
                  <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Future We're Building */}
      <section className="py-16 sm:py-20 bg-card" data-testid="section-future">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              The future we're building toward
            </p>
          </div>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            Engineered trust at every layer
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {futureItems.map((item, index) => (
              <Card 
                key={index} 
                className="bg-background border-border"
                data-testid={`future-${index}`}
              >
                <CardContent className="p-6">
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="py-16 sm:py-20" data-testid="section-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-primary" />
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              What success looks like
            </p>
          </div>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8 max-w-2xl">
            The world we're working toward
          </h2>
          
          <div className="max-w-3xl">
            <ul className="space-y-4">
              {successItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 pl-4 border-l-2 border-primary/30"
                  data-testid={`success-${index}`}
                >
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <NextStepBlock
        label="Next"
        nextPage="Our Mission"
        description="What we do every day to make this vision real."
        href="/studio/mission"
      />
    </Layout>
  );
}
