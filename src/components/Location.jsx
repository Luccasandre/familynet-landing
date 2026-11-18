import { MapPin, Navigation, Instagram } from 'lucide-react'
import { Reveal, WhatsAppIcon } from './ui'
import storefront from '../assets/familynet-location.webp'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, MESSAGES, WHATSAPP_DISPLAY, whatsappLink } from '../lib/whatsapp'

// Pesquisa pelo endereço (sem coordenadas inventadas).
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Jos%C3%A9+Cordeiro+455'

export default function Location() {
  return (
    <section id="localizacao" className="relative bg-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Venha conhecer a FamilyNet!</h2>
          <p className="mt-4 text-lg text-white/75">Estamos prontos para atender você! Visite nossa loja e conheça nossas soluções em internet fibra óptica.</p>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-fn-neon/15 blur-3xl" aria-hidden="true" />
              <img src={storefront} alt="Fachada da loja FamilyNet, na Rua Doutor José Cordeiro, 455" width="1024" height="1024" loading="lazy" className="relative w-full rounded-2xl border border-fn-neon/40 shadow-neon" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glow-card hover:!translate-y-0 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-fn-neon/10 text-fn-neon"><MapPin className="h-6 w-6" aria-hidden="true" /></span>
                <div>
                  <p className="text-sm text-white/60">Endereço</p>
                  <p className="font-display text-3xl font-bold leading-tight sm:text-4xl">Rua Doutor José Cordeiro, nº 455</p>
                </div>
              </div>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-4"><dt className="text-xs uppercase text-white/60">WhatsApp</dt><dd className="text-lg font-bold">{WHATSAPP_DISPLAY}</dd></div>
                <div className="rounded-xl bg-white/5 p-4"><dt className="text-xs uppercase text-white/60">Instagram</dt><dd className="text-lg font-bold">{INSTAGRAM_HANDLE}</dd></div>
              </dl>
              <div className="mt-6 flex flex-col gap-3">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"><Navigation className="h-5 w-5" aria-hidden="true" /> Como chegar</a>
                <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost"><WhatsAppIcon /> Fale conosco</a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-5 w-5" aria-hidden="true" /> Seguir no Instagram</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
