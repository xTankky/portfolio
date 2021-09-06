import React from 'react';
import './Card.css'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card-Wrapper">
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
                    {this.props.desc}
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