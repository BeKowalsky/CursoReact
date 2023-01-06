import React from 'react';
import { GlobalContext } from './GlobalContext';

const ProdutoDois = () => {
  const dados = React.useContext(GlobalContext);

  const handleClick = () => {
    dados.setContar((contar) => contar + 1);
  };

  return (
    <div>
      <h1>Nome: {dados.nome}</h1>
      <p>{dados.contar}</p>
      <button onClick={handleClick}>Acrescentar</button>
    </div>
  );
};

export default ProdutoDois;
