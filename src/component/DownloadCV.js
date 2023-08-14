import React from 'react'
import omkar_panchal_CV from "../asset/omkar_panchal_CV.pdf";

const DownloadCV = () => {
  return (
    <>
    <a href={omkar_panchal_CV} download="omkar_panchal_CV.pdf">Download_CV</a>
    </>
  )
}

export default DownloadCV