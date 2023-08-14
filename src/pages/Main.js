import React from 'react'
import Home from './Home'
import Blogs from './Blogs'
import Projects from './Projects'
import Events from './Events'
import Contact from './Contact'
import Error from './Error'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Events />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </>
  )
}

export default Main