import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Footer from "@/components/Footer";
import WebsiteOptimization from "./pages/services/WebsiteOptimization";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import CompleteDigitalMarketing from "./pages/services/CompleteDigitalMarketing";
import RestaurantMarketing from "./pages/industries/RestaurantMarketing";
import LawFirmMarketing from "./pages/industries/LawFirmMarketing";
import ContractorMarketing from "./pages/industries/ContractorMarketing";
import HealthcareMarketing from "./pages/industries/HealthcareMarketing";
import EcommerceMarketing from "./pages/industries/EcommerceMarketing";
import RealEstateMarketing from "./pages/industries/RealEstateMarketing";
import FinancialServicesMarketing from "./pages/industries/FinancialServicesMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-jlawrence-marketing" element={<About />} />
              <Route path="/contact-us-free-audit" element={<Contact />} />
              <Route path="/small-business-marketing-case-studies" element={<CaseStudies />} />
              <Route path="/small-business-marketing-blog" element={<Blog />} />
              <Route path="/marketing-resources" element={<Resources />} />
              
              {/* Service Pages */}
              <Route path="/website-optimization-seo-services" element={<WebsiteOptimization />} />
              <Route path="/social-media-management-small-business" element={<SocialMediaManagement />} />
              <Route path="/complete-digital-marketing-package" element={<CompleteDigitalMarketing />} />
              
              {/* Industry Pages */}
              <Route path="/restaurant-marketing-services" element={<RestaurantMarketing />} />
              <Route path="/law-firm-marketing-services" element={<LawFirmMarketing />} />
              <Route path="/contractor-marketing-services" element={<ContractorMarketing />} />
              <Route path="/healthcare-marketing-services" element={<HealthcareMarketing />} />
              <Route path="/e-commerce-marketing-services" element={<EcommerceMarketing />} />
              <Route path="/real-estate-marketing-services" element={<RealEstateMarketing />} />
              <Route path="/financial-services-marketing" element={<FinancialServicesMarketing />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;