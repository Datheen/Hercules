import { AtSignIcon } from "./AtSignIcon";
import { Button } from "@/components/ui/StatefulButton";
import { UserIcon } from "@/components/ui/UserIcon";
import { useState } from "react";
import type { FormEvent } from "react";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvqkoab", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar email. Tente novamente.");
      }
    } catch {
      alert("Erro ao enviar email. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col py-12 md:py-0">
      <div className="text-white md:w-120 gap-y-5 flex flex-col pt-10 md:pt-0">
        <h2 className="text-4xl px-1 font-semibold bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
          Compartilhe sua ideia!
        </h2>
        <p className="text-lg px-1 text-white/70">
          Deixe sua mensagem que em breve entraremos em contato com você.
        </p>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <UserIcon size={22} className="absolute top-1/2 left-3 text-zinc-600" />
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          className="bg-white/80 w-full h-10 mx-6 px-10 mt-5 rounded-full"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <AtSignIcon
          size={22}
          className="absolute top-1/2 left-3 text-zinc-600"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="bg-white/80 w-full h-10 mx-6 px-10 mt-5 rounded-full"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <textarea
          id="msg"
          name="message"
          maxLength={400}
          placeholder="Digite sua mensagem aqui..."
          rows={3}
          required
          className="w-full mt-5 px-5 py-3 bg-white/80 rounded-3xl"
        />
      </div>
      <input type="text" name="_gotcha" className="hidden" />
      <div className="mt-3 ml-1">
        <Button
          id="submit"
          type="submit"
          disabled={isSubmitting}
          className="bg-linear-to-r from-lime-400 to-green-700"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </div>
    </form>
  );
}
