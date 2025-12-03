import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Sparkles, Trophy } from "lucide-react";
import { visionBroken, visionFuture, visionSuccess } from "@/data/studio";

export default function Vision() {
  return (
    <Layout>
      <PageMeta 
        title="Our Vision" 
        description="Where we're heading. A future where verification replaces trust and individuals control their own identity, treasury, and access."
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
            <p className="text-sm font-mono uppercase tracking-widest text-primary mb-6">
              Studio
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground leading-tight tracking-tight mb-6">
              Our Vision
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              A future where trust is engineered, not assumed.
            </p>
          </div>
        </div>
      </section>

      {/* What's Broken Today */}
      <section className="py-20 bg-card" data-testid="section-broken">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                What's broken today
              </p>
            </div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              The Current System
            </h2>
          </div>
          
          <div className="max-w-3xl space-y-3">
            {visionBroken.map((item, index) => (
              <div 
                key={index} 
                className="pl-4 border-l-2 border-destructive/30"
                data-testid={`text-broken-${index}`}
              >
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Future We're Building */}
      <section className="py-20" data-testid="section-future">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                The future we're building toward
              </p>
            </div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Engineered Trust
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {visionFuture.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-future-${index}`}
              >
                <CardContent className="p-6">
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="py-20 bg-card" data-testid="section-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-primary" />
              <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                What success looks like
              </p>
            </div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              The World We're Building
            </h2>
          </div>
          
          <div className="max-w-3xl space-y-3">
            {visionSuccess.map((item, index) => (
              <div 
                key={index} 
                className="pl-4 border-l-2 border-primary/30"
                data-testid={`text-success-${index}`}
              >
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
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
