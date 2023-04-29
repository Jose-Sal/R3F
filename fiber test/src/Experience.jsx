// import {OrbitControls} from '@react-three/drei'
// export default function Experience()
// {
//     // react three fiber HOOKS only here since it is a component

//     return <>
//     {/* to cahnge the scale all we giotta do is change the mesh */}
//             <OrbitControls />
//             <mesh rotation-y={Math.PI*0.23} position-x={2} scale={1.5}>
//                 {/* to specify the parameter for the sphere by using args*/}
//                 {/* <sphereGeometry args={[1.5, 32, 32]}/> */}
//                 <boxGeometry scale={1.5}/>
//                 <meshBasicMaterial color="purple"/>
//             </mesh>
//             <mesh position-x={-2}>
//                 <sphereGeometry />
//                 <meshBasicMaterial color="orange" />
//             </mesh>
//             <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
//                 <planeGeometry />
//                 <meshBasicMaterial color="green" />
//             </mesh>
//     </>
// }
//////////////////////////////////////////////////////////////////////////////////
import {Sparkles,useTexture, useGLTF, OrbitControls, ScrollControls} from '@react-three/drei'

export default function Experience()
{
    const {nodes} = useGLTF('./models/alltogether.glb')
    console.log(nodes)
    const AlderaanTexture= useTexture('./models/Alderaan.jpg')
    AlderaanTexture.flipY=false
    console.log(AlderaanTexture)
    return<>

        <color args={['#030202']} attach="background"/>
        <directionalLight position={[1,2,3]} intensity={1}/>
        {/* <ambientLight intensity={0.5} /> */}
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
            <mesh>
                {/* <sphereGeometry /> */}
                <meshStandardMaterial color={"green"}/>
            </mesh>
            <Sparkles size={6} scale={[200,200,400]} position-z={-5} speed={2} count={1000}/>
            <mesh geometry={nodes.Alderaan.geometry}>
                <meshBasicMaterial map={AlderaanTexture} />
            </mesh>
        </ScrollControls>
    </>
    
}