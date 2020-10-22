import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(50)

    window.onload = () => {
        document.getElementById('inputTempo').addEventListener('input', ()=>{
            changeTempo(inputTempo.value)
        })
    }

    return (
        <div className="App" >
            
            <input type="range" id="inputTempo"/>

            <h1>{tempo}</h1>

        <Metronome></Metronome>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))