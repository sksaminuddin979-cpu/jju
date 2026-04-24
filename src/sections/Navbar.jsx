import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

const links = ['Home', 'About', 'Services', 'Work', 'Testimonials', 'Pricing', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4">
      <nav className={`section-container flex items-center justify-between rounded-2xl px-4 py-3 transition ${scrolled ? 'glass border-white/20' : 'bg-transparent border border-transparent'}`}>
        <a href="#home" className="font-display text-2xl font-bold gradient-text">Sksamin</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-zinc-200 transition hover:text-cyan">{item}</a>
          ))}
          <a href={createWhatsAppLink(whatsappMessages.hire)} target="_blank" rel="noreferrer" className="rounded-full border border-cyan/40 bg-cyan/20 px-4 py-2 text-sm font-semibold hover:bg-cyan/30">Hire Me</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <HiX size={24}/> : <HiMenuAlt3 size={24}/>}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="section-container mt-2 rounded-2xl glass p-4 md:hidden">
            {links.map((item) => (
              <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-zinc-200">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
