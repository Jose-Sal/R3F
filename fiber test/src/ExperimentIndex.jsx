// import { createRoot } from 'react-dom/client'
// import './styles.css'
// import App from './App'
import { Overlay } from './ExperimentOverlay'
import ReactDOM from 'react-dom/client'
import App from './Experiement.jsx' 

const root = ReactDOM.createRoot(document.querySelector('#Filmroot'))

root.render(
  <>
     {/* <Canvas eventSource={document.getElementById('Filmroot')} eventPrefix="client" camera={{ position: [0, 0, -4], fov: 10 }}> */}
        <App />
        <Overlay />
    {/* </Canvas> */}
    
 </>
)
