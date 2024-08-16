import React from 'react'
import { Link } from 'react-router-dom';
import DownloadCV from './DownloadCV'
import StartProject from './StartProject'

const Footer = () => {
  return (
    <footer>
      <StartProject />
      <div className="footer-links">
        <Link to="https://www.linkedin.com/in/omkar-panchal-cse13021">Linkedin</Link>
        <Link to="https://github.com/omkar755292">GitHub</Link>
        <Link to="https://www.instagram.com/onkaar._/">Facebook</Link>
        <Link to="https://www.instagram.com/onkaar._/">Instagram</Link>
      </div>
    </footer>
  )
}

export default Footer