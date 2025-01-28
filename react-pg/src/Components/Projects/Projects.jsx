import React from 'react'
import './Projects.css'

import pro_1 from '../../assets/edu/program-1.png'
import pro_2 from '../../assets/edu/program-2.png'
import pro_3 from '../../assets/edu/program-3.png'

import pro_icon_1 from '../../assets/edu/program-icon-1.png'
import pro_icon_2 from '../../assets/edu/program-icon-2.png'
import pro_icon_3 from '../../assets/edu/program-icon-3.png'

const Projects = () => {
  return (
    <div className='projects'>

        {/*PROJECT1*/}
      <div className="project">
        <img src={pro_1} alt=''/>
        <div className="caption">
            <img src={pro_icon_1} alt="" />
            <p>2D ART</p>
        </div>
      </div>

      <div className="project">
        <img src={pro_2} alt=''/>
        <div className="caption">
            <img src={pro_icon_2} alt="" />
            <p>3D ART</p>
        </div>
      </div>

      <div className="project">
        <img src={pro_3} alt=''/>
        <div className="caption">
            <img src={pro_icon_3} alt="" />
            <p>MUSIC</p>
        </div>
      </div>

    </div>
  )
}

export default Projects
