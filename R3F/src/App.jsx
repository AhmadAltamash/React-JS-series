import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { DirectionalLight } from 'three';

const App = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom={true} enablePan enableRotate />

      <DirectionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      
      </Canvas>
  )
};

export default App