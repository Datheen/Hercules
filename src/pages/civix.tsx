import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GridPattern } from "@/components/ui/GridPattern";
import { RiNextjsFill } from "react-icons/ri";
import { useLanguage } from "@/contexts/LanguageContext";

export function Civix() {
  const { t } = useLanguage();
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
          className=" max-w-360 z-20 mx-auto px-4 h-auto mt-25 text-white mb-10 md:mb-20 2xl:scale-120 2xl:py-30"
        >
          <div id="meta" className="px-2 md:px-20 flex flex-col gap-4 mb-10">
            <div
              id="badge"
              className="w-max h-10 bg-blue-800/40 shadow-lg backdrop-blur-2xl rounded-full px-4 flex items-center justify-center"
            >
              <p className=" font-medium mr-2">
                {t("Landing Page", "Landing Page")}
              </p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M120-120v-80h480v80H120Zm0-160v-80h720v80H120Zm80-160q-33 0-56.5-23.5T120-520v-240q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v240q0 33-23.5 56.5T760-440H200Zm0-80h560v-240H200v240Zm0 0v-240 240Z" />
              </svg>
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
                  <p>{t("14 de Agosto, 2025", "August 14, 2025")}</p>
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
            <div id="text-descript" className="text-lg font-normal mt-5">
              <span className="font-medium">
                Civix {t("Advocacia", "Law Firm")}
              </span>{" "}
              {t(
                "foi desenvolvido como uma landing page estratégica, com foco em autoridade, clareza e conversão. A proposta era transmitir credibilidade e profissionalismo desde o primeiro contato, mantendo uma navegação simples, direta e objetiva.",
                "is an institutional website developed with Next.js and Tailwind CSS, designed to convey credibility, authority and professionalism from the first access. The project was built with a focus on high performance, fast loading and excellent user experience, using well-structured components, clear typography and a modern and responsive layout."
              )}
            </div>
            
          </div>
          <div
            id="project-screenshots"
            className="grid grid-cols-2 gap-10 md:px-20"
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
         <div className=" py-16 space-y-12 md:px-20 px-4">

  <section className="space-y-4 leading-relaxed text-white/90">
    <p>
      O site da <strong>Civix Advocacia</strong> foi desenvolvido como uma
      landing page estratégica, com foco em autoridade, clareza e conversão.
      A proposta foi transmitir credibilidade desde o primeiro contato,
      mantendo uma navegação simples, direta e objetiva.
    </p>

    <p>
      A aplicação foi construída em <strong>Next.js</strong>, priorizando
      performance, SEO e carregamento rápido — fatores essenciais para
      fortalecer a presença digital do escritório.
    </p>
  </section>

  <section className="space-y-6">
    <h3 className="text-2xl font-semibold">Processo de desenvolvimento</h3>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-xl border border-lime-400 p-6 space-y-3">
        <h4 className="text-lg font-semibold">UI/UX personalizado</h4>
        <p className="text-white/90 leading-relaxed">
          A interface foi desenvolvida do zero, sem bibliotecas prontas de
          componentes. Cada seção foi estruturada com foco em hierarquia
          visual, leitura fluida e chamadas de ação estratégicas.
        </p>
      </div>

      <div className="rounded-xl border border-lime-400 p-6 space-y-3">
        <h4 className="text-lg font-semibold">Design no Figma</h4>
        <p className="text-white/90 leading-relaxed">
          O layout foi prototipado previamente no Figma, garantindo
          consistência em tipografia, espaçamentos e identidade visual,
          facilitando uma implementação fiel ao design.
        </p>
      </div>
    </div>
  </section>

  <section className="space-y-4 leading-relaxed text-white/90">
    <h3 className="text-2xl font-semibold">Resultado final</h3>
    <p>
      O resultado é uma landing page moderna, leve e funcional,
      projetada para transmitir confiança e facilitar o contato
      com potenciais clientes.
    </p>
  </section>
</div>

        </div>
      </div>
    </div>
  );
}
