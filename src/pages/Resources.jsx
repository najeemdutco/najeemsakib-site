import { useState } from 'react'
import { Container, Eyebrow } from '../components/ui/Primitives.jsx'
import { RESOURCE_CARDS, RESOURCE_TABS } from '../data/resources.js'
import { SUBSTACK_URL } from '../data/links.js'

export default function Resources() {
  const [tab, setTab] = useState('All')
  const cards = RESOURCE_CARDS.filter((c) => tab === 'All' || c.cat === tab)

  return (
    <>
      <div className="dot-grid-light border-b border-hairline">
        <Container className="flex flex-col gap-4 py-18">
          <Eyebrow>RESOURCES</Eyebrow>
          <h1 className="m-0 max-w-[680px] font-display text-5xl font-bold leading-[1.1] tracking-[-1px] text-navy text-balance">
            Insights, guides &amp; case studies
          </h1>
        </Container>
      </div>

      {/* NEWSLETTER */}
      <Container className="pt-14">
        <div className="dot-grid-dark flex flex-wrap items-center justify-between gap-7 rounded-xl bg-navy px-12 py-11">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 font-display text-[28px] font-bold tracking-[-0.5px] text-white">I write on Substack</h2>
            <p className="m-0 text-[15px] text-white/70">
              Insights on digital twin &amp; OT cybersecurity — subscribe on my Substack.
            </p>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-7 py-3.5 font-display text-[15px] font-bold text-navy no-underline hover:bg-gold-dark"
          >
            Read on Substack ↗
          </a>
        </div>
      </Container>

      {/* FILTERS + GRID */}
      <Container className="py-14 pb-22">
        <div className="mb-8 flex flex-wrap gap-2.5">
          {RESOURCE_TABS.map((name) => (
            <button
              key={name}
              onClick={() => setTab(name)}
              className={`cursor-pointer whitespace-nowrap rounded-full border-[1.5px] px-5 py-2.5 text-sm font-semibold transition-all hover:border-gold ${
                tab === name ? 'border-navy bg-navy text-white' : 'border-hairline bg-white text-navy'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-3.5 rounded-lg border border-dashed border-fieldline bg-white p-6.5 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_8px_16px_rgba(0,0,0,.1)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded bg-gold px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-navy">{c.tag}</span>
                <span className="font-mono text-[11px] text-ink-light">{c.meta}</span>
              </div>
              <div
                className="grid h-24 place-items-center rounded-md bg-panel"
                style={{ backgroundImage: 'radial-gradient(rgba(184,197,217,.6) 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }}
              >
                <span className="font-mono text-[11px] tracking-widest text-ink-light">COMING SOON</span>
              </div>
              <h3 className="m-0 font-display text-lg font-semibold leading-snug text-navy">{c.title}</h3>
              <p className="m-0 text-sm leading-snug text-ink-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
