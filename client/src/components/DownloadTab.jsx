import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';

const DownloadTab = ({ tab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =    { backgroundColor: 'skyblue', opacity: 0.5 }
    

  return (
    <div
      key={tab.name}
      className={`tab-btn rounded-full glassmorphism `}
      onClick={handleClick}
      style={activeStyles}
    >
      <img 
        src={tab.icon}
        alt={tab.name}
        className={`w-2/3 h-2/3  object-contain`}
      />
    </div>
  )
}

export default DownloadTab