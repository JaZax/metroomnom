import React from 'react'
import Pizzicato from 'pizzicato'

let sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'square',
        frequency: 200
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
            console.log('joł')
            sound.play()

            setTimeout(()=>{
                sound.stop()
            }, 100)

        }, this.props.tempoVal))

        return(
            <h1>{this.props.tempoVal}</h1>
        )
    }
}

export default Metronome