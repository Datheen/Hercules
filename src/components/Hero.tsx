import { useEffect, useRef } from "react";
import gsap from "gsap";
import ckris from "@/assets/img/hero/ckris.webp";
import { ButtonAnim } from "@/components/ui/ButtonAnim";
import angular from "@/assets/img/hero/angular.webp";
import react from "@/assets/img/hero/React.webp";
import next from "@/assets/img/hero/Nextjs.webp";
import tailwind from "@/assets/img/hero/tailwind.webp";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (containerRef.current) {
      const elementos = containerRef.current.querySelectorAll('[id="animar"]');

      elementos.forEach((elemento, index) => {
        gsap.to(elemento, {
          y: -15,
          duration: 1.5 + index * 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }
  }, []);
  return (
    <div
      id="hero-background"
      className="bg-[url('/background.webp')] w-full bg-cover bg-center pb-40 mx-auto 2xl:scale-130 2xl:mt-30 2xl:mb-20 "
    >
      <div id="hero-container" className="h-auto max-w-360 mx-auto px-4">
        <div
          id="hero-box"
          className="flex flex-col md:justify-between md:mx-34 md:flex-row justify-center text-center md:text-start items-center pt-30 md:pt-34"
        >
          <div id="title" className="flex flex-col gap-2 md:-mt-10">
            <p className="md:text-2xl text-2xl text-white/70">{t("Olá, eu sou", "Hello, I'm")}</p>
            <h1 className="md:text-7xl text-5xl bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent font-bold">
              Ckristian Felipe
            </h1>
            <h2 className="md:text-4xl text-3xl text-white/80">
              {t("Desenvolvedor Front-end", "Front-end Developer")}
            </h2>
            <div
              id="CTA"
              className="flex gap-5 items-center justify-center md:justify-start mt-6"
            >
              <ButtonAnim
                onClick={() =>
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-full bg-linear-to-t from-green-700 to-lime-400 h-12 text-white/80 font-semibold cursor-pointer opacity-80 hover:opacity-100 "
              >
                {t("Contato", "Contact")}
              </ButtonAnim>
              <ButtonAnim
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="rounded-full bg-linear-to-b from-lime-400 to-green-700 h-12 text-white/80 font-semibold cursor-pointer opacity-80 hover:opacity-100 "
              >
                {t("Ver mais", "See more")}
              </ButtonAnim>
            </div>
          </div>
          <div id="ckris" className="relative md:mt-3 mt-26" ref={containerRef}>
            <img
              id="animar"
              className="w-17.75 absolute right-15 top-2"
              src={angular}
            />
            <img id="animar" className="w-19.5 absolute top-20" src={react} />
            <img
              id="animar"
              className="w-17.75 absolute right-0 top-40"
              src={next}
            />
            <img
              id="animar"
              className="w-22.5 absolute bottom-25"
              src={tailwind}
            />
            <img className="w-97.5 px-2" src={ckris} />
          </div>
        </div>
      </div>
    </div>
  );
}
