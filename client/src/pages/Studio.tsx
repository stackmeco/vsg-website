import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { StepCard } from "@/components/StepCard";
import { ValueCard } from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Eye,
  Gauge,
  Bot,
  Lock,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discover & define",
    description:
      "We map real constraints: regulation, protocol rules, risk appetite, and user goals. Then we define the policies and limits the rails must enforce.",
  },
  {
    number: 2,
    title: "Prove with real stakes",
    description:
      "We test primitives in live or live-like environments, with real money, real agents, and real guardrails. We measure abuse, exceptions, and market health.",
  },
  {
    number: 3,
    title: "Scale through ventures & partners",
    description:
      "When the rails are proven, we scale them through VSG ventures and partner deployments—keeping governance consistent as we grow.",
  },
];

const values = [
  {
    title: "Trust foundations",
    description:
      "Security, privacy, and fairness are designed in from day one—not bolted on after launch.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Evidence over claims",
    description:
      "We'd rather show you exception and abuse numbers than hype. If we can't measure it, we don't market it.",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: "Velocity with guardrails",
    description:
      "We ship in slices, with canaries and rollbacks. Speed is fine; uncontrolled risk is not.",
    icon: <Gauge className="w-5 h-5" />,
  },
  {
    title: "Agents, governed",
    description:
      "AI agents can move at millisecond speed inside human-defined bounds. Exceptions route to your keyholders, not to a black box.",
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: "Least necessary data",
    description:
      "We minimize the data we collect and store. Where possible, we use non-identifying signals instead of full identity.",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    title: "Quiet education",
    description:
      "We're not an education company, but we reduce friction for serious teams with clear documentation and reference implementations.",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

const backbone = [
  "Security & key management",
  "Policy engine and limit ladders",
  "Observability and exception routing",
  "Governance documentation and change logs",
];

export default function Studio() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              How VSG works
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              A studio for AI-native finance, built on governed rails.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We design, prove, and scale finance primitives for an economy
              where AI agents and institutions transact together. Governance
              isn't an afterthought—it's the backbone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-pvm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                  Purpose
                </h3>
                <p className="text-foreground leading-relaxed">
                  Help people, institutions, and networks thrive in an AI-native
                  economy in ways that are simple to adopt, safe to operate, and
                  fair to everyone involved.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                  Vision
                </h3>
                <p className="text-foreground leading-relaxed">
                  Money, identity, and AI agents interoperate safely across
                  networks; markets run on clear rules, strong safeguards, and
                  human choice.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                  Mission
                </h3>
                <p className="text-foreground leading-relaxed">
                  Design, prove, and scale AI- and agent-ready finance
                  primitives—first inside VSG, then as independent ventures and
                  partner deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-we-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              How we work
            </h2>
            <p className="text-muted-foreground">
              From discovery to scale, every step is grounded in real
              constraints and measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              What we optimize for
            </h2>
            <p className="text-muted-foreground">
              Our values show up in how we design, build, and operate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-backbone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Shared backbone
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every venture we incubate shares a common governance backbone.
                This means consistent security, policy enforcement, and
                observability across all products.
              </p>
              <ul className="space-y-3">
                {backbone.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="bg-card border-card-border">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Quiet education
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're not an education company. But we know governance is hard
                  to explain. Instead of courses and keynotes, we provide:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Clear documentation and examples
                  </li>
                  <li className="text-sm text-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Reference implementations like Stackme
                  </li>
                  <li className="text-sm text-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Patterns you can adapt to your own surfaces
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    Ask about reference patterns
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
            Ready to work with us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're exploring a pilot or looking to join the team, we'd
            love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="outline" size="lg">
                View open roles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
