import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Eye, Shield, Cog, Users, Scale, Target, Compass, Flag } from "lucide-react";

const pillars = [
  {
    name: "Validate Signal",
    description: "Cut through the noise. We build systems that separate truth from speculation using cryptographic proof.",
    href: "/approach/pillars",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    name: "Preserve Value",
    description: "Protect what matters. Non-custodial tools that keep your assets under your control.",
    href: "/approach/pillars",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    name: "Protect Identity",
    description: "Own your identity. Verification without surveillance, privacy without anonymity.",
    href: "/approach/pillars",
    icon: <Cog className="w-5 h-5" />,
  },
];

const pvm = [
  {
    label: "Purpose",
    tldr: "Democratize institutional-grade leverage.",
    href: "/studio/purpose",
    icon: <Target className="w-5 h-5" />,
  },
  {
    label: "Vision",
    tldr: "A future where trust is engineered, not assumed.",
    href: "/studio/vision",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    label: "Mission",
    tldr: "Build governed rails for identity, treasury, and liquidity.",
    href: "/studio/mission",
    icon: <Flag className="w-5 h-5" />,
  },
];

const values = [
  {
    name: "Intelligence-Augmented, Human-Accountable",
    description: "AI amplifies capability. Humans make decisions. The machine computes; the human connects.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: "Seek the Signal",
    description: "Verify, then trust. We engineer clarity through cryptographic proof and transparent systems.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    name: "Engineered Ambition",
    description: "Dream in decades, execute in milliseconds. We build generational technology with extreme precision.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    name: "Own the Engine",
    description: "Master the mechanics to rewrite the rules. We are pilots, not passengers.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    name: "Value is a Mirror",
    description: "Serve first, succeed second. We build non-custodial tools that restore power to the user.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Force Multiplier",
    description: "Level the playing field. We arm individuals with the tools to bypass gatekeepers.",
    icon: <Scale className="w-5 h-5" />,
  },
];

export default function Studio() {
  return (
    <Layout>
      <PageMeta 
        title="Studio" 
        description="The infrastructure of autonomy. VSG is an AI-native, non-custodial finance R&D studio building governed rails for identity, treasury, and liquidity."
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] flex items-center border-b border-border" 
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-block text-sm font-mono uppercase tracking-widest text-primary mb-4" data-testid="text-category">
            About
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6" data-testid="text-page-title">
            The infrastructure of autonomy.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-page-description">
            VSG is an AI-native, non-custodial finance R&D studio. We build the governed rails that verify truth, preserve wealth, and protect identity.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-card" data-testid="section-who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Who we are
          </p>
          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-relaxed mb-4">
              We are a two-founder R&D studio that fuses the speed of AI with the security of blockchain. Our focus: building institutional-grade financial primitives that operate without custodians or intermediaries.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every tool we build is stress-tested with our own capital first. No outside funding. No dilution. Just aligned incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 sm:py-20" data-testid="section-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Three pillars
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8">
            Our Strategic Framework
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Card 
                key={pillar.name} 
                className="bg-card border-border hover:border-primary/30 transition-colors h-full"
                data-testid={`card-pillar-${pillar.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {pillar.name}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4 flex-1">
                    {pillar.description}
                  </p>
                  <Link href={pillar.href} data-testid={`link-pillar-${pillar.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80" data-testid={`button-pillar-${pillar.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission */}
      <section className="py-16 sm:py-20 bg-card" data-testid="section-pvm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Foundation
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8">
            Purpose, Vision, Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pvm.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="group"
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                <Card className="bg-background border-border group-hover:border-primary/30 transition-colors h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {item.icon}
                    </div>
                    <p className="text-sm font-mono uppercase tracking-widest text-primary mb-2">
                      {item.label}
                    </p>
                    <p className="text-base text-foreground leading-relaxed mb-4 flex-1">
                      {item.tldr}
                    </p>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Operating principles
          </p>
          <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-8">
            Our Values
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card 
                key={value.name} 
                className="bg-card border-border"
                data-testid={`card-value-${value.name.toLowerCase().replace(/\s+/g, "-").replace(/[(),]/g, "")}`}
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-[2px] bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
                    {value.name}
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
