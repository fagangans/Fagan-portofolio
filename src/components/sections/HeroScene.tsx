"use client";

import { useRef, useMemo, Component, type ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // Degrade gracefully: fall back to a static gradient backdrop
      // instead of crashing the whole page if WebGL is unavailable.
      return <div className="absolute inset-0 bg-radial-glow" />;
    }
    return this.props.children;
  }
}

function FloatingShape({
  position,
  geometry,
  speed,
}: {
  position: [number, number, number];
  geometry: "torus" | "icosahedron" | "octahedron";
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * speed * 0.3;
      ref.current.rotation.y += delta * speed * 0.4;
    }
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "torus":
        return <torusGeometry args={[0.7, 0.25, 32, 100]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.9, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.9, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        {geo}
        <meshStandardMaterial
          color="#C9A84C"
          metalness={0.9}
          roughness={0.15}
          emissive="#9C8033"
          emissiveIntensity={0.2}
          wireframe={geometry === "icosahedron"}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#C9A84C"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (pointer.y * 1.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#E0C77A" />
      <pointLight position={[-5, -3, 2]} intensity={1.5} color="#C9A84C" />
      <pointLight position={[0, 3, -4]} intensity={1} color="#ffffff" />

      <Particles />
      <FloatingShape position={[-2.6, 1, 0]} geometry="torus" speed={1} />
      <FloatingShape position={[2.8, -0.6, -1]} geometry="icosahedron" speed={0.8} />
      <FloatingShape position={[1.2, 1.8, -2]} geometry="octahedron" speed={1.2} />
      <FloatingShape position={[-2, -1.8, -1.5]} geometry="octahedron" speed={0.9} />

      <Rig />
    </Canvas>
  );
}

export default function HeroScene() {
  return (
    <SceneErrorBoundary>
      <Scene />
    </SceneErrorBoundary>
  );
}
