import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const AnimatedCube = ({ isMobile }) => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
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
      
      {/* Main animated cube */}
      <mesh
        ref={meshRef}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [0, -2, 0] : [0, -2.5, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial 
          color="#915EFF" 
          metalness={0.8}
          roughness={0.2}
          emissive="#915EFF"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 0.8) * 4,
            Math.cos(i * 0.6) * 2 - 1,
            Math.sin(i * 0.4) * 3
          ]}
          scale={0.2}
        >
          <sphereGeometry args={[1, 6, 6]} />
          <meshStandardMaterial
            color="#00cea8"
            emissive="#00cea8"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}

      {/* Wireframe outline */}
      <mesh
        scale={isMobile ? 1.6 : 2.1}
        position={isMobile ? [0, -2, 0] : [0, -2.5, 0]}
      >
        <boxGeometry args={[2, 1.5, 1]} />
        <meshBasicMaterial 
          color="#ffffff" 
          wireframe={true}
          opacity={0.3}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
        <AnimatedCube isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;