import data from "@/data/data.json";
import { Star } from "./ui/Star";

export function Projects() {
  return (
    <div className="w-full bg-[#0b1b25] h-auto">
      <div
        id="container-projects"
        className="max-w-360 flex flex-col px-4 mx-auto"
      >
        <div className=" md:px-20 text-center flex flex-col gap-y-10">
          <h2 className="mt-20 font-bold text-[#7BCD00] mb-10 mx-auto text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Últimos Projetos
          </h2>
          <p className="text-2xl text-[#7BCD00] ">
            Alguns dos projetos desenvolvidos pelo Greenleaf Studio, explorando
            diferentes áreas e desafios do desenvolvimento front-end.
          </p>
        </div>
        {/* Cards */}
        <div
          id="card-sction"
          className="grid mt-20 md:flex mx-auto gap-7 lg:gap-10 md:w-[90%]"
        >
          {data.map((item) => (
            <div
              id="card"
              key={item.id}
              className="group shadow-2xl overflow-hidden border border-[#7BCD00]/80 active:scale-80 transition-all duration-700 bg-cover bg-center h-92.5 w-95 rounded-4xl" style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="h-[56%] rounded-t-4xl">
                <img
                  id="imagem-card"
                  className="bg-cover bg-center rounded-t-4xl transition-all duration-700 hover:scale-115 hover:cursor-pointer"
                  src={item.image}
                />
              </div>
              <div className="bg-zinc-900/65 backdrop-blur-xl border border-white/10 h-43 rounded-b-4xl px-6">
                <div className="mt-3 flex gap-2" id="badges">
                  <div className={item.variant}>
                    <span className="flex items-center justify-center text-white/90">
                      {item.type}
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
                  {item.title}
                </h1>
                <p className="text-white/70 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Termina aqui */}
      </div>
    </div>
  );
}
