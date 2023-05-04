//////////////////////////////////////////////////////////////////////////////////
import {Html, Sparkles,useTexture, useGLTF, OrbitControls, ScrollControls} from '@react-three/drei'
import { Planets } from './components/Planets'
import { Overlay } from './components/Overlay'

export default function Experience()
{
    // get our model objects and convert to node
    const {nodes} = useGLTF('./models/alltogether.glb')
    console.log(nodes)
    const AlderaanTexture= useTexture('./models/Alderaan.jpg')
    AlderaanTexture.flipY=false
    console.log(AlderaanTexture)
    return<>
        {/* have the background be a dark color */}
        <color args={['#030202']} attach ="background"/>
        {/* directional light to have a glare on the planet  */}
        <directionalLight position={[1,2,3]} intensity={1}/>
        {/* <ambientLight intensity={0.5} /> */}
        {/* cannot zoom */}
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1} />
        {/* expect to scroll 8 times */}
        <ScrollControls pages={9} damping={10}>
            <mesh>
                {/* <sphereGeometry /> */}
                <meshStandardMaterial color={"green"}/>
            </mesh>
            {/* we use spoarkles to replicate stars in the background */}
            <Sparkles size={6} scale={[200,200,400]}  speed={2} count={1000}/>
            {/* create the geometry for our planets along with adding the materials with it */}
            <Overlay />
            <Planets />            
        </ScrollControls>
    </>
    
}