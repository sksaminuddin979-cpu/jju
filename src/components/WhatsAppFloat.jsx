import { FaWhatsapp } from 'react-icons/fa'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

export default function WhatsAppFloat() {
  return (
    <a
      href={createWhatsAppLink(whatsappMessages.hire)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:scale-105"
    >
      <FaWhatsapp className="text-lg" /> Hire Me
    </a>
  )
}
