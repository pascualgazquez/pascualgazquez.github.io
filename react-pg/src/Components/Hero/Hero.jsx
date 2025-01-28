import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edu/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          Hello
        </h1>
        <p>
          My name is Pascual Gázquez and I am a game developer from Spain.
        </p>
        <button className='btn'>
          Explore More 
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
