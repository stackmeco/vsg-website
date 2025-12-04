import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <PageMeta
        title="Page Not Found"
        description="This page isn't wired into the system yet. Start again from the Ventures or Insights pages."
      />
      <section className="py-32 text-center" data-testid="section-404">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
            <p className="font-mono text-sm text-destructive uppercase tracking-wider mb-4" data-testid="text-error-code">
              Error 404
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground mb-6" data-testid="text-heading-404">
              This page isn't wired into the system yet.
            </h1>
            <p className="text-lg text-muted-foreground mb-4" data-testid="text-body-404">
              Either the route moved or it never existed in this configuration. We try not to leave dead ends in our systems—if you reached one here, start again from the Ventures or Insights pages.
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8" data-testid="text-helper-404">
              If you typed a URL by hand, check the spelling. If you followed a link from us and it broke, that's on our side—we'll wire it up.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Back to overview
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/ventures">
                <Button variant="outline" size="lg" data-testid="button-see-ventures">
                  View Ventures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
