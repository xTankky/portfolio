import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {Timeline, MyCarousel} from './components'

const App = () => {
  return (
    <div>
      <MyCarousel />
      <Timeline />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);