"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"

// Custom rotating globe component
const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null)
  const dotsRef = useRef<THREE.Points>(null)

  // Rotate on every frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsedTime * 0.08
      globeRef.current.rotation.x = elapsedTime * 0.02
    }
    if (dotsRef.current) {
      dotsRef.current.rotation.y = elapsedTime * 0.08
      dotsRef.current.rotation.x = elapsedTime * 0.02
    }
  })

  // Create points for a dot-globe effect
  const [pointsPositions] = useState(() => {
    const count = 400
    const positions = new Float32Array(count * 3)
    const radius = 2.05

    for (let i = 0; i < count; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  })

  return (
    <group>
      {/* Outer Wireframe Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial
          color="#00B4FF"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Outer Glow Points / Nodes */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00B4FF"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.7}
        />
      </points>

      {/* Inner solid sphere (gives depth by blocking back-wireframes) */}
      <mesh>
        <sphereGeometry args={[1.98, 20, 20]} />
        <meshBasicMaterial
          color="#050A1A"
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Equatorial Ring (Data Flow Accent) */}
      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.3, 0.01, 8, 64]} />
        <meshBasicMaterial
          color="#1565C0"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

export const GlobeScene: React.FC = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-dashed border-[#00B4FF] animate-spin" />
      </div>
    )
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00B4FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1565C0" />
        
        <Globe />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default GlobeScene
