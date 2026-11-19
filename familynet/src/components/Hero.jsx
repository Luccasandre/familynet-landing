import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import logo from '../assets/logo.webp'
import photo from '../assets/hero-photo.webp'
import { FiberBackground, WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-gradient-to-b from-fn-dark via-fn-deep to-fn-black pt-24 pb-16 sm:pt-32">
      <FiberBackground />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.img src={logo} alt="FamilyNet - O provedor da sua família" width="120" height="120" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mx-auto h-28 w-28 rounded-full shadow-neonlg lg:mx-0" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 font-display text-[2.6rem] font-extrabold uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            A internet que conecta sua família <span className="bg-gradient-to-r from-fn-neon to-fn-emerald bg-clip-text text-transparent">ao que realmente importa.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mx-auto mt-5 max-w-xl text-base text-white/80 sm:text-lg lg:mx-0">
            Navegue, trabalhe, estude, jogue e aproveite seus conteúdos favoritos com a qualidade da internet fibra óptica da FamilyNet.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#planos" className="btn-primary">Conheça nossos planos <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#areas" className="btn-ghost"><MapPin className="h-4 w-4" aria-hidden="true" /> Consulte nossa cobertura</a>
          </motion.div>
          <motion.a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-fn-neon underline-offset-4 hover:underline">
            <WhatsAppIcon className="h-4 w-4" /> Quero contratar pelo WhatsApp
          </motion.a>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-fn-neon/20 blur-3xl" aria-hidden="true" />
          <img src={photo} alt="Cliente sorrindo com roteador e celular conectado à internet FamilyNet" width="615" height="994" fetchpriority="high" className="float-slow relative rounded-[2rem] border border-fn-neon/40 object-cover shadow-neonlg" />
        </motion.div>
      </div>
    </section>
  )
}
