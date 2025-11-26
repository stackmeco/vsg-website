import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Overview from "@/pages/Overview";
import System from "@/pages/System";
import Pipeline from "@/pages/Pipeline";
import PipelineDetail from "@/pages/PipelineDetail";
import Governance from "@/pages/Governance";
import Library from "@/pages/Library";
import Contact from "@/pages/Contact";
import Status from "@/pages/Status";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Overview} />
      <Route path="/system" component={System} />
      <Route path="/pipeline" component={Pipeline} />
      <Route path="/pipeline/:slug" component={PipelineDetail} />
      <Route path="/governance" component={Governance} />
      <Route path="/library" component={Library} />
      <Route path="/contact" component={Contact} />
      <Route path="/status" component={Status} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
