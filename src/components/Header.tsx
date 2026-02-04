import { AtomIcon } from "./ui/LogoIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pillRef = useRef<HTMLDivElement>(null);
  const inicioRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const targetRef = location.pathname === "/sobre" ? sobreRef : inicioRef;

    if (pillRef.current && targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const containerRect =
        targetRef.current.parentElement?.getBoundingClientRect();

      if (containerRect) {
        const left = targetRect.left - containerRect.left;
        const width = targetRect.width;

        gsap.to(pillRef.current, {
          x: left,
          width: width,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, [location.pathname, language]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-99 w-[95%] max-w-360 lg:px-20 2xl:px-5 overflow-hidden ">
      <div className="bg-white/40 backdrop-blur-lg rounded-full shadow-md border border-white/20 px-2.25 py-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-r from-lime-400/80 to-green-700/80 rounded-full p-1">
              <AtomIcon className="text-white/80 hover:cursor-pointer p-1"></AtomIcon>
            </div>

            <p className="text-lime-400 hidden md:block font-semibold text-xl">
              Ckristian Felipe
            </p>
          </div>

          <div id="pill" className="flex relative">
            <div
              ref={pillRef}
              className={
                location.pathname === "/" || location.pathname === "/sobre"
                  ? "absolute bg-linear-to-b from-lime-400/80 to-green-700/80 py-2 px-4 w-18 rounded-full pointer-events-none"
                  : "hidden"
              }
              style={{ height: "calc(100% - 0px)" }}
            />
            <div
              ref={inicioRef}
              id="inicio"
              onClick={() => navigate("/")}
              className="relative py-2 px-4 rounded-full font-semibold cursor-pointer transition-colors z-10"
            >
              <span
                className={
                  location.pathname === "/"
                    ? "text-white/80"
                    : "text-zinc-900 hover:text-white "
                }
              >
                {t("Início", "Home")}
              </span>
            </div>
            <div
              ref={sobreRef}
              id="sobre"
              onClick={() => navigate("/sobre")}
              className="relative py-2 px-4 rounded-full mr-2 font-medium cursor-pointer transition-colors z-10"
            >
              <span
                className={
                  location.pathname === "/sobre"
                    ? "text-white/80"
                    : "text-zinc-900 hover:text-white"
                }
              >
                {t("Sobre", "About")}
              </span>
            </div>
            <div id="divider" className="w-0.5 bg-white/20"></div>
            <div className="py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin text-zinc-900"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>

            <div
              onClick={() =>
                (window.location.href = "https://wa.me/5592985355192")
              }
              id="whatsapp"
              className="cursor-pointer py-2 px-4"
            >
              <svg
                className="w-6 h-6 mt-px -ml-1 text-zinc-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
