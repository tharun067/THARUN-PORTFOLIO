import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const [isValidModel, setIsValidModel] = useState(false);
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    if (earth.scene) {
      let isValid = true;
      
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Check for NaN values in position attribute
          const position = child.geometry.attributes.position;
          if (position && position.array) {
            for (let i = 0; i < position.array.length; i++) {
              if (isNaN(position.array[i])) {
                console.warn("NaN detected in earth geometry");
                isValid = false;
                break;
              }
            }
          }
          
          // Ensure geometry has valid bounding sphere
          try {
            if (!child.geometry.boundingSphere) {
              child.geometry.computeBoundingSphere();
            }
          } catch (error) {
            console.warn("Error computing bounding sphere:", error);
            isValid = false;
          }
        }
      });
      
      setIsValidModel(isValid);
    }
  }, [earth.scene]);

  if (!isValidModel) {
    return null;
  }

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
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