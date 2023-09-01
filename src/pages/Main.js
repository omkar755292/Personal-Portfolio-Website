import React from 'react'
import Home from './Home'
import Blogs from './Blogs'
import Projects from './Projects'
import Events from './Events'
import Contact from './Contact'
import Error from './Error'
import { Route, Routes } from 'react-router-dom'

const Main = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Events />} />
        <Route exact path='/blog' element={<Blogs />} />
        <Route exact path='/project' element={<Projects/>} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Routes>
      </Routes>

    </>
  )
}

export default Main