
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import VisualSalience from "./pages/VisualSalience";
import SpotlightText from "./pages/SpotlightText";
import CycleText from "./pages/CycleText";
import Motion from "./pages/Motion";
import ProgressBars from "./pages/ProgressBars";
import ThemeToggle from "./pages/ThemeToggle";
import SocialProofing from "./pages/SocialProofing";
import ConversationalInput from "./pages/ConversationalInput";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/visual-salience" element={<VisualSalience />} />
            <Route path="/spotlight-text" element={<SpotlightText />} />
            <Route path="/cycle-text" element={<CycleText />} />
            <Route path="/motion" element={<Motion />} />
            <Route path="/progress-bars" element={<ProgressBars />} />
            <Route path="/theme-toggle" element={<ThemeToggle />} />
            <Route path="/social-proofing" element={<SocialProofing />} />
            <Route path="/conversational-input" element={<ConversationalInput />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
