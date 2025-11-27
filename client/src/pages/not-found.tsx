import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <PageMeta
        title="Signal Lost | 404"
        description="The requested trajectory is invalid. Return to operational parameters."
      />
      <section className="py-32 text-center" data-testid="section-404">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
            <p className="font-mono text-sm text-destructive uppercase tracking-wider mb-4">
              Error 404
            </p>
            <h1 className="font-heading font-bold text-3xl sm:text-[2.5rem] text-foreground mb-6">
              SIGNAL LOST
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The requested trajectory is invalid. Return to operational parameters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Return to Console
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pipeline">
                <Button variant="outline" size="lg" data-testid="button-see-pipeline">
                  View Pipeline
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
