import { Canvas } from "@react-three/fiber"
import { Environment,Center, GizmoHelper, GizmoViewport} from "@react-three/drei"
import Shirt from './Shirt'
import { OrbitControls } from "@react-three/drei"
import state from "../store"
import { useSnapshot } from "valtio"
import Backdrop from "./Backdrop"
import CameraRig from "./CameraRig"
const CanvasModel = () => {
  const snap=useSnapshot(state)
  return (
    <Canvas
        shadows
        camera={{position:[0,0,0],fov:40}}
        gl={{ preserveDrawingBuffer: true }}

        className="w-full max-w-full h-full transition-all ease-in"
    >
        <OrbitControls/>
        <GizmoHelper alignment='bottom-right' margin={[100,100]}>
            <GizmoViewport  axisColors={['red','green','blue']} labelColor='black'/>

          </GizmoHelper>

        <ambientLight intensity={0.5}/>
        <Environment preset="city"/>
        <CameraRig>
        {state.intro &&(<Backdrop />) }


            <Center>
                <Shirt />

            </Center>
        </CameraRig>
    </Canvas>
  )
}

export default CanvasModel