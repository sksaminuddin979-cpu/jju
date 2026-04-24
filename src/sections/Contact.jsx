import { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiUpwork, SiFiverr } from 'react-icons/si'
import SectionHeading from '../components/SectionHeading'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

const serviceMsgs = {
  'Graphic Design': whatsappMessages.graphic,
  'Web Development': whatsappMessages.web,
  'UGC Video Creation': whatsappMessages.ugc,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Graphic Design', message: '' })

  const submit = (e) => {
    e.preventDefault()
    const intro = serviceMsgs[form.service]
    const details = `\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    window.open(createWhatsAppLink(`${intro}${details}`), '_blank')
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Contact" title="Let’s build your next standout project." desc="Tell me what you need and I’ll respond with a tailored strategy and quote." />
        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6">
            <input required placeholder="Name" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {Object.keys(serviceMsgs).map((s) => <option key={s}>{s}</option>)}
            </select>
            <textarea required rows="5" placeholder="Message" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button className="rounded-full bg-gradient-to-r from-purple to-cyan px-5 py-3 font-semibold">Send via WhatsApp</button>
          </form>
          <aside className="glass rounded-2xl p-6">
            <p className="text-zinc-300">Ready to scale your brand with premium creative execution? Let’s discuss your goals and timeline.</p>
            <a href={createWhatsAppLink(whatsappMessages.hire)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold"><FaWhatsapp/>Chat on WhatsApp</a>
            <div className="mt-8 flex gap-3 text-2xl text-zinc-300">
              <a href={createWhatsAppLink(whatsappMessages.hire)} target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><SiFiverr /></a>
              <a href="#"><SiUpwork /></a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
