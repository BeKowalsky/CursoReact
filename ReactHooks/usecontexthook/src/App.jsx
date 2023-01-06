import React from 'react';
import Produto from './Produto';
import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';
import ProdutoDois from './ProdutoDois';

function App() {
  console.log(UserContext);
  return (
    <>
      <UserContext.Provider value={{ nome: 'Bernardo' }}>
        <Produto />
      </UserContext.Provider>
      <GlobalStorage>
        <ProdutoDois />
      </GlobalStorage>
    </>
  );
}

export default App;
