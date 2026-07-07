import { useState } from 'react'
import { Container, Eyebrow } from '../components/ui/Primitives.jsx'
import { BOOK_A_DEMO_URL, EMAIL, LINKEDIN_URL, YOUTUBE_URL, X_URL, SUBSTACK_URL } from '../data/links.js'

const FACILITY_TYPES = [
  'Schools & Universities', 'Hotels', 'Hospitals', 'Communities', 'Malls', 'Utilities',
  'Manufacturing', 'Airports', 'Ports', 'Data Centers', 'Pump Rooms', 'Substations', 'Other',
]

const SOCIALS = [
  { href: LINKEDIN_URL, glyph: 'in', label: 'linkedin.com/in/najeemsakib', external: true },
  { href: `mailto:${EMAIL}`, glyph: '@', label: EMAIL, external: false },
  { href: YOUTUBE_URL, glyph: '▶', label: 'youtube.com/@najeemsakib', external: true },
  { href: X_URL, glyph: '𝕏', label: 'x.com/najeemsakib', external: true },
  { href: SUBSTACK_URL, glyph: 'S', label: 'substack.com/@najeemsakib', external: true },
]

const fieldClass =
  'rounded-md border border-fieldline bg-panel px-3.5 py-3 text-[15px] text-navy outline-none font-sans font-normal focus:border-gold focus:shadow-[0_0_0_3px_rgba(255,184,28,.1)]'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', facility: 'Select…', message: '', newsletter: true,
  })
  const [sent, setSent] = useState(false)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <>
      <div className="dot-grid-light border-b border-hairline">
        <Container className="flex flex-col gap-4 py-18">
          <Eyebrow>CONTACT</Eyebrow>
          <h1 className="m-0 max-w-[680px] font-display text-5xl font-bold leading-[1.1] tracking-[-1px] text-navy text-balance">
            Let's talk about your facility
          </h1>
        </Container>
      </div>

      <Container className="grid grid-cols-1 items-start gap-14 py-18 pb-22 lg:grid-cols-[1.2fr_.8fr]">
        {/* FORM */}
        <div className="flex flex-col gap-5 rounded-lg border border-hairline bg-white p-9 shadow-[0_2px_8px_rgba(0,0,0,.06)]">
          <h2 className="m-0 font-display text-2xl font-bold text-navy">Schedule a demo or get in touch</h2>

          {sent && (
            <div className="rounded-md border border-[#2BA05A]/35 bg-[#2BA05A]/8 px-5 py-4 text-[15px] font-semibold text-[#1F7A45]">
              Message sent — I usually reply within 24 hours.
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
              First name *
              <input value={form.name} onChange={set('name')} placeholder="Your name" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
              Email *
              <input value={form.email} onChange={set('email')} placeholder="you@company.com" className={fieldClass} />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
              Company
              <input value={form.company} onChange={set('company')} placeholder="Company name" className={fieldClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
              Facility type
              <select value={form.facility} onChange={set('facility')} className={fieldClass}>
                <option>Select…</option>
                {FACILITY_TYPES.map((f) => <option key={f}>{f}</option>)}
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-navy">
            Message
            <textarea
              value={form.message}
              onChange={set('message')}
              placeholder="Tell me about your facility and what you'd like to see…"
              rows={4}
              className={`${fieldClass} resize-y`}
            />
          </label>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink">
            <input
              type="checkbox"
              checked={form.newsletter}
              onChange={() => setForm((f) => ({ ...f, newsletter: !f.newsletter }))}
              className="h-4 w-4 accent-gold"
            />
            Add me to your weekly insights newsletter
          </label>

          <div className="flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => setSent(true)}
              className="rounded-md bg-gold px-7 py-3.5 font-display text-base font-bold text-navy hover:bg-gold-dark"
            >
              Send Message →
            </button>
            <a
              href={BOOK_A_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-gold px-6 py-3 font-display text-[15px] font-bold text-navy no-underline hover:bg-gold"
            >
              Book a demo slot ↗
            </a>
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-6">
          <div className="dot-grid-dark flex flex-col gap-4 rounded-lg bg-navy p-7">
            <span className="font-mono text-xs tracking-widest text-gold">CONNECT</span>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2.5 text-[15px] font-semibold text-white no-underline hover:text-gold"
              >
                <span className="grid h-8 w-8 place-items-center rounded-md bg-white/10 font-mono text-xs text-gold">{s.glyph}</span>
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 rounded-lg border border-hairline bg-white p-7">
            <span className="font-mono text-xs tracking-widest text-gold">QUICK FACTS</span>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-ink-light">Response time</span>
              <span className="text-[15px] font-semibold text-navy">Usually within 24 hours</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-ink-light">Based in</span>
              <span className="text-[15px] font-semibold text-navy">OMNIEYE, Wafi Mall, Dubai, UAE</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[13px] text-ink-light">Also serving</span>
              <span className="text-[15px] font-semibold text-navy">Saudi Arabia · Qatar · Kuwait</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 rounded-lg border border-gold bg-gold-wash p-7">
            <span className="font-mono text-xs tracking-widest text-[#B8860B]">VISIT THE COMMAND CENTER</span>
            <p className="m-0 text-sm leading-relaxed text-ink">
              See the Live Digital Twin running on a real facility — the OMNIEYE command center in Wafi Mall, Dubai,
              is open for scheduled walkthroughs.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
