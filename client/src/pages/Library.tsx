import { useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type ContentType = "All" | "Insight" | "Note" | "Update";

interface LibraryItem {
  title: string;
  excerpt: string;
  date: string;
  type: ContentType;
  tags: string[];
  slug: string;
}

const items: LibraryItem[] = [
  {
    title: "The Verification Standard: Charting the Great Reallocation",
    excerpt: "Our thesis on fiscal dominance, Bitcoin as verified scarcity, and the multi-decade capital migration from depreciating fiat to appreciating hard assets.",
    date: "Nov 26, 2025",
    type: "Insight",
    tags: ["Bitcoin", "Macro", "Thesis"],
    slug: "verification-standard",
  },
];

const getAvailableCategories = (): ContentType[] => {
  const typesWithContent = new Set(items.map(item => item.type));
  const categories: ContentType[] = ["All"];
  if (typesWithContent.has("Insight")) categories.push("Insight");
  if (typesWithContent.has("Note")) categories.push("Note");
  if (typesWithContent.has("Update")) categories.push("Update");
  return categories;
};

const changelog = [
  { date: "Nov 2025", entry: "Initial site launch with Overview, System, Pipeline, Governance, Library, and Contact pages." },
  { date: "Oct 2025", entry: "Brand and messaging finalized. Pipeline projects documented." },
];

export default function Library() {
  const [activeType, setActiveType] = useState<ContentType>("All");

  const filteredItems =
    activeType === "All"
      ? items
      : items.filter((item) => item.type === activeType);

  return (
    <Layout>
      <PageMeta 
        title="Library" 
        description="Notes, insights, and updates from Verified Systems. We publish when we have something useful to share." 
      />
      <section className="py-20 lg:py-28" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground leading-tight tracking-tight mb-6">
              Library
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notes, insights, and updates from the studio. We publish when we have something useful to share — not on a schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {getAvailableCategories().map((type) => (
              <Badge
                key={type}
                variant={activeType === type ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => setActiveType(type)}
                data-testid={`filter-${type.toLowerCase()}`}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-items">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.slug}
                  className="bg-card border-card-border hover-elevate transition-all duration-200"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/library/${item.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-changelog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Changelog
            </h2>
            <div className="space-y-4">
              {changelog.map((entry, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-sm font-mono text-muted-foreground w-20 flex-shrink-0">
                    {entry.date}
                  </span>
                  <p className="text-sm text-foreground">{entry.entry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextStepBlock
        nextPage="Contact"
        description="Reach out if you'd like to connect."
        href="/contact"
      />
    </Layout>
  );
}
