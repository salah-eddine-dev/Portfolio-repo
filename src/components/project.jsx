import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from './projectCard'

function Project() {

    const projects = [
        {title:"project css html", desc:'consectetur adipisicing elit. Quos fugiat error sequi voluptate '},
        {title:"project css", desc:'consectetur adipisicing elit. Quos fugiat error sequi voluptate '},
        {title:"project javascript", desc:'consectetur adipisicing elit. Quos fugiat error sequi voluptate '},
        {title:"project laravel", desc:'consectetur adipisicing elit. Quos fugiat error sequi voluptate '},
        {title:"diagramme class store", desc:'consectetur adipisicing elit. Quos fugiat error sequi voluptate '}
    ]

    return (
        
        <div>
            <h3 className='text-center my-3'>My Projects</h3>
            <div className='row gap-1 justify-content-center'>
            {projects.map((item,index)=>(
                <ProjectCard Project={item} index={index} key={index} />
            ))}
        </div>
        </div>
    )
}

export default Project
