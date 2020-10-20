import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    return (
        <div className="App" >
            
            <input type="number" id="inputTempo"/>

        <Metronome></Metronome>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))