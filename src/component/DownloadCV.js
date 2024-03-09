import React from 'react'
import omkar_panchal_resume from "../asset/omkarpanchal_resume.pdf";

const DownloadCV = () => {
  return (
    <>
    <a href={omkar_panchal_resume} download="omkarpanchal_resume.pdf">Resume</a>
    </>
  )
}

export default DownloadCV