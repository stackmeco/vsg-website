import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Stackme",
    pillar: "Capital",
    tagline: "Borrow against crypto without liquidation risk.",
    status: "Live",
    href: "https://app.stackme.xyz",
    external: true,
  },
  {
    name: "Helios",
    pillar: "Capital",
    tagline: "Sub-millisecond execution, on-chain security.",
    status: "In Development",
    href: "/ventures/helios",
    external: false,
  },
  {
    name: "Axiom",
    pillar: "Verification",
    tagline: "Deterministic AI with cryptographic proof.",
    status: "In Development",
    href: "/ventures/axiom",
    external: false,
  },
  {
    name: "Uniqueness Engine",
    pillar: "Control",
    tagline: "Prove personhood without surveillance.",
    status: "In Development",
    href: "/ventures/uniqueness",
    external: false,
  },
];

export default function Ventures() {
  return (
    <Layout>
      <PageMeta
        title="Products | Verifiable Systems Group"
        description="Infrastructure for the autonomous economy."
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Products
          </h1>
          <p className="text-muted-foreground mb-12">
            Infrastructure layers for the autonomous economy.
          </p>

          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-start justify-between p-5 rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-lg text-foreground">{product.name}</span>
                    <Badge variant={product.status === "Live" ? "default" : "outline"} className="text-xs">
                      {product.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">{product.pillar}</Badge>
                  </div>
                  <p className="text-muted-foreground">{product.tagline}</p>
                </div>
                {product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 shrink-0"
                  >
                    Try it <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    href={product.href}
                    className="text-primary hover:underline flex items-center gap-1 shrink-0"
                  >
                    Details <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-4">Want to build with us?</p>
            <Button asChild>
              <Link href="/connect">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
