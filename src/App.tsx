import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Blog from "./pages/Blog";
import BlogArticlePage from "./pages/BlogArticlePage";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import TesconLanding from "./pages/TesconLanding";
import KaamdhenubuildersLanding from "./pages/KaamdhenubuildersLanding";
import ParadiseGroupLanding from "./pages/ParadiseGroupLanding";
import GreenscapeLanding from "./pages/GreenscapeLanding";
import DreamsgroupLanding from "./pages/DreamsgroupLanding";
import ShreelaxmiLanding from "./pages/ShreelaxmiLanding";
import DeltagroupsLanding from "./pages/DeltagroupsLanding";
import DreamapexLanding from "./pages/DreamapexLanding";
import EmporiaworldLanding from "./pages/EmporiaworldLanding";
import KaamdhenurealtiesLanding from "./pages/KaamdhenurealtiesLanding";
import RahejaprimeLanding from "./pages/RahejaprimeLanding";
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
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* Developer Group Routes - All 11 Groups */}
          <Route path="/groups/tescon" element={<TesconLanding />} />
          <Route path="/groups/kaamdhenu-builders" element={<KaamdhenubuildersLanding />} />
          <Route path="/groups/paradise-group" element={<ParadiseGroupLanding />} />
          <Route path="/groups/greenscape" element={<GreenscapeLanding />} />
          <Route path="/groups/dreams-group" element={<DreamsgroupLanding />} />
          <Route path="/groups/shree-laxmi" element={<ShreelaxmiLanding />} />
          <Route path="/groups/delta-groups" element={<DeltagroupsLanding />} />
          <Route path="/groups/dreamapex" element={<DreamapexLanding />} />
          <Route path="/groups/emporia-world" element={<EmporiaworldLanding />} />
          <Route path="/groups/kaamdhenu-realties" element={<KaamdhenurealtiesLanding />} />
          <Route path="/groups/raheja-prime" element={<RahejaprimeLanding />} />
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
