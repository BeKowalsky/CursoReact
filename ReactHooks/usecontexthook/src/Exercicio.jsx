// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React from 'react';
import { ExercicioContext } from './ExercicioContext';

export default function Exercicio() {
  const dados = React.useContext(ExercicioContext);
  console.log(dados);

  const handleClick = () => {
    dados.limparDados();
  };

  const handleAddProduct = () => {
    dados.setProduto([
      ...dados.produto,
      {
        id: 'ferrari-1',
        nome: 'Ferrari',
        preco: '225000',
        descricao: 'Veloz, Confortável, Prazeroso',
      },
    ]);
  };
  return (
    <div style={{ marginTop: '50px' }}>
      <button onClick={handleClick}>Limpar Carrinho</button>
      <button onClick={handleAddProduct}>Adicionar Ferrari ao carrinho</button>
      <ul>
        {dados.produto?.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>R${produto.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
