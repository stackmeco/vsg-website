import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

const helpfulLinks = [
  { name: "Overview", href: "/" },
  { name: "Approach", href: "/approach" },
  { name: "Ventures", href: "/ventures" },
  { name: "Insights", href: "/insights" },
];

export default function NotFound() {
  return (
    <Layout>
      <PageMeta
        title="Page Not Found — Verifiable Systems Group"
        description="This route is not wired into the current configuration. Start again from the VSG overview, Ventures, or Insights pages."
      />
      <section className="py-32 text-center" data-testid="section-404">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-destructive" aria-hidden="true" />
            </div>
            <p className="font-mono text-sm text-destructive uppercase tracking-wider mb-4" data-testid="text-error-code">
              Error 404
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground mb-6" data-testid="text-heading-404">
              This path doesn't exist in our system.
            </h1>
            <p className="text-lg text-muted-foreground mb-4" data-testid="text-body-404">
              You've reached a route that doesn't map to any of our current rails. If you typed a URL directly, check it for typos—or use the links below to get back to the parts of the studio that exist.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Back to the studio
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/ventures">
                <Button variant="outline" size="lg" data-testid="button-see-ventures">
                  Explore our ventures
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
