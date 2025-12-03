import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Eye, Shield, Cog, Users, Scale, Target, Compass, Flag } from "lucide-react";
import { pillars, pvm, values } from "@/data/studio";

const pillarIcons: Record<string, JSX.Element> = {
  "validate-signal": <Eye className="w-4 h-4" />,
  "preserve-value": <Shield className="w-4 h-4" />,
  "protect-identity": <Cog className="w-4 h-4" />,
};

const pvmIcons: Record<string, JSX.Element> = {
  "purpose": <Target className="w-4 h-4" />,
  "vision": <Compass className="w-4 h-4" />,
  "mission": <Flag className="w-4 h-4" />,
};

const valueIcons: Record<string, JSX.Element> = {
  "ia": <Zap className="w-5 h-5" />,
  "signal": <Eye className="w-5 h-5" />,
  "ambition": <Shield className="w-5 h-5" />,
  "engine": <Cog className="w-5 h-5" />,
  "mirror": <Users className="w-5 h-5" />,
  "multiplier": <Scale className="w-5 h-5" />,
};

export default function Studio() {
  return (
    <Layout>
      <PageMeta 
        title="Studio" 
        description="The infrastructure of autonomy. VSG is an AI-native, non-custodial finance R&D studio building governed rails for identity, treasury, and liquidity."
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
              About
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[3rem] text-foreground leading-tight tracking-tight mb-6">
              The infrastructure of autonomy.
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              VSG is an AI-native, non-custodial finance R&D studio. We build the governed rails that verify truth, preserve wealth, and protect identity.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Who we are
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Two Founders, One Mission
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We are a two-founder R&D studio that fuses the speed of AI with the security of blockchain. Our focus: building institutional-grade financial primitives that operate without custodians or intermediaries.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every tool we build is stress-tested with our own capital first. No outside funding. No dilution. Just aligned incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-card" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Three pillars
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Our Strategic Framework
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card 
                key={pillar.id} 
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-pillar-${pillar.id}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex items-start gap-3 mb-3 h-8">
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      {pillarIcons[pillar.id]}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground">
                      {pillar.name}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <Link href={pillar.href} className="mt-auto">
                    <span 
                      className="text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                      data-testid={`button-learn-pillar-${pillar.id}`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission */}
      <section className="py-20" data-testid="section-pvm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Foundation
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Purpose, Vision, Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pvm.map((item) => (
              <Card 
                key={item.id}
                className="flex flex-col h-full bg-card border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-pvm-${item.id}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="flex items-start gap-3 mb-3 h-8">
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      {pvmIcons[item.id]}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground">
                      {item.label}
                    </h3>
                  </div>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.tldr}
                  </p>
                  <Link href={item.href} className="mt-auto">
                    <span 
                      className="text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                      data-testid={`link-learn-${item.id}`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
              Operating principles
            </p>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card 
                key={value.id}
                className="flex flex-col h-full bg-background border-border hover:border-primary/30 transition-colors duration-150 ease-mechanical"
                data-testid={`card-value-${value.id}`}
              >
                <CardContent className="flex flex-col h-full p-6">
                  <div className="w-8 h-8 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-3">
                    {valueIcons[value.id]}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                    {value.shortName}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        label="Next"
        nextPage="Our Purpose"
        description="Why VSG exists and what drives every decision we make."
        href="/studio/purpose"
      />
    </Layout>
  );
}
