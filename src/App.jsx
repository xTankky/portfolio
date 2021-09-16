import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Timeline, MyCarousel, Nav, More } from './components'
import './index.css'

const Home = () => {
    return (
        <>
            <MyCarousel />
            <Timeline />
        </>
    )
}

const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/more" component={More} />
                <Route path="/owncloud" />
            </Switch>

        </Router>
    )
}

export default App
