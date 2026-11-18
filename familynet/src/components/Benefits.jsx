import { Network, Wifi, Gauge, Activity, Headset, MessageCircle, Timer } from 'lucide-react'
import { Reveal } from './ui'

const ITEMS = [
  [Network, 'Internet 100% fibra óptica', 'Tecnologia de ponta chegando até a sua casa.'],
  [Wifi, 'Wi-Fi grátis', 'Conexão sem fio para toda a família.'],
  [Gauge, 'Alta velocidade', 'Planos de 150 a 400 MEGA para o seu dia a dia.'],
  [Activity, 'Estabilidade de conexão', 'Conexão firme para trabalhar, estudar e se divertir.'],
  [Headset, 'Suporte técnico', 'Equipe pronta para ajudar quando você precisar.'],
  [MessageCircle, 'Atendimento ao cliente', 'Fale direto com a gente pelo WhatsApp.'],
  [Timer, 'Instalação rápida', 'Praticidade desde o primeiro contato.'],
]

export default function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-gradient-to-b from-fn-black via-fn-dark to-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Mais que internet, uma conexão com <span className="text-fn-neon">você.</span></h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(([Icon, title, text], i) => (
            <li key={title} className={i === 6 ? 'lg:col-start-2' : ''}>
              <Reveal delay={i * 0.07} className="h-full">
                <div className="glow-card h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-fn-neon/10 text-fn-neon shadow-neon"><Icon className="h-6 w-6" aria-hidden="true" /></span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
