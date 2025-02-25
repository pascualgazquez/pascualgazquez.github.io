import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import ProjectCarousel from './Components/Carousel/ProjectCarousel'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'

import projects from './assets/titles/projects.gif'
import more from './assets/titles/more.gif'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>
        <Title src={projects}/>
        <ProjectCarousel/>
      </div>

      <div className='container'>
        <Title src={more}/>
        <Projects/>
      </div>

      <Footer/>

    </div>
  )
}

export default App