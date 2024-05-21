import '../asset/css/projectpage.css'
import React, { useEffect, useState } from 'react'
import api from '../api/api';
import ProjectCard from '../component/ProjectCard'

const Projects = (props) => {
  const [projects, setProject] = useState([]);
  const retriveProjects = async () => {
    const response = await api.get('/api/project');
    return response.data;
  }

  useEffect(() => {
    //Get all Project
    const getAllProjects = async () => {
      const allProject = await retriveProjects();
      setProject(allProject);
    }
    getAllProjects();

  }, [])

  //Render Project function
  const renderProject = projects.map((project) => {
    return <ProjectCard key={project.id} project={project} />
  });
  return (
    <div className='project-section'>
      <div className='project-info'>
        <h2>My Recent Work</h2>
        <p>Here are a few past projects I've worked on. Want to see more? <a href='https://dribbble.com/omkar13021' target='blank'>click here</a> </p>
      </div>
      <div className='project-container'>
        {renderProject}
      </div>
    </div>
  )
}

export default Projects