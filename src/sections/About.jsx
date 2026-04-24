import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const skills = [
  ['Graphic Design', 95],
  ['Web Development', 92],
  ['UGC Video Production', 90],
  ['Branding', 88],
  ['UI/UX', 91],
]

const stats = ['50+ Clients', '100+ Projects', '3+ Years Experience', '100% Satisfaction']

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="Creative precision, speed, and business impact." desc="Sksamin is built for founders and brands that need elite-level execution without agency delays." />
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div whileHover={{ rotateY: 6, rotateX: -3 }} className="glass neon-ring rounded-3xl p-6">
            <div className="h-full min-h-[360px] rounded-2xl bg-gradient-to-br from-purple/40 via-zinc-900 to-cyan/30 p-8">
              <div className="h-full rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">Profile Preview</p>
                <h3 className="mt-3 font-display text-3xl">Sksamin</h3>
                <p className="mt-2 text-zinc-300">Freelancer + Creative Studio</p>
              </div>
            </div>
          </motion.div>
          <div>
            <p className="mb-6 text-zinc-300">I combine design thinking, web engineering, and content storytelling to deliver polished digital experiences that elevate brand perception and conversion performance. Every project is handled with strategy, craftsmanship, and clear communication.</p>
            <div className="space-y-4">
              {skills.map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-sm"><span>{label}</span><span>{value}%</span></div>
                  <div className="h-2 rounded-full bg-zinc-800">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} className="h-full rounded-full bg-gradient-to-r from-purple to-cyan" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s) => <div key={s} className="glass rounded-xl p-4 text-center text-sm font-semibold">{s}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
