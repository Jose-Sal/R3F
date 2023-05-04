import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
// import { TorusKnotGeometry } from 'three'
import {Html, Sparkles,useTexture, useGLTF, OrbitControls, ScrollControls} from '@react-three/drei'
// dont forget to add jsx right after the Experience import
import Experience from './Experience.jsx'
import Interface from './Interface.jsx'
import { Overlay } from './components/Overlay'
const root = ReactDOM.createRoot(document.querySelector('#root'))

// will be using hooks which are specific to r3f
root.render(
    // <>
    /* canvas parent is the root fropm the html file  and changing the camera FOV and position*/
        <Canvas camera={{position: [0,1,5]}} >
            <color args={['#030202']} attach ="background"/>
        {/* directional light to have a glare on the planet  */}
        <directionalLight position={[1,2,3]} intensity={1}/>
        <Sparkles size={6} scale={[200,200,400]}  speed={2} count={1000}/>
            {/* creates the object*/}
            {/* <Experience /> */}
            <mesh  position={[-2,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[0,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[2,0,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[-2,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[0,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <mesh  position={[2,-2,0]}>
                <boxGeometry />
                <meshStandardMaterial color={"green"}/>
            </mesh>
            {/* <Interface /> */}
            {/* <Overlay /> */}
        </Canvas>

        // <Interface />
    // </>
)