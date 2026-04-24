import SectionHeading from '../components/SectionHeading'

const testimonials = [
  ['Sksamin delivered my logo in just 24 hours and it was PERFECT. Highly recommend!', 'James R. 🇺🇸 ⭐⭐⭐⭐⭐'],
  ['My website looks absolutely stunning. Professional, fast, and great communication throughout.', 'Priya M. 🇬🇧 ⭐⭐⭐⭐⭐'],
  ['The UGC video he made for my product went viral on TikTok. Incredible work!', 'Sophie L. 🇦🇺 ⭐⭐⭐⭐⭐'],
  ['Best freelancer I’ve ever worked with. He understood my vision perfectly.', 'Carlos D. 🇨🇦 ⭐⭐⭐⭐⭐'],
  ['Delivered 5 social media designs overnight. Clean, modern, exactly what I needed.', 'Yui T. 🇯🇵 ⭐⭐⭐⭐⭐'],
  ['The landing page he built converted 3x better than my old one. Genius!', 'Ahmed K. 🇦🇪 ⭐⭐⭐⭐⭐'],
]

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="section-container">
        <SectionHeading eyebrow="Testimonials" title="Client praise from across the globe." desc="Real outcomes. Real trust. Premium delivery that keeps clients coming back." />
      </div>
      <div className="group whitespace-nowrap">
        <div className="inline-flex min-w-full animate-marquee gap-4 group-hover:[animation-play-state:paused] px-4">
          {doubled.map(([quote, by], idx) => (
            <figure key={`${by}-${idx}`} className="glass inline-block w-[320px] rounded-2xl p-6 align-top">
              <p className="text-zinc-200">“{quote}”</p>
              <figcaption className="mt-4 text-sm text-cyan">— {by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
