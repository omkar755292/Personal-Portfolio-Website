import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  return (
    <div className='project-card'>
      <div><img src={props.project.projectImagePath} alt="projectImg" /></div>
      <p>{props.project.title}</p>
      <div><button><Link to={`${props.project.projectUrl}`} target="_blank">View</Link></button></div>
    </div>
  )
}

export default ProjectCard