import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-2xl gradient-text">Sksamin</p>
          <p className="text-sm text-zinc-400">Built with ❤️ by Sksamin</p>
        </div>
        <div className="flex gap-5 text-sm text-zinc-300">
          {['Home', 'About', 'Services', 'Work', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </div>
        <div className="flex gap-3 text-xl text-zinc-300"><FaWhatsapp /><FaInstagram /><FaLinkedin /></div>
      </div>
      <p className="mt-6 text-center text-xs text-zinc-500">© 2025 Sksamin. All rights reserved.</p>
    </footer>
  )
}
