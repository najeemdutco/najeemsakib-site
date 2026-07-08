import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Eyebrow } from '../components/ui/Primitives.jsx'
import { MILESTONES } from '../data/timeline.js'
import { BOOK_A_DEMO_URL } from '../data/links.js'
import najeemPhoto from '../assets/najeem.jpg'

const SKILLS_DARK = ['3D Design & Rendering', 'BIM Engineering', 'Key Account Management']
const SKILLS_LIGHT = ['AI Workflows — Claude · Krea · n8n', 'Market Research & Analysis', 'Digital Marketing', 'Data Science', 'Graphic Design & Video', 'Team Leadership', 'Communication & Rapport']
const HOBBIES = ['Geopolitics — books & film', 'Business case studies', 'Power dynamics in history', 'Yoga & calisthenics', 'MMA', 'Football', 'Running', 'Traveling']
const FOCUS_AREAS = [
  ['Key Account Engineering', 'Owning strategic client relationships end-to-end — from technical scoping to delivery on critical infrastructure accounts.'],
  ['Digital Transformation', 'Live digital twins that unify 360° visuals, IoT sensing and enterprise systems into one operational picture.'],
  ['OT Cybersecurity', 'Securing operational technology — SCADA, BMS and sensor networks — for industrial and critical environments.'],
  ['GCC Market Expertise', 'Deep familiarity with facility operations, procurement and regulation across the UAE, KSA, Qatar and Kuwait.'],
]

function Pill({ children, dark = false }) {
  return (
    <span className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${dark ? 'bg-navy text-white' : 'border border-hairline bg-panel text-navy'}`}>
      {children}
    </span>
  )
}

export default function About() {
  const [sel, setSel] = useState(5)
  const m = MILESTONES[sel]
  const progressPct = (sel / (MILESTONES.length - 1)) * 100

  return (
    <>
      {/* HERO */}
      <div className="dot-grid-dark -mt-[90px] bg-navy pt-[90px]">
        <Container className="flex flex-col gap-4 py-16">
          <Eyebrow>ABOUT ME</Eyebrow>
          <h1 className="m-0 max-w-[720px] font-display text-5xl font-bold leading-[1.1] tracking-[-1px] text-white text-balance">
            Hi, I'm Najeem Sakib
          </h1>
          <p className="m-0 max-w-[640px] text-[17px] leading-relaxed text-white/75 text-pretty">
            Key Accounts Engineer at Dutco Tennant LLC, Dubai — building the Live Digital Twin &amp; OT Cybersecurity
            practice for critical facilities across the GCC.
          </p>
        </Container>
      </div>

      {/* BENTO DASHBOARD */}
      <div className="dot-grid-light border-b border-hairline">
        <Container className="grid grid-cols-1 gap-4.5 py-16 md:grid-cols-4 md:[grid-auto-rows:minmax(150px,auto)]">
          {/* PHOTO */}
          <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-navy md:col-start-1 md:row-start-1 md:row-span-2">
            <img
              src={najeemPhoto}
              alt="Najeem Sakib"
              className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
              style={{ filter: 'grayscale(1) contrast(1.12) brightness(1.02)' }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(rgba(26,45,77,.6) 1.1px, transparent 1.1px)', backgroundSize: '5px 5px' }}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 px-4 py-3.5" style={{ background: 'linear-gradient(transparent, rgba(17,31,56,.92))' }}>
              <span className="font-display text-[17px] font-bold text-white">Najeem Sakib</span>
              <span className="font-mono text-[10px] tracking-wide text-gold">KEY ACCOUNTS ENGINEER · DUBAI</span>
            </div>
          </div>

          {/* BIO */}
          <div className="flex flex-col gap-3 rounded-xl border border-hairline bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,.05)] md:col-start-2 md:col-span-2 md:row-start-1">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">THE SHORT VERSION</span>
            <p className="m-0 text-[15px] leading-relaxed text-ink text-pretty">
              Civil engineer turned digital-transformation specialist. I've gone from designing structures to
              designing how facilities are <em>run</em> — through 3D, BIM, reality capture and now live digital
              twins. Today I manage key accounts at Dutco Tennant and lead its push into Digital Twin &amp; OT
              security.
            </p>
            <span className="text-sm text-ink-light">
              Full story?{' '}
              <a href={BOOK_A_DEMO_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy">
                Lets grab a Coffee ☕
              </a>
            </span>
          </div>

          {/* VISION */}
          <div className="dot-grid-dark flex flex-col justify-between gap-3.5 rounded-xl bg-navy p-7 md:col-start-4 md:row-start-1 md:row-span-2">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">VISION</span>
              <p className="m-0 font-display text-[19px] font-semibold leading-snug text-white text-balance">
                Convert the region's major key accounts and establish Dutco Tennant as the go-to leader in Digital
                Twin &amp; OT security.
              </p>
              <p className="m-0 text-[13px] leading-relaxed text-white/60">
                — while growing into a management role and shaping how the GCC runs its critical facilities.
              </p>
            </div>
            <span className="animate-ns-pulse grid h-9 w-9 place-items-center rounded-lg bg-gold">
              <svg width="18" height="18" viewBox="0 0 24 24" className="fill-none stroke-navy stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19 V5 M5 12 L12 5 L19 12" />
              </svg>
            </span>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-3.5 rounded-xl border border-hairline bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,.05)] md:col-start-2 md:col-span-2 md:row-start-2">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">SKILLS</span>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_DARK.map((s) => <Pill key={s} dark>{s}</Pill>)}
              {SKILLS_LIGHT.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="flex flex-col gap-3 rounded-xl border border-hairline bg-white p-6.5 shadow-[0_2px_8px_rgba(0,0,0,.05)] md:col-start-1 md:row-start-3">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">LANGUAGES · 8</span>
            <p className="m-0 text-sm font-semibold leading-loose text-navy">
              English · Hindi · Arabic · Urdu · Kannada · Malayalam · Telugu · Tamil
            </p>
            <span className="text-xs text-ink-light">Rapport in the customer's own language.</span>
          </div>

          {/* HOBBIES */}
          <div className="flex flex-col gap-3 rounded-xl border border-hairline bg-white p-6.5 shadow-[0_2px_8px_rgba(0,0,0,.05)] md:col-start-2 md:col-span-2 md:row-start-3">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">OFF THE CLOCK</span>
            <div className="flex flex-wrap gap-1.5">
              {HOBBIES.map((h) => <Pill key={h}>{h}</Pill>)}
            </div>
          </div>

          {/* COFFEE */}
          <div className="flex flex-col justify-center gap-2.5 rounded-xl bg-gold p-6.5 md:col-start-4 md:row-start-3">
            <span className="font-display text-[19px] font-bold leading-snug text-navy">Full story over a coffee ☕</span>
            <a href={BOOK_A_DEMO_URL} target="_blank" rel="noopener noreferrer" className="font-display text-sm font-bold text-navy no-underline">
              Grab a slot →
            </a>
          </div>
        </Container>
      </div>

      {/* CAREER TIMELINE */}
      <Container className="py-22">
        <div className="mb-13 flex flex-col gap-2.5">
          <Eyebrow>MY JOURNEY</Eyebrow>
          <h2 className="m-0 font-display text-[38px] font-bold tracking-[-0.5px] text-navy">Career &amp; projects timeline</h2>
          <p className="m-0 text-[15px] text-ink-light">Click a milestone.</p>
        </div>

        <div className="relative mx-2">
          <div className="absolute left-0 right-0 top-6 h-0.5 bg-hairline" />
          <div className="absolute left-0 top-6 h-0.5 bg-gold transition-all duration-300" style={{ width: `${progressPct}%` }} />
          <div className="relative grid grid-cols-3 gap-2 sm:grid-cols-6">
            {MILESTONES.map((mi, i) => (
              <button
                key={i}
                onClick={() => setSel(i)}
                className="z-10 flex cursor-pointer flex-col items-center gap-3 bg-transparent text-center"
              >
                <span
                  className={`relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 font-mono text-[11px] font-semibold text-navy transition-all hover:border-gold ${
                    i <= sel ? 'border-gold bg-gold' : 'border-fieldline bg-white'
                  }`}
                >
                  {mi.year}
                </span>
                <span className={`max-w-[150px] font-display text-[13px] font-semibold leading-snug ${i === sel ? 'text-navy' : 'text-ink-light'}`}>
                  {mi.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2.5 rounded-lg border-l-4 border-gold bg-navy px-9 py-8">
          <span className="font-mono text-xs tracking-widest text-gold">{m.year} · {m.tag}</span>
          <span className="font-display text-[22px] font-bold text-white">{m.title}</span>
          <p className="m-0 max-w-[760px] text-[15px] leading-relaxed text-white/75">{m.desc}</p>
        </div>
      </Container>

      {/* WHERE I FOCUS */}
      <div className="border-t border-hairline bg-panel">
        <Container className="py-22">
          <div className="mb-11 flex flex-col gap-2.5">
            <Eyebrow>EXPERTISE</Eyebrow>
            <h2 className="m-0 font-display text-[38px] font-bold tracking-[-0.5px] text-navy">Where I focus</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map(([title, desc]) => (
              <div key={title} className="flex flex-col gap-2.5 rounded-lg border border-hairline bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,.06)] transition-all hover:border-gold hover:shadow-[0_8px_16px_rgba(0,0,0,.12)]">
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                <h3 className="m-0 font-display text-lg font-semibold text-navy">{title}</h3>
                <p className="m-0 text-sm leading-relaxed text-ink">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA */}
      <Container className="flex flex-col items-center gap-4.5 py-18 text-center">
        <h2 className="m-0 font-display text-4xl font-bold tracking-[-0.5px] text-navy">Let's connect</h2>
        <p className="m-0 max-w-[440px] text-base text-ink">
          Talk digital twins, OT security, or see the platform live on your own facility.
        </p>
        <div className="mt-2 flex gap-3.5">
          <a href={BOOK_A_DEMO_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold px-7 py-3.5 font-display text-[15px] font-bold text-navy no-underline hover:bg-gold-dark">
            Book a Demo →
          </a>
          <Link to="/contact" className="rounded-md border-2 border-gold bg-transparent px-6.5 py-3 font-display text-[15px] font-bold text-navy no-underline hover:bg-gold">
            Contact Me
          </Link>
        </div>
      </Container>
    </>
  )
}
