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
import Redirect from "./components/Redirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
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
          <Route path="/properties/tescon" element={<TesconLanding />} />
          <Route path="/properties/kaamdhenu-builders" element={<KaamdhenubuildersLanding />} />
          <Route path="/properties/paradise-group" element={<ParadiseGroupLanding />} />
          <Route path="/properties/greenscape" element={<GreenscapeLanding />} />
          <Route path="/properties/dreams-group" element={<DreamsgroupLanding />} />
          <Route path="/properties/shree-laxmi" element={<ShreelaxmiLanding />} />
          <Route path="/properties/delta-groups" element={<DeltagroupsLanding />} />
          <Route path="/properties/dreamapex" element={<DreamapexLanding />} />
          <Route path="/properties/emporia-world" element={<EmporiaworldLanding />} />
          <Route path="/properties/kaamdhenu-realties" element={<KaamdhenurealtiesLanding />} />
          <Route path="/properties/raheja-prime" element={<RahejaprimeLanding />} />
          {/* Project Detail Routes - Dynamic */}
          <Route path="/properties/:groupId/:projectId" element={<ProjectDetailPage />} />
          
          {/* 301 Redirects: Old /groups/* URLs to new /properties/* URLs */}
          <Route path="/groups/tescon" element={<Redirect to="/properties/tescon" />} />
          <Route path="/groups/kaamdhenu-builders" element={<Redirect to="/properties/kaamdhenu-builders" />} />
          <Route path="/groups/paradise-group" element={<Redirect to="/properties/paradise-group" />} />
          <Route path="/groups/greenscape" element={<Redirect to="/properties/greenscape" />} />
          <Route path="/groups/dreams-group" element={<Redirect to="/properties/dreams-group" />} />
          <Route path="/groups/shree-laxmi" element={<Redirect to="/properties/shree-laxmi" />} />
          <Route path="/groups/delta-groups" element={<Redirect to="/properties/delta-groups" />} />
          <Route path="/groups/dreamapex" element={<Redirect to="/properties/dreamapex" />} />
          <Route path="/groups/emporia-world" element={<Redirect to="/properties/emporia-world" />} />
          <Route path="/groups/kaamdhenu-realties" element={<Redirect to="/properties/kaamdhenu-realties" />} />
          <Route path="/groups/raheja-prime" element={<Redirect to="/properties/raheja-prime" />} />
          <Route path="/groups/:groupId/:projectId" element={<Redirect to="/properties/:groupId/:projectId" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
