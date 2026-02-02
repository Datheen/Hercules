import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { MedicGo } from "@/pages/medicgo";
import { EncantoAmazonico } from "@/pages/encantoamazonico";
import { Civix } from "@/pages/civix";
import { Home } from "@/pages";
import { Sobre } from "@/pages/sobre";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Loading } from "@/components/Loading";

export default function AppRoutes() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black">
          <Loading className="text-white" />
        </div>
      )}

      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encantoamazonico" element={<EncantoAmazonico />} />
        <Route path="/civix" element={<Civix />} />
        <Route path="/medicgo" element={<MedicGo />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
