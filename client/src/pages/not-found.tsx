import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const helpfulLinks = [
  { name: "Overview", href: "/" },
  { name: "Ventures", href: "/ventures" },
  { name: "Approach", href: "/approach" },
  { name: "Insights", href: "/insights" },
];

export default function NotFound() {
  return (
    <Layout>
      <PageMeta
        title="Page Not Found — Verifiable Systems Group"
        description="This route is not wired into the current configuration. Start again from the VSG overview, Ventures, or Approach pages."
      />
      <section className="py-32 text-center" data-testid="section-404">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4" data-testid="text-error-code">
              404
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground mb-6" data-testid="text-heading-404">
              This page isn't wired up.
            </h1>
            <p className="text-lg text-muted-foreground mb-2" data-testid="text-body-404">
              Either this page never existed or it hasn't been wired into the current site. In either case, there's nothing verifiable here yet.
            </p>
            <p className="text-base text-muted-foreground mb-10" data-testid="text-body-404-secondary">
              Use the links below to get back to the parts of the system that are live and inspectable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/">
                <Button size="lg" data-testid="button-go-overview">
                  Go to overview
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/ventures">
                <Button variant="outline" size="lg" data-testid="button-explore-ventures">
                  Explore ventures
                </Button>
              </Link>
              <Link href="/approach">
                <Button variant="outline" size="lg" data-testid="button-see-approach">
                  See how we build
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-border">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-helpful-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
