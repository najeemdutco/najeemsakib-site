import { useRef, useCallback } from 'react'

/** Short sine-wave click blip, ported from the prototype's nav sound. */
export default function useClickBlip() {
  const ctxRef = useRef(null)

  return useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      const ctx = ctxRef.current || (ctxRef.current = new AudioCtx())
      if (ctx.state === 'suspended') ctx.resume()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(920, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(620, ctx.currentTime + 0.1)
      gain.gain.setValueAtTime(0.12, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.13)
    } catch {
      // audio unsupported / blocked — silently skip
    }
  }, [])
}
