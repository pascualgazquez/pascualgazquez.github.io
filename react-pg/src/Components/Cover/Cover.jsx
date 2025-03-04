import React from 'react'
import "./Cover.css"

const Cover = ({color, title, picture}) => {
  return (
    <div className="cocover" style={{ backgroundColor: color }}>
        <img className="imagen1" src={title}></img>
    </div>
  )
}

export default Cover
