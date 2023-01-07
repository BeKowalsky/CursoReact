import React from 'react';
import UserContext from './UserContext';

const Produto = () => {
  const dados = React.useContext(UserContext);

  return <div>{dados.nome}</div>;
};

export default Produto;
