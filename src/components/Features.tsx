import { GridPattern } from "@/components/ui/grid-pattern";
import { Code2 as Code, Paintbrush, Rocket } from "lucide-react";
import { Marquee } from "./ui/marquee";
import typescript from "@/assets/img/features/typescript.webp";
import nodejs from "@/assets/img/features/nodejs.webp";
import next from "@/assets/img/features/nextwide.webp";
import angularwide from "@/assets/img/features/angularwide.webp";
import tailwindlogo from "@/assets/img/features/tailwindcsslogo.webp";
import { TextAnimate } from "@/components/ui/TextAnimate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Clean Code (Código Limpo)",
    description:
      "Tenho uma mentalidade focada em código limpo, legível e sustentável. Busco soluções simples, bem estruturadas e fáceis de manter, sempre pensando na evolução do projeto, na colaboração em equipe e na qualidade a longo prazo.",
    icon: Code,
  },
  {
    title: "Front-end UX/UI",
    description:
      "Atuo com foco em excelência no front-end, criando interfaces modernas, consistentes e bem refinadas. Tenho atenção aos detalhes visuais, à experiência do usuário e à construção de componentes reutilizáveis que unem estética e funcionalidade.",
    icon: Paintbrush,
  },

  {
    title: "Performance",
    description:
      "Desenvolvo aplicações orientadas à performance, priorizando carregamento rápido, responsividade e otimizações reais. Trabalho com boas práticas para reduzir custo de renderização, otimizar assets e garantir uma experiência fluida em qualquer dispositivo.",
    icon: Rocket,
  },
];

function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = cardsRef.current?.querySelectorAll(".animated-box");

    if (cards) {
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <div className="w-full">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex items-center gap-20 bg-black px-6 py-4">
          <img src={typescript} className="w-40 pb-2 ml-11" />
          <img src={next} className="w-40" />
          <img src={angularwide} className="w-40" />
          <img src={nodejs} className="w-40 pb-3" />
          <img src={tailwindlogo} className="w-60 " />
        </div>
      </Marquee>

      <section
        id="features"
        className="container grid gap-6 py-16 md:gap-8 mx-auto"
      >
        <h2 className="font-bold text-[#7BCD00] mb-10 mx-auto text-center text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          <TextAnimate>Competências</TextAnimate>
        </h2>

        <div
          ref={cardsRef}
          className=" grid justify-center gap-4 sm:grid-cols-2 md:max-w-360 px-6 md:px-13 md:grid-cols-3 mx-auto"
        >
          {features.map(({ title, description, icon: Icon }, i) => (
            <div
              key={i}
              className="animated-box relative overflow-hidden rounded-lg border border-[#7BCD00] text-[#7BCD00] p-2"
            >
              <div className="flex min-h-[180px] flex-col justify-start rounded-md p-6">
                <Icon className="mb-3 h-8 w-8" />
                <div className="space-y-2">
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
