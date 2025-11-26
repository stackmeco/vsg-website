import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { ValueCard } from "@/components/ValueCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, Focus, MapPin } from "lucide-react";

const whyWork = [
  {
    title: "Real stakes",
    description:
      "We work with live systems, not toy demos. The rails we build touch real capital and real risk.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Governance-first culture",
    description:
      "We debate trade-offs in the open and document our decisions. 'Because we said so' is not an argument.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Calm, focused environment",
    description:
      "We prefer depth over noise. No social-media heroics, just hard problems and thoughtful execution.",
    icon: <Focus className="w-5 h-5" />,
  },
];

const openRoles = [
  {
    title: "Senior Protocol Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain the core governance rails that power our ventures. Deep experience with smart contracts and on-chain systems required.",
  },
  {
    title: "Risk & Policy Designer",
    location: "Remote / NYC",
    type: "Full-time",
    description:
      "Design policy ladders, exception paths, and limit structures for AI-native finance products. Background in risk management or quantitative finance preferred.",
  },
  {
    title: "Product Engineer",
    location: "Remote",
    type: "Full-time",
    description:
      "Build consumer-grade experiences on top of institution-grade rails. Strong frontend skills and an eye for UX required.",
  },
];

export default function Careers() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Careers
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Help design rails for AI-native finance.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a small studio building primitives for a new era of finance.
              If you care about systems, governance, and real-world impact more
              than hype, you'll probably fit in here.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-work">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Why work at VSG
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyWork.map((item) => (
              <ValueCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-open-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
            Open roles
          </h2>
          <div className="space-y-4 max-w-3xl">
            {openRoles.map((role) => (
              <Card
                key={role.title}
                className="bg-card border-card-border hover-elevate transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {role.location}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {role.type}
                        </Badge>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm">
                        Apply
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-general">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-border">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Don't see your role?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you think you can meaningfully improve how we design, build,
                or prove governed rails, we still want to hear from you.
              </p>
              <Link href="/contact">
                <Button>
                  Send a general application
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
