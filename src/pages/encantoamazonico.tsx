import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { GridPattern } from "@/components/ui/GridPattern";

export function EncantoAmazonico() {
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
              className="w-max h-10 bg-green-900/50 rounded-full px-4 flex items-center justify-center"
            >
              <p className=" font-medium">E-commerce</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
              Encanto Amazônico
            </h1>

            <div className="flex">
              <div className="flex flex-col gap-2 md:flex-row md:gap-5">
                <div className="flex gap-2">
                  <UserIcon />
                  <p>Ckristian Felipe, Breynner Caldas e Jheyson</p>
                </div>
                <div className="flex gap-2">
                  <Calendar />
                  <p>2 de Dezembro, 2025</p>
                </div>
              </div>
            </div>

            <div id="used-tec" className="flex gap-3">
              <div
                id="badge"
                className="w-max h-10 bg-blue-900 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <FaReact className="w-6 h-6" />
                  React
                </p>
              </div>

              <div
                id="badge"
                className="w-max h-10 bg-blue-500/90 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <BiLogoTypescript className="w-6 h-6" />
                  TypeScript
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
              <span className="font-medium">Encanto Amazônico</span> é um
              projeto focado na valorização da natureza da Amazônia por meio de
              um e-commerce moderno e funcional. A plataforma oferece a venda de
              plantas amazônicas e outras variedades, unindo design limpo, boa
              usabilidade e performance. O objetivo é conectar pessoas à
              biodiversidade, promovendo sustentabilidade e uma experiência de
              compra simples e confiável.
            </div>
          </div>
          <div
            id="project-screenshots"
            className="flex flex-col gap-y-15 md:px-20"
          >
            <a href="/projects/project-1.webp" data-fancybox="gallery">
              <Safari
                url="www.encantoamazonico.com.br"
                imageSrc="/projects/project-1.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-1.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.encantoamazonico.com.br"
                imageSrc="/projects/screenshot-project-1.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-1A.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.encantoamazonico.com.br"
                imageSrc="/projects/screenshot-project-1A.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-1B.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.encantoamazonico.com.br"
                imageSrc="/projects/screenshot-project-1B.webp"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
