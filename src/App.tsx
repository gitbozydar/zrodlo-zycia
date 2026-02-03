import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Metody from "./pages/Metody";
import Zespol from "./pages/Zespol";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";

import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollTop";
import Terapeuta from "./pages/Terapeuta";
import Rodo from "./pages/Rodo";
import CookiesBanner from "./pages/CookiesBanner";
import UstawaKamilka from "./pages/UstawaKamilka";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookiesBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/metody" element={<Metody />} />
          <Route path="/zespol" element={<Zespol />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ustawa-kamilka" element={<UstawaKamilka />} />
          <Route path="/rodo" element={<Rodo />} />
          <Route path="/zespol/:id" element={<Terapeuta />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
