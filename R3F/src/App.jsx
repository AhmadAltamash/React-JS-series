import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react';

const RotatatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })

  return (
    <mesh ref={meshRef} >
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color='#468585' emissive='#468585' />

      <Sparkles count={100} size={6} speed={0.0002} scale={1} noise={0.2}  />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[5, 1, 5]} intensity={10} color={0x9CDBA6} />
      
      <color attach='background' args={['#F0F0F0']}/>

      <RotatatingCube/>

      </Canvas>
  )
};

export default App