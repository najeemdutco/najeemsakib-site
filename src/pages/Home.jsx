import { Link } from 'react-router-dom'
import HomeHeroZoom from '../three/HomeHeroZoom.jsx'
import { Container, Eyebrow } from '../components/ui/Primitives.jsx'
import { BOOK_A_DEMO_URL } from '../data/links.js'

const STATS = [
  ['17+', 'Sensor types integrated'],
  ['5', 'Architecture layers'],
  ['24/7', 'Live command center'],
  ['12', 'Facility types served'],
]

export default function Home() {
  return (
    <>
      <div className="dot-grid-light">
        <Container className="flex flex-col items-center gap-5 pb-2 pt-14 text-center">
          <Eyebrow>LIVE DIGITAL TWIN · OT CYBERSECURITY · GCC</Eyebrow>
          <h1 className="m-0 max-w-[760px] font-display text-[54px] font-bold leading-[1.08] tracking-[-1px] text-navy text-balance">
            Every facility. One live command center.
          </h1>
          <p className="m-0 max-w-[560px] text-lg leading-relaxed text-ink text-pretty">
            Real-time visibility, control and intelligence over any physical environment — replacing fragmented
            systems, paper records and manual site visits.
          </p>
          <Link
            to="/services"
            className="mt-1 rounded-md border-2 border-gold bg-transparent px-6.5 py-3 font-display text-[15px] font-bold text-navy no-underline transition-colors hover:bg-gold"
          >
            Explore Services
          </Link>
        </Container>

        <HomeHeroZoom />
      </div>

      {/* TRUST STRIP */}
      <div className="border-y border-hairline bg-panel">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-9">
          <span className="font-mono text-xs tracking-widest text-ink-light">DEPLOYED ACROSS THE GCC</span>
          <div className="flex flex-wrap gap-14">
            {STATS.map(([n, label]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-display text-[28px] font-bold text-navy">{n}</span>
                <span className="text-[13px] text-ink">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="dot-grid-dark bg-navy">
        <Container className="flex flex-col items-center gap-5 py-20 text-center">
          <span className="font-mono text-[13px] font-semibold tracking-[2.5px] text-gold">OMNIEYE · WAFI MALL · DUBAI</span>
          <h2 className="m-0 max-w-[680px] font-display text-4xl font-bold tracking-[-0.5px] text-white text-balance">
            Book a visit to our command center
          </h2>
          <p className="m-0 max-w-[480px] text-base text-white/70">
            See the Live Digital Twin running on a real facility — in person at OMNIEYE, or through a remote
            walkthrough.
          </p>
          <a
            href={BOOK_A_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md bg-gold px-8 py-3.5 font-display text-base font-bold text-navy no-underline hover:bg-gold-dark"
          >
            Book a Visit →
          </a>
        </Container>
      </div>
    </>
  )
}
