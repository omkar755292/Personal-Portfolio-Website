import React from 'react'
import omkar_panchal_resume from "../asset/omkarpanchal_resume.pdf";
import downloadIcon from '../asset/icons/file.png'

const DownloadCV = () => {
  const handleDownload = () => {
    window.open(omkar_panchal_resume, '_blank');
  }
  return (
    <div id='download-resume'>
      <button onClick={handleDownload} >
        <img className='download-icon' src={downloadIcon} alt='icon'></img>  Resume</button>
    </div>
  )
}

export default DownloadCV