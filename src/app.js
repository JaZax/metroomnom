import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    window.onload = () => {
        const inputTempoBox = document.getElementById('inputTempoBox')
        const right = document.getElementById('right')

        let tempoFromInput
        let reversedTempo

        inputTempoBox.value = tempo

        right.addEventListener('mousedown', (e)=>{
            tempoFromInput = Math.floor(e.clientY / 2) + 1
            let rightHeight = right.offsetHeight / 2 + 1

            let forReverse = []

            for(let i = rightHeight; i > 0; i--){
                forReverse.push(i)
            }

            reversedTempo = Math.floor(forReverse[tempoFromInput])

            console.log(reversedTempo)

            changeTempo(reversedTempo)
            inputTempoBox.value = reversedTempo
        })

        inputTempoBox.addEventListener('input', ()=>{
            if(inputTempoBox.value > 0){
                changeTempo(inputTempoBox.value)
                console.log(reversedTempo)
            }
        })
    }

    return (
        <>
        
            <div id="left">
                <input type="number" id="inputTempoBox" min="1" max="500"/>
            </div>

            <div id="right">
                {//<input type="range" id="inputTempo" min="1" max="500"/>
                }
            </div>

            <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))