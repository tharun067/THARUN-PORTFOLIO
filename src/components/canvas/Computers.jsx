import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [hasError, setHasError] = useState(false);
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (computer.scene) {
      let foundError = false;
      
      computer.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Check for NaN values in position attribute
          const position = child.geometry.attributes.position;
          if (position && position.array) {
            for (let i = 0; i < position.array.length; i++) {
              if (isNaN(position.array[i])) {
                console.warn("NaN detected in computer geometry");
                foundError = true;
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
            foundError = true;
          }
        }
      });
      
      setHasError(foundError);
    }
  }, [computer.scene]);

  if (hasError) {
    // Return a fallback 3D object
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <mesh
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        >
          <boxGeometry args={[2, 1.5, 1]} />
          <meshStandardMaterial color="#915EFF" />
        </mesh>
      </mesh>
    );
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => console.error("Canvas error:", error)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;