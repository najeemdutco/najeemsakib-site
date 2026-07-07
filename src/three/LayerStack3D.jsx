import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Edges, Html, OrthographicCamera } from '@react-three/drei'

function AimedCamera(props) {
  const ref = useRef()
  useEffect(() => {
    ref.current?.lookAt(0, 0.4, 0)
  }, [])
  return <OrthographicCamera ref={ref} {...props} />
}

const NAVY = '#1A2D4D'
const GOLD = '#FFB81C'
const GOLD_DARK = '#E6A500'

function Slab({ index, active, onSelect }) {
  const ref = useRef()
  const targetY = index * 0.62 + (active ? 0.22 : 0)

  useFrame(() => {
    if (!ref.current) return
    ref.current.position.y += (targetY - ref.current.position.y) * 0.15
  })

  return (
    <group ref={ref} position={[0, index * 0.62, 0]}>
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onSelect(index)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
        }}
      >
        <boxGeometry args={[2.6, 0.22, 2.6]} />
        <meshBasicMaterial color={active ? GOLD : '#ffffff'} transparent opacity={active ? 1 : 0.92} />
        <Edges color={active ? GOLD_DARK : NAVY} lineWidth={1.4} />
      </mesh>
      <Html position={[0, 0.15, 0]} center transform={false} style={{ pointerEvents: 'none' }}>
        <span className="font-display text-base font-bold text-navy">{String(index + 1).padStart(2, '0')}</span>
      </Html>
    </group>
  )
}

export default function LayerStack3D({ activeIndex, onSelect }) {
  return (
    <Canvas dpr={[1, 1.75]} gl={{ alpha: true }}>
      <AimedCamera makeDefault position={[6, 5, 6]} zoom={78} near={0.1} far={100} />
      <ambientLight intensity={1.4} />
      <group position={[0, -1.2, 0]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Slab key={i} index={i} active={i === activeIndex} onSelect={onSelect} />
        ))}
      </group>
    </Canvas>
  )
}
