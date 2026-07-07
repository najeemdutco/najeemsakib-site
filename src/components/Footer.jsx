import { Link } from 'react-router-dom'
import { DUTCOTENNANT_URL, EMAIL } from '../data/links.js'

const PAGE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="dot-grid-dark bg-navy text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-8 pt-16 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8.5 w-8.5 place-items-center rounded-lg bg-gold font-display text-sm font-bold text-navy">NS</span>
            <span className="font-display text-[17px] font-bold text-white">Najeem Sakib</span>
          </div>
          <p className="m-0 max-w-80 text-sm leading-relaxed text-white/65">
            Live Digital Twin &amp; OT Cybersecurity for critical facilities across the GCC.
          </p>
          <span className="font-mono text-xs tracking-wider text-gold">360° VISION · LIVE DATA · AI INTELLIGENCE</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-gold">Pages</span>
          {PAGE_LINKS.map((p) => (
            <Link key={p.to} to={p.to} className="text-sm text-white/80 no-underline hover:text-gold">
              {p.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-gold">Connect</span>
          <a href="https://linkedin.com/in/najeemsakib" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 no-underline hover:text-gold">LinkedIn ↗</a>
          <a href={`mailto:${EMAIL}`} className="text-sm text-white/80 no-underline hover:text-gold">{EMAIL}</a>
          <a href={DUTCOTENNANT_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 no-underline hover:text-gold">DutcoTennant ↗</a>
          <span className="mt-2 text-[13px] leading-snug text-white/50">
            Live Command Center<br />OMNIEYE, Wafi Mall, Dubai
          </span>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-white/12 px-8 py-6">
        <span className="text-[13px] text-white/50">© 2026 Najeem Sakib · najeemsakib.com</span>
        <span className="font-mono text-xs text-white/40">In partnership with PanoRM360 &amp; Morohub</span>
      </div>
    </footer>
  )
}
