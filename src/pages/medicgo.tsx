import { Calendar, UserIcon } from "lucide-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { Safari } from "@/components/ui/safari";
import { BiLogoTypescript } from "react-icons/bi";
import { GridPattern } from "@/components/ui/GridPattern";
import { RiAngularjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { Star } from "@/components/ui/Star";
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
          className=" max-w-360 z-20 mx-auto px-4 h-auto mt-25 text-white mb-10 md:mb-20"
        >
          <div id="meta" className="px-2 md:px-20 flex flex-col gap-4 mb-10">
            <div
              id="badge"
              className="w-max h-10 bg-blue-800/40 shadow-lg backdrop-blur-2xl rounded-full px-4 flex items-center justify-center"
            >
              <p className=" font-medium mr-2">{t("Sitema Web:", "Web System:")}</p> <Star />
              <Star />
              <Star />
              <Star />
              <Star />
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
            <div id="text-descript" className="text-lg font-normal">
              <p>
                {t("No", "In")}<span className="font-medium"> Medic GO</span>, {t(
                  "a pesquisa foi pensada para ser rápida e prática, facilitando o dia a dia de quem usa o sistema. Ela permite localizar produtos de forma imediata por nome, código ou categoria, reduzindo o tempo de busca, evitando erros operacionais e agilizando decisões como reposição e conferência de estoque.",
                  "the search was designed to be fast and practical, facilitating the day-to-day of those who use the system. It allows you to locate products immediately by name, code or category, reducing search time, avoiding operational errors and speeding up decisions such as replacement and inventory checking."
                )}
              </p>
            </div>
          </div>
          <div
            id="project-screenshots"
            className="flex flex-col gap-y-15 md:px-20"
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
        </div>
      </div>
    </div>
  );
}
