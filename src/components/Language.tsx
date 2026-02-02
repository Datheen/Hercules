import usa from "@/assets/img/hero/usa.webp";
import brazil from "@/assets/img/hero/brazil.webp";
import { Globe } from "lucide-react";

export function Language() {
  return (
    <div className="fab">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-xl btn-circle opacity-50 hover:opacity-100 bg-green-800 border-2 border-green-800"
      >
        <Globe />
      </div>

      <button id="english" className="btn btn-lg btn-circle">
        <img className="rounded-full" src={usa} />
      </button>
      <button id="portuguese" className="btn btn-lg btn-circle">
        <img className="rounded-full" src={brazil} />
      </button>
    </div>
  );
}
