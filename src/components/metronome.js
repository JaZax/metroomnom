import React from 'react'
import Pizzicato from 'pizzicato'

let sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'triangle',
        frequency: 500,
    }
})

class Metronome extends React.Component {
    constructor(props){
        super(props)

        this.intervals = []
    }

    render(){
        
        for(let i = 0; i < this.intervals.length; i++){
            window.clearInterval(this.intervals[i])
        }

        this.intervals.push(setInterval(()=>{
            sound.play()

            setTimeout(()=>{
                sound.stop()
            }, 100)

        }, 60000 / this.props.tempoVal))

        return(true)
    }
}

export default Metronome