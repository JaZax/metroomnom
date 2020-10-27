import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    window.onload = () => {
        document.getElementById('inputTempo').addEventListener('input', ()=>{
            changeTempo(inputTempo.value)
            document.getElementById('inputTempoBox').value = document.getElementById('inputTempo').value
        })

        window.addEventListener('keydown', (e)=>{
            if(e.key == 'Enter'){
                document.getElementById('inputTempo').value = document.getElementById('inputTempoBox').value
                changeTempo(inputTempo.value)
            }
        })
    }

    //document.getElementById('inputTempoBox').value = document.getElementById('inputTempo').value

    return (
        <>
            
            <div id="left">
                <input type="number" id="inputTempoBox"/>
            </div>

            <div id="right">
                <input type="range" id="inputTempo" min="1" max="400"/>
            </div>

            <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))