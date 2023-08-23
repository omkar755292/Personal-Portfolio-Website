import React from 'react'
import projectImg from '../asset/images/img-projects/web-design.jpg'

const ProjectCard = () => {
  return (
    <div className='project'>
        <div><img src={projectImg} alt="projectImg" /></div>
        <p>Best Android App_Develo Framework.</p>
        <div><button>view</button></div>
    </div>
  )
}

export default ProjectCard