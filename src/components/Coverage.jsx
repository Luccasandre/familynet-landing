import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Reveal, WhatsAppIcon } from './ui'
import { AREAS } from '../lib/areas'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export default function Coverage() {
  return (
    <section id="areas" className="relative bg-fn-black px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Onde a FamilyNet está presente?</h2>
          <p className="mt-4 text-lg text-white/75">
            Levamos internet de qualidade para diversos bairros e localidades. Confira se sua região já conta com a cobertura da FamilyNet.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <motion.li
              key={area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: 'easeOut' }}
              className="flex min-h-[64px] items-center gap-3 rounded-xl border border-fn-neon/20 bg-fn-deep/50 px-4 py-3 transition duration-300 hover:border-fn-neon/70 hover:shadow-neon"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-fn-neon/10 text-fn-neon">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold leading-snug">{area}</span>
            </motion.li>
          ))}
        </ul>

        <Reveal className="relative mt-12 overflow-hidden rounded-2xl border border-fn-neon/50 bg-gradient-to-br from-fn-emerald/25 via-fn-deep/80 to-fn-black p-6 text-center shadow-neon sm:p-10">
          <h3 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
            Seu bairro está na lista?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Atendemos diversas regiões. Consulte nossa equipe! Entre em contato e consulte a disponibilidade para instalação.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <a href={whatsappLink(MESSAGES.coverage)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon /> Consultar cobertura pelo WhatsApp
            </a>
            <a href="#cadastro" className="btn-ghost">Fazer meu cadastro <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
