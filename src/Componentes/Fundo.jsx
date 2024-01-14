import '../Fundo.css'
import React, { useState, useEffect } from 'react';

export default function Fundo(){

    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    

    useEffect(() => {
        let div = document.querySelector('.local')
        
        div.style.backgroundImage = `linear-gradient(109deg, ${cor1}, ${cor2}`

    }, [cor1, cor2]);



    return(
        <div className="color">
            <label htmlFor="">Monte seu degradê na DIV abaixo escolhendo 2 cores</label><br/><br/>
            <input type="color" onChange={e=> setCor1(e.target.value)} />
            <input type="color" onChange={e=> setCor2(e.target.value)} />

            <div className='local'>

            </div>
        </div>

        
    )
}