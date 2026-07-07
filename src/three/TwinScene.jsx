import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges, Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import { HOME_LAYER_HOTSPOTS, HOME_LAYER_POPUPS, NETWORK_SITES } from '../data/homeLayers.js'

const NAVY = '#1A2D4D'
const GOLD = '#FFB81C'

function clamp01(v) {
  return Math.max(0, Math.min(1, v))
}
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

/** Pulsing gold sensor dot. */
function SensorPing({ position, delay = 0 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() + delay) % 2
    const s = t < 1 ? 1 - t * 0.8 : (t - 1) * 0.8
    if (ref.current) ref.current.material.opacity = 1 - s
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color={GOLD} transparent />
    </mesh>
  )
}

/** ===== Stage 1: MEP room, line-art primitives ===== */
function MepRoom({ opacity }) {
  const visible = opacity > 0.01
  const lineMat = { color: NAVY, transparent: true, opacity }
  return (
    <group visible={visible}>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <planeGeometry args={[6.4, 4.6]} />
        <meshBasicMaterial color={NAVY} transparent opacity={opacity * 0.04} />
        <Edges scale={1} threshold={15}>
          <lineBasicMaterial {...lineMat} />
        </Edges>
      </mesh>
      {/* pump set */}
      <group position={[-0.4, -0.75, 1.2]}>
        <mesh>
          <cylinderGeometry args={[0.42, 0.42, 0.32, 20]} />
          <meshBasicMaterial color={NAVY} wireframe transparent opacity={opacity * 0.5} />
        </mesh>
        <mesh position={[0.55, 0.15, 0]}>
          <boxGeometry args={[0.55, 0.6, 0.55]} />
          <meshBasicMaterial transparent opacity={0}>
          </meshBasicMaterial>
          <Edges><lineBasicMaterial {...lineMat} /></Edges>
        </mesh>
        <SensorPing position={[0, 0.2, 0]} delay={0} />
      </group>
      {/* AHU */}
      <group position={[1.1, -0.1, 1.4]}>
        <mesh>
          <boxGeometry args={[1.1, 1.5, 1.1]} />
          <meshBasicMaterial transparent opacity={0} />
          <Edges><lineBasicMaterial {...lineMat} /></Edges>
        </mesh>
        <mesh>
          <torusGeometry args={[0.32, 0.03, 8, 24]} />
          <meshBasicMaterial color={NAVY} transparent opacity={opacity * 0.5} />
        </mesh>
        <SensorPing position={[0, 0.3, 0.56]} delay={0.6} />
      </group>
      {/* electrical panel */}
      <group position={[-1.6, -0.35, 0.2]}>
        <mesh>
          <boxGeometry args={[0.7, 1.05, 0.35]} />
          <meshBasicMaterial transparent opacity={0} />
          <Edges><lineBasicMaterial {...lineMat} /></Edges>
        </mesh>
      </group>
      {/* ceiling duct */}
      <mesh position={[0, 1.35, 0.4]}>
        <boxGeometry args={[3.5, 0.3, 0.3]} />
        <meshBasicMaterial transparent opacity={0} />
        <Edges><lineBasicMaterial {...lineMat} /></Edges>
      </mesh>
      {/* vertical risers */}
      {[0.5, 0.8, 1.1].map((x, i) => (
        <mesh key={i} position={[x, -0.1, 1.9]}>
          <cylinderGeometry args={[0.04, 0.04, 2.6, 8]} />
          <meshBasicMaterial color={NAVY} transparent opacity={opacity * 0.5} />
        </mesh>
      ))}
      <SensorPing position={[0.55, 0.75, 1.8]} delay={1.2} />
    </group>
  )
}

/** ===== Stage 2: wireframe tower ===== */
function Tower({ opacity, roomGlow }) {
  const visible = opacity > 0.01
  return (
    <group visible={visible} position={[0, 2.6, 0]}>
      <mesh>
        <boxGeometry args={[3, 9, 3]} />
        <meshBasicMaterial transparent opacity={0} />
        <Edges threshold={1}>
          <lineBasicMaterial color={NAVY} transparent opacity={opacity} />
        </Edges>
      </mesh>
      {/* floor slab lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[0, -4.2 + i * 0.95, 0]}>
          <boxGeometry args={[3.02, 0.01, 3.02]} />
          <meshBasicMaterial color={NAVY} transparent opacity={opacity * 0.35} />
        </mesh>
      ))}
      {/* highlighted MEP floor */}
      <mesh position={[0, -4.0, 0]}>
        <boxGeometry args={[3.05, 0.5, 3.05]} />
        <meshBasicMaterial color={GOLD} transparent opacity={roomGlow * 0.35} />
      </mesh>
      {/* rooftop antenna */}
      <mesh position={[0, 4.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 6]} />
        <meshBasicMaterial color={NAVY} transparent opacity={opacity * 0.6} />
      </mesh>
      <mesh position={[0, 5.15, 0]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshBasicMaterial color={GOLD} transparent opacity={opacity} />
      </mesh>
    </group>
  )
}

/** ===== Stage 3: multi-site network + command center ===== */
function CommandNetwork({ satOpacity, hubOpacity }) {
  const visible = hubOpacity > 0.01 || satOpacity > 0.01
  const sites = useMemo(
    () =>
      NETWORK_SITES.map((s) => {
        const rad = (s.angle * Math.PI) / 180
        return { ...s, x: Math.cos(rad) * s.radius, z: Math.sin(rad) * s.radius }
      }),
    [],
  )
  return (
    <group visible={visible}>
      {sites.map((s, i) => (
        <group key={s.label}>
          <Line
            points={[
              [0, 0, 0],
              [s.x, 0, s.z],
            ]}
            color={GOLD}
            transparent
            opacity={satOpacity * 0.7}
            dashed
            dashSize={0.35}
            gapSize={0.25}
          />
          <mesh position={[s.x, 0, s.z]}>
            <boxGeometry args={[0.55, 0.55, 0.55]} />
            <meshBasicMaterial transparent opacity={0} />
            <Edges><lineBasicMaterial color={NAVY} transparent opacity={satOpacity} /></Edges>
          </mesh>
          <Html position={[s.x, -0.5, s.z]} center distanceFactor={16} transform={false} style={{ pointerEvents: 'none', opacity: satOpacity }}>
            <span className="whitespace-nowrap font-mono text-[10px] tracking-widest text-ink">{s.label}</span>
          </Html>
        </group>
      ))}
      {/* command center hub */}
      <group scale={hubOpacity}>
        <mesh>
          <sphereGeometry args={[0.62, 24, 24]} />
          <meshBasicMaterial color={NAVY} transparent opacity={hubOpacity} />
        </mesh>
        <mesh scale={0.78}>
          <sphereGeometry args={[0.62, 24, 24]} />
          <meshBasicMaterial color={GOLD} transparent opacity={hubOpacity} />
        </mesh>
      </group>
      <Html position={[0, -0.9, 0]} center transform={false} style={{ pointerEvents: 'none', opacity: hubOpacity }}>
        <span className="whitespace-nowrap font-mono text-xs font-semibold tracking-widest text-navy">
          COMMAND CENTER — EVERY SITE, ONE PLACE
        </span>
      </Html>
    </group>
  )
}

function CameraRig({ progress }) {
  const target = useRef(new THREE.Vector3(0, 0.4, 0))
  useFrame(({ camera }) => {
    const pA = clamp01(progress / 0.45)
    const pB = clamp01((progress - 0.5) / 0.5)
    const eA = easeInOutQuad(pA)
    const eB = easeInOutQuad(pB)

    const room = new THREE.Vector3(1.5, 0.9, 5.2)
    const building = new THREE.Vector3(4, 5, 11)
    const network = new THREE.Vector3(0.4, 15.5, 0.8)

    const p1 = room.clone().lerp(building, eA)
    const p2 = p1.clone().lerp(network, eB)

    const lookRoom = new THREE.Vector3(0, 0.2, 0.8)
    const lookBuilding = new THREE.Vector3(0, 1.5, 0)
    const lookNetwork = new THREE.Vector3(0, 0, 0)
    const l1 = lookRoom.clone().lerp(lookBuilding, eA)
    const l2 = l1.clone().lerp(lookNetwork, eB)

    camera.position.lerp(p2, 0.12)
    target.current.lerp(l2, 0.12)
    camera.lookAt(target.current)
  })
  return null
}

export default function TwinScene({ progress, selectedLayer }) {
  const pA = clamp01(progress / 0.45)
  const pB = clamp01((progress - 0.5) / 0.5)
  const eA = easeInOutQuad(pA)
  const eB = easeInOutQuad(pB)

  const roomOpacity = clamp01(1 - eA * 1.5)
  const buildingIn = clamp01((eA - 0.35) / 0.65)
  const buildingOpacity = buildingIn * (1 - eB)
  const roomGlow = clamp01(buildingIn - eB)
  const satOpacity = clamp01((eB - 0.25) / 0.75)
  const hubOpacity = clamp01((eB - 0.45) / 0.55)

  return (
    <>
      <CameraRig progress={progress} />
      <ambientLight intensity={1.2} />
      <MepRoom opacity={roomOpacity} />
      <Tower opacity={buildingOpacity} roomGlow={roomGlow} />
      <CommandNetwork satOpacity={satOpacity} hubOpacity={hubOpacity} />

      {roomOpacity > 0.15 &&
        HOME_LAYER_HOTSPOTS.map((pos, i) => (
          <Html key={i} position={pos} center transform={false} style={{ pointerEvents: 'none', opacity: selectedLayer === i ? roomOpacity : 0, transition: 'opacity .3s' }}>
            <div className="rounded-md border border-hairline bg-navy px-3 py-1.5 font-mono text-[11px] font-medium text-gold shadow-lg whitespace-nowrap">
              {HOME_LAYER_POPUPS[i]}
            </div>
          </Html>
        ))}
    </>
  )
}
