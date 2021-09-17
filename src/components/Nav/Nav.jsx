import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Links = [
    ["Portfolio", "/"],
    ["Plus d'infos", "/more"],
    ["Cloud", "/owncloud"],
]

const MyLink = (props) => {
    return (
        <li
            onClick={props.onClick}
            className={props.active ? "Nav-Active" : null}
        >
            <Link to={props.path}>
                {props.name}
            </Link>
        </li>
    )
}


export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLinks: [true, false, false]
        }
    }

    onClick(i) {
        const activeLinks = this.state.activeLinks.slice();

        for (let j = 0; j < activeLinks.length; j++) {
            activeLinks[j] = false;
        }

        activeLinks[i] = true;

        this.setState({ activeLinks: activeLinks })
    }

    render() {
        return (
            <div className="Nav-Wrapper">
                <ul className="Nav-List">
                    {Links.map((link, i) => (
                        <MyLink
                            key={`Link-${link[1]}`}
                            name={link[0]}
                            path={link[1]}
                            active={this.state.activeLinks[i]}
                            onClick={() => this.onClick(i)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
