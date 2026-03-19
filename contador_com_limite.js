'use client'

import { useState } from "react"

export default function Teste(){

  const [numero, setNumero] = useState(0);
  const mais = () => {
    if (numero > 10){
    setNumero (numero+1); };
  };
  const menos = () => {
    if (numero < 0){
    setNumero (numero-1); };
  };

  return(
    <div>
      <button onClick={mais}>+</button>
      <button onClick={menos}>-</button>
      <p>{numero}<\p>
    <\div>
  )
}
