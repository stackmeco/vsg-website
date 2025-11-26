import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Studio from "@/pages/Studio";
import Ventures from "@/pages/Ventures";
import VentureDetail from "@/pages/VentureDetail";
import Governance from "@/pages/Governance";
import Insights from "@/pages/Insights";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Partners from "@/pages/Partners";
import Status from "@/pages/Status";
import Docs from "@/pages/Docs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/studio" component={Studio} />
      <Route path="/ventures" component={Ventures} />
      <Route path="/ventures/:slug" component={VentureDetail} />
      <Route path="/governance" component={Governance} />
      <Route path="/insights" component={Insights} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route path="/partners" component={Partners} />
      <Route path="/status" component={Status} />
      <Route path="/docs" component={Docs} />
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
