import { FaPalette, FaCode, FaVideo, FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

const services = [
  {
    title: 'Graphic Design', icon: FaPalette, msg: whatsappMessages.graphic, price: 'Starting at $59',
    points: ['Logos', 'Brand Identity', 'Social Media Design', 'Banners', 'Flyers', 'Packaging'],
    note: 'Basic price. Custom strategy-led executions are priced by scope and complexity.',
  },
  {
    title: 'Web Development', icon: FaCode, msg: whatsappMessages.web, price: 'Starting at $300',
    points: ['One Page Websites', 'Portfolio Websites', 'Landing Pages', 'Business Websites', 'React Websites'],
    note: 'Base package covers a standard one-page website. Advanced builds are quoted separately.',
  },
  {
    title: 'UGC Video Creation', icon: FaVideo, msg: whatsappMessages.ugc, price: 'Starting at $79',
    points: ['Product Videos', 'Brand Ads', 'TikTok/Reels Content', 'Testimonial Videos', 'Promotional Shorts'],
    note: 'Price may scale to $1000+ based on script, production level, editing depth, and runtime.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Services" title="Premium creative services designed to convert." desc="From identity to websites to UGC campaigns—crafted with high-end aesthetics and growth intent." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <article key={s.title} className="group glass rounded-2xl p-6 transition hover:-translate-y-2 hover:shadow-neon">
                <Icon className="text-3xl text-cyan transition group-hover:scale-110" />
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-300">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <p className="mt-4 text-sm font-semibold text-cyan">{s.price}</p>
                <p className="mt-2 text-sm text-zinc-400">{s.note}</p>
                <a href={createWhatsAppLink(s.msg)} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"><FaWhatsapp/>Get Quote</a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
