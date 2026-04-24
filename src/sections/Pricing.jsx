import { FaCheck } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

const plans = [
  {
    name: 'Starter',
    featured: false,
    features: ['Best for simple/basic work', 'Graphic Design from $59', 'UGC Video from $79', 'One Page Website from $300', 'Basic deliverables', 'Ideal for startups and personal brands'],
  },
  {
    name: 'Pro',
    featured: true,
    features: ['Recommended for strategic growth', 'More polished, customized output', 'Higher production value', 'More revisions', 'Premium final quality', 'Pricing based on project scope'],
  },
  {
    name: 'Premium',
    featured: false,
    features: ['Built for high-end brands', 'Deep customization + direction', 'Top-tier execution', 'Premium support', 'Complex workflow management', 'Custom quote only'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Pricing" title="Flexible packages aligned with project complexity." desc="All plans are scope-sensitive, ensuring quality and production depth are matched to your goals." />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-[1px] ${p.featured ? 'bg-gradient-to-r from-purple to-cyan' : 'bg-white/10'}`}>
              <article className={`h-full rounded-2xl p-6 ${p.featured ? 'bg-zinc-950 shadow-neon' : 'glass'}`}>
                <h3 className="font-display text-2xl">{p.name} {p.featured && <span className="text-sm text-cyan">(Recommended)</span>}</h3>
                <ul className="mt-5 space-y-3 text-sm text-zinc-300">{p.features.map((f) => <li key={f} className="flex gap-2"><FaCheck className="mt-1 text-cyan"/>{f}</li>)}</ul>
                <a href={createWhatsAppLink(whatsappMessages.hire)} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-white/10 px-4 py-2 font-semibold hover:bg-white/20">Order Now</a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
