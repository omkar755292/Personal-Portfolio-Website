import React from 'react'
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'><img src={logo} alt="" srcset="" /></div>
      <div className='navlink'>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/blog">Blogs</a>
        <a href="/project">Projects</a>
        <a href="/contact">Contact Me</a>
      </div>
      <div><button>Sing in</button></div>
    </div>
  )
}

export default Navbar