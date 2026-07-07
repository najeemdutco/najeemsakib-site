import { useState } from 'react'
import LayerStack3D from '../three/LayerStack3D.jsx'
import { Container, Eyebrow, SectionHeading, ChipButton, DetailCard, SimpleDetailCard } from '../components/ui/Primitives.jsx'
import { LAYERS, LAYER_ICONS, OT_STEPS, OT_NODE_POS, OT_CHIPS, IOT_NODES, IOT_LINE_ENDPOINTS, INDUSTRIES } from '../data/services.js'
import { BOOK_A_DEMO_URL } from '../data/links.js'

const TABS = [
  { id: 'dt', name: 'Digital Transformation' },
  { id: 'ot', name: 'OT Cybersecurity' },
  { id: 'ai', name: 'AI Transformation' },
]

const AI_BADGES = [
  'Plug & play',
  'Vendor agnostic — works with leading VMS',
  'Deploys on existing cameras',
  'Pre-trained, out-of-the-box models',
  'Unified dashboard',
  'Scales 8 → 160+ rules',
]

function ChipsRow({ items, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([name], i) => (
        <ChipButton key={name} active={i === selected} onClick={() => onSelect(i)}>
          {name}
        </ChipButton>
      ))}
    </div>
  )
}

function DtPanel() {
  const [layer, setLayer] = useState(4)
  const [chip, setChip] = useState(0)
  const lay = LAYERS[layer]
  const showIotMap = layer === 3

  return (
    <Container className="py-18 pb-22">
      <SectionHeading eyebrow="HOW IT WORKS" title="The 5-Layer Live Digital Twin" sub="Click a layer to open it — then click any chip inside for details." />
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div className="sticky top-[100px] flex flex-col items-center gap-2">
          <div className="h-[360px] w-full">
            <LayerStack3D activeIndex={layer} onSelect={setLayer} />
          </div>
          <span className="font-mono text-[11px] tracking-widest text-ink-light">INTERACTIVE 3D MODEL</span>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4.5">
            <span className="grid h-14 w-14 shrink-0 animate-ns-pulse place-items-center rounded-xl bg-gold">
              <svg viewBox="0 0 24 24" width="28" height="28" className="fill-none stroke-navy stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                <path d={LAYER_ICONS[layer]} />
              </svg>
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs font-semibold tracking-widest text-gold">LAYER {lay.num}</span>
              <h3 className="m-0 font-display text-2xl font-bold text-navy">{lay.title}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink">{lay.desc}</p>
            </div>
          </div>

          <ChipsRow items={lay.chips} selected={chip} onSelect={setChip} />
          <DetailCard title={lay.chips[chip][0]} desc={lay.chips[chip][1]} />

          {showIotMap && (
            <div className="dot-grid-dark relative h-[300px] overflow-hidden rounded-xl bg-navy">
              <svg viewBox="0 0 700 300" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                {IOT_LINE_ENDPOINTS.map(([x, y], i) => (
                  <line key={i} x1="350" y1="150" x2={x} y2={y} stroke="#FFB81C" strokeWidth="1.5" strokeDasharray="5 8" opacity=".7" className="animate-ns-dash" />
                ))}
              </svg>
              <div className="animate-ns-pulse absolute left-1/2 top-1/2 grid h-13 w-13 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold font-display text-xs font-bold text-navy">
                TWIN
              </div>
              {IOT_NODES.map((d) => (
                <div key={d.label} className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1" style={{ top: d.top, left: d.left }}>
                  <div className="grid h-8.5 w-8.5 place-items-center rounded-md border-2 border-gold bg-[#2D4A7B] font-mono text-[11px] font-semibold text-gold">
                    {d.glyph}
                  </div>
                  <span className="font-mono text-[9px] tracking-wide text-white/75">{d.label}</span>
                </div>
              ))}
              <span className="absolute bottom-2.5 right-3.5 font-mono text-[9px] tracking-widest text-white/40">
                OPEN PROTOCOLS: MODBUS · BACNET · MQTT · LORAWAN
              </span>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

function OtPanel() {
  const [otStep, setOtStep] = useState(0)
  const [otChip, setOtChip] = useState(0)
  const step = OT_STEPS[otStep]

  return (
    <Container className="py-18 pb-22">
      <SectionHeading
        eyebrow="OT CYBERSECURITY"
        title="Securing the operational world"
        sub="End-to-end OT, IoT and ICS security — from asset discovery to automated remediation. Click each phase of the cycle."
        titleClassName=""
      />
      <div className="mb-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="dot-grid-dark relative h-[440px] rounded-xl bg-navy">
          <svg viewBox="0 0 520 440" className="absolute inset-0 h-full w-full">
            <circle cx="260" cy="220" r="128" fill="none" stroke="#FFB81C" strokeWidth="1.5" strokeDasharray="6 9" opacity=".6" className="origin-[260px_220px] animate-ns-spin-slower" />
          </svg>
          <div className="animate-ns-pulse absolute left-1/2 top-1/2 grid h-22 w-22 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold">
            <svg width="38" height="38" viewBox="0 0 24 24" className="fill-none stroke-navy stroke-[1.9]" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3 L20 6 V11 C20 16.5 16.5 19.8 12 21 C7.5 19.8 4 16.5 4 11 V6 Z M8.5 12 L11 14.5 L15.5 9.5" />
            </svg>
          </div>
          {OT_STEPS.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setOtStep(i)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border-2 px-5 py-2.5 font-display text-[13px] font-bold shadow-[0_6px_18px_rgba(0,0,0,.25)] transition-all hover:border-gold ${
                i === otStep ? 'border-gold bg-gold text-navy' : 'border-white/25 bg-navy-soft text-white'
              }`}
              style={{ top: OT_NODE_POS[i][0], left: OT_NODE_POS[i][1] }}
            >
              {s.label}
            </button>
          ))}
          <span className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] tracking-widest text-white/40">
            INTERACTIVE 3D SECURITY MODEL
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 rounded-lg border border-hairline border-l-4 border-l-gold bg-white px-7 py-6.5 shadow-[0_4px_14px_rgba(26,45,77,.08)]">
            <span className="font-mono text-xs font-semibold tracking-widest text-gold">PHASE {step.num}</span>
            <h3 className="m-0 font-display text-2xl font-bold text-navy">{step.title}</h3>
            <p className="m-0 text-[15px] leading-relaxed text-ink">{step.desc}</p>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {[
              ['75+', 'Cities with honeypot networks'],
              ['12M+', 'Attacks captured daily'],
              ['10M', 'Devices protected'],
              ['24/7', 'Managed OT SOC monitoring'],
            ].map(([n, label]) => (
              <div key={label} className="flex flex-col gap-0.5 rounded-lg bg-panel px-4.5 py-4">
                <span className="font-display text-xl font-bold text-navy">{n}</span>
                <span className="text-xs text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4.5">
        <h3 className="m-0 font-display text-2xl font-bold text-navy">What we deliver</h3>
        <ChipsRow items={OT_CHIPS} selected={otChip} onSelect={setOtChip} />
        <SimpleDetailCard title={OT_CHIPS[otChip][0]} desc={OT_CHIPS[otChip][1]} />
      </div>
    </Container>
  )
}

function AiPanel() {
  const [aiChip, setAiChip] = useState(0)
  const aiModules = LAYERS[4].chips

  return (
    <Container className="py-18 pb-22">
      <SectionHeading eyebrow="AI TRANSFORMATION" title="AI in real operations" />

      <div className="mb-6 flex flex-col gap-5.5 rounded-xl border border-hairline bg-white p-10 shadow-[0_4px_14px_rgba(26,45,77,.08)]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs tracking-wide text-ink-light">POWERED BY MORO HUB</span>
            <h3 className="m-0 font-display text-[28px] font-bold text-navy">IPSP AI Video Analytics</h3>
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <span className="font-display text-2xl font-bold text-navy">95–99.5%</span>
            <span className="font-mono text-[11px] tracking-wide text-ink-light">ACCURACY ACROSS THREAT TYPES</span>
          </div>
        </div>
        <p className="m-0 max-w-[760px] text-[15px] leading-relaxed text-ink text-pretty">
          Human attention fails — operators miss up to 95% of critical events after 22 minutes of continuous
          monitoring. IPSP turns your existing cameras into proactive AI monitors, so security teams act before
          incidents escalate.
        </p>
        <div className="flex flex-wrap gap-2">
          {AI_BADGES.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-gold bg-gold-wash px-3.5 py-1.5 text-[13px] font-semibold text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {b}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">AI MODULES — CLICK TO EXPLORE</span>
          <ChipsRow items={aiModules} selected={aiChip} onSelect={setAiChip} />
          <DetailCard title={aiModules[aiChip][0]} desc={aiModules[aiChip][1]} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3.5 rounded-lg border border-hairline bg-white p-9 shadow-[0_2px_8px_rgba(0,0,0,.06)] transition-all hover:border-gold hover:shadow-[0_8px_16px_rgba(0,0,0,.12)]">
          <span className="self-start rounded border border-gold bg-gold-wash px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-[#B8860B]">
            WILL UPDATE SOON
          </span>
          <h3 className="m-0 font-display text-2xl font-bold text-navy">AI Workflow Automation</h3>
          <span className="font-mono text-xs tracking-wide text-ink-light">INTELLIGENT OPERATIONS</span>
          <p className="m-0 text-[15px] leading-relaxed text-ink text-pretty">
            Automating operational workflows with AI — from alert triage to work-order generation and reporting.
          </p>
          <a href="#" onClick={(e) => e.preventDefault()} className="text-sm font-semibold text-navy no-underline">
            Details coming soon →
          </a>
        </div>
      </div>
    </Container>
  )
}

export default function Services() {
  const [tab, setTab] = useState('dt')

  return (
    <>
      <div className="dot-grid-light border-b border-hairline">
        <Container className="flex flex-col gap-6 pb-12 pt-14">
          <Eyebrow>SERVICES</Eyebrow>
          <h1 className="m-0 max-w-[720px] font-display text-5xl font-bold leading-[1.1] tracking-[-1px] text-navy text-balance">
            One connected platform for facility teams
          </h1>
          <div className="inline-flex w-fit gap-1 rounded-full border border-hairline bg-panel p-1.5">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`cursor-pointer whitespace-nowrap rounded-full px-6.5 py-3 font-display text-[15px] font-bold transition-all ${
                  tab === t.id ? 'bg-navy text-gold shadow-[0_4px_12px_rgba(26,45,77,.25)]' : 'bg-transparent text-ink'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {tab === 'dt' && <DtPanel />}
      {tab === 'ot' && <OtPanel />}
      {tab === 'ai' && <AiPanel />}

      {/* INDUSTRIES */}
      <div className="border-y border-hairline bg-panel">
        <Container className="py-18">
          <SectionHeading eyebrow="WHERE WE FIT" title="Industries served" titleClassName="text-[34px]" />
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="flex flex-col items-center gap-2 rounded-lg border border-hairline bg-white px-3 py-4.5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[0_6px_14px_rgba(26,45,77,.1)]">
                <svg width="28" height="28" viewBox="0 0 24 24" className="fill-none stroke-gold stroke-[1.7]" strokeLinecap="round" strokeLinejoin="round">
                  <path d={ind.icon} />
                </svg>
                <span className="font-display text-sm font-semibold leading-tight text-navy">{ind.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* WHAT YOU GET */}
      <Container className="grid grid-cols-1 items-start gap-14 py-22 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-2.5">
          <Eyebrow>WHAT YOU GET</Eyebrow>
          <h2 className="m-0 font-display text-[34px] font-bold tracking-[-0.5px] text-navy text-balance">Measurable outcomes, not dashboards</h2>
        </div>
        <div className="flex flex-col">
          {[
            'Real-time visibility of any facility, from anywhere',
            'Reduced operational costs and fewer site visits',
            'Enhanced security & safety with automated AI monitoring',
            'Predictive maintenance and smarter shutdown planning',
            'Regulatory readiness with a consolidated audit trail',
          ].map((text, i) => (
            <div key={text} className="flex items-center gap-4 border-b border-hairline py-4.5 last:border-b-0">
              <span className="w-7 font-mono text-[13px] font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-base font-semibold text-navy">{text}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* WHY IT MATTERS + PARTNERSHIP */}
      <div className="border-y border-hairline bg-panel">
        <Container className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            <Eyebrow>WHY THIS MATTERS</Eyebrow>
            <h2 className="m-0 font-display text-[32px] font-bold tracking-[-0.5px] text-navy text-balance">Critical facilities still run on fragmented tools</h2>
            <p className="m-0 text-[15px] leading-loose text-ink text-pretty">
              Siloed dashboards, paper records and manual site visits leave operators blind between inspections. A
              live digital twin closes that gap — every camera, sensor and system in one place, visible from
              anywhere.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            <Eyebrow>THE PARTNERSHIP</Eyebrow>
            <h2 className="m-0 font-display text-[32px] font-bold tracking-[-0.5px] text-navy text-balance">DutcoTennant × PanoRM360 × Morohub</h2>
            <p className="m-0 text-[15px] leading-loose text-ink text-pretty">
              Enterprise delivery backed by DutcoTennant LLC, with 360° capture technology from PanoRM360 and data
              infrastructure from Morohub — proven live at the OMNIEYE command center in Wafi Mall, Dubai.
            </p>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="dot-grid-dark bg-navy">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-18">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 font-display text-[32px] font-bold tracking-[-0.5px] text-white">See it live on your facility.</h2>
            <span className="font-mono text-[13px] text-white/60">najeem.sakib@dutcotenant.com · OMNIEYE, Wafi Mall, Dubai</span>
          </div>
          <a href={BOOK_A_DEMO_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gold px-8 py-3.5 font-display text-base font-bold text-navy no-underline hover:bg-gold-dark">
            Book a Demo →
          </a>
        </Container>
      </div>
    </>
  )
}
