import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 3];
      if(isMobile) targetPosition = [0, 0.2, 3];
    } else {
      if(snap.cameraDirection==="left")targetPosition=[-2,0,1]
      if(snap.cameraDirection==="center")targetPosition=[0,0,2]
      if(snap.cameraDirection==="right")targetPosition=[2,0,1.1]

    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, snap.intro ? 0.25 : 1, delta)
    easing.damp
    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })


  return <group ref={group}>{children}</group>
}

export default CameraRig
