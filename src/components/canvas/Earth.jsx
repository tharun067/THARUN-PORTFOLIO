import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  try {
    const earth = useGLTF("./planet/scene.gltf");
    
    // Validate the geometry before rendering
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Check for NaN values in position attribute
          const position = child.geometry.attributes.position;
          if (position && position.array) {
            for (let i = 0; i < position.array.length; i++) {
              if (isNaN(position.array[i])) {
                console.warn("NaN detected in geometry, skipping model");
                return null;
              }
            }
          }
          // Ensure geometry has valid bounding sphere
          if (!child.geometry.boundingSphere) {
            child.geometry.computeBoundingSphere();
          }
        }
      });
    }

    return (
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
  } catch (error) {
    console.error("Error loading Earth model:", error);
    return null;
  }
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onError={(error) => console.error("Canvas error:", error)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
