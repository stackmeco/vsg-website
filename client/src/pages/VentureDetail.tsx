import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
import { ConsolePanel } from "@/components/ConsolePanel";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Fingerprint, Landmark, Droplets } from "lucide-react";
import identityHero from "@assets/generated_images/identity_systems_hero.png";
import treasuryHero from "@assets/generated_images/treasury_infrastructure_hero.png";
import liquidityHero from "@assets/generated_images/liquidity_visualization_hero.png";

const ventureData = {
  "uniqueness-engine": {
    eyebrow: "Identity & Sybil resistance",
    name: "Uniqueness Engine",
    tagline: "Fair access and Sybil resistance, without identity mining.",
    intro:
      "Uniqueness Engine gives you a way to say 'one entity, one slot' in AI-native finance—without turning every interaction into a data grab. It helps keep bots, farms, and duplicate entities from dominating your systems.",
    heroImage: identityHero,
    icon: <Fingerprint className="w-6 h-6" />,
    problem:
      "Traditional KYC and device fingerprinting are invasive, brittle, and easy to route around. Without a better primitive, incentives are either wide-open or suffocating.",
    solution:
      "Uniqueness Engine gives you a reusable 'one-entity' signal and policy interface you can apply across products and agents, without needing to mine identity or store more PII.",
    chips: [
      { label: "Sybil limit", value: "1 entity / person", variant: "limit" as const, meta: "System-enforced" },
      { label: "PII retained", value: "0 identifiers", variant: "info" as const, meta: "Privacy by design" },
      { label: "Exception path", value: "Manual review", variant: "exception" as const, meta: "Your policy" },
    ],
    outcomes: [
      "Cleaner participation in trials, rewards, and airdrops.",
      "Less bot-driven abuse and farmed rewards.",
      "Fairer systems for real users and real agents.",
    ],
    steps: [
      { number: 1, title: "Define eligibility", description: "Specify who qualifies and what 'one entity' means for your use case." },
      { number: 2, title: "Integrate signals", description: "Connect the Uniqueness Engine to your existing identity and risk stack." },
      { number: 3, title: "Enforce limits", description: "The system enforces one-entity limits; exceptions route to your reviewers." },
    ],
    faqs: [
      {
        question: "Does this replace our existing KYC?",
        answer:
          "No. Uniqueness Engine is a primitive you can combine with your existing KYC and risk stack. It helps you reason about 'one entity' without dictating how you verify identity.",
      },
      {
        question: "Do you store personal data?",
        answer:
          "The design assumes minimal PII. Where data is required, we strive to avoid storing more than is strictly necessary and keep sensitive identity data within your own stack.",
      },
    ],
  },
  helios: {
    eyebrow: "Treasury & market health",
    name: "Helios",
    tagline: "Treasury that earns within defined limits, with protocol and market health in view.",
    intro:
      "Helios is a governed on-chain treasury and liquidity rail. It helps protocols and institutions deploy capital with clear policy ladders, controlled leverage, and a constant eye on market health.",
    heroImage: treasuryHero,
    icon: <Landmark className="w-6 h-6" />,
    problem:
      "Treasuries either sit idle or get over-exposed. Under stress, cascades and forced liquidations can damage both your organization and your market.",
    solution:
      "Helios encodes policy ladders, LTV ceilings, and exception paths into the rail itself. You get productive capital that respects your risk appetite and supports protocol and market health.",
    chips: [
      { label: "LTV ceiling", value: "50%", variant: "limit" as const, meta: "System-enforced limit" },
      { label: "Market health guardrail", value: "Active", variant: "info" as const, meta: "Monitors drawdowns" },
      { label: "Exception ladder", value: "Board sign-off", variant: "exception" as const, meta: "Your process" },
    ],
    outcomes: [
      "Defined, explainable risk parameters instead of ad-hoc decisions.",
      "Fewer surprises for treasurers, councils, and communities.",
      "Treasury strategies that protect both your balance sheet and your markets.",
    ],
    steps: [
      { number: 1, title: "Define policy ladders", description: "Set LTV ceilings, allocation limits, and exception thresholds." },
      { number: 2, title: "Connect treasury", description: "Integrate with your existing treasury setup and signers." },
      { number: 3, title: "Monitor and adapt", description: "Track market health and adjust policies as conditions change." },
    ],
    faqs: [
      {
        question: "Who sets the limits?",
        answer:
          "You do. We help design the rails and encode the logic, but your governance sets the policies, thresholds, and exception flows.",
      },
      {
        question: "Do you take custody of funds?",
        answer:
          "No. Helios is built to work with non-custodial, multi-signer setups. You keep control of your keys and signers.",
      },
    ],
  },
  "liquidity-engine": {
    eyebrow: "Liquidity for long-term holders",
    name: "VSG Liquidity Engine",
    tagline: "Liquidity without forced selling, under limits you can explain.",
    intro:
      "VSG Liquidity Engine lets long-term holders access liquidity while they keep their positions. It encodes conservative limits and exception paths into the rail, so you can explain exactly how risk is controlled.",
    heroImage: liquidityHero,
    icon: <Droplets className="w-6 h-6" />,
    problem:
      "When users need cash, they often sell at the worst possible moment—hurting both themselves and the market. Unbounded leverage can be even worse.",
    solution:
      "Liquidity Engine enforces conservative loan-to-value limits, liquidation paths, and exception rules in code. It provides liquidity with guardrails, not guesswork.",
    chips: [
      { label: "Max LTV", value: "50%", variant: "limit" as const, meta: "System-enforced" },
      { label: "Liquidation ladder", value: "3 steps", variant: "info" as const, meta: "Pre-defined in policy" },
      { label: "Exception path", value: "Human sign-off", variant: "exception" as const, meta: "Your keyholders" },
    ],
    outcomes: [
      "Users can access liquidity without forced selling.",
      "Your risk team can see, explain, and adjust limits.",
      "Markets see less forced unwind at the worst possible times.",
    ],
    steps: [
      { number: 1, title: "Set collateral policies", description: "Define accepted assets, LTV limits, and liquidation thresholds." },
      { number: 2, title: "Configure warnings", description: "Set up health alerts and margin call procedures." },
      { number: 3, title: "Enable access", description: "Users can borrow against their holdings within your defined limits." },
    ],
    faqs: [
      {
        question: "Is Stackme the product we have to use?",
        answer:
          "No. Stackme is a reference implementation. The underlying Liquidity Engine can power your own surfaces and products.",
      },
      {
        question: "Who approves exceptions?",
        answer:
          "Your policy determines who approves exceptions. VSG provides the gavel and the path; your authorized decision-makers use it.",
      },
    ],
    hasReference: true,
    referenceText:
      "Stackme is our live reference implementation of the Liquidity Engine. It shows how eligibility checks, limit ladders, and warnings can surface in a consumer-grade experience. In production, the Liquidity Engine can be surfaced under your own brand and UX.",
  },
};

export default function VentureDetail() {
  const [, params] = useRoute("/ventures/:slug");
  const slug = params?.slug || "";
  const venture = ventureData[slug as keyof typeof ventureData];

  if (!venture) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
            Venture not found
          </h1>
          <Link href="/ventures">
            <Button variant="outline">Back to ventures</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section
        className="relative min-h-[60vh] flex items-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${venture.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                {venture.eyebrow}
              </p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-4">
                {venture.name}
              </h1>
              <p className="text-xl text-foreground/90 mb-6">{venture.tagline}</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {venture.intro}
              </p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-talk-with-us">
                  Talk with us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="hidden lg:block">
              <ConsolePanel
                title="Policy Status"
                chips={venture.chips}
                className="max-w-md ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-problem-solution">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-destructive mb-3 uppercase tracking-wider">
                  Problem
                </h3>
                <p className="text-foreground leading-relaxed">
                  {venture.problem}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                  Solution
                </h3>
                <p className="text-foreground leading-relaxed">
                  {venture.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {venture.steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-outcomes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Outcomes
          </h2>
          <ul className="space-y-4 max-w-2xl">
            {venture.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-foreground">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {"hasReference" in venture && venture.hasReference && (
        <section className="py-20" data-testid="section-reference">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-card-border">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  See it in action
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {venture.referenceText}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="py-20 bg-card" data-testid="section-faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl">
            {venture.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
            Ready to explore {venture.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We'd love to discuss how this venture could work for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Talk to us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/ventures">
              <Button variant="outline" size="lg">
                View all ventures
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
