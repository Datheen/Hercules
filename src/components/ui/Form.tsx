import { AtSignIcon } from "./AtSignIcon";
import { Button } from "./stateful-button";
import { UserIcon } from "./user";

export function Form() {
  return (
    <div className="flex-col py-12">
      <div
        id="title"
        className="text-white md:w-120 gap-y-5 flex flex-col pt-10 md:pt-0"
      >
        <h2 className="text-4xl px-1 font-semibold bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent ">
          Compartilhe usa ideia!
        </h2>
        <p className="text-lg px-1 text-white/70">
          Deixe sua mensagem que em breve entraremos em contato com você.
        </p>
      </div>

      <div
        id="input"
        className="relative flex flex-col justify-center items-center"
      >
        <UserIcon size={22} className="absolute top-1/2 left-3 text-zinc-600" />
        <input
          type="text"
          placeholder="Nome"
          className="bg-white/80 w-full h-10 mx-6 px-10 mt-5 rounded-full"
        />
      </div>

      <div
        id="input"
        className="relative flex flex-col justify-center items-center"
      >
        <AtSignIcon
          size={22}
          className="absolute top-1/2 left-3 text-zinc-600"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="bg-white/80 w-full h-10 mx-6 px-10 mt-5 rounded-full"
        />
      </div>

      <div
        id="input"
        className="relative flex flex-col justify-center items-center"
      >
        <textarea
          id="msg"
          maxLength={400}
          placeholder="Digite sua mensagem aqui..."
          rows={3}
          className="w-full mt-5 px-5 py-3 bg-white/80 rounded-3xl"
        ></textarea>
      </div>

      <div id="button" className="mt-3 ml-1">
        <Button
          id="submit"
          className="bg-linear-to-r from-lime-400 to-green-700"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}
