import React from 'react'
import './Contact.css'
import '../MyCarousel.css'

const Contact = () => {
    return (
        <div className="Slider-Wrapper">
            <span>Je suis à la recherche d'un emploi !</span>
            <span className="Contact-List-Title">Contact :</span>
            <ul className="Contact-List">
                <li><a href="tel: +33616367579">+33616367579</a></li>
                <li><a href="mailto: jonathanvgr27@gmail.com">jonathanvgr27@gmail.com</a></li>
            </ul>
            <br />
            <span className="Contact-More">
                + d'informations sur le site Web
                sont disponibles dans le README sur le Github
            </span>
        </div>
    )
}

export default Contact
