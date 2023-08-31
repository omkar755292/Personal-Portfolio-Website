import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../asset/images/logo.svg'

const Logo = () => {
  return (
    <div className='logo'><Link to="/"><img src={logo} alt="" srcset="" /></Link></div>
  )
}

export default Logo