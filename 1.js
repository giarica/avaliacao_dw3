 'use client'

import { useState } from "react";

export default function Votacao() {

  const [bootstrap, setBootstrap] = useState(0);
  const [materialize, setMaterialize] = useState(0);
  const [tailwind, setTailwind] = useState(0);

  const [encerrado, setEncerrado] = useState(false);

  const votarBootstrap = () => {
    if (encerrado) return;

    const novo = bootstrap + 1;
    setBootstrap(novo);

    if (novo === 10) {
      setEncerrado(true);
    }
  }

  const votarMaterialize = () => {
    if (encerrado) return;

    const novo = materialize + 1;
    setMaterialize(novo);

    if (novo === 10) {
      setEncerrado(true);
    }
  }

  const votarTailwind = () => {
    if (encerrado) return;

    const novo = tailwind + 1;
    setTailwind(novo);

    if (novo === 10) {
      setEncerrado(true);
    }
  }

  let resultado = "";

  if (bootstrap > materialize && bootstrap > tailwind)
    resultado = "Bootstrap venceu";

  else if (materialize > bootstrap && materialize > tailwind)
    resultado = "Materialize venceu";

  else if (tailwind > bootstrap && tailwind > materialize)
    resultado = "Tailwind venceu";

  else
    resultado = "Empate";

  const reiniciar = () => {
    setBootstrap(0);
    setMaterialize(0);
    setTailwind(0);
    setEncerrado(false);
  }

  return (
    <div>

      <h2>Escolha sua biblioteca favorita</h2>

      <button onClick={votarBootstrap} disabled={encerrado}>
        Bootstrap
      </button>

      <button onClick={votarMaterialize} disabled={encerrado}>
        Materialize
      </button>

      <button onClick={votarTailwind} disabled={encerrado}>
        Tailwind
      </button>

      {encerrado && (
        <div>

          <h3>Votação encerrada</h3>
          <h3>Resultado: {resultado}</h3>

          <p>Bootstrap: {bootstrap}</p>
          <p>Materialize: {materialize}</p>
          <p>Tailwind: {tailwind}</p>

        </div>
      )}

      <button onClick={reiniciar} disabled={!encerrado}>
        Reiniciar votação
      </button>

    </div>
  );
}
