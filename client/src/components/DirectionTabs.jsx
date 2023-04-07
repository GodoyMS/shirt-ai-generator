import React from 'react'
import { useSnapshot } from 'valtio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import state from '../store';

const DirectionTab = ({ tab,icon,direction, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = snap.cameraDirection==direction 
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }

  return (
    <div
      key={tab.name}
      className={`w-14 h-14 flex justify-center items-center cursor-pointer bottom-3  rounded-full glassmorphism rounded-4`}
      onClick={handleClick}
      style={activeStyles}
    >
    <FontAwesomeIcon icon={icon} />  
     </div>
  )
}

export default DirectionTab