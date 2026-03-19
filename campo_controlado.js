'use client'

import { useState } from "react"

export default function Teste () {
  
  const [texto, setTexto] = useState("");
    
  const digitar = (e) => {
    setTexto(e.target.value)
  };

  return(
    <div>
    <input onChange={digitar}> </input>
    <p>{texto}</p>
    </div>
  );
}
