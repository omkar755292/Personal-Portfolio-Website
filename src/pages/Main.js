import React from 'react'
import Home from './Home'
import Blogs from './Blogs'
import Projects from './Projects'
import Events from './Events'
import Contact from './Contact'
import Error from './Error'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  const projectlist = [
    {
      title: "blog one title 1111111",
      description: "blog one content 11111111111111111"
    },
    {
      title: "blog one title 222222222",
      description: "blog one content 222222222222"
    }
  ]
  const bloglist = [
    {
      title: "blog one title 1111111",
      content: "blog one content 11111111111111111",
      author: "omkar panchal "
    },
    {
      title: "blog one title 222222222",
      content: "blog one content 222222222222",
      author: "omkar panchal 2"
    }
  ]

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Events />} />
        <Route exact path='/blog' element={<Blogs blogs={bloglist} />} />
        <Route exact path='/project' element={<Projects projects={projectlist} />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Routes>
      </Routes>

    </>
  )
}

export default Main