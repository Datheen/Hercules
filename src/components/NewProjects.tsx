import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import dataJson from "@/data/data.json"
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "./ui/Star";


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


export function Camarada() {
  const data = dataJson as Project[];
  const { language } = useLanguage();
    return (
    <div id="container" className="max-w-360 grid md:gap-30 px-2 mx-auto md:grid-cols-3">
        {data.map((item) => (
        <Link key={item.id} to={item.route} ><CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 bg-zinc-700 dark:border-white/20 border-black/10 w-auto sm:w-120 h-125 rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-lime-400"
        >
          {item.title[language]}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          {item.description[language]}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={item.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
           <div className={item.variant}><span className="font-medium text-white/90">
                          {item.type[language]}
                        </span></div> 
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-lime-400 dark:bg-white text-zinc-700/90  text-xs hover:cursor-pointer font-bold"
          >
            Ver mais
          </CardItem>
        </div>
      </CardBody>
    </CardContainer></Link>
    ))}
    </div>
  );
}
