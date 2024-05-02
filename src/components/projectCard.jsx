import React from 'react'

function ProjectCard({Project,index}) {
  return (
    <div className='card col-3' key={index}>
        <h3>{Project.title}</h3>
        <p>{Project.desc}</p>
    </div>
  )
}

export default ProjectCard
