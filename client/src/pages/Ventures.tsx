import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const criteria = [
  "Requirements, architecture, and implementation are complete",
  "Internal testing with our own capital has passed",
  "We'd trust it with our own balance sheet for the long haul",
  "The system is stable, documented, and maintainable",
  "We can explain exactly how it works and what the risks are",
];

export default function Ventures() {
  return (
    <Layout>
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Ventures.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Projects that have graduated from the Pipeline and become standalone, long-term systems we operate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-none-yet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              None yet, on purpose.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We haven't graduated any Pipeline projects to Ventures yet. That's intentional. A project only becomes a Venture when it has survived requirements, architecture, internal testing — and when we'd trust it with our own money for the long haul.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We'd rather ship nothing than ship something we wouldn't use ourselves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-criteria">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
              What it takes to graduate
            </h2>
            <p className="text-muted-foreground mb-8">
              A Pipeline project becomes a Venture when:
            </p>
            <ul className="space-y-4">
              {criteria.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-sm font-mono">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-future">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-border">
            <CardContent className="p-8 sm:p-12">
              <div className="max-w-2xl">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  When we launch something, you'll know
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We'll update this page when a project graduates. In the meantime, you can follow our progress in the Library or explore what's currently in the Pipeline.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/pipeline">
                    <Button variant="outline">
                      See the Pipeline
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/library">
                    <Button variant="ghost">
                      Read the Library
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <NextStepBlock
        nextPage="Library"
        description="Read our notes, updates, and learnings."
        href="/library"
      />
    </Layout>
  );
}
