import dev from "@/assets/img/sobre/dev.webp";
import MatrixText from "@/components/kokonutui/matrix-text";
import cetam from "@/assets/img/sobre/CETAM.webp";
import wyden from "@/assets/img/sobre/marthafalcao.webp";
import senai from "@/assets/img/sobre/devstart.webp";

export function Sobre() {
  return (
    <div
      id="container"
      className="max-w-360 h-max px-2 md:px-30 flex flex-col justify-center items-center mx-auto mb-10 mt-25"
    >
      <div className="md:ml-18 flex flex-col md:flex-row items-center text-white font-medium mb-10">
        <img className="w-70 rounded-full" src={dev} />
        <div className="flex-col text-center items-center justify-center">
          <MatrixText className="w-max pl-6 md:pl-20" />
          <p className="text-start md:px-20 px-7 font-light">
            Sou estudante de{" "}
            <span className="text-lime-400 font-medium">
              Engenharia de Software
            </span>{" "}
            e desenvolvedor focado em aplicações web modernas. Tenho experiência
            com React, Angular e Vue.js, trabalhando com componentes
            reutilizáveis, reatividade e boas práticas. Utilizo Tailwind CSS
            para criar interfaces responsivas, organizadas e performáticas.
            Tenho experiência com Angular, utilizando componentes standalone,
            serviços e RxJS.
          </p>

          <p className="text-start md:px-20 px-7 mt-3 font-light">
            Já implementei buscas, filtros e rotas e consumação de API REST. Sou
            UX/UI Designer também implemento modelos no Figma antes de virar
            código. Trabalho com hooks, componentes reutilizáveis e bibliotecas
            como Shadcn, criando aplicações performáticas e responsivas.
          </p>
        </div>
      </div>
      <div className="h-px w-full bg-lime-400"></div>
      <div className="text-white/90 w-full mt-10 grid md:flex justify-center gap-10 md:gap-0 px-10">
        <div className="grid grid-cols-2 gap-10 md:">
          <img className="md:w-70 w-40" src={cetam} />
          <img className="md:w-27 md:h-17 md:mt-6 w-30" src={wyden} />
        </div>
        <img className="md:w-125 md:h-14 md:mt-6" src={senai} />
      </div>

      <div className="h-max mt-20 text-white font-light px-7 flex flex-col gap-5">
        <h1 className="bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent text-[1.4rem] md:text-4xl font-medium">
          Minha jornada com a tecnologia
        </h1>
        <p>
          Minha trajetória profissional começou como assistente administrativo,
          onde desenvolvi organização, responsabilidade e visão de processos.
          Foi nesse período que tive contato mais próximo com sistemas e
          ferramentas digitais, despertando um interesse cada vez maior pela
          tecnologia e pelo funcionamento dos softwares no dia a dia.
        </p>

        <p>
          Buscando transformar esse interesse em conhecimento, realizei cursos
          de Front-end e Informática Avançada pelo CETAM, além de Lógica de
          Programação no SENAI, onde fortalecei meu raciocínio lógico e minha
          base técnica. Esses estudos marcaram minha transição definitiva para a
          área de desenvolvimento.
        </p>

        <p>
          Atualmente, curso Engenharia de Software e atuo no desenvolvimento de
          aplicações web modernas, utilizando tecnologias como React, Angular e
          Vue.js, além de Tailwind CSS. Sigo em constante aprendizado, unindo
          experiência prática, base acadêmica e paixão por tecnologia para criar
          soluções eficientes e bem estruturadas.
        </p>
      </div>
    </div>
  );
}
