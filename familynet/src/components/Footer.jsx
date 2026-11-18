import logo from '../assets/logo.webp'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="border-t border-fn-neon/15 bg-fn-black px-4 py-10 pb-24 text-center text-sm text-white/60">
      <img src={logo} alt="FamilyNet" width="56" height="56" loading="lazy" className="mx-auto h-14 w-14 rounded-full" />
      <p className="mt-3 font-semibold text-white">FamilyNet — O provedor da sua família</p>
      <p className="mt-1">{WHATSAPP_DISPLAY} · <a className="hover:text-fn-neon" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE}</a></p>
      <p className="mt-4">© {new Date().getFullYear()} FamilyNet. Todos os direitos reservados.</p>
    </footer>
  )
}
