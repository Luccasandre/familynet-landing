import { useState } from 'react'
import { Building2, Gauge, Network, Briefcase, Wifi, Star, ArrowRight } from 'lucide-react'
import { Reveal, WhatsAppIcon } from './ui'
import banner from '../assets/business-banner.webp'
import { IP_FIXO_PRICE, MESSAGES, buildBusinessMessage, whatsappLink } from '../lib/whatsapp'

// Planos empresariais (categoria independente dos residenciais).
export const BUSINESS_PLANS = [
  { id: 'b500', mega: 500, price: '90,00' },
  { id: 'b600', mega: 600, price: '100,00', highlight: true },
]

const BENEFITS = [
  [Wifi, 'Wi-Fi grátis'],
  [Gauge, 'Alta velocidade e estabilidade'],
  [Network, 'Internet 100% fibra óptica'],
  [Building2, 'Ideal para empresas'],
  [Briefcase, 'Conectividade para operações comerciais e profissionais'],
]

export default function BusinessPlans() {
  const [ipFixo, setIpFixo] = useState(false)

  return (
    <section id="empresarial" className="relative isolate overflow-hidden bg-gradient-to-b from-fn-black via-fn-dark to-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-fn-neon/40 px-4 py-1.5 text-sm font-semibold text-fn-neon">
            <Building2 className="h-4 w-4" aria-hidden="true" /> Planos empresariais
          </span>
          <h2 className="section-title mt-5">Internet ultra-rápida para sua empresa!</h2>
          <p className="mt-4 text-lg text-white/75">Mais velocidade, estabilidade e desempenho para impulsionar os resultados do seu negócio.</p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-fn-neon/15 blur-3xl" aria-hidden="true" />
              <img src={banner} alt="Banner dos planos empresariais FamilyNet: 500 MEGA por R$ 90,00 e 600 MEGA por R$ 100,00" width="1024" height="1100" loading="lazy" className="relative w-full rounded-2xl border border-fn-neon/40 shadow-neon" />
            </div>
          </Reveal>

          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {BUSINESS_PLANS.map((plan, i) => (
                <Reveal key={plan.id} delay={i * 0.1} className="h-full">
                  <article className={`glow-card flex h-full flex-col items-center !bg-fn-black p-6 text-center ${plan.highlight ? '!border-fn-neon shadow-neon' : ''}`}>
                    {plan.highlight && (
                      <span className="absolute -top-3 inline-flex items-center gap-1 rounded-full bg-fn-neon px-4 py-1 text-xs font-extrabold uppercase text-fn-black"><Star className="h-3.5 w-3.5" aria-hidden="true" /> Mais veloz</span>
                    )}
                    <Building2 className="h-7 w-7 text-fn-neon" aria-hidden="true" />
                    <h3 className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">Plano empresarial</h3>
                    <p className="mt-2 font-display text-7xl font-extrabold leading-none">{plan.mega}<span className="ml-1 text-2xl text-fn-neon">MEGA</span></p>
                    <p className="mt-5 font-display text-5xl font-bold text-fn-neon"><span className="text-xl">R$ </span>{plan.price}</p>
                    <p className="text-sm text-white/70">mensais</p>
                    <a href={whatsappLink(buildBusinessMessage(plan, ipFixo))} target="_blank" rel="noopener noreferrer" aria-label={`Contratar plano empresarial ${plan.mega} MEGA pelo WhatsApp`} className="btn-primary mt-6 w-full !px-4 !text-xs sm:!text-sm">
                      <WhatsAppIcon /> Contratar plano empresarial
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6">
              <div className="rounded-2xl border border-fn-neon/40 bg-gradient-to-r from-fn-emerald/20 to-fn-black p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70">IP fixo adicional</p>
                    <p className="font-display text-4xl font-bold text-fn-neon"><span className="text-lg">R$ </span>{IP_FIXO_PRICE}</p>
                  </div>
                  <Network className="h-9 w-9 text-fn-neon" aria-hidden="true" />
                </div>
                <label className="mt-4 flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                  <input type="checkbox" checked={ipFixo} onChange={(e) => setIpFixo(e.target.checked)} className="h-6 w-6 shrink-0 cursor-pointer accent-[#39ff14]" />
                  <span className="text-sm text-white/90">Quero incluir o IP fixo na mensagem ao contratar um plano</span>
                </label>
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {BENEFITS.map(([Icon, text], i) => (
                  <li key={text} className={`flex items-start gap-3 rounded-xl border border-fn-neon/20 bg-fn-deep/40 p-4 ${i === BENEFITS.length - 1 ? 'sm:col-span-2' : ''}`}>
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-fn-neon" aria-hidden="true" />
                    <span className="text-sm font-medium text-white/90">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-lg font-semibold">Sua empresa merece uma conexão de alto desempenho. Solicite uma proposta!</p>
          <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <a href={whatsappLink(MESSAGES.businessProposal)} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsAppIcon /> Solicitar proposta</a>
            <a href="#cadastro" className="btn-ghost">Fazer cadastro empresarial <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
