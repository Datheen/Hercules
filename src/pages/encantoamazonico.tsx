import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { GridPattern } from "@/components/ui/GridPattern";
import { Star } from "@/components/ui/Star";
import { useLanguage } from "@/contexts/LanguageContext";

export function EncantoAmazonico() {
  const { t } = useLanguage();
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="w-full ">
      <div className="relative w-full overflow-hidden z-1">
        <GridPattern />
        <div
          id="container"
          className=" max-w-360 z-20 mx-auto px-4 h-auto mt-25 text-white mb-10 md:mb-20 2xl:scale-120 2xl:py-33"
        >
          <div id="meta" className="px-2 md:px-20 flex flex-col gap-4 mb-10">
            <div
              id="badge"
              className="w-max h-10 bg-green-600/40 shadow-lg backdrop-blur-2xl rounded-full px-4 flex items-center justify-center opacity-70"
            >
              <p className=" font-medium mr-2">
                {t("E-commerce", "E-commerce")}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
              {t("Encanto Amazônico", "Amazonian Charm")}
            </h1>

            <div className="flex">
              <div className="flex flex-col gap-2 md:flex-row md:gap-5">
                <div className="flex gap-2">
                  <UserIcon />
                  <p>Ckristian Felipe, Breynner Caldas e Jheyson</p>
                </div>
                <div className="flex gap-2">
                  <Calendar />
                  <p>{t("2 de Dezembro, 2025", "December 2, 2025")}</p>
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
            <div id="text-descript" className="text-lg font-normal mt-10">
              <span className="font-medium">
                {t("Encanto Amazônico", "Amazonian Charm")}
              </span>{" "}
              {t(
                "é um projeto focado na valorização da natureza da Amazônia por meio de um e-commerce moderno e funcional. A plataforma oferece a venda de plantas amazônicas e outras variedades, unindo design limpo, boa usabilidade e performance. O objetivo é conectar pessoas à biodiversidade, promovendo sustentabilidade e uma experiência de compra simples e confiável.",
                "is a project focused on valuing the nature of the Amazon through a modern and functional e-commerce. The platform offers the sale of Amazonian plants and other varieties, combining clean design, good usability and performance. The goal is to connect people to biodiversity, promoting sustainability and a simple and reliable shopping experience."
              )}
            </div>
          </div>
          <div
            id="project-screenshots"
            className="grid grid-cols-2 gap-10 md:px-20"
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

          <div className="py-16 md:px-20 px-4 space-y-12">
            <section className="space-y-4 leading-relaxed text-white/90">
              <p>
                O site foi desenvolvido como um projeto completo de presença
                digital, com foco em experiência do usuário, identidade visual e
                um fluxo de compra simples e confiável. A proposta foi criar uma
                interface moderna, clara e responsiva, valorizando a estética e
                a proposta da marca.
              </p>

              <p>
                A aplicação foi construída em <strong>React</strong> (sem
                framework), priorizando uma estrutura bem organizada, navegação
                fluida e componentes reutilizáveis para manter o projeto
                escalável e fácil de evoluir.
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Processo de desenvolvimento
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">
                    Pagamentos e integração
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Foi integrada a API de pagamento do{" "}
                    <strong>PagSeguro</strong>, garantindo um checkout funcional
                    e seguro. O objetivo foi oferecer uma jornada de pagamento
                    clara, reduzindo atrito e aumentando a confiança do usuário
                    durante a compra.
                  </p>
                </div>

                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">
                    Banco de dados com Firebase
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    Para persistência de dados, o projeto utilizou{" "}
                    <strong>Firebase</strong>, permitindo gerenciamento prático
                    e rápido das informações, além de uma base sólida para
                    futuras expansões, como autenticação, pedidos e catálogo
                    dinâmico.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-semibold">Design e autoria</h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">Design no Figma</h4>
                  <p className="text-white/90 leading-relaxed">
                    O layout foi planejado e prototipado no{" "}
                    <strong>Figma</strong>, garantindo consistência visual,
                    tipografia bem definida, espaçamentos corretos e uma
                    experiência alinhada com a identidade da marca.
                  </p>
                </div>

                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">Greenleaf Studio</h4>
                  <p className="text-white/90 leading-relaxed">
                    Este projeto foi desenvolvido pela{" "}
                    <strong>Greenleaf Studio</strong>, com a maior parte da
                    implementação feita por mim — desde a construção dos
                    componentes em React até integrações e ajustes finais para
                    entregar uma experiência completa e profissional.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 leading-relaxed text-white/90">
              <h3 className="text-2xl font-semibold">Resultado final</h3>
              <p>
                O resultado é um site moderno, responsivo e funcional, com
                integração de pagamentos e base de dados pronta para evoluir. Um
                projeto pensado para unir estética, usabilidade e tecnologia,
                entregando uma experiência consistente do início ao fim.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
