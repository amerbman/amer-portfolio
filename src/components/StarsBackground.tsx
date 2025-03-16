import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarsBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default StarsBackground;
