import React, { useState } from "react";

export default function Contador() {
  const [jogador, setPlayer] = useState(0);

  function increment() {
    setPlayer(jogador + 1);
  }

  function decrement() {
    if (jogador !== 0) {
      setPlayer(jogador - 1);
    }
  }

  function clean() {
    setPlayer(jogador - jogador);
  }

  return (
    <div>
      <h3>Pontuação: {jogador}</h3>
      <button onClick={increment} className="Operation">
        +
      </button>
      <button onClick={decrement} className="Operation">
        -
      </button>
      <button onClick={clean} className="Clean">
        Zerar
      </button>
    </div>
  );
}
