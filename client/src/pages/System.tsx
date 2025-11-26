import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Scale, Wallet, Cog, MessageSquare, HelpCircle } from "lucide-react";

const definitions = [
  {
    term: "Verifiable Systems",
    definition: "Systems where the rules are visible, ownership is real, and risks don't hide behind complexity. A system is verifiable when you can inspect how it works, understand what you're exposed to, and verify that it does what it claims.",
  },
  {
    term: "AI",
    definition: "Deterministic Intelligence. Systems designed to constrain stochastic models (LLMs) with rigid verification layers, ensuring outputs are auditable, cited, and hallucination-resistant. We build infrastructure that treats AI as a reasoning engine, not a knowledge base.",
  },
  {
    term: "Digital Assets",
    definition: "The ability to make digital things genuinely limited and ownable — not just copyable files with licenses, but assets with provable uniqueness and transferable ownership. Bitcoin is the clearest example; we're exploring what else can work this way.",
  },
];

const functions = [
  {
    title: "Governance & Risk",
    description: "How we set thresholds, limits, and 'no's — especially around leverage and new experiments.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Compliance",
    description: "How we stay aligned with legal and regulatory constraints in the places we operate.",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Finance & Treasury",
    description: "How we track every satoshi, loan, and spend, and keep our own books honest.",
    icon: <Wallet className="w-5 h-5" />,
  },
  {
    title: "Operations",
    description: "How work moves from idea to requirements to architecture to implementation and review.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    title: "Communications & Brand",
    description: "How we keep our story in sync with what's actually true — site updates, Library posts, and corrections when we get something wrong.",
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
              How Verified Systems actually works
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Two founders, one balance sheet, a Bitcoin treasury, and a small set of functions that keep us honest: governance, risk, compliance, finance, treasury, operations, and communications.
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

      <section className="py-20" data-testid="section-treasury">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-20" data-testid="section-functions">
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

      <NextStepBlock
        nextPage="Pipeline"
        description="See our R&D projects and their current status."
        href="/pipeline"
      />
    </Layout>
  );
}
