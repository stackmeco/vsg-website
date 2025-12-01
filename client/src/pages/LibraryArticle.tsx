import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
import { SeoHead } from "@/components/SeoHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articleContent } from "@/data/articleContent";
import { ArticleAudioPlayer } from "@/components/ArticleAudioPlayer";

const audioFiles: Record<string, string> = {
  "insolvency-of-fiction": "/audio/insolvency-of-fiction.wav",
  "verification-standard": "/audio/verification-standard.wav",
  "machine-native-settlement": "/audio/machine-native-settlement.wav",
};

export default function LibraryArticle() {
  const [, params] = useRoute("/insights/:slug");
  const slug = params?.slug || "";
  const article = articleContent[slug];
  const audioSrc = audioFiles[slug];

  if (!article) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
            Article not found
          </h1>
          <Link href="/insights">
            <Button variant="outline">Back to Insights</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const readingTime = Math.ceil(
    article.content.reduce((acc, section) => 
      acc + section.paragraphs.join(" ").split(" ").length, 0
    ) / 200
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${slug}` }
  ];

  return (
    <Layout>
      <SeoHead
        title={article.title}
        description={article.description}
        type="article"
        path={`/insights/${slug}`}
        publishedTime={article.publishedTime}
        breadcrumbs={breadcrumbs}
      />

      <article className="py-20 lg:py-28" data-testid={`article-${slug}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
            data-testid="link-back-insights"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <header className="mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary">{article.type}</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime} min read
                </span>
              </div>
              {audioSrc && (
                <div className="ml-auto">
                  <ArticleAudioPlayer audioSrc={audioSrc} articleTitle={article.title} />
                </div>
              )}
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground leading-[1.15] tracking-tight mb-8">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="article-content">
            {article.content.map((section, index) => (
              <section key={index} className="mb-14" data-testid={`section-${index + 1}`}>
                <h2 className="font-heading font-semibold text-xl sm:text-2xl text-foreground mb-6 leading-snug">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-foreground/90 text-[1.0625rem] leading-[1.8] mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <footer className="mt-20 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Published by Verifiable Systems Group
            </p>
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-primary mt-4 transition-colors"
              data-testid="link-back-insights-footer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Insights
            </Link>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
