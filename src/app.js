import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    window.onload = () => {
        const inputTempoBox = document.getElementById('inputTempoBox')
        const right = document.getElementById('right')
        const weirdSlider = document.getElementById('weirdSlider')

        let tempoFromInput
        let reversedTempo
        let clicked = false

        inputTempoBox.value = tempo

        document.body.addEventListener('mousemove', (e)=>{
            console.log(clicked)

            if(clicked == true){
                tempoFromInput = Math.floor(e.clientY / 2) + 1
                let rightHeight = right.offsetHeight / 2 + 1
    
                let forReverse = []
            
                for(let i = rightHeight; i > 0; i--){
                    forReverse.push(i)
                }
    
                reversedTempo = Math.floor(forReverse[tempoFromInput])
    
                weirdSlider.style.height = (reversedTempo * 2) + 1 + 'px'
    
                changeTempo(reversedTempo)
                inputTempoBox.value = reversedTempo
            }
        })

        right.addEventListener('mousedown', (e)=>{
            clicked = true
            /*
            
             */
        })

        right.addEventListener('mouseup', ()=>{
            clicked = false
        })
       

        inputTempoBox.addEventListener('input', ()=>{
            if(inputTempoBox.value > 0){
                changeTempo(inputTempoBox.value)
                //weirdSlider.style.height = (reversedTempo * 2) + 1 + 'px'
            }
        })
    }

    return (
        <>
        
            <div id="left">
                <input type="number" id="inputTempoBox" min="1" max="500"/>
            </div>

            <div id="right">
                <div id="weirdSlider"></div>
            </div>

            <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))