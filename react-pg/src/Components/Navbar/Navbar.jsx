import React, { useState, useEffect } from 'react'
import './Navbar.css'

import logo from '../../assets/edu/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About</li>
        <li>Test</li>
        <li><button className ='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
