import React from 'react'
// import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import Cards from './Cards';
import Footerandmodal from './Footerandmodal';

export default function Slider() {
  return (

    <>
      <h1>Hi , My name is ABHIJIT NAG</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className='text-center'>
            <img
              className="d-block w-100"
              src="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/000/271/024/non_2x/vector-web-development-web-banner.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Cards />
      <Footerandmodal />
    </>
  )
}
