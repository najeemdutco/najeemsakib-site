import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import TwinScene from './TwinScene.jsx'
import { HOME_LAYERS } from '../data/homeLayers.js'

export default function HomeHeroZoom() {
  const wrapRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [selectedLayer, setSelectedLayer] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = r.height - vh
      const p = Math.max(0, Math.min(1, -r.top / (total || 1)))
      setProgress((prev) => (Math.abs(p - prev) > 0.003 ? p : prev))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sel = HOME_LAYERS[selectedLayer]
  const liveLabel =
    progress > 0.75 ? '6 SITES · 142 DEVICES ONLINE' : progress > 0.4 ? 'FACILITY 01 · 38 DEVICES ONLINE' : 'MEP ROOM · 9 DEVICES ONLINE'
  const hintOpacity = Math.max(0, 1 - progress * 3)

  return (
    <div ref={wrapRef} className="relative" style={{ height: '300vh' }}>
      <div className="sticky top-[86px] flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="relative h-full w-full max-w-[1240px]">
          <Canvas camera={{ fov: 42, position: [1.5, 0.9, 5.2] }} dpr={[1, 1.75]}>
            <TwinScene progress={progress} selectedLayer={selectedLayer} />
          </Canvas>

          {/* LAYER RAIL */}
          <div className="absolute left-2 top-1/2 flex -translate-y-1/2 flex-col gap-3">
            {HOME_LAYERS.map((l, i) => {
              const on = i === selectedLayer
              return (
                <button
                  key={l.num}
                  onClick={() => setSelectedLayer(i)}
                  title={l.title}
                  className={`flex cursor-pointer items-center gap-3 rounded-full border-2 py-2 pl-2 pr-4.5 shadow-[0_4px_14px_rgba(26,45,77,.12)] transition-all hover:translate-x-1 hover:border-gold ${
                    on ? 'border-navy bg-navy' : 'border-hairline bg-white'
                  }`}
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-full ${on ? 'bg-gold' : 'bg-panel'}`}>
                    <svg viewBox="0 0 24 24" width="22" height="22" className="fill-none stroke-navy stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                      <path d={l.icon} />
                    </svg>
                  </span>
                  <span className="flex flex-col items-start gap-0.5">
                    <span className={`font-mono text-[10px] tracking-widest ${on ? 'text-gold' : 'text-ink-light'}`}>LAYER {l.num}</span>
                    <span className={`whitespace-nowrap font-display text-sm font-semibold ${on ? 'text-white' : 'text-navy'}`}>{l.title}</span>
                  </span>
                </button>
              )
            })}
          </div>

          {/* SELECTED LAYER PANEL */}
          <div className="absolute right-2 top-4.5 flex w-[290px] flex-col gap-2 rounded-lg border border-hairline border-l-[3px] border-l-gold bg-white px-5 py-4.5 shadow-[0_8px_24px_rgba(26,45,77,.12)]">
            <span className="font-mono text-[11px] font-semibold tracking-widest text-gold">LAYER {sel.num}</span>
            <span className="font-display text-lg font-bold text-navy">{sel.title}</span>
            <p className="m-0 text-[13px] leading-snug text-ink">{sel.desc}</p>
          </div>

          {/* LIVE BADGE */}
          <div className="absolute bottom-16 right-2 flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 shadow-[0_2px_8px_rgba(26,45,77,.08)]">
            <span className="h-2 w-2 animate-ns-blink rounded-full bg-[#2BA05A]" />
            <span className="font-mono text-[11px] tracking-wide text-navy">{liveLabel}</span>
          </div>

          {/* SCROLL HINT */}
          <div
            className="absolute bottom-3.5 left-1/2 flex -translate-x-1/2 animate-ns-bob items-center gap-2 transition-opacity"
            style={{ opacity: hintOpacity }}
          >
            <span className="font-mono text-xs tracking-widest text-ink-light">SCROLL TO ZOOM OUT ↓</span>
          </div>
        </div>
      </div>
    </div>
  )
}
