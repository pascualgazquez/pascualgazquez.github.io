import React from 'react'
import './Projects.css'
import Project from './Project.jsx'

import mune from '../../assets/mune.gif'
import sho from '../../assets/sho.gif'
import music from '../../assets/titles/music.gif'
import art from '../../assets/titles/dart.gif'

const Projects = () => {
  return (
    <div className="projects">
      <Project image={mune} captionImage={art} bgColor="rgba(255, 0, 0, 0.1)" />
      <Project image={sho} captionImage={music} bgColor="rgba(0, 255, 0, 0.1)" />
    </div>
  )
}

export default Projects
