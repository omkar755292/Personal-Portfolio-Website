import React from 'react'
import Home from './Home'
import Blogs from './Blogs'
import Projects from './Projects'
import Contact from './Contact'
import Error from './Error'
import { Route, Routes } from 'react-router-dom'
import About from './About'

const Main = () => {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blog' element={<Blogs />} />
        <Route exact path='/project' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Routes>
      </Routes>

    </div>
  )
}

export default Main