import { FiberBackground, Reveal, WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export default function Conversion() {
  return (
    <section className="relative isolate overflow-hidden bg-fn-deep px-4 py-24 text-center">
      <FiberBackground />
      <Reveal className="relative mx-auto max-w-3xl">
        <h2 className="section-title">Chegou a hora de ter uma internet melhor!</h2>
        <p className="mt-5 text-lg text-white/80">Não perca tempo com uma conexão que não acompanha seu ritmo. Venha para a FamilyNet!</p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsAppIcon /> Contrate agora pelo WhatsApp</a>
          <a href="#cadastro" className="btn-ghost">Fazer meu cadastro</a>
        </div>
      </Reveal>
    </section>
  )
}
