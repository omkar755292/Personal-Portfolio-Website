import React from 'react'
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <div className='navlink'>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/blog">Blogs</a>
        <a href="/project">Projects</a>
        <a href="/contact">Contact Me</a>
      </div>
      <a href="/authentication"><button>Sing in</button></a>
    </div>
  )
}

export default Navbar