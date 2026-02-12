import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { BiLogoTypescript } from "react-icons/bi";
import { GridPattern } from "@/components/ui/GridPattern";
import { RiAngularjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

export function MedicGo() {
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
          className=" max-w-360 z-20 mx-auto px-4 h-auto mt-25 text-white mb-10 md:mb-20 2xl:scale-120 2xl:py-40"
        >
          <div id="meta" className="px-2 md:px-20 flex flex-col gap-4 mb-10">
            <div
              id="badge"
              className="w-max h-10 bg-red-500/40 shadow-lg backdrop-blur-2xl rounded-full px-4 flex items-center justify-center"
            >
              <p className=" font-medium mr-2">
                {t("Sitema Web", "Web System")}
              </p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="m680-80-12-60q-12-5-22.5-10.5T624-164l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668-420l12-60h80l12 60q12 5 22.5 10.5T816-396l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772-140l-12 60h-80Zm96.5-143.5Q800-247 800-280t-23.5-56.5Q753-360 720-360t-56.5 23.5Q640-313 640-280t23.5 56.5Q687-200 720-200t56.5-23.5ZM160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
              Medic GO
            </h1>

            <div className="flex">
              <div className="flex flex-col gap-2 md:flex-row md:gap-5">
                <div className="flex gap-2">
                  <UserIcon />
                  <p>Ckristian Felipe</p>
                </div>
                <div className="flex gap-2">
                  <Calendar />
                  <p>{t("2 de Dezembro, 2025", "December 2, 2025")}</p>
                </div>
              </div>
            </div>

            <div id="used-tec" className="flex flex-wrap gap-3">
              <div
                id="badge"
                className="w-max h-10 bg-red-800 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <RiAngularjsFill className="w-6 h-6" />
                  Angular
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
                className="w-max h-10 bg-green-900 z-2 rounded-full px-4 flex items-center justify-center"
              >
                <p className="font-medium flex gap-1">
                  <SiPostgresql className="w-5 h-5 mt-px" />
                  PostgreSQL
                </p>
              </div>
            </div>
            <div id="text-descript" className="text-lg font-normal mt-10">
              <p>
                {t("No", "In")}
                <span className="font-medium"> Medic GO</span>,{" "}
                {t(
                  "a pesquisa foi pensada para ser rápida e prática, facilitando o dia a dia de quem usa o sistema. Ela permite localizar produtos de forma imediata por nome, código ou categoria, reduzindo o tempo de busca, evitando erros operacionais e agilizando decisões como reposição e conferência de estoque.",
                  "the search was designed to be fast and practical, facilitating the day-to-day of those who use the system. It allows you to locate products immediately by name, code or category, reducing search time, avoiding operational errors and speeding up decisions such as replacement and inventory checking."
                )}
              </p>
            </div>
          </div>
          <div
            id="project-screenshots"
            className="grid grid-cols-2 gap-10 md:px-20"
          >
            <a
              href="/projects/screenshot-project-3.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.medicgo.app"
                imageSrc="/projects/screenshot-project-3.webp"
              />
            </a>
            <a
              href="/projects/screenshot-project-3A.webp"
              data-fancybox="gallery"
            >
              <Safari
                url="www.medicgo.app"
                imageSrc="/projects/screenshot-project-3A.webp"
              />
            </a>
          </div>

          <div className="md:px-20 px-4 py-16 space-y-12">
            <section className="space-y-4 leading-relaxed text-white/90">
              <p>
                {t(
                  "O",
                  "The"
                )} <strong>Medic Go</strong> {t(
                  "é um sistema web desenvolvido com foco em organização, desempenho e escalabilidade. A proposta do projeto foi criar uma aplicação estruturada, capaz de gerenciar dados de forma eficiente, mantendo uma interface clara e funcional.",
                  "is a web system developed with a focus on organization, performance and scalability. The project's purpose was to create a structured application, capable of managing data efficiently, maintaining a clear and functional interface."
                )}
              </p>

              <p>
                {t(
                  "O front-end foi desenvolvido em",
                  "The front-end was developed with"
                )} <strong>Angular</strong>{t(
                  ", aproveitando sua arquitetura robusta para criar módulos bem organizados, componentes reutilizáveis e uma navegação fluida entre as funcionalidades do sistema.",
                  ", taking advantage of its robust architecture to create well-organized modules, reusable components and fluid navigation between system functionalities."
                )}
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-semibold">
                {t("Arquitetura e Tecnologias", "Architecture and Technologies")}
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">{t("Backend com NestJS", "Backend with NestJS")}</h4>
                  <p className="text-white/90 leading-relaxed">
                    {t(
                      "O backend foi desenvolvido em",
                      "The backend was developed with"
                    )} <strong>NestJS</strong>{t(
                      ", seguindo uma arquitetura organizada e escalável. A API é responsável por gerenciar as regras de negócio e realizar a comunicação com o banco de dados.",
                      ", following an organized and scalable architecture. The API is responsible for managing business rules and communicating with the database."
                    )}
                  </p>
                </div>

                <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                  <h4 className="text-lg font-semibold">{t("Banco de Dados", "Database")}</h4>
                  <p className="text-white/90 leading-relaxed">
                    {t(
                      "Os dados são armazenados em",
                      "Data is stored in"
                    )} <strong>PostgreSQL</strong>{t(
                      ", garantindo consistência e confiabilidade nas operações. A aplicação também utiliza integração com",
                      ", ensuring consistency and reliability in operations. The application also uses integration with"
                    )}{" "}
                    <strong>Firebase</strong> {t(
                      "para suporte a serviços complementares e comunicação com a API.",
                      "to support complementary services and communication with the API."
                    )}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-2xl font-semibold">
                {t("Interface e Experiência", "Interface and Experience")}
              </h3>

              <div className="rounded-xl border border-lime-400 p-6 space-y-3">
                <h4 className="text-lg font-semibold">DaisyUI</h4>
                <p className="text-white/90 leading-relaxed">
                  {t(
                    "Para acelerar o desenvolvimento da interface e manter consistência visual, foi utilizada a biblioteca de componentes",
                    "To accelerate interface development and maintain visual consistency, the component library"
                  )}{" "}
                  <strong>DaisyUI</strong>{t(
                    ". Isso permitiu construir telas organizadas, responsivas e com boa padronização visual, mantendo produtividade sem comprometer a qualidade.",
                    " was used. This allowed building organized, responsive screens with good visual standardization, maintaining productivity without compromising quality."
                  )}
                </p>
              </div>
            </section>

            <section className="space-y-4 leading-relaxed text-white/90">
              <h3 className="text-2xl font-semibold">{t("Resultado Final", "Final Result")}</h3>
              <p>
                {t(
                  "O resultado é um sistema completo, estruturado em uma arquitetura moderna, com separação clara entre front-end e back-end, banco de dados relacional e uma interface funcional. Um projeto voltado para desempenho, organização e possibilidade de expansão futura.",
                  "The result is a complete system, structured in a modern architecture, with clear separation between front-end and back-end, relational database and a functional interface. A project focused on performance, organization and possibility of future expansion."
                )}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
