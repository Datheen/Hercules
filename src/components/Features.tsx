import { Code2 as Code, Paintbrush, Rocket } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
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
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const auroraStyles = `
  @keyframes aurora {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  #aurora {
    background: linear-gradient(
      90deg,
      #7BCD00,
      #4ade80,
      #22d3ee,
      #3b82f6,
      #06b6d4,
      #10b981,
      #7BCD00
    );
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: aurora 6s ease infinite;
  }

  .aurora-icon {
    color: #7BCD00;
    filter: drop-shadow(0 0 8px #7BCD00);
    animation: auroraIcon 6s ease infinite;
  }

  @keyframes auroraIcon {
    0% {
      color: #7BCD00;
      filter: drop-shadow(0 0 8px #7BCD00);
    }
    16.67% {
      color: #4ade80;
      filter: drop-shadow(0 0 8px #4ade80);
    }
    33.33% {
      color: #22d3ee;
      filter: drop-shadow(0 0 8px #22d3ee);
    }
    50% {
      color: #3b82f6;
      filter: drop-shadow(0 0 8px #3b82f6);
    }
    66.67% {
      color: #06b6d4;
      filter: drop-shadow(0 0 8px #06b6d4);
    }
    83.33% {
      color: #10b981;
      filter: drop-shadow(0 0 8px #10b981);
    }
    100% {
      color: #7BCD00;
      filter: drop-shadow(0 0 8px #7BCD00);
    }
  }
`;

function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const features = [
    {
      title: t("Clean Code (Código Limpo)", "Clean Code"),
      description: t(
        "Tenho uma mentalidade focada em código limpo, legível e sustentável. Busco soluções simples, bem estruturadas e fáceis de manter, sempre pensando na evolução do projeto, na colaboração em equipe e na qualidade a longo prazo.",
        "I have a mindset focused on clean, readable and sustainable code. I seek simple, well-structured and easy-to-maintain solutions, always thinking about project evolution, team collaboration and long-term quality."
      ),
      icon: Code,
    },
    {
      title: t("Front-end UX/UI", "Front-end UX/UI"),
      description: t(
        "Atuo com foco em excelência no front-end, criando interfaces modernas, consistentes e bem refinadas. Tenho atenção aos detalhes visuais, à experiência do usuário e à construção de componentes reutilizáveis que unem estética e funcionalidade.",
        "I work with a focus on front-end excellence, creating modern, consistent and well-refined interfaces. I pay attention to visual details, user experience and building reusable components that combine aesthetics and functionality."
      ),
      icon: Paintbrush,
    },

    {
      title: t("Performance", "Performance"),
      description: t(
        "Desenvolvo aplicações orientadas à performance, priorizando carregamento rápido, responsividade e otimizações reais. Trabalho com boas práticas para reduzir custo de renderização, otimizar assets e garantir uma experiência fluida em qualquer dispositivo.",
        "I develop performance-oriented applications, prioritizing fast loading, responsiveness and real optimizations. I work with best practices to reduce rendering costs, optimize assets and ensure a smooth experience on any device."
      ),
      icon: Rocket,
    },
  ];

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
    <div className="w-full 2xl:scale-116 overflow-hidden">
      <style>{auroraStyles}</style>
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
          <TextAnimate>{t("Competências", "Skills")}</TextAnimate>
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
              <div className="flex min-h-45 flex-col justify-start rounded-md p-6">
                <Icon className="mb-3 h-8 w-8 aurora-icon" />
                <div className="space-y-2">
                  <h3 id="aurora" className="font-bold">{title}</h3>
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
