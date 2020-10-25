import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    window.onload = () => {
        document.getElementById('inputTempo').addEventListener('input', ()=>{
            changeTempo(inputTempo.value)
        })
    }

    return (
        <>
            <h1>{tempo}</h1>
            <input type="range" id="inputTempo" min="1" max="300"/>

        <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))