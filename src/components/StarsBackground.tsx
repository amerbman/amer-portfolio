// src/components/StarsBackground.tsx
// This component sets up the full-screen starfield background
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, BufferAttribute, AdditiveBlending } from "three";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

// Main export: wraps the Three.js canvas and renders the Stars component
export default function StarsBackground() {
  return (
    // full-screen fixed container with black background
    <div className="fixed inset-0 bg-black">
      {/* Canvas is the R3F entry point; camera positioned at z=3 */}
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
        {/* ambient light to softly illuminate sprites */}
        <ambientLight intensity={0.5} />
        {/* render the star points */}
        <Stars />
        {/* optional orbit controls for interactive damping */}
        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}

// Stars component: generates and animates a cloud of colored point sprites
function Stars() {
  // ref to the Points object so we can update positions each frame
  const pointsRef = useRef<THREE.Points>(null!);

  // configuration constants
  const PARTICLE_COUNT = 10000; // number of star points
  const FIELD_SIZE     = 10;    // half-size of cubic field
  const SPEED          = 0.5;   // movement speed along Z axis

  // load the particle texture for alpha-sprite
  const texture = useLoader(TextureLoader, "/textures/particles/8.png");

  // color distribution weights for different star types
  const spectral = [
    { color: "#ffcc6f", weight: 50 }, // M-type (warm orange)
    { color: "#ffd7a1", weight:  5 }, // K-type (light orange)
    { color: "#fff4ea", weight:  5 }, // G-type (yellow/white)
    { color: "#f5faff", weight:  5 }, // F-type (white)
    { color: "#cad7ff", weight: 35 }, // A-type (pale blue)
    { color: "#aabfff", weight: 35 }, // B-type (blue-white)
    { color: "#3330E4", weight: 50 }, // O-type (deep blue)
  ];

  // picks a random spectral color based on weights
  function pickSpectralColor(): THREE.Color {
    const totalWeight = spectral.reduce((sum, s) => sum + s.weight, 0);
    let r = Math.random() * totalWeight;
    for (const { color, weight } of spectral) {
      if (r < weight) {
        // return new Color from hex string
        return new THREE.Color(color);
      }
      r -= weight;
    }
    // fallback to first color if something goes wrong
    return new THREE.Color(spectral[0].color);
  }

  // useMemo to build geometry & color buffers only once
  const geometry = useMemo(() => {
    // flat arrays for positions and RGB colors
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors    = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // random position inside a cube
      positions[i3    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * FIELD_SIZE * 2;

      // assign each star a color via weighted spectral picker
      const c = pickSpectralColor();
      colors[i3    ] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    // create BufferGeometry and attach attributes
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    geo.setAttribute("color",    new BufferAttribute(colors,    3));
    return geo;
  }, []);

  // create a PointsMaterial for rendering sprites
  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.1,             // sprite size
        sizeAttenuation: true, // perspective scale
        transparent: true,     // enable alpha
        alphaMap: texture,     // use loaded texture
        depthWrite: false,     // let overlapping sprites blend
        blending: AdditiveBlending, // glow effect
        vertexColors: true,    // read per-vertex color attribute
      }),
    [texture]
  );

  // useFrame runs on every animation frame
  useFrame((_, delta) => {
    // clamp delta to avoid big jumps when tab is hidden
    const dt = Math.min(delta, 0.1);
    // get the position attribute array
    const posAttr = pointsRef.current.geometry.attributes.position as BufferAttribute;
    const arr     = posAttr.array as Float32Array;

    // move each star forward along Z, respawn when past camera
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 2] += SPEED * dt;
      if (arr[i + 2] > FIELD_SIZE) {
        // reset to back of field
        arr[i    ] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        arr[i + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
        arr[i + 2] = -FIELD_SIZE;
      }
    }
    // flag attribute update
    posAttr.needsUpdate = true;
  });

  // render the points
  return <points ref={pointsRef} geometry={geometry} material={material} />;
}
