"use client"

import { useRef, useMemo, type ReactNode } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"

/** Wrapper that bobs/rotates using state.elapsed (R3F v10 compatible; replaces drei Float) */
function FloatGroup({
  children,
  speed = 1,
  rotationIntensity = 0.5,
  floatIntensity = 1,
}: {
  children: ReactNode
  speed?: number
  rotationIntensity?: number
  floatIntensity?: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const offset = useRef(10000 * Math.random())

  useFrame((state) => {
    if (!groupRef.current) return
    const t = offset.current + state.elapsed
    groupRef.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity
    groupRef.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity
    groupRef.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity
    let y = Math.sin(t / 4 * speed) / 10 * floatIntensity
    y = THREE.MathUtils.mapLinear(y, -0.1, 0.1, -0.1, 0.1)
    groupRef.current.position.y = y
  })

  return <group ref={groupRef}>{children}</group>
}

function AnimatedSphere({ position, color, speed, distort, scale }: {
  position: [number, number, number]
  color: string
  speed: number
  distort: number
  scale: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.elapsed * speed * 0.3
      meshRef.current.rotation.y = state.elapsed * speed * 0.2
    }
  })

  return (
    <FloatGroup speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </FloatGroup>
  )
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.elapsed * 0.03
      pointsRef.current.rotation.x = state.elapsed * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8d45a3"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function ConnectionLines() {
  const lineRef = useRef<THREE.Group>(null)

  const lines = useMemo(() => {
    const l = []
    for (let i = 0; i < 15; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      )
      l.push({ start, end })
    }
    return l
  }, [])

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = state.elapsed * 0.02
    }
  })

  return (
    <group ref={lineRef}>
      {lines.map((line, i) => {
        const points = [line.start, line.end]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <lineSegments key={i} geometry={geometry}>
            <lineBasicMaterial
              attach="material"
              color="#4a866d"
              transparent
              opacity={0.15}
            />
          </lineSegments>
        )
      })}
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#dc2626" />
        <pointLight position={[5, -5, 5]} intensity={0.3} color="#0ea5e9" />

        <AnimatedSphere
          position={[-3.5, 1.5, -2]}
          color="#9a69b1"
          speed={1.5}
          distort={0.4}
          scale={1.2}
        />
        <AnimatedSphere
          position={[3.5, -1, -1]}
          color="#71a4bb"
          speed={1}
          distort={0.3}
          scale={0.9}
        />
        <AnimatedSphere
          position={[0, 2.5, -3]}
          color="#b19462"
          speed={0.8}
          distort={0.5}
          scale={0.7}
        />
        <AnimatedSphere
          position={[-2, -2, -2]}
          color="#5ea38c"
          speed={1.2}
          distort={0.35}
          scale={0.5}
        />

        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  )
}
