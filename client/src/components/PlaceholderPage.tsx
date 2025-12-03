import { Layout } from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { NextStepBlock } from "@/components/NextStepBlock";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  category?: string;
}

export function PlaceholderPage({ title, description, category }: PlaceholderPageProps) {
  const metaDescription = description || `${title} - Verifiable Systems Group`;
  
  return (
    <Layout>
      <PageMeta 
        title={title} 
        description={metaDescription}
      />
      
      <section className="relative min-h-[60vh] flex items-center border-b border-border">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          {category && (
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary mb-4" data-testid="text-category">
              {category}
            </span>
          )}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6" data-testid="text-page-title">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-page-description">
              {description}
            </p>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-dashed" data-testid="card-under-construction">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-[2px] bg-primary/10 flex items-center justify-center mb-6">
                <Construction className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">
                Under Construction
              </h2>
              <p className="text-muted-foreground max-w-md">
                This page is currently being developed. Check back soon for comprehensive content about {title.toLowerCase()}.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <NextStepBlock
        label="Explore"
        nextPage="Our Ventures"
        description="Discover the institutional-grade solutions we're building at VSG."
        href="/ventures"
      />
    </Layout>
  );
}

export default PlaceholderPage;
