import React, { Component } from 'react';

export default class Cont extends Component{
    constructor(){
        super()
        this.state = {
            contador: 0
        }
    }

     incrementar = ()=>{

        this.setState({contador: this.state.contador + 1})
    }

    diminuir =()=>{
        if(this.state.contador >= 1){
            this.setState({contador: this.state.contador - 1})
        }
        
    }

    render(){
        return(
            <div>
                <p>Contador com componente de classe</p>
                <p>Contador: {this.state.contador}</p>
                <button type='button' onClick={this.incrementar}>Aumentar</button>
                <button type='button' onClick={this.diminuir}>Diminuir</button>

                <br /><br /><br />
            </div>
        )
    }
}