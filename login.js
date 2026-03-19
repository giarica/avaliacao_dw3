'use client'

import { useState } from "react"

export default function Teste(){

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = () => {
    if (login === ""){
      alert ("erro!")
      return;}
    
    if (senha === ""){
      alert ("erro!")
      return;}
      alert ("login feito com sucesso")};

  const botaoHabilitado = login !== "" && senha !== "";
  
  return(
    <div>
    <input value={login} onChange={(e) => setLogin(e.target.value)}/> <br></br>
    <input value={senha} onChange={(e) => setSenha(e.target.value)}/> <br></br>
    <button onClick={fazerLogin} disabled={!botaoHabilitado}> login </button>
    </div>
  )
}
