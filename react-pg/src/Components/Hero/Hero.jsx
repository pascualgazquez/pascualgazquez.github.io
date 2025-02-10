import React from 'react'
import './Hero.css'

import dark_arrow from '../../assets/edu/dark-arrow.png'
import pfp from '../../assets/circle.png'

const Hero = () => {
  return (
    <div className='hero container'>

      <div className ='hero-left'>
        <img src={pfp} alt="" className='pfp'></img>
      </div>

      <div className='hero-right'>
        <h1>
          Hello
        </h1>
        <p>
          My name is Pascual Gázquez and I am a game developer from Spain.
        </p>
      </div>
    </div>
  )
}

export default Hero
