import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

import project1 from '../../assets/carousel/project1.jpeg'
import project2 from '../../assets/carousel/project2.png'
import project3 from '../../assets/carousel/project3.gif'

const Carousel = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100" src={project1} alt='' />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={project1} alt='' />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={project1} alt='' />
      </CCarouselItem>
    </CCarousel>
  )
}

export default Carousel