import "../header.css";
import React, { useState } from "react";

export default function Header() {
  const [font, setFont]  = useState("'Courier New', Courier, monospace");

  function trocaFonte() {
    const fonts = [
        "'Arial', sans-serif",
        "'Courier New', Courier, monospace",
        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        "'Times New Roman', Times, serif",
        "'cursive'",
        "'Verdana, Geneva, Tahoma, sans-serif",
        "Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
      ]
    
    let indice = Math.floor(Math.random() * fonts.length)
    
    const newFont = fonts[indice];
    setFont(newFont)
  
  }

  document.body.style.fontFamily = font

  return (
    <header>
      <h1 style={{fontFamily: font}}>Trabalhando com estados em React</h1>
      <button className="btn" onClick={trocaFonte} >Alterar Fonte</button>
    </header>
  );
}


