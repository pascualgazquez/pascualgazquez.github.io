import React, { useState, useEffect } from 'react'
import './Navbar.css'

import NuButton from '../NuButton/NuButton'

import bg from '../../assets/navbarbg.gif'
import logo from '../../assets/logo.gif'

import itch from '../../assets/social/itch.png'
import github from '../../assets/social/github.png'
import linkedin from '../../assets/social/linkedin.png'
import mail from '../../assets/social/mail.png'

const Navbar = () => {

  const [hoveredButton, setHoveredButton] = useState('');
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 1080 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo"/>
       <ul>

        {/* TEXTO ............................... */}
        <li className="hovered-text">{hoveredButton}</li>

        {/* ITCH.IO ............................. */}
        <li
          onMouseEnter={() => setHoveredButton('ITCH.IO')}
          onMouseLeave={() => setHoveredButton('')}
        >
          <NuButton
            name="ITCH.IO"
            color="#fa5c5c"
            link="https://pascualga.itch.io/"
            imgSrc={itch}
          />
        </li>

        {/* GITHUB .............................. */}
        <li
          onMouseEnter={() => setHoveredButton('GITHUB')}
          onMouseLeave={() => setHoveredButton('')}
        >
          <NuButton
            name="GITHUB"
            color="#5c6bc0"
            link="https://github.com/pascualgazquez"
            imgSrc={github}
          />
        </li>

        {/* LINKEDIN ............................ */}
        <li
          onMouseEnter={() => setHoveredButton('LINKEDIN')}
          onMouseLeave={() => setHoveredButton('')}
        >
          <NuButton
            name="LINKEDIN"
            color="#0274b3"
            link="https://linkedin.com/in/pascualgazquez/"
            imgSrc={linkedin}
          />
        </li>

        {/* CONTACTO ............................ */}
        <li
          onMouseEnter={() => setHoveredButton('GET IN CONTACT!')}
          onMouseLeave={() => setHoveredButton('')}
        >
          <NuButton
            name="CONTACTO"
            color="#9979d3"
            link="mailto:pascual.gazquez.compan@gmail.com"
            imgSrc={mail}
          />
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
