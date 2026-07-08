import { useRef, useCallback } from 'react'

const NAVY = '#1A2D4D'
const GOLD = '#FFB81C'
const GOLD_DARK = '#E6A500'

// Top-to-bottom render order: layer 05 first, 01 last.
const ORDER = [4, 3, 2, 1, 0]

/** Isometric layer stack, matching the original design's CSS-3D plates
 *  (rotateX(58deg) rotateZ(45deg), rounded corners, gold active glow). */
export default function LayerStack3D({ activeIndex, onSelect }) {
  const ctxRef = useRef(null)

  // Soft tick that rises in pitch with the layer number.
  const playLayerBlip = useCallback((index) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const ctx = ctxRef.current || (ctxRef.current = new AudioCtx())
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      const base = 540 + index * 75
      osc.frequency.setValueAtTime(base, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(base * 1.35, ctx.currentTime + 0.07)
      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.15)
    } catch {
      // audio unsupported / blocked — silently skip
    }
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pt-10">
      {ORDER.map((i, pos) => {
        const active = i === activeIndex
        return (
          <button
            key={i}
            type="button"
            title={`Layer ${String(i + 1).padStart(2, '0')}`}
            onClick={() => {
              playLayerBlip(i)
              onSelect(i)
            }}
            className="relative cursor-pointer border-none bg-transparent p-0"
            style={{
              width: 260,
              height: 64,
              marginTop: -18,
              zIndex: 10 - pos,
              transform: active ? 'translateY(-14px)' : 'translateY(0)',
              transition: 'transform .25s',
              overflow: 'visible',
            }}
          >
            <div
              className="grid place-items-center"
              style={{
                width: 240,
                height: 110,
                margin: '0 auto',
                background: active ? GOLD : 'rgba(255,255,255,.92)',
                border: `2px solid ${active ? GOLD_DARK : NAVY}`,
                borderRadius: 14,
                transform: 'rotateX(58deg) rotateZ(45deg)',
                boxShadow: active
                  ? '0 14px 30px rgba(255,184,28,.35)'
                  : '0 8px 18px rgba(26,45,77,.12)',
                transition: 'all .25s',
              }}
            >
              <span
                className="font-display text-xl font-bold"
                style={{ transform: 'rotateZ(-45deg)', color: NAVY }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}
