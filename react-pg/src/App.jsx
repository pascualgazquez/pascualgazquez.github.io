import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Projects/>
      </div>
    </div>
  )
}

export default App