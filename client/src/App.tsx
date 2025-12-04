import { Switch, Route } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollManager } from "@/components/ScrollManager";
import Overview from "@/pages/Overview";

const Ventures = lazy(() => import("@/pages/Ventures"));
const VentureDetail = lazy(() => import("@/pages/VentureDetail"));
const HeliosPage = lazy(() => import("@/pages/ventures/Helios"));
const LuminaPage = lazy(() => import("@/pages/ventures/Lumina"));
const UniquenessPage = lazy(() => import("@/pages/ventures/Uniqueness"));
const Insights = lazy(() => import("@/pages/Insights"));
const InsightDetail = lazy(() => import("@/pages/InsightDetail"));
const Connect = lazy(() => import("@/pages/Connect"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));


const ApproachPage = lazy(() => import("@/pages/approach/Approach"));
const PillarsPage = lazy(() => import("@/pages/approach/Pillars"));
const ProcessPage = lazy(() => import("@/pages/Process"));
const StandardsPage = lazy(() => import("@/pages/Standards"));

const StudioPage = lazy(() => import("@/pages/studio/Studio"));
const PurposePage = lazy(() => import("@/pages/studio/Purpose"));
const VisionPage = lazy(() => import("@/pages/studio/Vision"));
const MissionPage = lazy(() => import("@/pages/studio/Mission"));

function usePreloadPages() {
  useEffect(() => {
    const preloadPages = async () => {
      const imports = [
        () => import("@/pages/Ventures"),
        () => import("@/pages/Insights"),
        () => import("@/pages/Connect"),
        () => import("@/pages/approach/Approach"),
        () => import("@/pages/studio/Studio"),
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
        <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Processing</span>
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
        
        {/* Ventures */}
        <Route path="/ventures" component={Ventures} />
        <Route path="/ventures/helios" component={HeliosPage} />
        <Route path="/ventures/lumina" component={LuminaPage} />
        <Route path="/ventures/uniqueness" component={UniquenessPage} />
        <Route path="/ventures/:slug" component={VentureDetail} />
        
        {/* Approach */}
        <Route path="/approach" component={ApproachPage} />
        <Route path="/approach/pillars" component={PillarsPage} />
        <Route path="/approach/process" component={ProcessPage} />
        <Route path="/approach/standards" component={StandardsPage} />
        
        {/* Studio */}
        <Route path="/studio" component={StudioPage} />
        <Route path="/studio/purpose" component={PurposePage} />
        <Route path="/studio/vision" component={VisionPage} />
        <Route path="/studio/mission" component={MissionPage} />
        
        {/* Insights */}
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={InsightDetail} />
        
        {/* Connect & Legal */}
        <Route path="/connect" component={Connect} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        
        {/* 404 */}
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
