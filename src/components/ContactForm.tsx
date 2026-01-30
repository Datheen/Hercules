import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"

export function ContactForm() {
  return (
     <div className="w-full bg-[#0b1b25] h-auto">
    <div id="container" className="max-w-360 px-4 pb-10">
      <Terminal>
      <TypingAnimation className="text-white">&gt; bunx install ckristian@front-end init</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Planejar estrutura geral
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Criar repositório Git
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Iniciar projeto base
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Configurar roteamento páginas
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Construir layout responsivo
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Estilizar com CSS
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Conectar API backend
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Testar em dispositivos
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Fazer deploy produção
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- dist/index.html</span>
      </AnimatedSpan>

      <TypingAnimation className="text-white/80">
        Sucesso! Inicialização do projeto completa.
      </TypingAnimation>

      <TypingAnimation className="text-white/80">
        You may now add components.
      </TypingAnimation>
    </Terminal>
    </div>
    

    </div>
  )
}
