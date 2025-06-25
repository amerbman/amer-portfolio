// src/components/ParticlesBackground.tsx
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, BufferAttribute, AdditiveBlending } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);

  // tune these to taste:
  const PARTICLE_COUNT = 10000;
  const FIELD_SIZE = 10;      // half-extent of the initial cube
  const SPEED = 0.5;            // units per second along Z

  const texture = useLoader(TextureLoader, "/textures/particles/8.png");

  // build geometry + material once
  const geometry = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // spread in a cube from −FIELD_SIZE → +FIELD_SIZE
      positions[i3    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      // random greyscale or color
      colors[i3    ] = Math.random();
      colors[i3 + 1] = Math.random();
      colors[i3 + 2] = Math.random();
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
        // vertexColors: true,
      }),
    [texture]
  );

  // on each frame, push stars forward along +Z
  useFrame((_, delta) => {
    const posAttr = pointsRef.current.geometry.attributes.position as BufferAttribute;
    const posArr = posAttr.array as Float32Array;

    for (let i = 0; i < posArr.length; i += 3) {
      posArr[i + 2] += SPEED * delta;
      // if it's moved past the camera plane, reset it to the back
      if (posArr[i + 2] > FIELD_SIZE) {
        posArr[i    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        posArr[i + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        posArr[i + 2] = -FIELD_SIZE;
      }
    }

    posAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

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
