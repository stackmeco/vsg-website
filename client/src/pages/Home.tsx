import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ConsolePanel } from "@/components/ConsolePanel";
import { VentureCard } from "@/components/VentureCard";
import { AudienceCard } from "@/components/AudienceCard";
import { InsightCard } from "@/components/InsightCard";
import { ValueCard } from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Fingerprint,
  Landmark,
  Droplets,
  Building2,
  Network,
  Users,
  Code,
  Bot,
  Gauge,
} from "lucide-react";
import heroImage from "@assets/generated_images/abstract_data_flow_hero.png";

const heroChips = [
  { label: "LTV ceiling", value: "50%", variant: "limit" as const, meta: "System-enforced" },
  { label: "Exception path", value: "Active", variant: "exception" as const, meta: "Human sign-off" },
  { label: "PII retained", value: "0", variant: "info" as const, meta: "Privacy by design" },
];

const heroMetrics = [
  { label: "System latency", value: "14 ms" },
  { label: "Uptime", value: "99.99%" },
];

const audiences = [
  {
    title: "Regulated Institutions",
    pain: "Want AI-driven efficiency but must stay inside strict risk/compliance bounds.",
    outcome: "Turn your risk policy into code-enforced rails you can audit.",
    href: "/contact",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Protocols & Networks",
    pain: "Need Sybil-resistant participation without invasive KYC.",
    outcome: "Fair access and one-entity-one-voice, without identity mining.",
    href: "/ventures",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Builders & Teams",
    pain: "Need reliable rails for risk, treasury, and identity so they can ship.",
    outcome: "Ready-to-plug primitives so you don't reinvent governance.",
    href: "/ventures",
    icon: <Users className="w-5 h-5" />,
  },
];

const ventures = [
  {
    name: "Uniqueness Engine",
    tagline: "Fair access and Sybil resistance",
    description:
      "A primitive for AI-native finance that gives you one-entity-one-slot without identity mining. Stop bots and duplicate entities from dominating your systems.",
    href: "/ventures/uniqueness-engine",
    icon: <Fingerprint className="w-5 h-5" />,
  },
  {
    name: "Helios",
    tagline: "Treasury that earns within limits",
    description:
      "A governed on-chain treasury and liquidity rail. Deploy capital with clear policy ladders, controlled leverage, and market health awareness.",
    href: "/ventures/helios",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    name: "Liquidity Engine",
    tagline: "Liquidity without forced selling",
    description:
      "Infrastructure for long-term holders to access liquidity under clear risk limits. No forced sales at the worst possible moment.",
    href: "/ventures/liquidity-engine",
    icon: <Droplets className="w-5 h-5" />,
  },
];

const whyVsg = [
  {
    title: "Governance as code",
    description:
      "We start with your policies and risk limits, then encode them as rails. Every decision path is explicit and auditable.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Agent-ready primitives",
    description:
      "Our ventures are built for AI agents from day one—so automated flows stay inside human-defined bounds.",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Shared backbone, faster reviews",
    description:
      "Security, GRC, and observability are shared across ventures, helping you pass reviews faster with less duplication.",
    icon: <Gauge className="w-5 h-5" />,
  },
];

const insights = [
  {
    title: "Sybil resistance without identity mining",
    excerpt:
      "How to achieve one-entity-one-slot guarantees without harvesting identity data or building invasive KYC flows.",
    date: "Nov 15, 2025",
    category: "Identity",
    slug: "sybil-resistance",
  },
  {
    title: "Designing LTV ladders that won't cascade your market",
    excerpt:
      "Conservative limit design patterns that protect both borrowers and the broader market during stress events.",
    date: "Nov 8, 2025",
    category: "Treasury",
    slug: "ltv-ladders",
  },
  {
    title: "What 'human-defined, system-enforced' actually looks like",
    excerpt:
      "A practical walkthrough of how policies become code-enforced rails with proper exception handling.",
    date: "Oct 30, 2025",
    category: "Governance",
    slug: "human-defined-system-enforced",
  },
];

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-[85vh] flex items-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                AI-native finance R&D studio
              </p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-6">
                Implement the future—without losing control.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Your teams set policies, thresholds, and exception rules. Our
                systems enforce those rules in code, at machine speed. Humans
                step in only for exceptions and edge cases.
              </p>
              <p className="text-sm font-mono text-primary mb-8">
                Human-defined, system-enforced.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/studio">
                  <Button size="lg" data-testid="button-explore-studio">
                    Explore the studio
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/ventures">
                  <Button
                    variant="outline"
                    size="lg"
                    data-testid="button-see-ventures"
                  >
                    See the ventures
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <ConsolePanel
                title="Policy Status"
                chips={heroChips}
                metrics={heroMetrics}
                className="max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-audiences">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Who we're for
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with organizations that need AI-native finance rails they
              can actually trust and explain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <AudienceCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ventures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Ventures
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Primitives for identity, treasury, and liquidity—built on shared,
              governed rails.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture) => (
              <VentureCard key={venture.name} {...venture} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-vsg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Why VSG
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build rails that keep AI agents inside human-defined bounds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyVsg.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-governance-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Governance, in the open
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We treat governance as a first-class product. The governance page
              explains how our rails enforce policy, how we handle exceptions,
              and how we change the rules over time.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">
                  Explicit policies
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">
                  Transparent changes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">
                  Traceable actions
                </span>
              </div>
            </div>
            <Link href="/governance">
              <Button variant="outline" data-testid="button-governance">
                See governance & change log
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
                Insights
              </h2>
              <p className="text-muted-foreground">
                Practical notes on AI-native finance and governance.
              </p>
            </div>
            <Link href="/insights" className="hidden sm:block">
              <Button variant="ghost" data-testid="button-all-insights">
                View all insights
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} {...insight} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/insights">
              <Button variant="outline">View all insights</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-card-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Ready to build on governed rails?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you're a regulated institution, protocol, or builder,
              we're here to help you implement the future—without losing
              control.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-talk-to-us">
                  Talk to us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" size="lg" data-testid="button-join-team">
                  Join the team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
