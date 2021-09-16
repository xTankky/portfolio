import React from 'react'
import './Nav.css'

const url = "http://localhost:3000"

const Nav = (props) => {
    return (
        <div className="Nav-Wrapper">
            <ul className="Nav-List">
                <li className="Nav-Active"><a href={`${url}`}>Portfolio</a></li>
                <li><a href={`${url}/more`}>Plus d'infos</a></li>
                <li><a href={`${url}/owncloud`}>Cloud</a></li>
            </ul>
        </div>
    )
}

export default Nav
