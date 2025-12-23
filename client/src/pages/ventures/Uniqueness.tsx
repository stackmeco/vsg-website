import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Uniqueness() {
  return (
    <Layout>
      <PageMeta
        title="Uniqueness Engine | Verifiable Systems Group"
        description="Personhood without surveillance."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/ventures" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 mb-8">
            <ArrowLeft className="w-3 h-3" /> Products
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground">
              Uniqueness Engine
            </h1>
            <Badge variant="outline">In Development</Badge>
          </div>

          <p className="text-sm text-primary uppercase tracking-wider mb-6">Control Layer</p>

          <p className="text-xl text-foreground mb-4">
            Personhood without surveillance.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Prove you're a unique human without exposing your identity. Privacy-preserving proof of personhood for the AI age.
          </p>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="font-semibold text-foreground mb-4">Status</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Architecture and protocol design complete</li>
              <li>• Privacy-preserving proof systems in development</li>
              <li>• Sybil-resistance mechanisms validated</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/connect">
                Get Updates <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/ventures">All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
