import React from 'react'
import './Footer.css'

import icon from '../../assets/icon.gif'

const Footer = () => {
  return(
    
    <footer style={{backgroundColor: "transparent"}}>
      <div className="foot">
      <div className="f-left">
        <p>© PASCUALGA</p>
      </div>
      <div className="f-middle">
        <img className='f-img' src={icon}></img>
      </div>
      <div className="f-right">
        <p>★</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer