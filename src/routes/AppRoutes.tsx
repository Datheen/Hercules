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
import { Language } from "@/components/Language";
import { WordRotate } from "@/components/ui/word-rotate";

export default function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <div className="fixed inset-0 z-100 flex flex-col items-center text-white justify-center bg-black">
          <div className="text-3xl mb-30 font-medium -mt-20">
            {" "}
            <WordRotate words={["Welcome", "Bem-vindo"]} />
          </div>
          <Loading />
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
      <Language />
      <Footer />
    </BrowserRouter>
  );
}
