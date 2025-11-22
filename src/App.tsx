import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import TesconLanding from "./pages/TesconLanding";
import KaamdhenubuildersLanding from "./pages/KaamdhenubuildersLanding";
import ParadiseGroupLanding from "./pages/ParadiseGroupLanding";
import GreenscapeLanding from "./pages/GreenscapeLanding";
import DreamsgroupLanding from "./pages/DreamsgroupLanding";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* Developer Group Routes */}
          <Route path="/groups/tescon" element={<TesconLanding />} />
          <Route path="/groups/kaamdhenu-builders" element={<KaamdhenubuildersLanding />} />
          <Route path="/groups/paradise-group" element={<ParadiseGroupLanding />} />
          <Route path="/groups/greenscape" element={<GreenscapeLanding />} />
          <Route path="/groups/dreams-group" element={<DreamsgroupLanding />} />
          {/* Project Detail Routes - Dynamic */}
          <Route path="/properties/:groupId/:projectId" element={<ProjectDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
