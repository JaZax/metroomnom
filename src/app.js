import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Metronome from './components/metronome'

const App = () => {

    let [tempo, changeTempo] = useState(100)

    
    window.onload = () => {
        const inputTempoBox = document.getElementById('inputTempoBox')
        const right = document.getElementById('right')
        const left = document.getElementById('left')
        const weirdSlider = document.getElementById('weirdSlider')

        let rightHeight
        let tempoFromInput
        let reversedTempo
        let clicked = false

        inputTempoBox.value = tempo

        function handleInput(){
            let forReverse = []
                    
            for(let i = rightHeight; i > 0; i--){
                forReverse.push(i)
            }
            
            reversedTempo = Math.floor(forReverse[tempoFromInput])
            
            weirdSlider.style.height = (reversedTempo * 2) + 1 + 'px'
            
            changeTempo(reversedTempo)
            inputTempoBox.value = reversedTempo
        }

        document.body.addEventListener('mousemove', (e)=>{
            if(clicked == true){
                tempoFromInput = Math.floor(e.clientY / 2) + 1
                rightHeight = right.offsetHeight / 2 + 1

                handleInput()
            }
        })

        right.addEventListener('mousedown', (e)=>{
            clicked = true
            if(window.innerHeight <= 1024){
                tempoFromInput = Math.floor((e.clientY - left.offsetHeight) / 2) + 1
                rightHeight = right.offsetHeight / 2 + 1

                handleInput()
            }
        })

        right.addEventListener('mouseup', ()=> clicked = false)
       
        inputTempoBox.addEventListener('input', ()=>{
            if(inputTempoBox.value > 0){
                changeTempo(inputTempoBox.value)
                weirdSlider.style.height = (inputTempoBox.value * 2) + 1 + 'px'
            }
        })
    }

    return (
        <>
        
            <div id="left">
                <div id="inputWrap">
                    <input type="number" id="inputTempoBox" min="1" max="500"/>
                </div>
            </div>

            <div id="right">
                <div id="header">change BPM here</div>
                <div id="weirdSlider"></div>
            </div>

            <Metronome tempoVal={tempo}></Metronome>

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))

