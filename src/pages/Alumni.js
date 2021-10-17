import React, { Suspense } from "react";
import ParticleImage, { ParticleOptions } from "react-particle-image";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
};
function Model() {
  const { scene } = useGLTF("/donut48.glb");
  return <primitive object={scene} />;
}
export default function App() {
  // return (
  //     <ParticleImage
  //         src={"Rover.png"}
  //         scale={0.3}
  //         entropy={10}
  //         maxParticles={4200}
  //         particleOptions={particleOptions}
  //     />
  // );
  // return (
  //     <ParticleImage
  //         src={"Rover101.png"}
  //         scale={0.52}
  //         entropy={15}
  //         maxParticles={4200}
  //         particleOptions={particleOptions}
  //     />
  // );
  return (
    <div className="col-12" style={{ height: "100vh" }}>
      <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
        <OrbitControls />
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
