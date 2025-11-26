import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-32 text-center" data-testid="section-404">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
              Page not found.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist, has moved, or was never here in the first place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Back to Overview
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pipeline">
                <Button variant="outline" size="lg" data-testid="button-see-pipeline">
                  See the Pipeline
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
