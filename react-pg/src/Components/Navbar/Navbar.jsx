import React, { useState, useEffect } from 'react'
import './Navbar.css'

import NuButton from '../NuButton/NuButton'

import logo from '../../assets/logo.png'
import itch from '../../assets/social/itch.png'
import github from '../../assets/social/github.png'
import linkedin from '../../assets/social/linkedin.png'
import mail from '../../assets/social/mail.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 1000 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo"/>
      <ul>
        <li>
        <NuButton name="ITCH.IO" color= "#fa5c5c"
        link="https://pascualga.itch.io/"
        imgSrc={itch}/>
        </li>
        <li>
        <NuButton name="GITHUB" color= "#5c6bc0"
        link="https://github.com/pascualgazquez"
        imgSrc={github}/>
        </li>
        <li>
        <NuButton name="LINKEDIN" color= "#0274b3"
        link="https://linkedin.com/in/pascualgazquez/"
        imgSrc={linkedin}/>
        </li>
        <li>
        <NuButton name="CONTACTO" color= "#9979d3"
        link="mailto:pascual.gazquez.compan@gmail.com"
        imgSrc={mail}/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
