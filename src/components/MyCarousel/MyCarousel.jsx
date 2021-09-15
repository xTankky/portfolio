import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './MyCarousel.css'
import Presentation from './Presentation/Presentation';
import Contact from './Contact/Contact';
import Technos from './Technos/Technos';
import About from './About/About';

export default class MyCarousel extends Component {
    render() {
        return (
            <Carousel
                showStatus={false}
                // autoPlay={true}
                infiniteLoop={true}
                className="MyCarousel"
            >
                <Presentation />
                <About />
                <Technos />
                <Contact />
            </Carousel>
        )
    }
}
