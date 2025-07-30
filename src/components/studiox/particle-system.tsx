"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function ParticleSystem() {
  const meshRef = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const { pointer, viewport } = useThree()

  const particleCount = 800
  const connectionDistance = 0.8

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const connections: number[] = []

    // Create particles in a spherical distribution
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < connectionDistance) {
          connections.push(i, j)
        }
      }
    }

    return { positions, connections }
  }, [])

  const linePositions = useMemo(() => {
    const linePositions = new Float32Array(connections.length * 3)
    for (let i = 0; i < connections.length; i += 2) {
      const particleA = connections[i]
      const particleB = connections[i + 1]

      linePositions[i * 3] = positions[particleA * 3]
      linePositions[i * 3 + 1] = positions[particleA * 3 + 1]
      linePositions[i * 3 + 2] = positions[particleA * 3 + 2]

      linePositions[(i + 1) * 3] = positions[particleB * 3]
      linePositions[(i + 1) * 3 + 1] = positions[particleB * 3 + 1]
      linePositions[(i + 1) * 3 + 2] = positions[particleB * 3 + 2]
    }
    return linePositions
  }, [positions, connections])

  useFrame(() => {
    if (!meshRef.current || !lineRef.current) return

    // Rotate the entire particle system
    meshRef.current.rotation.y += 0.002
    meshRef.current.rotation.x += 0.001
    lineRef.current.rotation.y += 0.002
    lineRef.current.rotation.x += 0.001

    // Mouse interaction
    const mouseX = (pointer.x * viewport.width) / 2
    const mouseY = (pointer.y * viewport.height) / 2

    const geometry = meshRef.current.geometry
    const positionAttribute = geometry.attributes.position
    const originalPositions = positions

    // Update particle positions based on mouse proximity
    for (let i = 0; i < particleCount; i++) {
      const x = originalPositions[i * 3]
      const y = originalPositions[i * 3 + 1]
      const z = originalPositions[i * 3 + 2]

      const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2 + z ** 2)

      const influence = Math.max(0, 1 - distance / 2)
      const repulsion = influence * 0.3

      positionAttribute.setXYZ(i, x + (x - mouseX) * repulsion, y + (y - mouseY) * repulsion, z + z * repulsion * 0.1)
    }

    positionAttribute.needsUpdate = true
  })

  return (
    <>
      {/* Particles */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Connection lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </lineSegments>

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </>
  )
}
