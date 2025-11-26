import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ValueCard } from "@/components/ValueCard";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Scale, Wallet, Cog, MessageSquare, ArrowRight } from "lucide-react";

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

const stages = [
  { name: "Idea", description: "A question we think is worth asking" },
  { name: "Requirements", description: "Define what a good answer looks like" },
  { name: "Architecture", description: "Design how it could work" },
  { name: "Prototype", description: "Build a minimal version" },
  { name: "Internal tests", description: "Run it with our own capital" },
  { name: "Venture or Archive", description: "Graduate or document learnings" },
];

export default function System() {
  return (
    <Layout>
      <PageMeta 
        title="System" 
        description="How Verified Systems works: Bitcoin treasury, governance, risk management, and our path from idea to Venture." 
      />
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              How Verified Systems actually works.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Two founders, one balance sheet, a Bitcoin treasury, and a small set of functions that keep us honest: governance, risk, compliance, finance, treasury, operations, and communications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-treasury">
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

      <section className="py-20 bg-card" data-testid="section-idea-to-venture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              From curiosity to Venture
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every project starts as a question. If it survives requirements, architecture, and internal tests — and we'd trust it with our own money long-term — it may graduate into a Venture.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {stages.map((stage, index) => (
              <div key={stage.name} className="flex items-center gap-2">
                <Card className="bg-background border-border">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm text-primary mb-1">{stage.name}</p>
                    <p className="text-xs text-muted-foreground">{stage.description}</p>
                  </CardContent>
                </Card>
                {index < stages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Pipeline"
        description="See what's actually in flight."
        href="/pipeline"
      />
    </Layout>
  );
}
