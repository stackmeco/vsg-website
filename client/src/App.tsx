import { Switch, Route } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollManager } from "@/components/ScrollManager";
import Overview from "@/pages/Overview";

const pageImports = {
  System: () => import("@/pages/System"),
  Pipeline: () => import("@/pages/Pipeline"),
  PipelineDetail: () => import("@/pages/PipelineDetail"),
  Governance: () => import("@/pages/Governance"),
  Library: () => import("@/pages/Library"),
  LibraryArticle: () => import("@/pages/LibraryArticle"),
  Contact: () => import("@/pages/Contact"),
  Privacy: () => import("@/pages/Privacy"),
  Terms: () => import("@/pages/Terms"),
  NotFound: () => import("@/pages/not-found"),
};

const System = lazy(pageImports.System);
const Pipeline = lazy(pageImports.Pipeline);
const PipelineDetail = lazy(pageImports.PipelineDetail);
const Governance = lazy(pageImports.Governance);
const Library = lazy(pageImports.Library);
const LibraryArticle = lazy(pageImports.LibraryArticle);
const Contact = lazy(pageImports.Contact);
const Privacy = lazy(pageImports.Privacy);
const Terms = lazy(pageImports.Terms);
const NotFound = lazy(pageImports.NotFound);

function usePreloadPages() {
  useEffect(() => {
    const preloadPages = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const priorityPages = [
        pageImports.System,
        pageImports.Pipeline,
        pageImports.Governance,
        pageImports.Library,
      ];
      
      for (const importFn of priorityPages) {
        await importFn();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      const secondaryPages = [
        pageImports.PipelineDetail,
        pageImports.LibraryArticle,
        pageImports.Contact,
        pageImports.Privacy,
        pageImports.Terms,
        pageImports.NotFound,
      ];
      
      for (const importFn of secondaryPages) {
        await importFn();
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(preloadPages);
    } else {
      setTimeout(preloadPages, 2000);
    }
  }, []);
}

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-mono text-muted-foreground">Loading...</span>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Overview} />
        <Route path="/system" component={System} />
        <Route path="/pipeline" component={Pipeline} />
        <Route path="/pipeline/:slug" component={PipelineDetail} />
        <Route path="/governance" component={Governance} />
        <Route path="/thesis" component={Library} />
        <Route path="/thesis/:slug" component={LibraryArticle} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  usePreloadPages();
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollManager />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
