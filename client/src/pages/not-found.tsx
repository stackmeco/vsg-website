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
        description="The page you're looking for doesn't exist. Let's get you back on track."
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
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Go Home
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
