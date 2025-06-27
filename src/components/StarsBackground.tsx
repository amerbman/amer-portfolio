// src/components/ParticlesBackground.tsx
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, BufferAttribute, AdditiveBlending } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 bg-black">
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles />
        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);

  const PARTICLE_COUNT = 10000;
  const FIELD_SIZE     = 10;   // half‐extent of the initial cube
  const SPEED          = 0.5;  // units per second along Z

  const texture = useLoader(TextureLoader, "/textures/particles/8.png");

  // Spectral class weights (approximate % of stars):
  const spectral = [
  { color: "#ffcc6f", weight: 50 }, // M-type  (red/orange, coolest stars)
  { color: "#ffd7a1", weight:  5 }, // K-type  (orange)
  { color: "#fff4ea", weight:  5 }, // G-type  (yellow/white, like our Sun)
  { color: "#f5faff", weight:  5 }, // F-type  (white)
  { color: "#cad7ff", weight: 35 }, // A-type  (white-blue)
  { color: "#aabfff", weight: 35 }, // B-type  (blue-white)
  { color: "#3330E4", weight:  50 }, // O-type  (true blue, hottest & rarest)
];
  // pick one color by weight
  function pickSpectralColor(): THREE.Color {
    let sum = spectral.reduce((acc, s) => acc + s.weight, 0);
    let r = Math.random() * sum;
    for (const { color, weight } of spectral) {
      if (r < weight) return new THREE.Color(color);
      r -= weight;
    }
    return new THREE.Color(spectral[0].color);
  }

  // build geometry + per‐vertex colors once
  const geometry = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // position in a cube
      positions[i3    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * FIELD_SIZE * 2;

      // assign a spectral‐weighted color
      const c = pickSpectralColor();
      colors[i3    ] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("color",    new BufferAttribute(colors,    3));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        alphaMap: texture,
        depthWrite: false,
        blending: AdditiveBlending,
        vertexColors: true,
      }),
    [texture]
  );

  // animate stars moving toward camera
  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    const posAttr = pointsRef.current.geometry.attributes.position as BufferAttribute;
    const arr     = posAttr.array as Float32Array;

    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 2] += SPEED * dt;
      if (arr[i + 2] > FIELD_SIZE) {
        arr[i    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        arr[i + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        arr[i + 2] = -FIELD_SIZE;
      }
    }
    posAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
