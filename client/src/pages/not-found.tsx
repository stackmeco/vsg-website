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
              This page didn't pass review.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The resource you're looking for doesn't exist, has moved, or never
              made it past our governance checks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" data-testid="button-back-home">
                  Back to home
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/ventures">
                <Button variant="outline" size="lg" data-testid="button-see-ventures">
                  See all ventures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
