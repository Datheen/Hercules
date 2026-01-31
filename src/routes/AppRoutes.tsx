import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MedicGo } from "@/pages/medicgo";
import { EncantoAmazonico } from "@/pages/encantoamazonico";
import { Civix } from "@/pages/civix";
import { Home } from "@/pages";
import { Sobre } from "@/pages/sobre";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
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
