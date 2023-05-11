import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import { useStore } from './store'

export default function App() {
  return (
    <Canvas eventSource={document.getElementById('Filmroot')} eventPrefix="client" camera={{ position: [1, 0, 4], fov:60 }}>
        <color args={['#030202']} attach ="background"/>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      {/* <Environment preset="city" background blur={1} /> */}
      {/* <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={1} /> */}
      <Selector>
        <Shoe position={[-1,0,0]}/>
        {/* <Shoe position={[0, 0, 0]} /> */}
      </Selector>
      
     </Canvas>
  )
}

function Selector({ children }) {
  const store = useStore()

  return (
    <>

      <group
        // onPointerOver={() => (store.open = true)}
        // onPointerEnter={() => (store.open = true)}

        // onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        // onPointerUp={() => (store.open = false)}
        >
        {children}
      </group>
    </>
  )
}

function Shoe(props) {
  const ref = useRef()

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>

    </group>
  )
}