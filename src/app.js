import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    window.onload = () => {
        document.getElementById('inputTempoBox').value = tempo
        document.getElementById('inputTempo').addEventListener('input', ()=>{
            changeTempo(inputTempo.value)
            document.getElementById('inputTempoBox').value = document.getElementById('inputTempo').value
        })

        document.getElementById('inputTempoBox').addEventListener('input', ()=>{
            document.getElementById('inputTempo').value = document.getElementById('inputTempoBox').value
            changeTempo(inputTempo.value)
        })
    }

    //document.getElementById('inputTempoBox').value = document.getElementById('inputTempo').value

    return (
        <>
        
            <div id="left">
                <input type="number" id="inputTempoBox" min="1" max="500"/>
            </div>

            <div id="right">
                <input type="range" id="inputTempo" min="1" max="500"/>
            </div>

            <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))