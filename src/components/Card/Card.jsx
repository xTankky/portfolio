import React from 'react';
import './Card.css'

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            up: false
        }
    }

    render() {
        return (
            <div
                className={this.state.up ? "Card-Wrapper Card-Up" : "Card-Wrapper"}
                onMouseEnter={() => this.setState({ up: true })}
                onMouseLeave={() => this.setState({ up: false })}
            >
                <div className="Card-Header">
                    <div className="Card-Header-Year">
                        {this.props.year}
                    </div>
                    <div className="Card-Header-Title">
                        {this.props.title}
                    </div>
                </div>
                <hr />
                <div className="Card-Body">
                    {
                        Array.isArray(this.props.desc) ?
                            (
                                <ul>
                                    {this.props.desc.map((line) => (
                                        <li>{line}</li>
                                    ))}
                                </ul>

                            ) :
                            this.props.desc
                    }
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    year: "0000",
    title: "Title",
    desc: "Description"
}