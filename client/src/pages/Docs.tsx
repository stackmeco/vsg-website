import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Code, Shield } from "lucide-react";

const docCategories = [
  {
    title: "API Reference",
    description: "Complete API documentation for integrating with VSG rails.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Integration Guides",
    description: "Step-by-step guides for common integration patterns.",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "Security & Compliance",
    description: "Security practices, audit reports, and compliance documentation.",
    icon: <Shield className="w-5 h-5" />,
  },
];

export default function Docs() {
  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Documentation
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Technical documentation.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need to integrate with VSG rails, from API
              references to security documentation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {docCategories.map((category) => (
              <Card
                key={category.title}
                className="bg-background border-border hover-elevate transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-access">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-card-border">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Get access to documentation
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our technical documentation is available to partners and
                integrators. Contact us to request access or discuss your
                integration needs.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Contact us for access
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
