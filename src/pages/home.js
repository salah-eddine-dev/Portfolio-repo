import React, { createContext } from 'react'
import NavBar from '../components/navBar';
import Section1 from '../components/section1';
import Project from '../components/project';
import 'bootstrap/dist/css/bootstrap.min.css'



function Home() {
  return (
    <div>
        <NavBar />
        <Section1 />
        <Project />
    </div>
  )
}

export default Home
