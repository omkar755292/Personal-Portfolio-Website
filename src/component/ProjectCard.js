import React from 'react'
import projectImg from '../asset/images/img-projects/web-design.jpg'

const ProjectCard = (props) => {
  const handleButtonClick = () => {
    window.location.href = 'http://localhost:5001/'; // Change this to your desired link
  };
  return (
    <div className='project'>
      <div><img src={projectImg} alt="projectImg" /></div>
      <p>{props.project.title}</p>
      <p>{props.project.description}</p>
      <div><button onClick={handleButtonClick}> view </button></div>
    </div>
  )
}

export default ProjectCard