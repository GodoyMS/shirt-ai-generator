import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import state from '../store';

const ColorPicker = ({closeEditorTab}) => {
  const snap = useSnapshot(state);

  return (
    !snap.intro && ( <div className="absolute pr-4 pt-4 left-full ml-3">
              <div onClick={closeEditorTab} className='absolute top-0 right-1 cursor-pointer'><FontAwesomeIcon icon={faClose}/></div>

    <SketchPicker 
      color={snap.color}
      disableAlpha
       onChange={(color) => state.color = color.hex}
    />
  </div>)
   
  )
}

export default ColorPicker