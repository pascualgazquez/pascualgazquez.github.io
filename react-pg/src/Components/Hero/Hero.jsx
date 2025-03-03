import React from 'react'
import './Hero.css'


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
          <>
          My name is {" "}
          <span style={{fontWeight: "bold"}}>
            Pascual Gázquez
          </span>{" "}
          and I am a game developer from Spain.
          <br />
          I specialize in character design and 2D art.
          <br />
          And I also make music.
          </>
        </p>
      </div>
    </div>
  )
}

export default Hero
