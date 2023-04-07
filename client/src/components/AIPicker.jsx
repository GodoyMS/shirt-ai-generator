import React from 'react'

import CustomButton from './CustomButton';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit,closeEditorTab }) => {
  return (
    <div className="aipicker-container p-4">
        <div onClick={closeEditorTab} className='absolute top-0 right-1 cursor-pointer'><FontAwesomeIcon icon={faClose}/></div>

      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker