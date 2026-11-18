import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.webp'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

const LINKS = [
  ['Início', '#inicio'], ['Planos', '#planos'], ['Benefícios', '#beneficios'], ['IPTV', '#iptv'],
  ['Áreas atendidas', '#areas'], ['Cadastre-se', '#cadastro'], ['Contato', '#contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-fn-neon/15 bg-fn-black/85 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" aria-label="FamilyNet - ir para o início" onClick={() => setOpen(false)}>
          <img src={logo} alt="FamilyNet" width="44" height="44" className="h-11 w-11 rounded-full shadow-neon" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="whitespace-nowrap text-sm font-medium text-white/80 transition hover:text-fn-neon">{label}</a>
          ))}
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-primary !min-h-[40px] !px-5 !py-2">Fale conosco</a>
        </nav>
        <button className="grid h-11 w-11 place-items-center rounded-lg text-white lg:hidden" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="flex flex-col gap-1 px-4 pb-5 lg:hidden">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-fn-neon/10 hover:text-fn-neon">{label}</a>
          ))}
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">Fale conosco</a>
        </nav>
      )}
    </header>
  )
}
