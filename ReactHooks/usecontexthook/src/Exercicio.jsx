// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React from 'react';
import AddMercedes from './AddMercedes';
import { ExercicioContext } from './ExercicioContext';

export default function Exercicio() {
  const dados = React.useContext(ExercicioContext);

  const handleClick = () => {
    dados.limparDados();
  };

  const handleAddProduct = () => {
    if (dados.produto !== null) {
      dados.setProduto([
        ...dados.produto,
        {
          id: 'ferrari-1',
          nome: 'Ferrari',
          preco: '225000',
          descricao: 'Veloz, Confortável, Prazeroso',
        },
      ]);
    } else {
      dados.setProduto([
        {
          id: 'ferrari-1',
          nome: 'Ferrari',
          preco: '225000',
          descricao: 'Veloz, Confortável, Prazeroso',
        },
      ]);
    }
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <button onClick={handleClick}>Limpar Carrinho</button>
      <button onClick={handleAddProduct} style={{ marginLeft: '15px' }}>
        Adicionar Ferrari ao carrinho
      </button>
      <AddMercedes />
      <ul>
        {dados.produto?.map((produto, index) => (
          <li key={index}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>R${produto.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
