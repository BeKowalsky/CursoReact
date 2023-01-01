import React, { useState } from 'react';
import Produto from './Produto';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border-2 bg-slate-50 active:bg-slate-100"
    >
      {children}
    </button>
  );
};

export default function Exercicio() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <div className="mt-4 flex space-x-2">
        <Button onClick={handleClick}>Tablet</Button>
        <Button onClick={handleClick}>Smartphone</Button>
        <Button onClick={handleClick}>Notebook</Button>
      </div>
      {carregando && <p className="mt-2">Carregando...</p>}
      {dados && <Produto dados={dados} />}
    </div>
  );
}
