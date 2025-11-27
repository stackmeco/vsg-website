import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
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
