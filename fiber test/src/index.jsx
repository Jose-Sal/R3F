import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { TorusKnotGeometry } from 'three'
// dont forget to add jsx right after the Experience import
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

// we didnt have to create the scene
// scene is rendered on each frame
// didnt have to place a perspective camera (have a camera by default)
// didnt have to import the mesh
// 

// will be using hooks which are specific to r3f
root.render(
    // <>
    /* canvas parent is the root fropm the html file */
        <Canvas>
            {/* creates the object
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh> */}
            <Experience />
        </Canvas>
    // </>
)