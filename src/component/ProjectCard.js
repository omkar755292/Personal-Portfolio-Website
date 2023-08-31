import React from 'react'
import projectImg from '../asset/images/img-projects/web-design.jpg'

const ProjectCard = (props) => {
  return (
    <div className='project'>
        <div><img src={projectImg} alt="projectImg" /></div>
        <p>{props.project.title}</p>
        <p>{props.project.description}</p>
        <div><button>view</button></div>
    </div>
  )
}

export default ProjectCard