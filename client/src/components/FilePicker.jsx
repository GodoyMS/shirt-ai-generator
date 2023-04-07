import React from 'react'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile,closeEditorTab }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <div onClick={closeEditorTab} className='absolute top-1 right-1 cursor-pointer'><FontAwesomeIcon icon={faClose}/></div>
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker