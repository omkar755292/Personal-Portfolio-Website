import React from 'react'
import downloadIcon from '../asset/icons/file.png'

const DownloadCV = () => {
  return (
    <div id='download-resume'>
      <a href='https://mediaserver.omkarcodes.online/media/documents/omkarpanchal_resume.pdf' target='blank'>
        <img className='download-icon' src={downloadIcon} alt='icon'></img>  Resume</a>
    </div>
  )
}

export default DownloadCV