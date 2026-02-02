import { AtSignIcon } from "./AtSignIcon";
import { Button } from "@/components/ui/StatefulButton";
import { UserIcon } from "@/components/ui/UserIcon";
import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

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
        alert(t("Email enviado com sucesso!", "Email sent successfully!"));
        form.reset();
      } else {
        alert(t("Erro ao enviar email. Tente novamente.", "Error sending email. Try again."));
      }
    } catch {
      alert(t("Erro ao enviar email. Tente novamente.", "Error sending email. Try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col py-12 md:py-0">
      <div className="text-white md:w-120 gap-y-5 flex flex-col pt-10 md:pt-0">
        <h2 className="text-4xl px-1 font-semibold bg-linear-to-r from-lime-400 to-green-700 bg-clip-text text-transparent">
          {t("Compartilhe sua ideia!", "Share your idea!")}
        </h2>
        <p className="text-lg px-1 text-white/70">
          {t(
            "Deixe sua mensagem que em breve entraremos em contato com você.",
            "Leave your message and we will get in touch with you soon."
          )}
        </p>
      </div>

      <div className="relative flex flex-col justify-center items-center">
        <UserIcon size={22} className="absolute top-1/2 left-3 text-zinc-600" />
        <input
          type="text"
          name="name"
          placeholder={t("Nome", "Name")}
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
          placeholder={t("Digite sua mensagem aqui...", "Type your message here...")}
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
          {isSubmitting ? t("Enviando...", "Sending...") : t("Enviar", "Send")}
        </Button>
      </div>
    </form>
  );
}
