import { NavLink } from 'react-router-dom'
import useClickBlip from '../hooks/useClickBlip.js'
import { BOOK_A_DEMO_URL } from '../data/links.js'

const PAGES = [
  { to: '/', label: 'Home', path: 'M3 11.5 L12 4 L21 11.5 M5.5 9.8 V20 H18.5 V9.8' },
  { to: '/about', label: 'About', path: 'M12 11 a3.6 3.6 0 1 0 -0.01 0 M4.5 20 a7.5 7.5 0 0 1 15 0' },
  { to: '/services', label: 'Services', path: 'M12 3 L21 8 L12 13 L3 8 Z M3 12.5 L12 17.5 L21 12.5 M3 16.5 L12 21.5 L21 16.5' },
]
const PAGES_AFTER_DIVIDER = [
  { to: '/resources', label: 'Resources', path: 'M12 5 C10 3.5 7 3.5 4 4.5 V19 C7 18 10 18 12 19.5 C14 18 17 18 20 19 V4.5 C17 3.5 14 3.5 12 5 Z M12 5 V19.5' },
  { to: '/contact', label: 'Contact', path: 'M3 5.5 H21 V18.5 H3 Z M3 6.5 L12 13 L21 6.5' },
]

function DockIcon({ to, label, path, onClick }) {
  return (
    <NavLink
      to={to}
      title={label}
      end={to === '/'}
      onClick={onClick}
      className={({ isActive }) =>
        `grid h-9 w-9 place-items-center rounded-full transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-1.5 hover:scale-[1.16] hover:bg-gold hover:text-navy md:h-11 md:w-11 ${
          isActive ? 'bg-gold text-navy' : 'bg-white/6 text-[#8FA3C4]'
        }`
      }
    >
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.9] md:h-[19px] md:w-[19px]" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </NavLink>
  )
}

export default function Nav() {
  const playBlip = useClickBlip()

  return (
    <div className="sticky top-0 z-50 flex justify-center px-0 pb-2.5 pt-3.5 [&_*]:pointer-events-auto pointer-events-none">
      {/* Brand — full name on desktop, NS monogram only on mobile */}
      <NavLink
        to="/"
        onClick={playBlip}
        className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-2.5 rounded-xl border border-white/10 bg-navy-soft p-2 text-decoration-none shadow-[0_12px_32px_rgba(17,31,56,.3)] hover:text-white md:left-[26px] md:pr-4.5"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold font-display text-[13px] font-bold text-navy">NS</span>
        <span className="hidden whitespace-nowrap font-display text-[15px] font-bold text-white md:inline">Najeem Sakib</span>
      </NavLink>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-navy-soft px-2 py-1.5 shadow-[0_12px_32px_rgba(17,31,56,.35)] md:gap-1.5 md:px-3 md:py-2">
          {PAGES.map((p) => (
            <DockIcon key={p.to} {...p} onClick={playBlip} />
          ))}
          <span className="h-6.5 w-px bg-white/15" />
          {PAGES_AFTER_DIVIDER.map((p) => (
            <DockIcon key={p.to} {...p} onClick={playBlip} />
          ))}
        </div>
      </div>

      {/* CTA — text pill on desktop, circular calendar button on mobile */}
      <a
        href={BOOK_A_DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={playBlip}
        title="Book a Demo"
        className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-gold font-display text-sm font-bold text-navy no-underline shadow-[0_12px_32px_rgba(255,184,28,.3)] transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-1/2 hover:scale-105 hover:bg-gold-dark md:right-[26px] md:h-auto md:w-auto md:px-5.5 md:py-3.5"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-navy stroke-[1.9] md:hidden" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6 H20 V20 H4 Z M4 10 H20 M8 3 V7 M16 3 V7 M8 14 H10 M14 14 H16 M8 17 H10" />
        </svg>
        <span className="hidden whitespace-nowrap md:inline">Book a Demo →</span>
      </a>
    </div>
  )
}
