import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { VentureCard } from "@/components/VentureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Fingerprint,
  Landmark,
  Droplets,
  Shield,
  Eye,
  FileText,
  Activity,
} from "lucide-react";

const ventures = [
  {
    name: "Uniqueness Engine",
    tagline: "Fair access and Sybil resistance",
    description:
      "A Sybil-resistance and fair-access primitive for AI-native finance. Use it to stop duplicate signups and scripted abuse without harvesting identity data.",
    href: "/ventures/uniqueness-engine",
    icon: <Fingerprint className="w-5 h-5" />,
  },
  {
    name: "Helios",
    tagline: "Treasury that earns within limits",
    description:
      "A governed on-chain treasury for protocols and institutions. Use it to keep capital productive—with policy-defined ladders, not 'all-in' bets.",
    href: "/ventures/helios",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    name: "VSG Liquidity Engine",
    tagline: "Liquidity without forced selling",
    description:
      "Liquidity rails for long-term holders, under clear risk limits. Use it to give users access to liquidity without forcing sales at the worst possible time.",
    href: "/ventures/liquidity-engine",
    icon: <Droplets className="w-5 h-5" />,
  },
];

const backbone = [
  {
    title: "Security & key management",
    description: "Enterprise-grade security across all ventures",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Policy engine and limit ladders",
    description: "Consistent enforcement of risk policies",
    icon: <Activity className="w-5 h-5" />,
  },
  {
    title: "Observability and exception routing",
    description: "Clear visibility into system behavior",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Governance documentation",
    description: "Transparent change logs and audit trails",
    icon: <FileText className="w-5 h-5" />,
  },
];

export default function Ventures() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Ventures
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Ventures on shared, governed rails.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VSG incubates and operates ventures that share a common governance
              backbone. Each solves a different problem—identity, treasury,
              liquidity—but they all run on the same principles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card" data-testid="section-backbone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-semibold text-xl text-foreground mb-8">
            Shared backbone
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {backbone.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <VentureCard key={venture.name} {...venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-future">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-border">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                What's next
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We're always researching new primitives that could benefit from
                governed rails. If you have ideas or want to collaborate, we'd
                love to hear from you.
              </p>
              <Link href="/contact">
                <Button>
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
