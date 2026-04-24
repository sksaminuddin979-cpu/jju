import { useEffect, useState } from 'react'
import gsap from 'gsap'
import Lenis from 'lenis'
import { motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const dot = document.createElement('div')
    dot.className = 'cursor-dot hidden md:block'
    document.body.appendChild(dot)

    const move = (e) => gsap.to(dot, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.25, ease: 'power2.out' })
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      dot.remove()
    }
  }, [])

  return (
    <div className="relative bg-base text-white">
      <LoadingScreen loading={loading} />
      <Navbar />
      <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Pricing />
        <Contact />
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
