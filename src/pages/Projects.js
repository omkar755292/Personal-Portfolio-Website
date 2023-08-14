import React from 'react'
import ProjectCard from '../component/ProjectCard'

const Projects = () => {
  return (
    <div className='project-section'>
      <div className='project-info'>
        <h2>My Recent Work</h2>
        <p>Here are a few past projects I've worked on. Want to see more? </p>
      </div>
      <div className='project-container'>
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard /> 
      </div>
    </div>
  )
}

export default Projects