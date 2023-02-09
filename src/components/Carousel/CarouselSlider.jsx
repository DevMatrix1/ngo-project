import React from 'react'
import Carousel from 'better-react-carousel'
import "./CarouselSlider.css"


import image1 from './images/img-1.jpg'
import image2 from './images/img-2.jpg'
import image3 from './images/img-3.jpg'
import image4 from './images/img-4.jpg'

export const CarouselSlider = () => {
  
  return (
    <Carousel className='carousel' cols={1} rows={1} loop autoplay={3000}  showDots dotColorActive={'black'}>
      <Carousel.Item>
        <img width="1200px" src={image1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="1200px" src={image2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="1200px" src={image3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="1200px" src={image4} />
      </Carousel.Item>
    </Carousel>
  )
}
