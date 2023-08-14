import React from 'react'
import DownloadCV from './DownloadCV'
import StartProject from './StartProject'

const Footer = () => {
  return (
    <footer>
      <StartProject />
      <div className="footer-links">
      <a href="https://www.linkedin.com/in/omkar-panchal-cse13021">Linkedin</a>
          <a href="https://github.com/omkar755292">GitHub</a>
          <a href="https://www.instagram.com/onkaar._/">Facebook</a>
          <a href="https://www.instagram.com/onkaar._/">Instagram</a>
          <DownloadCV />
      </div>
    </footer>
  )
}

export default Footer