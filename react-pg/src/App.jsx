import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Carousel from './Components/Carousel/Carousel'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>
        <Title title='Projects'/>
        <Carousel/>
      </div>

      <div className='container'>
        <Title title='More'/>
        <Projects/>
      </div>

    </div>
  )
}

export default App