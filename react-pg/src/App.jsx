import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import ProjectCarousel from './Components/Carousel/ProjectCarousel'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'

import projects from './assets/titles/projects.gif'
import more from './assets/titles/more.gif'
import skills from './assets/titles/skills.gif'

const App = () => {

  const colorProjects = "#f0f0f0";
  const colorSkills = "#d4d4d4";
  const colorMore = "#f0f0f0";

  return(
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'
      style={{ backgroundColor: colorProjects }}
      >
        <Title src={projects}/>
        <ProjectCarousel/>
      </div>

      <div className='container'
      style={{ backgroundColor: colorSkills}}
      >
        <Title src={skills}/>
        <Skills/>
      </div>

      <div className='container'
      style={{ backgroundColor: colorMore}}
      >
        <Title src={more}/>
        <Projects/>
      </div>

      <Footer/>

    </div>
  )
}

export default App