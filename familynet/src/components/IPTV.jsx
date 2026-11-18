import { Tv, Box, Tablet, Smartphone, Film, Clapperboard, Trophy, Baby, Compass } from 'lucide-react'
import iptv from '../assets/iptv.webp'
import { Reveal, WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

const DEVICES = [[Tv, 'Smart TV'], [Box, 'TV Box'], [Tablet, 'Tablet'], [Smartphone, 'Celular']]
const KINDS = [[Film, 'Filmes'], [Clapperboard, 'Séries e novelas'], [Trophy, 'Esportes'], [Baby, 'Infantil'], [Compass, 'Documentários']]

export default function IPTV() {
  return (
    <section id="iptv" className="relative overflow-hidden bg-fn-black px-4 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-fn-neon/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <img src={iptv} alt="IPTV FamilyNet - a TV do futuro chegou" width="1000" height="630" loading="lazy" className="rounded-3xl border border-fn-neon/40 shadow-neonlg" />
        </Reveal>
        <Reveal delay={0.15}>
          <h2 className="section-title">Seu entretenimento em um só lugar!</h2>
          <p className="mt-4 text-lg text-white/75">Tenha uma experiência de entretenimento com filmes, séries, novelas, esportes, conteúdos infantis, documentários e muito mais.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {KINDS.map(([Icon, label]) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full border border-fn-neon/30 bg-fn-deep/60 px-4 py-2 text-sm"><Icon className="h-4 w-4 text-fn-neon" aria-hidden="true" />{label}</li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="glow-card p-5 text-center"><p className="text-xs uppercase text-white/60">Mais de</p><p className="font-display text-5xl font-extrabold text-fn-neon">2 mil</p><p className="text-sm">conteúdos</p></div>
            <div className="glow-card p-5 text-center"><p className="text-xs uppercase text-white/60">Por apenas</p><p className="font-display text-5xl font-extrabold text-fn-neon"><span className="text-xl">R$ </span>28,00</p><p className="text-sm">mensais</p></div>
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-fn-neon">Dispositivos compatíveis</p>
          <ul className="mt-3 grid grid-cols-4 gap-3">
            {DEVICES.map(([Icon, label]) => (
              <li key={label} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs sm:text-sm"><Icon className="h-6 w-6 text-fn-emerald" aria-hidden="true" />{label}</li>
            ))}
          </ul>
          <a href={whatsappLink(MESSAGES.iptv)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto"><WhatsAppIcon /> Quero saber mais sobre o IPTV</a>
        </Reveal>
      </div>
    </section>
  )
}
