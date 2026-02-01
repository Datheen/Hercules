import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GridPattern } from "@/components/ui/GridPattern";
import { RiNextjsFill } from "react-icons/ri";
import { Star } from "@/components/ui/Star";

export function Civix() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden z-1">
        <GridPattern />
        <div
          id="container"
          className=" max-w-360 z-20 mx-auto px-4 h-auto mt-25 text-white mb-10 md:mb-20"
        >
          <div id="meta" className="px-2 md:px-20 flex flex-col gap-4 mb-10">
            <div
              id="badge"
              className="w-max h-10 bg-zinc-800/40 shadow-lg backdrop-blur-2xl rounded-full px-4 flex items-center justify-center"
            >
              <p className=" font-medium mr-2">Landing Page:</p> <Star/><Star/><Star/><Star/><Star/>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
              Civix
            </h1>

            <div className="flex">
              <div className="flex flex-col gap-2 md:flex-row md:gap-5">
                <div className="flex gap-2">
                  <UserIcon />
                  <p>Ckristian Felipe</p>
                </div>
                <div className="flex gap-2">
                  <Calendar />
                  <p>14 de Agosto, 2025</p>
                </div>
              </div>
            </div>

            <div id="used-tec" className="flex gap-3">
              <div
                id="badge"
                className="w-max h-10 bg-black z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <RiNextjsFill className="w-6 h-6" />
                  Next JS
                </p>
              </div>

              <div
                id="badge"
                className="w-max h-10 bg-white/90 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1 text-zinc-800">
                  <RiTailwindCssFill className="text-blue-600 w-6 h-6" />
                  Tailwind
                </p>
              </div>

              <div
                id="badge"
                className="w-max h-10 bg-red-500/70 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <FaFigma className="w-5 h-5 mt-px" />
                  Figma
                </p>
              </div>
            </div>
            <div id="text-descript" className="text-lg font-normal">
              <span className="font-medium">Civix Advocacia</span> é um site
              institucional desenvolvido com Next.js e Tailwind CSS, pensado
              para transmitir credibilidade, autoridade e profissionalismo desde
              o primeiro acesso. O projeto foi construído com foco em alta
              performance, carregamento rápido e excelente experiência do
              usuário, utilizando componentes bem estruturados, tipografia clara
              e um layout moderno e responsivo.
            </div>
          </div>
          <div
            id="project-screenshots"
            className="flex flex-col gap-y-15 md:px-20"
          >
            <a href="/projects/project-2.webp" data-fancybox="gallery">
              <Safari
                url="www.civixadvogacia.com"
                imageSrc="/projects/project-2.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-2.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.civixadvogacia.com"
                imageSrc="/projects/screenshot-project-2.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-2A.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.encantoamazonico.com.br"
                imageSrc="/projects/screenshot-project-2A.webp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
