import usa from "@/assets/img/hero/usa.webp";
import brazil from "@/assets/img/hero/brazil.webp";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Language() {
  const { setLanguage } = useLanguage();

  return (
    <div className="fab">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-circle opacity-50 hover:opacity-100 bg-green-800 border-2 border-green-800"
      >
        <Globe />
      </div>

      <button id="english" onClick={() => setLanguage("en")} className="btn btn-lg btn-circle">
        <img className="rounded-full" src={usa} />
      </button>
      <button id="portuguese" onClick={() => setLanguage("pt")} className="btn btn-lg btn-circle">
        <img className="rounded-full" src={brazil} />
      </button>
    </div>
  );
}
