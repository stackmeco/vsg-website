import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ScrollManager } from "@/components/ScrollManager";
import Overview from "@/pages/Overview";
import System from "@/pages/System";
import Pipeline from "@/pages/Pipeline";
import PipelineDetail from "@/pages/PipelineDetail";
import Governance from "@/pages/Governance";
import Library from "@/pages/Library";
import LibraryArticle from "@/pages/LibraryArticle";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
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
