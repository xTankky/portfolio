import React from 'react'
import './About.css'
import '../MyCarousel.css'

const About = () => {
    return (
        <div className="Slider-Wrapper">
            <span>Vous êtes sur mon site <strong>Portfolio</strong>.</span>
            <br />
            <br />
            <span>
                Ici, vous pouvez avoir un aperçu <br />
                de mon parcours scolaire et professionnel <br />
                ainsi que de mes compétences à créer un site Web
            </span>
            <br />
            <br />
            <span className="About-Span-1">PS : Je ne suis pas un Designer ! L'esthétique n'est pas au top !</span>
        </div>
    )
}

export default About
