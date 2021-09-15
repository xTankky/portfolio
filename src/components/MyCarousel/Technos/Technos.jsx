import React from 'react'
import './Technos.css'
import '../MyCarousel.css'

const Technos = () => {
    return (
        <div className="Slider-Wrapper">
            <span className="Technos-List-Title">Les outils utilisés pour créer ce site ont été :</span>
            <ul className="Technos-List">
                <li>ReactJS / HTML / CSS</li>
                <li><a href="https://github.com/xTankky/portfolio">Github</a></li>
                <li>VS Code</li>
                <li>Linux Manjaro KDE</li>
                <li>Stack Overflow</li>
            </ul>
            <br />
            <span className="Technos-Host">Ce site est hebergé sur une RaspberryPi</span>
        </div>
    )
}

export default Technos
