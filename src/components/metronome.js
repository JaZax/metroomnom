import React from 'react'
import Pizzicato from 'pizzicato'

console.log(Pizzicato)

let sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'sine',
        frequency: 1000
    }
})

const Metronome = (props) => {

    let tempo = props.tempoVal

    let click = ()=>{

        console.log('elo')
        sound.play()

        setTimeout(()=>{
            sound.stop()
        }, 10)

        setTimeout(click, tempo)
    }

    setTimeout(click, tempo)

    return (
        <h1 className="placeholder">{tempo}</h1>
    )
}

export default Metronome