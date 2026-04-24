import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const filters = ['All', 'Design', 'Web', 'Video']
const projects = [
  { title: 'Aura Cosmetics Branding', cat: 'Design' },
  { title: 'Nova SaaS Landing Page', cat: 'Web' },
  { title: 'Fitfuel UGC Campaign', cat: 'Video' },
  { title: 'Zenwell Social Pack', cat: 'Design' },
  { title: 'Cortex Studio Portfolio', cat: 'Web' },
  { title: 'GlowSkin Ad Creative', cat: 'Video' },
]

export default function Work() {
  const [active, setActive] = useState('All')
  const visible = useMemo(() => (active === 'All' ? projects : projects.filter((p) => p.cat === active)), [active])
  return (
    <section id="work" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="Portfolio" title="Selected work engineered for trust and growth." desc="A bento-inspired showcase of premium visuals, interfaces, and short-form video creatives." />
        <div className="mb-8 flex flex-wrap justify-center gap-3">{filters.map((f) => <button key={f} onClick={() => setActive(f)} className={`rounded-full px-4 py-2 text-sm ${active===f?'bg-cyan text-black':'glass'}`}>{f}</button>)}</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60">
              <div className="h-52 bg-gradient-to-br from-purple/40 via-zinc-900 to-cyan/40 transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
              <div className="p-5"><h3 className="font-semibold">{p.title}</h3><p className="mt-1 text-sm text-cyan">{p.cat}</p><button className="mt-4 rounded-full border border-white/20 px-3 py-1 text-sm">View Project</button></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
