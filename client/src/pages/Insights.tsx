import { useState } from "react";
import { Layout } from "@/components/Layout";
import { InsightCard } from "@/components/InsightCard";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Identity", "Treasury", "Governance", "Engineering"];

const insights = [
  {
    title: "Sybil resistance without identity mining",
    excerpt:
      "How to achieve one-entity-one-slot guarantees without harvesting identity data or building invasive KYC flows.",
    date: "Nov 15, 2025",
    category: "Identity",
    slug: "sybil-resistance",
  },
  {
    title: "Designing LTV ladders that won't cascade your market",
    excerpt:
      "Conservative limit design patterns that protect both borrowers and the broader market during stress events.",
    date: "Nov 8, 2025",
    category: "Treasury",
    slug: "ltv-ladders",
  },
  {
    title: "What 'human-defined, system-enforced' actually looks like",
    excerpt:
      "A practical walkthrough of how policies become code-enforced rails with proper exception handling.",
    date: "Oct 30, 2025",
    category: "Governance",
    slug: "human-defined-system-enforced",
  },
  {
    title: "Exception routing in high-frequency environments",
    excerpt:
      "Design patterns for routing exceptions to human decision-makers without blocking the happy path.",
    date: "Oct 22, 2025",
    category: "Engineering",
    slug: "exception-routing",
  },
  {
    title: "Privacy-preserving eligibility checks",
    excerpt:
      "How to verify eligibility for rewards and access without collecting more data than necessary.",
    date: "Oct 15, 2025",
    category: "Identity",
    slug: "privacy-eligibility",
  },
  {
    title: "Treasury health metrics that actually matter",
    excerpt:
      "Moving beyond simple TVL metrics to understand real treasury health and risk exposure.",
    date: "Oct 8, 2025",
    category: "Treasury",
    slug: "treasury-health-metrics",
  },
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === activeCategory);

  return (
    <Layout>
      <section className="py-20" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide">
              Insights
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Practical notes on AI-native finance and governance.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We publish occasionally, when we have something useful to add. No
              hot takes, just patterns and lessons from building governed rails.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => setActiveCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInsights.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No insights found for this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInsights.map((insight) => (
                <InsightCard key={insight.slug} {...insight} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
