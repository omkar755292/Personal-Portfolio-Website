import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <div className='navlink'>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
      <Link to="/authentication"><button>Sing in</button></Link>
    </div>
  )
}

export default Navbar