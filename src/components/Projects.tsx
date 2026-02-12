import dataJson from "@/data/data.json";
import { Star } from "./ui/Star";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { GridPattern } from "@/components/ui/GridPattern";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = {
  id: number;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: string;
  route: string;
  type: {
    pt: string;
    en: string;
  };
  variant: string;
};

export function Projects() {
  const data = dataJson as Project[];
  const { t, language } = useLanguage();
  return (
    <div className="w-full h-auto 2xl:scale-115 2xl:mt-30 mb-30 overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <GridPattern />

        <div
          id="container-projects"
          className="max-w-360 flex flex-col px-4 mx-auto"
        >
          <div className=" md:px-20 text-center flex flex-col gap-y-10">
            <h2 className="mt-20 font-bold text-[#7BCD00] mb-10 mx-auto text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              <TextAnimate>{t("Últimos Projetos", "Latest Projects")}</TextAnimate>
            </h2>
            <p className="text-2xl md:mx-40 -mt-12  text-[#7BCD00] ">
              <TextAnimate>
                {t(
                  "Alguns dos projetos desenvolvidos pelo Greenleaf Studio, explorando diferentes áreas e desafios do desenvolvimento front-end.",
                  "Some of the projects developed by Greenleaf Studio, exploring different areas and challenges of front-end development."
                )}
              </TextAnimate>
            </p>
          </div>
          {/* Cards */}
          <div
            id="card-sction"
            className="z-10 grid grid-cols-1 md:grid-cols-3 place-items-center mt-20 mx-auto gap-7 lg:gap-10 mb-15 2xl:scale-110 2xl:ml-25"
          >
            {data.map((item) => (
              <Link key={item.id} to={item.route} className="group block">
                <div
                  id="card"
                  key={item.id}
                  className="group shadow-2xl rounded-t-lg overflow-hidden active:scale-80 transition-all duration-700 bg-cover bg-center h-92.5 w-95"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="h-[56%]">
                    <img
                      id="imagem-card"
                      className="bg-cover bg-center rounded-t-4xl transition-all duration-700 hover:scale-115 hover:cursor-pointer"
                      src={item.image}
                    />
                  </div>
                  <div className="bg-zinc-900/65 backdrop-blur-xl border border-white/10 h-43 px-6">
                    <div className="mt-3 flex gap-2" id="badges">
                      <div className={item.variant}>
                        <span className="flex items-center justify-center text-white/90">
                          {item.type[language]}
                        </span>
                      </div>
                      <div className="bg-zinc-900/30 w-34 h-6 rounded-full">
                        <div className="flex items-center justify-center px-2 gap-1 opacity-50">
                          <p className="text-white">5.0</p>

                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                      </div>
                    </div>
                    <h1 className="text-white/90 font-medium text-2xl mt-3 hover:text-[#7BCD00] hover:cursor-pointer">
                      {item.title[language]}
                    </h1>
                    <p className="text-white/70 text-sm mt-2">
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Termina aqui */}
      </div>
    </div>
  );
}
