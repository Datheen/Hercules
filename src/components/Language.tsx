import usa from "@/assets/img/hero/usa.webp";
import brazil from "@/assets/img/hero/brazil.webp";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export function Language() {
  const { setLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: "pt" | "en") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Dropdown Menu */}
        <div
          className={`absolute bottom-20 right-0 w-max bg-zinc-900/95 backdrop-blur-xl border border-green-700/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
          }`}
        >
          <button
            onClick={() => handleLanguageChange("en")}
            className={`flex items-center gap-3 w-full px-5 py-3 hover:cursor-pointer hover:bg-green-800/20 transition-colors ${
              language === "en" ? "bg-green-800/30" : ""
            }`}
          >
            <img src={usa} alt="English" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-white font-medium">English</span>
          </button>
          <button
            onClick={() => handleLanguageChange("pt")}
            className={`flex items-center gap-3 w-full px-5 py-3 hover:cursor-pointer hover:bg-green-800/20 transition-colors ${
              language === "pt" ? "bg-green-800/30" : ""
            }`}
          >
            <img src={brazil} alt="Português" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-white font-medium">Português</span>
          </button>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full hover:cursor-pointer flex items-center justify-center bg-green-800 hover:bg-green-700 border-2 border-green-600 shadow-lg hover:shadow-green-800/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Change language"
        >
          <Globe className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
}
