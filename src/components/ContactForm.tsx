import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Form } from "./ui/Form";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();

  return (
    <div
      id="contato"
      className="w-full bg-[#0b1b25] h-auto md:pt-0 md:mb-20 2xl:scale-125 2xl:my-30 2xl:pt-30 overflow-hidden"
    >
      <div
        id="container"
        className="max-w-360 px-4 pb-10 flex flex-col md:flex-row justify-center item mx-auto"
      >
        <div id="terminal" className="md:w-[50%]">
          <Terminal>
            <TypingAnimation className="text-white">
              &gt; bunx install ckristian@front-end init
            </TypingAnimation>

            <AnimatedSpan className="text-green-500">
              {t("✔ Planejar estrutura geral", "✔ Plan overall structure")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Criar repositório Git", "✔ Create Git repository")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Iniciar projeto base", "✔ Initialize base project")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Configurar roteamento páginas", "✔ Configure page routing")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Construir layout responsivo", "✔ Build responsive layout")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Estilizar com CSS", "✔ Style with CSS")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Conectar API backend", "✔ Connect backend API")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Testar em dispositivos", "✔ Test on devices")}
            </AnimatedSpan>

            <AnimatedSpan className="text-green-500">
              {t("✔ Fazer deploy produção", "✔ Deploy to production")}
            </AnimatedSpan>

            <AnimatedSpan className="text-blue-500">
              <span>ℹ Updated 1 file:</span>
              <span className="pl-2">- dist/index.html</span>
            </AnimatedSpan>

            <TypingAnimation className="text-white/80">
              {t("Sucesso! Inicialização do projeto completa.", "Success! Project initialization complete.")}
            </TypingAnimation>
          </Terminal>
        </div>

        <div id="form">
          <Form />
        </div>
      </div>
    </div>
  );
}
