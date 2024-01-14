import '../Form.css';
import React, { useState } from 'react';

export default function Formulario() {

    const [texto,setTexto] = useState('')
    const [animado, setAnimado] = useState('')
    const [tempo, setTempo] = useState('')

    const maquinaEscrever = ()=>{
        let frase = ''
        let lista = texto.split('')
        let num = ''

        if(tempo === 'Lento'){
          num = 180
        }
        else if(tempo === 'Médio'){
            num = 80
        }
        else{
            num = 40
        }

     

       lista.forEach((letra, indice)=>{

        setTimeout(()=>{
            
            frase += letra
            setAnimado(frase)
        }, num * indice)

       })
    }

    return(
        <div>
            <form>

             <fieldset>

                <legend>Fomulário animado</legend>

                <label htmlFor="">Digite um texto para mim animar</label><br /> <br />
                <input type="text" onChange={e=> setTexto(e.target.value)} />  <br /> <br />

                <label htmlFor="">Selecione a velociadade da animação</label><br /> <br/>

                <select name="" id="velocidade" onChange={e=> setTempo(e.target.value)}>

                    <option value=""></option>
                    <option value="Lento">Lento</option>
                    <option value="Médio">Médio</option>
                    <option value="Rápido">Rápido</option>
                </select>

                <p className='btn' onClick={maquinaEscrever}>Animar</p>

             </fieldset>

            </form>
            <h1>{texto}</h1>

            <h2>{animado}</h2>
        </div>
    )
}