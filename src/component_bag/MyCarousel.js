import React, { Component } from 'react'
import { Button, Carousel } from 'react-bootstrap';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel id={"my-carousel-container"}>
            <Carousel.Item className = {"my-carousel-item"}>
              <div>
                  
              </div>
              <div></div>
              
            </Carousel.Item>
            <Carousel.Item className = {"my-carousel-item"} >
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className = {"my-carousel-item"}>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
