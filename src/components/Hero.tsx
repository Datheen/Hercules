import ckris from "../assets/img/hero/ckris.webp";
import { ButtonAnim } from "./ui/ButtonAnim";
import angular from "../assets/img/hero/angular.webp";
import react from "../assets/img/hero/React.webp";
import next from "../assets/img/hero/Nextjs.webp";
import tailwind from "../assets/img/hero/tailwind.webp";

export function Hero() {
  return (
    <div
      id="hero-background"
      className="bg-[url('/background.webp')] h-screen w-full bg-cover bg-center mx-auto"
    >
      <div id="hero-container" className="h-screen max-w-360 mx-auto px-4">
        <div
          id="hero-box"
          className="flex flex-col md:justify-between md:mx-34 md:flex-row justify-center text-center md:text-start items-center pt-30 md:pt-34"
        >
          <div id="title" className="flex flex-col gap-2 -mt-10">
            <p className="md:text-2xl text-2xl text-white/70">Olá, eu sou</p>
            <h1 className="md:text-7xl text-5xl bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent font-bold">
              Ckristian Felipe
            </h1>
            <h2 className="md:text-4xl text-3xl text-white/80">
              Desenvolvedor Front-end
            </h2>
            <div
              id="CTA"
              className="flex gap-5 items-center justify-center md:justify-start mt-6"
            >
              <ButtonAnim className="rounded-full bg-linear-to-r from-lime-400 to-green-700 h-12 text-white/80 font-semibold cursor-pointer opacity-80 hover:opacity-100 ">
                Contato
              </ButtonAnim>
              <ButtonAnim className="rounded-full bg-linear-to-r from-lime-400 to-green-700 h-12 text-white/80 font-semibold cursor-pointer opacity-80 hover:opacity-100 ">
                Ver mais
              </ButtonAnim>
            </div>
          </div>
          <div id="ckris" className="relative">
            <img className="w-[71px]  absolute right-20 top-2" src={angular} />
            <img className="w-[78px] absolute top-20" src={react} />
            <img className="w-[71px] absolute right-0 top-40" src={next} />
            <img className="w-[90px] absolute bottom-25" src={tailwind} />
            <img className="w-[390px] px-2" src={ckris} />
          </div>
        </div>
      </div>
    </div>
  );
}
