import { Link, useRoute } from "wouter";
import { useMemo } from "react";
import { Layout } from "@/components/Layout";
import { SeoHead } from "@/components/SeoHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Volume2, Square, Loader2 } from "lucide-react";
import { articleContent } from "@/data/articleContent";
import { useGeminiTTS } from "@/hooks/useGeminiTTS";

export default function LibraryArticle() {
  const [, params] = useRoute("/thesis/:slug");
  const slug = params?.slug || "";
  const article = articleContent[slug];
  
  const { speak, stop, isLoading, isPlaying, error } = useGeminiTTS();

  const fullText = useMemo(() => {
    if (!article) return "";
    const sections = article.content.map(
      (section) => `${section.heading}. ${section.paragraphs.join(" ")}`
    );
    return `${article.title}. ${sections.join(" ")}`;
  }, [article]);

  const handlePlay = () => {
    if (isPlaying) {
      stop();
    } else {
      speak(fullText);
    }
  };

  if (!article) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="font-heading font-bold text-2xl text-foreground mb-4">
            Article not found
          </h1>
          <Link href="/thesis">
            <Button variant="outline">Back to Thesis</Button>
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
    { name: "Thesis", path: "/thesis" },
    { name: article.title, path: `/thesis/${slug}` }
  ];

  return (
    <Layout>
      <SeoHead
        title={article.title}
        description={article.description}
        type="article"
        path={`/thesis/${slug}`}
        publishedTime={article.publishedTime}
        breadcrumbs={breadcrumbs}
      />

      <article className="py-20 lg:py-28" data-testid={`article-${slug}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/thesis"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
            data-testid="link-back-thesis"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Thesis
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
              <div className="flex items-center gap-1 ml-auto">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handlePlay}
                  disabled={isLoading}
                  data-testid="button-audio-play"
                  title={isLoading ? "Loading..." : isPlaying ? "Stop" : "Listen with AI voice"}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : isPlaying ? (
                    <Square className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
            {error && (
              <p className="text-xs text-destructive mb-4">{error}</p>
            )}
            {isPlaying && (
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                <span className="text-xs text-muted-foreground font-mono">AUDIO STREAM ACTIVE</span>
              </div>
            )}
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
              href="/thesis"
              className="inline-flex items-center gap-2 text-sm text-primary mt-4 transition-colors"
              data-testid="link-back-thesis-footer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Thesis
            </Link>
          </footer>
        </div>
      </article>
    </Layout>
  );
}
