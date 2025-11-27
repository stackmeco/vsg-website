import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Scale, Wallet, Cog, MessageSquare, HelpCircle } from "lucide-react";
import { changelog } from "@/data/articles";
import gearsTexture from "@assets/gears_texture.png";

const definitions = [
  {
    term: "Verifiable Systems",
    definition: "Infrastructure where state, logic, and risk are mathematically provable. Auditability is an architectural constraint, not a feature.",
  },
  {
    term: "Deterministic Intelligence",
    definition: "Systems that constrain stochastic models with rigid verification layers. Outputs are auditable, cited, and hallucination-resistant. AI as reasoning engine, not knowledge base.",
  },
  {
    term: "Digital Assets",
    definition: "Assets with provable uniqueness and transferable ownership. Not copyable files with licenses — instruments with cryptographic guarantees. Bitcoin is the clearest example.",
  },
];

const functions = [
  {
    title: "Governance & Risk",
    description: "Definition of solvency thresholds, leverage caps, and negative constraints for all treasury and product operations.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Compliance",
    description: "Alignment with legal and regulatory constraints across operating jurisdictions.",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Finance & Treasury",
    description: "Tracking of all capital flows, loan positions, and expenditures with auditable precision.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    title: "Operations",
    description: "Stage-gated workflow from specification through architecture, implementation, and verification.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    title: "Signal Integrity",
    description: "Ensuring external outputs strictly match internal telemetry and system state. No divergence between stated and actual conditions.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];


export default function System() {
  return (
    <Layout>
      <PageMeta 
        title="System" 
        description="How Verified Systems works: deterministic infrastructure, Bitcoin treasury, governance, and building verifiable systems for intelligence and value." 
      />
      <section className="py-20 lg:py-28 relative" data-testid="section-hero">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              System Architecture
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A unified R&D unit backed by a proprietary Bitcoin treasury. System integrity is maintained through strict functional separation: Governance caps risk, Treasury manages capital, Engineering validates truth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-definitions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              What we mean
            </p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Terms we use, defined plainly
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {definitions.map((def) => (
              <Card key={def.term} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-primary" />
                    <h3 className="font-heading font-semibold text-foreground">{def.term}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{def.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" data-testid="section-treasury">
        {/* Gears Texture Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${gearsTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/90 to-background/70" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Bitcoin Treasury Program
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We hold BTC on our own balance sheet. When the risk/reward looks reasonable, we borrow stablecoins against a portion of that BTC, using reputable on-chain venues. Those borrowed funds either:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                fund development time and infrastructure for our projects, or
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                let us accumulate more BTC when we believe it's underpriced.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              This is an internal program. We don't manage anyone else's assets, and we don't offer treasury products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-functions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Functions behind the studio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Verified Systems is still just two people, but we think in terms of functions so decisions and responsibilities are clear.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((func) => (
              <ValueCard key={func.title} {...func} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-changelog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Changelog
            </h2>
            <div className="space-y-4">
              {changelog.map((entry, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-sm font-mono text-muted-foreground w-20 flex-shrink-0">
                    {entry.date}
                  </span>
                  <p className="text-sm text-foreground">{entry.entry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Pipeline"
        description="See our R&D projects and their current status."
        href="/pipeline"
      />
    </Layout>
  );
}
