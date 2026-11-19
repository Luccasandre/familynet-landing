import { FiberBackground, Reveal, WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export default function Conversion() {
  return (
    <section className="relative isolate overflow-hidden bg-fn-deep px-4 py-24 text-center">
      <FiberBackground />
      <Reveal className="relative mx-auto max-w-3xl">
        <h2 className="section-title">Venha para a FamilyNet!</h2>
        <p className="mt-5 text-lg text-white/80">Conecte sua casa ou empresa com uma internet de qualidade.</p>
        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <a href="#cadastro" className="btn-primary">Quero ser cliente</a>
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon /> Falar pelo WhatsApp</a>
        </div>
      </Reveal>
    </section>
  )
}
