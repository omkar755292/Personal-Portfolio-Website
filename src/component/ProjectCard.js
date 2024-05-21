import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  return (
    <div className='project-card'>
      <div className='image-container'>
        <img src={props.project.projectImagePath} alt="projectImg" />
        <div className='overlay'>
          <p>{props.project.title}</p>
        </div>
      </div>
      <div> <Link to={`${props.project.projectUrl}`} target="_blank"> <button className='project-view-button'>View</button></Link> </div>
    </div>
  )
}

export default ProjectCard