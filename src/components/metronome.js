import React from 'react'
import Pizzicato from 'pizzicato'

let sound = new Pizzicato.Sound({
    source: 'wave',
    options: {
        type: 'square',
        frequency: 1000
    }
})

class Metronome extends React.Component {
    constructor(props){
        super(props)

        this.state = {tempo: this.props.tempoVal}
        this.intervals = []
    }

    render(){
        
        for(let i = 0; i < this.intervals.length; i++){
            window.clearInterval(this.intervals[i])
        }

        this.intervals.push(setInterval(()=>{
            console.log('joł')
        }, this.props.tempoVal))

        return(
            <h1>{this.state.tempo}</h1>
        )
    }
}

export default Metronome