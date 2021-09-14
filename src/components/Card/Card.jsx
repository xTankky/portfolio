import React from 'react';
import './Card.css'

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            raise: false,
            raiseStyle: {
                transform: `translate(0px, 0px)`
            }
        }
    }

    raiseCard() {
        const raised = this.state.raise;
        const height = raised ? 0 : document.getElementById(this.props.id).clientHeight - 72; //72 pour prendre en compte le header qui dépasse

        const style = {
            transform: `translate(0px, -${height}px)`
        }

        this.setState({ raise: !raised, raiseStyle: style })
    }

    render() {

        return (
            <div
                id={this.props.id}
                className="Card-Wrapper"
                onMouseEnter={() => this.raiseCard()}
                onMouseLeave={() => this.raiseCard()}
                style={this.state.raiseStyle}
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
                                    {this.props.desc.map((line, i) => (
                                        <li key={i}>{line}</li>
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