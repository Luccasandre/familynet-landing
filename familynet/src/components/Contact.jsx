import { Instagram } from 'lucide-react'
import logo from '../assets/logo.webp'
import { Reveal, WhatsAppIcon } from './ui'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, MESSAGES, WHATSAPP_DISPLAY, whatsappLink } from '../lib/whatsapp'

export default function Contact() {
  return (
    <section id="contato" className="bg-fn-black px-4 py-20 sm:py-28">
      <Reveal className="glow-card mx-auto max-w-3xl p-8 text-center sm:p-12">
        <img src={logo} alt="FamilyNet" width="112" height="112" loading="lazy" className="mx-auto h-28 w-28 rounded-full shadow-neonlg" />
        <h2 className="section-title mt-6 !text-4xl sm:!text-5xl">Fale com a FamilyNet</h2>
        <p className="mt-2 text-white/70">FamilyNet — O provedor da sua família.</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4"><dt className="text-xs uppercase text-white/60">WhatsApp</dt><dd className="text-lg font-bold">{WHATSAPP_DISPLAY}</dd></div>
          <div className="rounded-xl bg-white/5 p-4"><dt className="text-xs uppercase text-white/60">Instagram</dt><dd className="text-lg font-bold">{INSTAGRAM_HANDLE}</dd></div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsAppIcon /> Chamar no WhatsApp</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-5 w-5" /> Seguir no Instagram</a>
        </div>
      </Reveal>
    </section>
  )
}
