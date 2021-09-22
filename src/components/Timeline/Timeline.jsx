import React from 'react';
import { useMediaQuery } from 'react-responsive'
import './Timeline.css'
import { Card } from '../'
import { Cards_Contents } from './Cards-Content';
import Arrow from './arrow.png'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 })
    return isMobile ? children : null
}

const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 768 })
    return isTablet ? children : null
}

const SmallScreen = ({ children }) => {
    const isSmallScreen = useMediaQuery({ minWidth: 769, maxWidth: 1200 })
    return isSmallScreen ? children : null
}

const LargeScreen = ({ children }) => {
    const isLargeScreen = useMediaQuery({ minWidth: 1201 })
    return isLargeScreen ? children : null
}

const Cards = Cards_Contents.map((val, i) => (
    <Card
        id={`Card-${i}`}
        year={val.year}
        title={val.title}
        desc={val.desc}
    />
))

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedCards: [0, [0, 1], [0, 1, 2], [0, 1, 2, 3]],
        }
    }

    swipe(direction) {
        let displayedCards = this.state.displayedCards.slice();
        let scroll = (direction === "RIGHT") ? 1 : -1;

        displayedCards[0] = Math.min(Math.max(displayedCards[0] + scroll, 0), Cards.length - 1)

        for (let i = 1; i < displayedCards.length; i++) {
            for (let j = 0; j < displayedCards[i].length; j++) {
                displayedCards[i][j] = Math.min(Math.max(displayedCards[i][j] + scroll, j), j + Cards.length - i - 1)
            }
        }

        this.setState({
            displayedCards: displayedCards
        })
    }

    renderCard(display) {
        return (
            <>
                <Mobile>
                    {Cards[display[0]]}
                </Mobile>
                <Tablet>
                    {Cards[display[1][0]]}
                    {Cards[display[1][1]]}
                </Tablet>
                <SmallScreen>
                    {Cards[display[2][0]]}
                    {Cards[display[2][1]]}
                    {Cards[display[2][2]]}
                </SmallScreen>
                <LargeScreen>
                    {Cards[display[3][0]]}
                    {Cards[display[3][1]]}
                    {Cards[display[3][2]]}
                    {Cards[display[3][3]]}
                </LargeScreen>
            </>
        )
    }

    render() {
        return (
            <div className="Timeline-Wrapper">
                <div><input className="Timeline-Button Timeline-Prev" type="image" src={Arrow} alt="" onClick={() => this.swipe("LEFT")} /></div>
                <div className="Timeline-Cards">
                    {this.renderCard(this.state.displayedCards)}
                </div>
                <div><input className="Timeline-Button Timeline-Next" type="image" src={Arrow} alt="" onClick={() => this.swipe("RIGHT")} /></div>
            </div>
        )
    }
}
