import React from 'react';
import { ExercicioContext } from './ExercicioContext';

export default function AddMercedes() {
  const { setProduto, produto } = React.useContext(ExercicioContext);

  const handleClick = () => {
    if (produto !== null) {
      setProduto([
        ...produto,
        {
          id: 'mercedes-1',
          nome: 'Mercedes',
          preco: '500000',
          descricao: 'Veloz, Confortável, Prazeroso',
        },
      ]);
    } else {
      setProduto([
        {
          id: 'mercedes-1',
          nome: 'Mercedes',
          preco: '500000',
          descricao: 'Veloz, Confortável, Prazeroso',
        },
      ]);
    }
  };
  return (
    <button style={{ marginLeft: '15px' }} onClick={handleClick}>
      Adicionar Mercedes ao carrinho
    </button>
  );
}
