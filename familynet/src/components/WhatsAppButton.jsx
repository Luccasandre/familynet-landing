import { WhatsAppIcon } from './ui'
import { MESSAGES, whatsappLink } from '../lib/whatsapp'

export default function WhatsAppButton() {
  return (
    <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" aria-label="Falar com a FamilyNet no WhatsApp" className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,.8)]" style={{ marginBottom: 'env(safe-area-inset-bottom)' }}>
      <span className="wa-ring absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  )
}
