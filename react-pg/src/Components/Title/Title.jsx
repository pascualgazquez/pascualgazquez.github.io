import React from 'react'
import './Title.css'

const Title = ({src}) => {
  return (
    <div className='title'>
        <img src={src} className='titleimg'></img>
    </div>
  )
}

export default Title
