import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Title from './Components/Title/Title'
import Footer from './Components/Footer/Footer'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>

      <div className='container'>
        <Title title='Projects'/>
      </div>

      <div className='container'>
        <Title title='More'/>
        <Projects/>
      </div>

      <Footer/>

    </div>
  )
}

export default App