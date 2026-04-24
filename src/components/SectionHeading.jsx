import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan/90">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 text-base text-zinc-300">{desc}</p>
    </motion.div>
  )
}
