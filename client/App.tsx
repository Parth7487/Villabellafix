import "./global.css";

import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const isHomepage = pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header showAlways={!isHomepage} />
      <main
        className={`flex-grow ${!isHomepage ? "pt-24 sm:pt-32 lg:pt-48" : ""}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Index />
        </Layout>
      }
    />
    <Route
      path="/products"
      element={
        <Layout>
          <Products />
        </Layout>
      }
    />
    <Route
      path="/product/:id"
      element={
        <Layout>
          <ProductDetail />
        </Layout>
      }
    />
    <Route
      path="/about"
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path="/contact"
      element={
        <Layout>
          <Contact />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);

const App = () => (
  <LanguageProvider>
    <CurrencyProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Preloader />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </CurrencyProvider>
  </LanguageProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
