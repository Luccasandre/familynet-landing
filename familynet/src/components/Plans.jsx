import { Wifi, Star, ArrowRight } from 'lucide-react'
import { Reveal, WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export const PLANS = [
  { id: 'p150', name: 'Plano Promocional', mega: 150, price: '55,00', promo: true },
  { id: 'p200', name: 'Plano 200 MEGA', mega: 200, price: '60,00' },
  { id: 'p300', name: 'Plano 300 MEGA', mega: 300, price: '70,00' },
  { id: 'p400', name: 'Plano 400 MEGA', mega: 400, price: '80,00' },
]

function PlanCard({ plan, index }) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className={`glow-card flex h-full flex-col items-center p-6 text-center ${plan.promo ? 'border-fn-neon bg-gradient-to-b from-fn-emerald/25 to-fn-deep/70 shadow-neon sm:scale-[1.03]' : ''}`}>
        {plan.promo && (
          <span className="absolute -top-3 inline-flex items-center gap-1 rounded-full bg-fn-neon px-4 py-1 text-xs font-extrabold uppercase text-fn-black"><Star className="h-3.5 w-3.5" /> Promoção</span>
        )}
        <Wifi className="h-7 w-7 text-fn-neon" aria-hidden="true" />
        <h3 className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">{plan.name}</h3>
        <p className="mt-2 font-display text-7xl font-extrabold leading-none">{plan.mega}<span className="ml-1 text-2xl text-fn-neon">MEGA</span></p>
        <p className="mt-5 text-sm text-white/70">por apenas</p>
        <p className="font-display text-5xl font-bold text-fn-neon"><span className="text-xl">R$ </span>{plan.price}</p>
        <p className="text-sm text-white/70">mensais</p>
        <a href={whatsappLink(MESSAGES[plan.id])} target="_blank" rel="noopener noreferrer" aria-label={`Contratar ${plan.name} pelo WhatsApp`} className="btn-primary mt-6 w-full"><WhatsAppIcon /> Contratar agora</a>
      </article>
    </Reveal>
  )
}

export default function Plans() {
  return (
    <section id="planos" className="relative bg-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Escolha a internet ideal para sua família.</h2>
          <p className="mt-4 text-lg text-white/75">Mais velocidade para acompanhar tudo o que faz parte do seu dia.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p, i) => <PlanCard key={p.id} plan={p} index={i} />)}
        </div>
        <Reveal className="mt-12 text-center">
          <p className="text-lg font-semibold">Gostou de um plano? Faça seu cadastro!</p>
          <a href="#cadastro" className="btn-ghost mt-4 w-full sm:w-auto">Quero me cadastrar <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </Reveal>
      </div>
    </section>
  )
}
