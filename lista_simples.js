'use client'

import { useState } from "react"

export default function Teste(){

  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  // Atualiza o input
  const digitar = (e) => {
    setNome(e.target.value);
  };

  // Adiciona um novo item à lista
  const adicionar = () => {
    if(nome === ""){
      alert("Digite um nome!");
    } else {
      setLista([...lista, nome]);
      setNome("");
    }
  };

  // Remove um item pelo índice
  const remover = (index) => {
    // Filtra todos os itens exceto o clicado
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  return(
    <div>
      <input value={nome} onChange={digitar} />
      <button onClick={adicionar}>Adicionar</button>
      
      <ul>
        {lista.map((n, i) => (
          <li key={i}>
            {n} 
            <button onClick={() => remover(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
