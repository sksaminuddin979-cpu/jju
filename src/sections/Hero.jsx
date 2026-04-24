import { useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { createWhatsAppLink, whatsappMessages } from '../utils/whatsapp'

function Shapes() {
  useFrame((state) => {
    state.scene.rotation.y = state.clock.elapsedTime * 0.04
  })
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 2]} color="#7C3AED" intensity={20} />
      <pointLight position={[-4, -2, 0]} color="#06B6D4" intensity={20} />
      <Float speed={1.5}><Sphere args={[1, 32, 32]} position={[-2.8, 1.3, -2]}><meshStandardMaterial color="#7C3AED" metalness={0.6} roughness={0.1} /></Sphere></Float>
      <Float speed={2}><Box args={[1.2, 1.2, 1.2]} position={[2.4, -0.6, -1]}><meshStandardMaterial color="#06B6D4" metalness={0.7} roughness={0.2} /></Box></Float>
      <Float speed={2.2}><Torus args={[0.9, 0.28, 24, 100]} position={[0.3, 1.5, -3]}><meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.08}/></Torus></Float>
    </>
  )
}

export default function Hero() {
  const words = useMemo(() => ['Graphic Designer', 'Web Developer', 'UGC Creator'], [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setIndex((v) => (v + 1) % words.length), 2200)
    return () => clearInterval(i)
  }, [words.length])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 52 }}>
          <Shapes />
        </Canvas>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,.28),transparent_35%),radial-gradient(circle_at_70%_35%,rgba(6,182,212,.2),transparent_40%)]" />
      <div className="section-container flex min-h-[85vh] flex-col items-center justify-center text-center">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-4xl font-bold sm:text-6xl">Hi, I&apos;m <span className="gradient-text">Sksamin</span></motion.h1>
        <p className="mt-4 text-xl text-zinc-200 sm:text-2xl">Premium <span className="gradient-text">{words[index]}</span></p>
        <p className="mt-6 max-w-2xl text-zinc-300">I help ambitious brands scale with conversion-focused design systems, high-performance websites, and viral-ready UGC content engineered to drive trust and sales.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#work" className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-cyan">View My Work</a>
          <a href={createWhatsAppLink(whatsappMessages.hire)} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-purple to-cyan px-6 py-3 font-semibold text-white shadow-neon">Hire Me</a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300"><HiArrowDown className="animate-bounce" size={28} /></a>
    </section>
  )
}
