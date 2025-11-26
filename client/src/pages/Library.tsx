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

const categories: ContentType[] = ["All", "Insight", "Note", "Update"];

const items: LibraryItem[] = [
  {
    title: "Why we start with Bitcoin",
    excerpt: "Our thesis on using BTC as a treasury asset and the constraints that come with it.",
    date: "Nov 20, 2025",
    type: "Insight",
    tags: ["Bitcoin", "Treasury"],
    slug: "why-we-start-with-bitcoin",
  },
  {
    title: "What 'honest systems' means to us",
    excerpt: "Defining clarity, ownership, and control in the context of AI-native finance.",
    date: "Nov 15, 2025",
    type: "Insight",
    tags: ["Philosophy", "AI"],
    slug: "honest-systems",
  },
  {
    title: "Helios architecture notes",
    excerpt: "Early thinking on how we're structuring our internal strategy engine.",
    date: "Nov 10, 2025",
    type: "Note",
    tags: ["Helios", "Architecture"],
    slug: "helios-architecture",
  },
  {
    title: "Conservative leverage: why 50% LTV is our ceiling",
    excerpt: "The math and philosophy behind our borrowing limits.",
    date: "Nov 5, 2025",
    type: "Insight",
    tags: ["Risk", "Treasury"],
    slug: "conservative-leverage",
  },
  {
    title: "stackme: designing for the borrower",
    excerpt: "What it means to build a lending product around borrower clarity, not lender yield.",
    date: "Oct 28, 2025",
    type: "Note",
    tags: ["stackme", "Design"],
    slug: "stackme-borrower-first",
  },
  {
    title: "Site launch",
    excerpt: "Verified Systems website is now live. Here's what you'll find.",
    date: "Oct 20, 2025",
    type: "Update",
    tags: ["Announcement"],
    slug: "site-launch",
  },
];

const changelog = [
  { date: "Nov 2025", entry: "Initial site launch with Overview, System, Pipeline, Ventures, Library, and Contact pages." },
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
              Library.
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
            {categories.map((type) => (
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

      <section className="py-16 bg-card" data-testid="section-changelog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
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
        description="Reach out if you want to talk."
        href="/contact"
      />
    </Layout>
  );
}
