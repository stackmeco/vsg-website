import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Network, Cpu } from "lucide-react";

const partnerTypes = [
  {
    title: "Institutions",
    description:
      "Banks, asset managers, and regulated entities looking to adopt AI-native finance rails with proper governance.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Protocols",
    description:
      "DeFi protocols and networks seeking governed treasury, identity, or liquidity primitives.",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Integrators",
    description:
      "System integrators and consultancies bringing AI-native finance to enterprise clients.",
    icon: <Cpu className="w-5 h-5" />,
  },
];

const steps = [
  {
    number: 1,
    title: "Map constraints",
    description:
      "We work with your risk, legal, and product teams to understand your policies, obligations, and goals.",
  },
  {
    number: 2,
    title: "Design and prove rails",
    description:
      "We co-design the rails, run them in defined environments, and measure outcomes against your risk appetite.",
  },
  {
    number: 3,
    title: "Scale and support",
    description:
      "We help you roll out governed rails to production and adapt them as your requirements evolve.",
  },
];

export default function Partners() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Partners
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Bring governed rails into your stack.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We partner with institutions, protocols, and integrators who want
              to bring AI-native finance to production, not just to slides. We
              provide the rails; you bring the policies, users, and surfaces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-partner-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Who we work with
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type) => (
              <Card key={type.title} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                    {type.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-12">
            How partnerships work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
            Ready to explore a partnership?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Tell us about your organization and what you're trying to achieve.
            We'll respond to clear fits within a few business days.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Talk to us about a partnership
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
