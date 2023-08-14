import React from 'react'
import projectImg from '../images/img-projects/Game_Development.png'

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