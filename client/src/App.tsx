import { Switch, Route } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollManager } from "@/components/ScrollManager";
import Overview from "@/pages/Overview";

const System = lazy(() => import("@/pages/System"));
const Pipeline = lazy(() => import("@/pages/Pipeline"));
const PipelineDetail = lazy(() => import("@/pages/PipelineDetail"));
const Governance = lazy(() => import("@/pages/Governance"));
const Library = lazy(() => import("@/pages/Library"));
const LibraryArticle = lazy(() => import("@/pages/LibraryArticle"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

function usePreloadPages() {
  useEffect(() => {
    const preloadPages = async () => {
      const imports = [
        () => import("@/pages/System"),
        () => import("@/pages/Pipeline"),
        () => import("@/pages/Governance"),
        () => import("@/pages/Library"),
        () => import("@/pages/PipelineDetail"),
        () => import("@/pages/LibraryArticle"),
        () => import("@/pages/Contact"),
        () => import("@/pages/Privacy"),
        () => import("@/pages/Terms"),
      ];

      for (let i = 0; i < imports.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        imports[i]().catch(() => {});
      }
    };

    const timer = setTimeout(preloadPages, 1500);
    return () => clearTimeout(timer);
  }, []);
}

function PageLoader() {
  return (
    <div 
      className="min-h-screen bg-background flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1" aria-hidden="true">
          <div className="w-1 h-6 bg-primary/40 animate-[heartbeat_1.2s_ease-in-out_infinite]" />
          <div className="w-1 h-6 bg-primary/60 animate-[heartbeat_1.2s_ease-in-out_0.15s_infinite]" />
          <div className="w-1 h-6 bg-primary animate-[heartbeat_1.2s_ease-in-out_0.3s_infinite]" />
          <div className="w-1 h-6 bg-primary/60 animate-[heartbeat_1.2s_ease-in-out_0.45s_infinite]" />
          <div className="w-1 h-6 bg-primary/40 animate-[heartbeat_1.2s_ease-in-out_0.6s_infinite]" />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Processing</span>
        <span className="sr-only">Loading page content, please wait</span>
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
